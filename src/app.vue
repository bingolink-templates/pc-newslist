<template>
  <div class="news">
    <div class="header">
      <span class="title">新闻</span>
      <span class="more">更多</span>
    </div>
    <div class="content">
      <div class="new-item" v-for="(item, $index) in items" :key="item">
        <div class="photo-type" v-if="item.img">
          <img :src="item.img"/>
          <div class="right">
            <p class="item-title" @click="openUrl(item.url)">{{item.title}}</p>
            <span class="item-info">{{item.showInfo}}</span>
          </div>
        </div>
        <div class="text-type" v-else>
          <p class="item-title" @click="openUrl(item.url)">{{item.title}}</p>
          <span class="item-info">{{item.showTime}}</span>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import dateUtil from 'util/date'

export default {
  data () {
    return {
      items: [{
        img: 'static/testImage/1.jpg',
        title: '公有云厂商VS私有云厂商谁更强？',
        url: 'https://www.baidu.com',
        publishTime: 1553043600000,
        source: '播云客'
      }, {
        title: '个性需求接受or拒绝，揭秘产品组和项目组的三两事',
        url: 'https://www.baidu.com',
        publishTime: 1550797200000
      }, {
        title: '品高云入围Forrester报告，妥妥的',
        url: 'https://www.baidu.com',
        publishTime: 1550797200000
      }, {
        title: '公安行业部的行业云探索与实践',
        url: 'https://www.baidu.com',
        publishTime: 1550797200000
      }]
    }
  },
  components: {
  },
  created(){
    for(var i = 0; i < this.items.length; i++){
      this.items[i].showTime = dateUtil.simpleFormat(this.items[i].publishTime, 'MM-dd');
      this.items[i].showInfo = (this.items[i].source ? this.items[i].source + ' ' : '') + this.items[i].showTime;
    }
  },
  mounted(){
  },
  methods: {
    openUrl(url){
      window.open(url);
    }
  }
}
</script>

<style lang="scss">
@import '~asset/common';
@import '~asset/app';
</style>
