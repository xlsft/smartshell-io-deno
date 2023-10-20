type Mutation = {
  createAchievement: Achievement;
  deleteAchievement: Achievement;
  createBooking: Booking;
  updateBooking: Booking;
  setBookingStatus: Booking;
  createCashOrder: CashOrder;
  /** exists:cash_orders,id */
  deleteCashOrder: CashOrder;
  /** exists:client_sessions,id */
  changeClientSessionHost: ClientSession;
  /** exists:client_sessions,id */
  stopClientSession: ClientSession;
  startClientSession: ClientSession;
  finishClientSession: ClientSession;
  unpauseClientSession: ClientSession;
  createComment: Comment;
  /** exists:comments,id */
  deleteComment: Comment;
  createClubComment: ClubComment;
  readAllClubComments?: Maybe<Scalars["Boolean"]>;
  readClubComment: ClubComment;
  createDiscount: Discount;
  /** soft_exist:discounts,id */
  updateDiscount: Discount;
  /** soft_exist:discounts,id */
  deleteDiscount: Discount;
  createGameAccount: GameAccount;
  /** exists:game_accounts,id */
  updateGameAccount: GameAccount;
  /** exists:game_accounts,id */
  deleteGameAccount: GameAccount;
  /** exists:client_sessions,id */
  freeGameAccount: GameAccount;
  pickGameAccount: FreeGameAccount;
  createGameAccountGroup: GameAccountGroup;
  /** exists:game_account_groups,id */
  updateGameAccountGroup: GameAccountGroup;
  /** exists:game_account_groups,id */
  deleteGameAccountGroup: GameAccountGroup;
  createGood: Good;
  /** "soft_exist:goods,id */
  updateGood: Good;
  /** "soft_exist:goods,id */
  deleteGood: Good;
  changeGoodsQuantity: Scalars["Boolean"];
  registerHost: Scalars["String"];
  createHost: Host;
  /** "soft_exist:hosts,id */
  updateHost: Host;
  /** "soft_exist:hosts,id */
  deleteHost: Host;
  /** "soft_exist:hosts,id */
  setHostServiceMode: Host;
  setShellMode: Host;
  updateHostState: HostStatus;
  penaltyHost: Host;
  applyNewHostDevices: Host;
  callAdmin: Scalars["Boolean"];
  adminCallDone: Scalars["Boolean"];
  updateHostIpAddress: Host;
  createCommand: HostCommand;
  sendWakePacket: Scalars["Boolean"];
  updateHostCommandStatus: HostCommand;
  createHostGroup: HostGroup;
  /** exists:host_groups,id */
  updateHostGroup: HostGroup;
  /** exists:host_groups,id */
  deleteHostGroup: HostGroup;
  startHostSession: HostSession;
  finishHostSession: HostSession;
  createHostType: HostType;
  /** exists:host_types,id */
  updateHostType: HostType;
  /** exists:host_types,id */
  deleteHostType: HostType;
  createDepositCashback: DepositCashback;
  updateDepositCashback: DepositCashback;
  deleteDepositCashback: DepositCashback;
  organizationRegister: Organization;
  organizationConfirmCode: ConfirmationResult;
  organizationLogin: AccessToken;
  organizationLogout: Scalars["Boolean"];
  organizationStartResetPassword: Scalars["String"];
  organizationResetPassword: Scalars["Boolean"];
  organizationSendConfirmationCode: Scalars["Boolean"];
  organizationVerifyConfirmationCode: Scalars["Boolean"];
  organizationUpdate: Organization;
  createClub: Club;
  updateClub: Club;
  deleteClub: Club;
  importClub: Scalars["Boolean"];
  importUsers: Scalars["Boolean"];
  createLicenseTariff: LicenseTariff;
  updateLicenseTariff: LicenseTariff;
  deleteLicenseTariff: LicenseTariff;
  createLicenseModule: LicenseTariffModule;
  updateLicenseModule: LicenseTariffModule;
  deleteLicenseModule: LicenseTariffModule;
  createLicenseModuleCategory: LicenseTariffCategory;
  updateLicenseModuleCategory: LicenseTariffCategory;
  deleteLicenseModuleCategory: LicenseTariffCategory;
  createContractor: Contractor;
  updateContractor: Contractor;
  deleteContractor: Contractor;
  createLicensePayment: LicensePayment;
  createAdditionalLicensePayment: LicensePayment;
  magicInit?: Maybe<Scalars["Boolean"]>;
  sendClubOnVerification: Club;
  setClubAutoPayStatus: Club;
  setClubAutoPayCardId: Club;
  deleteOrganizationPaymentCard: OrganizationPaymentCard;
  createPayment: Payment;
  validatePayment: Scalars["Boolean"];
  refundPayment: Payment;
  createPaymentTransaction: PaymentTransaction;
  createPromoCode: PromoCode;
  /** soft_exist:promo_codes,id */
  updatePromoCode: PromoCode;
  /** soft_exist:promo_codes,id */
  deletePromoCode: PromoCode;
  createService: Service;
  /** soft_exist:services,id */
  updateService: Service;
  /** soft_exist:services,id */
  deleteService: Service;
  setSettingValue: Scalars["Boolean"];
  setMultipleSettingValues: Scalars["Boolean"];
  setTelegramChannel: Scalars["Boolean"];
  setSetting: Setting;
  setSettings: Array<Setting>;
  setCloudPaymentsAccountToCompany: CloudPaymentsAccount;
  createShortcut: Shortcut;
  /** exists:shortcuts,id */
  updateShortcut: Shortcut;
  /** exists:shortcuts,id */
  deleteShortcut: Shortcut;
  uploadShortcutImage?: Maybe<Scalars["String"]>;
  updateShortcutSort: Scalars["Boolean"];
  createShortcutGroup: ShortcutGroup;
  /** exists:shortcut_groups,id */
  updateShortcutGroup: ShortcutGroup;
  /** exists:shortcut_groups,id */
  deleteShortcutGroup: ShortcutGroup;
  createTariff: Tariff;
  /** soft_exist:tariffs,id */
  updateTariff: Tariff;
  updateTariffSort: Scalars["Boolean"];
  /** soft_exist:tariffs,id */
  deleteTariff: Tariff;
  verifyUser: User;
  banClient: User;
  setDeposit: User;
  setUserDiscount: User;
  uploadUserTable: Scalars["Int"];
  forceDeleteUser: User;
  createWorker: User;
  updateWorker: User;
  disableWorker: User;
  deleteWorker: User;
  startWorkShift: WorkShift;
  finishWorkShift: WorkShift;
  forceFinishWorkShift: WorkShift;
  createWorkerTask: WorkerTask;
  updateWorkerTask: WorkerTask;
  deleteWorkerTask: WorkerTask;
  setWorkerTaskComplete: WorkerTask;
  login: AccessToken;
  relogin: AccessToken;
  logout: Scalars["Boolean"];
  refreshToken: AccessToken;
  register: User;
  emailRegister: User;
  resetPassword: Me;
  updateMe: Me;
  updatePassword: Me;
  clientRegister: User;
  clientLogin: AccessToken;
  clientResetPassword: User;
  clientUpdateMe: User;
  verifyClient: User;
  sendConfirmationCode: Scalars["Boolean"];
  sendClientConfirmationCode: Scalars["Boolean"];
};

type Query = {
  achievements: Array<Achievement>;
  getBooking: Booking;
  getBookings: BookingPaginated;
  cashBoxLicenseToken: Scalars["String"];
  income: Scalars["String"];
  myClubs?: Maybe<Array<ClientClub>>;
  myClub: ClientClub;
  myLastVisitedClub: ClientClub;
  searchClubs?: Maybe<Array<Club>>;
  canUnpauseClientSession: Scalars["Boolean"];
  clientSession: ClientSession;
  clientSessions: ClientSessionPaginated;
  comments: CommentPaginated;
  clubComments: ClubCommentPaginated;
  /** soft_exist:discounts,id */
  discount: Discount;
  discounts: DiscountPaginated;
  events: EventPaginated;
  exportUsers: Scalars["String"];
  /** @orderBy(column: "id", direction: DESC) */
  gameAccounts: Array<GameAccount>;
  /** exists:game_accounts,id */
  gameAccount: GameAccount;
  /** @all @orderBy(column: "id", direction: DESC) */
  gameAccountGroups?: Maybe<Array<GameAccountGroup>>;
  /** exists:game_account_groups,id */
  gameAccountGroup: GameAccountGroup;
  goods: Array<Good>;
  /** "soft_exist:goods,id */
  good: Good;
  searchByEan?: Maybe<EanEntity>;
  hostAccessToken?: Maybe<Scalars["String"]>;
  hosts: Array<Host>;
  hostsByIds: Array<Host>;
  host: Host;
  freeHosts?: Maybe<Array<Host>>;
  currentHost: Host;
  hostGroups: Array<HostGroup>;
  /** exists:host_groups,id */
  hostGroup: HostGroup;
  hostGroupTitles: Array<HostGroupTitle>;
  hostGroupsOverview: Array<HostGroupOverview>;
  hostTypes: Array<HostType>;
  /** exists:host_types,id */
  hostType: HostType;
  hostsOverview: Array<Maybe<HostOverview>>;
  depositCashback: DepositCashback;
  depositCashbacks?: Maybe<Array<DepositCashback>>;
  news: News;
  organizationMe?: Maybe<Organization>;
  club: Club;
  clubs?: Maybe<Array<Club>>;
  licenseTariffGrid: LicenseTariffGrid;
  licenseTariffs?: Maybe<Array<LicenseTariff>>;
  licenseTariff: LicenseTariff;
  licenseModuleCategory: LicenseTariffCategory;
  licenseModule: LicenseTariffModule;
  contractors: Array<Contractor>;
  licensePrice: LicensePrice;
  additionalLicensePrice: LicensePrice;
  licensePayments?: Maybe<Array<LicensePaymentData>>;
  updateLicensePayment: LicensePaymentData;
  magicSuperInit?: Maybe<Scalars["Boolean"]>;
  magicPeriods?: Maybe<Scalars["Boolean"]>;
  organizationClubs?: Maybe<Array<Club>>;
  clubOrganization: Organization;
  getOrganizationPaymentCard: OrganizationPaymentCard;
  getOrganizationPaymentCards?: Maybe<Array<OrganizationPaymentCard>>;
  getUpcomingAutoPaymentData?: Maybe<UpcomingAutoPaymentData>;
  paymentTransactions: PaymentTransactionPaginated;
  permissions: Array<Permission>;
  /** soft_exist:promo_codes,id */
  promoCode: PromoCode;
  promoCodes: PromoCodePaginated;
  validatePromoCode: PromoCode;
  report: Report;
  clientsPaymentReport: ClientsPaymentReportPaginated;
  uniqueUsersReport: UnifiedReport;
  boughtTariffsReport: UnifiedReport;
  sessionsMoneyReport: UnifiedReport;
  hostsOccupationReport: UnifiedReport;
  salesReport: UnifiedReport;
  roles: Array<Role>;
  /** @orderBy(column: "id", direction: DESC) */
  services: Array<Service>;
  /** soft_exist:users,id */
  service: Service;
  settingValues: Array<SettingPair>;
  shellSettingValues: Scalars["String"];
  shellSettingList: Scalars["String"];
  /** @orderBy(column: "sort", direction: ASC) */
  shortcuts: Array<Shortcut>;
  /** exists:shortcuts,id */
  shortcut: Shortcut;
  getAgeRatings?: Maybe<Array<Maybe<AgeRating>>>;
  shortcutGroups: Array<ShortcutGroup>;
  /** exists:shortcut_groups,id */
  shortcutGroup: ShortcutGroup;
  /** order by id desc */
  tariffs: TariffPaginated;
  tariffGrid: Array<TariffGridItem>;
  getCurrentTariff: CurrentTariff;
  user: User;
  workers: UserPaginated;
  /** @orderBy(column: "id", direction: DESC) */
  clients: UserPaginated;
  getPaymentsByClientId: PaymentHistory;
  userImportStatus: Import;
  getActiveClientList?: Maybe<Array<ActiveClient>>;
  activeWorkShift?: Maybe<WorkShift>;
  workShifts: WorkShiftPaginated;
  finishedWorkShifts: Array<WorkShift>;
  /** exists:work_shifts,id */
  workShift: WorkShift;
  getDetailedWorkShiftMoneyData?: Maybe<DetailedWorkShiftMoneyData>;
  getWorkShiftPaymentOverviewData?: Maybe<WorkShiftPaymentOverviewData>;
  tasks: WorkerTaskPaginated;
  loginExists: Scalars["Boolean"];
  phoneExists: Scalars["Boolean"];
  emailExists: Scalars["Boolean"];
  clientPhoneExists: Scalars["Boolean"];
  clientEmailExists: Scalars["Boolean"];
  nicknameExists: Scalars["Boolean"];
  me?: Maybe<Me>;
  clientMe?: Maybe<User>;
  versions?: Maybe<Versions>;
  now?: Maybe<Scalars["DateTime"]>;
  regions?: Maybe<Array<Maybe<Region>>>;
  currencies: Array<Maybe<Currency>>;
  currency: Currency;
  userClubs?: Maybe<Array<UserClub>>;
  featureFlags: FeatureFlags;
  publicKey: Scalars["String"];
};
