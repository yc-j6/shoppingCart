<template>
  <div id="header">
    <div class="nav-global">
      <div class="container">
        <h1 class="nav-logo">
          <a href="javascript:;"></a>
        </h1>
        <ul class="nav-aside">
          <li class="nav-user">
            <a href="javascript:;">个人中心</a>
            <!--active-->
            <div class="nav-user-wrapper">
              <div class="nav-user-list">
                <dl class="nav-user-avatar">
                  <dd>
                    <span class="ng-scope"></span>
                  </dd>
                  <dt class="ng-binding">+86 138****9453</dt>
                </dl>
                <ul>
                  <li class="order">
                    <router-link to="/cart">我的订单</router-link>
                  </li>
                  <li class="support">
                    <a href="javascript:;">售后服务</a>
                  </li>
                  <li class="coupon">
                    <a href="javascript:;">我的优惠</a>
                  </li>
                  <li class="information">
                    <a href="javascript:;">账户资料</a>
                  </li>
                  <li class="address">
                    <a href="javascript:;">收货地址</a>
                  </li>
                  <li class="logout">
                    <a href="javascript:;">退出</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <!--active-->
          <li class="nav-cart"  @mouseenter="showCarHandle" @mouseleave="hideCarHandle">
            <a href="javascript:;" class="ball-rect">购物车</a>
            <!--根据class改变颜色-->
            <span :class="['cart-empty-num',{'cart-num':count>0}]">
              <i>{{count}}</i>
            </span>
            <div class="nav-cart-wrapper" v-show="carShow">
              <div class="nav-cart-list">
                <div class="empty" v-if="count<=0">
                  <h3>购物车为空</h3>
                  <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                </div>
                <div class="full" v-else>
                  <div class="nav-cart-items">
                    <ul>
                      <li class="clear" v-for="(item,index) in showCardPanel" :key="index">
                        <div class="cart-item js-cart-item cart-item-sell">
                          <div class="cart-item-inner">
                            <div class="item-thumb">
                              <img :src="item.ali_image" />
                            </div>
                            <div class="item-desc">
                              <div class="cart-cell">
                                <h4>
                                  <a href="#/item/100027401">{{item.title}}</a>
                                </h4>
                                <p class="attrs">
                                  <span>{{item.spec_json.show_name}}</span>
                                </p>
                                <h6>
                                  <span class="price-icon">¥</span>
                                  <span class="price-num">{{item.price}}</span>
                                  <span class="item-num">x {{item.count}}</span>
                                </h6>
                              </div>
                            </div>
                            <div class="del-btn" @click="delIndexData(index)">删除</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="nav-cart-total">
                    <p>
                      共
                      <strong class="ng-binding">{{count}}</strong> 件商品
                    </p>
                    <h5>
                      合计：
                      <span class="price-icon">¥</span>
                      <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{price}}</span>
                    </h5>
                    <h6>
                      <router-link tag="a" to="/cart"
                        ng-href="http://www.smartisan.com/shop/#/cart"
                        class="nav-cart-btn"
                      >去购物车</router-link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <transition
              name="ball"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:after-enter="afterEnter"
            >
              <div class="addcart-mask zIndex" v-show="ball.show">
                <img class="mask-item item-mask" />
              </div>
            </transition>
          </li>
        </ul>
        <ul class="nav-list">
          <li>
            <a href="javascript:;">在线商城</a>
          </li>
          <li>
            <a href="javascript:;">坚果 Pro</a>
          </li>
          <li>
            <a href="javascript:;">Smartisan M1 / M1L</a>
          </li>
          <li>
            <a href="javascript:;">Smartisan OS</a>
          </li>
          <li>
            <a href="javascript:;">欢喜云</a>
          </li>
          <li>
            <a href="javascript:;">应用下载</a>
          </li>
          <li>
            <a href="javascript:;">官方论坛</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-sub">
      <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list">
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">手机</a>
            </li>
            <li>
              <a href="javascript:;">“足迹系列”手感膜</a>
            </li>
            <li class="active">
              <a href="javascript:;">官方配件</a>
            </li>
            <li>
              <a href="javascript:;">周边产品</a>
            </li>
            <li>
              <a href="javascript:;">第三方配件</a>
            </li>
            <li>
              <a href="javascript:;">全部商品</a>
            </li>
            <li>
              <a href="javascript:;">服务</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      iTimer: null
    };
  },
  computed: {
    showCardPanel() {
      // console.log(this.$store.state.cartPanelData);
      return this.$store.state.cartPanelData;
    },
    //获取Vuex里的 totalCount  总数
    count() {
      return this.$store.getters.totalCount;
    },
    // 总价
    price() {
      return this.$store.getters.totalPrice;
    },
    carShow() {
      return this.$store.state.carShow;
    },
    ball() {
      return this.$store.state.ball;
    }
  },
  methods: {
    delIndexData(index) {
      this.$store.commit("delCartData", index);
    },
    showCarHandle() {
      this.$store.commit("showCar");
    },
    hideCarHandle() {
      this.$store.commit("hideCar");
    },
    beforeEnter(el) {
      let rect = this.ball.el.getBoundingClientRect();
      let rectEl = document
        .getElementsByClassName("ball-rect")[0]
        .getBoundingClientRect();
      let ball = document.getElementsByClassName("mask-item")[0];
      let x = rectEl.left + 16 - (rect.left + rect.width / 2);
      let y = rect.top + rect.height / 2 - rectEl.top + 5 - 16;
      el.style.transform = "translate3d(0," + y + "px,0)";

      ball.style.transform = "translate3d(-" + x + "px,0,0)";
      ball.src = this.ball.img
      // console.log(this.ball.img);
    },
    enter(el) {
      el.offsetHeight;
      this.$nextTick(() => {
        el.style.transform = "translate3d(0,0,0)";
        document.getElementsByClassName("mask-item")[0].style.transform =
          "translate3d(0,0,0)";
      });
    },
    afterEnter(el) {
      this.ball.show = false;
    }
  }
};
</script>


<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/header.css";
.ball-enter-active {
  transition: 0.5s cubic-bezier(0.15, 0.69, 0.6, 1.29);
}
.ball-enter-active .mask-item {
  transition: 0.5s cubic-bezier(0, 0, 1, 1);
}
.item-mask{
  width: 30px;
  height: 30px;
  border-radius:50%; 
  z-index: 999;
}
.zIndex {
  z-index: 999999;
}
</style>
