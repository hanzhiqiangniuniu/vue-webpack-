<template>
  <div class="institute_info">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Institute&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="list.html">/ &nbspList</a>
            </li>
            <li class="list">
              <a :href="nameLink" class="active">&nbsp&nbsp/ &nbsp{{tabListName}}</a>
            </li>
          </ul>
          <div class="schoolCon">
            <!--tab按钮-->
            <ul class="schoolTab clear">
              <li class="schoolList active">Basic Information</li>
              <li class="schoolList">Media</li>
              <li class="schoolList">Related Info</li>
            </ul>
            <!--Basic Information content-->
            <div class="basic school_information_con" ref="basic">
              <button class="btn blue width120 edit" @click="school_infor_edit" v-show="school_infor_edit_button">Edit</button>
              <div class="information" v-show="informa_ber_edit">
                <ul class="informa_tab">
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Institute Name</span>
                    </div>
                    <span class="infordes">{{detailObj.instituteName}}</span>
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">IVisible Status</span>
                    </div>
                    <span class="infordes" v-if="detailObj.visible==='0'">Invisible</span>
                    <span class="infordes" v-else="detailObj.visible==='1'">Visible</span>
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Order No</span>
                    </div>
                    <span class="infordes">{{detailObj.orderNumber}}</span>
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Logo</span>
                    </div>
                    <img :src="logoObj.materialUrl" :alt="logoObj.altText">
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Starting Year</span>
                    </div>
                    <span class="infordes">{{detailObj.startYear}}</span>
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Scale</span>
                    </div>
                    <span class="infordes">{{detailObj.employeeScale}}</span>
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Website</span>
                    </div>
                    <span class="infordes">{{detailObj.website}}</span>
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Summary</span>
                    </div>
                    <p class="summary_des">
                      {{detailObj.title}}
                    </p>
                  </li>
                  <li class="informa_list">
                    <div class="name_box clear">
                      <span class="inforname">Introduction</span>
                    </div>
                    <p class="introduction_des">
                    </p>
                  </li>
                </ul>
              </div>
              <div class="informa_edit_box" v-show="informa_edit_box">
                <ul class="informa_edit_tab">
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Institute Name</span>
                      </div>
                    </div>
                    <input type="text" class="textInput form-control" v-model="ins_Name">
                    <span class="notice" v-show="nameNotice">Required</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Visible Status</span>
                      </div>
                    </div>
                    <div class="radio_box">
                      <input class="radioInput" type="radio" name="radio" value="1" v-model="radioArr" @click="radioClick"/>
                      <span class="radio_name">Visible</span>
                      <input class="radioInput" type="radio" name="radio" value="0" v-model="radioArr" @click="radioClick"/>
                      <span class="radio_name">Invisible</span>
                    </div>
                    <span class="notice" v-show="statusNotice">Required</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Order No</span>
                      </div>
                    </div>
                    <input type="text" class="textInput form-control" v-model="order">
                    <span class="notice" v-show="orderRe">Required</span>
                    <span class="notice" v-show="orderNu">Numeric type</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Logo</span>
                      </div>
                    </div>
                    <div class="img_box" @click="file_photo" v-if="avatar_start_file">
                      <!--<i class="fa fa-file-picture-o"></i>-->
                      + Upload Logo
                    </div>
                    <!--<p class="notice" v-show="notice">No pictures uploaded</p>-->
                    <div class="photo_con" v-if="photo_con">
                      <img :src="this.avatar_url" :alt="this.logoAlt" class="per_pic" :id="this.imgId">
                      <span class="rep_btn" @click="rep_file_photo">
                        <i class="fa fa-circle-o-notch"></i>
                        Replace
                      </span>
                    </div>
                    <span class="notice" v-show="photoNotice">Required</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Starting Year</span>
                      </div>
                    </div>
                    <div class="input-group date date-picker margin-bottom-5" data-date-format="dd-mm-yyyy" @click="clickDate">
                      <input type="text" class="form-control" readonly style="height: 40px; background: #fff;border: 1px solid #E6ECF2" id="start_Year">
                      <span class="input-group-btn">
                        <button class="btn default" type="button" style="height: 40px">
                          <i class="fa fa-calendar"></i>
                        </button>
                      </span>
                    </div>
                    <span class="notice" v-show="dateNotice">Required</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Scale</span>
                      </div>
                    </div>
                    <input type="text" class="textInput form-control" v-model="scaleVal">
                    <span class="notice" v-show="scaleRe">Required</span>
                    <span class="notice" v-show="scaleNu">Numeric type</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Website</span>
                      </div>
                    </div>
                    <input type="text" class="textInput form-control" value="" v-model="websiteVal">
                    <span class="notice" v-show="webNotice">Required</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Summary</span>
                      </div>
                    </div>
                    <textarea name="" id="textare" cols="30" rows="10" class="sumText form-control" v-model="titleVal"></textarea>
                    <span class="notice" v-show="summaryNotice">Required</span>
                  </li>
                  <li class="informa_edit_list clear">
                    <div class="list_left">
                      <div class="align">
                        <span class="redS">*&nbsp&nbsp</span>
                        <span class="list_left_name">Introduction</span>
                      </div>
                    </div>
                    <!--<div class="col-md-9">
                      <textarea class="wysihtml5 form-control" rows="6" name="editor1" data-error-container="#editor1_error"></textarea>
                      <div id="editor1_error"> </div>
                    </div>-->
                    <div class="ued">
                      <div id="editor" type="text/plain" @click="editorClick"></div>
                    </div>
                    <span class="notice" v-show="introNotice">Required</span>
                  </li>
                </ul>
              </div>
              <div class="buttons" v-show="infor_buttons" style="margin: 30px 0 40px 0">
                <button type="button" class="btn grey-salsa btn-outline width120" @click="infor_cancel">Cancel</button>
                <button type="submit" class="btn blue width120" @click="infor_confirm">Confirm</button>
              </div>
            </div>
            <!--Media content-->
            <div class="media-con school_information_con">
              <button class="btn blue width120 edit" @click="media_edit" v-show="media_edit_button">Edit</button>
              <div class="pic_box">
                <span class="upload_name">Pictures</span>
                <div class="none_box" v-show="pic_none_box">
                  <span class="none_con">Nothing</span>
                </div>
                <ul class="imgTab clear" id="pic_box" v-show="pic_have_box">
                  <li class="imgList clickList" @click="get_pic">
                    <span class="click_text">+ Upload Picture</span>
                    <span class="click_list_mask" v-show="click_imglist_mask"></span>
                  </li>
                  <li class="img_mask" v-show="img_mask"></li>
                </ul>
              </div>
              <div class="video_box">
                <span class="upload_name">Videos</span>
                <div class="none_box" v-show="video_none_box">
                  <span class="none_con">Nothing</span>
                </div>
                <ul class="videoTab clear" id="video_box" v-show="video_have_box">
                  <li class="videoList clickList"  @click="get_video">
                    <span class="click_text">+ Upload Videos</span>
                    <span class="click_list_mask" v-show="click_videolist_mask"></span>
                  </li>
                  <li class="img_mask" v-show="video_mask"></li>
                </ul>
              </div>
              <div class="buttons" v-show="media_buttons">
                <button type="button" class="btn grey-salsa btn-outline width120" @click="upload_cancel">Cancel</button>
                <button type="submit" class="btn blue width120" @click="upload_confirm">Confirm</button>
              </div>
            </div>
            <!--Related Info content-->
            <div class="info-con school_information_con">
              <div class="editBox clear" v-show="edit_btn_Box">
                <button class="btn blue width120 right_edit" style="float: right" @click="edit">Edit</button>
              </div>
              <div class="info_top" v-show="editBefore">
                <ul class="info_top_tab auto">
                  <li class="info_top_list" v-if="this.blogIdArr.length===0">
                    <div class="right_alignment clear">
                      <span class="info_top_name">Related Blog ID</span>
                    </div>
                    <p class="info_top_des">暂无</p>
                  </li>
                  <li class="info_top_list" v-else="this.blogIdArr.length!=0" v-for="blogId in this.blogIdArr">
                    <div class="right_alignment clear">
                      <span class="info_top_name">Related Blog ID</span>
                    </div>
                    <p class="info_top_des">{{blogId.blogId}}</p>
                  </li>
                </ul>
              </div>
              <div class="edit_start" v-show="edit_start">
                <div class="edit_content clear">
                  <div class="edit_content_left">
                    <span class="Required">*&nbsp&nbsp</span>
                    <span class="edit_content_left_name">Related Blog ID</span>
                  </div>
                  <div class="edit_content_right">
                    <ul class="edit_tab">
                      <!--<li class="edit_list" v-for="blogLidt in this.blogIdArr">
                        <input type="text" class="editInput" :value="blogLidt.blogId">
                        <div class="delete_box" @click="blogId_dele(blogLidt.blogId)">
                          <i class="el-icon-delete2"></i>
                        </div>
                      </li>-->
                    </ul>
                    <span class="addNew" @click="addNew">+ Add New</span>
                  </div>
                </div>
              </div>
              <div class="buttons" v-show="buttons" style="margin: 30px 0 40px 0">
                <button type="button" class="btn grey-salsa btn-outline width120" @click="Cancel">Cancel</button>
                <button type="submit" class="btn blue width120" @click="edit_confirm">Confirm</button>
              </div>
              <div class="info_bottom">
                <ul class="info_bottom_tab auto">
                  <li class="info_bottom_list">
                    <div class="right_alignment clear">
                      <span class="info_bottom_name">Related Customer</span>
                    </div>
                    <p class="info_bottom_des">励步英语-总部 励步英语-总部</p>
                  </li>
                  <li class="info_bottom_list">
                    <div class="right_alignment clear">
                      <span class="info_bottom_name">Related Requisition</span>
                    </div>
                    <p class="info_bottom_des">
                      ESL Teacher in First Leap English
                      ESL Teacher in First Leap English
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div class="dele_popup" v-show="dele_box">
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
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import '../../common/css/reset.min.css'
  import '../../common/css/media_popup.css'
  import interfaceStr from '../../common/js/interfaceStr'
  import nav from '../../components/nav.vue'
  import leftNav from '../../components/leftNav.vue'
  import '../../../static/umeditor1.2.3/lang/zh-cn/zh-cn'
  export default{
    data(){
      return{
        um: '',
        uedata: [],
        xierudata: [],

        mask: false,
        media_popup: false,
        dele_box:false,
        popup_tag_name: 'Add Picture',
        add_cate_mask:false,
        categoryArr: [],
        add_category_popup:false,
        categoryName:'',
        retype:'',
        cateNotice:false,
        notice_val:'Confirmation is not the same',
        progress:false,
        progress_number:0,
        group_name:'All',
        page_check_ids:[],
        page: 1,
        pageSize: 8,
        total:0,
        cateSele_val: 1,
        mediaType: 0,
        school_infor_edit_button:true,
        edit_btn_Box: true,
        informa_ber_edit: true,
        informa_edit_box:false,
        infor_buttons:false,
        editBefore: true,
        edit_start: false,
        buttons: false,
        todos: [''],
        newTodoText: '',
        detailObj:{},
        nameLink:'institute_info.html',
        tabListName:'Add New',
        pic_list_arr:[],
        radioArr:'',
        blog_img_urlArr:[],
        blog_video_urlArr:[],
        img_checked:[],
        avatar_start_file:true,
        notice: false,
        photo_con: false,
        logoAlt:'',
        ins_Name:'',
        order:'',
        avatar_url:'',
        scaleVal:'',
        imgId:'',
        websiteVal:'',
        titleVal:'',
        flag:'',
        checkFlag:false,
        ele:'',
        picIdArr:[],
        videoIdArr:[],
        imgArr:[],
        videoArr:[],
        blogIdArr:[],
        edit_input_val:[],
        startPicIds:[],
        startVideoIds:[],
        confirmPicIds:[],
        confirmVideoIds:[],
        logoObj:{},
        url_id:'',
        media_edit_button:true,
        pic_none_box:false,
        pic_have_box:true,
        video_none_box:false,
        video_have_box:true,
        media_buttons:false,

        click_imglist_mask:true,
        img_mask:true,
        click_videolist_mask:true,
        video_mask:true,

        nameNotice:false,
        statusNotice:false,
        orderRe:false,
        orderNu:false,
        photoNotice:false,
        dateNotice:false,
        scaleRe:false,
        scaleNu:false,
        webNotice:false,
        summaryNotice:false,
        introNotice:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav': leftNav,
    },
    methods:{
        //获取详情
      getDetail(id){
        var _this=this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/insititute/detail?access_token='+token+'&id='+id).then(function (res) {
          this.detailObj=res.body.resultObj;
          this.logoObj=res.body.resultObj.logo;
          this.tabListName=res.body.resultObj.instituteName;
          this.radioArr=res.body.resultObj.visible;
          this.imgArr=res.body.resultObj.imgs;
          if(this.imgArr.length===0){
            this.pic_none_box=true;
            this.pic_have_box=false;
          }else {
            this.pic_none_box=false;
            this.pic_have_box=true;
            $('#pic_box').children('.img_List').remove();
            this.bindImg(this.imgArr)
            for(var i=0;i<this.imgArr.length;i++){
              this.startPicIds.push(this.imgArr[i].id)
            }
          }

          this.videoArr=res.body.resultObj.videos;
          if(this.videoArr.length===0){
            this.video_none_box=true;
            this.video_have_box=false;
          }else {
            this.video_none_box=false;
            this.video_have_box=true;
            $('#video_box').children('.video_List').remove();
            this.bindVideo(this.videoArr);
            for(var i=0;i<this.videoArr.length;i++){
              this.startVideoIds.push(this.videoArr[i].id)
            }
          }

          this.blogIdArr=res.body.resultObj.instBlogIdList;
          if(this.blogIdArr.length!=0){
            $('.edit_tab').children().remove();
            var str2='';
            for(var i=0;i<this.blogIdArr.length;i++){
              var blogData=this.blogIdArr[i];
              str2+='<li class="edit_list">'
                +'<input type="text" class="editInput" value="'+blogData.blogId+'">'
                +'<div class="delete_box">'
                +'<i class="el-icon-delete2"></i>'
                +'</div>'
                +'</li>';
            }
            $('.edit_tab').append(str2);
            $('.delete_box').click(function () {
              _this.click_btn(this)
            })
          }

          $('.introduction_des').html(this.detailObj.introduction);

          this.ins_Name=res.body.resultObj.instituteName;
          this.radioArr=res.body.resultObj.visible;
          this.order=res.body.resultObj.orderNumber;
          this.avatar_start_file=false;
          this.photo_con=true;
          this.avatar_url=res.body.resultObj.logo.materialUrl;
          this.logoAlt=res.body.resultObj.logo.altText;
          this.imgId=res.body.resultObj.logo.id;
          this.scaleVal=res.body.resultObj.employeeScale;
          this.websiteVal=res.body.resultObj.website;
          this.titleVal=res.body.resultObj.title;
          this.um.setContent(res.body.resultObj.introduction);
          $('#start_Year').val(res.body.resultObj.startYear)
        })
      },
      //编辑详情
      editDetail(picIds,videoIds,blogIds){
          var _this=this;
        var token = $.cookie('token');
        var editor=this.um.getContent(),
          start_year=$('#start_Year').val();
        this.$http.post(interfaceStr+'cc/insititute/update',{'access_token':token,'instituteName':this.ins_Name,'visible':this.radioArr.toString(),'orderNumber':this.order,'logoMaterialId':this.imgId,'startYear':start_year,'employeeScale':this.scaleVal,'website':this.websiteVal,'title':this.titleVal,'introduction':editor,'id':this.url_id,'blogIds':blogIds.join(','),'imgIds':picIds.join(','),'videoIds':videoIds.join(',')},{emulateJSON:true}).then(function (res) {
          if(res.body.error_code===200){

            this.getDetail(this.url_id);
            this.picIdArr=[];
            this.videoIdArr=[];
            this.startPicIds=[];
            this.startVideoIds=[];
            this.edit_input_val=[];
            //window.location.href=window.location.href+'?id='+id;
          }
        })
      },
      //创建机构
      establishIns(picIds,videoIds,blogIds){
        var token = $.cookie('token');
         var editor=this.um.getContent(),
         start_year=$('#start_Year').val();
         if(this.url_id===undefined){
           this.url_id=''
         }
         this.$http.post(interfaceStr+'cc/insititute/create',{'access_token':token,'instituteName':this.ins_Name,'visible':this.radioArr.toString(),'orderNumber':this.order,'logoMaterialId':this.imgId,'startYear':start_year,'employeeScale':this.scaleVal,'website':this.websiteVal,'title':this.titleVal,'introduction':editor,'id':this.url_id,'blogIds':blogIds.join(','),'imgIds':picIds.join(','),'videoIds':videoIds.join(',')},{emulateJSON:true}).then(function (res) {
         if(res.body.error_code===200){
         var id=res.body.resultObj;
         this.getDetail(id);
         window.location.href=window.location.href+'?id='+id;
         this.school_infor_edit_button=true;
         this.informa_ber_edit=true;
         this.informa_edit_box=false;
         this.infor_buttons=false;
         this.$refs.basic.style.marginTop=80+'px';
         }
         })
      },
      focusFun(){
        $('.informa_edit_list').each(function (index, item) {
          $(item).find('input').focus(function () {
            $(this).parent().children('.notice').hide()
          })
          $(item).find('textarea').focus(function () {
            $(this).parent('li').children('.notice').hide()
          })
        })
      },
      radioClick(){
        this.statusNotice=false
      },
      clickDate(){
        this.dateNotice=false
      },
      editorClick(){
        this.introNotice=false
      },
      ifInputval(){
        var reg=/^\d+(\.\d+)?$/;
          if(this.ins_Name===''){
            this.nameNotice=true
          }
          if(this.radioArr===''){
            this.statusNotice=true
          }
          if(this.order===''){
            this.orderRe=true
          }else if(!reg.test(this.order)){
            this.orderNu=true
          }
          if(this.avatar_start_file===true){
            this.photoNotice=true
          }
          if($('#start_Year').val()===''){
            this.dateNotice=true
          }
          if(this.scaleVal===''){
            this.scaleRe=true
          }else if(!reg.test(this.scaleVal)){
            this.scaleNu=true
          }
          if(this.websiteVal===''){
            this.webNotice=true
          }
          if(this.titleVal===''){
            this.summaryNotice=true
          }
          if(this.um.getContent()===''){
            this.introNotice=true
          }
      },
      school_infor_edit(){
        this.school_infor_edit_button=false;
        this.informa_ber_edit=false;
        this.informa_edit_box=true;
        this.infor_buttons=true;
        this.$refs.basic.style.marginTop=50+'px';
      },
      infor_cancel(){
        this.school_infor_edit_button=true;
        this.informa_ber_edit=true;
        this.informa_edit_box=false;
        this.infor_buttons=false;
        this.$refs.basic.style.marginTop=80+'px'
      },
      infor_confirm(){
        if(this.url_id===undefined){
          var reg=/^\d+(\.\d+)?$/;
          if(this.ins_Name===''||this.radioArr===''||this.order===''||!reg.test(this.order)||this.avatar_start_file===true||$('#start_Year').val()===''||this.scaleVal===''||!reg.test(this.scaleVal)||this.websiteVal===''||this.titleVal===''||this.um.getContent()===''){
            this.ifInputval();
          }else {
            this.establishIns(this.startPicIds,this.startVideoIds,this.edit_input_val);
            this.school_infor_edit_button=true;
            this.informa_ber_edit=true;
            this.informa_edit_box=false;
            this.infor_buttons=false;
            this.$refs.basic.style.marginTop=80+'px';
          }
        }else {
          this.editDetail(this.startPicIds,this.startVideoIds,this.edit_input_val);
          this.school_infor_edit_button=true;
          this.informa_ber_edit=true;
          this.informa_edit_box=false;
          this.infor_buttons=false;
          this.$refs.basic.style.marginTop=80+'px';
        }
      },
      edit(){
        this.edit_btn_Box = false;
        this.editBefore = false;
        this.edit_start = true;
        this.buttons = true;
      },
      Cancel(){
        this.edit_btn_Box = true;
        this.editBefore = true;
        this.edit_start = false;
        this.buttons = false;
      },
      edit_confirm(){
        var _this=this;
        $('.edit_list').each(function(index,item){
          _this.edit_input_val.push($(item).children('input').val())
        });
        if(this.url_id===undefined){
          var reg=/^\d+(\.\d+)?$/;
          if(this.ins_Name===''||this.radioArr===''||this.order===''||!reg.test(this.order)||this.avatar_start_file===true||$('#start_Year').val()===''||this.scaleVal===''||!reg.test(this.scaleVal)||this.websiteVal===''||this.titleVal===''||this.um.getContent()===''){
            this.ifInputval();
            alert('Basic Information Incomplete')
          }else {
            this.establishIns(this.startPicIds,this.startVideoIds,_this.edit_input_val);
            this.edit_btn_Box = true;
            this.editBefore = true;
            this.edit_start = false;
            this.buttons = false;
          }
        }else {
          this.editDetail(this.startPicIds,this.startVideoIds,_this.edit_input_val);
          this.edit_btn_Box = true;
          this.editBefore = true;
          this.edit_start = false;
          this.buttons = false;
        }
        //this.editDetail(this.startPicIds,this.startVideoIds,_this.edit_input_val)

      },
      addNew(){
          var _this=this;
        var str='<li class="edit_list">'
         +'<input type="text" class="editInput">'
         +'<div class="delete_box">'
         +'<i class="el-icon-delete2"></i>'
         +'</div>'
         +'</li>';
         $('.edit_tab').append(str);
        $('.delete_box').click(function () {
          _this.click_btn(this)
        })
        //this.todos.push(this.newTodoText)
      },
      /*inputChange(){
       console.log(this.newTodoText)
       //this.newTodoText=
       }*/
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      upload_cancel(){
        if(this.url_id===undefined){
          this.establishIns(this.startPicIds,this.startVideoIds,this.edit_input_val)
        }else {
          this.editDetail(this.startPicIds,this.startVideoIds,this.edit_input_val);
        }
        this.media_edit_button=true;
        this.media_buttons=false;
        this.click_imglist_mask=true;
        this.img_mask=true;
        this.click_videolist_mask=true;
        this.video_mask=true
      },
      upload_confirm(){
          var _this=this;
        $('.img_List').each(function (index, item) {
         _this.picIdArr.push($(item).children('img').attr('indexid'));
         });
         $('.video_List').each(function (index, item) {
         _this.videoIdArr.push($(item).children('video').attr('indexid'));
         });
        if(this.url_id===undefined){
          var reg=/^\d+(\.\d+)?$/;
          if(this.ins_Name===''||this.radioArr===''||this.order===''||!reg.test(this.order)||this.avatar_start_file===true||$('#start_Year').val()===''||this.scaleVal===''||!reg.test(this.scaleVal)||this.websiteVal===''||this.titleVal===''||this.um.getContent()===''){
            this.ifInputval();
            alert('Basic Information Incomplete')
          }else {
            this.establishIns(_this.picIdArr,_this.videoIdArr,_this.edit_input_val)
            this.media_edit_button=true;
            this.media_buttons=false;
            this.click_imglist_mask=true;
            this.img_mask=true;
            this.click_videolist_mask=true;
            this.video_mask=true
          }
        }else {
          this.editDetail(_this.picIdArr,_this.videoIdArr,_this.edit_input_val);
          this.media_edit_button=true;
          this.media_buttons=false;
          this.click_imglist_mask=true;
          this.img_mask=true;
          this.click_videolist_mask=true;
          this.video_mask=true
        }
        //this.editDetail(_this.picIdArr,_this.videoIdArr,_this.edit_input_val);

      },
      media_edit(){
        this.pic_none_box=false;
        this.pic_have_box=true;
        this.video_none_box=false;
        this.video_have_box=true;
        this.media_edit_button=false;
        this.media_buttons=true;
        this.click_imglist_mask=false;
        this.img_mask=false;
        this.click_videolist_mask=false;
        this.video_mask=false
      },
     /*blogId_dele(id){
          console.log($('#'+id+'').parent())
        $('#'+id+'').parent().remove()
      },*/
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
                  + '<img src="' + data.materialUrl + '" alt="' + data.altText + '" class="media_img" indexId="' + data.id + '">'/*'+reader.result+'*/
                  + '<span class="img_name">' + data.title + '</span>'
                  + '</li>';
              } else {
                str += '<li class="media_inner_list">'
                  + '<input type="checkbox" name="pic_list_radio" class="pic_list_radio" v-model="' + _this.img_checked + '" value="' + data.id + '">'
                  + '<video src="' + data.materialUrl + '" alt="' + data.altText + '" class="pic_list_video" controls indexId="' + data.id + '"></video>'/*'+reader.result+'*/
                  + '<span class="img_name">' + data.title + '</span>'
                  + '</li>';
              }
            }
            $('.media_inner_tab').html(str);
            $('.pic_list_radio').click(function () {
              if ($(this).attr('checked')===undefined) {
                $(this).attr('checked','checked')
                if(_this.flag===1){
                  $(this).eq($(this).index()).attr('checked','checked').parent().siblings().children('input').removeAttr('checked');
                  _this.avatar_url=$(this).siblings('img').attr('src');
                  _this.logoAlt=$(this).siblings('img').attr('alt');
                  _this.imgId=$(this).siblings('img').attr('indexId');
                }else if(_this.flag===2) {
                  _this.blog_img_urlArr.push({
                    'materialUrl':$(this).siblings('img').attr('src'),
                    'altText':$(this).siblings('img').attr('alt'),
                    'id':$(this).siblings('img').attr('indexId'),
                  });
                  console.log(_this.blog_img_urlArr)
                }else {
                  _this.blog_video_urlArr.push({
                    'materialUrl':$(this).siblings('video').attr('src'),
                    'altText':$(this).siblings('video').attr('alt'),
                    'id':$(this).siblings('video').attr('indexId'),
                  })
                }
              }else {
                $(this).removeAttr('checked');
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
        this.mask = false;
        this.media_popup = false;
        this.add_category_popup=false;
        this.add_cate_mask=false;
        this.cateNotice=false;
        $('.category_tab li').eq(0).addClass('active').siblings().removeClass('active');
      },
      //绑定选中图片
      bindImg(arr){
        var _this=this,
        str = '';
        for(var i=0;i<arr.length;i++){
          var imgData=arr[i];
          //this.picIdArr.push(imgData.id);
          str+='<li class="img_List">'
            + '<img src="' + imgData.materialUrl + '" alt="' + imgData.altText + '" class="upload_img" indexid="'+imgData.id+'">'
            + '<span class="dele_mask"><i class="el-icon-delete2"></i>Delete</span>'
            +'</li>';
        }
        $('#pic_box').prepend(str);
        $('.dele_mask').click(function () {
          _this.click_btn(this)
        })
      },
      //绑定选中视频
      bindVideo(videoArr){
        var _this=this,
          str = '';
        for(var i=0;i<videoArr.length;i++){
          var videoData=videoArr[i];
          //this.videoIdArr.push(videoData.id);
          str+='<li class="video_List">'
            +'<video src="' + videoData.materialUrl + '" alt="' + videoData.altText + '" class="upload_video" indexid="'+videoData.id+'"></video>'
            + '<span class="dele_mask"><i class="el-icon-delete2"></i>Delete</span>'
            +'</li>';
        }
        $('#video_box').prepend(str);
        $('.dele_mask').click(function () {
          _this.click_btn(this)
        })
      },
      //媒体库弹窗确认选定
      media_confirm(){
        var _this=this;
        this.mask = false;
        this.media_popup = false;
        $('.category_tab li').eq(0).addClass('active').siblings().removeClass('active');
        if(this.flag===1){
          this.avatar_start_file=false;
          this.photo_con=true;
        }else if(this.flag===2){
          this.bindImg(this.blog_img_urlArr)
          for(var i=0;i<this.blog_img_urlArr.length;i++){
            this.confirmPicIds.push(this.blog_img_urlArr[i].id)
          }
        }else {
          this.bindVideo(this.blog_video_urlArr)
          for(var i=0;i<this.blog_video_urlArr.length;i++){
            this.confirmVideoIds.push(this.blog_video_urlArr[i].id)
          }
        }
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
      //blog 首图上传按钮
      file_photo(){
        this.flag=1;
        this.head_upload_pic();
        this.photoNotice=false;
      },
      //blog 首图更新按钮
      rep_file_photo(){
        this.flag=1;
        this.head_upload_pic();
      },
      get_pic(){
        var type = 0;
        this.mediaType = 0;
        //this.cateSele_val = 1;
        this.popup_tag_name = 'Add Picture';
        this.get_cate(type);
        this.mask = true;
        this.media_popup = true;
        this.blog_img_urlArr=[];
        this.picIdArr=[];
        this.flag=2;
        this.pageMaterial(this.page, this.pageSize, this.cateSele_val, this.mediaType)
      },
      get_video(){
        var type = 1;
        this.mediaType = 1;
        this.cateSele_val = 3;
        this.get_cate(type);
        this.popup_tag_name = 'Add Video';
        this.mask = true;
        this.media_popup = true;
        this.blog_video_urlArr=[];
        this.videoIdArr=[];
        this.flag=3;
        this.pageMaterial(this.page, this.pageSize, this.cateSele_val, this.mediaType)
      },
      //点击删除遮罩层
      click_btn(ele){
        this.mask=true;
        this.dele_box=true;
        this.ele=ele
      },
      dele_cancel(){
        this.mask=false;
        this.dele_box=false;
      },
      dele_confirm(){
        this.mask=false;
        this.dele_box=false;
        $(this.ele).parent().remove()
      },
    },

    mounted(){
        this.focusFun()
      $('.schoolTab li').click(function () {
        $('.schoolTab li').eq($(this).index()).addClass("active").siblings().removeClass('active');
        $(".school_information_con").hide().eq($(this).index()).show();
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
      var instituteId=window.location.href.queryURLParameter()["id"];
      this.url_id=instituteId;
      if(instituteId===undefined){
        this.tabListName='Add New';
        this.nameLink='institute_info.html';
        this.school_infor_edit();
        //return false
      }else {
        this.nameLink='institute_info.html?id='+instituteId+'';
        this.getDetail(instituteId)
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
        autoHeightEnabled: false,//自动长高
        autoFloatEnabled: true,
        enableAutoSave:false,
        fullscreen:false
      });
    }
  }
</script>

<style>
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
  @media (min-width: 992px) {
    .page-content-wrapper .page-content{
      padding: 75px 20px 10px !important;
    }
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
  .page-header-fixed .page-container {
    margin-top: 0 !important;
    padding-top: 50px;
  }
  thead {
    background: #F9FAFC;
  }
  .userInput {
    width: 80%;
    display: block;
    margin: auto;
  }
  tbody tr td {
    vertical-align: inherit !important;
  }
  .schoolCon {
    max-width: 1000px;
    margin-left: 100px;
  }
  .schoolCon .schoolTab {
    width: 100%;
    border-bottom: 1px solid #E6ECF2;
  }
  .schoolCon .schoolTab .schoolList {
    float: left;
    padding: 12px 15px;
    font-size: 14px;
    color: #8492A6;
    margin-right: 15px;
    cursor: pointer;
  }
  .schoolCon .schoolTab .active {
    color: #4C9DFF;
    border-bottom: 3px solid #4C9DFF;
  }
  .schoolCon .schoolTab .schoolList:last-child {
    margin-right: 0;
  }
  .basic {
    position: relative;
    margin-top: 84px;
  }
  .basic .edit {
    position: absolute;
    top: -54px;
    right: 0;
  }
  .media-con .edit{
    position: absolute;
    top: -54px;
    right: 0;
  }
  .information {
    padding: 50px 0;
    width: 100%;
    background: #F9FAFC;;
  }
  .information .informa_tab {
    width: 500px;
    margin: auto;
  }
  .information .informa_tab .informa_list {
    margin-bottom: 12px;
    font-size: 0;
  }
  .information .informa_tab .informa_list:last-child {
    margin-bottom: 0;
  }
  .information .informa_tab .informa_list .name_box {
    width: 100px;
    margin-right: 30px;
    display: inline-block;
    vertical-align: top;
  }
  .informa_tab .informa_list img {
    display: inline-block;
    width: 200px;
    height: 75px;
  }
  .informa_tab .informa_list .inforname {
    float: right;
    color: #979BA1;
    font-size: 14px;
    line-height: 24px;
  }
  .informa_tab .informa_list .infordes {
    display: inline-block;
    color: #283644;
    line-height: 24px;
    font-size: 14px;
  }
  .informa_tab .informa_list .summary_des, .introduction_des {
    width: 370px;
    display: inline-block;
    line-height: 24px;
    font-size: 14px;
    color: #283644;
  }
  .informa_edit_box {
    padding: 50px 0;
    background: #F9FAFC;
  }
  .informa_edit_tab {
    width: 500px;
    margin: auto;
  }
  .informa_edit_box .informa_edit_list {
    position: relative;
    margin-bottom: 26px;
    font-size: 0;
  }
  .informa_edit_box .informa_edit_list .list_left {
    float: left;
    margin-right: 16px;
    width: 120px;
  }
  .informa_edit_list .list_left .align {
    float: right;
  }
  .informa_edit_list .list_left .align .redS, .list_left_name {
    font-size: 14px;
  }
  .informa_edit_list .list_left .align .redS {
    color: #FC3A3A;
    vertical-align: sub;
  }
  .informa_edit_list .list_left .align .list_left_name {
    color: #979BA1;
  }
  .informa_edit_box .informa_edit_list .textInput {
    float: left;
    width: 360px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
  }
  .informa_edit_box .informa_edit_list .radio_box {
    float: left;
  }
  .informa_edit_box .informa_edit_list .radio_box .radioInput {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .informa_edit_box .informa_edit_list .radio_box .radio_name {
    margin: 0 68px 0 10px;
    font-size: 14px;
    color: #283644;
  }
  .informa_edit_box .informa_edit_list .sumText {
    float: left;
    width: 360px;
    height: 80px;
    border: 1px solid #E6ECF2;
  }
  .input-medium {
    width: 360px !important;
  }
  .informa_edit_box .informa_edit_list .ued {
    float: left;
    width: 360px;
  }
  .informa_edit_list .img_box {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 75px;
    line-height: 75px;
    font-size: 14px;
    color: #4C9DFF;
    background: #fff;
    border: 1px dashed #4C9DFF;
    text-align: center;
    cursor: pointer;
  }
  .informa_edit_list .img_box .fa-file-picture-o {
    display: block;
    margin: auto;
    margin-bottom: 14px;
    font-size: 20px;
    color: #4C9DFF;
  }
  .notice{
    position: absolute;
    bottom: -20px;
    left: 137px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .photo_con{
    display: inline-block;
    font-size: 0;
  }
  .photo_con .per_pic {
    width: 200px;
    height: 75px;
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
  .media-con {
    position: relative;
    display: none;
  }
  .pic_box{
    margin:84px 0 40px;
    background: #F9FAFC;
  }
  .video_box{
    background: #F9FAFC;
    margin-bottom: 40px;
  }
  .pic_box .upload_name,.video_box .upload_name{
    padding-left: 20px;
    display: block;
    font-size: 14px;
    color: #283644;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #E6ECF2;
  }
  .imgTab,.videoTab,.none_box{
    position: relative;
    padding: 30px 0;
  }
  .imgTab .img_mask,.videoTab .img_mask{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: transparent;
  }
  .none_box .none_con{
    margin-left: 20px;
    display: block;
    width: 200px;
    height: 75px;
    background: #FFFFFF;
    border: 1px dashed #ccc;
    line-height: 75px;
    text-align: center;
    border-radius: 2px !important;
    font-size: 24px;
    color: #CCCCCC;
  }
  .clickList{
    position: relative;
    float: left;
    margin: 0 0 20px 20px ;
    width: 200px;
    height: 75px;
    background: #FFFFFF;
    border: 1px dashed #4C9DFF;
    border-radius: 2px !important;
    text-align: center;
    cursor: pointer;
  }
  .clickList .click_list_mask{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
  }
  .click_text{
    font-size: 14px;
    color: #4C9DFF;
    line-height: 75px;
  }
  .img_List,.video_List{
    position: relative;
    margin: 0 0 20px 20px ;
    float: left;
    width: 200px;
    height: 75px;
    background: #fff;
    cursor: pointer;
  }

  .img_List .upload_img{
    width: 100%;
    height: 100%;
  }
  .video_List .upload_video{
    width: 100%;
    height: 100%;
  }
  .dele_mask{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:0;
    line-height: 75px;
    text-align: center;
    background: rgba(0,0,0,.7);
    font-size: 14px;
    color: transparent;
    transition: height .5s;
  }
  .dele_mask .el-icon-delete2{
    margin-right: 10px;
    font-size: 24px;
  }
  .img_List:hover .dele_mask{
     height: 75px;
    color: #FFFFFF;
  }
  .video_List:hover .dele_mask{
    height: 75px;
    color: #FFFFFF;
  }
  .info-con {
    display: none;
  }

  .editBox {
    width: 100%;
    padding: 20px 0;
  }

  .editBox .right_edit {
    float: right;
  }

  .info_top, .info_bottom {
    background: #F9FAFC;
    padding: 50px 0;
  }

  .info_top {
    margin-bottom: 40px;
  }

  .auto {
    width: 500px;
    margin: auto;
  }

  .info_top_tab .info_top_list, .info_bottom_tab .info_bottom_list {
    margin-bottom: 12px;
  }

  .info_top_tab .info_top_list, .info_bottom_tab .info_bottom_list:last-child {
    margin-bottom: 0;
  }

  .right_alignment {
    display: inline-block;
    width: 155px;
    vertical-align: top;
    margin-top: 1px;
  }

  .right_alignment .info_top_name, .info_bottom_name {
    margin-right: 30px;
    float: right;
    font-size: 14px;
    color: #979BA1;
  }

  .info_top_list .info_top_des, .info_bottom_list .info_bottom_des {
    display: inline-block;
    width: 315px;
    font-size: 14px;
    color: #283644;
    line-height: 24px;
  }

  .edit_start {
    background: #F9FAFC;
    padding: 50px 0;
    margin-top: 50px;
  }

  .edit_start .edit_content {
    width: 550px;
    margin: auto;
  }

  .edit_start .edit_content .edit_content_left {
    float: left;
  }

  .edit_start .edit_content .edit_content_left .Required, .edit_content_left_name {
    font-size: 14px;
  }

  .edit_start .edit_content .edit_content_left .Required {
    color: #FC3A3A;
  }

  .edit_start .edit_content .edit_content_left .edit_content_left_name {
    color: #979BA1;
  }

  .edit_content_right {
    margin-left: 16px;
    float: left;
  }

  .edit_content_right .edit_tab {
  }

  .edit_content_right .edit_tab .edit_list {
    margin-bottom: 26px;
  }

  .edit_content_right .edit_tab .edit_list .editInput {
    width: 360px;
    height: 40px;
    display: inline-block;
    border: 1px solid #E6ECF2 !important;
    border-radius: 4px;
    margin-right: 16px;
    font-size: 14px;
    color: #283644;
    padding: 0 16px;
  }

  .edit_tab .edit_list .delete_box {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #fff;
    text-align: center;
    vertical-align: bottom;
    line-height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
    cursor: pointer;
  }

  .edit_content_right .addNew {
    display: block;
    width: 360px;
    height: 40px;
    line-height: 40px;
    border: 2px dashed #4C9DFF;
    border-radius: 4px;
    font-size: 14px;
    color: #4C9DFF;
    text-align: center;
    cursor: pointer;
  }
  .dele_popup{
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
  .dele_popup .popup_top_tag{
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
  .dele_popup .popup_top_tag .icon-close{
    position: absolute;
    right: 10px;
    top: 24px;
    font-size: 24px;
    color: #CCCDCE;
    cursor: pointer;
  }
  .dele_popup .popup_top_tag .icon-close:hover{
    color: #283644;
  }

  .dele_popup .dele_con .dele_con_tag{
    margin: 92px 0;
    text-align: center;
    font-size: 16px;
    color: #283644;
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
  .width120 {
    width: 120px;
  }
  .Notice {
    position: absolute;
    bottom: -20px;
    left: 124px;
    font-size: 12px;
    color: #FC3A3A;
  }
</style>
