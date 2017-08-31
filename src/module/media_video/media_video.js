import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import { Pagination, Progress} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueResource);
Vue.use(Pagination);
//Vue.use(Upload);
Vue.use(Progress);


/* eslint-disable no-new */
new Vue({
  el:'#media_video',
  template:"<App/>",
  components:{ App }
});
