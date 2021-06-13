<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img
          :alt="item.name"
          :src=item.sku_info[itemIndex].ali_image
          style="opacity: 1;"
        />
      </div>
      <h6>{{item.name}}</h6>
      <h3>{{item.name_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="(sku,index) in item.sku_info" :key="index">
            <a href="javascript:;" @click="tableData(index)" :class="{'active':index==itemIndex}"><img :src="`${sku.ali_image}`"></a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
          <router-link :to="{name:'shop' ,query: {itemId:item.sku_info[itemIndex].sku_id}}">查看详情</router-link>
        </span>
        <span class="item-blue-btn" @click="addHandlerCard(item.sku_info[itemIndex])">加入购物车</span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i>
        <span>{{item.price}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
       <router-link :to="{name:'shop' ,query: {itemId:item.sku_info[itemIndex].sku_id}}"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          itemIndex: 0
        }
    },
    props:{
        item:{
          type: Object
        }
    },
    methods: {
    tableData (index) {
      this.itemIndex = index
    },
    // 添加购物车
    addHandlerCard(goods){
      this.$store.commit("addCard",goods)
    }
  }
};
</script>

<style>
</style>