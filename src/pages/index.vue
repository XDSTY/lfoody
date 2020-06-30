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
          <li><a href="list.html">旺铺</a></li>
          <li><a href="list.html">花果园铺</a></li>
          <li><a href="list.html">120㎡</a></li>
          <li><a href="list.html">餐饮</a></li> 
        </ul>
      </div>
    </div>
    <div style="height: .75rem;"></div>
    <div id="waik" v-show="contentShow">
      <!-- 头部 -->
      <div class="ziye_toub">
          <div class="left" onclick="history.back();"></div>
          <p>商品列表</p>
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
              <li v-for="item in goods">
                <a href="#">
                  <img :src="item.thumbnail" alt="">
                  <p>{{ item.productName }}</p>
                  <span>￥{{ item.price }}</span>
                </a>
              </li>
          </ul>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import footer from '@/components/footer'
export default {
  data: function () {
      return {
        value : '',
        searchShow: false,
        contentShow: true,
        loading: false,
        nowSearch: '',
        goods: [{
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '香辣海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        }]
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
      this.loading = true;
      setTimeout(() => {
        var tgoods = [{
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        },
        {
          thumbnail: '/static/img/shala.38373bd.jpg',
          productName: '原味海鲜面',
          price: 15.5
        }]
        for(var i = 0; i < tgoods.length; i ++) {
          this.goods.push(tgoods[i])
        }
        this.loading = false;
      }, 500);
    }
  },
  components: {
    'foot-bar': footer
  }
}
</script>

<style>
</style>
