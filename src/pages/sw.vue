<template>
  <div>
    <div class="ziye_toub">
      <div class="left" onclick="history.back();"></div>
      <p>我的订单</p>
    </div> 
    <div class="rem2"></div>
    <div style="margin-top:0.30rem;">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',
  data() {
    return {
      selected: '1'
    };
  }
};
</script>