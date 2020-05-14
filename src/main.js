import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import vuetify from './plugins/vuetify' // path to vuetify export

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'fOYPAeLmUzL5WcnmTxbptW8mKKZqvdkB'
})

new Vue({
    vuetify,
    render: h => h(App),
}).$mount('#app')