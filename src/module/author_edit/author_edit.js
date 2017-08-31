import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);


/* eslint-disable no-new */
new Vue({
  el:'#author_edit',
  template:"<App/>",
  components:{ App }
});
