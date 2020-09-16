<template>
  <div class="back-d">
    <div class="my_kuang">
    <div class="bj_img">
        <img class="beij_s" src="../assets/images/my_bj.jpg" alt="">
		<div class="nimetou_gaib">
			<div class="toux_hou">
				<img id="Dfgrg" style="height:1.1rem;" :src="userInfo.profilePic">
				<input id="tupian_Sc" type="file">
			</div>
			<div class="mingz">
				<h2>{{ userInfo.username }}</h2> 
			</div>
		</div>
    </div>
    <div class="shez_tuk">
        <a href="my_shez.html"><img src="../assets/images/shez.png" alt=""></a>
    </div>
    <div class="div_bx_k">
        <div class="neir_Ef"> 
			<div class="yverjif">
				<ul>
					<li><h2><i>￥</i>{{ userInfo.amount }}</h2><p>余额</p></li>
					<li><h2>{{ userInfo.integral }}</h2><p>积分</p></li>
				</ul>
			</div>
            <div class="my_tik_list fenh_ziyek yuanj_sd">
                <h3 style="text-align: left;">我的订单<a>全部订单></a></h3>
                <ul>
                  <li v-for="(item, i) in modules" :key="i" :value="item">
                    <a @click="jumpToListPage(item)"> 
                      <h2>
                        <img :src="item.icon">
                        <i v-if="item.showNum == true && item.num > 0">{{ item.num }}</i>
                      </h2>
                      <p>{{ item.moduleName }}</p>
                    </a>
                  </li>
                </ul>
            </div>
			
	<div class="list_index_my">
		<div class="my_dind">
			<div class="bt">
				<a href="my_yve.html">
					<h3><img src="../assets/images/hou_tjimg.png">设 置</h3>
					<div class="right"> 
						<img src="../assets/images/right_jiant.png">
					</div> 
				</a>
			</div>
		</div> 
		<div class="my_dind">
			<div class="bt">
				<a href="#">
					<h3><img src="../assets/images/hou_tjimg1.png">帮助与客服</h3>
					<div class="right"> 
						<img src="../assets/images/right_jiant.png">
					</div> 
				</a>
			</div>
		</div>
		<div class="my_dind">
			<div class="bt">
				<a href="#">
					<h3><img src="../assets/images/hou_tjimg2.png">意见反馈</h3>
					<div class="right"> 
						<!-- <span>您有<b>3张</b>优惠券可以使用</span> -->
						<img src="../assets/images/right_jiant.png">
					</div> 
				</a>
			</div>
		</div>
		<div class="my_dind">
			<div class="bt">
				<a href="#">
					<h3><img src="../assets/images/hou_tjimg3.png">关于</h3>
					<div class="right"> 
						<!-- <span>查看详情</span> -->
						<img src="../assets/images/right_jiant.png">
					</div> 
				</a>
			</div>
		</div> 
	</div>
	<!--  -->
	<div style="height: .9rem;"></div>
	</div>
	</div> 
</div>
    <footer-bar></footer-bar>
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
	  jumpToListPage(item) {

	  }
  },
  components: {
    'footer-bar': footer
  },
  mounted() {
	  user.getUserInfo()
	  	.then(res => {
			if(res.code == 1) {
				this.userInfo = res.data
			}
		})
	order.getOrderModules()
		.then(res => {
			if(res.code == 1) {
				this.modules = res.data
			}
		})
  }
}
</script>

<style scoped>
.fenh_ziyek ul li h2{
	width: .65rem;
	position: relative;
	margin: auto;
}
.fenh_ziyek ul li h2 i{
  background: #ff0000;
	border-radius: 50%;
	display: block;
	padding: 2px;
	position: absolute;
	color: #fff;
	border: solid 1px #fff;
	top: 0;
	right: 0;
	width: .25rem;
	height: .25rem;
	line-height: .14rem;
	font-size: .12rem;
	overflow: hidden;
}
  .back-d {
    background: #f6f6f6;
  }
  .yverjif{ background: #fff;border-radius: .3rem;    margin: 0 auto;
    width: 96%;margin-bottom: .2rem;    box-shadow: 0 0 5px rgba(0,0,0,.1);}
.yverjif ul{padding: .2rem;overflow: hidden;}
.yverjif ul li{width: 50%;float: left;text-align: center; position: relative;}
.yverjif ul li h2{    color: #ff0000;
    font-size: .35rem;
    font-weight: 500;}
.yverjif ul li h2 i{ font-size: .18rem;}
.yverjif ul li p{color: #999;}
.yverjif ul li:last-child:after{content: "";width: 1px;height: .5rem;background: #eee;display: block;bottom:0;
	top: 0;margin: auto;left: 0;position: absolute;
}
.my_kuang .div_bx_k .neir_Ef{width: 100%;}
.my_tik_list{
	    border-radius: 0;
}

.my_kuang .nimetou_gaib{
	position: absolute;
	top: 0;
	left: 0;
	padding: .2rem;
	padding: .3rem .2rem;
}
.my_kuang .nimetou_gaib{

}
#tupian_Sc {
    display: none;
}
.my_kuang .nimetou_gaib .toux_hou {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .2rem;
    border: 2px solid #fff;
	background: #fff;
	float: left;
}
.my_kuang .nimetou_gaib .toux_hou img {
    width: 100%;
    max-height: 1.1rem;
    max-width: 1.1rem;
    object-fit: cover;
}
.my_kuang .nimetou_gaib .mingz{
	float: left;    margin-top: .1rem;
}
.my_kuang .nimetou_gaib .mingz h2 {
    font-size: .35rem;
    font-weight: normal;
    padding-bottom: .05rem;
    color: #fff;
}
.my_kuang .nimetou_gaib  .mingz span {
    /* background: rgba(0, 0, 0, .13); */
    padding: .05rem .1rem;
    border-radius: .3rem;
    /* line-height: .35rem; */
    color: #fff;
}


.yverjif { 
    box-shadow: 0 0 5px rgba(121, 121, 121, 0.05);    border-radius: .15rem;
}
.my_tik_list { 
    box-shadow: 0 0 5px rgba(121, 121, 121, 0.05);padding: .05rem 0;
}


.list_index_my{
    margin-top: .2rem;
	background:#fff;
}
.list_index_my a{
	display: block;
}
.list_index_my .my_dind{
	/* margin-bottom: 1px; */
    padding: 2%;
    background: #fff;
    border-bottom: solid 1px #f6f6f6;
}
.list_index_my .my_dind .bt {
	border-bottom: none;
	position: relative;
}
.list_index_my .my_dind .bt a{
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.list_index_my .my_dind .bt a .right{
	align-items : center;
	display: flex;
}
.list_index_my .my_dind .bt h3{
	font-weight: unset;
	align-items : center;
	display: flex;
	position: relative;

}

.list_index_my .my_dind .bt h3 img{
	width: .33rem;
	height: .33rem; 
	margin-right: .08rem;    margin-left: 2px;
	
}
.list_index_my .my_dind .bt b{
	color: #ff2e26;
}

.list_index_my .my_dind .bt .dian{
	width: 2px;
	height: 2px;
	border-radius: 50%;
	position: absolute;
	background: #ff2e26;
	top: 5px;
	right: 0px;
}
.my_dind .bt a img {
    width: .12rem; 
}
</style>
