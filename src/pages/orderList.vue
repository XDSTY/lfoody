<template>
  <div class="back-d">
    <div style="height: .75rem;"></div>
      <!-- 头部 -->
    <div class="ziye_toub">
        <div class="left" onclick="history.back();"></div>
        <p>我的订单</p>
    </div>
    <div class="zy_module_content">	
        <div class="swiper-container vip_user_order">
            <!-- top nav -->
            <div class="order_nav dis_flex"></div>
            <div class="rem2"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide"> 
                    <div class="list_shouye">
                        <ul>
                            <li>
                                <div class="gerzx_shangj"><img src="../assets/images/banner1.jpg" alt="" style="height: .55rem;">五粮液集团</div>
                                <div style="overflow:hidden;"> 
                                    <h3><a href="#"><img style="height: 1.5rem;" src="../assets/images/list_sy.jpg" alt=""></a></h3>
                                    <dl>
                                        <dt>五粮液股份 万事如意佳品 浓香型白酒礼盒装 整箱装 52度</dt>
                                        <dd>￥20090 <span style="float: right;">x1</span></dd>
                                    </dl>
                                </div>
                                <div style="overflow:hidden;"> 
                                    <h3><a href="#"><img style="height: 1.5rem;" src="../assets/images/list_sy.jpg" alt=""></a></h3>
                                    <dl>
                                        <dt>五粮液股份 万事如意佳品 浓香型白酒礼盒装 整箱装 52度</dt>
                                        <dd>￥20090 <span style="float: right;">x1</span></dd>
                                    </dl>
                                </div>
                                <div class="order_btn">  
                                    <a class="hui" href="#">已完成</a>   
                                    <a href="my_pingou_xq.html">查看详情</a>  
                                </div>
                            </li>  
                        </ul>
                    </div>
                </div> 
                <div class="swiper-slide">
                    交易中
                </div>
                <div class="swiper-slide">
                    已完成
                </div>
                <div class="swiper-slide">
                    已完成
                </div> 
                <div class="swiper-slide">
                    已完成
                </div> 
            </div>
        </div> 
    </div>
  </div>
</template>

<script>

import footer from '@/components/footer'
import { user, order } from '../service/service'
export default {
  data: function () {
      return {
		value : '',
		userInfo: '',
		modules: []
      }
  },
  methods : {
  },
  components: {
    'footer-bar': footer
  },
  mounted() {
      
  }
}
</script>

<style scoped>
      .back-d {
        background: #f6f6f6;
    }

    .swiper-slide{
            display: block;
        }
</style>
