<template>
  <div class="requisition_setting">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Requisition&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="requisition_setting.html" class="active">/ &nbspSetting</a>
            </li>
          </ul>
          <div class="setting_con">
            <ul class="setting_tab clear">
              <li class="setting_list setting_active">
                Promoting
              </li>
              <li class="setting_list">
                Job Boards
              </li>
            </ul>
            <div class="promoting content_box">
              <div class="edit_box clear" v-show="pro_edit_btn" @click="EDIT">
                <span class="btn blue pro_edit">Edit</span>
              </div>
              <div class="ids_box" v-show="promoting">
                <span class="ids_tag">Top Requisition ID</span>
                <ul class="ids_tab">
                  <li class="ids_list" style="margin-left: 43%">
                    <span class="ids_list_left">Top1</span>
                    <span class="ids_list_right">{{top1Id}}</span>
                  </li>
                  <li class="ids_list" style="margin-left: 43%">
                    <span class="ids_list_left">Top2</span>
                    <span class="ids_list_right">{{top2Id}}</span>
                  </li>
                  <li class="ids_list" style="margin-left: 43%">
                    <span class="ids_list_left">Top3</span>
                    <span class="ids_list_right">{{top3Id}}</span>
                  </li>
                </ul>
              </div>
              <!--edit-->
              <div class="ids_box" style="margin: 50px 0" v-show="promoting_edit">
                <span class="ids_tag">Top Requisition ID</span>
                <ul class="ids_tab" style="text-align: center">
                  <li class="ids_list">
                    <span class="ids_list_left1">Top1</span>
                    <input type="text" class="right_input form-control" v-model="editIput1">
                  </li>
                  <li class="ids_list">
                    <span class="ids_list_left1">Top2</span>
                    <input type="text" class="right_input form-control" v-model="editIput2">
                  </li>
                  <li class="ids_list">
                    <span class="ids_list_left1">Top3</span>
                    <input type="text" class="right_input form-control" v-model="editIput3">
                  </li>
                </ul>
              </div>
              <div class="buttons" v-show="btn_s">
                <button type="button" class="btn grey-salsa btn-outline width120" @click="pro_cancel">Cancel</button>
                <button type="button" class="btn blue width120" @click="pro_confirm">Confirm</button>
              </div>
            </div>
            <div class="job_board content_box">
              <span class="job_board_tag">Existing One</span>
              <ul class="job_board_tab">
                <li class="job_board_list" v-for="channelList in this.channelArr">{{channelList.channelName}}</li>
              </ul>
              <div class="add_input_box" v-show="add_input">
                <input type="text" class="form-control" v-model="add_word" placeholder="Please enter a name..." @focus="inputFocus">
                <input type="text" class="form-control" v-model="add_word1" placeholder="Please make sure the name..." style="margin-bottom: 30px" @focus="inputFocus">
                <span class="notice" v-show="notice">Please make sure the name...</span>
                <div class="right_close">
                  <i class="remove" @click="addIuput_close"></i>
                  <i class="ok" @click="add_ok"></i>
                </div>
              </div>
              <span class="addNew" @click="addNew">+ Add New</span>
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
        pro_edit_btn:true,
        promoting:true,
        promoting_edit:false,
        editIput1:'',
        editIput2:'',
        editIput3:'',
        btn_s:false,
        add_input:false,
        add_word:'',
        add_word1:'',
        hotArr:[],
        top1Id:'',
        top2Id:'',
        top3Id:'',
        channelArr:[],
        notice:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      getHotList(){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/job/advertise/list?access_token='+token).then(function (res) {
          this.hotArr=res.body.resultObj;
          for(var i=0;i<this.hotArr.length;i++){
             var hotList=this.hotArr[i];
             if(hotList.sortId===1){
               this.top1Id= hotList.requisitionId?hotList.requisitionId:"暂无";
               this.editIput1=hotList.requisitionId;
             }else if(hotList.sortId===2){
              this.top2Id= hotList.requisitionId?hotList.requisitionId:"暂无";
               this.editIput2=hotList.requisitionId;
             }else if(hotList.sortId===3){
              this.top3Id= hotList.requisitionId?hotList.requisitionId:"暂无";
               this.editIput3=hotList.requisitionId;
             }
          }
        })
      },
      getChannel(){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/job/channel/list?access_token='+token).then(function (res) {
          console.log(res)
          this.channelArr=res.body.resultObj
        })
      },
      EDIT(){
        this.pro_edit_btn=false;
        this.promoting=false;
        this.promoting_edit=true;
        this.btn_s=true
      },
      pro_cancel(){
        this.pro_edit_btn=true;
        this.promoting=true;
        this.promoting_edit=false;
        this.btn_s=false;
        this.editIput1='';
        this.editIput2='';
        this.editIput3='';
      },
      pro_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/job/advertise/update',{'access_token':token,'top1':this.editIput1,'top2':this.editIput2,'top3':this.editIput3},{emulateJSON:true}).then(function (res) {
          if(res.body.error_code===200){
            this.pro_edit_btn=true;
            this.promoting=true;
            this.promoting_edit=false;
            this.btn_s=false;
            this.getHotList();
          }
        })
      },
      addNew(){
        this.add_input=true;
        this.add_word='';
        this.add_word1='';
      },
      addIuput_close(){
        this.add_input=false;
        this.add_word='';
        this.add_word1=''
      },
      add_ok(){
        var str = '<li class="job_board_list">'+this.add_word+'</li>';
        if(this.add_word ==='' && this.add_word1===''){
          this.add_input=true;
          return
        } else if(this.add_word===this.add_word1){
          this.$http.get(interfaceStr+'cc/job/channel/create?channelName='+this.add_word).then(function (res) {
              if(res.body.error_code===200){
                this.add_input=false;
                $('.job_board_tab').append(str)
              }
          })
        }else {
          this.notice=true;
        }
      },
      inputFocus(){
        this.notice=false;
      }
    },
    mounted(){
      $('.setting_tab li').click(function () {
        $('.setting_tab li').eq($(this).index()).addClass("setting_active").siblings().removeClass('setting_active');
        $(".content_box").hide().eq($(this).index()).show();
      });
      this.getHotList();
      this.getChannel();
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
  .setting_con{
    margin-left: 100px;
    min-width: 1000px;
  }
  .setting_con .setting_tab{
    margin-top: 18px;
    width:100%;
    border-bottom: 1px solid #E6ECF2;
  }
  .setting_tab .setting_list{
    float: left;
    padding: 12px 30px;
    font-size: 14px;
    color: #8492A6;
    cursor: pointer;
  }
  .setting_tab .setting_active{
    border-bottom: 3px solid #4C9DFF;
    color: #4C9DFF;
  }
  .promoting .edit_box{
    width: 100%;
    margin: 20px 0;
  }
  .promoting .edit_box .pro_edit{
    float: right;
    width: 120px;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    border-radius: 2px !important;
  }
  .promoting .ids_box{
    background: #F9FAFC;
  }
  .promoting .ids_box .ids_tag{
    display: block;
    width: 100%;
    height: 74px;
    border-bottom: 1px solid #E6ECF2;
    text-align: center;
    line-height: 74px;
    font-size: 16px;
    color: #283644;
    font-weight: bold;
  }
  .promoting .ids_box .ids_tab{
    padding: 50px 0;
  }
  .promoting .ids_box .ids_tab .ids_list{
    margin:0 0 20px 0;
    font-size: 0;
  }
  .promoting .ids_box .ids_tab .ids_list:last-child{
    margin-bottom: 0;
  }
  .ids_tab .ids_list .ids_list_left,.ids_list_right,.ids_list_left1,.right_input{
    display: inline-block;
    font-size: 14px;
  }
  .ids_tab .ids_list .ids_list_left{
    margin-right: 30px;
    color: #979BA1;
  }
  .ids_tab .ids_list .ids_list_right{
    color: #283644;
  }
  .ids_tab .ids_list .ids_list_left1{
    margin-right: 16px;
    font-size: 14px;
  }
  .ids_tab .ids_list .right_input{
    width: 360px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
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

  .job_board{
    display: none;
    margin: 50px 0;
    background: #F9FAFC;
    padding-bottom: 50px;
  }
  .job_board .job_board_tag{
    display: block;
    height: 74px;
    border-bottom: 1px solid #E6ECF2;
    font-size: 16px;
    color: #283644;
    text-align: center;
    line-height: 74px;
    font-weight: bold;
  }
  .job_board .job_board_tab{
    width: 360px;
    margin: 50px auto;
    margin-bottom: 0;
  }
  .job_board .job_board_tab .job_board_list{
    padding-left: 16px;
    margin-bottom: 16px;
    width: 360px;
    height: 44px;
    line-height: 44px;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
    font-size: 14px;
    color: #283644;
  }
  .add_input_box{
    position: relative;
    width: 360px;
    margin: auto;
  }
  .add_input_box input{
    display: block;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
    margin-bottom: 16px;
  }
  .add_input_box .right_close{
    position: absolute;
    right: -120px;
    font-size: 0;
    bottom:0;
  }
  .notice{
    position: absolute;
    bottom:-20px;
    left:0;
    font-size: 12px;
    color: #FC3A3A;
  }
  .add_input_box .right_close .remove{
    display: inline-block;
    width: 44px;
    height: 44px;
    background: url("../../common/img/icon-no-normal.png") no-repeat center;
    background-size: cover;
    cursor: pointer;
  }
  .add_input_box .right_close .remove:hover{
    background: url("../../common/img/icon-no-press.png") no-repeat center;
    background-size: cover;
  }
  .add_input_box .right_close .ok{
    display: inline-block;
    margin-left: 16px;
    width: 44px;
    height: 44px;
    background: url("../../common/img/icon-yes-normal.png")no-repeat center;
    background-size: cover;
    cursor: pointer;
  }
  .add_input_box .right_close .ok:hover{
    background: url("../../common/img/icon-yes-press.png")no-repeat center;
    background-size: cover;
  }
  .job_board .addNew{
    display: block;
    width: 360px;
    height: 44px;
    border: 2px dashed #4C9DFF;
    border-radius: 4px;
    font-size: 14px;
    color: #4C9DFF;
    text-align: center;
    line-height: 44px;
    background: #fff;
    margin: auto;
    cursor: pointer;
  }
</style>
