<template>
  <div id="app">
    <baidu-map class="map" center="北京">
      <bm-navigation
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :showZoomInfo="false"
      ></bm-navigation>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
    </baidu-map>

    <div id="searchCard">
      <label>关键词：<input v-model="keyword"/></label>
      <label>地区：<input v-model="location"/></label>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      location: "北京",
      keyword: "百度"
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
}

#searchCard {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.map {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
