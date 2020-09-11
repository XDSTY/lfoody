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
                <p><i>默认</i>{{ userCompanyInfo.companyName }}</p>
                <span>{{ userCompanyInfo.companyAddr }}</span>
                <span>{{ userCompanyInfo.username }}</span>
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
            <!-- <li>
                <h3><a href="list_xq.html"><img style="height: 1.5rem;" src="http://119.23.240.184:9999/static/shala.jpg"></a></h3>
                <dl>
                    <dt>五粮液股份 万事如意佳品 浓香型白酒礼盒装 整箱装 52度</dt>
                    <dd style="text-align: left;">￥498.00  <i class="jiayi_dfe">x1</i></dd>
                </dl>
            </li>
            <li>
                <h3><a href="list_xq.html"><img style="height: 1.5rem;" src="http://119.23.240.184:9999/static/shala.jpg"></a></h3>
                <dl>
                    <dt>五粮液52度普五第八代款整箱装500ml*6瓶 </dt>
                    <dd style="text-align: left;">￥20090  <i class="jiayi_dfe">x1</i></dd>
                </dl>
            </li>  -->
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
        <a style="width:35%;" href="zhifu.html">提交支付</a>
    </div>
    <div style="height: .125rem;"></div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { parseTime, formatFloat } from '../utils/index'
import { getStore, removeStore } from '../service/storage'
import {user} from '../service/service'
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
    }
  },
  components: {
    'footer-bar': footer
  },
  mounted() {

    var productParam = getStore('lFoodProduct')
    if(productParam != null && productParam != '') {
      var productObj = JSON.parse(productParam)
      this.products.push(productObj)
      this.totalPrice = productObj.price
      this.shouldPayPrice = productObj.price
    }
  }
}
</script>

<style scoped>
  .back-d {
    background: #f6f6f6;
  }
</style>
