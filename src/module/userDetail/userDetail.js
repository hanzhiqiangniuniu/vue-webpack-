/**
 * Created by darren on 2017/7/24.
 */
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el:'#userDetail',
  template:"<App/>",
  components:{ App }
});
