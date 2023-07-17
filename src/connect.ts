import { Api } from "./api.ts";

export default class SmartShell {
    public api: Api
    constructor(private auth: Authform) {
        this.api = new Api('billing', this.auth.login, this.auth.password, this.auth.club_id)
    }

    public async getAccessToken() {
        return await this.api.getAccessToken()
    }

    public async getClubs() {
        return await this.api.getClubList()
    }

    public async getClubById(id: number) {
        const clubs = await this.api.getClubList()
        return clubs.find(o => o.id === id);
    }

    public async getGoods() {
        return await this.api.getGoods()
    }

    public async getGoodByName(name: string) {
        const goods = await this.api.getGoods()
        return goods.find(o => o.title === name);
    }

    public async getGoodByEan(ean: string) {
        const goods = await this.api.getGoods()
        return goods.find(o => o.ean === ean);
    }

    public async getPromocodes() {
        return await this.api.getPromocodes()
    }

    public async getPromocodeByName(name: string) {
        const promos =  await this.api.getPromocodes()
        return promos.find(o => o.code === name);
    }

    public async getStat(from?: number, to?: number) {
        return await this.api.getFullReport(from, to)
    }

    public async getGoodsStat(from?: number, to?: number) {
        const report = await this.api.getFullReport(from, to)
        return report.statGoods
    }

    public async getServicesStat(from?: number, to?: number) {
        const report = await this.api.getFullReport(from, to)
        return report.statServices
    }

    public async getOrdersStat(from?: number, to?: number) {
        const report = await this.api.getFullReport(from, to)
        return report.statOrders
    }

    public async getSeancesStat(from?: number, to?: number) {
        const report = await this.api.getFullReport(from, to)
        return report.statSeances
    }

    public async getDepositStat(from?: number, to?: number) {
        const report = await this.api.getFullReport(from, to)
        return report.statDeposit
    }

    public async getMoneyStat(from?: number, to?: number) {
        const report = await this.api.getFullReport(from, to)
        return report.statMoney
    }

    public async getRevenueStat(from?: number, to?: number) {
        const report = await this.api.getFullReport(from, to)
        return report.statMoney.card + report.statMoney.cash
    }

    public async getServices() {
        return await this.api.getServices()
    }

    public async getServiceByName(name: string) {
        const goods = await this.api.getServices()
        return goods.find(o => o.title === name);
    }

    public async getServiceByEan(ean: string) {
        const goods = await this.api.getServices()
        return goods.find(o => o.ean === ean);
    }
    
    public async getApps() {
        const goods = await this.api.getShortcuts()
        return goods.filter(o => { return o.type !== "GAME";});
    }

    public async getAppByName(name: string) {
        const goods = await this.api.getShortcuts()
        const filtred = goods.filter(o => { return o.type !== "GAME";});
        return filtred.find(o => o.title === name);
    }

    public async getGames() {
        const goods = await this.api.getShortcuts()
        return goods.filter(o => { return o.type !== "APPLICATION";});
    }

    public async getGameByName(name: string) {
        const goods = await this.api.getShortcuts()
        const filtred = goods.filter(o => { return o.type !== "APPLICATION";});
        return filtred.find(o => o.title === name);
    }

    public async getPopularGames() {
        const goods = await this.api.getShortcuts()
        return goods.filter(o => { return o.type !== "APPLICATION" && o.popular !== false;});
    }

    public async getPopularApps() {
        const goods = await this.api.getShortcuts()
        return goods.filter(o => { return o.type !== "APPLICATION" && o.popular !== false;});
    }

    public async getTariffs() {
        return await this.api.getTariffs()
    }

    public async getTariffByName(name: string) {
        const goods = await this.api.getTariffs()
        return goods.find(o => o.title === name);
    }

    public async getConnectionUser() {
        return await this.api.getMe()
    }

    public async getUsersByQuery(query: string) {
        return await this.api.getUsersByQuery(query)
    }

    public async getUserByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        return users[0]
    }

    public async getPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        return payments
    }

    public async getCardPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "CARD";});
        return filtred
    }

    public async getCashPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "CASH";});
        return filtred
    }

    public async getDepositPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "DEPOSIT";});
        return filtred
    }

    public async getBonusPaymentsByPhone(phone: string) {
        const users = await this.api.getUsersByQuery(phone)
        const payments = await this.api.getPayments(users[0].uuid)
        const filtred = payments.filter(o => { return o.paymentMethod == "BONUS";});
        return filtred
    }

    public async getShifts() {
        return await this.api.getShifts()
    }

    public async getShiftsByPhone(phone: string) {
        const shifts = await this.api.getShifts()
        return shifts.filter(o => { return o.worker.phone === phone;})
    }

    public async getShiftById(id: number) {
        const shifts = await this.api.getShifts()
        return shifts.find(o => o.id === id);
    }

    public async getLastShift() {
        const shift = await this.api.getShifts()
        return shift[0]
    }

    public async getLastShiftByPhone(phone: string) {
        const shifts = await this.api.getShifts()
        const shift = shifts.filter(o => { return o.worker.phone === phone;})
        return shift[0]
    }

    public async getActiveShift() {
        return await this.api.getActiveShift()
    }

    public async getTasks() {
        return await this.api.getTasks()
    }

    public async getFinishedTasks() {
        const tasks = await this.api.getTasks()
        return tasks.filter(o => { return o.finished_at !== null;})
    }

    public async getActiveTasks() {
        const tasks = await this.api.getTasks()
        return tasks.filter(o => { return o.finished_at === null;})
    }

    public async getVersion() {
        return await this.api.getVersion()
    }

    public async getCurrency() {
        return await this.api.getCurrency()
    }

    public async getPcs() {
        return await this.api.getPcs()
    }

    public async getPcByName(name: string) {
        const pcs = await this.api.getPcs()
        const pc = pcs.find(o => o.alias === name);
        return pc
    }

    public async getPcSessionByName(name: string) {
        const pcs = await this.api.getPcs()
        const pc = pcs.find(o => o.alias === name);
        return pc?.sessions
    }

    public async getPcInfoByName(name: string) {
        const pcs = await this.api.getPcs()
        const pc = pcs.find(o => o.alias === name);
        return pc?.info
    }

    public async getPcCountersByName(name: string) {
        const pcs = await this.api.getPcs()
        const pc = pcs.find(o => o.alias === name);
        return pc?.counters
    }

    public async getPcDisksByName(name: string) {
        const pcs = await this.api.getPcs()
        const pc = pcs.find(o => o.alias === name);
        return pc?.counters.disk_status
    }

    public async getPcCommentByName(name: string) {
        const pcs = await this.api.getPcs()
        const pc = pcs.find(o => o.alias === name);
        return pc?.comment
    }

    public async getFreePcs() {
        const pcs = await this.api.getPcs()
        return pcs.filter(o => { return !o.sessions })
    }

    public async getFreePcsCount() {
        const pcs = await this.api.getPcs()
        return pcs.filter(o => { return !o.sessions }).length
    }

    public async getUserByPcName(name: string) {
        const pcs = await this.api.getPcs()
        const pc = pcs.find(o => o.alias === name);
        if (pc?.sessions[0] === undefined) return {}
        const users = await this.api.getUsersByQuery(String(pc?.sessions[0].user.phone))
        return users[0]
    }
}

