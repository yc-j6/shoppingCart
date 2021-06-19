<template>
  <div id="cart">
    <div id="main" class="hander-car">
      <div class="store-content">
        <div class="cart-box">
          <div class="title">
            <h2>购物清单</h2>
          </div>
          <div class="cart-inner">
            <div class="empty-label" v-if="count<=0">
              <h3>您的购物车中还没有商品</h3>
              <router-link to="/" class="link">现在选购</router-link>
            </div>
            <div v-else>
              <div class="cart-table-title">
                <span class="name">商品信息</span>
                <span class="operation">操作</span>
                <span class="subtotal">小计</span>
                <span class="num">数量</span>
                <span class="price">单价</span>
              </div>
              <div class="cart-table">
                <div class="cart-group">
                  <!--购物列表-->
                  <div class="cart-top-items" v-for="(item,index) in showCardPanel" :key="index">
                    <div class="cart-items">
                      <div class="items-choose">
                        <span
                          class="blue-checkbox-new"
                          :class="{' checkbox-on':item.checked}"
                          @click="checkGoodsHandle(item.sku_id)"
                        >
                          <a></a>
                        </span>
                      </div>
                      <div class="items-thumb">
                        <img :src="item.ali_image" />
                        <a href="javascript:;" target="_blank"></a>
                      </div>
                      <div class="name hide-row">
                        <div class="name-table">
                          <a href="javascript:;" target="_blank">{{item.title}}</a>
                          <ul class="attribute">
                            <li>{{item.spec_json.show_name}}</li>
                          </ul>
                        </div>
                      </div>
                      <div class="operation">
                        <a class="items-delete-btn" @click="delIndexData(index)"></a>
                      </div>
                      <div class="subtotal">¥ {{item.price * item.count}}</div>
                      <div class="item-cols-num">
                        <div class="select js-select-quantity">
                          <span class="down" @click="subCarPanelHandle(item.sku_id)">-</span>
                          <span class="num">{{item.count}}</span>
                          <span class="up" @click="plusCarPanelHandle(item.sku_id)">+</span>
                        </div>
                      </div>
                      <div class="price">¥ {{item.price}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="count>0" class="cart-bottom-bg fix-bottom">
            <div class="cart-bar-operation">
              <div>
                <div class="choose-all js-choose-all">
                  <span
                    class="blue-checkbox-new"
                    :class="{'checkbox-on':allChecked}"
                    @click="allGoodsCheckHandle(allChecked)"
                  >
                    <a></a>
                  </span>
                  全选
                </div>
                <div class="delete-choose-goods" @click="delCheckGoodsHandle">删除选中的商品</div>
              </div>
            </div>
            <div class="shipping">
              <div class="shipping-box">
                <div class="shipping-total shipping-num">
                  <h4 class>
                    已选择
                    <i>{{checkedCount}}</i> 件商品
                  </h4>
                  <h5>
                    共计
                    <i>{{count}}</i> 件商品
                  </h5>
                </div>
                <div class="shipping-total shipping-price">
                  <h4 class>
                    应付总额：
                    <span>￥</span>
                    <i>{{checkedTotle}}</i>
                  </h4>
                  <h5 class="shipping-tips">应付总额不含运费</h5>
                </div>
              </div>
              <span class="jianguo-blue-main-btn big-main-btn js-checkout disabled-btn">
                <router-link to="/checkout">现在结算</router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {};
  },
  components: {},
  computed: {
    showCardPanel() {
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
    checkedCount() {
      return this.$store.getters.checkedCount;
    },
    allChecked() {
      return this.$store.getters.allChecked;
    },
    checkedTotle() {
      return this.$store.getters.checkedPrice;
    }
  },
  methods: {
      delCheckGoodsHandle () {
       this.$store.commit('delCheckGoods')
      },
    checkGoodsHandle(id) {
      this.$store.commit("checkGoods", id);
    },
    allGoodsCheckHandle(checked) {
      console.log(checked);
      this.$store.commit("allGoodsCheck", checked);
    },
    delIndexData(index) {
      this.$store.commit("delCartData", index);
    },
    subCarPanelHandle(id) {
      this.$store.commit("subCarPanelData", id);
    },
    plusCarPanelHandle(id) {
      this.$store.commit("plusCarPanelData", id);
    }
  }
};
</script>

<style>
@import "../../assets/css/reset.css";
@import "../../assets/css/cart.css";
</style>