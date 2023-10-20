type AccessToken = {
  token_type: Scalars["String"]
  expires_in: Scalars["Int"]
  access_token: Scalars["String"]
  refresh_token: Scalars["String"]
}

type Achievement = {
  id: Scalars["String"]
  name: Scalars["String"]
  icon_url?: Maybe<Scalars["String"]>
  conditions: Array<Condition>
  rewards: Array<Reward>
  created_at: Scalars["String"]
  status: AchievementStatus
  company_id: Scalars["Int"]
}

type AchievementInput = {
  name: Scalars["String"]
  icon_url?: Maybe<Scalars["String"]>
  conditions: Array<ConditionRequest>
  rewards: Array<RewardRequest>
  status: AchievementStatus
}

declare enum AchievementStatus {
  Active = "ACTIVE",
  Disabled = "DISABLED"
}

type ActiveClient = {
  client_uuid: Scalars["String"]
  nickname: Scalars["String"]
  payments: Scalars["Float"]
  total_seconds: Scalars["Int"]
  last_client_activity?: Maybe<Scalars["DateTime"]>
}

type AdditionalLicensePaymentInput = {
  license_price: AdditionalLicensePriceInput
  contractor_id?: Maybe<Scalars["Int"]>
  success_url?: Maybe<Scalars["String"]>
  fail_url?: Maybe<Scalars["String"]>
}

type AdditionalLicensePriceInput = {
  host_count: Scalars["Int"]
  promocode?: Maybe<Scalars["String"]>
  license_payment_method: LicensePaymentMethod
  club_id: Scalars["Int"]
  modules?: Maybe<Array<Scalars["Int"]>>
}

type AdditionalPaymentData = {
  public_id: Scalars["String"]
  org_id: Scalars["Int"]
  amount: Scalars["Float"]
  description: Scalars["String"]
  currency: Currency
}

type AdditionalTransactionData = {
  public_id?: Maybe<Scalars["String"]>
}

type AgeRating = {
  alias: Scalars["String"]
  value: Scalars["Int"]
}

declare enum AppType {
  Application = "APPLICATION",
  Game = "GAME"
}

type Article = {
  id: Scalars["String"]
  content: Scalars["String"]
  title: Scalars["String"]
  preview: Scalars["String"]
  url: Scalars["String"]
  createdAt: Scalars["String"]
}

type Booking = {
  id: Scalars["Int"]
  hosts?: Maybe<Array<Scalars["Int"]>>
  client?: Maybe<User>
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
  comment?: Maybe<Scalars["String"]>
  status: BookingStatus
  startsIn: Scalars["Int"]
  group?: Maybe<Scalars["String"]>
}

type BookingInput = {
  hosts?: Maybe<Array<Scalars["Int"]>>
  client?: Maybe<Scalars["Int"]>
  comment?: Maybe<Scalars["String"]>
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
  status?: Maybe<BookingStatus>
}

type BookingPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<Booking>>
}

declare enum BookingStatus {
  Active = "ACTIVE",
  Finished = "FINISHED",
  Canceled = "CANCELED",
  Redeemed = "REDEEMED"
}

type BoughtTariffsReport = {
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
}

declare enum CartEntity {
  Good = "GOOD",
  Service = "SERVICE",
  Tariff = "TARIFF"
}

type CashOrder = {
  id: Scalars["Int"]
  work_shift: WorkShift
  type: CashOrderType
  sum: Scalars["Float"]
  comment: Scalars["String"]
  created_at: Scalars["DateTime"]
}

type CashOrderData = {
  rko: Scalars["Float"]
  pko: Scalars["Float"]
}

type CashOrderInput = {
  type: CashOrderType
  sum: Scalars["Float"]
  comment: Scalars["String"]
}

declare enum CashOrderType {
  Pko = "PKO",
  Rko = "RKO"
}

type ChangeClientSessionHostInput = {
  /** exists:hosts,id */
  host_id: Scalars["Int"]
}

type ChangeGoodsQuantityInput = {
  items: Array<ChangeGoodsQuantityItemInput>
  operation: WarehouseOperationType
  comment?: Maybe<Scalars["String"]>
}

/** exists:goods,id */
type ChangeGoodsQuantityItemInput = {
  id: Scalars["Int"]
  quantity: Scalars["Int"]
}

type ClientClub = {
  id: Scalars["Int"]
  name: Scalars["String"]
  address: Scalars["String"]
  city: Scalars["String"]
  last_visited_at: Scalars["DateTime"]
  deposit: Scalars["Float"]
  discount: Scalars["Int"]
  visits: Array<ClientClubVisit>
  accept_payments: Scalars["Boolean"]
}

type ClientClubVisit = {
  visited_at: Scalars["DateTime"]
}

type ClientLoginInput = {
  login: Scalars["String"]
  password: Scalars["String"]
}

type ClientRegisterInput = {
  country_code: Scalars["String"]
  email?: Maybe<Scalars["Email"]>
  phone: Scalars["String"]
  phone_confirmation: Scalars["String"]
  password: Scalars["String"]
  password_confirmation: Scalars["String"]
  dob: Scalars["Date"]
  nickname: Scalars["String"]
  first_name?: Maybe<Scalars["String"]>
  middle_name?: Maybe<Scalars["String"]>
  last_name?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
}

type ClientSession = {
  id: Scalars["Int"]
  client?: Maybe<User>
  hosts: Array<ClientSessionHost>
  duration: Scalars["Int"]
  elapsed: Scalars["Int"]
  total_cost: Scalars["Float"]
  status: ClientSessionType
  seances: Array<Seance>
  created_at: Scalars["DateTime"]
  started_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
  canceled_at?: Maybe<Scalars["DateTime"]>
}

type ClientSessionHost = {
  id: Scalars["Int"]
  host: Host
  started_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
}

type ClientSessionOverview = {
  id: Scalars["Int"]
  duration: Scalars["Int"]
  elapsed: Scalars["Int"]
  time_left: Scalars["Int"]
  started_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
  seances: Array<SeanceOverview>
}

type ClientSessionPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<ClientSession>>
}

type ClientSessionReportInput = {
  client_id: Scalars["Int"]
  from?: Maybe<Scalars["DateTime"]>
  to?: Maybe<Scalars["DateTime"]>
  preset?: Maybe<DateReportEnum>
}

declare enum ClientSessionType {
  Planed = "PLANED",
  Active = "ACTIVE",
  Finished = "FINISHED",
  Cancelled = "CANCELLED"
}

type ClientsInput = {
  q: Scalars["String"]
  sort?: Maybe<SortInput>
}

type ClientsPaymentReportInput = {
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
  sorting?: Maybe<ClientsPaymentReportSortInput>
  search?: Maybe<SearchReportInput>
}

type ClientsPaymentReportItem = {
  user: User
  shop: PaymentReportItem
  tariff: PaymentReportItem
  bonus: PaymentReportItem
  total: PaymentReportItem
  average: PaymentReportItem
}

type ClientsPaymentReportPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<ClientsPaymentReportItem>>
}

type ClientsPaymentReportSortInput = {
  field: Scalars["String"]
  direction: Scalars["String"]
}

type CloudPaymentsAccount = {
  publicId: Scalars["String"]
  secretKey: Scalars["String"]
}

declare enum CloudPaymentsAccountAction {
  Set = "SET",
  Remove = "REMOVE"
}

type Club = {
  id: Scalars["Int"]
  name: Scalars["String"]
  pc_count: Scalars["Int"]
  console_count: Scalars["Int"]
  distribution_type: DistributionType
  contact_name: Scalars["String"]
  contact_type: OrganizationUserType
  address?: Maybe<Scalars["String"]>
  city: Scalars["String"]
  street: Scalars["String"]
  house_number: Scalars["String"]
  created_at: Scalars["DateTime"]
  url?: Maybe<Scalars["String"]>
  telegram?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
  contact_phone: Scalars["String"]
  license?: Maybe<License>
  licenses?: Maybe<Array<License>>
  license_payments?: Maybe<Array<LicensePaymentData>>
  timezone: Scalars["Int"]
  country_code: Scalars["String"]
  host_count: Scalars["Int"]
  locked: Scalars["Boolean"]
  auto_payment_enabled: Scalars["Boolean"]
  organization_payment_card?: Maybe<OrganizationPaymentCard>
  verification_status: ClubVerificationStatus
  verification_status_updated_at?: Maybe<Scalars["DateTime"]>
}

type ClubComment = {
  id: Scalars["Int"]
  client_session: ClientSession
  text: Scalars["String"]
  author?: Maybe<User>
  created_at: Scalars["DateTime"]
  deleted_at?: Maybe<Scalars["DateTime"]>
  host_alias: Scalars["String"]
  host_group_name: Scalars["String"]
  grade: Scalars["Int"]
  is_read: Scalars["Boolean"]
}

type ClubCommentInput = {
  text?: Maybe<Scalars["String"]>
  grade: Scalars["Int"]
}

type ClubCommentPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<ClubComment>>
  summary: ClubCommentSummary
}

type ClubCommentSearchInput = {
  user_uuid?: Maybe<Scalars["String"]>
  sort?: Maybe<ClubCommentSearchSort>
}

declare enum ClubCommentSearchSort {
  NewFirst = "NEW_FIRST",
  OldFirst = "OLD_FIRST",
  HighGradeFirst = "HIGH_GRADE_FIRST",
  LowGradeFirst = "LOW_GRADE_FIRST"
}

type ClubCommentSummary = {
  average_grade: Scalars["Float"]
  unread_total: Scalars["Int"]
  five: Scalars["Int"]
  four: Scalars["Int"]
  three: Scalars["Int"]
  two: Scalars["Int"]
  one: Scalars["Int"]
}

type ClubInput = {
  name: Scalars["String"]
  address?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  street?: Maybe<Scalars["String"]>
  house_number?: Maybe<Scalars["String"]>
  contact_name: Scalars["String"]
  contact_type: OrganizationUserType
  contact_phone: Scalars["String"]
  pc_count?: Maybe<Scalars["Int"]>
  console_count?: Maybe<Scalars["Int"]>
  distribution_type?: Maybe<DistributionType>
  url?: Maybe<Scalars["String"]>
  telegram?: Maybe<Scalars["String"]>
  info?: Maybe<Scalars["String"]>
  timezone?: Maybe<Scalars["Int"]>
  country_code: Scalars["String"]
  verify?: Maybe<Scalars["Boolean"]>
}

declare enum ClubVerificationStatus {
  Unverified = "UNVERIFIED",
  Review = "REVIEW",
  Verified = "VERIFIED",
  Declined = "DECLINED"
}

type Comment = {
  id: Scalars["Int"]
  type: CommentType
  entity_id: Scalars["Int"]
  entity: CommentEntity
  text: Scalars["String"]
  author?: Maybe<User>
  created_at: Scalars["DateTime"]
  deleted_at?: Maybe<Scalars["DateTime"]>
  data: Scalars["String"]
}

type CommentEntity = User | Host | ClientSession

type CommentInput = {
  text: Scalars["String"]
  type: CommentType
  entity_id: Scalars["Int"]
}

type CommentPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<Comment>>
}

type CommentSearchInput = {
  entity_id: Scalars["Int"]
  type: CommentType
}

declare enum CommentType {
  Client = "CLIENT",
  Host = "HOST",
  ClientSession = "CLIENT_SESSION"
}

type Condition = {
  name: Scalars["String"]
  value: Scalars["Float"]
}

type ConditionRequest = {
  name: Scalars["String"]
  value: Scalars["Float"]
}

declare enum ConfirmationCodeType {
  Register = "REGISTER",
  ResetPassword = "RESET_PASSWORD"
}

type ConfirmationResult = {
  token?: Maybe<AccessToken>
  success: Scalars["Boolean"]
  hash?: Maybe<Scalars["String"]>
}

type Contractor = {
  id: Scalars["Int"]
  name: Scalars["String"]
  inn: Scalars["String"]
  kpp: Scalars["String"]
  address: Scalars["String"]
  phone: Scalars["String"]
  email: Scalars["String"]
}

type ContractorInput = {
  name: Scalars["String"]
  inn: Scalars["String"]
  kpp: Scalars["String"]
  address: Scalars["String"]
  phone: Scalars["String"]
  email: Scalars["String"]
}

/** exists:hosts,id */
type CreateCommandInput = {
  host_id: Scalars["Int"]
  action: HostCommandAction
  param?: Maybe<Scalars["String"]>
}

/** exists:game_account_groups,id */
type CreateGameAccountInput = {
  login: Scalars["String"]
  password: Scalars["String"]
  active: Scalars["Boolean"]
  group_id: Scalars["Int"]
}

type CreateWorkerInput = {
  phone: Scalars["String"]
  first_name: Scalars["String"]
  last_name: Scalars["String"]
  middle_name: Scalars["String"]
  role_ids: Array<Scalars["Int"]>
}

type Currency = {
  id: Scalars["Int"]
  title: Scalars["String"]
  alias: Scalars["String"]
  letter: Scalars["String"]
}

type CurrentTariff = {
  id: Scalars["Int"]
  title: Scalars["String"]
  is_active: Scalars["Boolean"]
  duration: Scalars["Int"]
  cost: Scalars["Float"]
  use_global_discounts: Scalars["Boolean"]
  has_fixed_finish_time: Scalars["Boolean"]
  per_minute: Scalars["Boolean"]
  pausable: Scalars["Boolean"]
  currency: Currency
}

declare enum DateReportEnum {
  Today = "TODAY",
  Week = "WEEK",
  Month = "MONTH",
  Year = "YEAR"
}

type DepositCashback = {
  id: Scalars["Int"]
  amount: Scalars["Float"]
  value: Scalars["Float"]
  is_percent: Scalars["Boolean"]
  is_active: Scalars["Boolean"]
  starts_at?: Maybe<Scalars["DateTime"]>
  expires_at?: Maybe<Scalars["DateTime"]>
  is_expired: Scalars["Boolean"]
}

type DepositCashbackInput = {
  amount: Scalars["Float"]
  value: Scalars["Float"]
  is_percent: Scalars["Boolean"]
  is_active: Scalars["Boolean"]
  starts_at?: Maybe<Scalars["DateTime"]>
  expires_at?: Maybe<Scalars["DateTime"]>
}

type DetailedWorkShiftMoneyData = {
  id: Scalars["Int"]
  worker: User
  cash_on_start: Scalars["Float"]
  total: Scalars["Float"]
  deposit: Scalars["Float"]
  bonus: Scalars["Float"]
  refunded: Scalars["Float"]
  cash: MoneyData
  card: MoneyData
  cash_orders: Array<Maybe<CashOrder>>
  currency?: Maybe<Currency>
  created_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
}

type Discount = {
  id: Scalars["Int"]
  author: User
  client?: Maybe<User>
  title: Scalars["String"]
  value: Scalars["Float"]
  entity?: Maybe<CartEntity>
  entity_id?: Maybe<Scalars["Int"]>
  created_at: Scalars["DateTime"]
  is_tracked: Scalars["Boolean"]
}

type DiscountInput = {
  client_id?: Maybe<Scalars["Int"]>
  title: Scalars["String"]
  value: Scalars["Float"]
  entity?: Maybe<CartEntity>
  entity_id?: Maybe<Scalars["Int"]>
  is_tracked?: Maybe<Scalars["Boolean"]>
}

type DiscountPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<Discount>>
}

declare enum DistributionType {
  Local = "LOCAL",
  Cloud = "CLOUD"
}

type EanEntity = {
  entity_id: Scalars["Int"]
  entity_type: EanEntityType
}

declare enum EanEntityType {
  Good = "GOOD",
  Service = "SERVICE",
  Tariff = "TARIFF",
  Host = "HOST",
  User = "USER"
}

type EmailExistsInput = {
  email: Scalars["String"]
}

type EmailRegisterInput = {
  login: Scalars["String"]
  email: Scalars["Email"]
  phone: Scalars["String"]
  phone_confirmation: Scalars["String"]
  password: Scalars["String"]
  dob: Scalars["Date"]
}

type SSEvent = {
  id: Scalars["Int"]
  type: Scalars["String"]
  created_at: Scalars["DateTime"]
  relations?: Maybe<Scalars["String"]>
  workShift?: Maybe<WorkShift>
  initiator?: Maybe<User>
  initiatorHost?: Maybe<Host>
  description?: Maybe<Scalars["String"]>
}

type EventPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<Event>>
}

type EventsInput = {
  types?: Maybe<Array<Scalars["String"]>>
  start?: Maybe<Scalars["DateTime"]>
  finish?: Maybe<Scalars["DateTime"]>
  work_shift_id?: Maybe<Scalars["Int"]>
  q?: Maybe<Scalars["String"]>
}

type FeatureFlags = {
  subscription: Scalars["String"]
  expires_at: Scalars["DateTime"]
  modules?: Maybe<Array<Scalars["String"]>>
  host_count: Scalars["Int"]
  used_trial: Scalars["Boolean"]
}

type FinishedWorkShiftInput = {
  from: Scalars["Date"]
  to: Scalars["Date"]
}

type FinishWorkShiftInput = {
  comment?: Maybe<Scalars["String"]>
}

type FlagInput = {
  value: Scalars["Boolean"]
}

type FreeGameAccount = {
  id: Scalars["Int"]
  login: Scalars["String"]
  password: Scalars["String"]
}

type GameAccount = {
  id: Scalars["Int"]
  login: Scalars["String"]
  password: Scalars["String"]
  group: GameAccountGroup
  host?: Maybe<Host>
  active: Scalars["Boolean"]
  status: GameAccountStatus
  busy: Scalars["Boolean"]
}

type GameAccountGroup = {
  id: Scalars["Int"]
  title: Scalars["String"]
  launcher: GameAccountLauncher
  accounts?: Maybe<Array<GameAccount>>
  shortcuts?: Maybe<Array<Shortcut>>
}

type GameAccountGroupInput = {
  title: Scalars["String"]
  launcher: GameAccountLauncher
}

declare enum GameAccountLauncher {
  Steam = "STEAM",
  Egs = "EGS",
  Battlenet = "BATTLENET",
  Origin = "ORIGIN",
  Ea = "EA",
  Vkplay = "VKPLAY"
}

declare enum GameAccountStatus {
  Offline = "OFFLINE",
  Online = "ONLINE",
  InGame = "IN_GAME"
}

type GetActiveClientListInput = {
  from?: Maybe<Scalars["DateTime"]>
  to?: Maybe<Scalars["DateTime"]>
  preset?: Maybe<DateReportEnum>
  sort: SortActiveClientEnum
}

/** exists:client_sessions,id */
type GetCurrentTariff = {
  client_session_id: Scalars["Int"]
}

type Good = {
  id: Scalars["Int"]
  title: Scalars["String"]
  subtitle: Scalars["String"]
  comment: Scalars["String"]
  cost: Scalars["Float"]
  wholesale_cost: Scalars["Float"]
  tax_percent: Scalars["Float"]
  unit_name: Scalars["String"]
  unit_value: Scalars["Float"]
  amount: Scalars["Int"]
  image: Scalars["String"]
  use_global_discounts: Scalars["Boolean"]
  created_at: Scalars["DateTime"]
  state: WarehouseState
  tax_system?: Maybe<TaxSystem>
  vat?: Maybe<Vat>
  ean?: Maybe<Scalars["String"]>
  use_fair_sign: Scalars["Boolean"]
  is_excise: Scalars["Boolean"]
}

type GoodInput = {
  title: Scalars["String"]
  subtitle?: Maybe<Scalars["String"]>
  comment?: Maybe<Scalars["String"]>
  cost: Scalars["Float"]
  wholesale_cost: Scalars["Float"]
  tax_percent?: Maybe<Scalars["Float"]>
  unit_name?: Maybe<Scalars["String"]>
  unit_value?: Maybe<Scalars["Float"]>
  amount?: Maybe<Scalars["Int"]>
  image?: Maybe<Scalars["String"]>
  use_global_discounts: Scalars["Boolean"]
  tax_system?: Maybe<TaxSystem>
  vat?: Maybe<Vat>
  ean?: Maybe<Scalars["String"]>
  use_fair_sign?: Maybe<Scalars["Boolean"]>
  is_excise?: Maybe<Scalars["Boolean"]>
}

/** soft_exist:users,id */
type GoodsInput = {
  client_uuid?: Maybe<Scalars["String"]>
}

type Host = {
  id: Scalars["Int"]
  group_id: Scalars["Int"]
  group: HostGroup
  type_id?: Maybe<Scalars["Int"]>
  position?: Maybe<Scalars["Int"]>
  alias: Scalars["String"]
  comment?: Maybe<Scalars["String"]>
  mac_addr?: Maybe<Scalars["MacAddress"]>
  ip_addr?: Maybe<Scalars["IpAddress"]>
  dns_name?: Maybe<Scalars["String"]>
  coord_x?: Maybe<Scalars["Int"]>
  coord_y?: Maybe<Scalars["Int"]>
  is_deleted: Scalars["Boolean"]
  in_service: Scalars["Boolean"]
  created_at: Scalars["DateTime"]
  info?: Maybe<HostInfo>
  counters?: Maybe<HostCounters>
  sessions: Array<HostSession>
  client_sessions: Array<ClientSession>
  /** @deprecated get last comment from comment, or use getComments */
  comments: Array<Comment>
  shell_mode: ShellMode
  last_online?: Maybe<Scalars["DateTime"]>
  online: Scalars["Boolean"]
  bookings: Array<Booking>
  device_has_changed: Scalars["Boolean"]
  device_updated_at?: Maybe<Scalars["DateTime"]>
  device_changes?: Maybe<Array<HostDevice>>
  locked: Scalars["Boolean"]
  admin_called_at?: Maybe<Scalars["DateTime"]>
}

type HostAccessTokenInput = {
  mac_address: Scalars["MacAddress"]
  public_key: Scalars["String"]
}

type HostCommand = {
  id: Scalars["Int"]
  action: HostCommandAction
  status?: Maybe<Scalars["String"]>
  param?: Maybe<Scalars["String"]>
}

declare enum HostCommandAction {
  Shutdown = "SHUTDOWN",
  Reboot = "REBOOT",
  AllowAdminMode = "ALLOW_ADMIN_MODE",
  DisableShell = "DISABLE_SHELL",
  ShowMessage = "SHOW_MESSAGE",
  Logoff = "LOGOFF",
  Run = "RUN",
  SendLogs = "SEND_LOGS",
  ShellUninstall = "SHELL_UNINSTALL",
  ShellUpdate = "SHELL_UPDATE"
}

type HostCounters = {
  cpu_temp: Scalars["Float"]
  disk_temp: Scalars["Float"]
  disk_status?: Maybe<Array<HostDiskInfo>>
  active_window?: Maybe<Scalars["String"]>
}

type HostDevice = {
  alias: Scalars["String"]
  old: Scalars["String"]
  new: Scalars["String"]
}

type HostDiskInfo = {
  letter: Scalars["String"]
  total: Scalars["Int"]
  used: Scalars["Int"]
}

type HostDiskInfoInput = {
  letter: Scalars["String"]
  total: Scalars["Int"]
  used: Scalars["Int"]
}

type HostGroup = {
  id: Scalars["Int"]
  title: Scalars["String"]
  created_at: Scalars["DateTime"]
  updated_at: Scalars["DateTime"]
  hosts: Array<Host>
  customization?: Maybe<HostGroupCustomization>
}

type HostGroupCustomization = {
  color?: Maybe<Scalars["String"]>
  background?: Maybe<Scalars["String"]>
  screensaver?: Maybe<Scalars["String"]>
}

type HostGroupCustomizationInput = {
  color?: Maybe<Scalars["String"]>
  background?: Maybe<Scalars["String"]>
  screensaver?: Maybe<Scalars["String"]>
}

type HostGroupInput = {
  title: Scalars["String"]
  customization?: Maybe<HostGroupCustomizationInput>
}

type HostGroupOverview = {
  id: Scalars["Int"]
  title: Scalars["String"]
  customization?: Maybe<HostGroupCustomization>
  hosts: Array<HostOverview>
}

type HostGroupTitle = {
  id: Scalars["Int"]
  title: Scalars["String"]
}

type HostInfo = {
  processor?: Maybe<Scalars["String"]>
  ram?: Maybe<Scalars["String"]>
  video?: Maybe<Scalars["String"]>
  disc?: Maybe<Scalars["String"]>
  shell_version?: Maybe<Scalars["String"]>
}

type HostInput = {
  group_id: Scalars["Int"]
  type_id: Scalars["Int"]
  position?: Maybe<Scalars["Int"]>
  alias: Scalars["String"]
  comment?: Maybe<Scalars["String"]>
  mac_addr?: Maybe<Scalars["MacAddress"]>
  ip_addr?: Maybe<Scalars["IpAddress"]>
  dns_name?: Maybe<Scalars["String"]>
  coord_x?: Maybe<Scalars["Int"]>
  coord_y?: Maybe<Scalars["Int"]>
}

type HostOverview = {
  id: Scalars["Int"]
  group_id: Scalars["Int"]
  type_id?: Maybe<Scalars["Int"]>
  position?: Maybe<Scalars["Int"]>
  alias: Scalars["String"]
  mac_addr?: Maybe<Scalars["MacAddress"]>
  ip_addr?: Maybe<Scalars["IpAddress"]>
  dns_name?: Maybe<Scalars["String"]>
  coord_x?: Maybe<Scalars["Int"]>
  coord_y?: Maybe<Scalars["Int"]>
  in_service: Scalars["Boolean"]
  online: Scalars["Boolean"]
  info?: Maybe<HostInfo>
  counters?: Maybe<HostCounters>
  shell_mode: ShellMode
  device_has_changed: Scalars["Boolean"]
  locked: Scalars["Boolean"]
  bookings: Array<Booking>
  user?: Maybe<User>
  client_sessions: Array<Maybe<ClientSessionOverview>>
}

type HostSession = {
  id: Scalars["Int"]
  host_id: Scalars["Int"]
  alias?: Maybe<Scalars["String"]>
  user?: Maybe<User>
  started_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
}

type HostSessionInput = {
  processor?: Maybe<Scalars["String"]>
  ram?: Maybe<Scalars["String"]>
  video?: Maybe<Scalars["String"]>
  disc?: Maybe<Scalars["String"]>
  shell_version?: Maybe<Scalars["String"]>
  ip_addr?: Maybe<Scalars["String"]>
}

type HostsOccupationReport = {
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
}

type HostStatus = {
  client_session?: Maybe<ClientSession>
  current_tariff?: Maybe<CurrentTariff>
  command?: Maybe<HostCommand>
  host: Host
}

type HostType = {
  id: Scalars["Int"]
  title: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  created_at: Scalars["DateTime"]
  updated_at?: Maybe<Scalars["DateTime"]>
}

type HostTypeInput = {
  title: Scalars["String"]
  description: Scalars["String"]
}

type Import = {
  id: Scalars["Int"]
  status: ImportStatusEnum
  failures?: Maybe<Array<ImportFailure>>
  created_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
}

type ImportFailure = {
  row?: Maybe<Scalars["Int"]>
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>
  values?: Maybe<Array<Maybe<Scalars["String"]>>>
  attribute?: Maybe<Scalars["String"]>
}

declare enum ImportStatusEnum {
  New = "NEW",
  Processing = "PROCESSING",
  Finish = "FINISH",
  FinishHasError = "FINISH_HAS_ERROR"
}

type ImportUserColumnsInput = {
  first_name?: Maybe<Scalars["Int"]>
  last_name?: Maybe<Scalars["Int"]>
  phone?: Maybe<Scalars["Int"]>
  deposit?: Maybe<Scalars["Int"]>
  discount?: Maybe<Scalars["Int"]>
  email?: Maybe<Scalars["Int"]>
}

type License = {
  id: Scalars["Int"]
  expires_at: Scalars["DateTime"]
  payment: LicensePaymentData
}

type LicenseModulePrice = {
  module_id: Scalars["Int"]
  price: Scalars["Float"]
}

type LicensePayment = {
  id: Scalars["String"]
  url: Scalars["String"]
  license_payment_method: LicensePaymentMethod
  additional?: Maybe<AdditionalPaymentData>
}

type LicensePaymentData = {
  id: Scalars["Int"]
  created_at: Scalars["DateTime"]
  host_count: Scalars["Int"]
  payment_method: Scalars["String"]
  bill_url?: Maybe<Scalars["String"]>
  license_tariff: LicenseTariff
  modules?: Maybe<Array<LicenseTariffModule>>
  status: LicensePaymentStatus
  months: Scalars["Int"]
  cost: Scalars["Float"]
  contractor?: Maybe<Contractor>
}

type LicensePaymentInput = {
  license_price: LicensePriceInput
  contractor_id?: Maybe<Scalars["Int"]>
  success_url?: Maybe<Scalars["String"]>
  fail_url?: Maybe<Scalars["String"]>
}

declare enum LicensePaymentMethod {
  Card = "CARD",
  Bill = "BILL",
  CloudPayments = "CLOUD_PAYMENTS"
}

declare enum LicensePaymentStatus {
  New = "NEW",
  Success = "SUCCESS",
  Failed = "FAILED"
}

type LicensePrice = {
  sum: Scalars["Float"]
  discount_value: Scalars["Int"]
  total_sum: Scalars["Float"]
  modules?: Maybe<Array<LicenseModulePrice>>
}

type LicensePriceInput = {
  host_count: Scalars["Int"]
  license_tariff_id: Scalars["Int"]
  promocode?: Maybe<Scalars["String"]>
  license_payment_method: LicensePaymentMethod
  auto_payment?: Maybe<Scalars["Boolean"]>
  club_id: Scalars["Int"]
  modules?: Maybe<Array<Scalars["Int"]>>
  months: Scalars["Int"]
}

type LicenseTariff = {
  id: Scalars["Int"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  cost: Scalars["Float"]
  module_categories?: Maybe<Array<Maybe<LicenseTariffCategory>>>
}

type LicenseTariffCategory = {
  id: Scalars["Int"]
  name: Scalars["String"]
  modules?: Maybe<Array<Maybe<LicenseTariffModule>>>
  tariff_id: Scalars["Int"]
}

type LicenseTariffCategoryInput = {
  id: Scalars["Int"]
  name: Scalars["String"]
  tariff_id: Scalars["Int"]
}

type LicenseTariffGrid = {
  tariffs: Array<LicenseTariff>
  modules?: Maybe<Array<LicenseTariffModule>>
}

type LicenseTariffInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  cost: Scalars["Float"]
  kz_cost: Scalars["Float"]
}

type LicenseTariffModule = {
  id: Scalars["Int"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  cost: Scalars["Float"]
  category_id: Scalars["Int"]
  alias: Scalars["String"]
}

type LicenseTariffModuleInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  cost: Scalars["Float"]
  kz_cost: Scalars["Float"]
  category_id: Scalars["Int"]
  alias: Scalars["String"]
}

type LoginExistsInput = {
  login: Scalars["String"]
}

type LoginInput = {
  login: Scalars["String"]
  password: Scalars["String"]
  company_id?: Maybe<Scalars["Int"]>
}

type MagicInput = {
  id: Scalars["Int"]
  id2: Scalars["Int"]
}

type Me = {
  id: Scalars["Int"]
  uuid: Scalars["String"]
  creator?: Maybe<User>
  login: Scalars["String"]
  nickname: Scalars["String"]
  phone: Scalars["String"]
  email?: Maybe<Scalars["Email"]>
  dob: Scalars["Date"]
  first_name?: Maybe<Scalars["String"]>
  last_name?: Maybe<Scalars["String"]>
  middle_name?: Maybe<Scalars["String"]>
  deposit: Scalars["Float"]
  last_client_activity?: Maybe<Scalars["DateTime"]>
  last_worker_activity?: Maybe<Scalars["DateTime"]>
  created_at: Scalars["DateTime"]
  updated_at: Scalars["DateTime"]
  banned_at?: Maybe<Scalars["DateTime"]>
  roles: Array<Role>
  permissions: Array<Permission>
  pausable_info?: Maybe<PausableClientSession>
  age: Scalars["Int"]
  is_owner: Scalars["Boolean"]
}

declare enum MethodType {
  Sms = "SMS",
  Cascade = "CASCADE",
  FlashCall = "FLASH_CALL",
  Email = "EMAIL"
}

type MoneyByTypes = {
  cash: Scalars["Float"]
  card: Scalars["Float"]
  deposit: Scalars["Float"]
  bonus: Scalars["Float"]
  total: Scalars["Float"]
  currency?: Maybe<Currency>
}

type MoneyData = {
  good: Scalars["Float"]
  service: Scalars["Float"]
  tariff: Scalars["Float"]
  deposit: Scalars["Float"]
}

type MutationCreateAchievementArgs = {
  input: AchievementInput
}

type MutationDeleteAchievementArgs = {
  id: Scalars["String"]
}

type MutationCreateBookingArgs = {
  input: BookingInput
}

type MutationUpdateBookingArgs = {
  id: Scalars["Int"]
  input: BookingInput
}

type MutationSetBookingStatusArgs = {
  id: Scalars["Int"]
  status: BookingStatus
}

type MutationCreateCashOrderArgs = {
  input: CashOrderInput
}

type MutationDeleteCashOrderArgs = {
  id: Scalars["Int"]
}

type MutationChangeClientSessionHostArgs = {
  id: Scalars["Int"]
  input: ChangeClientSessionHostInput
}

type MutationStopClientSessionArgs = {
  id: Scalars["Int"]
  ignorePause?: Maybe<Scalars["Boolean"]>
}

type MutationStartClientSessionArgs = {
  input: StartClientSessionInput
}

type MutationUnpauseClientSessionArgs = {
  id: Scalars["Int"]
  host_id: Scalars["Int"]
}

type MutationCreateCommentArgs = {
  input: CommentInput
}

type MutationDeleteCommentArgs = {
  id: Scalars["Int"]
}

type MutationCreateClubCommentArgs = {
  input: ClubCommentInput
}

type MutationReadClubCommentArgs = {
  id: Scalars["Int"]
}

type MutationCreateDiscountArgs = {
  input: DiscountInput
}

type MutationUpdateDiscountArgs = {
  id: Scalars["Int"]
  input: DiscountInput
}

type MutationDeleteDiscountArgs = {
  id: Scalars["Int"]
}

type MutationCreateGameAccountArgs = {
  input: CreateGameAccountInput
}

type MutationUpdateGameAccountArgs = {
  id: Scalars["Int"]
  input: UpdateGameAccountInput
}

type MutationDeleteGameAccountArgs = {
  id: Scalars["Int"]
}

type MutationFreeGameAccountArgs = {
  id: Scalars["Int"]
}

type MutationPickGameAccountArgs = {
  input: PickGameAccountInput
}

type MutationCreateGameAccountGroupArgs = {
  input: GameAccountGroupInput
}

type MutationUpdateGameAccountGroupArgs = {
  id: Scalars["Int"]
  input: GameAccountGroupInput
}

type MutationDeleteGameAccountGroupArgs = {
  id: Scalars["Int"]
}

type MutationCreateGoodArgs = {
  input: GoodInput
}

type MutationUpdateGoodArgs = {
  id: Scalars["Int"]
  input: GoodInput
}

type MutationDeleteGoodArgs = {
  id: Scalars["Int"]
}

type MutationChangeGoodsQuantityArgs = {
  input: ChangeGoodsQuantityInput
}

type MutationRegisterHostArgs = {
  input: RegisterHostInput
}

type MutationCreateHostArgs = {
  input: HostInput
}

type MutationUpdateHostArgs = {
  id: Scalars["Int"]
  input: HostInput
}

type MutationDeleteHostArgs = {
  id: Scalars["Int"]
}

type MutationSetHostServiceModeArgs = {
  id: Scalars["Int"]
  input: FlagInput
}

type MutationSetShellModeArgs = {
  mode: ShellMode
  worker_id?: Maybe<Scalars["Int"]>
}

type MutationUpdateHostStateArgs = {
  input: UpdateHostStateInput
}

type MutationPenaltyHostArgs = {
  input: PenaltyHostInput
}

type MutationApplyNewHostDevicesArgs = {
  id: Scalars["Int"]
}

type MutationAdminCallDoneArgs = {
  id: Scalars["Int"]
}

type MutationUpdateHostIpAddressArgs = {
  ip?: Maybe<Scalars["String"]>
}

type MutationCreateCommandArgs = {
  input?: Maybe<CreateCommandInput>
}

type MutationSendWakePacketArgs = {
  input: SendWakePacketInput
}

type MutationUpdateHostCommandStatusArgs = {
  input: UpdateHostCommandStatusInput
}

type MutationCreateHostGroupArgs = {
  input: HostGroupInput
}

type MutationUpdateHostGroupArgs = {
  id: Scalars["Int"]
  input: HostGroupInput
}

type MutationDeleteHostGroupArgs = {
  id: Scalars["Int"]
}

type MutationStartHostSessionArgs = {
  input: HostSessionInput
}

type MutationCreateHostTypeArgs = {
  input: HostTypeInput
}

type MutationUpdateHostTypeArgs = {
  id: Scalars["Int"]
  input: HostTypeInput
}

type MutationDeleteHostTypeArgs = {
  id: Scalars["Int"]
}

type MutationCreateDepositCashbackArgs = {
  input: DepositCashbackInput
}

type MutationUpdateDepositCashbackArgs = {
  id: Scalars["Int"]
  input: DepositCashbackInput
}

type MutationDeleteDepositCashbackArgs = {
  id: Scalars["Int"]
}

type MutationOrganizationRegisterArgs = {
  input: OrganizationRegisterInput
}

type MutationOrganizationConfirmCodeArgs = {
  input: OrganizationConfirmationCodeInput
}

type MutationOrganizationLoginArgs = {
  input: OrganizationLoginInput
}

type MutationOrganizationStartResetPasswordArgs = {
  input: OrganizationStartResetPasswordInput
}

type MutationOrganizationResetPasswordArgs = {
  input: OrganizationResetPasswordInput
}

type MutationOrganizationSendConfirmationCodeArgs = {
  input?: Maybe<OrganizationSendConfirmationCodeInput>
}

type MutationOrganizationVerifyConfirmationCodeArgs = {
  input: OrganizationVerifyConfirmationCodeInput
}

type MutationOrganizationUpdateArgs = {
  input: OrganizationInput
}

type MutationCreateClubArgs = {
  input: ClubInput
}

type MutationUpdateClubArgs = {
  id: Scalars["Int"]
  input: ClubInput
}

type MutationDeleteClubArgs = {
  id: Scalars["Int"]
}

type MutationImportClubArgs = {
  club_id: Scalars["Int"]
  org_id: Scalars["Int"]
  code: Scalars["String"]
  file: Scalars["Upload"]
}

type MutationImportUsersArgs = {
  club_id: Scalars["Int"]
  org_id: Scalars["Int"]
  code: Scalars["String"]
  file: Scalars["Upload"]
  columns?: Maybe<ImportUserColumnsInput>
}

type MutationCreateLicenseTariffArgs = {
  input: LicenseTariffInput
}

type MutationUpdateLicenseTariffArgs = {
  id: Scalars["Int"]
  input: LicenseTariffInput
}

type MutationDeleteLicenseTariffArgs = {
  id: Scalars["Int"]
}

type MutationCreateLicenseModuleArgs = {
  input: LicenseTariffModuleInput
}

type MutationUpdateLicenseModuleArgs = {
  id: Scalars["Int"]
  input: LicenseTariffModuleInput
}

type MutationDeleteLicenseModuleArgs = {
  id: Scalars["Int"]
}

type MutationCreateLicenseModuleCategoryArgs = {
  input: LicenseTariffCategoryInput
}

type MutationUpdateLicenseModuleCategoryArgs = {
  id: Scalars["Int"]
  input: LicenseTariffCategoryInput
}

type MutationDeleteLicenseModuleCategoryArgs = {
  id: Scalars["Int"]
}

type MutationCreateContractorArgs = {
  input: ContractorInput
}

type MutationUpdateContractorArgs = {
  id: Scalars["Int"]
  input: ContractorInput
}

type MutationDeleteContractorArgs = {
  id: Scalars["Int"]
}

type MutationCreateLicensePaymentArgs = {
  input: LicensePaymentInput
}

type MutationCreateAdditionalLicensePaymentArgs = {
  input: AdditionalLicensePaymentInput
}

type MutationMagicInitArgs = {
  input?: Maybe<MagicInput>
}

type MutationSendClubOnVerificationArgs = {
  id: Scalars["Int"]
}

type MutationSetClubAutoPayStatusArgs = {
  id: Scalars["Int"]
  status: Scalars["Boolean"]
}

type MutationSetClubAutoPayCardIdArgs = {
  id: Scalars["Int"]
  card_id: Scalars["Int"]
}

type MutationDeleteOrganizationPaymentCardArgs = {
  id: Scalars["Int"]
}

type MutationCreatePaymentArgs = {
  input: PaymentInput
}

type MutationValidatePaymentArgs = {
  input: PaymentInput
}

type MutationRefundPaymentArgs = {
  input: RefundPaymentInput
}

type MutationCreatePaymentTransactionArgs = {
  input: PaymentTransactionInput
}

type MutationCreatePromoCodeArgs = {
  input: PromoCodeInput
}

type MutationUpdatePromoCodeArgs = {
  id: Scalars["Int"]
  input: PromoCodeInput
}

type MutationDeletePromoCodeArgs = {
  id: Scalars["Int"]
}

type MutationCreateServiceArgs = {
  input: ServiceInput
}

type MutationUpdateServiceArgs = {
  id: Scalars["Int"]
  input: ServiceInput
}

type MutationDeleteServiceArgs = {
  id: Scalars["Int"]
}

type MutationSetSettingValueArgs = {
  input: UpdateSettingInput
}

type MutationSetMultipleSettingValuesArgs = {
  input: UpdateMultipleSettingsInput
}

type MutationSetTelegramChannelArgs = {
  input: SetTelegramChannelInput
}

type MutationSetSettingArgs = {
  input: UpdateSettingInput
}

type MutationSetSettingsArgs = {
  input: UpdateMultipleSettingsInput
}

type MutationSetCloudPaymentsAccountToCompanyArgs = {
  input: SetCloudPaymentsAccountToCompanyInput
}

type MutationCreateShortcutArgs = {
  input: ShortcutInput
}

type MutationUpdateShortcutArgs = {
  id: Scalars["Int"]
  input: ShortcutInput
}

type MutationDeleteShortcutArgs = {
  id: Scalars["Int"]
}

type MutationUploadShortcutImageArgs = {
  input: ShortcutImageInput
}

type MutationUpdateShortcutSortArgs = {
  input?: Maybe<Array<UpdateShortcutSortInput>>
}

type MutationCreateShortcutGroupArgs = {
  input: ShortcutGroupInput
}

type MutationUpdateShortcutGroupArgs = {
  id: Scalars["Int"]
  input: ShortcutGroupInput
}

type MutationDeleteShortcutGroupArgs = {
  id: Scalars["Int"]
}

type MutationCreateTariffArgs = {
  input: TariffInput
}

type MutationUpdateTariffArgs = {
  id: Scalars["Int"]
  input: TariffInput
}

type MutationUpdateTariffSortArgs = {
  input?: Maybe<Array<UpdateTariffsSortInput>>
}

type MutationDeleteTariffArgs = {
  id: Scalars["Int"]
}

type MutationVerifyUserArgs = {
  id: Scalars["Int"]
  input: VerifyUserInput
}

type MutationBanClientArgs = {
  uuid: Scalars["String"]
  input: FlagInput
}

type MutationSetDepositArgs = {
  input: SetDepositInput
}

type MutationSetUserDiscountArgs = {
  input: SetUserDiscountInput
}

type MutationUploadUserTableArgs = {
  input: UserTableInput
}

type MutationForceDeleteUserArgs = {
  id: Scalars["Int"]
  pass: Scalars["String"]
}

type MutationCreateWorkerArgs = {
  input: CreateWorkerInput
}

type MutationUpdateWorkerArgs = {
  id: Scalars["Int"]
  input: UpdateWorkerInput
}

type MutationDisableWorkerArgs = {
  id: Scalars["Int"]
  input: FlagInput
}

type MutationDeleteWorkerArgs = {
  id: Scalars["Int"]
}

type MutationStartWorkShiftArgs = {
  input: StartWorkShiftInput
}

type MutationFinishWorkShiftArgs = {
  input?: Maybe<FinishWorkShiftInput>
  confirm_pass: Scalars["String"]
}

type MutationForceFinishWorkShiftArgs = {
  input?: Maybe<FinishWorkShiftInput>
}

type MutationCreateWorkerTaskArgs = {
  input: WorkerTaskInput
}

type MutationUpdateWorkerTaskArgs = {
  id: Scalars["Int"]
  input: WorkerTaskInput
}

type MutationDeleteWorkerTaskArgs = {
  id: Scalars["Int"]
}

type MutationSetWorkerTaskCompleteArgs = {
  id: Scalars["Int"]
  value: Scalars["Boolean"]
}

type MutationLoginArgs = {
  input: LoginInput
}

type MutationReloginArgs = {
  id: Scalars["Int"]
}

type MutationRefreshTokenArgs = {
  input: RefreshTokenInput
}

type MutationRegisterArgs = {
  input: RegisterInput
}

type MutationEmailRegisterArgs = {
  input: EmailRegisterInput
}

type MutationResetPasswordArgs = {
  input: ResetPasswordInput
}

type MutationUpdateMeArgs = {
  input: UpdateMeInput
}

type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput
}

type MutationClientRegisterArgs = {
  input: ClientRegisterInput
}

type MutationClientLoginArgs = {
  input: ClientLoginInput
}

type MutationClientResetPasswordArgs = {
  input: ResetPasswordInput
}

type MutationClientUpdateMeArgs = {
  input: UpdateClientMeInput
}

type MutationVerifyClientArgs = {
  id: Scalars["Int"]
  input: VerifyUserInput
}

type MutationSendConfirmationCodeArgs = {
  input: SendConfirmationCodeInput
}

type MutationSendClientConfirmationCodeArgs = {
  input: SendConfirmationCodeInput
}

type News = {
  data: Array<Maybe<Article>>
  paginatorInfo: PaginatorInfo
}

/** Options for the `direction` argument on `@orderBy`. */
declare enum OrderByDirection {
  /** Sort in ascending order. */
  Asc = "ASC",
  /** Sort in descending order. */
  Desc = "DESC"
}

type Organization = {
  id: Scalars["Int"]
  title: Scalars["String"]
  phone?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["Email"]>
  address?: Maybe<Scalars["String"]>
  hosts_count: Scalars["Int"]
  verified_at?: Maybe<Scalars["DateTime"]>
  activated_at?: Maybe<Scalars["DateTime"]>
  banned_at?: Maybe<Scalars["DateTime"]>
  created_at: Scalars["DateTime"]
  updated_at: Scalars["DateTime"]
  deleted_at?: Maybe<Scalars["DateTime"]>
}

type OrganizationConfirmationCodeInput = {
  phone: Scalars["String"]
  type: OrganizationConfirmationCodeType
  code: Scalars["String"]
}

declare enum OrganizationConfirmationCodeType {
  Register = "REGISTER",
  ResetPassword = "RESET_PASSWORD"
}

type OrganizationInput = {
  email: Scalars["Email"]
}

type OrganizationLoginInput = {
  phone: Scalars["String"]
  password: Scalars["String"]
}

type OrganizationPaymentCard = {
  id: Scalars["Int"]
  card_mask: Scalars["String"]
  card_payment_system: Scalars["String"]
  card_expires_at: Scalars["String"]
  created_at: Scalars["DateTime"]
}

type OrganizationRegisterInput = {
  phone: Scalars["String"]
  email: Scalars["Email"]
  password: Scalars["String"]
  password_confirmation: Scalars["String"]
  captcha_token: Scalars["String"]
}

type OrganizationResetPasswordInput = {
  hash: Scalars["String"]
  code: Scalars["String"]
  password: Scalars["String"]
  password_confirmation: Scalars["String"]
}

type OrganizationSendConfirmationCodeInput = {
  phone: Scalars["String"]
  type: OrganizationConfirmationCodeType
}

type OrganizationStartResetPasswordInput = {
  phone: Scalars["String"]
}

declare enum OrganizationUserType {
  Owner = "OWNER",
  Director = "DIRECTOR",
  SystemAdministrator = "SYSTEM_ADMINISTRATOR",
  HallAdministrator = "HALL_ADMINISTRATOR"
}

type OrganizationVerifyConfirmationCodeInput = {
  hash: Scalars["String"]
  code: Scalars["String"]
}

/** Options for the `type` argument of `@paginate`. */
declare enum PaginateType {
  Paginator = "PAGINATOR"
}

type PaginatorInfo = {
  count: Scalars["Int"]
  currentPage: Scalars["Int"]
  firstItem?: Maybe<Scalars["Int"]>
  hasMorePages: Scalars["Boolean"]
  lastItem?: Maybe<Scalars["Int"]>
  lastPage: Scalars["Int"]
  perPage: Scalars["Int"]
  total: Scalars["Int"]
}

type PausableClientSession = {
  id: Scalars["Int"]
  tariff: Tariff
  duration: Scalars["Int"]
  elapsed: Scalars["Int"]
  status: ClientSessionType
  created_at: Scalars["DateTime"]
  expires_at: Scalars["DateTime"]
}

type Payment = {
  id: Scalars["Int"]
  client?: Maybe<User>
  client_session?: Maybe<ClientSession>
  work_shift?: Maybe<WorkShift>
  promo_code?: Maybe<PromoCode>
  discount?: Maybe<Discount>
  method: PaymentMethod
  sum: Scalars["Float"]
  created_at: Scalars["DateTime"]
  items: Array<PaymentItem>
  is_refunded: Scalars["Boolean"]
  not_refundable: Scalars["Boolean"]
  card_sum: Scalars["Float"]
  cash_sum: Scalars["Float"]
}

type PaymentHistory = {
  paginatorInfo: PaginatorInfo
  data: Array<PaymentHistoryItem>
}

type PaymentHistoryItem = {
  created_at: Scalars["DateTime"]
  title: Scalars["String"]
  amount: Scalars["Int"]
  sum: Scalars["Float"]
  card_sum: Scalars["Float"]
  cash_sum: Scalars["Float"]
  worker?: Maybe<User>
  items?: Maybe<Array<PaymentItem>>
  is_refunded: Scalars["Boolean"]
  paymentMethod: PaymentMethod
}

/** exists:users,id exists:client_sessions,id exists:promo_codes,id soft_exist:discounts,id */
type PaymentInput = {
  method: PaymentMethod
  client_uuid?: Maybe<Scalars["String"]>
  client_session_id?: Maybe<Scalars["Int"]>
  promo_code_id?: Maybe<Scalars["Int"]>
  discount_id?: Maybe<Scalars["Int"]>
  items: Array<PaymentItemInput>
  card_sum?: Maybe<Scalars["Float"]>
}

type PaymentItem = {
  id: Scalars["Int"]
  payment_id: Scalars["Int"]
  type: PaymentItemType
  entity?: Maybe<PaymentItemEntity>
  amount: Scalars["Int"]
  sum: Scalars["Float"]
}

type PaymentItemEntity = Good | Service | Tariff

type PaymentItemInput = {
  type: PaymentItemType
  entity_id?: Maybe<Scalars["Int"]>
  host_id?: Maybe<Scalars["Int"]>
  amount: Scalars["Int"]
  sum?: Maybe<Scalars["Float"]>
}

declare enum PaymentItemType {
  Deposit = "DEPOSIT",
  Good = "GOOD",
  Service = "SERVICE",
  Tariff = "TARIFF"
}

declare enum PaymentMethod {
  Card = "CARD",
  Cash = "CASH",
  Deposit = "DEPOSIT",
  Bonus = "BONUS",
  Composite = "COMPOSITE",
  CloudPayments = "CLOUD_PAYMENTS"
}

type PaymentReportItem = {
  value: Scalars["Float"]
  currency?: Maybe<Currency>
}

type PaymentsReport = {
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
}

type PaymentTransaction = {
  id: Scalars["String"]
  company_id: Scalars["Int"]
  service: ServiceEnum
  amount: Scalars["Float"]
  sum: Scalars["Float"]
  client: User
  status: Scalars["String"]
  additional?: Maybe<AdditionalTransactionData>
  created_at: Scalars["DateTime"]
}

type PaymentTransactionInput = {
  company_id: Scalars["Int"]
  service: ServiceEnum
  amount: Scalars["Float"]
}

type PaymentTransactionPaginated = {
  paginatorInfo: PaginatorInfo
  data: Array<PaymentTransaction>
}

declare enum PaymentTransactionStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  Expired = "EXPIRED",
  Failed = "FAILED",
  Canceled = "CANCELED"
}

type PenaltyHostInput = {
  host_id: Scalars["Int"]
  seconds: Scalars["Int"]
}

type Permission = {
  id: Scalars["Int"]
  alias: Scalars["String"]
  title: Scalars["String"]
  description?: Maybe<Scalars["String"]>
}

type PhoneExistsInput = {
  phone: Scalars["String"]
}

type PickGameAccountInput = {
  shortcut_id: Scalars["Int"]
}

type PromoCode = {
  id: Scalars["Int"]
  author: User
  client?: Maybe<User>
  code: Scalars["String"]
  value: Scalars["Float"]
  amount?: Maybe<Scalars["Int"]>
  entity?: Maybe<CartEntity>
  entity_id?: Maybe<Scalars["Int"]>
  created_at: Scalars["DateTime"]
  is_tracked: Scalars["Boolean"]
}

type PromoCodeInput = {
  client_id?: Maybe<Scalars["Int"]>
  code: Scalars["String"]
  value: Scalars["Float"]
  amount?: Maybe<Scalars["Int"]>
  entity?: Maybe<CartEntity>
  entity_id?: Maybe<Scalars["Int"]>
  is_tracked?: Maybe<Scalars["Boolean"]>
}

type PromoCodePaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<PromoCode>>
}

type QueryAchievementsArgs = {
  company_id?: Maybe<Scalars["Int"]>
  user_id?: Maybe<Scalars["Int"]>
}

type QueryGetBookingArgs = {
  id: Scalars["Int"]
}

type QueryGetBookingsArgs = {
  hostIds?: Maybe<Array<Scalars["Int"]>>
  status?: Maybe<Scalars["String"]>
  from?: Maybe<Scalars["DateTime"]>
  to?: Maybe<Scalars["DateTime"]>
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryMyClubArgs = {
  id: Scalars["Int"]
}

type QuerySearchClubsArgs = {
  q: Scalars["String"]
}

type QueryCanUnpauseClientSessionArgs = {
  id: Scalars["Int"]
  host_id: Scalars["Int"]
}

type QueryClientSessionArgs = {
  id: Scalars["Int"]
}

type QueryClientSessionsArgs = {
  input: ClientSessionReportInput
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryCommentsArgs = {
  input: CommentSearchInput
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryClubCommentsArgs = {
  input?: Maybe<ClubCommentSearchInput>
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryDiscountArgs = {
  id: Scalars["Int"]
}

type QueryDiscountsArgs = {
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryEventsArgs = {
  input?: Maybe<EventsInput>
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryGameAccountArgs = {
  id: Scalars["Int"]
}

type QueryGameAccountGroupArgs = {
  id: Scalars["Int"]
}

type QueryGoodsArgs = {
  input?: Maybe<GoodsInput>
}

type QueryGoodArgs = {
  id: Scalars["Int"]
}

type QuerySearchByEanArgs = {
  ean: Scalars["String"]
}

type QueryHostAccessTokenArgs = {
  input: HostAccessTokenInput
}

type QueryHostsByIdsArgs = {
  ids: Array<Scalars["Int"]>
}

type QueryHostArgs = {
  id: Scalars["Int"]
}

type QueryFreeHostsArgs = {
  host_id?: Maybe<Scalars["Int"]>
}

type QueryHostGroupArgs = {
  id: Scalars["Int"]
}

type QueryHostTypeArgs = {
  id: Scalars["Int"]
}

type QueryDepositCashbackArgs = {
  id: Scalars["Int"]
}

type QueryNewsArgs = {
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryClubArgs = {
  id: Scalars["Int"]
}

type QueryLicenseTariffGridArgs = {
  id?: Maybe<Scalars["Int"]>
}

type QueryLicenseTariffArgs = {
  id: Scalars["Int"]
}

type QueryLicenseModuleCategoryArgs = {
  id: Scalars["Int"]
}

type QueryLicenseModuleArgs = {
  id: Scalars["Int"]
}

type QueryLicensePriceArgs = {
  input: LicensePriceInput
}

type QueryAdditionalLicensePriceArgs = {
  input: AdditionalLicensePriceInput
}

type QueryLicensePaymentsArgs = {
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryUpdateLicensePaymentArgs = {
  id: Scalars["Int"]
  status: LicensePaymentStatus
}

type QueryOrganizationClubsArgs = {
  id: Scalars["Int"]
}

type QueryClubOrganizationArgs = {
  id: Scalars["Int"]
}

type QueryGetOrganizationPaymentCardArgs = {
  id: Scalars["Int"]
}

type QueryGetUpcomingAutoPaymentDataArgs = {
  id: Scalars["Int"]
}

type QueryPaymentTransactionsArgs = {
  company_id?: Maybe<Scalars["Int"]>
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryPromoCodeArgs = {
  id: Scalars["Int"]
}

type QueryPromoCodesArgs = {
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryValidatePromoCodeArgs = {
  input: ValidatePromoCodeInput
}

type QueryReportArgs = {
  input: ReportInput
}

type QueryClientsPaymentReportArgs = {
  input: ClientsPaymentReportInput
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryUniqueUsersReportArgs = {
  input: UniqueUsersReport
}

type QueryBoughtTariffsReportArgs = {
  input: BoughtTariffsReport
}

type QuerySessionsMoneyReportArgs = {
  input: SessionsMoneyReport
}

type QueryHostsOccupationReportArgs = {
  input: HostsOccupationReport
}

type QuerySalesReportArgs = {
  input: PaymentsReport
}

type QueryServicesArgs = {
  input?: Maybe<ServicesInput>
}

type QueryServiceArgs = {
  id: Scalars["Int"]
}

type QueryShortcutArgs = {
  id: Scalars["Int"]
}

type QueryShortcutGroupArgs = {
  id: Scalars["Int"]
}

type QueryTariffsArgs = {
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryTariffGridArgs = {
  input?: Maybe<TariffGridInput>
}

type QueryGetCurrentTariffArgs = {
  input: GetCurrentTariff
}

type QueryUserArgs = {
  uuid: Scalars["String"]
}

type QueryWorkersArgs = {
  input?: Maybe<WorkersInput>
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryClientsArgs = {
  input?: Maybe<ClientsInput>
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryGetPaymentsByClientIdArgs = {
  uuid: Scalars["String"]
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryUserImportStatusArgs = {
  id: Scalars["Int"]
}

type QueryGetActiveClientListArgs = {
  input: GetActiveClientListInput
  first?: Maybe<Scalars["Int"]>
}

type QueryWorkShiftsArgs = {
  input?: Maybe<WorkShiftInput>
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryFinishedWorkShiftsArgs = {
  input?: Maybe<FinishedWorkShiftInput>
}

type QueryWorkShiftArgs = {
  id: Scalars["Int"]
}

type QueryGetDetailedWorkShiftMoneyDataArgs = {
  id?: Maybe<Scalars["Int"]>
}

type QueryGetWorkShiftPaymentOverviewDataArgs = {
  id?: Maybe<Scalars["Int"]>
}

type QueryTasksArgs = {
  page?: Maybe<Scalars["Int"]>
  first?: Maybe<Scalars["Int"]>
}

type QueryLoginExistsArgs = {
  input: LoginExistsInput
}

type QueryPhoneExistsArgs = {
  input: PhoneExistsInput
}

type QueryEmailExistsArgs = {
  input: EmailExistsInput
}

type QueryClientPhoneExistsArgs = {
  phone: Scalars["String"]
}

type QueryClientEmailExistsArgs = {
  email: Scalars["String"]
}

type QueryNicknameExistsArgs = {
  nickname: Scalars["String"]
}

type QueryCurrencyArgs = {
  alias?: Maybe<Scalars["String"]>
}

type QueryUserClubsArgs = {
  input?: Maybe<UserClubsInput>
}

type RefreshTokenInput = {
  refresh_token: Scalars["String"]
}

/** exists:payments,id */
type RefundPaymentInput = {
  id: Scalars["Int"]
  comment?: Maybe<Scalars["String"]>
}

type Region = {
  alias: Scalars["String"]
  code: Scalars["String"]
}

/** exists:host_groups,id */
type RegisterHostInput = {
  group_id: Scalars["Int"]
  mac_addr: Scalars["MacAddress"]
  dns_name: Scalars["String"]
  alias: Scalars["String"]
}

type RegisterInput = {
  login: Scalars["String"]
  email?: Maybe<Scalars["Email"]>
  phone: Scalars["String"]
  password: Scalars["String"]
  dob: Scalars["Date"]
}

type Report = {
  statSeances: StatBySeances
  statServices: StatByServices
  statGoods: StatByGoods
  statOrders: StatByOrders
  statDeposit: MoneyByTypes
  statMoney: MoneyByTypes
}

type ReportInput = {
  start: Scalars["DateTime"]
  end: Scalars["DateTime"]
}

type ResetPasswordInput = {
  phone: Scalars["String"]
  confirmation_code: Scalars["String"]
  password: Scalars["String"]
  password_confirmation: Scalars["String"]
}

/** exists:host_commands,id */
type ResultHostCommandInput = {
  id: Scalars["Int"]
  status: Scalars["Boolean"]
  result?: Maybe<Scalars["String"]>
}

type Reward = {
  name: Scalars["String"]
  value: Scalars["Float"]
}

type RewardRequest = {
  name: Scalars["String"]
  value: Scalars["Float"]
}

type Role = {
  id: Scalars["Int"]
  alias: Scalars["String"]
  title: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  is_service: Scalars["Boolean"]
  priority: Scalars["Int"]
  permissions: Array<Permission>
}

type RulesMessage = {
  /** Name of the rule, e.g. `"email"`. */
  rule: Scalars["String"]
  /** Message to display if the rule fails, e.g. `"Must be a valid email"`. */
  message: Scalars["String"]
}

type Seance = {
  id: Scalars["Int"]
  client_session: ClientSession
  tariff: Tariff
  duration: Scalars["Int"]
  elapsed: Scalars["Int"]
  payment?: Maybe<Payment>
  payment_item?: Maybe<PaymentItem>
  status: ClientSessionType
  created_at: Scalars["DateTime"]
  started_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
  cancelled_at?: Maybe<Scalars["DateTime"]>
}

type SeanceOverview = {
  id: Scalars["Int"]
  status: ClientSessionType
  tariff: TariffOverview
}

type SearchReportInput = {
  q: Scalars["String"]
}

type SendConfirmationCodeInput = {
  phone: Scalars["String"]
  type?: Maybe<ConfirmationCodeType>
  method?: Maybe<MethodType>
}

type SendWakePacketInput = {
  host_id: Scalars["Int"]
}

type Service = {
  id: Scalars["Int"]
  title: Scalars["String"]
  cost: Scalars["Float"]
  wholesale_cost: Scalars["Float"]
  tax_percent?: Maybe<Scalars["Float"]>
  use_global_discounts: Scalars["Boolean"]
  created_at: Scalars["DateTime"]
  tax_system?: Maybe<TaxSystem>
  vat?: Maybe<Vat>
  ean?: Maybe<Scalars["String"]>
}

declare enum ServiceEnum {
  CloudPayments = "CLOUD_PAYMENTS"
}

type ServiceInput = {
  title: Scalars["String"]
  cost: Scalars["Float"]
  wholesale_cost: Scalars["Float"]
  tax_percent?: Maybe<Scalars["Float"]>
  use_global_discounts: Scalars["Boolean"]
  tax_system?: Maybe<TaxSystem>
  vat?: Maybe<Vat>
  ean?: Maybe<Scalars["String"]>
}

/** soft_exist:users,id */
type ServicesInput = {
  client_uuid?: Maybe<Scalars["String"]>
}

type SessionsMoneyReport = {
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
  slice: SliceType
}

type SetCloudPaymentsAccountToCompanyInput = {
  action: CloudPaymentsAccountAction
  publicId?: Maybe<Scalars["String"]>
  secretKey?: Maybe<Scalars["String"]>
}

type SetDepositInput = {
  client_uuid: Scalars["String"]
  value: Scalars["Float"]
}

type SetTelegramChannelInput = {
  value?: Maybe<Scalars["String"]>
}

type Setting = {
  id: Scalars["Int"]
  alias: Scalars["String"]
  value: Scalars["String"]
  updated_at?: Maybe<Scalars["DateTime"]>
}

type SettingPair = {
  alias: Scalars["String"]
  value?: Maybe<Scalars["String"]>
  updated_at?: Maybe<Scalars["DateTime"]>
}

type SetUserDiscountInput = {
  client_uuid: Scalars["String"]
  value: Scalars["Int"]
}

declare enum ShellMode {
  Normal = "NORMAL",
  Disabled = "DISABLED",
  HighAccess = "HIGH_ACCESS"
}

type Shortcut = {
  id: Scalars["Int"]
  title: Scalars["String"]
  path: Array<Scalars["String"]>
  group_id: Scalars["Int"]
  type: AppType
  popular: Scalars["Boolean"]
  sort: Scalars["Float"]
  args?: Maybe<Scalars["String"]>
  icon_path?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
  main_picture?: Maybe<Scalars["String"]>
  game_account_group?: Maybe<GameAccountGroup>
  run_as_admin: Scalars["Boolean"]
  work_dir?: Maybe<Scalars["String"]>
  only_for_registered?: Maybe<Scalars["Boolean"]>
  age_rating?: Maybe<Scalars["Int"]>
  free_run?: Maybe<Scalars["Boolean"]>
}

type ShortcutGroup = {
  id: Scalars["Int"]
  title: Scalars["String"]
  sort: Scalars["Int"]
}

type ShortcutGroupInput = {
  title: Scalars["String"]
  sort?: Maybe<Scalars["Int"]>
}

type ShortcutImageInput = {
  file: Scalars["Upload"]
}

type ShortcutInput = {
  title: Scalars["String"]
  /** @rulesForArray(apply: ["min:1", "max:3"]) */
  path: Array<Scalars["String"]>
  /** exists:shortcut_groups,id */
  group_id: Scalars["Int"]
  type: AppType
  popular: Scalars["Boolean"]
  sort?: Maybe<Scalars["Int"]>
  args?: Maybe<Scalars["String"]>
  icon_path?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
  main_picture?: Maybe<Scalars["String"]>
  /** exists:game_account_groups,id */
  game_account_group_id?: Maybe<Scalars["Int"]>
  run_as_admin?: Maybe<Scalars["Boolean"]>
  work_dir?: Maybe<Scalars["String"]>
  only_for_registered?: Maybe<Scalars["Boolean"]>
  age_rating?: Maybe<Scalars["Int"]>
  free_run?: Maybe<Scalars["Boolean"]>
}

declare enum SliceType {
  Day = "DAY",
  Week = "WEEK",
  Month = "MONTH"
}

declare enum SortActiveClientEnum {
  ByPayments = "ByPayments",
  ByTime = "ByTime"
}

type SortInput = {
  field: Scalars["String"]
  direction: Scalars["String"]
}

type StartClientSessionInput = {
  /** exists:users,id */
  user_id: Scalars["Int"]
}

type StartWorkShiftInput = {
  cash: Scalars["Float"]
}

type StatByGoods = {
  amount: Scalars["Int"]
  money: MoneyByTypes
}

type StatByOrders = {
  rko: Scalars["Int"]
  pko: Scalars["Int"]
}

type StatByRefunds = {
  amount: Scalars["Int"]
  money: MoneyByTypes
}

type StatBySeances = {
  amount: Scalars["Int"]
  hours: Scalars["Int"]
  money: MoneyByTypes
}

type StatByServices = {
  amount: Scalars["Int"]
  money: MoneyByTypes
}

type Tariff = {
  id: Scalars["Int"]
  title: Scalars["String"]
  duration: Scalars["Int"]
  use_global_discounts: Scalars["Boolean"]
  has_fixed_finish_time: Scalars["Boolean"]
  created_at: Scalars["DateTime"]
  is_active?: Maybe<Scalars["Boolean"]>
  per_minute: Scalars["Boolean"]
  show_in_shell: Scalars["Boolean"]
  show_in_billing: Scalars["Boolean"]
  schedules: Array<TariffPeriod>
  sell_schedules: Array<TariffPeriod>
  price_list: Array<TariffPricelist>
  pausable: Scalars["Boolean"]
  lifetime: Scalars["Int"]
  ean?: Maybe<Scalars["String"]>
  highlighted?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  sort: Scalars["Int"]
  is_tracked: Scalars["Boolean"]
}

/** exists:host_groups,id soft_exist:users,id */
type TariffGridInput = {
  host_group_id?: Maybe<Scalars["Int"]>
  host_id?: Maybe<Scalars["Int"]>
  client_id?: Maybe<Scalars["Int"]>
  client_uuid?: Maybe<Scalars["String"]>
  shift?: Maybe<Scalars["Int"]>
}

type TariffGridItem = {
  id: Scalars["Int"]
  title: Scalars["String"]
  duration: Scalars["Int"]
  cost: Scalars["Float"]
  time_from: Scalars["Time"]
  time_to: Scalars["Time"]
  per_minute: Scalars["Boolean"]
  use_global_discounts: Scalars["Boolean"]
  has_fixed_finish_time: Scalars["Boolean"]
  currency: Currency
  booked: Scalars["Boolean"]
  ends_in: Scalars["Int"]
  pausable: Scalars["Boolean"]
  highlighted?: Maybe<Scalars["Boolean"]>
  lifetime: Scalars["Int"]
}

type TariffInput = {
  use_global_discounts: Scalars["Boolean"]
  has_fixed_finish_time: Scalars["Boolean"]
  duration: Scalars["Int"]
  title: Scalars["String"]
  is_active: Scalars["Boolean"]
  per_minute: Scalars["Boolean"]
  show_in_shell: Scalars["Boolean"]
  show_in_billing?: Maybe<Scalars["Boolean"]>
  schedules: Array<TariffPeriodInput>
  sell_schedules?: Maybe<Array<TariffPeriodInput>>
  price_list: Array<TariffPricelistInput>
  pausable?: Maybe<Scalars["Boolean"]>
  lifetime?: Maybe<Scalars["Int"]>
  ean?: Maybe<Scalars["String"]>
  highlighted?: Maybe<Scalars["Boolean"]>
  description?: Maybe<Scalars["String"]>
  sort?: Maybe<Scalars["Int"]>
  is_tracked?: Maybe<Scalars["Boolean"]>
}

declare enum TariffKind {
  PerMinute = "PER_MINUTE",
  Pausable = "PAUSABLE",
  Fixed = "FIXED",
  Packet = "PACKET"
}

type TariffOverview = {
  id: Scalars["Int"]
  title: Scalars["String"]
  kind: TariffKind
}

type TariffPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<Tariff>>
}

type TariffPeriod = {
  start: Scalars["Int"]
  end: Scalars["Int"]
}

type TariffPeriodInput = {
  start: Scalars["Int"]
  end: Scalars["Int"]
}

type TariffPricelist = {
  host_groups: Array<HostGroup>
  cost_map: Array<TariffPricelistCostMap>
}

type TariffPricelistCostMap = {
  title: Scalars["String"]
  value: Scalars["Float"]
  currency: Currency
}

type TariffPricelistCostMapInput = {
  title: TariffPricelistCostMapType
  value: Scalars["Float"]
  currency: Scalars["String"]
}

declare enum TariffPricelistCostMapType {
  Default = "DEFAULT",
  UserCost = "USER_COST"
}

/** exists:host_groups,id */
type TariffPricelistInput = {
  host_groups: Array<Scalars["Int"]>
  cost_map?: Maybe<Array<TariffPricelistCostMapInput>>
}

type TariffSchedule = {
  title: Scalars["String"]
  cost: Scalars["Float"]
  user_cost: Scalars["Float"]
  intervals: Array<TariffScheduleInterval>
}

type TariffScheduleInterval = {
  week_day: Scalars["Int"]
  time_from: Scalars["Time"]
  time_to: Scalars["Time"]
}

declare enum TaxSystem {
  SimpleIncome = "SIMPLE_INCOME",
  SimpleIncomeExpenses = "SIMPLE_INCOME_EXPENSES",
  Patent = "PATENT",
  Main = "MAIN"
}

type UnifiedReport = {
  labels: Array<Scalars["String"]>
  extraLabels: Array<Scalars["String"]>
  keys: Array<Scalars["String"]>
  points: Scalars["Int"]
  data: Array<UnifiedReportData>
  url?: Maybe<Scalars["String"]>
  summary?: Maybe<Array<UnifiedSummaryData>>
}

type UnifiedReportData = {
  values: Array<Scalars["Float"]>
}

type UnifiedSummaryData = {
  title: Scalars["String"]
  value: Scalars["Float"]
}

type UniqueUsersReport = {
  from: Scalars["DateTime"]
  to: Scalars["DateTime"]
  slice: SliceType
}

type UpcomingAutoPaymentData = {
  card: OrganizationPaymentCard
  amount: Scalars["Float"]
  payment_date: Scalars["Date"]
}

type UpdateClientMeInput = {
  first_name: Scalars["String"]
  last_name: Scalars["String"]
  middle_name: Scalars["String"]
  nickname: Scalars["String"]
  email: Scalars["Email"]
  dob: Scalars["Date"]
  city: Scalars["String"]
}

/** exists:game_account_groups,id */
type UpdateGameAccountInput = {
  login: Scalars["String"]
  password?: Maybe<Scalars["String"]>
  active: Scalars["Boolean"]
  group_id: Scalars["Int"]
}

type UpdateHostCommandStatusInput = {
  id: Scalars["Int"]
  success: Scalars["Boolean"]
}

type UpdateHostStateInput = {
  cpu_temp: Scalars["Float"]
  disk_temp: Scalars["Float"]
  disk_status?: Maybe<Array<HostDiskInfoInput>>
  active_window: Scalars["String"]
  com_result?: Maybe<ResultHostCommandInput>
}

type UpdateMeInput = {
  first_name?: Maybe<Scalars["String"]>
  last_name?: Maybe<Scalars["String"]>
  middle_name?: Maybe<Scalars["String"]>
  nickname?: Maybe<Scalars["String"]>
}

type UpdateMultipleSettingsInput = {
  list: Array<UpdateSettingInput>
}

type UpdatePasswordInput = {
  old_password: Scalars["String"]
  password: Scalars["String"]
  password_confirmation: Scalars["String"]
}

type UpdateSettingInput = {
  alias: Scalars["String"]
  value?: Maybe<Scalars["String"]>
}

type UpdateShortcutSortInput = {
  id: Scalars["Int"]
  sort: Scalars["Int"]
}

type UpdateTariffsSortInput = {
  id: Scalars["Int"]
  sort: Scalars["Int"]
}

type UpdateWorkerInput = {
  first_name: Scalars["String"]
  last_name: Scalars["String"]
  middle_name: Scalars["String"]
  role_ids?: Maybe<Array<Scalars["Int"]>>
}

type User = {
  id: Scalars["Int"]
  uuid: Scalars["String"]
  creator?: Maybe<User>
  login: Scalars["String"]
  nickname: Scalars["String"]
  phone?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["Email"]>
  phone_suffix: Scalars["String"]
  dob: Scalars["Date"]
  country_code?: Maybe<Scalars["String"]>
  roles: Array<Role>
  first_name?: Maybe<Scalars["String"]>
  last_name?: Maybe<Scalars["String"]>
  middle_name?: Maybe<Scalars["String"]>
  deposit: Scalars["Float"]
  last_client_activity?: Maybe<Scalars["DateTime"]>
  last_worker_activity?: Maybe<Scalars["DateTime"]>
  last_comment?: Maybe<Comment>
  user_discount?: Maybe<Scalars["Int"]>
  created_at: Scalars["DateTime"]
  updated_at: Scalars["DateTime"]
  disabled_at?: Maybe<Scalars["DateTime"]>
  banned_at?: Maybe<Scalars["DateTime"]>
  total_hours: Scalars["Int"]
  pausable_info?: Maybe<PausableClientSession>
}

interface AllUsers {
  lenght: number
  users: User[]
}

type UserClub = {
  id: Scalars["Int"]
  name: Scalars["String"]
  address: Scalars["String"]
  tariffName?: Maybe<Scalars["String"]>
  workShiftStatus: WorkShiftStatus
  permitted: Scalars["Boolean"]
  operatorFirstName?: Maybe<Scalars["String"]>
  operatorLastName?: Maybe<Scalars["String"]>
}

type UserClubsInput = {
  login: Scalars["String"]
  password: Scalars["String"]
}

type UserPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<User>>
  total_deposits?: Maybe<Scalars["Float"]>
}

type UsersInput = {
  q?: Maybe<Scalars["String"]>
}

type UserTableInput = {
  file: Scalars["Upload"]
}

type ValidatePromoCodeInput = {
  client_id?: Maybe<Scalars["Int"]>
  entity?: Maybe<CartEntity>
  entity_id?: Maybe<Scalars["Int"]>
  code: Scalars["String"]
}

declare enum Vat {
  NoNds = "NO_NDS",
  Nds_0 = "NDS_0",
  Nds_10 = "NDS_10",
  Nds_20 = "NDS_20",
  Nds_110 = "NDS_110",
  Nds_120 = "NDS_120"
}

type VerifyUserInput = {
  code: Scalars["String"]
}

type Versions = {
  easter_egg?: Maybe<Scalars["String"]>
  frontend?: Maybe<Scalars["String"]>
  backend?: Maybe<Scalars["String"]>
}

declare enum WarehouseOperationType {
  Add = "ADD",
  Disposal = "DISPOSAL",
  Sold = "SOLD"
}

type WarehouseState = {
  received: Scalars["Int"]
  income: Scalars["Int"]
  sold: Scalars["Int"]
  disposal: Scalars["Int"]
}

type WorkersInput = {
  q?: Maybe<Scalars["String"]>
}

type WorkerTask = {
  id: Scalars["Int"]
  creator: User
  title: Scalars["String"]
  assigned_to?: Maybe<User>
  executor?: Maybe<User>
  created_at: Scalars["DateTime"]
  updated_at?: Maybe<Scalars["DateTime"]>
  deadline_at?: Maybe<Scalars["DateTime"]>
  finished_at?: Maybe<Scalars["DateTime"]>
}

type WorkerTaskInput = {
  title: Scalars["String"]
  assigned_to?: Maybe<Scalars["Int"]>
  deadline_at?: Maybe<Scalars["DateTime"]>
}

type WorkerTaskPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<WorkerTask>>
}

type WorkShift = {
  id: Scalars["Int"]
  comment?: Maybe<Scalars["String"]>
  worker: User
  created_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
  events: Array<WorkShiftEvent>
  money: WorkShiftMoney
  payments?: Maybe<Array<Payment>>
  cashOrders?: Maybe<Array<CashOrder>>
}

type WorkShiftEvent = {
  id: Scalars["Int"]
  type: Scalars["String"]
  created_at: Scalars["DateTime"]
}

/** exists:users,id */
type WorkShiftInput = {
  created_from?: Maybe<Scalars["DateTime"]>
  created_to?: Maybe<Scalars["DateTime"]>
  worker_id?: Maybe<Scalars["Int"]>
}

type WorkShiftMoney = {
  sum: MoneyByTypes
  cash_on_start: Scalars["Float"]
}

type WorkShiftPaginated = {
  paginatorInfo?: Maybe<PaginatorInfo>
  data?: Maybe<Array<WorkShift>>
}

type WorkShiftPaymentOverviewData = {
  id: Scalars["Int"]
  worker: User
  cash_on_start: Scalars["Float"]
  total: Scalars["Float"]
  deposit: Scalars["Float"]
  bonus: Scalars["Float"]
  refunded: Scalars["Float"]
  cash: Scalars["Float"]
  card: Scalars["Float"]
  cash_orders: Array<Maybe<CashOrder>>
  sum: MoneyData
  currency?: Maybe<Currency>
  created_at: Scalars["DateTime"]
  finished_at?: Maybe<Scalars["DateTime"]>
}

declare enum WorkShiftStatus {
  None = "NONE",
  Open = "OPEN",
  My = "MY",
  Locked = "LOCKED"
}