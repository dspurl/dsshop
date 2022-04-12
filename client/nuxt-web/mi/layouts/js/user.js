import {verifyPlugin} from '@/api/plugin'
export default {
  middleware: 'auth',
  data() {
    return {
      menuList: [
        {
          name: '个人中心',
          children: [
            { name: '我的个人中心', path: '/user/portal', active: false },
            { name: '消息通知', path: '/user/notice/list', active: false},
            { name: '我的收藏', path: '/user/collect', active: false},
            { name: '地址管理', path: '/user/address', active: false},
            { name: '我的账单', path: '/user/finance/list', active: false}
          ]
        },
        {
          name: '订单管理',
          children: [
            { name: '我的订单', path: '/user/indent/list', active: false }
          ]
        },
        {
          name: '账户管理',
          children: [
            { name: '个人资料', path: '/user/userinfo', active: false },
            { name: '修改密码', path: '/user/password', active: false },
            { name: '修改手机号', path: '/user/cellphone', active: false },
            { name: '注销服务', path: '/user/cancel', active: false}
          ]
        }
      ],
      menuActive: -1
    }
  },
  mounted() {
    this.getMenuList();
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.setMenuActive(val.path)
      },
      deep: true
    }
  },
  methods: {
    async getMenuList(){
      let [ verifyPluginData ] = await Promise.all([
        verifyPlugin(['coupon', 'integral', 'integralDraw']),
      ]);
      if(verifyPluginData.coupon){
        this.menuList[0].children.push({ name: '我的优惠券', path: '/user/coupon/list', active: false})
      }
      if(verifyPluginData.integral){
        this.menuList.push({
          name: '积分管理',
          children: [
            { name: '积分明细', path: '/user/integral/list', active: false }
          ]
        })
        if(verifyPluginData.integralDraw){
          this.menuList[3].children.push(
            { name: '积分抽奖', path: '/user/integralDraw/list', active: false },
            { name: '中奖记录', path: '/user/integralDraw/log', active: false }
          )
        }
      }
      this.setMenuActive($nuxt.$route.path)
    },
    setMenuActive(path) {
      for (let i = 0; i < this.menuList.length; i++) {
        if(this.menuList[i].children.length>0){
          for (let j = 0; j < this.menuList[i].children.length; j++) {
            // if (this.menuList[i].children[j].path.split('\/')[2] === path.split('\/')[2]) {
            if (this.menuList[i].children[j].path === path) {
              this.menuList[i].children[j].active = true
            } else {
              this.menuList[i].children[j].active = false
            }
          }
        }
      }
    }
  }
}
