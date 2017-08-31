<template>
  <div class="author_edit">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;" style="cursor:default;">Blog Management&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="blog_tag_list.html">/ &nbspSetting&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="author_edit.html" class="active">/ &nbspAdd Author&nbsp&nbsp</a>
            </li>
          </ul>
          <ul class="edit_con_tab">
            <li class="edit_list">
              <span class="list_name">
                <!--<b>*</b>-->
                Avatar
              </span>
              <span class="upload_btn" v-if="upload_btn">
                      + Upload
                      <input type="file" class="upload_file" ref="photo_file" id="upload_photo" @change="upload_photo">
              </span>
              <div class="photo_con" v-if="photo_con">
                <img :src="this.imgUrl" alt="" class="per_pic">
                <span class="rep_btn">
                   <i class="fa fa-circle-o-notch"></i>
                        Replace
                  <input type="file" class="upload_file" ref="rep_photo_file"  @change="rep_photo">
                </span>
              </div>
            </li>
            <li class="edit_list">
              <span class="list_name">
                <b>*</b>
                Real Name
              </span>
              <input type="text" class="form-control width360" value="" v-model="realName" @focus="inputFocus1">
              <span class="notice" v-show="realNotice">Required</span>
            </li>
            <li class="edit_list">
              <span class="list_name">
                <b>*</b>
                Display Name
              </span>
              <input type="text" class="form-control width360" value="" v-model="displayName" @focus="inputFocus2">
              <span class="notice" v-show="disNotice">Required</span>
            </li>
            <li class="edit_list">
              <span class="list_name">
                <b>*</b>
                Author Status
              </span>
              <div class="switch" id="mySwitch" data-on-label="Active" data-off-label="Inactive">
                <input type="checkbox" class="make-switch" checked data-on-color="success" data-off-color="warning" value=""/>
              </div>
            </li>
            <li class="edit_list">
              <span class="list_name" style="vertical-align: top;margin-top: 5px">
                <b>*</b>
                Self Introduction
              </span>
              <textarea name="" cols="30" rows="10" class="form-control" v-model="introduction" @focus="inputFocus3"></textarea>
              <span class="notice" v-show="intrNotice">Required</span>
            </li>
            <li class="line"></li>
            <li class="edit_list">
              <span class="list_name">Facebook</span>
              <input type="text" class="form-control width360" value="" v-model="face">
            </li>
            <li class="edit_list">
              <span class="list_name">Twitter</span>
              <input type="text" class="form-control width360" value="" v-model="twitter">
            </li>
            <li class="edit_list">
              <span class="list_name">Instagram</span>
              <input type="text" class="form-control width360" value="" v-model="instagram">
            </li>
            <li class="edit_list">
              <span class="list_name">Linkedln</span>
              <input type="text" class="form-control width360" value="" v-model="linked">
            </li>
            <li class="edit_list">
              <span class="list_name">Youtube</span>
              <input type="text" class="form-control width360" value="" v-model="youtube">
            </li>
            <li class="edit_list">
              <span class="list_name">Pinterest</span>
              <input type="text" class="form-control width360" value="" v-model="pinter">
            </li>
          </ul>
          <div class="buttons">
            <button type="button" class="btn grey-salsa btn-outline width120" @click="edit_author_cancel">Cancel
                  </button>
            <button type="button" class="btn blue width120" @click="edit_author_confirm">Confirm</button>
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
        upload_btn:true,
        photo_con:false,
        imgUrl:'',
        authorObj:{},
        realName:'',
        displayName:'',
        status:0,
        introduction:'',
        face:'',
        twitter:'',
        instagram:'',
        linked:'',
        youtube:'',
        pinter:'',
        authorId:'',
        formData:'',
        flag:false,
        realNotice:false,
        disNotice:false,
        intrNotice:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav': leftNav,
    },
    methods:{
      getAuthorDetail(id){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/setting/author/one?access_token='+token+'&authorId='+id).then(function (res) {
          console.log(res)
          this.authorObj=res.body.resultObj;
          this.authorId=res.body.resultObj.id;
          this.imgUrl=res.body.resultObj.headImg;
          if(this.imgUrl===''){
            this.upload_btn=true;
            this.photo_con=false;
          }else {
            this.upload_btn=false;
            this.photo_con=true;
          }
          this.status=res.body.resultObj.status;
          if(this.status === 0){
            $('#mySwitch input').bootstrapSwitch('state',true)
          }else{
            $('#mySwitch input').bootstrapSwitch('state',false)
          }
          this.realName=res.body.resultObj.realName;
          this.displayName=res.body.resultObj.displayName;
          this.introduction=res.body.resultObj.introduction;
          this.face=res.body.resultObj.facebook;
          this.twitter=res.body.resultObj.twitter;
          this.instagram=res.body.resultObj.instagram;
          this.linked=res.body.resultObj.linkedin;
          this.youtube=res.body.resultObj.youtube;
          this.pinter=res.body.resultObj.pinterest;
        })
      },
      getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) { // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      },
      guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      },
      if_type(file,max){
        if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name)){
          alert('请上传JPG、PNG、GIF格式的图片～');
          return false
        }else if(file.size > max*1024){
          alert('上传图片不得大鱼300KB～');
          return false
        }else {
          this.imgUrl = this.getObjectURL(file);
          this.formData = file;
          this.flag=true;
          this.upload_btn=false;
          this.photo_con=true;
        }
      },
      upload_photo(){
        var fileList = $('#upload_photo')[0].files[0];
        var maxSize = 300;
        this.if_type(fileList,maxSize)
      },
      rep_photo(){
        var file=this.$refs.rep_photo_file.files[0],
            maxsize=300;
        this.if_type(file,maxsize)
      },
      inputFocus1(){
        this.realNotice=false
      },
      inputFocus2(){
        this.disNotice=false
      },
      inputFocus3(){
        this.intrNotice=false
      },
      edit_author_confirm(){
        var token = $.cookie('token');
        if(this.realName===''||this.displayName===''||this.introduction===''){
          if(this.realName===''){
            this.realNotice=true
          }else {
            this.realNotice=false
          }
          if(this.displayName===''){
            this.disNotice=true
          }else {
            this.disNotice=false
          }
          if(this.introduction===''){
            this.intrNotice=true
          }else {
            this.intrNotice=false
          }
          return
        }else if(this.flag===true){
          var formData = new FormData();
          formData.append('imgMediaFile',this.formData);
          formData.append('groupId',0);
          formData.append('progressId',this.guid());
          formData.append('access_token',token);
          this.$http.post(interfaceStr+'cc/blog/uploadImg',formData,{headers: {'Content-Type': 'multipart/form-data'}}).then(function (res) {
            if(res.body.error_code===200){
              var mediaUrl=res.body.resultObj.url;
              this.$http.post(interfaceStr+'cc/blog/setting/author/edit',{'access_token':token,'authorId':this.authorId,'headImg':mediaUrl,'displayName':this.displayName,'realName':this.realName,'status':this.status,'introduction':this.introduction,'facebook':this.face,'twitter':this.twitter,'instagram':this.instagram,'linkedin':this.linked,'youtube':this.youtube,'pinterest':this.pinter},{emulateJSON:true},{headers: {'Content-Type': 'application/json;charset=UTF-8'}}).then(function (res) {
                console.log(res)
                if(res.body.error_code===200){
                  alert('编辑成功');
                  location.href='blog_author_list.html'
                }
              })
            }
          })
        }else {
          this.$http.post(interfaceStr+'cc/blog/setting/author/edit',{'access_token':token,'authorId':this.authorId,'headImg':this.imgUrl,'displayName':this.displayName,'realName':this.realName,'status':this.status,'introduction':this.introduction,'facebook':this.face,'twitter':this.twitter,'instagram':this.instagram,'linkedin':this.linked,'youtube':this.youtube,'pinterest':this.pinter},{emulateJSON:true},{headers: {'Content-Type': 'application/json;charset=UTF-8'}}).then(function (res) {
            //console.log(res)
            if(res.body.error_code===200){
              alert('编辑成功');
              location.href='blog_author_list.html'
            }
          })
        }

      },
      edit_author_cancel(){
        location.href='blog_author_list.html'
      }
    },
    mounted(){
      var _this=this;
      $('#mySwitch input').bootstrapSwitch({
        onText:"Active",
        offText:"Inactive",
      });
      $('#mySwitch input').on('switchChange.bootstrapSwitch',function(event,state) {
        if (state === true) {
          _this.status = 0
        } else if (state === false) {
          _this.status = 1
        }
      });
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
      var authorId=window.location.href.queryURLParameter()["id"];
      if(authorId===undefined){
        this.authorId=''
      }else {
        this.getAuthorDetail(authorId)
      }

    }
  }
</script>

<style>
  .page-content{
    min-width: 1080px !important;
    padding: 25px 20px 100px !important;
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
  thead{
    background: #F9FAFC;
  }
  thead tr th{
    vertical-align: top;
  }
  tbody tr{
    background: #fff !important;
  }
  .edit_con_tab{
    margin: 50px 30px;
    padding: 50px;
    background: #F9FAFC;
  }
  .edit_con_tab .line{
    width: 100%;
    height: 1px;
    background: #E6ECF2;
    margin-bottom: 26px;
  }
  .edit_con_tab .edit_list{
    position: relative;
    margin-bottom: 26px;
    font-size: 0;
  }
  .edit_con_tab .edit_list:last-child{
    margin-bottom: 0;
  }
  .edit_con_tab .edit_list .list_name{
    display: inline-block;
    margin-right: 16px;
    width: 260px;
    text-align: -webkit-right;
    font-size: 14px;
    color: #979BA1;
    vertical-align: middle;
  }
  .edit_con_tab .edit_list .list_name b{
    margin-right: 10px;
    color: #FC3A3A;
    vertical-align: middle;
  }
  .switch{
    display: inline-block;
  }
  .edit_con_tab .edit_list .width360,.edit_con_tab .edit_list textarea{
    display: inline-block;
    width: 360px;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }
  .edit_con_tab .edit_list .width360{
    height: 40px;
  }
  .edit_con_tab .edit_list textarea{
    height: 80px;
  }
  .upload_btn{
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    background: #FFFFFF;
    border: 1px dashed #4C9DFF;
    border-radius: 50% !important;
    font-size: 14px;
    color: #4C9DFF;
    text-align: center;
    line-height: 100px;
  }
  .photo_con{
    display: inline-block;
  }
  .upload_file{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    filter:alpha(opacity=0);
    cursor: pointer;
  }
  .notice{
    position: absolute;
    left: 278px;
    bottom: -20px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .add_list .photo_con{
    font-size: 0;
  }
  .photo_con .per_pic{
    width: 75px;
    height: 75px;
    border-radius: 50% !important;
    display: inline-block;
  }
  .photo_con .rep_btn{
    display: inline-block;
    margin-left: 20px;
    width: 120px;
    height: 44px;
    background: #FFFFFF;
    border: 1px dashed #4C9DFF;
    border-radius: 4px;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
    color: #4C9DFF;
    vertical-align: middle;
    cursor: pointer;
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
</style>
