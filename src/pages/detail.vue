<template>
  <div class="backg">
    <div style="height: .75rem;"></div>
    <!-- 头部 -->
    <div class="ziye_toub">
        <div class="left" onclick="history.back();"></div>
        <p>{{product.productName}}</p>
    </div>
    <mt-swipe class="banner_pos" :auto="4000">
        <mt-swipe-item><img src="../assets/images/xiangqye.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/xiangqye1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/xiangqye2.jpg"></mt-swipe-item>
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
        <img src="../assets/images/xiang.jpg" alt="">
    </div>
    <div class="list_dier_xq_dib">
        <ul>
            <li><a href="#"><img src="../assets/images/dibu2.png" alt=""><p>购物车</p></a></li>
        </ul>
        <div>
            <div class="Nmen_er">
                <a href="#" @click="pressCart">加入购物车</a>
            </div>
            <div class="PinmianZ shangp_goumai_tk">
                <a href="#" @click="pressBuy">立即购买</a>
            </div>
        </div>
    </div>

    <div style="height: .75rem;"></div>
    <transition name="fade">
      <div class="tanc_dfk" v-show="buyFade">
          <div class="hei_e" @click="buyFade = false"></div>
          <div class="neirong">
              <div class="tup"><img src="../assets/images/list_sy1.jpg" alt=""></div>
              <dl class="biaot_text">
                  <dt>{{ product.productName }}</dt>
                  <dd>￥{{ product.price }}</dd>
              </dl>
              <div class="div_cs">
                  <div class="biaot_sdol" >
                      <div class="bt">备注</div>
                      <ul>
                          <li class="no">加饭</li>
                          <li class="no">卤蛋</li>
                      </ul>
                  </div>
                  <a href="#" class="dibu_goum">{{ buttonText }}</a>
              </div>
          </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { product } from '../service/service'
export default {
  data: function () {
      return {
        productId: '',  
        product: {
            productId: '',
            productName: '',
            bannerList: [],
            images: [],
            price: '',
            remainingNum: '',
            cutOffTime: '',
            additionalItemRes: [],
            thumbnail: ''
        },
        buyFade: false,
        isCart: false,
        buttonText: '立即购买'
      }
  },
    methods: {
      pressCart() {
          this.buttonText = '加入购物车'
          this.buyFade = true
      },
      pressBuy() {
          this.buttonText = '立即购买'
          this.buyFade = true
      }
    },
    mounted() {
        product.getProductDetail({productId: this.productId})
            .then(res => {
                this.product = res.data
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
