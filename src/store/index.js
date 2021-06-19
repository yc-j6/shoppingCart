import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartPanelData: [],
        carShow: true,
        ball: {
            show: false,
            el: null,
            img: ''
        }
    },
    mutations: {
    delCheckGoods (state) {
      let i = state.cartPanelData.length
      while(i--){
        if(state.cartPanelData[i].checked){
          state.cartPanelData.splice(i,1)
        }
      }
    },
        checkGoods (state,id) {
            state.cartPanelData.forEach((goods,index) => {
              if(goods.sku_id === id){
                goods.checked = !goods.checked
              }
            })
          },
          allGoodsCheck (state,checked) {
            if(checked){
              state.cartPanelData.forEach((goods,index) => {
                goods.checked = false
              })
            }else{
              state.cartPanelData.forEach((goods,index) => {
                goods.checked = true
              })
            }
          },

        showCar(state) {
            state.carShow = true
        },
        hideCar(state) {
            state.carShow = false
        },
        addCard(state, payloade) {
            let off = false
            state.cartPanelData.forEach(item => {
                if (item.sku_id == payloade.sku_id) {
                    item.count++
                    off = true
                }
            })
            state.ball.el = event.path[0]
            state.ball.show = true
            state.ball.img = payloade.ali_image
            if (!off) {
                //添加新数据
                Vue.set(payloade, "count", 1)
                Vue.set(payloade,'checked',true)
                state.cartPanelData.push(payloade)

            }
        },
        //删除数据
        delCartData(state, index) {
            state.cartPanelData.splice(index, 1)
        }
        ,
    plusCarPanelData (state,id) {
      state.cartPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          if(goods.count === goods.limit_num) return
          goods.count ++
          return
        }
      })
    },
  	subCarPanelData (state,id) {
  	  state.cartPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          if(goods.count === 1){
              alert('不能再减了')
              return
          }
          goods.count --
          return
        }
      })
  	}
    },
    getters: {
    checkedPrice (state) {
      let total = 0
      state.cartPanelData.forEach((goods) => {
        if(goods.checked)
        total += goods.price * goods.count
      })
      return total
    },
    allChecked (state) {
      let allChecked = true
      state.cartPanelData.forEach((goods) => {
        if(!goods.checked){
          allChecked = false
          return
        }
      })
      return allChecked
    },
        //计算总个数
        totalCount(state) {
            let count = 0
            state.cartPanelData.forEach(item => {
                count += item.count
            })
            return count
        },
        checkedCount (state) {
            let count = 0
            state.cartPanelData.forEach((goods) => {
              if(goods.checked)
              count += goods.count;
            })
            return count
          },
        totalPrice(state) {
            let price = 0
            state.cartPanelData.forEach(item => {
                price += item.price * item.count
            })
            return price
        },
    }
})
export default store;
