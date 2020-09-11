<template>
  <div style="background: #f6f6f6;position:relative;width:100%;font-size: .24rem; ">
    <div class="search_bomb_box" v-show="searchShow">
      <div class="search_top fix">
        <a v-on:click="cancelSearch" class="search_bomb_box_a"><img src="../assets/images/back_jt.png"></a>
        <div>
          <form>
            <input type="text" name="" placeholder="新品上市">
            <button type="submit"><img src="../assets/images/sous.png"></button>
          </form>
        </div>
      </div>
      <div class="search_txt">
        <h2>热门搜索</h2>
        <ul>
          <li>沙拉</li>
          <li>沙拉</li>
          <li>沙拉</li>
          <li>沙拉</li> 
        </ul>
      </div>
    </div>
    <div style="height: .75rem;"></div>
    <div id="waik" v-show="contentShow">
      <!-- 头部 -->
      <div class="ziye_toub">
          <div class="left" onclick="history.back();"></div>
          <p>{{ city.cityName }}</p>
      </div>
      <div class="sos_list">
          <div v-on:click="searchClick"> 
              <img src="../assets/images/list_sos.png" alt="">
              <span v-if="nowSearch">当前搜索： {{nowSearch}}</span>
          </div>
      </div> 
      <div class="ni_list_l">
          <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
              <li v-for="(item, i) in goods" :key="i" :value="item">
                <a @click="jumnpDetail(item.productId)">
                  <img :src="item.thumbnail" alt="">
                  <p>{{ item.productName }}</p>
                  <span>￥{{ item.price }}</span>
                </a>
              </li>
          </ul>
      </div>
      <!--  -->
    </div>
   <footer-bar></footer-bar>
  </div>
</template>

<script>
import footer from '@/components/footer'
import { product, user } from '../service/service'
export default {
  data: function () {
      return {
        value : '',
        searchShow: false,
        contentShow: true,
        loading: false,
        hasMore: true,
        nowSearch: '',
        city: {
          cityId: '',
          cityName: ''
        },
        query: {
          cityId: 1,
          productName: '',
          page: 1,
          pageSize: 10
        },
        goods: []
      }
  },
  methods : {
    searchClick() {
      this.searchShow = true
      this.contentShow = false
    },
    cancelSearch() {
      this.searchShow = false
      this.contentShow = true
    },
    loadMore() {
      if(this.loading || !this.hasMore) {
        return
      }
      this.loading = true;
      setTimeout(() => {
        product.getProductList(this.query)
          .then((res) => {
            if(res.code == 1) {
              var tgoods = res.data
              this.query.page = this.query.page + 1
              for(var i = 0; i < tgoods.length; i ++) {
                this.goods.push(tgoods[i])
              }
              if(res.data.length == 0) {
                this.hasMore = false
              }
              this.loading = false;
            }
          })
      }, 500);
    },
    jumnpDetail(id) {
      this.$router.push('/detail/' + id)
    }
  },
  components: {
    'footer-bar': footer
  },
  mounted() {
    // product.getProductList(this.query)
    //     .then((res) => {
    //       if(res.code == 1) {
    //        this.goods = res.data
    //       }
    //     })
    user.userCity()
      .then((res) => {
        if(res.code == 1) {
          this.city = res.data
        }
      })
  }
}
</script>

<style>
</style>
