type AccessToken = string;
type ApiCallHost = "billing" | "host";

interface Authform {
    login: string
    password: string
    club_id: number
} 

interface UserClubs {
    id: number
    name: string
    address: string
    tariffName: string
    workShiftStatus: string
    permitted: string
    operatorFirstName: string
    operatorLastName: string
}

interface Me {
    id: number
    uuid: string
    login: string
    nickname: string
    phone: string
    email: string
    dob: string
    first_name: string
    last_name: string
    middle_name: string
    deposit: number
    last_client_activity: string
    last_UserPhone_activity: string
    created_at: string
    updated_at: string
    banned_at: string
    age: number
    is_owner: boolean
}

interface Goods {
    id: number
    title: string
    subtitle: string
    comment: string
    cost: number
    wholesale_cost: number
    tax_percent: number
    unit_name: string
    unit_value: number
    amount: number
    image: string
    use_global_discounts: boolean
    created_at: string
    tax_system: string
    vat: string
    ean: string
    use_fair_sign: boolean
    is_excise: boolean
}

interface Promocodes {
    id: number
    code: string
    value: number
    amount: number
    created_at: number
    is_tracked: boolean
}

interface ReportStatSeances {
    amount: number
    hours: number
}

interface ReportStatServicesAndGoods {
    amount: number
}

interface ReportStatOrders {
    rko: number
    pko: number
}

interface ReportStatDepositAndMoney {
    cash: number
    card: number
    deposit: number
    bonus: number
}

interface Report {
    statSeances: ReportStatSeances 
    statServices: ReportStatServicesAndGoods
    statGoods: ReportStatServicesAndGoods
    statOrders: ReportStatOrders
    statDeposit: ReportStatDepositAndMoney
    statMoney: ReportStatDepositAndMoney
}

interface Services {
    id: number
    title: string
    cost: number
    wholesale_cost: number
    tax_percent: number
    use_global_discounts: boolean
    created_at: string
    tax_system: string
    vat: string
    ean: string
}

type ShortcutType = 'GAME' | 'APPLICATION'

interface Shortcuts {
    id: number
    title: string
    path: Array<string>
    group_id: number
    type: ShortcutType
    popular: boolean
    sort: number
    args: string
    icon_path: string
    password: string
    main_picture: string
    run_as_admin: boolean
    work_dir: string
    only_for_registered: boolean
    age_rating: number
}

interface Tariffs {
    id: number
    title: string
    duration: number
    use_global_discounts: boolean
    has_fixed_finish_time: boolean
    created_at: string
    is_active: boolean
    per_minute: boolean
    show_in_shell: boolean
    show_in_billing: boolean
    pausable: boolean
    lifetime: number
    ean: string
    highlighted: boolean
    description: string
    sort: number
    is_tracked: boolean
}

interface Users {
    id: number
    uuid: string
    login: string
    nickname: string
    phone: string
    email: string
    phone_suffix: string
    dob: string
    country_code: string
    first_name: string
    last_name: string
    middle_name: string
    deposit: number
    last_client_activity: string
    last_UserPhone_activity: string
    user_discount: number
    created_at: string
    updated_at: string
    disabled_at: string
    banned_at: string
    total_hours: number
}

type PaymentMethod = 'DEPOSIT' | 'CARD' | 'CASH' | 'BONUS'

interface Payments {
    created_at: string
    title: string
    amount: number
    sum: number
    is_refunded: boolean
    paymentMethod: PaymentMethod
}

interface ShiftsMoney {
    sum: ReportStatDepositAndMoney
    cash_on_start: number
}

interface UserPhone {
    phone: string
}

interface Shifts {
    id: number
    comment: string
    created_at: string
    finished_at: string
    money: ShiftsMoney
    worker: UserPhone
}

interface Tasks {
    id: number
    title: string
    created_at: string
    updated_at: string
    deadline_at: string
    finished_at: string
    executor: UserPhone
    assigned_to: UserPhone
    creator: UserPhone
}

interface Version {
    easter_egg: string
    frontend: string
    backend: string
}

interface Currency {
    title: string
    alias: string
    letter: string
}

type ShellMode = "DISABLED" | "NORMAL" | "HIGH_ACCESS"

interface HostSessions {
    id: number
    started_at: string
    finished_at: string
    user: UserPhone
    alias: string
}

interface HostInfo {
    processor: string
    ram: string
    video: string
    disc: string
    shell_version: string
}

interface HostCountersDisks {
    letter: string
    total: number
    used: number
}

interface HostCounters {
    cpu_temp: number
    disk_temp: number
    active_window: string
    disk_status: Array<HostCountersDisks>
}

interface HostComments {
    text: string
}

interface Hosts {
    id: number
    group_id: number
    type_id: number
    position: number
    alias: string
    comment: string
    mac_addr: string
    ip_addr: string
    dns_name: string
    coord_x: number
    coord_y: number
    is_deleted: boolean
    in_service: boolean
    created_at: string
    shell_mode: ShellMode
    last_online: string
    online: boolean
    device_has_changed: boolean
    device_updated_at: string
    locked: boolean
    admin_called_at: string
    sessions: Array<HostSessions>
    info: HostInfo
    counters: HostCounters
    comments: Array<HostComments>
}