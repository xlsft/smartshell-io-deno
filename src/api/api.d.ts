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

interface AllUsers {
    lenght: number
    users: Users[]
}

type Years = 1970 | 1971 | 1972 | 1973 | 1974 | 1975 | 1976 | 1977 | 1978 | 1979 | 1980 | 1981 | 1982 | 1983 | 1984 | 1985 | 1986 | 1987 | 1988 | 1989 | 1990 | 1991 | 1992 | 1993 | 1994 | 1995 | 1996 | 1997 | 1998 | 1999 | 2000 | 2001 | 2002 | 2003 | 2004 | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 | 2037 | 2038 | 2039 | 2040 | 2041 | 2042 | 2043 | 2044 | 2045 | 2046 | 2047 | 2048 | 2049 | 2050 | 2051 | 2052 | 2053 | 2054 | 2055 | 2056 | 2057 | 2058 | 2059 | 2060 | 2061 | 2062 | 2063 | 2064 | 2065 | 2066 | 2067 | 2068 | 2069 | 2070 | 2071 | 2072 | 2073 | 2074 | 2075 | 2076 | 2077 | 2078 | 2079 | 2080 | 2081 | 2082 | 2083 | 2084 | 2085 | 2086 | 2087 | 2088 | 2089 | 2090 | 2091 | 2092 | 2093 | 2094 | 2095 | 2096 | 2097 | 2098 | 2099 | 2100
type Days = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31"
type Months = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12"
type Hours = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23"
type MinutesAndSeconds = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59";
type DateArr = [ string, string, string ] | [ number, number, number ]
type DateAndNotations = 'TODAY' | 'TOMORROW' | `${Years}-${Months}-${Days}`
type Time = `${Hours}:${MinutesAndSeconds}:${MinutesAndSeconds}` | 'CURRENT'
type Timezone = -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
interface DateTime {
    date?: DateAndNotations,
    time?: Time,
    zone?: Timezone
}