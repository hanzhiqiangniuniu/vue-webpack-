<template>
  <div class="userDetail">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Admin&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="backend.html" class="active">/ &nbspBackend Users</a>
            </li>
          </ul>
          <div class="viewList">
            <ul class="option_tab clear">
              <li class="option_list active">Information</li>
              <li class="option_list">Authority</li>
            </ul>
            <div class="infor tab-content">
              <div class="switch" id="mySwitch">
                <input type="checkbox" class="make-switch" checked data-on-color="success" data-off-color="warning" value=""/>
              </div>
              <div class="flex-box">
                <div class="content clear">
                  <ul class="leftTab">
                    <li class="leftList clear">
                      <span>User Name</span>
                    </li>
                    <li class="leftList clear">
                      <span>Created Time</span>
                    </li>
                    <li class="leftList clear">
                      <span>Update Time</span>
                    </li>
                  </ul>
                  <ol class="rightTab">
                    <li class="rightList">
                      {{information.userName}}
                    </li>
                    <li class="rightList">
                      {{information.createTimeStr}}
                    </li>
                    <li class="rightList">
                      {{information.updateTimeStr}}
                    </li>
                  </ol>
                </div>
              </div>
              <button class="btn blue width180px" @click="passwordBtn">
                <i class="fa fa-unlock-alt"></i>
                Password
              </button>
            </div>

            <div class="author tab-content">
              <!--禁止状态-->
              <span class="edit" v-show="ban_btn" @click="edit_btn">Edit</span>
              <div class="check">
                <div class="media-box" v-for="authority in allmenuarr">
                  <span class="media-name">{{authority.menuName}}</span>
                  <ul class="author-tab clear">
                    <li class="author-list" v-for="authorityList in authority.subMenus">
                      <input type="checkbox" name="media_check" :disabled="status" v-model="mediaAry" :value="authorityList.id" @click="Choice(authorityList.id)">
                      <span class="tag">{{authorityList.menuName}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!--edit状态-->
              <div class="buttons" v-show="buttons" style="margin-top: 50px">
                <button type="button" class="btn grey-salsa btn-outline width120" @click="edit_cancel">Cancel</button>
                <button type="submit" class="btn blue width120" @click="edit_confirm">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="maskshow" @click="addHide"></div>
    <div class="prompt-box" v-show="prompt">
      <span class="head-name">
        Reset Password
        <i class="close" @click="cancel"></i>
      </span>
      <p class="prompt-word">Are you sure you want to reset the password?</p>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="confirm">Confirm</button>
      </div>
    </div>
    <div class="prompt-box" v-show="success">
      <span class="head-name">
        Reset Password
        <i class="close" @click="cancel"></i>
      </span>
      <p class="prompt-word">
        <i class="glyphicon glyphicon-ok"></i>
        Password reset successfully！Initial password is 123456.
      </p>
      <div class="buttons">
        <button type="submit" class="btn blue width120" @click="suConfirm">Confirm</button>
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
        ban_btn:true,
        buttons:false,
        status:true,
        prompt:false,
        success:false,
        maskshow:false,
        mediaAry:[],
        /*switch_status:'no'*/
        allmenuarr:[],
        information:''
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      edit_btn(){
          this.ban_btn=false;
          this.buttons=true;
          this.status=false
      },
      edit_cancel(){
        window.location.reload();
        document.body.scrollTop=0;
        this.ban_btn=true;
        this.buttons=false;
        this.status=true;
        //$('.author').css('display','block')
      },
      Choice(id){
          console.log(id)
        //this.mediaAry.push(id)

      },
      edit_confirm(){
        var userId = $.cookie('userId'),
            token = $.cookie('token');
        document.body.scrollTop=0;
        this.ban_btn=true;
        this.buttons=false;
        this.status=true
        console.log(this.mediaAry)
        this.$http.post(interfaceStr+'cc/bg/user/resetmenus',{'access_token':token,'userId':userId,'menuIds':this.mediaAry.join(",")},{emulateJSON:true}).then(function (res) {
          console.log(res)
        })
      },
      cancel(){
        this.prompt=false;
        this.maskshow=false;
        this.success=false
      },
      confirm(){
        var userId = $.cookie('userId'),
          token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/bg/user/resetpassword',{'access_token':token,'userId':userId},{emulateJSON:true}).then(function (res) {
          if(res.body.error_code===200){
            this.prompt=false;
            this.success=true;
          }
        })
      },
      passwordBtn(){
        this.prompt=true;
        this.maskshow=true;

      },
      suConfirm(){
        this.maskshow=false;
        this.success=false
      },
      addHide(){
        this.prompt=false;
        this.success=false;
        this.maskshow=false;
      },
      btn_switch(){


      },
    },
    mounted(){
      String.prototype.queryURLParameter=function () {
        var obj={},
          reg=/([^?=&#]+)=([^?=&#]+)/g;
        this.replace(reg,function () {
          var key=arguments[1],
            value=arguments[2];
          obj[key]=value;
        });
        return obj;
      };
      var userId=window.location.href.queryURLParameter()["id"];
      var token = $.cookie('token'),
          _this=this;
      $('.option_tab li').click(function () {
        $('.option_tab li').eq($(this).index()).addClass("active").siblings().removeClass('active');
        $(".tab-content").hide().eq($(this).index()).show();
      });
      this.$http.get(interfaceStr+'cc/bg/menu/all?access_token='+token).then(function (allres) {
        this.allmenuarr=allres.body.resultObj;
        this.$http.get(interfaceStr+'cc/bg/user/info?access_token='+token+'&userId='+userId).then(function (res) {
          this.information = res.body.resultObj;
          var menus=res.body.resultObj.menus,
              status=res.body.resultObj.status;
          for(var i=0;i<menus.length;i++){
              var subMenus=menus[i].subMenus;
            for(var j=0;j<subMenus.length;j++){
              this.mediaAry.push(subMenus[j].id)
            }
          }
          if(status===1){
            $('#mySwitch input').bootstrapSwitch('state',true)
          }else {
            $('#mySwitch input').bootstrapSwitch('state',false)
          }
        })
      });
      //$('#mySwitch input').bootstrapSwitch('state',true)
      $('#mySwitch input').on('switchChange.bootstrapSwitch',function(event,state){
        if(state===true){
          state=1
        }else if(state===false){
          state=0
        }
        _this.$http.post(interfaceStr+'cc/bg/user/changestatus',{'userId':userId,'status':state,'access_token':token},{emulateJSON:true}).then(function (res) {
          //console.log(res)
        })
      });
      /*$('.bootstrap-switch').click(function () {
          console.log(11111)
        var userId = $.cookie('userId'),
          token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/bg/user/changestatus',{'userId':userId,'status':1,'access_token':token},{emulateJSON:true}).then(function (res) {
          console.log(res)
        })
      })*/
    }
  }
</script>

<style scoped>
  .page-container{
    padding-top: 50px !important;
    margin-top: 0 !important;
  }
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
  .viewList{
    margin-left: 100px;
    max-width: 1000px;
  }
  .viewList .option_tab{
    border-bottom: 1px solid #E6ECF2;
  }
  .viewList .option_tab .option_list{
    float: left;
    font-size: 14px;
    color: #8492A6;
    padding: 15px 15px 12px 15px;
    cursor: pointer;
  }
  .viewList .option_tab .active{
    color: #4C9DFF;
    border-bottom: 3px solid #4C9DFF;
  }

  .infor{
    max-width: 1000px;
    position: relative;
    padding-top: 74px;
  }
  .switch{
    width: 106px;
    position: absolute;
    right: 0;
    top: 20px;
  }
  .flex-box{
    display: flex;
    background: #F9FAFC;
  }
  .infor .content{
    justify-content: center;
    margin: 50px auto;
  }
  .infor .content .leftTab{
    float: left;
    margin-right: 30px;
  }
  .infor .content .leftTab .leftList{
    margin-bottom: 16px;
  }
  .infor .content .leftTab .leftList span{
    float: right;
    font-size: 14px;
    color: #979BA1;
  }
  .infor .content .rightTab{
    float: left;
  }
  .infor .content .rightTab .rightList{
    margin-bottom: 16px;
    font-size: 14px;
    color: #283644;
  }

  .author{
    display: none;
    position: relative;
  }
  .author .edit {
    position: absolute;
    right: 0;
    top: -54px;
    width: 120px;
    height: 34px;
    background: #3598dc;
    border-radius: 2px;
    text-align: center;
    line-height: 34px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  .author .edit:hover{
    background:#217ebd ;
  }
  .check{
    margin-top: 74px;
    padding: 50px;
    background: #F9FAFC;
  }
  .media-box{
    margin-bottom: 10px;
  }
  .media-box .media-name,.blog-box .blog-name{
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
    color: #283644;
    font-weight: bold;
  }
  .author-tab{
    width: 530px;
  }
  .author-tab .author-list{
    width: 154px;
    float: left;
    margin: 0 125px 20px 0;
    font-size: 0;
  }
  .author-tab .author-list:nth-child(2){
    margin: 0 0 20px 0;
  }
  .author-tab .author-list:nth-child(4){
    margin: 0 0 20px 0;
  }
  .author-tab .author-list:nth-child(6){
    margin: 0 0 20px 0;
  }
  .author-tab .author-list:nth-child(8){
    margin: 0 0 20px 0;
  }
  .author-tab .author-list input{
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    height: 16px;
  }
  .author-tab .cur input{
    cursor: pointer;
  }
  .author-tab .author-list .tag{
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #979BA1;
    vertical-align: middle;
  }
  .buttons{
    text-align: center;
  }
  .buttons button{
    display: inline-block;
    margin-right: 16px;
    border-radius: 2px !important;
  }
  .buttons button:last-child{
    margin-right: 0;
  }
  .width120{
    width: 120px;
  }
  .width180px{
    width: 180px;
    display: block;
    border-radius: 2px;
    margin: 50px auto;
  }
  .mask{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 99;
    overflow: hidden;
  }
  .prompt-box{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -270px;
    width: 540px;
    height: 340px;
    background: #FFFFFF;
    border-radius: 4px;
    z-index: 100;
  }
  .prompt-box .head-name{
    display: block;
    width: 100%;
    height: 60px;
    position: relative;
    background: #F9FAFC;
    text-align: center;
  }
  .prompt-box .head-name{
    line-height: 60px;
    font-size: 16px;
    color: #283644;
  }
  .prompt-box .head-name .close{
    position: absolute;
    right: 20px;
    top: 27px;
  }
  .prompt-box .prompt-word{
    margin: 92px auto;
    font-size: 16px;
    color: #283644;
    text-align: center;
  }
</style>
