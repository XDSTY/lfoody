<template>
  <div class="backg">
    <div style="height: .75rem;"></div>
    <!-- 头部 -->
    <div class="ziye_toub">
        <div class="left" onclick="history.back();"></div>
        <p>{{product.productName}}</p>
    </div>
    <mt-swipe class="banner_pos" :auto="4000">
        <mt-swipe-item v-for="item in product.bannerList" :key="item"><img :src="item"></mt-swipe-item>
    </mt-swipe>
    <div class="lest_xq_cs">
        <div class="bt">
            <span>￥{{ product.price }}</span>
            <span>剩余{{ product.remainingNum }}份</span>
            <span>截止时间：{{ product.cutOffTime }}</span>
        </div>
        <div class="rem2"></div>
    </div>
    <!-- 图片详情 -->
    <div class="text_seq">
        <img v-for="item in product.images" :key="item" :src="item" alt="">
    </div>
    <div class="list_dier_xq_dib">
        <ul>
            <li><a @click="toCartPage"><img src="../assets/images/dibu2.png"><p>购物车</p></a></li>
        </ul>
        <div>
            <div class="Nmen_er">
                <a @click="pressCart">加入购物车</a>
            </div>
            <div class="PinmianZ shangp_goumai_tk">
                <a @click="pressBuy">立即购买</a>
            </div>
        </div>
    </div>

    <div style="height: .75rem;"></div>
    <transition name="fade">
      <div class="tanc_dfk" v-show="buyFade">
          <div class="hei_e" @click="buyFade = false"></div>
          <div class="neirong">
              <div class="tup"><img :src="product.thumbnail" alt=""></div>
              <dl class="biaot_text">
                  <dt>{{ product.productName }}</dt>
                  <dd>￥{{ finalPrice }}</dd>
              </dl>
              <div class="div_cs">
                  <div class="biaot_sdol" >
                      <div class="bt">备注</div>
                      <ul>
                          <li v-for="(item, i) in items" :key="i" :value="item"  @click="pressAddItem(i ,item, $event)">{{ item.name }}</li>
                      </ul>
                  </div>
                  <a class="dibu_goum" @click="buyNow">{{ buttonText }}</a>
              </div>
          </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { product, cart } from '../service/service'
import { setStore } from '../service/storage'
import { parseTime, formatFloat } from '../utils/index'
export default {
  data: function () {
      return {
        productId: this.$route.params.id,
        product: '',
        buyFade: false,
        isCart: false,
        buttonText: '立即购买',
        items: [],
        finalPrice: 0,
        buyType: 1
      }
  },
    methods: {
      pressCart() {
          this.buttonText = '加入购物车'
          this.buyFade = true
          this.buyType = 1
      },
      pressBuy() {
          this.buttonText = '立即购买'
          this.buyFade = true
          this.buyType = 2
      },
      pressAddItem(i, item, event) {
          item.active = !item.active
          if(item.active) {
            this.finalPrice = formatFloat(parseFloat(this.finalPrice) + parseFloat(this.items[i].price))
            event.currentTarget.className = 'no'
          } else {
              this.finalPrice = formatFloat(parseFloat(this.finalPrice) - parseFloat(this.items[i].price))
              event.currentTarget.className = ''
          }
      },
      buyNow() {
          // 加入购物车
          if(this.buyType == 1) {
              var param = {productId: this.productId, productNum: 1 }
              var additionalItems = []
              if(this.items != null && this.items.length > 0) {
                this.items.forEach(element => {
                    if(element.active == true) {
                        additionalItems.push({additionalId: element.id, num: 1})
                    }
                })
              }
              param.cartItemAddParams = additionalItems
              cart.addCartrItem(param)
                .then(res => {
                    this.$toast('添加成功')
                })
          } else {
              // 进入确认订单页
              var additionalItems = []
              var productParam = {productId: this.productId, thumbnail: this.product.thumbnail, productPrice: this.product.price, price: this.finalPrice, productNum: 1}
              var productName = this.product.productName
              var hasAdditem = 0
              if(this.items != null && this.items.length > 0) {
                this.items.forEach(element => {
                    if(element.active == true) {
                        if(hasAdditem == 0) {
                            hasAdditem = 1
                            productName += '('
                        }
                        additionalItems.push({id: element.id, name: element.name, num: 1, price: element.price})
                        productName += element.name + '、'
                    }
                })
              }
              if(hasAdditem == 1) {
                  productName = productName.substring(0, productName.length - 1)
                  productName += ')'
              }
              productParam.productName = productName
              productParam.items = additionalItems

              var params = []
              params.push(productParam)
              setStore('lFoodProduct', params)
              this.$router.push('/buy')
          }
      },
      toCartPage() {
          this.$router.push('/cart')
      }
    },
    mounted() {
        product.getProductDetail({productId: this.productId})
            .then(res => {
                this.product = res.data
                this.product.cutOffTime = parseTime(this.product.cutOffTime, '{y}-{m}-{d} {h}:{i}')
                if(this.product.additionalItemRes != null) {
                    this.product.additionalItemRes.forEach(element => {
                        element.active = false
                        this.items.push(element)
                    });
                }
                this.finalPrice = formatFloat(this.product.price)
            })
    }
}
</script>

<style scoped>
      .banner_pos {
          margin-left:auto;
          margin-right:auto;
          position:relative;
          overflow:hidden;
          list-style:none;
          padding:0;
          height: 250px;
      }

  .backg {
    background: #f6f6f6;
  }

      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
</style>
