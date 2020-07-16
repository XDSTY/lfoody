<template>
    <div class="foot_menu">
	<!-- <div class="bei"></div>  -->
	<ul>
		<li :class="selectModel == 'main' ? 'no' : ''" @click="jumpToIndex">
			<a>
				<i><img src="../assets/images/dibu.png"></i>
				<span>首 页</span>
			</a>
		</li>
		<li :class="selectModel == 'cart' ? 'no' : ''" @click="jumpToCart">
			<a>
				<i><img src="../assets/images/dibu2.png"></i>
				<span>购物车</span>
			</a>
		</li>
		<li :class="selectModel == 'me' ? 'no' : ''" @click="jumpToMe">
			<a>
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
	  jumpToIndex() {
		this.$router.push('/index')
	  },
	  jumpToCart() {
		this.$router.push('/cart')
	  },
	  jumpToMe() {
		this.$router.push('/me')
	  }
  },
  components: {
    'footer-bar': footer
  }
}
</script>