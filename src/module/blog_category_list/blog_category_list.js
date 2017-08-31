import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import Pagination from 'element-ui';

Vue.use(VueResource);
Vue.use(Pagination);


/* eslint-disable no-new */
new Vue({
  el:'#blog_cate',
  template:"<App/>",
  components:{ App }
});
