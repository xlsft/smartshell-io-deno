import { getCurrent, getDateFromUnix } from "./utils/getDate.ts";

export class Api {
    private apiAccessToken = ``
    private apiHref = `https://billing.smartshell.gg/api/graphql`;
    constructor(private apiHost: ApiCallHost, private login: string, private password: string, private club_id: number) {
        this.apiHref = `https://${apiHost}.smartshell.gg/api/graphql`;
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

    public async getClubList(): Promise<Array<UserClubs>> {
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

    public async getFullReport(from = 1, to = getCurrent()): Promise<Report> {
        const query = `
        query Report {
            report(input: {start: "${getDateFromUnix(from)}", end: "${getDateFromUnix(to)}"}) {
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

    public async getUsers(): Promise<Array<Users>> {
        const query = `
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
        `;
        const response = await this.call(query)
        return response.data.clients.data
    }

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

    public async getPcs(): Promise<Array<Hosts>> {
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

