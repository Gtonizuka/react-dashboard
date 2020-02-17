const data = [
    {
        days: [
            {
                day: '',
                ordersTotal: 100-100,
                orders: [
                    {
                        id: 'AAAXX',
                        price: '10-100USD',
                        platform: 'mobile',
                        os: 'android',
                        payment: 'card'
                    },
                    {
                        id: 'BBX',
                        price: '10-100USD',
                        platform: 'desktop',
                        os: 'windows',
                        payment: 'applepay'
                    },
                    {
                        id: 'BBXs',
                        price: '10-100USD',
                        platform: 'desktop',
                        os: 'iOS',
                        payment: 'paypal'
                    },
                ]
            }
        ]
    }
]

[
    {
      
      'repeat(40, 50)': {
        _id: '{{objectId()}}',
        index: '{{index()}}',
        price: 0,
        platform: '{{random("mobile", "desktop")}}',
        os(f) {
          if(this.platform === 'mobile') {
              return '{{random("iOS", "android")}}';
          }
          else if (this.platform === 'desktop') {
              return '{{random("macOS", "windows")}}';
         }},
        payment: '{{random("applePay", "card", "paypal")}}'
      }
        
    }
  ]