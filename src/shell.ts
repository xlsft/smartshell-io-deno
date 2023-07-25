import { Api } from "./api/api.ts";




export default class SmartShell {

    // * ---------------------------- Connect ----------------------------

    /**
     * # `api`
     * 
     * Object with pure api calls
     * 
     * ``` ts
     *  const api = await shell.api
     * ```
     * `@xl-soft/smartshell-io-deno`
     */
    public api: Api
    /**
     * # `SmartShell` class
     * 
     * Create connetcion instance
     * 
     * ``` ts
     *  const shell = await new SmartShell({
     *      login: '79999999999',
     *      password: 'pasw0rd',
     *      club_id: 1111
     *  })
     * ```
     * `@xl-soft/smartshell-io-deno`
     */
    constructor(private auth: Authform) {
        this.api = new Api('billing', this.auth.login, this.auth.password, this.auth.club_id)
    }

    // * ---------------------------- Auth ----------------------------

    /**
     * # `getAccessToken()`
     * 
     * Returns access token for connection
     * 
     * ``` ts
     *  const response = await shell.getAccessToken()
     * ```
     * `@xl-soft/smartshell-io-deno/auth`
     */
    public async getAccessToken() {
        return await this.api.getAccessToken()
    }

    // * ---------------------------- Clubs ----------------------------

    /**
     * # `getClubs()`
     * 
     * Returns list of users authorized clubs
     * 
     * ``` ts
     *  const response = await shell.getClubs()
     * ```
     * `@xl-soft/smartshell-io-deno/clubs`
     */
    public async getClubs() {
        return await this.api.getClubs()
    }

    /**
     * # `getClubById()`
     * 
     * Returns authorized club data by id
     * 
     * ``` ts
     *  const response = await shell.getClubById(1234)
     * ```
     * `@xl-soft/smartshell-io-deno/clubs`
     */
    public async getClubById(id: number) {
        const clubs = await this.api.getClubs()
        return clubs.find(o => o.id === id);
    }

    // * ---------------------------- Shop ----------------------------

    /**
     * # `getGoods()`
     * 
     * Returns all goods from club shop
     * 
     * ``` ts
     *  const response = await shell.getGoods()
     * ```
     * `@xl-soft/smartshell-io-deno/shop`
     */
    public async getGoods() {
        return await this.api.getGoods()
    }

    /**
     * # `getGoodByName()`
     * 
     * Returns specific good from club shop
     * 
     * ``` ts
     *  const response = await shell.getGoodByName('Cola')
     * ```
     * `@xl-soft/smartshell-io-deno/shop`
     */
    public async getGoodByName(name: string) {
        const goods = await this.api.getGoods()
        return goods.find(o => o.title === name);
    }

    /**
     * # `getGoodByBarcode()`
     * 
     * Returns good from club shop by barcode
     * 
     * ``` ts
     *  const response = await shell.getGoodByBarcode('501234576421')
     * ```
     * `@xl-soft/smartshell-io-deno/shop`
     */
    public async getGoodByBarcode(ean: string) {
        const goods = await this.api.getGoods()
        return goods.find(o => o.ean === ean);
    }

    /**
     * # `getServices()`
     * 
     * Returns all services from club shop
     * 
     * ``` ts
     *  const response = await shell.getServices()
     * ```
     * `@xl-soft/smartshell-io-deno/shop`
     */  
    public async getServices() {
        return await this.api.getServices()
    }

    /**
     * # `getServiceByName()`
     * 
     * Returns specific service from club shop
     * 
     * ``` ts
     *  const response = await shell.getServiceByName('Hookah')
     * ```
     * `@xl-soft/smartshell-io-deno/shop`
     */
    public async getServiceByName(name: string) {
        const goods = await this.api.getServices()
        return goods.find(o => o.title === name);
    }

    /**
     * # `getServiceByBarcode()`
     * 
     * Returns service from club shop by barcode
     * 
     * ``` ts
     *  const response = await shell.getServiceByBarcode('501234576421')
     * ```
     * `@xl-soft/smartshell-io-deno/shop`
     */
    public async getServiceByBarcode(ean: string) {
        const goods = await this.api.getServices()
        return goods.find(o => o.ean === ean);
    }

    // * ---------------------------- Promo ----------------------------

    /**
     * # `getPromocodes()`
     * 
     * Returns all promocodes from club
     * 
     * ``` ts
     *  const response = await shell.getPromocodes()
     * ```
     * `@xl-soft/smartshell-io-deno/promo`
     */
    public async getPromocodes() {
        return await this.api.getPromocodes()
    }

    /**
     * # `getPromocodeByName()`
     * 
     * Returns promocode data
     * 
     * ``` ts
     *  const response = await shell.getPromocodeByName('SALE50')
     * ```
     * `@xl-soft/smartshell-io-deno/promo`
     */
    public async getPromocodeByName(name: string) {
        const promos =  await this.api.getPromocodes()
        return promos.find(o => o.code === name);
    }

    // * ---------------------------- Stats ----------------------------

    /**
     * # `getStat()`
     * 
     * Returns full report from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getStat()
     *  const fromto = await shell.getStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getStat(        
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        return await this.api.getFullReport(fromdate, fromtime, todate, totime)
    }

    /**
     * # `getGoodsStat()`
     * 
     * Returns goods report from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getGoodsStat()
     *  const fromto = await shell.getGoodsStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getGoodsStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getGoodsStat(        
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        const report = await this.api.getFullReport(fromdate, fromtime, todate, totime)
        return report.statGoods
    }

    /**
     * # `getServicesStat()`
     * 
     * Returns services report from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getServicesStat()
     *  const fromto = await shell.getServicesStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getServicesStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getServicesStat(
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        const report = await this.api.getFullReport(fromdate, fromtime, todate, totime)
        return report.statServices
    }

    /**
     * # `getOrdersStat()`
     * 
     * Returns щrders report from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getOrdersStat()
     *  const fromto = await shell.getOrdersStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getOrdersStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getOrdersStat(
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        const report = await this.api.getFullReport(fromdate, fromtime, todate, totime)
        return report.statOrders
    }

    /**
     * # `getSeancesStat()`
     * 
     * Returns seances report from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getSeancesStat()
     *  const fromto = await shell.getSeancesStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getSeancesStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getSeancesStat(
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        const report = await this.api.getFullReport(fromdate, fromtime, todate, totime)
        return report.statSeances
    }

    /**
     * # `getDepositStat()`
     * 
     * Returns deposit report from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getDepositStat()
     *  const fromto = await shell.getDepositStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getDepositStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getDepositStat(
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        const report = await this.api.getFullReport(fromdate, fromtime, todate, totime)
        return report.statDeposit
    }

    /**
     * # `getMoneyStat()`
     * 
     * Returns money report from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getMoneyStat()
     *  const fromto = await shell.getMoneyStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getMoneyStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getMoneyStat(
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        const report = await this.api.getFullReport(fromdate, fromtime, todate, totime)
        return report.statMoney
    }

    /**
     * # `getRevenueStat()`
     * 
     * Returns revenue from date and time to date and time.
     * 
     * ``` ts
     *  const full = await shell.getRevenueStat()
     *  const fromto = await shell.getRevenueStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT')
     *  const fromtonow = await shell.getRevenueStat('2023-07-20', 'CURRENT')
     * ```
     * `@xl-soft/smartshell-io-deno/stat`
     */
    public async getRevenueStat(
        fromdate: DateAndNotations = '1970-01-01',
        fromtime: Time = '00:00:00',
        todate: DateAndNotations = 'TODAY',
        totime: Time = 'CURRENT'
    ) {
        const report = await this.api.getFullReport(fromdate, fromtime, todate, totime)
        return report.statMoney.card + report.statMoney.cash
    }

    // * ---------------------------- Content ----------------------------
    
    /**
     * # `getApps()`
     * 
     * Returns club apps shortcuts
     * 
     * ``` ts
     *  const response = await shell.getApps()
     * ```
     * `@xl-soft/smartshell-io-deno/content`
     */
    public async getApps() {
        const shortcuts = await this.api.getShortcuts()
        return shortcuts.filter(o => { return o.type === "APPLICATION";});
    }

    /**
     * # `getAppByName()`
     * 
     * Returns club app shortcut
     * 
     * ``` ts
     *  const response = await shell.getAppByName('Discord')
     * ```
     * `@xl-soft/smartshell-io-deno/content`
     */
    public async getAppByName(name: string) {
        const shortcuts = await this.api.getShortcuts()
        const filtred = shortcuts.filter(o => { return o.type === "APPLICATION";});
        return filtred.find(o => o.title === name);
    }

    /**
     * # `getPopularApps()`
     * 
     * Returns popular club apps shortcuts
     * 
     * ``` ts
     *  const response = await shell.getPopularApps()
     * ```
     * `@xl-soft/smartshell-io-deno/content`
     */
    public async getPopularApps() {
        const shortcuts = await this.api.getShortcuts()
        const filtred = shortcuts.filter(o => { return o.type === "APPLICATION" })
        return filtred.filter(o => { return o.popular === true })
    }

    /**
     * # `getGames()`
     * 
     * Returns club games shortcuts 
     * 
     * ``` ts
     *  const response = await shell.getGames()
     * ```
     * `@xl-soft/smartshell-io-deno/content`
     */
    public async getGames() {
        const shortcuts = await this.api.getShortcuts()
        return shortcuts.filter(o => { return o.type === "GAME";});
    }

    /**
     * # `getGameByName()`
     * 
     * Returns club game shortcut
     * 
     * ``` ts
     *  const response = await shell.getGameByName('Dota 2')
     * ```
     * `@xl-soft/smartshell-io-deno/content`
     */
    public async getGameByName(name: string) {
        const shortcuts = await this.api.getShortcuts()
        const filtred = shortcuts.filter(o => { return o.type === "GAME";});
        return filtred.find(o => o.title === name);
    }

    /**
     * # `getPopularGames()`
     * 
     * Returns popular club games shortcuts
     * 
     * ``` ts
     *  const response = await shell.getPopularGames()
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getPopularGames() {
        const shortcuts = await this.api.getShortcuts()
        const filtred = shortcuts.filter(o => { return o.type === "GAME" })
        return filtred.filter(o => { return o.popular === true })
    }

    // * ---------------------------- Tariffs ----------------------------

    /**
     * # `getTariffs()`
     * 
     * Returns all club tariffs
     * 
     * ``` ts
     *  const response = await shell.getTariffs()
     * ```
     * `@xl-soft/smartshell-io-deno/tariffs`
     */
    public async getTariffs() {
        return await this.api.getTariffs()
    }

    /**
     * # `getTariffByName()`
     * 
     * Returns club tariff by name
     * 
     * ``` ts
     *  const response = await shell.getTariffByName('Night')
     * ```
     * `@xl-soft/smartshell-io-deno/tariffs`
     */
    public async getTariffByName(name: string) {
        const tariffs = await this.api.getTariffs()
        return tariffs.find(o => o.title === name);
    }

    /**
     * # `getActiveTariffs()`
     * 
     * Returns all active at the current time club tariffs
     * 
     * ``` ts
     *  const response = await shell.getActiveTariffs()
     * ```
     * `@xl-soft/smartshell-io-deno/tariffs`
     */
    public async getActiveTariffs() {
        const tariffs = await this.api.getTariffs()
        return tariffs.filter(o => { return o.is_active === true });
    }

    /**
     * # `getActiveUserTariffs()`
     * 
     * Returns all active at the current time club tariffs that showed in shell
     * 
     * ``` ts
     *  const response = await shell.getActiveUserTariffs()
     * ```
     * `@xl-soft/smartshell-io-deno/tariffs`
     */
    public async getActiveUserTariffs() {
        const tariffs = await this.api.getTariffs()
        return tariffs.filter(o => { return o.is_active === true && o.show_in_shell === true });
    }

    // * ---------------------------- Users ----------------------------

    /**
     * # `getConnectionUser()`
     * 
     * Returns user from login and password in constructor
     * 
     * ``` ts
     *  const response = await shell.getConnectionUser()
     * ```
     * `@xl-soft/smartshell-io-deno/users`
     */
    public async getConnectionUser() {
        return await this.api.getMe()
    }

    /**
     * # `getUsersByQuery()`
     * 
     * Returns users by search query
     * 
     * ``` ts
     *  const userbynick = await shell.getUsersByQuery('XL Sof')
     *  const userbylastdigits = await shell.getUsersByQuery('9999')
     *  const userbylastname = await shell.getUsersByQuery('Torshin')
     * ```
     * `@xl-soft/smartshell-io-deno/users`
     */
    public async getUsersByQuery(query: string) {
        return await this.api.getUsersByQuery(query)
    }

    /**
     * # `getUserByPhone()`
     * 
     * Returns user by phone number
     * 
     * ``` ts
     *  const response = await shell.getUserByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/users`
     */
    public async getUserByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        return users[0]
    }


    /**
     * # `getUserByHostName()`
     * 
     * Returns user with current session on host
     * 
     * ``` ts
     *  const response = await shell.getUserByHostName('host-24')
     * ```
     * `@xl-soft/smartshell-io-deno/users`
     */
    public async getUserByHostName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        if (host?.sessions[0].user === null) return { error: 'No one using this host' }
        const users = await this.api.getUsersByQuery(String(host?.sessions[0].user.phone))
        return users[0]
    }

    // * ---------------------------- Payments ----------------------------

    /**
     * # `getPaymentsByPhone()`
     * 
     * Returns all user payments by phone
     * 
     * ``` ts
     *  const response = await shell.getPaymentsByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/payments`
     */
    public async getPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        return payments
    }

    /**
     * # `getCardPaymentsByPhone()`
     * 
     * Returns all user payments with card by phone
     * 
     * ``` ts
     *  const response = await shell.getCardPaymentsByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/payments`
     */
    public async getCardPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "CARD";});
        return filtred
    }

    /**
     * # `getCashPaymentsByPhone()`
     * 
     * Returns all user payments with cash by phone
     * 
     * ``` ts
     *  const response = await shell.getCashPaymentsByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/payments`
     */
    public async getCashPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "CASH";});
        return filtred
    }

    /**
     * # `getDepositPaymentsByPhone()`
     * 
     * Returns all user payments with deposit by phone
     * 
     * ``` ts
     *  const response = await shell.getDepositPaymentsByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/payments`
     */
    public async getDepositPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "DEPOSIT";});
        return filtred
    }

    /**
     * # `getBonusPaymentsByPhone()`
     * 
     * Returns all user payments with bonus by phone
     * 
     * ``` ts
     *  const response = await shell.getBonusPaymentsByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/payments`
     */
    public async getBonusPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "BONUS";});
        return filtred
    }

    // * ---------------------------- Shifts ----------------------------

    /**
     * # `getShifts()`
     * 
     * Returns all shifts on current club
     * 
     * ``` ts
     *  const response = await shell.getShifts()
     * ```
     * `@xl-soft/smartshell-io-deno/shifts`
     */
    public async getShifts() {
        return await this.api.getShifts()
    }

    /**
     * # `getShiftsByPhone()`
     * 
     * Returns all shifts by staff phone number
     * 
     * ``` ts
     *  const response = await shell.getShiftsByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/shifts`
     */
    public async getShiftsByPhone(phone: string) {
        const shifts = await this.api.getShifts()
        return shifts.filter(o => { return o.worker.phone === phone;})
    }

    /**
     * # `getShiftById()`
     * 
     * Returns shift with specific id
     * 
     * ``` ts
     *  const response = await shell.getShiftById(639126)
     * ```
     * `@xl-soft/smartshell-io-deno/shifts`
     */
    public async getShiftById(id: number) {
        const shifts = await this.api.getShifts()
        return shifts.find(o => o.id === id);
    }

    /**
     * # `getLastShift()`
     * 
     * Returns last shift (not current)
     * 
     * ``` ts
     *  const response = await shell.getLastShift()
     * ```
     * `@xl-soft/smartshell-io-deno/shifts`
     */
    public async getLastShift() {
        const shift = await this.api.getShifts()
        return shift[0]
    }

    /**
     * # `getLastShiftByPhone()`
     * 
     * Returns last shift (not current) by staff phone number
     * 
     * ``` ts
     *  const response = await shell.getLastShiftByPhone('79999999999')
     * ```
     * `@xl-soft/smartshell-io-deno/shifts`
     */
    public async getLastShiftByPhone(phone: string) {
        const shifts = await this.api.getShifts()
        const shift = shifts.filter(o => { return o.worker.phone === phone;})
        return shift[0]
    }

    /**
     * # `getActiveShift()`
     * 
     * Returns current active shift
     * 
     * ``` ts
     *  const response = await shell.getActiveShift()
     * ```
     * `@xl-soft/smartshell-io-deno/shifts`
     */
    public async getActiveShift() {
        return await this.api.getActiveShift()
    }

    // * ---------------------------- Tasks ----------------------------

    /**
     * # `getTasks()`
     * 
     * Returns all tasks from dashboard
     * 
     * ``` ts
     *  const response = await shell.getTasks()
     * ```
     * `@xl-soft/smartshell-io-deno/tasks`
     */
    public async getTasks() {
        return await this.api.getTasks()
    }

    /**
     * # `getFinishedTasks()`
     * 
     * Returns all finished tasks from dashboard
     * 
     * ``` ts
     *  const response = await shell.getFinishedTasks()
     * ```
     * `@xl-soft/smartshell-io-deno/tasks`
     */
    public async getFinishedTasks() {
        const tasks = await this.api.getTasks()
        return tasks.filter(o => { return o.finished_at !== null;})
    }

    /**
     * # `getActiveTasks()`
     * 
     * Returns all active (unfinished) tasks from dashboard
     * 
     * ``` ts
     *  const response = await shell.getActiveTasks()
     * ```
     * `@xl-soft/smartshell-io-deno/task`
     */
    public async getActiveTasks() {
        const tasks = await this.api.getTasks()
        return tasks.filter(o => { return o.finished_at === null;})
    }

    // * ---------------------------- Utils ----------------------------

    /**
     * # `getVersion()`
     * 
     * Returns versions of server and client and random wolf quote (АУФ) 
     * 
     * ### *БЕЗУМНО МОЖНО БЫТЬ ПЕРВЫМ...*
     * ``` ts
     *  const response = await shell.getVersion()
     * ```
     * `@xl-soft/smartshell-io-deno/utils`
     */
    public async getVersion() {
        return await this.api.getVersion()
    }

    /**
     * # `getCurrency()`
     * 
     * Returns club currency setting
     * 
     * ``` ts
     *  const response = await shell.getCurrency()
     * ```
     * `@xl-soft/smartshell-io-deno/utils`
     */
    public async getCurrency() {
        return await this.api.getCurrency()
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
    // * ---------------------------- Hosts ----------------------------

    /**
     * # `getHosts()`
     * 
     * Returns all club hosts
     * 
     * ``` ts
     *  const response = await shell.getHosts()
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getHosts() {
        return await this.api.getHosts()
    }


    /**
     * # ``
     * 
     * Returns specific host by host name
     * 
     * ``` ts
     *  const response = await shell.getHostByName('PC-24')
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getHostByName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        return host
    }

    /**
     * # `getHostInfoByName()`
     * 
     * Returns host information by host name
     * 
     * ``` ts
     *  const response = await shell.getHostInfoByName('PC-24')
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getHostInfoByName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        return host?.info
    }

    /**
     * # `getHostCountersByName()`
     * 
     * Returns host counters by host name 
     * 
     * ``` ts
     *  const response = await shell.getHostCountersByName('PC-24')
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getHostCountersByName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        return host?.counters
    }

    /**
     * # `getHostDisksByName()`
     * 
     * Returns host disk info by host name 
     * 
     * ``` ts
     *  const response = await shell.getHostDisksByName('PC-24')
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getHostDisksByName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        return host?.counters.disk_status
    }

    /**
     * # `getHostLastCommentByName()`
     * 
     * Returns host last comment by host name 
     * 
     * ``` ts
     *  const response = await shell.getHostLastCommentByName('PC-24')
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getHostLastCommentByName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        return host?.comment == null ? { comment: '' } : host?.comment
    }

    /**
     * # `getHostIdByName()`
     * 
     * Returns host id by host name 
     * 
     * ``` ts
     *  const response = await shell.getHostIdByName('PC-24')
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getHostIdByName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        return host?.id
    }

    /**
     * # `getFreeHosts()`
     * 
     * Returns free hosts info
     * 
     * ``` ts
     *  const response = await shell.getFreeHosts()
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getFreeHosts() {
        const hosts = await this.api.getHosts()
        return hosts.filter(o => { return !o.sessions[0] || o.sessions[0].user === null})
    }

    /**
     * # `getFreeHostsCount()`
     * 
     * Returns free hosts count
     * 
     * ``` ts
     *  const response = await shell.getFreeHostsCount()
     * ```
     * `@xl-soft/smartshell-io-deno/hosts`
     */
    public async getFreeHostsCount() {
        const hosts = await this.api.getHosts()
        const filtred = hosts.filter(o => { return !o.sessions[0] || o.sessions[0].user === null})
        return filtred.length
    }



}

