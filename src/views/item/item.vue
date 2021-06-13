<template>
<div id="home">
  <div id="main">
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<show-item v-for="(item,index) in goodList" :key="index" :item="item"></show-item>
					</div>
				</div>
			</div>
		</div>
</div>
</template>


<script>
import goodData from '@/lib/newGoodsData'
import showItem from '@/components/show-item'
export default {
  name:'item',
  data(){
    return {
      goodList: goodData
    }
  },
  components:{
	 showItem
  }
}
</script>
  
<style>
@import '../../assets/css/reset.css';
@import '../../assets/css/goodsList.css';
</style>