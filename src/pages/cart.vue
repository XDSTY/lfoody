<template>
  <div class="back-d">
    <!-- 品牌 -->
    <div style="height: .75rem;"></div>
    <!-- 头部 -->
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
                                    <button class=" mui-numbox-btn-minus" type="button" @click="descVal(item, i)">-</button>
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
        <a>立即结算</a>
    </div>
    <div style="height: .125rem;"></div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { parseTime, formatFloat } from '../utils/index'
import footer from '@/components/footer'
export default {
  data: function () {
      return {
        items: [{
          cartId: 1,
          productName: '海鲜面（卤蛋、煎蛋、加饭）',
          price: 15.5,
          thumbnail: 'http://119.23.240.184:8080/ss/shala.jpg',
          num: 1,
          totalPrice: '15.50'
        }, {
          cartId: 2,
          productName: '海鲜面（卤蛋）',
          price: '14.50',
          thumbnail: 'http://119.23.240.184:8080/ss/shala.jpg',
          num: 1,
          totalPrice: '14.50'
        }]
      }
  },
  methods: {
    incrVal(item) {
      item.num ++
      item.totalPrice = formatFloat(parseFloat(item.price) * item.num)
    },
    descVal(item, i) {
      if(item.num > 1) {
        item.num --;
        item.totalPrice = formatFloat(parseFloat(item.price) * item.num)
      } else {
          this.$messagebox.confirm('确定将该商品从购物车移除?').then(action => {
              this.items.splice(i, 1)
          })
      }
    }
  },
  components: {
    'footer-bar': footer
  },
}
</script>

<style scoped>
  .back-d {
    background: #f6f6f6;
  }
</style>
