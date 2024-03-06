import { Api } from "./api.ts";
import { utils as util } from "./utils.ts";

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
     * # `utils`
     * 
     * Object with utils
     * 
     * ``` ts
     *  const utils = await shell.utils
     * ```
     * `@xl-soft/smartshell-io-deno`
     */
    public utils = util

    /**
     * # `SmartShell` class
     * 
     * Create connetcion instance
     * 
     * ``` ts
     *  const shell = await new SmartShell({
     *      login: '9998887766',
     *      password: 'pasw0rd',
     *      club_id: 1111,
     *      regional_code: 7,
     *      host: 'billing'
     *  })
     * ```
     * `@xl-soft/smartshell-io-deno`
     */
    constructor(private shell: ShellUser) {
        this.api = new Api(this.shell.host, this.shell.login, this.shell.password, this.shell.club_id, this.shell.regional_code)
    }

    // * ---------------------------- Auth ----------------------------

    /**
     * # `getAccessToken()`
     * 
     * Returns access token for connection
     * 
     * ``` ts
     * console.log(await shell.getAccessToken())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getClubs())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getClubById(1234))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getGoods())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getGoodByName('Cola'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getGoodByBarcode('501234576421'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getServices())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getServiceByName('Hookah'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getServiceByBarcode('501234576421'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getPromocodes())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getPromocodeByName('SALE50'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getPromocodeByName(name: string) {
        const promos = await this.api.getPromocodes()
        return promos.find(o => o.code === name);
    }

    // * ---------------------------- Stats ----------------------------

    /**
     * # `getStat()`
     * 
     * Returns full report from date and time to date and time.
     * 
     * ``` ts
     * console.log(await shell.getStat())
     * console.log(await shell.getStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getGoodsStat())
     * console.log(await shell.getGoodsStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getGoodsStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getServicesStat())
     * console.log(await shell.getServicesStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getServicesStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getOrdersStat())
     * console.log(await shell.getOrdersStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getOrdersStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getSeancesStat())
     * console.log(await shell.getSeancesStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getSeancesStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getDepositStat())
     * console.log(await shell.getDepositStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getDepositStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getMoneyStat())
     * console.log(await shell.getMoneyStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getMoneyStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getRevenueStat())
     * console.log(await shell.getRevenueStat('2023-07-20', 'CURRENT', 'TODAY', 'CURRENT'))
     * console.log(await shell.getRevenueStat('2023-07-20', 'CURRENT'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getApps())
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getApps() {
        const shortcuts = await this.api.getShortcuts()
        return shortcuts.filter(o => { return o.type === "APPLICATION"; });
    }

    /**
     * # `getAppByName()`
     * 
     * Returns club app shortcut
     * 
     * ``` ts
     * console.log(await shell.getAppByName('Discord'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getAppByName(name: string) {
        const shortcuts = await this.api.getShortcuts()
        const filtred = shortcuts.filter(o => { return o.type === "APPLICATION"; });
        return filtred.find(o => o.title === name);
    }

    /**
     * # `getPopularApps()`
     * 
     * Returns popular club apps shortcuts
     * 
     * ``` ts
     * console.log(await shell.getPopularApps())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getGames())
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getGames() {
        const shortcuts = await this.api.getShortcuts()
        return shortcuts.filter(o => { return o.type === "GAME"; });
    }

    /**
     * # `getGameByName()`
     * 
     * Returns club game shortcut
     * 
     * ``` ts
     * console.log(await shell.getGameByName('Dota 2'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getGameByName(name: string) {
        const shortcuts = await this.api.getShortcuts()
        const filtred = shortcuts.filter(o => { return o.type === "GAME"; });
        return filtred.find(o => o.title === name);
    }

    /**
     * # `getPopularGames()`
     * 
     * Returns popular club games shortcuts
     * 
     * ``` ts
     * console.log(await shell.getPopularGames())
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
     * console.log(await shell.getTariffs())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getTariffByName('Night'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getActiveTariffs())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getActiveUserTariffs())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getConnectionUser())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getUsersByQuery('XL Sof'))
     * console.log(await shell.getUsersByQuery('9999'))
     * console.log(await shell.getUsersByQuery('Torshin'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getUserByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getUserByHostName('PC-24'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getUserByHostName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        if (host?.sessions[0].user === null) return { error: 'No one using this host' }
        const users = await this.api.getUsersByQuery(String(host?.sessions[0]!.user?.phone))
        return users[0]
    }

    // * ---------------------------- Payments ----------------------------

    /**
     * # `getPaymentsByPhone()`
     * 
     * Returns all user payments by phone
     * 
     * ``` ts
     * console.log(await shell.getPaymentsByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return []
        const payments = await this.api.getPayments(users[0].uuid)
        return payments
    }

    /**
     * # `getCardPaymentsByPhone()`
     * 
     * Returns all user payments with card by phone
     * 
     * ``` ts
     * console.log(await shell.getCardPaymentsByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getCardPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return []
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "CARD"; });
        return filtred
    }

    /**
     * # `getCashPaymentsByPhone()`
     * 
     * Returns all user payments with cash by phone
     * 
     * ``` ts
     * console.log(await shell.getCashPaymentsByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getCashPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return []
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "CASH"; });
        return filtred
    }

    /**
     * # `getDepositPaymentsByPhone()`
     * 
     * Returns all user payments with deposit by phone
     * 
     * ``` ts
     * console.log(await shell.getDepositPaymentsByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getDepositPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return []
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "DEPOSIT"; });
        return filtred
    }

    /**
     * # `getBonusPaymentsByPhone()`
     * 
     * Returns all user payments with bonus by phone
     * 
     * ``` ts
     * console.log(await shell.getBonusPaymentsByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getBonusPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return []
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "BONUS"; });
        return filtred
    }

    // * ---------------------------- Shifts ----------------------------

    /**
     * # `getShifts()`
     * 
     * Returns all shifts on current club
     * 
     * ``` ts
     * console.log(await shell.getShifts())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getShiftsByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getShiftsByPhone(phone: string) {
        const shifts = await this.api.getShifts()
        return shifts.filter(o => { return o.worker.phone === phone; })
    }

    /**
     * # `getShiftById()`
     * 
     * Returns shift with specific id
     * 
     * ``` ts
     * console.log(await shell.getShiftById(639126))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getLastShift())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getLastShiftByPhone('79999999999'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getLastShiftByPhone(phone: string) {
        const shifts = await this.api.getShifts()
        const shift = shifts.filter(o => { return o.worker.phone === phone; })
        return shift[0]
    }

    /**
     * # `getActiveShift()`
     * 
     * Returns current active shift
     * 
     * ``` ts
     * console.log(await shell.getActiveShift())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getTasks())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getFinishedTasks())
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getFinishedTasks() {
        const tasks = await this.api.getTasks()
        return tasks.filter(o => { return o.finished_at !== null; })
    }

    /**
     * # `getActiveTasks()`
     * 
     * Returns all active (unfinished) tasks from dashboard
     * 
     * ``` ts
     * console.log(await shell.getActiveTasks())
     * ```
     * `@xl-soft/smartshell-io-deno/task`
     */
    public async getActiveTasks() {
        const tasks = await this.api.getTasks()
        return tasks.filter(o => { return o.finished_at === null; })
    }

    // * ---------------------------- Utils ----------------------------

    /**
     * # `getVersion()`
     * 
     * Returns versions of server and client and random wolf quote (АУФ) 
     * 
     * ### *БЕЗУМНО МОЖНО БЫТЬ ПЕРВЫМ...*
     * ``` ts
     * console.log(await shell.getVersion())
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getCurrency())
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getCurrency() {
        return await this.api.getCurrency()
    }

    // * ---------------------------- Hosts ----------------------------

    /**
     * # `getHosts()`
     * 
     * Returns all club hosts
     * 
     * ``` ts
     * console.log(await shell.getHosts())
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getHosts() {
        return await this.api.getHosts()
    }


    /**
     * # `getHostByName()`
     * 
     * Returns specific host by host name
     * 
     * ``` ts
     * console.log(await shell.getHostByName('PC-24'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getHostInfoByName('PC-24'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getHostCountersByName('PC-24'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getHostDisksByName('PC-24'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getHostDisksByName(name: string) {
        const hosts = await this.api.getHosts()
        const host = hosts.find(o => o.alias === name);
        return host?.counters!.disk_status
    }

    /**
     * # `getHostLastCommentByName()`
     * 
     * Returns host last comment by host name 
     * 
     * ``` ts
     * console.log(await shell.getHostLastCommentByName('PC-24'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getHostIdByName('PC-24'))
     * ```
     * `@xl-soft/smartshell-io-deno/`
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
     * console.log(await shell.getFreeHosts())
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getFreeHosts() {
        const hosts = await this.api.getHosts()
        return hosts.filter(o => { return !o.sessions[0] || o.sessions[0].user === null })
    }

    /**
     * # `getFreeHostsCount()`
     * 
     * Returns free hosts count
     * 
     * ``` ts
     * console.log(await shell.getFreeHostsCount())
     * ```
     * `@xl-soft/smartshell-io-deno/`
     */
    public async getFreeHostsCount() {
        const hosts = await this.api.getHosts()
        const filtred = hosts.filter(o => { return !o.sessions[0] || o.sessions[0].user === null })
        return filtred.length
    }

    // * ---------------------------- Deposit ----------------------------

    /**
     * # `setDepositByPhone()`
    * 
    * Returns boolean
    * 
    * ``` ts
    * console.log(await shell.setDepositByPhone('79999999999', 500))
    * ```
    * `@xl-soft/smartshell-io-deno/`
    */
    public async setDepositByPhone(phone: string, ammount: number): Promise<boolean> {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return false
        await this.api.setDeposit(users[0].uuid, ammount)
        return true
    }

    /**
    * # `increaseDepositByPhone()`
    * 
    * Returns boolean
    * 
    * ``` ts
    * console.log(await shell.increaseDepositByPhone('79999999999', 500))
    * ```
    * `@xl-soft/smartshell-io-deno/`
    */
    public async increaseDepositByPhone(phone: string, ammount: number): Promise<boolean> {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return false
        await this.api.setDeposit(users[0].uuid, users[0].deposit+ammount)
        return true
    }

    /**
    * # `createClientCommentByPhone()`
    * 
    * Returns free hosts count
    * 
    * ``` ts
    * console.log(await shell.createClientCommentByPhone('79999999999', 'Comment text'))
    * ```
    * `@xl-soft/smartshell-io-deno/`
    */
    public async createClientCommentByPhone(phone: string, text: string): Promise<boolean> {
        const users = await this.api.getUsersByQuery(phone)
        if (users.length === 0) return false
        await this.api.createComment(users[0].id, text)
        return true
    }

}

