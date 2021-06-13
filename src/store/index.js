import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        cartPanelData:[]
    },
    mutations:{
        addCard(state,payloade){
            let off = false
            state.cartPanelData.forEach(item => {
                if(item.sku_id == payloade.sku_id){
                    item.count++
                    off = true
                }
            })
            if(!off){
                //添加新数据
            Vue.set(payloade,"count",1)
            state.cartPanelData.push(payloade)
            }
        }
    },
    getters:{
        //计算总个数
        totalCount(state){
            let count = 0
            state.cartPanelData.forEach(item => {
              count += item.count
            })
            return count
        },
        totalPrice(state){
            let price = 0
            state.cartPanelData.forEach(item => {
              price += item.price * item.count
            })
            return price
        },
    }
})
export default store;
