import { utils } from "./utils.ts";

export class Api {
  private apiAccessToken = ``;
  private apiHref = ``;
  constructor(
    private host: ShellHost = "billing",
    private login: string,
    private password: string,
    private club_id: number,
    private regional_code = 7,
  ) {
    this.apiHref = `https://${host}.smartshell.gg/api/GraphQL`;
  }

  /**
     * # `api.call()`
     *
     * Custom GraphQL api call
     * 
     * ``` ts
     *  console.log(await shell.api.call(`
     *  query UserClubs {
     *      userClubs {
     *            id
     *            name
     *            address
     *            tariffName
     *            workShiftStatus
     *            permitted
     *            operatorFirstName
     *            operatorLastName
     *      }
     *  }`))
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
  public async call(query: string, anonymous = false): Promise<ShellResponse> {
    if (!this.apiAccessToken && anonymous === false) {
      await this.getAccessToken();
    }
    const response = await fetch(this.apiHref, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": this.apiAccessToken,
      },
      body: JSON.stringify({
        query,
      }),
    });
    const json = await response.json();
    if (json.errors) {
      const e = json.errors[0];
      throw new Error(`${e.message} at ${e.path} path`);
    }
    return json;
  }

  /**
   * # `api.getAccessToken()`
   *
   * GraphQL api call for getting JWT access token
   *
   * ``` ts
   * console.log(await shell.api.getAccessToken())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getAccessToken(): Promise<string> {
    const query = await this.call(
      `mutation Login {
            login( input: { company_id: ${this.club_id}, password: "${this.password}", login: "${this.regional_code}${this.login}" } ) { 
                access_token 
            }
        }`,
      true,
    );
    this.apiAccessToken = `Bearer ${query.data?.login.access_token}`;
    return this.apiAccessToken;
  }

  /**
   * # `api.getClubs()`
   *
   * GraphQL api call with auth header for getting user club array
   *
   * ``` ts
   * console.log(await shell.api.getClubs())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getClubs(): Promise<Array<UserClub>> {
    const response = await this.call(`
        query UserClubs {
            userClubs {
                id
                name
                address
                tariffName
                workShiftStatus
                permitted
                operatorFirstName
                operatorLastName
            }
        }
        `);
    return response.data?.userClubs!;
  }

  /**
   * # `api.getMe()`
   *
   * GraphQL api call with auth header for getting connection user data
   *
   * ``` ts
   * console.log(await shell.api.getMe())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getMe(): Promise<Me> {
    const response = await this.call(`
        query Me {
            me {
                id
                uuid
                login
                nickname
                phone
                email
                dob
                first_name
                last_name
                middle_name
                deposit
                last_client_activity
                last_worker_activity
                created_at
                updated_at
                banned_at
                age
                is_owner
            }
        }
        `);
    return response.data?.me!;
  }

  /**
   * # `api.getGoods()`
   *
   * GraphQL api call with auth header for getting users club goods array
   *
   * ``` ts
   * console.log(await shell.api.getGoods())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getGoods(): Promise<Array<Good>> {
    const response = await this.call(`
        query Goods {
            goods {
                id
                title
                subtitle
                comment
                cost
                wholesale_cost
                tax_percent
                unit_name
                unit_value
                amount
                image
                use_global_discounts
                created_at
                tax_system
                vat
                ean
                use_fair_sign
                is_excise
            }
        }
        `);
    return response.data.goods;
  }

  /**
   * # `api.getPromocodes()`
   *
   * GraphQL api call with auth header for getting users club promocodes array
   *
   * ``` ts
   *  console.log(await shell.api.getPromocodes())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getPromocodes(): Promise<Array<PromoCode>> {
    const response = await this.call(`
        query PromoCodes {
            promoCodes {
                data {
                    id
                    code
                    value
                    amount
                    created_at
                    is_tracked
                }
            }
        }        
        `);
    return response.data.promoCodes.data!;
  }

  /**
   * # `api.getFullReport()`
   *
   * GraphQL api call with auth header for getting users club repots from date to date
   *
   * It is highly recommended to use `getTimestamp()` function from `@xl-soft/smartshell-io-deno/utils`
   *
   * Unix converts to "YYYY-MM-dd HH:mm:ss" format
   *
   * ``` ts
   * console.log(await shell.api.getFullReport())
   * console.log(await shell.api.getFullReport('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
   * console.log(await shell.api.getFullReport('2023-07-20', 'CURRENT'))
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getFullReport(
    fromdate: DateAndNotations = "1970-01-01",
    fromtime: Time = "00:00:00",
    todate: DateAndNotations = "TODAY",
    totime: Time = "CURRENT",
  ): Promise<Report> {
    const response = await this.call(`
        query Report {
            report(input: {start: "${
      utils.getTimestamp(fromdate, fromtime)
    }", end: "${utils.getTimestamp(todate, totime)}"}) {
                statSeances {
                    amount
                    hours
                }
                statServices {
                    amount
                }
                statGoods {
                    amount
                }
                statOrders {
                    rko
                    pko
                }
                statDeposit {
                    cash
                    card
                    deposit
                    bonus
                }
                statMoney {
                    cash
                    card
                    deposit
                    bonus
                }
            }
        }     
        `);
    return response.data.report;
  }

  /**
   * # `api.getServices()`
   *
   * GraphQL api call with auth header for getting users club services array
   *
   * ``` ts
   * console.log(await shell.api.getServices())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getServices(): Promise<Array<Service>> {
    const response = await this.call(`
        query Services {
            services {
                id
                title
                cost
                wholesale_cost
                tax_percent
                use_global_discounts
                created_at
                tax_system
                vat
                ean
            }
        }        
        `);
    return response.data.services;
  }

  /**
   * # `api.getShortcuts()`
   *
   * GraphQL api call with auth header for getting users club content shortcuts array
   *
   * ``` ts
   * console.log(await shell.api.getShortcuts())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getShortcuts(): Promise<Array<Shortcut>> {
    const response = await this.call(`
        query Shortcuts {
            shortcuts {
                id
                title
                path
                group_id
                type
                popular
                sort
                args
                icon_path
                password
                main_picture
                run_as_admin
                work_dir
                only_for_registered
                age_rating
            }
        }             
        `);
    return response.data.shortcuts;
  }

  /**
   * # `api.getTariffs()`
   *
   * GraphQL api call with auth header for getting users club tariffs array
   *
   * ``` ts
   * console.log(await shell.api.getTariffs())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getTariffs(): Promise<Array<Tariff>> {
    const response = await this.call(`
        query Tariffs {
            tariffs {
                data {
                    id
                    title
                    duration
                    use_global_discounts
                    has_fixed_finish_time
                    created_at
                    is_active
                    per_minute
                    show_in_shell
                    show_in_billing
                    pausable
                    lifetime
                    ean
                    highlighted
                    description
                    sort
                    is_tracked
                }
            }
        }                
        `);
    return response.data.tariffs.data!;
  }

  /**
   * # `api.getUsers()`
   *
   * GraphQL api call with auth header for getting users club user array with pagination
   *
   * ``` ts
   *  console.log(await shell.api.getUsers())
   *  console.log(await shell.api.getUsers(2))
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getUsers(page = 1): Promise<Array<User>> {
    const response = await this.call(`
        query Clients {
            clients(page: ${page}) {
                total_deposits
                data {
                    id
                    uuid
                    login
                    nickname
                    phone
                    email
                    phone_suffix
                    dob
                    country_code
                    first_name
                    last_name
                    middle_name
                    deposit
                    last_client_activity
                    last_worker_activity
                    user_discount
                    created_at
                    updated_at
                    disabled_at
                    banned_at
                    total_hours
                }
            }
        }             
        `);
    return response.data.clients.data!;
  }

  /**
   * # `api.getAllUsers()`
   *
   * Dublicate for `getUsers()` but without pagination
   *
   * ### Highly recommends to avoid this method! It's VEEERY slow. Use at your own risk!
   *
   * ``` ts
   * console.log(await shell.api.getAllUsers(true))
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getAllUsers(verbose = false): Promise<AllUsers> {
    let seconds = 0;
    const time = setInterval(() => seconds = seconds + 0.1, 100);
    if (verbose == true) {
      console.log(
        "[Warning]: shell.api.getAllUsers() is a very slow method. Please, be patient!",
      );
    }
    const users: Array<User> = [];
    let page = 1;
    let query = `
        query Clients {
            clients(page: ${page}) {
                paginatorInfo {
                    hasMorePages
                    total
                    count
                }
                data {
                    id
                    uuid
                    login
                    nickname
                    phone
                    email
                    phone_suffix
                    dob
                    country_code
                    first_name
                    last_name
                    middle_name
                    deposit
                    last_client_activity
                    last_worker_activity
                    user_discount
                    created_at
                    updated_at
                    disabled_at
                    banned_at
                    total_hours
                }
            }
        } 
        `;
    let morepages = true;
    let total: number, count = 0;
    while (morepages == true) {
      page = page + 1;
      await this.call(query).then((e) => {
        total = e.data.clients.paginatorInfo?.total!;
        count = count + e.data.clients.paginatorInfo?.count!;
        query = `
                query Clients {
                    clients(page: ${page}) {
                        paginatorInfo {
                            hasMorePages
                            total
                            count
                        }
                        data {
                            id
                            uuid
                            login
                            nickname
                            phone
                            email
                            phone_suffix
                            dob
                            country_code
                            first_name
                            last_name
                            middle_name
                            deposit
                            last_client_activity
                            last_worker_activity
                            user_discount
                            created_at
                            updated_at
                            disabled_at
                            banned_at
                            total_hours
                        }
                    }
                } 
                `;
        if (verbose == true) console.log(`[Info]: ${count}/${total}`);
        e.data.clients.data!.forEach((e: User) => {
          users.push(e);
        });
        if (e.data.clients.paginatorInfo?.hasMorePages === false) {
          morepages = false;
          clearInterval(time);
          if (verbose == true) {
            console.log(
              `[Info]: shell.api.getAllUsers() is finished in ${
                Math.round(seconds)
              }s!`,
            );
          }
        }
      });
    }
    return { lenght: users.length, users: users };
  }

  /**
   * # `api.getUsersByQuery()`
   *
   * GraphQL api call with auth header for getting users club user array by search query
   *
   * ``` ts
   * console.log(await shell.api.getUsersByQuery('XL Sof'))
   * console.log(await shell.api.getUsersByQuery('9999'))
   * console.log(await shell.api.getUsersByQuery('Torshin'))
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getUsersByQuery(q: string): Promise<Array<User>> {
    const response = await this.call(`
        query Clients {
            clients(input: {q: "${q}"}) {
                total_deposits
                data {
                    id
                    uuid
                    login
                    nickname
                    phone
                    email
                    phone_suffix
                    dob
                    country_code
                    first_name
                    last_name
                    middle_name
                    deposit
                    last_client_activity
                    last_worker_activity
                    user_discount
                    created_at
                    updated_at
                    disabled_at
                    banned_at
                    total_hours
                }
            }
        }             
        `);
    return response.data.clients.data!;
  }

  /**
   * # `api.getPayments()`
   *
   * GraphQL api call with auth header for getting users club user payments array
   *
   * ``` ts
   * console.log(await shell.api.getPayments('a50c445f-3d8b-4800-98f3-fcd1cbf25eb7'))
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getPayments(uuid: string): Promise<Array<PaymentHistoryItem>> {
    const response = await this.call(`
        query GetPaymentsByClientId {
            getPaymentsByClientId(uuid: "${uuid}") {
                data {
                    created_at
                    title
                    amount
                    sum
                    is_refunded
                    paymentMethod
                }
            }
        }       
        `);
    return response.data.getPaymentsByClientId.data;
  }

  /**
   * # `api.getShifts()`
   *
   * GraphQL api call with auth header for getting users club user shifts array
   *
   * ``` ts
   * console.log(await shell.api.getShifts())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getShifts(): Promise<Array<WorkShift>> {
    const response = await this.call(`
        query WorkShifts {
            workShifts {
                data {
                    id
                    comment
                    created_at
                    finished_at
                    money {
                        sum {
                            cash
                            card
                            deposit
                            bonus
                        }
                        cash_on_start
                    }
                    worker {
                        phone
                    }
                }
            }
        }
        `);
    return response.data.workShifts.data!;
  }

  /**
   * # `api.getActiveShift()`
   *
   * GraphQL api call with auth header for getting users club user active shift
   *
   * ``` ts
   * console.log(await shell.api.getActiveShift())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getActiveShift(): Promise<WorkShift> {
    const response = await this.call(`
        query ActiveWorkShift {
            activeWorkShift {
                id
                comment
                created_at
                finished_at
                worker {
                    phone
                }
                money {
                    cash_on_start
                    sum {
                        cash
                        card
                        deposit
                        bonus
                    }
                }
            }
        }
        `);
    return response.data.activeWorkShift!;
  }

  /**
   * # `api.getTasks()`
   *
   * GraphQL api call with auth header for getting users club user tasks array
   *
   * ``` ts
   * console.log(await shell.api.getTasks())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getTasks(): Promise<Array<WorkerTask>> {
    const response = await this.call(`
        query Tasks {
            tasks {
                data {
                    id
                    title
                    created_at
                    updated_at
                    deadline_at
                    finished_at
                    executor {
                        phone
                    }
                    assigned_to {
                        phone
                    }
                    creator {
                        phone
                    }
                }
            }
        }
        `);
    return response.data.tasks.data!;
  }

  /**
   * # `api.getVersion()`
   *
   * GraphQL api call with auth header for getting server and client version and random wolf quote (АУФ)
   *
   * ### *БЕЗУМНО МОЖНО БЫТЬ ПЕРВЫМ...*
   *
   * ``` ts
   * console.log(await shell.api.getVersion())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getVersion(): Promise<Versions> {
    const response = await this.call(`
        query Versions {
            versions {
                easter_egg
                frontend
                backend
            }
        }        
        `);
    return response.data.versions!;
  }

  /**
   * # `api.getCurrency()`
   *
   * GraphQL api call with auth header for getting users club currency data
   *
   * ``` ts
   * console.log(await shell.api.getCurrency())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getCurrency(): Promise<Currency> {
    const response = await this.call(`
        query Currency {
            currency {
                title
                alias
                letter
            }
        }          
        `);
    return response.data.currency;
  }

  /**
   * # `api.getHosts()`
   *
   * GraphQL api call with auth header for getting users club user hosts array
   *
   * ``` ts
   * console.log(await shell.api.getHosts())
   * ```
   * `@xl-soft/smartshell-io-deno/api`
   */
  public async getHosts(): Promise<Array<Host>> {
    const response = await this.call(`
        query Hosts {
            hosts {
                id
                group_id
                type_id
                position
                alias
                comment
                mac_addr
                ip_addr
                dns_name
                coord_x
                coord_y
                is_deleted
                in_service
                created_at
                shell_mode
                last_online
                online
                device_has_changed
                device_updated_at
                locked
                admin_called_at
                info {
                    processor
                    ram
                    video
                    disc
                    shell_version
                }
                counters {
                    cpu_temp
                    disk_temp
                    active_window
                    disk_status {
                        letter
                        total
                        used
                    }
                }
                sessions {
                    id
                    started_at
                    finished_at
                    alias
                    user {
                        phone
                    }
                }
            }
        }        
        `);
    return response.data.hosts;
  }

  /**
   * # `api.setDeposit()`
   *
   * GraphQL api call with auth header for setting users deposit
   *
   * ``` ts
  * console.log(await shell.api.setDeposit("bfebe037-294e-41f3-852c-bcc5a5fa3534", 500))
  * ```
  * `@xl-soft/smartshell-io-deno/api`
  */

  public async setDeposit(uuid: string, value: number): Promise<void> {
    await this.call(`
        mutation SetDeposit {
            setDeposit(input: { client_uuid: "${uuid}", value: ${value} }) {
                deposit
            }
        }
    `);
  }

    /**
   * # `api.createComment()`
   *
   * GraphQL api call with auth header for creating comment on user
   *
   * ``` ts
    * console.log(await shell.api.createComment(666666, 'Comment text'))
    * ```
    * `@xl-soft/smartshell-io-deno/api`
    */
  
    public async createComment(id: number, text: string): Promise<void> {
      await this.call(`
        mutation CreateComment {
            createComment(input: { text: "${text}", type: CLIENT, entity_id: ${id} }) {
                data
            }
        }
      `);
    }

}
