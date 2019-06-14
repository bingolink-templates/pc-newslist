<template>
  <div class="news">
    <div class="header">
      <span class="title">{{i18n.News}}</span>
      <!--
      <span class="more">{{i18n.More}}</span>
      -->
    </div>
    <div class="content">
      <div class="new-item" v-for="(item, $index) in items" :key="item">
        <div class="photo-type" v-if="item.img">
          <img :src="item.img" onerror="javascript:this.src='static/pic-err.png'"/>
          <div class="right">
            <p class="item-title" @click="openUrl(item)">{{item.title}}</p>
            <span class="item-info">{{item.showInfo}}</span>
          </div>
        </div>
        <div class="text-type" v-else>
          <p class="item-title" @click="openUrl(item)">{{item.title}}</p>
          <span class="item-info">{{item.showTime}}</span>
        </div>
      </div>
      <div class="error-info" v-if="errMsg">
        <img src="static/styleImages/tea.svg" />
        <span @click="getDatas()">{{errMsg}}</span>
      </div>      
    </div>
  </div>
</template>

<script>
import apiSer from 'ser/api'

export default {
  data () {
    return {
      i18n: window.i18n,
      items: [],
      errMsg: ''
    }
  },
  components: {
  },
  created(){
    this.getDatas();
  },
  mounted(){
  },
  methods: {
    getDatas(){
      apiSer.getNews((datas) => {
        this.items = datas;
        this.errMsg = '';
      }, (errMsg) => {
        this.errMsg = errMsg;
      });
    },
    openUrl(item){
      app.linkplugin.openWindow(item.url, item.title)
    }
  }
}
</script>

<style lang="scss">
@import '~asset/common';
@import '~asset/app';
</style>
