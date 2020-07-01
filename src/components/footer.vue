<template>
    <div class="foot_menu">
	<!-- <div class="bei"></div>  -->
	<ul>
		<li :class="selectModel == 'main' ? 'no' : ''" @click="select('main')">
			<a href="#">
				<i><img src="../assets/images/dibu.png"></i>
				<span>首 页</span>
			</a>
		</li>
		<li :class="selectModel == 'cart' ? 'no' : ''" @click="select('cart')">
			<a href="#">
				<i><img src="../assets/images/dibu2.png"></i>
				<span>购物车</span>
			</a>
		</li>
		<li :class="selectModel == 'me' ? 'no' : ''" @click="select('me')">
			<a href="#">
				<i><img src="../assets/images/dibu3.png"></i>
				<span>我 的</span>
			</a>
		</li> 
	</ul> 
    </div>

</template>

<script>
import footer from '@/components/footer'
export default {
  data: function () {
      return {
        selectModel: 'main'
      }
  },
  methods : {
	  select (id) {
		  if(this.selectModel != 'main' && id == 'main') {
			  this.selectModel = 'main'
			  this.$router.push('/index')
		  } else if(this.selectModel != 'cart' && id == 'cart') {
			  this.selectModel = 'cart'
			  this.$router.push('/cart')
		  } else if(this.selectModel != 'me' && id == 'me') {
			  this.selectModel = 'me'
			  this.$router.push('/me')
		  }
	  }
  },
  components: {
    'footer-bar': footer
  }
}
</script>