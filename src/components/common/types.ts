export {}

declare global {

  // const categories = [
  //   'home',
  //   'flyer',
  //   'point-card',
  //   'pricing',
  //   'history',
  //   'point-card-register',
  //   'point-card-unregister',
  //   'my-store',
  //   'my-store-register',
  //   'content',
  //   'stamp',
  //   'settings',
  // ] as const

  // export type CategoryIconCategory = typeof categories[number]

  export type CategoryIconCategory =
    '' |
    'home' |
    'flyer' |
    'point-card' |
    'pricing' |
    'history' |
    'point-card-register' |
    'point-card-unregister' |
    'my-store' |
    'my-store-register' |
    'content' |
    'stamp' |
    'settings'

  export type CategoryIconType =
    | 'outline'
    | 'round'
    | 'two-tone'
    | 'sharp'
    | 'solid'

  // export type CategoryIconColor = {
  //   [key in CategoryIconCategory]: string[]
  // }
  export type CategoryIconColor = {
    flyer: string[]
    'point-card': string[]
    pricing: string[]
    content: string[]
    stamp: string[]
    settings: string[]

    home?: string[]
    history?: string[]
    'point-card-register'?: string[]
    'point-card-unregister'?: string[]
    'my-store'?: string[]
    'my-store-register'?: string[]
  }

  export interface CategoryIconBgColor extends CategoryIconColor { }

  export type CategoryIconSize = 'medium' | 'large' | 'huge'

  export type BaseButtonColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'transparent'

  export interface ImageAttributes {
    src: string
    width: number
    height: number
  }

  export interface AgreeButtonProps {
    value: string
    text: string
    pressed: boolean
    disabled: boolean
  }

  export interface AppMenuProps {
    items: CategoryIconCategory[]
    iconType: CategoryIconType
    iconColor: CategoryIconColor
    iconBgColor: CategoryIconBgColor
  }

  export interface AppNumberProps {
    number: string
  }

  export interface ArticleContentProps {
    type: string
    body: string
    link: string
    params: { [key: string]: any }
    color: string
    bgColor: string
    bgColorSeriesStart: boolean
    bgColorSeriesEnd: boolean
    first: boolean
    inPricing: boolean
  }

  export interface AvailableCardsProps {
    cards: string[]
    image: ImageAttributes
  }

  export interface BackButtonProps {
    link: string
  }

  export type BaseButtonIcon = 'location' | 'zoom'

  export interface BadgeProps {
    type: 'questionnaire'
  }

  export interface BulletListProps {
    items: string[]
  }

  export interface ButtonGroupProps {
    direction: 'col' | 'row'
  }

  interface CarouselItem {
    image: { [key: string]: any }
    link: string
    routing?: boolean
  }

  export interface CarouselProps {
    id: string
    items: CarouselItem[]
  }

  export interface CategoryIconProps {
    category: CategoryIconCategory
    type: CategoryIconType
    color: CategoryIconColor
    bgColor: CategoryIconBgColor
    size: string
  }

  interface CheckListItem {
    name: string
    text: string
    disabled?: boolean
  }

  export interface CheckListProps {
    value: string[]
    items: CheckListItem[]
  }

  export interface CircleArrowProps {
    type: 'regular' | 'white' | 'highlighted'
    direction: 'top' | 'right' | 'bottom' | 'left'
  }

  export interface CircleIconProps {
    name: 'help'
    type: 'regular' | 'white' | 'highlighted'
    size: 'small' | 'medium'
  }

  export interface CloseButtonProps {
    value: string
    text: string
    overlaid: boolean
    disabled: boolean
  }

  export interface CollapsibleListProps {
    nested: boolean
  }

  export interface CollapsibleListItemProps {
    id: string
    text: string
    opened: boolean
    nested: boolean
  }

  export interface ContactNumberProps {
    campaignNumber: string
    appNumber: string
  }

  export interface ContentDetailHeaderProps {
    name: string
    chainName: string
    chainIcon: string
    image: ImageAttributes
    pointName: string
    point: number
    providingPointPeople: number
    providingPointStatus: 'providing' | 'ended'
    date: string[]
    hasQuestionnaire: boolean
    pr: boolean
  }

  export interface ContentIndexCardProps {
    id: number
    contentIndex?: number
    idValuePrefix?: string
    name: string
    chainName: string
    chainIcon: string
    categoryId: number
    categoryName: string | null
    categoryColorClass: string | null
    image: ImageAttributes
    pointName?: string
    point?: number
    providingPointPeople?: number
    providingPointStatus?: 'providing' | 'ended'
    date: string[]
    target: string
    hasQuestionnaire: boolean
    pr: boolean
    newIcon: boolean
    activateLogging?: boolean
    lazyLoading?: boolean
  }

  export interface CopyrightProps {
    text: string
  }

  export interface DateProps {
    date: string[]
    type: 'limit' | 'release'
    ver: string
  }

  export interface DisagreeButtonProps {
    value: string
    text: string
    pressed: boolean
    disabled: boolean
  }

  export interface EmptyMessageProps {
    text: string
  }

  export interface ErrorPageContentProps {
    statusCode: number
    apiCode: number
    summary: string
    message: string
  }

  export interface ArrowFunctionButtonProps {
    value: string
    text: string
    unit: string
    icon: BaseButtonIcon
    buttonColor: BaseButtonColor
    contentFit: boolean
    toggle: boolean
    pressed: boolean
    disabled: boolean
    outlined: boolean
    shadow: boolean
    rounded: boolean
    processing: boolean
    direction: 'right' | 'left'
    facing: 'right' | 'left' | 'top' | 'bottom'
  }

  export interface FunctionButtonProps {
    value: string
    text: string
    unit: string
    icon: BaseButtonIcon
    buttonColor: BaseButtonColor
    contentFit: boolean
    toggle: boolean
    pressed: boolean
    disabled: boolean
    outlined: boolean
    shadow: boolean
    rounded: boolean
    processing: boolean
    size?: 'small' | 'medium' | 'large'
  }

  export interface FlyerIndexCardProps {
    id: number
    image: ImageAttributes
    validPeriod?: []
    issue: string
    shopName?: string
    shopId?: string
    detailId: number
    activateLogging?: boolean
  }

  export interface FlyerViewerLargeImage {
    image: string
    width: number
    height: number
  }

  export interface FlyerViewerProps {
    issue: string
    smallImages: string[]
    largeImages: FlyerViewerLargeImage[]
  }

  export interface FlyerViewerIndicatorProps {
    current: number
    total: number
  }

  export interface GuideDetailHeaderProps {
    chainName: string
    chainKey: string
    category: string
    // iconType: CategoryIconType
    // iconColor: CategoryIconColor
    // iconBgColor: CategoryIconBgColor
  }

  export interface GuideHeaderProps {
    chainName: string
    image: ImageAttributes
    text: string
  }

  export interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6
    text: string
    icon: 'location'
    category: CategoryIconCategory
    categoryIconType: CategoryIconType
    categoryIconColor: CategoryIconColor
    categoryIconBgColor: CategoryIconBgColor
  }

  export interface HelpDeskProps {
    name: string
    link: string
  }

  export interface HomeHeadingProps {
    text: string
    category: CategoryIconCategory
    categoryIconType: CategoryIconType
    categoryIconColor: CategoryIconColor
    categoryIconBgColor: CategoryIconBgColor
    hasLink: boolean
  }

  export interface IconArrowProps {
    type: 'regular' | 'white' | 'black' | 'colored'
    direction: 'top' | 'right' | 'bottom' | 'left'
  }

  export interface IntersectionObserverProps {
    rootMargin: string
    threshold: number
    active: boolean
    delayedActivation: boolean
    doActivate: boolean
  }

  export type KurashiruCardDirection = 'col' | 'row'

  export interface KurashiruCardProps {
    id: number,
    name: string
    image: string
    link: string
    direction?: KurashiruCardDirection
  }

  export interface KurashiruCardsProps {
    items: KurashiruCardProps[]
    direction: KurashiruCardDirection
    bgColor: string
    bgColorSeriesStart: boolean
    bgColorSeriesEnd: boolean
    first: boolean
  }

  export interface LimitedTimeBonusProps {
    hours: string[]
    point: number
  }

  export interface LinkButtonProps {
    link: string
    text: string
    buttonColor: BaseButtonColor
    contentFit: boolean
  }

  export interface LinkTextProps {
    text: string
    link: string
    type: 'regular' | 'white' | 'highlighted' | 'help'
    routing: boolean
    size: 'small' | 'medium' | 'large'
    dummy: boolean
    bold: boolean
    arrowType?: 'regular' | 'white' | 'highlighted'
  }

  interface ListMenuItem {
    text: string
    link: string
  }

  export interface ListMenuProps {
    items: ListMenuItem[]
  }

  export interface MessageDialogProps {
    title: string
    text: string
    type: 'reqular' | 'alert' | 'list'
    shown: boolean
    border: boolean
  }

  export interface ModalDialogProps {
    title: string
    shown: boolean
  }

  export interface MyStoreRegistrationEditorProps {
    stores: { id: number; name: string }[]
  }

  export interface MyStoreRegistrationMenuProps {
    locationSearchProcessing: boolean
  }

  export interface MyStoreRegistrationSplashProps {
    bgImage: string
  }

  export interface MyStoreSwitchProps {
    stores: { id: number; name: string }[]
  }

  export interface NotesProps {
    notes: string
  }

  export interface NoticeItem {
    id: string
    image: string
    link: string
    routing: boolean
  }

  export interface OperationGuideProps {
    category: string
    data: object
  }

  interface PointHistoryItem {
    date: string
    name: string
    number: string
    pointName: string
    point: number
    bonusName?: 'time'
  }

  export interface PointHistoryProps {
    items: PointHistoryItem[]
  }

  export type PointHistoryItems = PointHistoryItem[]

  export interface PointCardAuthCodeEntryFieldProps {
    label: string
    code: string
  }

  export interface PointCardNumberEntryFieldProps {
    label: string
    number: string
  }

  export interface PointCardPromotionProps {
    image: ImageAttributes
    forStamp: boolean
  }

  export interface PointCardRegistrationHeaderProps {
    cardName: string
    note: string
  }

  export interface PointCardRegistrationSplashProps {
    cardName: string
    helpLink: string
    bgImage: string
  }

  interface PointCardStatusDate {
    year: number
    month: number
    day: number
  }

  export interface PointCardStatusProps {
    number: string
    cardImage: string
    code: string
    codeType: '' | 'JAN'
    date: string
    pointName: string
    point: number
    moneyName: string
    money: number
    expiredPoint: number
    expirationDate: PointCardStatusDate
    note: string
    showPoint: boolean
    showMoney: boolean
    showExpiredPoint: boolean
    showPurchasePrice: boolean
    purchasePriceCurrentMonth: number
    purchasePriceLastMonth: number
    remainingRequiredPurchasePriceForNextRank: number
    rankReward: string
    nextRankReward: string
    rankHighest: boolean
    compact?: boolean
  }

  export interface PreviewBarProps {
    expire: string
    s3BaseUrl: string
  }

  interface PreviewCheckListItem {
    name: string
    text: string
    disabled?: boolean
  }

  export interface PreviewCheckListProps {
    value: string[]
    items: PreviewCheckListItem[]
  }

  export interface PreviewPricingDetailHeaderProps {
    name: string
    image: ImageAttributes
    pointName: string
    point: number
    date: string[]
    isPurchaser: boolean
  }

  export interface PreviewStampDetailHeaderProps {
    name: string
    chainName: string
    chainIcon: string
    image: ImageAttributes
    pointName: string
    openStatus: 'preparing' | 'open' | 'ended'
  }

  export interface PricingDetailHeaderProps {
    name: string
    image: ImageAttributes
    pointName: string
    point: number
    date: string[]
    isPurchaser: boolean
  }

  export interface PricingIndexCardProps {
    id: number
    idValuePrefix?: string
    name: string
    image: ImageAttributes
    date: string[]
    point: number
    bgImage?: string
    tags: ('onlyOnce' | 'againAndAgain' | 'set' | 'limitedInStore')[]
    limitedTimeBonusHours?: string[]
    limitedTimeBonusPoint?: number
    activateLogging?: boolean
  }

  export interface PricingIndexCardsProps {
    items: PricingIndexCardProps[]
    activateLogging: boolean
  }

  export interface PricingItemConditionsProps {
    conditions: string[]
  }

  export interface PricingItemSpecialBonusProps {
    timeBonusHours: string[]
    timeBonusPoint: number
  }

  type PricingItemTargetProductsType = 'item' | 'category'

  type PricingItemTargetProductsItems = { name: string; janCode: string }[]

  type PricingItemTargetMenu = 'pricing' | 'stamp'

  export interface PricingItemTargetProductsProps {
    type: PricingItemTargetProductsType
    itemsDisplayName: string[]
    setItems: {
      type: PricingItemTargetProductsType
      achievement: number
      unit: 'price' | 'item'
      items: PricingItemTargetProductsItems
      achievementType: string
    }[]
    setOperator: 'and' | 'or'
    useDeemedCount: boolean[]
    menu: PricingItemTargetMenu
  }

  export interface PricingItemTargetProductsListProps {
    items: { name: string; janCode: string; count: number }[]
  }

  export interface PricingItemTargetStoresProps {
    stores: string[]
  }

  export interface PrivacyPolicyContentProps {
    data: string
  }

  export interface QAndATextProps {
    text: string
    type: 'question' | 'answer'
  }

  export interface QuestionnaireProps {
    number: number
    text: string
    isPurchaser: boolean
  }

  export interface RadioListItem {
    value: string
    text: string
    checked?: boolean
    disabled?: boolean
  }

  export interface RadioListProps {
    value: string
    name: string
    items: RadioListItem[]
    direction: 'vertical' | 'horizontal'
  }

  export interface RateProps {
    text: string
    value: number
    grade: number
  }

  export interface RegistrationStatusHeaderProps {
    text: string
    type: 'point-card' | 'my-store'
    item: string
    edit: boolean
  }

  interface RelatedArticlesItem {
    id: number
    text: string
    image: ImageAttributes
  }

  export interface RelatedArticlesProps {
    items: RelatedArticlesItem[]
  }

  export interface SelectableStoreListItem {
    value: string
    store: string
    address: string
    disabled?: boolean
    enableSelect?: boolean
  }

  export interface SelectedStoreProps {
    address: string
    store: string
    value: string
  }

  export interface SelectedStoreListProps {
    selected: SelectedStoreProps[]
    processing: boolean
    maxStoreLength: number
    deletable: boolean
  }

  export interface SelectableStoreListProps {
    value?: string
    name?: string
    selected: SelectedStoreProps[]
    disabled: boolean
    items: SelectableStoreListItem[]
  }

  interface SelectBoxItem {
    value: string
    text: string
    disabled?: boolean
  }

  export interface SelectBoxProps {
    value: string
    items: SelectBoxItem[]
    narrow: boolean
    disabled: boolean
  }

  export interface StampDetailHeaderProps {
    name: string
    chainName: string
    chainIcon: string
    image: ImageAttributes
    pointName: string
    point: number
    period: string[]
    openStatus: 'preparing' | 'open' | 'ended'
  }

  export interface StampIndexCardProps {
    id: number
    name: string
    chainName: string
    chainIcon: string
    image: ImageAttributes
    pointName: string
    point: number
    date: string[]
    openStatus: 'preparing' | 'open' | 'ended'
    tryStatus?: 'not-participating' | 'trying' | 'achieved'
    tryingCardCount: number
    remainingStampCount: number
    activateLogging?: boolean
  }

  export interface StampIndexCardsProps {
    items: StampIndexCardProps[]
    carousel: boolean
    activateLogging: boolean
  }

  export interface StampRallyStatusProps {
    items: { name: string; janCode: string; done: boolean }[]
    achievementStampCount: number
    date: string
    openStatus: string
  }

  export interface StampStatusProps {
    stampCount: number
    maxStamp: number
    cardCount: number
    maxCard: number
    date: string
    openStatus: string
  }

  export interface TableOfContentsProps {
    items: { text: string; fragment: string }[]
  }

  export interface TermsOfServiceContentProps {
    data: string
  }

  export interface TabItem {
    value: string
    text: string
    toggle?: boolean
    pressed?: boolean
    unit?: string
  }

  export interface TabsProps {
    current: string
    items: TabItem[]
    multiple: boolean
    doScrollToCurrentTab: boolean
  }

  export interface TextBoxProps {
    id: string
    type: 'text' | 'number' | 'email' | 'url' | 'tel' | 'password' | 'search'
    value: string
    placeholder: string
    limit: number
    disabled: boolean
    multiline: boolean
    bgPainted: boolean
    isPointNumber: boolean
  }

  export interface WinningPointMessageProps {
    pointName: string
    point: number
  }

  export interface PointBenefitsItem {
    id: number,
    name: string,
    image: string,
    point: number,
    type?: string,
  }
}
