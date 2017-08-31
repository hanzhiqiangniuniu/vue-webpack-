import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);


/* eslint-disable no-new */
new Vue({
  el:'#blog_setting_tag',
  template:"<App/>",
  components:{ App }
});
