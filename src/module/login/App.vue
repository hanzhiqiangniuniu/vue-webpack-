<template>
  <div class="login">
    <i class="career_icon"></i>
    <form action="javascript:;">
      <div class="user">
        <label>User</label>
        <input type="text" class="form-control" placeholder="User" v-model="user" autofocus>
      </div>
      <div class="pass">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password">
      </div>
      <button class="btn blue width180" @click="login" @keyup.13="loginUp($event)">Login</button>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../common/css/reset.min.css'
  import interfaceStr from '../../common/js/interfaceStr'
  export default{
    data(){
      return{
        user:'',
        password:''
      }
    },
    methods:{
      login(){
        var data = {'userName':this.user,'password':this.password,'access_token':$.cookie('token')};
        this.$http.post(interfaceStr+'cc/bg/user/login',data,{emulateJSON:true}).then(function (res) {
          var status=res.body.error_code;
          if(status===200){
            var userId=res.body.resultObj.id,
                userName=res.body.resultObj.userName
            $.cookie('userId',userId);
            $.cookie('userName',userName);
            location.href='backend.html'
          }else if(status===101){
              alert('用户名不能为空～')
          }else if(status===102){
            alert('密码不能为空～')
          }else if(status===103){
            alert('用户不存在～')
          }else if(status===104){
            alert('密码错误～')
          }
        });
      },
      loginUp(event){
        if(event.keyCode===13){
            this.login()
        }
      }
    },
    mounted(){
      this.$http.get(interfaceStr+'cc/bg/user/accesstoken').then(function (res) {
        var token=res.body.resultObj.access_token;
        $.cookie('token',token)
      })
    }
  }
</script>

<style scoped>
  .login{
    width: 480px;
    margin: 150px auto;
  }
  .career_icon{
    margin: auto;
    display: block;
    width: 123px;
    height: 25px;
    background: url("../../common/img/web-logo-careerchina-color.svg")no-repeat center;
    background-size: cover;
  }
  form label{
    display: inline-block;
    margin-right: 20px;
    width: 80px;
    font-size: 14px;
    color: #283644;
    text-align: -webkit-right;
  }
  form input{
    display: inline-block;
    width: 360px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: #283644;
  }
  form .user{
    margin: 20px 0;
  }
  .width180{
    display: block;
    width: 180px;
    height: 40px;
    margin: 20px auto;
    border: none;
    border-radius: 2px !important;
    line-height: 30px !important;
  }

</style>
