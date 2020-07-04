<template>
  <div style="background: #f6f6f6;">
    <div style="height: .75rem;"></div>  
    <!-- 头部 -->
    <div class="ziye_toub">
        <div class="left" onclick="history.back();"></div>
        <p>商品详情</p>
    </div>
    <!-- banner -->
    <div class="swiper-container banner_shouy">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/images/xiangqye.jpg"></div>
            <div class="swiper-slide"><img src="../assets/images/xiangqye1.jpg"></div> 
            <div class="swiper-slide"><img src="../assets/images/xiangqye2.jpg"></div> 
        </div>
        <div class="swiper-pagination lunbo_banner list_xq_bannr"></div>
    </div>
    <div class="lest_xq_cs">
        <div class="bt">
            <h2>美酒白酒葡萄酒</h2>
            <span>￥4565.00</span>
        </div>
        <div class="rem2"></div>
        <ul>
            <li class="shangp_goumai_tk">商品规格 <i>···</i></li>
        </ul>
        <div class="rem2"></div>
    </div>
    <div class="text_seq">
        <img src="../assets/images/xiang.jpg" alt="">
    </div>
    <div class="list_dier_xq_dib">
        <ul>
            <li><a href="GouWuC.html"><img src="../assets/images/dibu2.png" alt=""><p>购物车</p></a></li> 
        </ul>
        <div>
            <div class="Nmen_er">
                <a href="#">加入购物车</a>
            </div>
            <div class="PinmianZ shangp_goumai_tk">
                <a href="#">
                    <p>立即购买</p> 
                </a>
            </div>
        </div> 
    </div> 

    <div style="height: .75rem;"></div>
    <div class="tanc_dfk">
        <div class="hei_e"></div>
        <div class="neirong">
            <div class="tup"><img src="../assets/images/list_sy1.jpg" alt=""></div>
            <dl class="biaot_text">
                <dt>这里是产品名称</dt>
                <dd>￥90000.00</dd>
            </dl>
            <div class="div_cs">
                <div class="biaot_sdol" >
                    <div class="bt">规格标题</div>
                    <ul>
                        <li class="no">类型1</li>
                        <li>类型1</li><li>类型1</li>
                        <li>类型1</li><li>类型1</li> 
                    </ul>
                </div> 
                <div class="biaot_sdol" >
                    <div class="bt">规格标题1</div>
                    <ul>
                        <li class="no">类型1</li>
                        <li>类型1</li><li>类型1</li>
                        <li>类型1</li><li>类型1</li> 
                    </ul>
                </div>
                <a href="goumai.html"  class="dibu_goum">确定购买</a> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
      return {
        value : ''
      }
  }
}
</script>

<style scoped>

</style>
