<template>
  <div class="page-sidebar-wrapper">
    <div class="page-sidebar navbar-collapse collapse">
      <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true"
          data-slide-speed="200" style="padding-top: 20px">
        <!--<li class="sidebar-toggler-wrapper hide">
          <div class="sidebar-toggler">
            <span></span>
          </div>
        </li>
        <li class="sidebar-search-wrapper">
          <form class="sidebar-search  " action="page_general_search_3.html" method="POST">
            <a href="javascript:;" class="remove">
              <i class="icon-close"></i>
            </a>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <a href="javascript:;" class="btn submit">
                    <i class="icon-magnifier"></i>
                </a>
              </span>
            </div>
          </form>
        </li>-->
        <li class="nav-item start" v-for="menu in menus">
          <a href="javascript:;" class="nav-link nav-toggle">
            <span class="title">{{menu.menuName}}</span>
            <span class="arrow"></span>
          </a>
          <ul class="sub-menu">
            <li class="nav-item start" v-for="secondList in menu.subMenus">
              <a href="candidate_talentPool.html" class="nav-link ">
                <!--<i class="icon-bar-chart"></i>-->
                <span class="title">{{secondList.menuName}}</span>
              </a>
            </li>
            <!--<li class="nav-item start ">
              <a href="Candidate.html" class="nav-link ">
                <i class="icon-bulb"></i>
                <span class="title">Candidate Users</span>
                <span class="badge badge-success">1</span>
              </a>
            </li>
            <li class="nav-item start ">
              <a href="Business.html" class="nav-link ">
                <i class="icon-graph"></i>
                <span class="title">Business Users</span>
                <span class="badge badge-danger">5</span>
              </a>
            </li>-->
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import interfaceStr from '../common/js/interfaceStr'
  //var getToken = $.cookie('token');
  export default{
    data(){
      return{
        menus:[]
      }
    },
    created(){
     this.$http.get(interfaceStr+'cc/bg/user/menus?access_token='+ $.cookie('token'),).then(function (res) {
       this.menus=res.body.resultObj;
     })
    }
  }
</script>

<style scoped>

</style>
