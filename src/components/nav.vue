<template>
   <!--<div class="nav">
     <i class="cc_log"></i>
   </div>-->
  <div class="page-header navbar navbar-fixed-top">
    <!-- BEGIN HEADER INNER -->
    <div class="page-header-inner ">
      <!-- BEGIN LOGO -->
      <div class="page-logo">
        <a href="javascript:;">
          <img src="../common/img/web-logo-careerchina-white.svg" alt="logo" class="logo-default" /> </a>
        <div class="menu-toggler sidebar-toggler">
          <span></span>
        </div>
      </div>
      <!-- END LOGO -->
      <!-- BEGIN RESPONSIVE MENU TOGGLER -->
      <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
        <span></span>
      </a>
      <!-- END RESPONSIVE MENU TOGGLER -->
      <!-- BEGIN TOP NAVIGATION MENU -->
      <div class="top-menu">
        <ul class="nav navbar-nav pull-right">
          <li class="dropdown dropdown-user">
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <i class="icon-user"></i>
              <span class="username username-hide-on-mobile"> {{this.userName}} </span>
              <i class="fa fa-angle-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-default">
              <li>
                <a href="login.html">
                  <i class="icon-key"></i> Log Out </a>
              </li>
            </ul>
          </li>
          <!-- END USER LOGIN DROPDOWN -->
          <!-- BEGIN QUICK SIDEBAR TOGGLER -->
          <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
          <li class="dropdown dropdown-quick-sidebar-toggler">
            <a href="login.html" class="dropdown-toggle">
              <i class="icon-logout"></i>
            </a>
          </li>
          <!-- END QUICK SIDEBAR TOGGLER -->
        </ul>
      </div>
      <!-- END TOP NAVIGATION MENU -->
    </div>
    <!-- END HEADER INNER -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return{
          userName:''
      }
    },
    mounted(){
      this.userName= $.cookie('userName');
    }
  }
</script>

<style scoped>
  .page-header.navbar .page-logo .logo-default{
    margin: 12px 0 0;
    width: 125px;
    height: 25px;
  }
</style>
