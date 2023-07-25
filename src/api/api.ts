export class Api {
    private apiAccessToken = ``
    private apiHref = `https://billing.smartshell.gg/api/GraphQL`;
    constructor(private apiHost: ApiCallHost, private login: string, private password: string, private club_id: number) {
        this.apiHref = `https://${apiHost}.smartshell.gg/api/GraphQL`;
    }
    
    private async call(query: string) {
        if (!this.apiAccessToken) await this.getAccessToken()
        const response = await fetch(this.apiHref, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": this.apiAccessToken
            },
            body: JSON.stringify({
                query,
            }),
        });
        return response.json()
    }

    private getCurrent(timezoneOffset: Timezone, tomorrow = false): string {
        const date = new Date();
        if (tomorrow == true) date.setDate(date.getDate() + 1)
        const localTimezoneOffset = date.getTimezoneOffset() * 60;
        const targetTimezoneOffset = timezoneOffset * 3600;
        const targetTime = date.getTime() + (targetTimezoneOffset - localTimezoneOffset) * 1000;
        const targetDate = new Date(targetTime);
        const year = targetDate.getUTCFullYear();
        const month = String(targetDate.getUTCMonth() + 1).padStart(2, "0");
        const day = String(targetDate.getUTCDate()).padStart(2, "0");
        const hours = String(targetDate.getUTCHours()).padStart(2, "0");
        const minutes = String(targetDate.getUTCMinutes()).padStart(2, "0");
        const seconds = String(targetDate.getUTCSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    public getDate(date: DateAndNotations = 'TODAY', time: Time = 'CURRENT', zone: Timezone = 0) {
        let datestr: DateAndNotations | string = date
        let timestr: DateAndNotations | string = time
        if (date === 'TODAY') {
            datestr = this.getCurrent(zone || 0).split(' ')[0]
        }
        if (date === 'TOMORROW') {
            datestr = this.getCurrent(zone || 0, true).split(' ')[0]
        }
        if (time === 'CURRENT') {
            timestr = this.getCurrent(zone || 0).split(' ')[1]
        }
        return `${datestr} ${timestr}`
    }

    /**
     * # `getAccessToken()`
     * 
     * GraphQL api call for getting JWT access token
     * 
     * 
     * ```GraphQL
     *  mutation Login {
     *      login( input: { company_id: 1234, password: "pasw0rd", login: "79999999999" } ) { 
     *          access_token 
     *      }
     *  }
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getAccessToken()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getAccessToken(): Promise<AccessToken> {
        const query = `mutation Login {
            login( input: { company_id: ${this.club_id}, password: "${this.password}", login: "${this.login}" } ) { 
                access_token 
            }
        }`
        const response = await fetch(this.apiHref, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                query,
            }),
        });
        const json = await response.json()
        this.apiAccessToken = `Bearer ${json.data.login.access_token}`
        return this.apiAccessToken
    }

    /**
     * # `getClubs()`
     * 
     * GraphQL api call with auth header for getting user club array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getClubs()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getClubs(): Promise<Array<UserClubs>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.userClubs
    }

    /**
     * # `getMe()`
     * 
     * GraphQL api call with auth header for getting connection user data
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getMe()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getMe(): Promise<Me> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.me
    }

    /**
     * # `getGoods()`
     * 
     * GraphQL api call with auth header for getting users club goods array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getGoods()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getGoods(): Promise<Array<Goods>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.goods
    }

    /**
     * # `getPromocodes()`
     * 
     * GraphQL api call with auth header for getting users club promocodes array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getPromocodes()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getPromocodes(): Promise<Array<Promocodes>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.promoCodes.data
    }

    /**
     * # `getFullReport()`
     * 
     * GraphQL api call with auth header for getting users club repots from date to date
     * 
     * It is highly recommended to use `getDate()` function from `@xl-soft/smartshell-io-deno/utils`
     * 
     * Unix converts to "YYYY-MM-dd HH:mm:ss" format
     * 
     * 
     * ```GraphQL
        query Report {
            report(input: {start: "2023-06-20 00:00:00", end: "2023-07-20 00:00:00"}) {
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const full = await shell.api.getFullReport()
     *  const fromto = await shell.api.getFullReport(1687004700, 1689596700)
     *  const fromtonow = await shell.api.getFullReport(1687004700)
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getFullReport(
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT',
    ): Promise<Report> {
        const query = `
        query Report {
            report(input: {start: "${this.getDate(fromdate, fromtime)}", end: "${this.getDate(todate, totime)}"}) {
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
        `;
        const response = await this.call(query)
        return response.data.report
    }

    /**
     * # `getServices()`
     * 
     * GraphQL api call with auth header for getting users club services array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getServices()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getServices(): Promise<Array<Services>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.services
    }

    /**
     * # `getShortcuts()`
     * 
     * GraphQL api call with auth header for getting users club content shortcuts array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getShortcuts()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getShortcuts(): Promise<Array<Shortcuts>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.shortcuts
    }

    /**
     * # `getTariffs()`
     * 
     * GraphQL api call with auth header for getting users club tariffs array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getTariffs()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getTariffs(): Promise<Array<Tariffs>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.tariffs.data
    }

    /**
     * # `getUsers()`
     * 
     * GraphQL api call with auth header for getting users club user array with pagination
     * 
     * 
     * ```GraphQL
        query Clients {
            clients {
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getUsers()
     *  const secondpage = await shell.api.getUsers(2)
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getUsers(page = 1): Promise<Array<Users>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.clients.data
    }

    /**
     * # `getAllUsers()`
     * 
     * Dublicate for `getUsers()` but without pagination
     * 
     * ### Highly recommends to avoid this method! It's VEEERY slow. Use at your own risk!
     * 
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getAllUsers()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getAllUsers(verbose = false): Promise<AllUsers> {
        let seconds = 0
        const time = setInterval(() => seconds = seconds + 0.1, 100)
        if (verbose == true) console.log('[Warning]: shell.api.getAllUsers() is a very slow method. Please, be patient!')
        const users: Array<Users> = []
        let page = 1
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
        let morepages = true
        let total: number, count = 0
        while (morepages == true) {
            page = page + 1
            await this.call(query).then((e) => {
                total = e.data.clients.paginatorInfo.total
                count = count + e.data.clients.paginatorInfo.count
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
                if (verbose == true)  console.log(`[Info]: ${count}/${total}`)
                e.data.clients.data.forEach((e: Users) => {
                    users.push(e)

                });
                if (e.data.clients.paginatorInfo.hasMorePages === false) { morepages = false; clearInterval(time); if (verbose == true) console.log(`[Info]: shell.api.getAllUsers() is finished in ${Math.round(seconds)}s!`) }
            })
            
        }
        return { lenght: users.length, users: users }
    }

    /**
     * # `getUsers()`
     * 
     * GraphQL api call with auth header for getting users club user array by search query
     * 
     * 
     * ```GraphQL
        query Clients {
            clients(input: {q: "9999"}) {
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const userbynick = await shell.api.getUsersByQuery('XL Sof')
     *  const userbylastdigits = await shell.api.getUsersByQuery('9999')
     *  const userbylastname = await shell.api.getUsersByQuery('Torshin')
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getUsersByQuery(q: string): Promise<Array<Users>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.clients.data
    }

    /**
     * # `getPayments()`
     * 
     * GraphQL api call with auth header for getting users club user payments array
     * 
     * 
     * ```GraphQL
        query GetPaymentsByClientId {
            getPaymentsByClientId(uuid: "6f219373-025f-4cc1-a958-789095ca19ec") {
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getPayments('6f219373-025f-4cc1-a958-789095ca19ec')
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getPayments(uuid: string): Promise<Array<Payments>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.getPaymentsByClientId.data
    }

    /**
     * # `getShifts()`
     * 
     * GraphQL api call with auth header for getting users club user shifts array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getShifts()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getShifts(): Promise<Array<Shifts>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.workShifts.data
    }

    /**
     * # `getActiveShift()`
     * 
     * GraphQL api call with auth header for getting users club user active shift
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getActiveShift()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getActiveShift(): Promise<Shifts> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.activeWorkShift
    }

    /**
     * # `getTasks()`
     * 
     * GraphQL api call with auth header for getting users club user tasks array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getTasks()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getTasks(): Promise<Array<Tasks>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.tasks.data
    }

    /**
     * # `getVersion()`
     * 
     * GraphQL api call with auth header for getting server and client version and random wolf quote (АУФ)
     * 
     * ### *БЕЗУМНО МОЖНО БЫТЬ ПЕРВЫМ...*
     * 
     * 
     * ```GraphQL
        query Versions {
            versions {
                easter_egg
                frontend
                backend
            }
        }     
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getVersion()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getVersion(): Promise<Version> {
        const query = `
        query Versions {
            versions {
                easter_egg
                frontend
                backend
            }
        }        
        `;
        const response = await this.call(query)
        return response.data.versions
    }

    /**
     * # `getCurrency()`
     * 
     * GraphQL api call with auth header for getting users club currency data
     * 
     * 
     * ```GraphQL
        query Currency {
            currency {
                title
                alias
                letter
            }
        }    
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getCurrency()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getCurrency(): Promise<Currency> {
        const query = `
        query Currency {
            currency {
                title
                alias
                letter
            }
        }          
        `;
        const response = await this.call(query)
        return response.data.currency
    }

    /**
     * # `getHosts()`
     * 
     * GraphQL api call with auth header for getting users club user hosts array
     * 
     * 
     * ```GraphQL
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
     * ```
     * _______________
     * 
     * # 
     * 
     * ``` ts
     *  const response = await shell.api.getHosts()
     * ```
     * `@xl-soft/smartshell-io-deno/api`
     */
    public async getHosts(): Promise<Array<Hosts>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.hosts
    }
}

