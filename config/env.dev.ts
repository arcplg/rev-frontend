module.exports = {
  CONFIG_FILE: 'dev',
  baseUrl: 'https://linemini-apps-dev.retailstudio.jp/',
  apiBaseUrl: 'https://api-dev.retailstudio.jp/api/v2/',
  apiImpBaseUrl: 'https://imp-dev.retailstudio.jp/imp/',
  staticBaseUrl: 'https://static-dev.retailstudio.jp/',
  // gtmId: 'GTM-TW54N6G',
  // gtmId: 'GTM-K9ZH4G5', // 2022-12-16 dev gtm
  basicAuthName: 'test',
  basicAuthPass: 'testtest!',
  SENTRY_DSN: '',
  chain: {
    osaki: {
      id: 2,
      showBalanceAtHome: true,
      clientKey: 'be591a45421fd5839ddb24b5fcf061b0',
    },
    'osaki-demo': {
      id: 23,
      showBalanceAtHome: true,
      clientKey: 'b7a27bbd449d214f30c088aceadc0612',
    },
    'hankyu-oasis': {
      id: 6,
      showBalanceAtHome: false,
      clientKey: '1853a86f621737661d82dcf81b3201d2',
    },
    inageya: {
      id: 7,
      showBalanceAtHome: false,
      clientKey: 'd0ea3e9829328790286252ff699534a2',
      multiCards: [
        {
          cardNumber: '^2',
          barcodeType: 'JAN',
          image: 'card-ing-fan.png',
        },
        {
          cardNumber: '^1',
          barcodeType: 'none',
          image: 'card-ing-fan-v.png',
        },
      ],
    },
    marukyu: {
      id: 11,
      showBalanceAtHome: false,
      clientKey: '4fddadf741c6c427dcaec86a48f197f6',
    },
    maruilife: {
      id: 12,
      showBalanceAtHome: true,
      clientKey: '314d2c1bf6a6163960e014a241871bb5',
      multiCards: [
        {
          cardNumber: '^280',
          barcodeType: 'none',
          image: 'mam-heart.png',
        },
        {
          cardNumber: '^281',
          barcodeType: 'none',
          image: 'mam-heart-jcb.png',
        },
      ],
    },
    delicia: {
      id: 13,
      showBalanceAtHome: false,
      clientKey: '2e1fbf2d5967e4efbaa0674cc4138134',
    },
    'keisei-store': {
      id: 14,
      showBalanceAtHome: false,
      clientKey: '8df3c8cf072eb588ff06fc101b53ceac',
    },
    'shizutetsu-store': {
      id: 17,
      showBalanceAtHome: false,
      clientKey: '48a2e5ad46904ca39347250209b6f65d',
    },
    albis: {
      id: 27,
      showBalanceAtHome: false,
      clientKey: 'ca9ed9095a6a8ac5c805a1254d9f57e6',
      multiCards: [
        {
          cardNumber: '^7',
          barcodeType: 'none',
          image: 'albis-ponta.png',
        },
        {
          cardNumber: '^8',
          barcodeType: 'none',
          image: 'albis-ponta-plus.png',
        },
      ],
    },
    'meidiya-store': {
      id: 31,
      showBalanceAtHome: false,
      clientKey: '7761044424aacf28d41fa9f8d36ca568',
      noCard: 1,
      navItems: ['home', 'chirashi'],
    },
    'entetsu-store': {
      id: 28,
      showBalanceAtHome: false,
      clientKey: '0b4e285cff46665b9a976c485a27271d',
    },
    izumiya: {
      id: 33,
      showBalanceAtHome: false,
      clientKey: 'ab2900d5f17d46f334f0a44fa889595b',
      noCardStage: 1,
    },
  },
}
