<template>
  <div class="back-d">
    <div style="height: .75rem;"></div>
    <div class="ziye_toub">
        <div class="left" onclick="history.back();"></div>
        <p>购物车</p>
    </div>
    <div class="mui-content class_xiaox class_colorga">
        <ul v-for="(item, i) in items" :key="i" :value="item" class="mui-table-view">
            <li class="mui-table-view-cell">
                <div class="mui-slider-handle">
                    <div class="xiaoxi_neir_k beizhu">
                        <div class="img_t"><img style="height:1.2rem;" :src="item.thumbnail" alt=""></div>
                        <div class="text_you">
                            <div class="nimen_text">
                                <p>{{ item.productName }}</p>
                                <h3 style="color: #ff2e26;">￥{{ item.totalPrice }}</h3>
                            </div>
                            <div class="houm_wez">
                                <i>x{{ item.num }}</i>
                                <div class="mui-numbox">
                                    <button class="mui-numbox-btn-minus" type="button" @click="descVal(item)">-</button>
                                    <input class="mui-numbox-input" type="number" :value="item.num" >
                                    <button class="mui-numbox-btn-plus" type="button" @click="incrVal(item)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="dibu_gouwc">
        <a @click="buyNow">立即结算</a>
    </div>
    <div style="height: .125rem;"></div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { parseTime, formatFloat } from '../utils/index'
import footer from '@/components/footer'
import { cart } from '../service/service'
import { setStore } from '../service/storage'
export default {
  data: function () {
      return {
        query: {
          page: 1,
          pageSize: 10
        },
        items: []
      }
  },
  methods: {
    incrVal(item) {
      var param = {cartId: item.cartId, productId: item.productId, num: 1}
      cart.incrCartItemNum(param)
        .then(res => {
          if(res.code == 1) {
            item.num ++
            item.totalPrice = formatFloat(parseFloat(item.price) * item.num)
          }
        })
    },
    descVal(item) {
      if(item.num > 1) {
        var param = {cartId: item.cartId, productId: item.productId, num: 1}
        cart.descCartItemNum(param)
          .then(res => {
            if(res.code == 1) {
              item.num --;
              item.totalPrice = formatFloat(parseFloat(item.price) * item.num)
            }
          })
      } else {
          this.$messagebox.confirm('确定将该商品从购物车移除?').then(action => {
              var param = {cartId: item.cartId, productId: item.productId }
              cart.delCartItem(param)
                .then(res => {
                  this.$toast('移除成功')
                  this.items.splice(i, 1)
                })
          })
      }
    },
    getCartItemList() {
      cart.getCartItemList(this.query)
        .then(res => {
          if(res.code == 1) {
            this.items = res.data
          }
        })
    },
    buyNow() {
      // 组装数据传到确认订单页
      if(this.items.length == 0) {
        return
      }
      var params = []
      this.items.forEach(e => {
        var productParam = {productId: e.productId, thumbnail: e.thumbnail, productPrice: e.productPrice, price: e.price, productName: e.productName, productNum: e.num}
        productParam.items = e.cartAdditionalItems
        params.push(productParam)
      })
      setStore('lFoodProduct', params)
      this.$router.push('/buy')
    }
  },
  components: {
    'footer-bar': footer
  },
  mounted() {
    this.getCartItemList()
  }
}
</script>

<style scoped>
  .back-d {
    background: #f6f6f6;
  }
</style>
