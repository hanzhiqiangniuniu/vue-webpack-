/**
 * Created by Darren on 2017/3/9.
 */
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import Pagination from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueResource);
Vue.use(Pagination);


/* eslint-disable no-new */
new Vue({
  el:'#app',
  template:"<App/>",
  components:{ App }
});










