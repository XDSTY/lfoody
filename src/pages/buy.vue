<template>
  <div class="back-d">
    <!-- 品牌 --> 
    <div style="height: .50rem;"></div>  
    <!-- 头部 -->
    <div class="ziye_toub">
        <div class="left" onclick="history.back();"></div>
        <p>确认订单</p>
    </div>
    <div class="rem2"></div> 
    <div class="dili_guanli" style="text-align: left;">
        <ul>
            <li>
                <p><i>公司</i>{{ userCompanyInfo.companyName }}</p>
                <p>地址： {{ userCompanyInfo.companyAddr }}</p>
                <span>预订人：{{ userCompanyInfo.username }}</span>
                <span>{{ userCompanyInfo.phone }}</span>
            </li>
        </ul>
    </div>
    <div class="rem2"></div> 
    <div class="biaoti_goum" style="text-align: left;">商品清单</div>
    <div class="list_shouye">
        <ul>
          <li v-for="(item, i) in products" :key="i" :value="item">
            <h3><a @click="jumpToProductDetail(item.productId)"><img style="height: 1.5rem;" :src="item.thumbnail"></a></h3>
              <dl>
                  <dt>{{ item.productName }}</dt>
                  <dd style="text-align: left;">￥{{ item.price }}  <i class="jiayi_dfe">x{{ item.productNum }}</i></dd>
            </dl>
          </li>
        </ul>
    </div>
    <div class="rem2"></div> 
    <div class="xq_money" style="text-align: left;">
        <div>
            <p><span>合计：<b class="color">￥{{ totalPrice }}</b></span></p> 
        </div>
    </div>
    <div style="height: .25rem;"></div>
    <div class="dibu_gouwc dibu_gouwc_vipxq" style="height: 8%;">
        <p style="width:65%;text-align: left;" >&nbsp;&nbsp;应付金额：<b style="color:#ff2e26 ;">￥{{ shouldPayPrice }}</b></p>
        <a style="width:35%;" @click="confirmOrder">确认订单</a>
    </div>
    <div style="height: .125rem;"></div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { formatFloat, addPrice, multiPrice } from '../utils/index'
import { getStore, removeStore } from '../service/storage'
import { user, order } from '../service/service'
import footer from '@/components/footer'
export default {
  data: function () {
      return {
        products: [],
        totalPrice: '',
        shouldPayPrice: '',
        userCompanyInfo: ''
      }
  },
  methods: {
    jumpToProductDetail(id) {
      this.$router.push('/detail/' + id)
    },
    confirmOrder() {
      var param = {totalPrice: this.totalPrice}
      var orderProductAdds = []
      this.products.forEach(e => {
        var product = {}
        product.productId = e.productId
        product.productNum = e.productNum
        product.productPrice = e.productPrice
        if(e.items != null && e.items.length > 0) {
          var productItems = []
          e.items.forEach(item => {
            productItems.push({id: item.id, num: item.num, price: item.price})
          })
          product.items = productItems
        }
        orderProductAdds.push(product)
      })
      param.orderProductAdds = orderProductAdds
      order.placeOrder(param)
        .then(res => {
          if(res.code == 1) {
            console.log('下单成功')
          }
        })
    }
  },
  components: {
    'footer-bar': footer
  },
  mounted() {
    user.userCompany()
      .then(res => {
        if(res.code == 1) {
          this.userCompanyInfo = res.data
        }
      })

    var productParams = getStore('lFoodProduct')
    if(productParams != null && productParams != '') {
      this.products = JSON.parse(productParams)
      this.totalPrice = 0
      this.products.forEach(e => {
        this.totalPrice = addPrice(this.totalPrice, multiPrice(e.price, e.productNum))
      })
      this.shouldPayPrice = this.totalPrice
    }
  }
}
</script>

<style scoped>
  .back-d {
    background: #f6f6f6;
  }
</style>
