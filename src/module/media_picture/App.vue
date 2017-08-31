<template>
  <div class="media_picture">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Media Management&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="candidate_list.html" class="active">/ &nbspPicture Management</a>
            </li>
          </ul>
          <div class="pic_logic">
            <!--<form id="mydropzone" action="##" class="dropzone"></form>-->
            <div class="top_logic clear">
              <div class="category_select">
                <span class="category_name">Category</span>
                <select name="" id="" class="form-control cate-sele" v-model="cateSele_val" @change="cate_change">
                  <option :value="cateList.id"  v-for="cateList in this.categoryArr">{{cateList.groupName}}</option>
                </select>
                <button type="button" class="btn blue width120 add_cate_btn" @click="add_Category">Add Category</button>
              </div>
              <button class="btn blue width180 add_pic_btn" >
                  <input type="file" class="file" id="inputFile">
                + Add Picture</button>
            </div>
            <div class="pic_box">
              <div class="move_dele">
                <!--<input type="radio" name="select_all" class="select_all_btn" v-model="all_sele" @click="all_checked_radio">-->
                <input type="checkbox" name="sele_all" value="0" @click="all_checked" v-model="sele_all" class="all_check">
                <span class="radio_tab">Select All</span>
                <button type="button" class="btn blue" @click="move_btn">Move</button>
                <button type="button" class="btn red" @click="delete_btn">Delete</button>
              </div>
              <div class="pic_content">
                <span class="content_tag">+ Drag picture here to upload</span>
                <!--<el-upload
                  class="upload-demo"
                  drag
                  list-type="picture"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>-->
                <ul class="pic_tab clear" id="pic_tab">
                </ul>
                <div class="drag_box" id="drag_box">
                </div>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="page"
                  :page-sizes="[8, 12, 16, 20]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="mask" @click="click_mask"></div>
    <div class="popup" v-show="dele_box">
      <span class="popup_top_tag">
        Delete
        <i class="icon-close" @click="dele_cancel"></i>
      </span>
      <div class="dele_con">
        <p class="dele_con_tag">
          Are you sure you want to delete the picture？
        </p>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="dele_cancel">Cancel</button>
          <button type="submit" class="btn blue width120" @click="dele_confirm">Confirm</button>
        </div>
      </div>
    </div>
    <div class="popup" v-show="add_category_popup">
      <span class="popup_top_tag">
        Add Category
        <i class="icon-close" @click="add_popup_cancel"></i>
      </span>
      <div class="input_box">
        <div class="form-group">
          <label for="">
            <span class="Must">*</span>
            Category Name
          </label>
          <input type="text" class="form-control cate_input" v-model="categoryName">
        </div>
        <div class="form-group">
          <label for="">
            <span class="Must">*</span>
            Retype
          </label>
          <input type="text" class="form-control cate_input" v-model="retype">
        </div>
      </div>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="add_popup_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="add_popup_confirm">Confirm</button>
      </div>
    </div>
    <div class="popup" v-show="move_cate">
      <span class="popup_top_tag">
        Move
        <i class="icon-close" @click="move_cancel"></i>
      </span>
      <div class="cate_sele">
        <label for="">Move to category</label>
        <select name="cate-sele" id="cate_select" class="form-control cate_select" v-model="move_sele_val">
          <option :value="cateList.id"  v-for="cateList in this.categoryArr">{{cateList.groupName}}</option>
        </select>
      </div>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="move_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="move_confirm">Confirm</button>
      </div>
    </div>
    <div class="popup" v-show="edit_popup" style="height: 406px;margin-top: -203px">
      <span class="popup_top_tag">
        Edit
        <i class="icon-close" @click="edit_cancel"></i>
      </span>
      <div class="edit_popup_con">
        <div class="form-group">
          <label for="">Picture Name</label>
          <input type="text" class="form-control edit_input" v-model="edit_input_val" style="padding: 6px 8px">
        </div>
        <div class="form-group">
          <label for="">Category</label>
          <select name="" id="edit_popup_sele" class="edit_sele form-control" v-model="edit_sele_val">
            <option :value="cateList.id"  v-for="cateList in this.categoryArr">{{cateList.groupName}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">Alt Text</label>
          <textarea name="" id="jj" cols="30" rows="10" class="form-control" v-model="edit_textarea_val" style="padding: 6px 8px"></textarea>
        </div>
      </div>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="edit_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="edit_confirm">Confirm</button>
      </div>
    </div>

    <div class="Progress" v-show="progress">
      <i class="icon-close" @click="pro_close"></i>
      <el-progress  v-for="proNumber in this.progessNumbers" :text-inside="true" :stroke-width="proNumber" :percentage="proNumber" :status="pro_status"></el-progress>
      <!--<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>-->
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import '../../common/css/reset.min.css'
  import '../../common/css/dropzone.css'
  import interfaceStr from '../../common/js/interfaceStr'
  import nav from '../../components/nav.vue'
  import leftNav from '../../components/leftNav.vue'

  export default{
    data(){
      return{
        mask:false,
        dele_box:false,
        add_category_popup:false,
        categoryName:'',
        retype:'',
        move_cate:false,
        move_sele_val:1,
        img_checked:[],
        page_check_ids:[],
        flag:false,
        edit_popup:false,
        edit_input_val:'',
        edit_sele_val:1,
        edit_textarea_val:'',
        progress:false,
        categoryArr:[],
        cateSele_val:1,
        progessNumbers:[],
        fileObjs:[],
        pro_status:'success',
        rans:[],
        pic_list_arr:[],
        total:0,
        page:1,
        pageSize:8,
        sele_all:[]
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      edit_click(){
        var _this=this;
        $('.fa-trash-o').each(function (index,item) {
          $(item).click(function () {
            _this.mask=true;
            _this.dele_box=true;
            $(this).parent().parent().find('input').click();
          })
        })
        $('.pic_list_radio').each(function (index,item) {
          $(item).click(function () {
            _this.img_checked.push($(this).val())
          })
        });
        $('.fa-edit').each(function (index, item) {
          $(item).click(function () {
            _this.edit_popup=true;
            _this.mask=true;
            $(this).parent().parent().find('input').click();
          })
        })
      },
      pageMaterial(page,pageSize,catesele){
        var _this=this;
        var token = $.cookie('token');
        _this.$http.get(interfaceStr+'cc/material/page?access_token='+token+'&page='+page+'&pageSize='+pageSize+'&groupId='+catesele+'&materialType=0').then(function (res) {
          if (res.body.error_code === 200) {
            _this.pic_list_arr = res.body.resultObj.data;
            _this.total = res.body.resultObj.count;
            var str = '';
            console.log( _this.pic_list_arr)
            for (var i = 0; i < _this.pic_list_arr.length; i++) {
              var data = _this.pic_list_arr[i];
              this.page_check_ids.push(data.id)
              str += '<li class="pic_list">'
                + '<input type="checkbox" name="pic_list_radio" class="pic_list_radio" v-model="' + _this.img_checked + '" value="' + data.id + '">'
                + '<img src="' + data.materialUrl + '" alt="'+data.altText+'" id="img" class="pic_list_img">'/*'+reader.result+'*/
                + '<span class="img_name">' + data.title + '</span>'
                + '<div class="img_edit_box clear">'
                + '<i class="fa fa-edit"></i>'
                + '<i class="fa fa-trash-o"></i>'
                + '</div>'
                + '</li>';
            }
            $('.pic_tab').html(str);
            _this.edit_click();
          }
        })
      },
      /*bindStr(){
        var str = '';
        for (var i = 0; i < this.pic_list_arr.length; i++) {
          var data = this.pic_list_arr[i];
          str += '<li class="pic_list">'
            + '<input type="checkbox" name="pic_list_radio" class="pic_list_radio" v-model="' + this.img_checked + '" value="' + data.id + '">'
            + '<img src="' + data.materialUrl + '" alt="" id="img" class="pic_list_img">'/!*'+reader.result+'*!/
            + '<span class="img_name">' + data.fileName + '</span>'
            + '<div class="img_edit_box clear">'
            + '<i class="fa fa-edit"></i>'
            + '<i class="fa fa-trash-o"></i>'
            + '</div>'
            + '</li>';
        }
        $('.pic_tab').html(str);
        this.edit_click()
      },*/
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        var token = $.cookie('token');
        var page=1;
        this.pageSize=val;
        this.pageMaterial(this.page,this.pageSize,this.cateSele_val);
        this.sele_all=[];
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        var token = $.cookie('token');
        this.page=val;
        this.pageMaterial(this.page,this.pageSize,this.cateSele_val);
        this.sele_all=[];
      },
      cate_change(){
        var token = $.cookie('token');
        this.pageMaterial(this.page,this.pageSize,this.cateSele_val);
        this.sele_all=[];
      },
      /*pic_add(){
        $('#inputFile').click()
      },*/
      dele_cancel(){
        this.mask=false;
        this.dele_box=false;
        this.img_checked=[];
        //$('.pic_list_radio').attr('checked',false)
      },
      dele_confirm(){
        var token = $.cookie('token');
        this.mask=false;
        this.dele_box=false;
        this.$http.post(interfaceStr+'cc/material/delete',{'access_token':token,'ids':this.img_checked.join(",")},{emulateJSON:true}).then(function (deleres) {
          if(deleres.body.error_code===200){
            alert(deleres.body.resultObj);
            this.pageMaterial(this.page,this.pageSize,this.cateSele_val);
            this.img_checked=[];
          }
        })
      },
      add_Category(){
        this.mask=true;
        this.add_category_popup=true;
      },
      add_popup_cancel(){
        this.mask=false;
        this.add_category_popup=false;
        this.categoryName ='';
        this.retype = ''
      },
      add_popup_confirm(){
        if(this.categoryName ==='' || this.retype === ''){
           alert('内容不能为空～请填写内容')
        }else{
          this.mask=false;
          this.add_category_popup=false;
          /*this.categoryName ='';
          this.retype = '';*/
          var token = $.cookie('token');
          this.$http.post(interfaceStr+'cc/material/addgroup',{'access_token':token,'groupName':this.categoryName,'groupType':0},{emulateJSON:true}).then(function (res) {
            if(res.body.error_code===200) {
                var cateName=res.body.resultObj.groupName,
                    cateId=res.body.resultObj.id;
                this.categoryArr.push({'groupName':cateName,'id':cateId})
            }

          })
        }
      },
      click_mask(){
        this.mask=false;
        this.dele_box=false;
        this.add_category_popup=false;
        this.categoryName ='';
        this.retype = '';
        this.progress=false;
        this.progessNumbers=[];
        this.rans=[];
        console.log(this.progessNumbers)
      },
      move_btn(){
          console.log(this.img_checked)
        if(this.img_checked.length === 0){
            alert('未选中图片～')
        }else{
          this.mask=true;
          this.move_cate=true
        }
      },
      delete_btn(){
        if(this.img_checked.length === 0){
          alert('未选中图片～')
        }else{
          this.mask=true;
          this.dele_box=true;
          this.sele_all=[];
        }
      },
      move_cancel(){
        this.mask=false;
        this.move_cate=false;
        this.move_sele_val='';
        this.img_checked=[]
      },
      move_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/material/changegroup',{'access_token':token,'ids':this.img_checked.join(','),'groupId':this.move_sele_val},{emulateJSON:true}).then(function (moveRes) {
          console.log(moveRes)
          if(moveRes.body.error_code===200){
            this.mask=false;
            this.move_cate=false;
            this.move_sele_val=1;
            this.img_checked=[];
            this.sele_all=[];
            alert(moveRes.body.resultObj);
            this.pageMaterial(this.page,this.pageSize,this.cateSele_val);
          }
        })
      },
      all_checked(){
        var oSele=document.getElementsByName('pic_list_radio');
        if(this.sele_all.length === 1){
          for(var i=0;i<oSele.length;i++){
              oSele[i].checked=true
          }
          for(var i=0;i<this.page_check_ids.length;i++) {
            this.img_checked.push(this.page_check_ids[i]);
          }
        }else if(this.sele_all.length === 0){
          this.img_checked=[];
          for(var i=0;i<oSele.length;i++){
            oSele[i].checked=false
          }
        }
      },
      edit_cancel(){
        this.mask=false;
        this.edit_popup=false;
        this.edit_input_val='';
        this.edit_sele_val='';
        this.edit_textarea_val=''
      },
      edit_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/material/update',{'access_token':token,'id':this.img_checked.toString(),'title':this.edit_input_val,'description':'','altText':this.edit_textarea_val,'groupId':this.edit_sele_val},{emulateJSON:true}).then(function (editRes) {
          if(editRes.body.error_code===200){
            this.mask=false;
            this.edit_popup=false;
            this.edit_input_val='';
            this.edit_sele_val=1;
            this.edit_textarea_val='';
            this.img_checked=[];
            alert(editRes.body.resultObj);
            this.pageMaterial(this.page,this.pageSize,this.cateSele_val);
          }
        })
      },
      pro_close(){
        this.progress=false;
        this.mask=false;
        this.rans=[];
        this.progessNumbers=[];
      }
    },
    mounted(){
       var _this=this;
      var token = $.cookie('token');
      var page=1;
      //生成随机数
      function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      };
      //进度条
      function getProgess(ran) {
        _this.progress=true;
        _this.mask=true;

        var timer = setInterval(function () {
          _this.$http.get(interfaceStr+'cc/material/progress?access_token='+token+'&progressId='+ran+'').then(function (progessRes) {
            //_this.progessNumberobj[ran] = progessRes.body.resultObj;
            //console.log(_this.progessNumberobj)
            var ranIndex = _this.rans.indexOf(ran);
            _this.progessNumbers[ranIndex] = progessRes.body.resultObj;
            console.log(_this.progessNumbers);
            if(progessRes.body.resultObj===100){
              clearInterval(timer);
            }
          })
        },1500)
      }
      //上传函数
      function reads(ran,file){
        //var reader = new FileReader();
        //reader.readAsDataURL(file);
        var formData = new FormData();
        formData.append('imgMediaFile',file);
        formData.append('groupId',_this.cateSele_val);
        formData.append('progressId',ran);
        formData.append('access_token',token);
        getProgess(ran);
        //console.log(_this.progessNumbers)
        _this.$http.post(interfaceStr+'cc/blog/uploadImg',formData,{headers: {'Content-Type': 'multipart/form-data'}}).then(function (res) {
          if(res.body.error_code===200){
            _this.pageMaterial(_this.page,_this.pageSize,_this.cateSele_val)
          }
        })
      }
      //var myDropzone = new Dropzone("div#mydropzone", { url: "/upload"});
      //点击上传
        $('#inputFile').change(function () {
          /*var fileUrl= getObjectURL(this.files[0]),
              file=this.files[0];*/
          var fileList=this.files;
          var maxSize = 300;
          for (var i = 0; i < fileList.length; i++) {
              console.log(fileList[i].type)
              if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(fileList[i].name)){
                alert('请上传JPG、PNG、GIF格式的图片～')
                return false
              }else if(fileList[i].size > maxSize*1024){
                alert('上传图片不得大鱼300KB～');
                return false
              }else {
                var ran = guid();
                _this.rans.push(ran);
                _this.progessNumbers.push(0);
                reads(ran,fileList[i]);
              }
          }
        });
      //拖拽上传
      var oDrag=document.getElementById('drag_box');
      oDrag.addEventListener('dragover', function (e) {
        e.preventDefault(); // 必须阻止默认事件
        $('.pic_content').css('background-color','#EEF9FF;')
      }, false);
      oDrag.addEventListener('drop', function (e) {
        e.preventDefault(); // 阻止默认事件
        $('.pic_content').css('background-color','#F9FAFC;');
        var file = e.dataTransfer.files; //获取文件
        //var obj = {};
        //_this.fileObjs=file;
        var maxSize = 300;
        if(file.length >= 6){
            alert('最多上传 5 张图片哦 ～ , 不好意思');
          return false
        }else {
          _this.rans=[];
          _this.progessNumbers = [];
          for (var i = 0; i < file.length; i++) {
            if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file[i].name)){
              alert('请上传JPG、PNG、GIF格式的图片～');
              return false
            }else if(file[i].size > maxSize*1024){
              alert('上传图片不得大鱼300KB～');
              return false
            }else {
              //_this.progessNumbers=[];
              var ran = guid();
              _this.rans.push(ran);
              _this.progessNumbers.push(0);
              reads(ran,file[i]);
            }
          }
        }
      }, false);

      //获取所有分类
      this.$http.get(interfaceStr+'cc/material/grouplist?access_token='+token+'&type=0').then(function (res) {
        if(res.body.error_code===200){
           this.categoryArr = res.body.resultObj;
        }
        //console.log(res)
      });
      //分页
      this.pageMaterial(this.page,this.pageSize,this.cateSele_val)
    },

  }
</script>

<style>
  @media (max-width: 991px) {
    .media_picture{
      min-width: 1080px;
    }
  }
  .page-container{
    padding-top: 50px !important;
    margin-top: 0 !important;
  }
  thead{
    background: #F9FAFC;
  }
  .page-content .tab{
    padding:0 0 20px 20px;
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
  .top_logic{
    padding: 35px 0;
    width: 1040px;
    margin: auto;
  }
  .top_logic .category_select{
    float: left;
    font-size: 0;
  }
  .top_logic .category_select .category_name{
    display: inline-block;
    margin-right: 16px;
    font-size: 14px;
    color: #979BA1;
  }
  .top_logic .category_select .cate-sele{
    width: 200px;
    display: inline-block;
  }
  .width120{
    width: 120px;
  }
  .top_logic .category_select .add_cate_btn{
    margin-left: 16px;
    border-radius: 2px !important;
    font-size: 14px;
    color: #fff;
    vertical-align: top;
  }
  .width180{
    width: 180px;
  }
  .top_logic .add_pic_btn{
    position: relative;
    float: right;
    border-radius: 2px !important;
    font-size: 14px;
  }
  #inputFile{
    opacity: 0;
    position: absolute;
    width: 180px;
    height: 40px;
    top: -1px;
    left: -1px;
    cursor: pointer;
  }
  .pic_box{
    width: 100%;
    padding: 0 0 50px 0;
    background: #F9FAFC;
  }
  .move_dele{
    padding: 36px 0;
    width: 1040px;
    margin: auto;
  }
  /*.move_dele .select_all_btn{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border: 1px solid #C0CCDA;
    border-radius: 4px !important;
    vertical-align: sub;
    cursor: pointer;
  }*/
  .move_dele .radio_tab{
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #283644;
  }
  .move_dele .blue,.red{
    margin-left: 14px;
    border-radius: 2px !important;
  }
  .pic_content{
    position: relative;
    /*min-width: 1040px;*/
    border: 1px dashed #DBE1E8;
    padding: 20px;
    overflow: hidden;
    width: 1040px;
    margin: auto;
  }
  .pic_content .content_tag{
    display: block;
    margin-bottom: 20px;
    font-size: 12px;
    color: #99A9BF;
    text-align: center;
  }
  .pic_content .drag_box{
    width: 100%;
    height: 100%;
    position: absolute;
    top:50px;
    left:0;
    z-index: 100;
    background: transparent;
  }
  .pic_tab{
    min-height: 180px;
    /*max-height: 490px;
    overflow: hidden;*/
  }
  .pic_list{
    position: relative;
    float: left;
    width: 240px;
    margin-right: 10px;
    background: #fff;
    list-style: none;
    margin-bottom: 20px;
  }
  .pic_list:nth-child(4){
    margin-right: 0;
  }
  .pic_list:nth-child(8){
    margin-right: 0;
  }
  .pic_list:nth-child(12){
    margin-right: 0;
  }
  .pic_list:nth-child(16){
    margin-right: 0;
  }
  .pic_list:nth-child(20){
    margin-right: 0;
  }
  .pic_list .pic_list_radio{
    position: absolute;
    right: 20px;
    top:15px;
    cursor: pointer;
    z-index: 110;
  }
  .pic_list .pic_list_img{
    display: block;
    margin: 10px;
    width: 220px;
    height: 140px;
  }
  .pic_list .img_name{
    display: block;
    height: 17px;
    margin: 14px 0;
    font-size: 12px;
    color: #283644;
    text-align: center;
    padding: 0 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pic_list .img_edit_box{
    position: relative;
    width: 100%;
    font-size: 0;
    z-index: 110;
  }
  .pic_list .img_edit_box .fa-edit,.pic_list .img_edit_box .fa-trash-o{
    float: left;
    width: 50%;
    height: 30px;
    font-size: 16px;
    color: #fff;
    line-height: 30px;
    cursor: pointer;
  }
  .pic_list .img_edit_box .fa-edit{
    line-height: 33px;
  }
  .pic_list .img_edit_box .fa-edit{
    background: #3598dc;
  }
  .pic_list .img_edit_box .fa-trash-o{
    background: #e7505a;
  }
  .pic_list .img_edit_box .fa-edit:hover{
    background: #217ebd;
  }
  .pic_list .img_edit_box .fa-trash-o:hover{
    background: #e12330;
  }
  /*.upload-demo{
    overflow: hidden;
    position: relative;
    min-height: 180px;
  }
  .el-upload{
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
    filter: alpha(opacity=0);
    z-index: 100;
  }
  .el-upload-dragger{
    width: 100% !important;
    height: 440px !important;
  }
  .el-upload-list--picture .el-upload-list__item{
    display: inline-block;
    width: 240px;
    height: 220px !important;
    margin-right: 10px;
    padding: inherit !important;
  }
  .el-upload-list--picture .el-upload-list__item-thumbnail{
    display: block;
    width: 220px !important;
    height: 140px !important;
    margin: 10px !important;
    margin-left: inherit;
  }
  .el-upload-list__item-name{
    width: 100%;
    display: block;
    text-align: center;
  }
  .el-upload-list--picture .el-upload-list__item.is-success .el-upload-list__item-name{
    line-height: inherit !important;
  }
  .el-upload__input{
    display: none !important;
  }*/
  .el-pagination{
    position: relative;
    z-index: 110;
  }
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,.4);
    z-index: 120;
  }
  .popup{
    width: 540px;
    height: 340px;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -270px;
    border-radius: 4px;
    background: #fff;
    z-index: 130;
  }
  .popup .popup_top_tag{
    position: relative;
    display: block;
    width: 100%;
    height: 60px;
    background: #F9FAFC;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    color: #283644;
  }
  .popup .popup_top_tag .icon-close{
    position: absolute;
    right: 10px;
    top: 24px;
    font-size: 24px;
    color: #CCCDCE;
    cursor: pointer;
  }
  .popup .popup_top_tag .icon-close:hover{
    color: #283644;
  }

  .popup .dele_con .dele_con_tag{
    margin: 92px 0;
    text-align: center;
    font-size: 16px;
    color: #283644;
  }
  .popup .input_box{
    width: 460px;
    margin: 50px auto;
  }
  .popup .input_box .form-group,.edit_popup_con .form-group{
    margin-bottom: 26px;
    font-size: 0;
  }
  .popup .input_box .form-group:last-child{
    margin-bottom: 0;
  }
  .edit_popup_con .form-group:last-child{
    margin-bottom: 0;
  }
  .input_box .form-group label,.edit_popup_con .form-group label{
    display: inline-block;
    width: 120px;
    text-align: -webkit-right;
    margin-right: 16px;
    font-size: 14px;
    color: #979BA1;
  }
  .edit_popup_con .form-group label{
    width: 92px;
    vertical-align: top;
  }
  .input_box .form-group label .Must{
    margin-right: 10px;
    color: #FC3A3A;
    font-size: 18px;
    vertical-align: middle;
  }
  .input_box .form-group .cate_input{
    display: inline-block;
    width: 320px;
    height: 40px;
    border: 1px solid #E6ECF2 !important;
    border-radius: 4px !important;
    font-size: 14px;
    color: #283644;
  }
  .cate_sele{
    width: 436px;
    margin: 83px auto;
    font-size: 0;
  }
  .cate_sele label{
    display: inline-block;
    font-size: 14px;
    color: #979BA1;
    margin-right: 16px;
  }
  .cate_sele .cate_select{
    display: inline-block;
    width: 300px;
    height: 40px;
    border: 1px solid #E6ECF2 !important;
    border-radius: 4px !important;
    font-size: 14px;
    color: #283644;
  }
  .edit_popup_con{
    margin: 30px auto;
    width: 440px;
  }
  .edit_popup_con .form-group .edit_input,.edit_sele{
    width: 320px;
    height: 40px;
    display: inline-block;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
    background: #fff;
  }
  .edit_popup_con .form-group textarea{
    width: 320px;
    height: 80px;
    display: inline-block;
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
  .Progress{
    position: absolute;
    left: 50%;
    top: 180px;
    width: 540px;
    padding: 40px 50px;
    background: #fff;
    z-index: 130;
    margin-left: -270px;
  }
  .Progress:last-child{
    margin-bottom: 0;
  }
  .Progress .icon-close{
    position: absolute;
    top:20px;
    right: 20px;
    font-size: 24px;
    color: #CCCDCE;
    cursor: pointer;
  }
  .Progress .icon-close:hover{
    color: #283644;
  }
  .el-progress{
    margin-bottom: 20px;
  }
  .el-progress:last-child{
    margin-bottom: 0;
  }
  .el-progress-bar__outer{
    height: 36px !important;
    border-radius: 50px !important;
  }
  @media (min-width: 992px){
    .page-content-wrapper .page-content{
      padding: 25px 0 10px !important;
    }
  }
</style>
