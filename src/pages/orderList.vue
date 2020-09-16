<template>
  <div class="back-d">
    <div class="ziye_toub">
      <div class="left"
           onclick="history.back();"></div>
      <p>我的订单</p>
    </div>
    <div class="rem2"></div>
    <div style="margin-top:0.30rem;">
      <mt-navbar class="page-part"
                 v-model="selected">
        <mt-tab-item v-for="(it, index) in items"
                     v-bind:key="index"
                     :id="it.id">{{ it.name }}</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="list_shouye">
            <ul>
              <li>
                <div style="overflow:hidden;margin-top:0.5cm;">
                  <h3><a href="#"><img style="height: 1.5rem;"
                           src="../assets/images/list_sy.jpg"></a></h3>
                  <dl>
                    <dt>奥利给</dt>
                    <dd style="text-align: left;">￥20090 <span style="float: right;">x1</span></dd>
                  </dl>
                </div>
                <div class="order_btn">
                  <p class="order-amount-class">总计：￥20090</p>
                  <a href="my_pingou_xq.html">去支付</a>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="list_shouye">
            <ul>
              <li>
                <div style="overflow:hidden;margin-top:0.5cm;">
                  <h3><a><img style="height: 1.5rem;"
                           src="../assets/images/list_sy.jpg"></a></h3>
                  <dl>
                    <dt>五粮液股份 万事如意佳品 浓香型白酒礼盒装 整箱装 52度</dt>
                    <dd style="text-align: left;">￥20090 <span style="float: right;">x1</span></dd>
                  </dl>
                </div>
                <div class="order_btn">
                  <a class="hui">退款</a>
                  <a>查看详情</a>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="list_shouye">
            <ul>
              <li>
                <div style="overflow:hidden;margin-top:0.5cm;">
                  <h3><a><img style="height: 1.5rem;"
                           src="../assets/images/list_sy.jpg"></a></h3>
                  <dl>
                    <dt>五粮液股份 万事如意佳品 浓香型白酒礼盒装 整箱装 52度</dt>
                    <dd style="text-align: left;">￥20090 <span style="float: right;">x1</span></dd>
                  </dl>
                </div>
                <div class="order_btn">
                  <a>查看详情</a>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <div class="list_shouye">
            <ul>
              <li>
                <div style="overflow:hidden;margin-top:0.5cm;">
                  <h3><a><img style="height: 1.5rem;"
                           src="../assets/images/list_sy.jpg"></a></h3>
                  <dl>
                    <dt>五粮液股份 万事如意佳品 浓香型白酒礼盒装 整箱装 52度</dt>
                    <dd style="text-align: left;">￥20090 <span style="float: right;">x1</span></dd>
                  </dl>
                </div>
                <div class="order_btn">
                  <a>查看详情</a>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footer from '@/components/footer'
export default {
  name: 'page-navbar',
  data () {
    return {
      status: '',
      selected: '1',
      items: [{ name: "待付款", id: '1', status: 2 }, { name: "待配送", id: '2', status: 4 },
      { name: "完成", id: '3', status: 7 }, { name: "退款", id: '4', status: 8 }]
    };
  },
  methods: {
  },
  components: {
    'footer-bar': footer
  },
  watch: {
    'selected': {
      handler (newValue, oldValue) {
        console.log(newValue)
      }
    }
  },
  mounted () {
    this.status = this.$route.params.status
    console.log(this.status)
  }
};
</script>

<style scoped>
.back-d {
  background: #f6f6f6;
}
</style>