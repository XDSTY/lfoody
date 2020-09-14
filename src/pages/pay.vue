<template>
  <div class="back-d">
      <div style="height: .75rem;"></div>  
        <div class="ziye_toub">
            <div class="left" onclick="history.back();"></div>
            <p>收银台</p>
        </div>     
        <!-- <div class="rem2"></div>  -->
        <div class="qian_duos">
            <h2>待支付：￥{{ shouldPayAmount }}</h2>
        </div>
        <div class="text-danger">
            <p>{{ endText }}</p>
            <count-down v-on:end_callback="countDownE_cb(1)" :currentTime="currentTime" :startTime="startTime" :endTime="endTime" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></count-down>
        </div>
        <ul class="zhif_fangs">
            <li class="no"><img src="../assets/images/qianbao.svg" alt=""><span>个人钱包</span><i></i></li>
            <li><img src="../assets/images/zhif.png"><span>微信支付</span></li>
            <li><img src="../assets/images/zhif1.png"><span>微信支付</span></li>
        </ul>
        <div class="dibu_gouwc">
            <a href="#">确认支付</a>
        </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { getTimeMills } from '../utils/index'
import { getStore, removeStore } from '../service/storage'
import { order } from '../service/service'
import footer from '@/components/footer'
import CountDown from 'vue2-countdown'
export default {
  data: function () {
      return {
        currentTime: 0,
        startTime: 0,
        endTime: 0,
        endText: '',
        shouldPayAmount: '',
        orderId: ''
      }
  },
  methods: {
    countDownE_cb() {
        // 跳转到个人中心页
        this.endText = '订单已取消'
    }
  },
  components: {
    'footer-bar': footer,
    'count-down': CountDown
  },
  mounted() {
    this.orderId = this.$route.params.orderId
    var param = {orderId: this.orderId}
    order.payOrderPage(param)
        .then(res => {
            if(res.code == 1) {
                var data = res.data
                if(data.jumpTo == 2) {
                    this.$router.push('/index')
                    return
                }
                this.currentTime = getTimeMills(data.currentTime)
                this.startTime = getTimeMills(data.currentTime)
                this.endTime = getTimeMills(data.endTime)
                this.shouldPayAmount = data.shouldPayPrice
            }
        })
  }
}
</script>

<style scoped>
  .back-d {
    background: #f6f6f6;
  }
  .text-danger{color:#a94442}
  .panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}
  .panel-body{padding:15px}
</style>
