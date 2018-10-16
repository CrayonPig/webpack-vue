// 根据id或其他唯一值获取内容
var data =
  {
    errmsig: '',
    errno: 0,
    data: {
      title: '猜涨跌，瓜分10ETH大奖', // 主标题
      subhead: '今日奖金由XXX赞助', // 副标题
      subheadNote: 'XXXX官网：http', // 副标题说明
      platform: '火币', // 平台
      coinType: 'ETH/USDT', // 币种类
      period: '0001', // 第多少期
      isEnd: false, // 是否结束
      periodEnd: '2018-09-05 12:30:00', // 本期结束时间
      nextPeriodBegin: '2018-09-06 12:30:00', // 下期开始时间
      beforePeriodInfo: [
        { period: '0001', peopleNum: 300, number: '0.1ETH' }// 多少期，多少人，每人多少
      ],
    }
  }
// 根据id或其他唯一值获取下注区域内容
var data1 = {
  errmsig: '',
  errno: 0,
  data: {
    // 未结束返回此区域内容，
    isbet: false, // 是否下注
    betView: [
      { id: 1, name: '0%~小于等于+3%', peopleNum: 200, isChoose: false } // 未下注不返回peopleNUM及isChoose
    ],
    // 已结束返回此区域内容：
    extent: '+18%', // 涨跌幅度
    betresult: 0, // 0 未中奖 1 安慰奖 2 中奖
    peopleNum: 300, // 中奖人数
    number: '0.1ETH', // 中奖金额
  }
}
// 根据下注区域的id进行下注后返回
var data2 = {
  errmsig: '',
  errno: 0,
  data: {
  betView: [
    { id: 1, name: '0%~小于等于+3%', peopleNum: 200, isChoose: false } // 增加一个每项多少人下注
  ]
  }
}


data = {
  content: [
    {
      name:'商品详情',
      info: ['http://image','jfkas']
    },
    {
      name:'商品内容',
      info: ['本商品怎么怎么']
    }
  ]
}