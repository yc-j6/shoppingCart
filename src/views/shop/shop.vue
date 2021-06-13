<template>
  <div id="item">
    <div id="main">
			<div class="store-content item">
				<div class="item-box">
					<div class="gallery-wrapper">
						<div class="gallery">
							<div class="thumbnail">
								<ul>
									<li :class="{'on':index==countIndex}" :key="index" v-for="(img,index) in itemsData.ali_images" @click="qhimg(index)"><img :src="img+'?x-oss-process=image/resize,w_54/quality,Q_90/format,webp'"></li>
								</ul>
							</div>
							<div class="thumb">
								<ul>
									<li class="on"><img :src="itemsData.ali_images[countIndex]+'?x-oss-process=image/resize,w_440/quality,Q_90/format,webp'"></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="banner">
						<div class="sku-custom-title">
							<div class="params-price">
								<span><em>¥</em><i>{{itemsData.price}}</i></span>
							</div>
							<div class="params-info">
								<h4>{{itemsData.title}}</h4>
								<h6>{{itemsData.sub_title}}</h6>
							</div>
						</div>
						<div class="sku-dynamic-params-panel">
							<div class="sku-dynamic-params clear">
								<span class="params-name">颜色</span>
								<ul class="params-colors">
									<li :class="{'cur':color.id==$route.query.itemId}" v-for="(color,index) in itemsData.sku_list" :key="index">
										<router-link :to="{name: 'shop', query: {itemId:color.id}}" :title="color.color"><i><img :src="'http://img01.smartisanos.cn/'+color.image+'20X20.jpg'"></i></router-link>
									</li>
								</ul>
							</div>
							<div class="sku-dynamic-params clear">
								<div class="params-name">数量</div>
								<div class="params-detail clear">
									<div class="item-num js-select-quantity">
										<span class="down down-disabled">-</span>
										<span class="num">1</span>
										<span class="up up-disabled">+</span>
									</div>
								</div>
							</div>
						</div>
						<div class="sku-status">
							<div class="cart-operation-wrapper clearfix">
								<span class="blue-title-btn js-add-cart"><a>加入购物车</a></span>
								<span class="gray-title-btn"><a>现在购买</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import newItemsData from '@/lib/newItemsData.js'
export default {
  name:'item',
  data(){
    return{
		countIndex: 0
	}
  },
  computed:{
	  itemsData(){
		let id = this.$route.query.itemId
		let data = newItemsData.filter(item => {
			return item.sku_id == id
		})
		console.log(data[0])
		return data[0]
	  }
  },
  methods:{
	  qhimg(index){
       this.countIndex = index
	  }
  }
}
</script>

<style>
@import '../../assets/css/reset.css';
@import '../../assets/css/item.css';
</style>