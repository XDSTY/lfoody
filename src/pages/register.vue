<template>
  <div>
      <div style="height: .75rem;"></div>
        <!-- 头部 -->
        <div class="ziye_toub">
            <div class="left" onclick="history.back();"></div>
            <p>快速注册</p>
        </div>
        <div class="logo_we">
            <!-- <img class="logo" src="images/logo.png" alt=""> -->
            <div class="biaod">
                <mt-popup v-model="cityPopup" position="bottom" class="mint-popup-4">
                    <mt-picker value-key="cityName" :slots="cityDateSlots" @change="onCityChange" :visible-item-count="5" :show-toolbar="false"></mt-picker>
                </mt-popup>
                <mt-popup v-model="companyPoppup" position="bottom" class="mint-popup-4">
                    <mt-picker value-key="companyName" :slots="companyDataSlots" @change="onCompanyChange" :visible-item-count="5" :show-toolbar="false"></mt-picker>
                </mt-popup>
                <input type="text" placeholder="请选择城市" v-model="cityName" @click="citySelect">
                <input type="text" placeholder="请选择公司" v-model="companyName" @click="companySelect">
                <input type="text" placeholder="配送地址" disabled v-model="deliveryAddress">
                <input type="text" placeholder="配送时间" disabled v-model="deliveryTime">
                <input type="text" placeholder="请输入手机号码" v-model="user.linkPhone">
                <input type="text" placeholder="请输入登录密码" v-model="user.password">
                <input type="text" placeholder="请确认登录密码"> 

                <input type="button" class="anniu_w" value="注册"> 
            </div>
        </div> 
  </div>
</template>

<script>
import {common, user} from '../service/service'
export default {
  data: function () {
      return {
        cityName: '',
        companyName: '',
        deliveryAddress: '',
        deliveryTime: '',
        companyList: [],
        user: {
            cityId:'',
            companyId: '',
            username: '',
            linkPhone: '',
            password: ''
        },
        cityPopup: false,
        companyPoppup: false,
        cityDateSlots: [
          {
            values: [{"cityName": '请选择', "cityId": -1}]
          }
        ],
        companyDataSlots: [
            {
                values: [{companyName: '请选择', companyId: -1}]
            }
        ]
      }
  },
  methods: {
      onCityChange(picker, values) {
        this.user.cityId = values[0].cityId
        this.cityName = values[0].cityName
        if(values[0].cityId != -1) {
          this.getCompanyList()
        }
      },
      onCompanyChange(picker, values) {
        this.companyName = values[0].companyName
        this.user.companyId = values[0].companyId
        this.companyList.forEach(company => {
          if(company.id == values[0].companyId) {
            this.deliveryAddress = company.address
            this.deliveryTime = company.deliveryTime
          }
        })
      },
      citySelect(){
          this.cityPopup = true
      },
      companySelect() {
        if(this.user.cityId === -1) {
          this.$toast('请先选择城市')
          return
        }
        this.companyPoppup = true
      },
      getCompanyList() {
        common.companyList({cityId: this.user.cityId})
          .then((data) => {
            data.forEach(company => {
              this.companyDataSlots[0].values.push({companyName: company.shortName, companyId: company.id})
            });
            this.companyList = data
          })
      }
    },
    mounted() {
      common.cityList('')
        .then((data) => {
           this.cityDateSlots[0].values = this.cityDateSlots[0].values.concat(data)
        })
    }
}
</script>

<style scoped>
.mint-popup-4 {
    width: 100%;
    .picker-slot-wrapper, .picker-item {
        backface-visibility: hidden;
    }
}
</style>
