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
              <span>当前搜索：红酒</span>
          </div>
      </div> 
      <div class="zhonghe_Sd">
          <ul>
              <li>综合</li>
              <li>销量</li>
              <li>有货优先</li>
          </ul>
      </div>
      <div class="ni_list_l">
          <ul>
              <li>
                  <a href="list_xq.html">
                      <img src="../assets/images/zzrep.jpg" alt="" style="height:2.88rem;"> 
                      <p>习酒</p> 
                      <span>￥20000</span>
                  </a>
              </li>
              <li>
                  <a href="list_xq.html">
                      <h2><img src="../assets/images/zzrep2.jpg" alt=""></h2>
                      <p>谁知道贵州茅台庆典贵谁知道贵州茅台庆典贵</p> 
                      <span>￥20000</span> 
                  </a>
              </li>
              <li>
                  <a href="list_xq.html">
                      <img src="../assets/images/zzrep1.jpg" alt="" style="height:2.88rem;"> 
                      <p>习酒</p> 
                      <span>￥20000</span>
                  </a>
              </li>
              <li>
                  <a href="list_xq.html">
                      <img src="../assets/images/zzrep.jpg" alt="" style="height:2.88rem;"> 
                      <p>习酒</p> 
                      <span>￥20000</span>
                  </a>
              </li>
              <li>
                  <a href="list_xq.html">
                      <img src="../assets/images/zzrep1.jpg" alt="" style="height:2.88rem;"> 
                      <p>习酒</p> 
                      <span>￥20000</span>
                  </a>
              </li>
              <li>
                  <a href="list_xq.html">
                      <img src="../assets/images/zzrep2.jpg" alt="" style="height:2.88rem;"> 
                      <p>习酒</p> 
                      <span>￥20000</span>
                  </a>
              </li>
          </ul>
      </div>
      <div class="div_jiaz">
        <img src="../assets/images/jiazz.gif" alt="">
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
      return {
        value : '',
        searchShow: false,
        contentShow: true
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
    }
  }
}
</script>

<style>
</style>
