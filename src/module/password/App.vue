<template>
  <div class="password">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Account&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="password.html" class="active">/ &nbspPassword</a>
            </li>
          </ul>
          <div class="pass_con">
            <span class="pass_title">Nick</span>
            <div class="pass_input_box">
              <ul class="inner_tab">
                <li class="inner_list">
                  <span class="inner_name"><b>*</b>New Password</span>
                  <input type="text" class="form-control pass_input" v-model="password" @focus="pass_focus">
                  <span class="notice" v-show="pass_notice">Required</span>
                </li>
                <li class="inner_list">
                  <span class="inner_name"><b>*</b>Confirm password</span>
                  <input type="text" class="form-control pass_input" v-model="confirm_password" @focus="confirm_focus">
                  <span class="notice" v-show="confirm_notice">Password inconsistency</span>
                </li>
              </ul>
            </div>
            <div class="buttons">
              <button type="submit" class="btn blue width120" @click="password_confirm">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../common/css/reset.min.css'
  import interfaceStr from '../../common/js/interfaceStr'
  import nav from '../../components/nav.vue'
  import leftNav from '../../components/leftNav.vue'
  export default{
    data(){
      return{
        password:'',
        confirm_password:'',
        pass_notice:false,
        confirm_notice:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      pass_focus(){
        this.pass_notice=false
      },
      confirm_focus(){
        this.confirm_notice=false
      },
      updatePassword(){
        var token=$.cookie('token'),
            userId=$.cookie('userId');
        this.$http.post(interfaceStr+'cc/bg/user/resetpassword',{'access_token':token,'userId':userId,'password':this.password},{emulateJSON:true}).then(function (res) {
          //console.log(res)
          if(res.body.error_code===200){
            location.href='login.html'
          }
        })
      },
      password_confirm(){
        if(this.password===''||this.confirm_password!=this.password){
          if(this.password===''){
            this.pass_notice=true
          }else{
            this.pass_notice=false
          }
          if(this.confirm_password!=this.password){
            this.confirm_notice=true
          }else{
            this.confirm_notice=false
          }
        }else {
          this.updatePassword()
        }
      }
    }
  }
</script>

<style>
  .page-content .tab{
    padding-bottom: 20px;
    border-bottom: 1px solid #e7ecf1!important;
    margin-bottom: 12px;
  }
  .page-content .tab .list{
    float: left;
  }
  .page-content .tab .list a{
    font-size: 14px;
    color: #283644;
    letter-spacing: 0;
    line-height: 14px;
  }
  .page-content .tab .list .active{
    color: #99A9BF;
  }
  .pass_con{
    min-width: 600px;
    padding: 38px 30px 0;
  }
  .pass_con .pass_title{
    display: block;
    margin-bottom: 30px;
    font-size: 18px;
    color: #283644;
    text-align: center;
  }
  .pass_input_box{
    padding: 50px 0;
    background: #F9FAFC;
    width: 100%;
    margin-bottom: 50px;
  }
  .pass_input_box .inner_tab{
    width: 516px;
    margin: auto;
  }
  .pass_input_box .inner_tab .inner_list{
    position: relative;
    margin-bottom: 26px;
    font-size: 0;
  }
  .pass_input_box .inner_tab .inner_list:last-child{
    margin-bottom: 0;
  }
  .pass_input_box .inner_tab .inner_list .inner_name{
    display: inline-block;
    margin-right: 16px;
    width: 140px;
    font-size: 14px;
    color: #979BA1;
    text-align: -webkit-right;
  }
  .pass_input_box .inner_tab .inner_list .inner_name b{
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    color: #FC3A3A;
    vertical-align: sub;
  }
  .pass_input_box .inner_tab .inner_list .pass_input{
    display: inline-block;
    width: 360px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }
  .notice{
    position: absolute;
    bottom: -20px;
    left: 158px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .buttons{
    text-align: center;
  }
  .buttons button{
    display: inline-block;
    border-radius: 2px !important;
  }
  .width120{
    width: 120px;
  }
</style>
