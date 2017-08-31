<template>
  <div class="media" v-show="media_popup">
    <div class="mask"></div>
    <div class="popup">
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
  import '../common/css/reset.min.css'
  import '../common/css/media_popup.css'
  import interfaceStr from '../common/js/interfaceStr'
  export default{
    data(){
      return{
        media_popup:false,
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
        add_category_popup:false
      }
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
                  + '<img src="' + data.materialUrl + '" alt="' + data.altText + '" id="img" class="media_img">'/*'+reader.result+'*/
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
            $('.pic_list_radio').click(function () {
              //_this.img_checked.push(this.value)
              if(_this.flag===1){
                $(this).eq($(this).index()).attr('checked','checked').parent().siblings().children('input').removeAttr('checked');
                _this.avatar_url=$(this).siblings('img').attr('src');
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
          alert(111)
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
        var str='';
        $('.category_tab li').eq(0).addClass('active').siblings().removeClass('active');
        if(this.flag===1){
          this.avatar_start_file=false;
          this.photo_con=true;
        }else if(this.flag===2){
          for(var i=0;i<this.blog_img_urlArr.length;i++){
            var imgData=this.blog_img_urlArr[i]
            str+='<img src="' + imgData.url + '" alt="'+imgData.alt+' "class="editor_img">'
          }
        }else {
          for(var i=0;i<this.blog_video_urlArr.length;i++){
            var videoData=this.blog_video_urlArr[i]
            str+='<video src="' + videoData.url + '" alt="' + videoData.alt + '" class="editor_video" controls></video>'
          }
        }
        $('#editor').append(str)
        console.log($('#editor'))
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
    },
  }
</script>

<style scoped>

</style>
