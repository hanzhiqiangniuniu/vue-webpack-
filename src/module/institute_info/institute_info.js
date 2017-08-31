import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import Upload from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueResource);
Vue.use(Upload);

/* eslint-disable no-new */
new Vue({
  el:'#institute_info',
  template:"<App/>",
  components:{ App }
});
