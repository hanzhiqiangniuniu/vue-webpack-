<template>
  <div class="blog_edit">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Blog Management&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="blog.html">Blog&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="blog_edit.html" class="active">/ &nbspNew Post</a>
            </li>
          </ul>
          <div class="edit_con">
            <div class="edit_con_top">
              <div class="top_tag">
                <span class="main_tag">Edit Blog</span>
                <span class="secon_tag">（Mandatory）</span>
              </div>
              <ul class="top_tab">
                <li class="top_list">
                  <span class="top_list_name">
                    <b>*</b>
                    Cover Image
                  </span>
                  <div class="img_box" @click="file_photo" v-if="avatar_start_file">
                    <i class="fa fa-file-picture-o"></i>
                    Click upload Cover Image
                    <!--<input type="file" class="upload_file">-->
                  </div>
                  <p class="notice" v-show="picNotice">No pictures uploaded</p>
                  <div class="photo_con" v-if="photo_con">
                    <img :src="this.avatar_url" :alt="this.logoAlt" class="per_pic">
                    <span class="rep_btn" @click="rep_file_photo">
                        <i class="fa fa-circle-o-notch"></i>
                        Replace
                    </span>
                  </div>
                </li>
                <li class="top_list">
                  <span class="top_list_name">
                    <b>*</b>
                    Title
                  </span>
                  <input type="text" class="form-control edit_input" v-model="titleVal" @focus="titleFocus">
                  <p class="notice" v-show="titleNotice">Required</p>
                </li>
                <li class="top_list">
                  <span class="top_list_name">
                    <b>*</b>
                    Author
                  </span>
                  <select name="author_sele" id="author_sele" class="form-control" style="margin-right: 43px" v-model="authorVal" ref="authorSele" @click="authorClick">
                    <option value="0"></option>
                    <option :value="authorList.id" v-for="authorList in AuthorArr">{{authorList.displayName}}</option>
                  </select>
                  <span class="top_list_name">
                    <b>*</b>
                    Category
                  </span>
                  <select name="cate_sele" id="cate_sele" class="form-control" v-model="categoryVal" ref="cateSele" @click="cateSeleClick">
                    <option value="0"></option>
                    <option :value="blog_cateList.id" v-for="blog_cateList in blog_categoryArr">{{blog_cateList.categoryName}}</option>
                  </select>
                  <p class="notice" v-show="authorNotice">Required</p>
                  <p class="notice1" v-show="categoryNotice">Required</p>
                </li>
                <li class="top_list">
                  <span class="top_list_name">
                    <b>*</b>
                    Content
                  </span>
                  <div class="ued">
                    <div id="editor" type="text/plain" @click="editorClick"></div>
                    <div class="pic-video_btn">
                      <button type="button" class="btn pic_btn" @click="get_pic">
                        <i class="fa fa-file-picture-o"></i>
                        <!--<input type="file" class="upload_file">-->
                      </button>
                      <button type="button" class="btn video_btn" @click="get_video">
                        <i class="fa fa-film"></i>
                        <!--<input type="file" class="upload_file">-->
                      </button>
                    </div>
                  </div>
                  <p class="notice" v-show="ueditorNotice">Required</p>
                </li>
                <li class="top_list">
                  <span class="top_list_name">
                    <b>*</b>
                    Summary
                  </span>
                  <textarea name="text" id="text" cols="30" rows="10" class="form-control sum_text" v-model="summaryVal" @focus="textFocus"></textarea>
                  <p class="notice" v-show="summaryNotice">Required</p>
                </li>
              </ul>
            </div>
            <div class="edit_con_bottom">
              <ul class="bottom_tab">
                <li class="bottom_list">
                  <div class="bottom_tag">
                    <span class="main_tag">Tags</span>
                    <span class="secon_tag">（Optional）</span>
                  </div>
                  <div class="bottom_tags_box">
                    <span class="bottom_list_name">Tags</span>
                    <ol class="clear">
                      <li class="checkList" v-for="tagList in tagArr">
                        <input type="checkbox" class="form-control tags_check" :value="tagList.id" v-model="tagcheckArr">
                        <span class="checkName">{{tagList.tagName}}</span>
                      </li>
                    </ol>
                  </div>
                </li>
                <li class="bottom_list">
                  <div class="bottom_tag">
                    <span class="main_tag">SEO Features</span>
                    <span class="secon_tag">（Optional）</span>
                  </div>
                  <div class="input_table">
                    <div class="form-group">
                      <span class="bottom_list_name"><b style="margin-right: 10px;    color: #FC3A3A;vertical-align: top;">*</b>URL Words</span>
                      <input type="text" class="form-control input660" value="" v-model="wordsVal" @blur="blurInput" @focus="wordInput">
                      <span class="notice">{{this.wordsMsg}}</span>
                      <span class="notice" v-show="words_notice">Required</span>
                    </div>
                    <div class="form-group">
                      <span class="bottom_list_name">Page Title</span>
                      <input type="text" class="form-control input660" value="" v-model="seoTitleVal">
                    </div>
                    <div class="form-group">
                      <span class="bottom_list_name">Mete Keywords</span>
                      <input type="text" class="form-control input660" value="" v-model="keywordsVal">
                    </div>
                    <div class="form-group">
                      <span class="bottom_list_name">Meta Description</span>
                      <textarea name="" id="" cols="30" rows="10" class="form-control des_text" v-model="descriptVal"></textarea>
                    </div>
                  </div>
                </li>
                <li class="bottom_list">
                  <div class="bottom_tag">
                    <span class="main_tag">Related Links</span>
                    <span class="secon_tag">（Optional）</span>
                  </div>
                  <div class="input_table">
                    <div class="form-group">
                      <span class="bottom_list_name">Link Name</span>
                      <input type="text" class="form-control input180" value="" v-model="linkName1">
                      <span class="bottom_list_urlName">URL</span>
                      <input type="text" class="form-control urlInput input400" value="" v-model="linkUrl1">
                    </div>
                    <div class="form-group">
                      <span class="bottom_list_name">Link Name</span>
                      <input type="text" class="form-control input180" value="" v-model="linkName2">
                      <span class="bottom_list_urlName">URL</span>
                      <input type="text" class="form-control urlInput input400" value="" v-model="linkUrl2">
                    </div>
                    <div class="form-group">
                      <span class="bottom_list_name">Link Name</span>
                      <input type="text" class="form-control input180" value="" v-model="linkName3">
                      <span class="bottom_list_urlName">URL</span>
                      <input type="text" class="form-control urlInput input400" value="" v-model="linkUrl3">
                    </div>
                    <div class="form-group">
                      <span class="bottom_list_name">Link Name</span>
                      <input type="text" class="form-control input180" value="" v-model="linkName4">
                      <span class="bottom_list_urlName">URL</span>
                      <input type="text" class="form-control urlInput input400" value="" v-model="linkUrl4">
                    </div>
                    <div class="form-group" style="margin-bottom: 0">
                      <span class="bottom_list_name">Link Name</span>
                      <input type="text" class="form-control input180" value="" v-model="linkName5">
                      <span class="bottom_list_urlName">URL</span>
                      <input type="text" class="form-control urlInput input400" value="" v-model="linkUrl5">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="edit_btns">
              <button type="button" class="btn grey-salsa btn-outline width120" @click="saveCancel">Cancel</button>
              <button type="button" class="btn blue btn-outline width120" v-show="save_draft" @click="saveDraft">Save as draft</button>
              <button type="button" class="btn blue btn-outline width120">Preview</button>
              <button type="button" class="btn blue width120" @click="publish">Publish</button>
              <input type="checkbox" class="form-control edit_btns_input" value="0" v-model="libraryCheck" @click="libCheck_click">
              <span class="check_tag">Publish in Library</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--ming-->
    <div class="mask" v-show="mask"></div>
    <div class="popup" v-show="media_popup">
      <span class="popup_tag">
        {{this.popup_tag_name}}
        <i class="icon-close" @click="media_close"></i>
      </span>
      <div class="media_con clear">
        <div class="add_cate_mask" v-show="add_cate_mask"></div>
        <div class="con_left">
          <ul class="category_tab">
            <li :class="index===0?'category_list active':'category_list'" v-for="(cateList , index) in this.categoryArr"
                @click="cate_click(cateList.id,index,cateList.groupName)">{{cateList.groupName}}
            </li>
          </ul>
          <button type="button" class="btn blue width160 add_cate_btn" @click="add_cate">
            Add Category
          </button>
          <div class="add_popup" v-show="add_category_popup">
            <span class="arrow"></span>
            <div class="input_box">
              <div class="form-group">
                <label for="">
                  Category Name
                </label>
                <input type="text" class="form-control cate_input" v-model="categoryName" @focus="input_focus">
              </div>
              <div class="form-group">
                <label for="">
                  Retype
                </label>
                <input type="text" class="form-control cate_input" v-model="retype" @focus="input_focus">
              </div>
              <p class="Notice" v-show="cateNotice">{{this.notice_val}}</p>
            </div>
            <div class="buttons">
              <button type="button" class="btn grey-salsa btn-outline width120" @click="add_cate_cancel">Cancel
                </button>
              <button type="submit" class="btn blue width120" @click="add_cate_confirm">Confirm</button>
            </div>
          </div>
        </div>
        <div class="media_box">
          <div class="box_top clear">
            <span class="cate_name">{{group_name}}</span>
            <div class="progressBox" v-show="progress">
              <el-progress :percentage="progress_number"></el-progress>
            </div>
            <button type="button" class="btn blue width120 add_new_btn">
              <input type="file" class="upload_file" id="inputFile" @change="upload_pic" ref="inputFile">
              + Add New
            </button>
          </div>
          <ul class="media_inner_tab clear" id="inner_tab">
          </ul>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[8, 12, 16, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
          <div class="buttons">
            <button type="button" class="btn grey-salsa btn-outline width120" @click="media_close">Cancel</button>
            <button type="submit" class="btn blue width120" @click="media_confirm">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../common/css/reset.min.css'
  import '../../common/css/media_popup.css'
  import interfaceStr from '../../common/js/interfaceStr'
  import nav from '../../components/nav.vue'
  import leftNav from '../../components/leftNav.vue'
  import '../../../static/umeditor1.2.3/lang/zh-cn/zh-cn'
  export default{
    data(){
      return {
        um: '',
        uedata: [],
        xierudata: [],

        avatar_start_file:true,
        notice: true,
        photo_con: false,
        add_category_popup:false,
        add_cate_mask:false,
        categoryName:'',
        retype:'',
        cateNotice:false,
        notice_val:'Confirmation is not the same',
        categoryArr: [],
        mask: false,
        media_popup: false,
        popup_tag_name: 'Add Picture',
        page: 1,
        pageSize: 8,
        cateSele_val: 1,
        pic_list_arr: [],
        total: 0,
        page_check_ids:[],
        img_checked: [],
        mediaType: 0,
        avatar_url:'',
        blog_img_urlArr:[],
        blog_video_urlArr:[],
        flag:1,
        progress:false,
        progress_number:0,
        group_name:'All',
        logoAlt:'',
        //获取详情所有变量
        blogDetailArr:{},
        blogId:'',
        picNotice:false,
        titleNotice:false,
        authorNotice:false,
        categoryNotice:false,
        ueditorNotice:false,
        summaryNotice:false,
        titleVal:'',
        authorVal:0,
        categoryVal:0,
        summaryVal:'',
        tagArr:[],
        tagcheckArr:[],
        wordsVal:'',
        seoTitleVal:'',
        keywordsVal:'',
        descriptVal:'',
        linkName1:'',
        linkName2:'',
        linkName3:'',
        linkName4:'',
        linkName5:'',
        linkUrl1:'',
        linkUrl2:'',
        linkUrl3:'',
        linkUrl4:'',
        linkUrl5:'',
        links:[],
        AuthorArr:[],
        blog_categoryArr:[],
        //返回页面
        status:1,
        libraryCheck:[],
        save_draft:true,
        cencelStatus:'',

        wordsMsg:'',
        //ajax_notice:false,
        words_notice:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav': leftNav,
    },
    methods: {
      //请求分页
      pageMaterial(page, pageSize, catesele, type){
        var _this = this;
        var token = $.cookie('token');
        _this.$http.get(interfaceStr + 'cc/material/page?access_token=' + token + '&page=' + page + '&pageSize=' + pageSize + '&groupId=' + catesele + '&materialType=' + type + '').then(function (res) {
          if (res.body.error_code === 200) {
            _this.pic_list_arr = res.body.resultObj.data;
            _this.total = res.body.resultObj.count;
            var str = '';
            for (var i = 0; i < _this.pic_list_arr.length; i++) {
              var data = _this.pic_list_arr[i];
              this.page_check_ids.push(data.id)
              if (type === 0) {
                str += '<li class="media_inner_list">'
                  + '<input type="checkbox" name="pic_list_radio" class="pic_list_radio" v-model="' + _this.img_checked + '" value="' + data.id + '">'
                  + '<img src="' + data.materialUrl + '" alt="' + data.altText + '" class="media_img">'/*'+reader.result+'*/
                  + '<span class="img_name">' + data.title + '</span>'
                  + '</li>';
              } else {
                str += '<li class="media_inner_list">'
                  + '<input type="checkbox" name="pic_list_radio" class="pic_list_radio" v-model="' + _this.img_checked + '" value="' + data.id + '">'
                  + '<video src="' + data.materialUrl + '" alt="' + data.altText + '" class="pic_list_video" controls></video>'/*'+reader.result+'*/
                  + '<span class="img_name">' + data.title + '</span>'
                  + '</li>';
              }
            }
            $('.media_inner_tab').html(str);
            $('.media_img').click(function () {
              $(this).siblings('input').click()
            }),
            $('.pic_list_video').click(function () {
              $(this).siblings('input').click()
            }),
            $('.pic_list_radio').click(function () {
              //_this.img_checked.push(this.value)
              if ($(this).attr('checked')===undefined) {
                $(this).attr('checked','checked');
                if(_this.flag===1){
                  _this.img_checked.splice(0,1,$(this).val());
                  console.log(_this.img_checked);
                  $(this).eq($(this).index()).attr('checked','checked').parent().siblings().children('input').removeAttr('checked');
                  _this.avatar_url=$(this).siblings('img').attr('src');
                  _this.logoAlt=$(this).siblings('img').attr('alt');
                }else if(_this.flag===2) {
                  _this.blog_img_urlArr.push({
                    'url':$(this).siblings('img').attr('src'),
                    'alt':$(this).siblings('img').attr('alt')
                  })
                }else {
                  _this.blog_video_urlArr.push({
                    'url':$(this).siblings('video').attr('src'),
                    'alt':$(this).siblings('video').attr('alt')
                  })
                }
              }else {
                $(this).removeAttr('checked');
                _this.img_checked.pop();
                if(_this.flag===1){
                  _this.avatar_url='';
                  _this.logoAlt='';
                }else if(_this.flag===2) {
                  _this.blog_img_urlArr.pop()
                }else {
                  _this.blog_video_urlArr.pop()
                }
              }
            })
            //_this.edit_click();
          }
        })
      },
      //请求分类
      get_cate(type){
        //获取所有分类
        var token = $.cookie('token');
        this.$http.get(interfaceStr + 'cc/material/grouplist?access_token=' + token + '&type=' + type + '').then(function (res) {
          if (res.body.error_code === 200) {
            this.categoryArr = res.body.resultObj;
          }
        });
      },
      //判断上传材料的type
      if_type(){
        if (this.popup_tag_name === 'Add Picture') {
          this.mediaType = 0;
          //this.cateSele_val = 1
        } else {
          this.mediaType = 1;
          //this.cateSele_val = 3
        }
      },
      //分页按钮
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        var token = $.cookie('token');
        this.if_type();
        this.pageSize = val;
        this.pageMaterial(this.page, this.pageSize, this.cateSele_val, this.mediaType);
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        var token = $.cookie('token');
        this.if_type();
        this.page = val;
        this.pageMaterial(this.page, this.pageSize, this.cateSele_val, this.mediaType);
      },
      //副文本上传请求图片库
      get_pic(){
        var type = 0;
        this.mediaType = 0;
        //this.cateSele_val = 1;
        this.popup_tag_name = 'Add Picture';
        this.get_cate(type);
        this.mask = true;
        this.media_popup = true;
        this.blog_img_urlArr=[];
        this.flag=2;
        this.pageMaterial(this.page, this.pageSize, this.cateSele_val, this.mediaType)
      },
      //blog首页图片
      head_upload_pic(){
        var type = 0;
        this.mediaType = 0;
        //this.cateSele_val = 1;
        this.popup_tag_name = 'Add Picture';
        this.get_cate(type);
        this.mask = true;
        this.media_popup = true;
        this.pageMaterial(this.page, this.pageSize, this.cateSele_val, this.mediaType)
      },
      //媒体库弹窗关闭
      media_close(){
        this.img_checked=[]
        this.mask = false;
        this.media_popup = false;
        this.add_category_popup=false;
        this.add_cate_mask=false;
        this.cateNotice=false;
        $('.category_tab li').eq(0).addClass('active').siblings().removeClass('active');
      },
      //媒体库弹窗确认选定
      media_confirm(){
        this.mask = false;
        this.media_popup = false;
        $('.category_tab li').eq(0).addClass('active').siblings().removeClass('active');
        if(this.flag===1){
          if(this.avatar_url===''){
            this.avatar_start_file=true;
            this.photo_con=false;
          }else {
            this.avatar_start_file=false;
            this.photo_con=true;
            this.picNotice=false
          }
        }else if(this.flag===2){
          var str='';
          for(var i=0;i<this.blog_img_urlArr.length;i++){
              var imgData=this.blog_img_urlArr[i];
              str+='<img src="' + imgData.url + '" alt="'+imgData.alt+' "class="editor_img">'
          }
          $('#editor').append(str)
        }else {
          var str='';
          for(var i=0;i<this.blog_video_urlArr.length;i++){
            var videoData=this.blog_video_urlArr[i];
            str+='<video src="' + videoData.url + '" alt="' + videoData.alt + '" class="editor_video" controls></video>'
          }
          $('#editor').append(str)
        }
      },
      //副文本上传请求视频库
      get_video(){
        var type = 1;
        this.mediaType = 1;
        this.cateSele_val = 3;
        this.get_cate(type);
        this.popup_tag_name = 'Add Video';
        this.mask = true;
        this.media_popup = true;
        this.blog_video_urlArr=[];
        this.flag=3;
        this.pageMaterial(this.page, this.pageSize, this.cateSele_val, this.mediaType)
      },
      //分类点击
      cate_click(id, index,groupName){
        this.cateSele_val=id;
        this.group_name=groupName;
        this.if_type();
        $('.category_tab li').eq(index).addClass('active').siblings().removeClass('active');
        this.pageMaterial(this.page, this.pageSize, id, this.mediaType)
      },
      //添加分类
      add_cate(){
        this.add_category_popup=true;
        this.add_cate_mask=true;
        this.categoryName='';
        this.retype='';
        this.cateNotice=false;
      },
      //添加分类弹窗取消按钮
      add_cate_cancel(){
        this.add_category_popup=false;
        this.add_cate_mask=false;
      },
      //添加分类弹窗确认按钮
      add_cate_confirm(){
        this.if_type()
        if(this.categoryName!=this.retype){
          this.notice_val='Confirmation is not the same';
          this.cateNotice=true;
        }else if(this.categoryName ==='' || this.retype === ''){
          this.cateNotice=true;
          this.notice_val='Please fill in the content'
        }else{
          this.add_category_popup=false;
          this.add_cate_mask=false;
          var token = $.cookie('token');
          this.$http.post(interfaceStr+'cc/material/addgroup',{'access_token':token,'groupName':this.categoryName,'groupType':this.mediaType},{emulateJSON:true}).then(function (res) {
            if(res.body.error_code===200) {
              var cateName=res.body.resultObj.groupName,
                cateId=res.body.resultObj.id;
              this.categoryArr.push({'groupName':cateName,'id':cateId})
            }

          })
        }
      },
      //添加分类弹窗input获取焦点
      input_focus(){
        this.cateNotice=false;
      },
      //获取随机数
      guid () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      },
      //获取上传文件的url
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
      //获取进度条
      getProgess(ran) {
        this.progress=true;
        var _this=this;
        //this.mask=true;
        var token = $.cookie('token');
        var timer = setInterval(function () {
          _this.$http.get(interfaceStr+'cc/material/progress?access_token='+token+'&progressId='+ran+'').then(function (progessRes) {
            //_this.progessNumberobj[ran] = progessRes.body.resultObj;
            //console.log(_this.progessNumberobj)
            /*var ranIndex = this.rans.indexOf(ran);
             this.progessNumbers[ranIndex] = progessRes.body.resultObj;
             console.log(_this.progessNumbers);*/
            _this.progress_number = progessRes.body.resultObj
            if(progessRes.body.resultObj===100){
              clearInterval(timer);
              setTimeout(function () {
                _this.progress=false;
              },2000);
              //clearTimeout()
            }
          })
        },1500)
      },
      //上传函数
      readPic(file,ran){
        //this.imgUrl = this.getObjectURL(file);
        var token = $.cookie('token');
        var formData = new FormData();
        formData.append('imgMediaFile',file);
        formData.append('groupId',this.cateSele_val);
        formData.append('progressId',ran);
        formData.append('access_token',token);
        var formData1 = new FormData();
        formData1.append('videoMediaFile',file);
        formData1.append('groupId',this.cateSele_val);
        formData1.append('progressId',ran);
        formData1.append('access_token',token);
        this.getProgess(ran);
        //console.log(_this.progessNumbers)
        if (this.popup_tag_name === 'Add Picture') {
          //this.cateSele_val = 1;
          console.log(this.cateSele_val)
          this.$http.post(interfaceStr+'cc/blog/uploadImg',formData,{headers: {'Content-Type': 'multipart/form-data'}}).then(function (res) {
            if (res.body.error_code === 200) {
              this.pageMaterial(this.page, this.pageSize, this.cateSele_val,this.mediaType)
            }
          })
        } else {
          this.$http.post(interfaceStr+'cc/blog/uploadVideo',formData1,{headers: {'Content-Type': 'multipart/form-data'}}).then(function (res) {
            if(res.body.error_code===200){
              this.pageMaterial(this.page,this.pageSize,this.cateSele_val,this.mediaType)
            }
          })
        }

      },
      //上传图片视频格式校验
      photo_file(file, maxSize){
        if (this.popup_tag_name === 'Add Picture') {
          if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name)) {
            alert('请上传JPG、PNG、GIF格式的图片～');
            return false
          } else if (file.size > maxSize * 1024) {
            alert('上传图片不得大于300KB～');
            return false
          } else {
            var ran=this.guid();
            this.readPic(file,ran);
          }
        } else {
          if(!/\.(avi|dat|mpg|wmv|asf|rm|rmvb|mov|flv|mp4|3gp|dv|divx|qt|asx)$/i.test(file.name)){
            alert('请上传avi、dat、mpg、wmv、asf、rm、rmvb、mov、flv、mp4、3gp、dv、divx、qt、asx格式的视频～');
            return false
          }else if(file.size > maxSize*1024){
            alert('上传视频不得大于15M～');
            return false
          }else {
            var ran = this.guid();
            this.readPic(file,ran);
          }
        }

      },
      //上传按钮
      upload_pic(){
        this.progress_number=0;
        var file=this.$refs.inputFile.files[0],
            maxSize = 300;
        if (this.popup_tag_name === 'Add Picture') {
          this.mediaType = 0;
          maxSize = 300;
        } else {
          this.mediaType = 1;
          maxSize = 15000;
        }
        this.photo_file(file, maxSize)
      },
      //blog 首图上传按钮
      file_photo(){
        this.flag=1;
        this.head_upload_pic();
      },
      //blog 首图更新按钮
      rep_file_photo(){
        this.flag=1;
        this.head_upload_pic();
      },
      //获取author列表
      getAuthorList(){
        var _this = this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr + 'cc/blog/setting/author/list?access_token=' + token).then(function (authorRes) {
          this.AuthorArr = authorRes.body.resultObj;
        });
      },
      //获取blog分类
      getCategoryList(){
        var _this = this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr + 'cc/blog/setting/category/list?access_token=' + token).then(function (cateRes) {
          this.blog_categoryArr = cateRes.body.resultObj;
        })
      },
      //获取tag
      getTagList(){
        var _this = this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr + 'cc/blog/setting/tag/list?access_token=' + token).then(function (tagRes) {
          this.tagArr = tagRes.body.resultObj;
        })
      },
      //获取博客详情
      getBlogDetail(id){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/one?access_token='+token+'&blogId='+id).then(function (res) {
           console.log(res)
          this.blogDetailArr=res.body.resultObj;
          if(res.body.resultObj.material!=null){
            this.avatar_start_file=false;
            this.photo_con=true;
            this.avatar_url=res.body.resultObj.material.materialUrl;
            this.logoAlt=res.body.resultObj.material.altText;
            this.img_checked.push(res.body.resultObj.faceImgId)
          }else {
            this.avatar_start_file=true;
            this.photo_con=false;
          }
          this.titleVal= res.body.resultObj.title;
          this.authorVal=res.body.resultObj.author;
          this.categoryVal= res.body.resultObj.categoryId;
          this.um.setContent(res.body.resultObj.blogContent);
          this.summaryVal= res.body.resultObj.description;
          this.tagcheckArr= res.body.resultObj.tagList;
          this.wordsVal= res.body.resultObj.urlWords;
          this.seoTitleVal= res.body.resultObj.pageTitle;
          this.keywordsVal= res.body.resultObj.keywords;
          this.descriptVal= res.body.resultObj.meteDescription;
          //this.links= res.body.resultObj.blogLinks;
          try{
            this.linkName1=res.body.resultObj.blogLinks[0].linkName;
            this.linkUrl1=res.body.resultObj.blogLinks[0].targetAddress;
            this.linkName2=res.body.resultObj.blogLinks[1].linkName;
            this.linkUrl2=res.body.resultObj.blogLinks[1].targetAddress;
            this.linkName3=res.body.resultObj.blogLinks[2].linkName;
            this.linkUrl3=res.body.resultObj.blogLinks[2].targetAddress;
            this.linkName4=res.body.resultObj.blogLinks[3].linkName;
            this.linkUrl4=res.body.resultObj.blogLinks[3].targetAddress;
            this.linkName5=res.body.resultObj.blogLinks[4].linkName;
            this.linkUrl5=res.body.resultObj.blogLinks[4].targetAddress;
          }catch (e){}
        })
      },
      blurInput(){
        var token=$.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/validateUrlWords',{'access_token':token,'blogId':this.blogId,'urlWords':this.wordsVal},{emulateJSON:true}).then(function (res) {
          if(res.body.error_code===200){
            this.wordsMsg='';
          }else {
            this.wordsMsg=res.body.error_msg;
          }
        })
      },
      saveBlog(status){
        //this.blurInput();
        var token = $.cookie('token');
        var linkObj=[
          {'linkName':this.linkName1,'targetAddress':this.linkUrl1},
          {'linkName':this.linkName2,'targetAddress':this.linkUrl2},
          {'linkName':this.linkName3,'targetAddress':this.linkUrl3},
          {'linkName':this.linkName4,'targetAddress':this.linkUrl4},
          {'linkName':this.linkName5,'targetAddress':this.linkUrl5},
        ];
        //console.log(this.img_checked);
        this.$http.post(interfaceStr+'cc/blog/validateUrlWords',{'access_token':token,'blogId':this.blogId,'urlWords':this.wordsVal},{emulateJSON:true}).then(function (res) {
          if(res.body.error_code===200){
            this.wordsMsg='';
            if(this.photo_con===false||this.titleVal===''||this.authorVal===0||this.categoryVal===0||this.um.getContent()===''||this.summaryVal===''||this.wordsMsg!=''||this.wordsVal===''){
              if(this.photo_con===false){
                this.picNotice=true
              }else {
                this.picNotice=false
              }
              if(this.titleVal===''){
                this.titleNotice=true
              }else {
                this.titleNotice=false
              }
              if(this.authorVal===0){
                this.authorNotice=true
              }else {
                this.authorNotice=false
              }
              if(this.categoryVal===0){
                this.categoryNotice=true
              }else {
                this.categoryNotice=false
              }
              if(this.um.getContent()===''){
                this.ueditorNotice=true
              }else {
                this.ueditorNotice=false
              }
              if(this.summaryVal===''){
                this.summaryNotice=true
              }else {
                this.summaryNotice=false
              }
              if(this.wordsVal===''){
                this.words_notice=true
              }
            }else {
              this.$http.post(interfaceStr+'cc/blog/saveOrPublish',{'access_token':token,'id':this.blogId,'status':status,'categoryId':this.categoryVal,'title':this.titleVal,'authorId':this.authorVal,'blogContent':this.um.getContent(),'faceImgId':this.img_checked.join(','),'summary':this.summaryVal,'tagIds':JSON.stringify(this.tagcheckArr),'urlwords':this.wordsVal,'pageTitle':this.seoTitleVal,'meteKeywords':this.keywordsVal,'meteDescription':this.descriptVal,'blogLinks':JSON.stringify(linkObj)},{emulateJSON:true}).then(function (res) {
                //console.log(res)
                if(res.body.error_code===200){
                  location.href='blog.html?status='+status
                }
              })
            }
          }else {
            this.wordsMsg=res.body.error_msg;
          }
        })

      },
      publish(){
        if(this.libraryCheck.length===0){
          this.status=1;
        }else {
          this.status=3;
        }
        this.saveBlog(this.status)
      },
      saveDraft(){
        this.status=2;
        this.saveBlog(this.status)
      },
      saveCancel(){
        location.href='blog.html?status='+this.cencelStatus
      },
      titleFocus(){
        this.titleNotice=false
      },
      authorClick(){
        this.authorNotice=false
      },
      cateSeleClick(){
        this.categoryNotice=false
      },
      editorClick(){
        this.ueditorNotice=false
      },
      textFocus(){
        this.summaryNotice=false
      },
      wordInput(){
        this.wordsMsg='';
        this.words_notice=false
      },
      libCheck_click(){
        if(this.libraryCheck.length!=0){
          this.save_draft=false
        }else {
          this.save_draft=true
        }
      },
    },
    created(){
      this.getAuthorList();
      this.getCategoryList();
      this.getTagList();
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
      var blogId=window.location.href.queryURLParameter()["id"];
      this.cencelStatus=window.location.href.queryURLParameter()["status"];

      if(blogId===undefined){
        this.blogId=''
      }else {
        this.blogId=blogId;
        this.getBlogDetail(blogId)
      }
      this.um = UM.getEditor('editor', {
        BaseUrl: '',
        UEDITOR_HOME_URL: '/static/umeditor1.2.3/',
        toolbars: [
          'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
          'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
          '| justifyleft justifycenter justifyright justifyjustify |',
          'link unlink | emotion image video | map',
          '| horizontal print preview ', 'drafts', 'formula'

        ],
        elementPathEnabled:false,
        wordCountMsg:'word number:{#count} ',
        initialFrameHeight:140,
        imagePopup:false,
        //serverUrl:"<c:url value='/cc/blog/uediterconfig.action'/>",
        autoHeightEnabled: true,//自动长高
        autoFloatEnabled: true,
        enableAutoSave:false,
        fullscreen:false
      });
    }
  }
</script>

<style>
  .page-content {
    min-width: 1080px !important;
    padding: 25px 20px 100px !important;
  }

  .page-content .tab {
    padding-bottom: 20px;
    border-bottom: 1px solid #e7ecf1 !important;
    margin-bottom: 12px;
  }

  .page-content .tab .list {
    float: left;
  }

  .page-content .tab .list a {
    font-size: 14px;
    color: #283644;
    letter-spacing: 0;
    line-height: 14px;
  }

  .page-content .tab .list .active {
    color: #99A9BF;
  }

  thead {
    background: #F9FAFC;
  }

  thead tr th {
    vertical-align: top;
  }

  tbody tr {
    background: #fff !important;
  }

  .edit_con {
    min-width: 1060px;
    margin: 50px auto;
    padding: 0 30px;
  }

  .edit_con .edit_con_top, .edit_con_bottom {
    width: 100%;
    background: #F9FAFC;
    padding: 0 30px;
    margin-bottom: 50px;
  }

  .edit_con_bottom {
    padding-bottom: 50px;
  }

  .top_tag, .bottom_tag {
    height: 50px;
    border-bottom: 1px solid #E6ECF2;
  }

  .main_tag, .secon_tag {
    font-size: 14px;
    line-height: 50px;
  }

  .main_tag {
    color: #283644;
  }

  .secon_tag {
    color: #c3c3c3;
  }

  .edit_con .edit_con_top .top_tab {
    padding: 50px 70px;
    font-size: 0;
  }

  .edit_con .edit_con_top .top_tab .top_list {
    margin-bottom: 26px;
    position: relative;
  }

  .edit_con .edit_con_top .top_tab .top_list:last-child {
    margin-bottom: 0;
  }

  .top_list_name, .bottom_list_name {
    display: inline-block;
    margin-right: 16px;
    width: 120px;
    font-size: 14px;
    color: #979BA1;
    text-align: -webkit-right;
    vertical-align: top;
  }

  .edit_con_top .top_tab .top_list .top_list_name b {
    margin-right: 10px;
    color: #FC3A3A;
    vertical-align: top;
  }

  .edit_con_top .top_tab .top_list .img_box {
    position: relative;
    display: inline-block;
    width: 330px;
    height: 183px;
    font-size: 14px;
    color: #4C9DFF;
    background: #fff;
    border: 1px dashed #4C9DFF;
    padding-top: 68px;
    text-align: center;
    cursor: pointer;
  }

  .edit_con_top .top_tab .top_list .img_box .fa-file-picture-o {
    display: block;
    margin: auto;
    margin-bottom: 14px;
    font-size: 20px;
    color: #4C9DFF;
  }

  .Notice {
    position: absolute;
    bottom: -20px;
    left: 124px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .notice{
    position: absolute;
    bottom: -20px;
    left: 140px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .notice1{
    position: absolute;
    bottom: -20px;
    right: 200px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .photo_con{
    display: inline-block;
    font-size: 0;
  }
  .photo_con .per_pic {
    width: 330px;
    height: 183px;
    display: inline-block;
  }

  .photo_con .rep_btn {
    position: relative;
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

  .top_list .ued {
    display: inline-block;
    width: 660px;
  }

  .edit_con_top .top_tab .top_list .edit_input, .edit_con_top .top_tab .top_list select, .edit_con_top .top_tab .top_list textarea {
    display: inline-block;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }

  .edit_con_top .top_tab .top_list .edit_input {
    width: 660px;
    height: 40px;
  }

  .edit_con_top .top_tab .top_list select {
    width: 240px;
    height: 40px;
  }

  .edit_con_top .top_tab .top_list textarea {
    width: 660px;
    height: 100px;
  }

  .pic-video_btn {
    margin-top: 15px;
    font-size: 0;
  }

  .pic-video_btn .pic_btn, .video_btn {
    position: relative;
    display: inline-block;
    margin-right: 16px;
    width: 40px;
    height: 40px;
    background: #fff;
    padding: 10px;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
    cursor: pointer;
  }

  .pic-video_btn .fa {
    font-size: 14px;
  }

  .bottom_tab .bottom_list {
    margin-bottom: 40px;
  }

  .bottom_tab .bottom_list:last-child {
    margin-bottom: 0;
  }

  .bottom_tab .bottom_list .bottom_tags_box, .input_table {
    margin: 30px 0 0 70px;
  }

  .bottom_tab .bottom_list .bottom_tags_box ol {
    display: inline-block;
    width: 660px;
    height: 127px;
    padding: 20px;
    background: #fff;
    overflow: auto;
  }

  .bottom_tags_box ol .checkList {
    float: left;
    width: 33%;
    margin-bottom: 14px;
    font-size: 0;
  }

  .bottom_tags_box ol .checkList .tags_check {
    display: inline-block;
    margin-right: 10px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .bottom_tags_box ol .checkList .checkName {
    display: inline-block;
    font-size: 14px;
    color: #979BA1;
    vertical-align: super;
  }

  .input_table .form-group {
    position: relative;
    margin-bottom: 26px;
  }

  .input_table .form-group:last-child {
    margin-bottom: 0;
  }

  .input_table .form-group .input660, .des_text, .input180, .input400 {
    display: inline-block;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }

  .input_table .form-group .input660 {
    width: 660px;
    height: 40px;
  }

  .input_table .form-group .input180 {
    margin-right: 32px;
    width: 180px;
    height: 40px;
  }

  .input_table .form-group .input400 {
    width: 400px;
    height: 40px;
  }

  .input_table .form-group .des_text {
    width: 660px;
    height: 70px;
  }

  .bottom_list_urlName {
    display: inline-block;
    margin-right: 16px;
    font-size: 14px;
    color: #979BA1;
    text-align: -webkit-right;
    vertical-align: top;
  }

  .edit_btns {
    width: 684px;
    margin: auto;
    font-size: 0;
  }

  .edit_btns .btn {
    display: inline-block;
    height: 44px;
    margin-right: 16px;
    border-radius: 2px !important;
  }

  .edit_btns .edit_btns_input {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    vertical-align: middle;
    cursor: pointer;
  }

  .edit_btns .check_tag {
    font-size: 14px;
    color: #283644;
    vertical-align: middle;
  }


  .width120 {
    width: 120px;
  }

  .buttons {
    text-align: center;
  }

  .buttons button {
    display: inline-block;
    margin-right: 16px;
    border-radius: 2px !important;
  }

  .buttons button:last-child {
    margin-right: 0;
  }
  .edui-container{
    z-index: inherit !important;
    box-shadow: none;
    border: 1px solid #E6ECF2 !important;
    border-radius: 4px !important;
  }
  .edui-container .edui-toolbar{
    box-shadow: none;
    border-bottom: 1px solid #E6ECF2 !important;
    z-index: inherit !important;
  }
  .editor_img,.editor_video{
    display: block;
    margin-bottom: 10px;
    width: 135px;
    height: 75px;
  }
  .editor_video{

  }

</style>
