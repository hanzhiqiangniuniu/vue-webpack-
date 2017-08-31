import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import { Pagination, Rate ,Progress} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueResource);
Vue.use(Pagination);
Vue.use(Rate);
Vue.use(Progress);


/* eslint-disable no-new */
new Vue({
  el:'#personnel_detail',
  template:"<App/>",
  components:{ App }
});
