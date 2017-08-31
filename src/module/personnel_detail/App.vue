<template>
  <div class="per_detail">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Candidate&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="candidate_list.html">/ &nbspList&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="personnel_detail.html" class="active">/ &nbspSteve Jobs</a>
            </li>
          </ul>
          <div class="per_content clear">
            <!--person详情页面左部分-->
            <div class="per_left_con">
              <ul class="option_tab clear">
                <li class="option_list active">Detail Information</li>
                <li class="option_list">Application</li>
                <li class="option_list">Visa Information</li>
              </ul>
              <div class="info_box divBox">
                <ul class="information_tab">
                  <li class="information_list">
                    <h3>Personal Info</h3>
                    <ol class="info_tab">
                      <li class="list_col">
                        <span class="col_tag">First Name</span>
                        <p class="col_des">Steve</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Last Name</span>
                        <p class="col_des">Jobs</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Email</span>
                        <p class="col_des">steve.jobs@careerchina.com</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Address</span>
                        <p class="col_des">1300 Crossing place, Austin, Texas, 7289</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Cell phone</span>
                        <p class="col_des">123456</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Nationality</span>
                        <p class="col_des">United States</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Birthday</span>
                        <p class="col_des">1990-1-1</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Age</span>
                        <p class="col_des">22</p>
                      </li>
                    </ol>
                  </li>
                  <li class="information_list">
                    <h3>Work History</h3>
                    <ol class="experience_tab">
                      <li class="list_col">
                        <span class="col_tag">Time</span>
                        <p class="col_des">Feb 2016 ~ Feb 2017</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Company Name</span>
                        <p class="col_des">Turner Broadcasting System</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Title</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                    </ol>
                    <ol class="experience_tab">
                      <li class="list_col">
                        <span class="col_tag">Time</span>
                        <p class="col_des">Feb 2016 ~ Feb 2017</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Company Name</span>
                        <p class="col_des">Turner Broadcasting System</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Title</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                    </ol>
                    <ol class="experience_tab">
                      <li class="list_col">
                        <span class="col_tag">Time</span>
                        <p class="col_des">Feb 2016 ~ Feb 2017</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Company Name</span>
                        <p class="col_des">Turner Broadcasting System</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Title</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                    </ol>
                  </li>
                  <li class="information_list">
                    <h3>Education History</h3>
                    <ol class="experience_tab">
                      <li class="list_col">
                        <span class="col_tag">Time</span>
                        <p class="col_des">Feb 2016 ~ Feb 2017</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">College Name</span>
                        <p class="col_des">Turner Broadcasting System</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Major</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Degree Name</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Degree Type</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                    </ol>
                    <ol class="experience_tab">
                      <li class="list_col">
                        <span class="col_tag">Time</span>
                        <p class="col_des">Feb 2016 ~ Feb 2017</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">College Name</span>
                        <p class="col_des">Turner Broadcasting System</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Major</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Degree Name</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                      <li class="list_col">
                        <span class="col_tag">Degree Type</span>
                        <p class="col_des">Digital Media Coordinator Digital Media Coordinator aa</p>
                      </li>
                    </ol>
                  </li>
                  <li class="information_list">
                    <h3>Ratings</h3>
                    <div class="rate_box clear">
                      <ol class="star_rate_tab">
                        <li class="list_col">
                          <span class="col_tag">Ability1</span>
                          <el-rate
                            v-model="value1"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}">
                          </el-rate>
                        </li>
                        <li class="list_col">
                          <span class="col_tag">Ability133333</span>
                          <el-rate
                            v-model="value2"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}">
                          </el-rate>
                        </li>
                        <li class="list_col">
                          <span class="col_tag">Abilit3333</span>
                          <el-rate
                            v-model="value3"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}">
                          </el-rate>
                        </li>
                        <li class="list_col">
                          <span class="col_tag">Abiliwwww</span>
                          <el-rate
                            v-model="value4"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}">
                          </el-rate>
                        </li>
                        <li class="list_col">
                          <span class="col_tag">Ability999</span>
                          <el-rate
                            v-model="value5"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}">
                          </el-rate>
                        </li>
                      </ol>
                      <el-progress type="circle" :percentage="25" default></el-progress>
                    </div>
                  </li>
                  <li class="information_list">
                    <h3>Comments</h3>
                    <p class="comments_des">
                      Digital Media Coordinator Digital Media Coordinator, Digital Media
                      Digital Media Coordinator Digital Media Coordinator, Digital Media
                      Digital Media Coordinator Digital Media Coordinator, Digital Media
                      Digital Media Coordinator Digital Media Coordinator, Digital Media
                      Digital Media Coordinator Digital Media Coordinator, Digital Media
                      Digital Media Coordinator Digital Media Coordinator, Digital Media
                    </p>
                  </li>
                </ul>
              </div>
              <div class="application_box divBox">
                <div class="table-container clear">
                  <div class="action clear">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="page"
                      :page-sizes="[5, 10, 15, 20]"
                      :page-size="10"
                      layout="total, sizes, prev, pager, next"
                      :total="100">
                    </el-pagination>
                  </div>
                  <table class="table table-striped table-bordered table-hover table-checkable">
                    <thead>
                    <tr role="row" class="heading">
                      <th width="18%">Requisition</th>
                      <th width="28%">Title</th>
                      <th width="17%">Source</th>
                      <th width="17%">Current Workflow</th>
                      <th width="20%">Submite Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    <tr>
                      <td>MT10000</td>
                      <td>ESL Teacher in Meten</td>
                      <td>Facebook</td>
                      <td>New</td>
                      <td>2017/4/12 16:34</td>
                    </tr>
                    </tbody>
                  </table>
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next"
                    :total="100">
                  </el-pagination>
                </div>
              </div>
              <div class="visa_info_box divBox"></div>
            </div>
            <div class="per_right_con">
              <div class="top_tag clear">
                <span class="top_title">Talent Pool</span>
                <button type="button" class="btn blue width60" v-show="mater_edit" @click="editMater">Edit</button>
              </div>
              <div class="none_box" v-show="none_box">
                <img src="../../common/img/icon-empty.png" alt="" class="none_img">
                <p class="none_des">
                  This candidate has not been put into talent pool.
                  If you want to add the candidate to the talent pool, please click “Edit”                    button.
                </p>
              </div>
              <div class="add_material" v-show="material_con">
                <ul class="add_tab">
                  <li class="add_list">
                    <span class="add_list_tag">
                      <b>*</b>
                     Photo
                    </span>
                    <span class="upload_btn" v-if="upload_btn">
                      + Upload Photo
                      <input type="file" class="upload_file" ref="photo_file" id="upload_photo" @change="upload_photo">
                    </span>
                    <p class="Notice" v-show="notice">未上传头像</p>
                    <div class="photo_con" v-if="photo_con">
                      <img :src="this.imgUrl" alt="" class="per_pic">
                      <span class="rep_btn">
                        <i class="fa fa-circle-o-notch"></i>
                        Replace
                        <input type="file" class="upload_file" ref="rep_photo_file" @change="rep_photo">
                      </span>
                    </div>
                  </li>
                  <li class="add_list">
                    <span class="add_list_tag">Video</span>
                    <ul class="video_tab">
                    </ul>
                    <span class="upload_btn">
                      + Upload Video
                      <input type="file" class="upload_file" ref="video_file" @change="upload_video">
                    </span>
                  </li>
                  <li class="add_list">
                    <span class="add_list_tag">Attachment</span>
                    <ul class="attach_tab">
                    </ul>
                    <span class="upload_btn">
                      + Upload Attachment
                      <input type="file" class="upload_file" ref="attach_file" @change="upload_attach">
                    </span>
                  </li>
                  <li class="add_list">
                    <span class="add_list_tag">Work History</span>
                    <ol class="work_tab">
                      <li class="work_list">
                        <span class="work_his_name">Company Name</span>
                        <p class="work_list_des">Turner Broadcasting System</p>
                      </li>
                      <li class="work_list">
                        <span class="work_his_name">Position</span>
                        <p class="work_list_des">Turner Broadcasting System</p>
                      </li>
                      <li class="work_list">
                        <span class="work_his_name">Period</span>
                        <p class="work_list_des">2017/04/12～2017/07/25</p>
                      </li>
                      <li class="work_list">
                        <span class="work_his_name">Detail</span>
                        <p class="work_list_des">
                          Digital Media Coordinator Digital Media
                          Coordinator Digital Media Coordinator Digital
                          Media Coordinator
                        </p>
                      </li>
                    </ol>
                    <div class="work_con">
                      <div class="con_list">
                        <i class="icon-close"></i>
                        <div class="list-group">
                          <label>Company Name<b>*</b></label>
                          <input type="text" class="form-control textInput">
                        </div>
                        <div class="list-group">
                          <label>Position<b>*</b></label>
                          <input type="text" class="form-control textInput">
                        </div>
                        <div class="list-group">
                          <label>Period<b>*</b></label>
                          <div class="input-group date date-picker startBox" data-date-format="yyyy/mm/dd">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from" placeholder="From" id="created_start">
                            <span class="input-group-btn dateBtn">
                                <button class="btn btn-sm default" type="button">
                                  <i class="fa fa-calendar"></i>
                                </button>
                            </span>
                          </div>
                          <div class="input-group date date-picker" data-date-format="yyyy/mm/dd">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_to" placeholder="To" id="created_end">
                            <span class="input-group-btn dateBtn">
                                <button class="btn btn-sm default" type="button">
                                 <i class="fa fa-calendar"></i>
                                </button>
                            </span>
                          </div>
                        </div>
                        <div class="list-group">
                          <label>Detail<b>*</b></label>
                          <div class="edui_box">
                            <div id="editor1" type="text/plain" @click=""></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span class="upload_btn">
                      + Add Work History
                    </span>
                  </li>
                  <li class="add_list">
                    <span class="add_list_tag">Education History</span>
                    <ol class="work_tab">
                      <li class="work_list">
                        <span class="work_his_name">Company Name</span>
                        <p class="work_list_des">Turner Broadcasting System</p>
                      </li>
                      <li class="work_list">
                        <span class="work_his_name">Position</span>
                        <p class="work_list_des">Turner Broadcasting System</p>
                      </li>
                      <li class="work_list">
                        <span class="work_his_name">Period</span>
                        <p class="work_list_des">2017/04/12～2017/07/25</p>
                      </li>
                      <li class="work_list">
                        <span class="work_his_name">Detail</span>
                        <p class="work_list_des">
                          Digital Media Coordinator Digital Media
                          Coordinator Digital Media Coordinator Digital
                          Media Coordinator
                        </p>
                      </li>
                    </ol>
                    <div class="edu_con">
                      <div class="con_list">
                        <i class="icon-close"></i>
                        <div class="list-group">
                          <label>School Name<b>*</b></label>
                          <input type="text" class="form-control textInput">
                        </div>
                        <div class="list-group">
                          <label>Degree<b>*</b></label>
                          <input type="text" class="form-control textInput">
                        </div>
                        <div class="list-group">
                          <label>Period<b>*</b></label>
                          <div class="input-group date date-picker startBox" data-date-format="yyyy/mm/dd">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from" placeholder="From" id="created_start1">
                            <span class="input-group-btn dateBtn">
                                <button class="btn btn-sm default" type="button">
                                  <i class="fa fa-calendar"></i>
                                </button>
                            </span>
                          </div>
                          <div class="input-group date date-picker" data-date-format="yyyy/mm/dd">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_to" placeholder="To" id="created_end1">
                            <span class="input-group-btn dateBtn">
                                <button class="btn btn-sm default" type="button">
                                 <i class="fa fa-calendar"></i>
                                </button>
                            </span>
                          </div>
                        </div>
                        <div class="list-group">
                          <label>Detail<b>*</b></label>
                          <div class="edui_box">
                            <div id="editor2" type="text/plain" @click=""></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span class="upload_btn">
                      + Add Education History
                    </span>
                  </li>
                  <li class="add_list">
                    <span class="add_list_tag">Personal Statement</span>
                    <div class="edui_box">
                      <div id="editor" type="text/plain" @click=""></div>
                    </div>
                    <!--<div class="history_con">
                    </div>-->
                  </li>
                </ul>
                <div class="buttons">
                  <button type="button" class="btn grey-salsa btn-outline width120" @click="mater_cancel">Cancel
                  </button>
                  <span class="btn blue width120" @click="mater_confirm">Confirm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../common/css/reset.min.css'
  import nav from '../../components/nav.vue'
  import leftNav from '../../components/leftNav.vue'
  import '../../../static/umeditor1.2.3/lang/zh-cn/zh-cn'
  export default{
    data(){
      return {
        um: '',
        uedata: [],
        xierudata: [],

        value1: 2.7,
        value2: 3.7,
        value3: 4,
        value4: 5,
        value5: 4.5,
        page: 1,
        mater_edit: true,
        none_box: true,
        material_con: false,
        imgUrl: '',
        upload_btn: true,
        photo_con: false,
        notice: false,
        videoUrl: '',
        notice_title: false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav': leftNav,
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //编辑上传图片、视频、文件按钮
      editMater(){
        this.mater_edit = false;
        this.none_box = false;
        this.material_con = true;
      },
      //编辑取消按钮
      mater_cancel(){
        this.mater_edit = true;
        this.none_box = true;
        this.material_con = false;
      },
      //编辑保存按钮
      mater_confirm(){
        //console.log(this.$refs.photo_file.files[0])
        if (this.upload_btn === true) {
          this.notice = true;
        } else {
          this.notice = false;
        }
        $('.video_list input').each(function (index, item) {
          if ($(item).val() === '') {
            $(item).siblings('p').show()
          } else {
            $(item).siblings('p').hide()
          }
        })
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
      //上传图片
      readPic(file){
        this.imgUrl = this.getObjectURL(file);
      },

      //上传视频
      readVideo(file){
        var str = '';
        this.videoUrl = this.getObjectURL(file);
        console.log(this.videoUrl)
        str += '<li class="video_list">'
          + '<i class="close_box icon-close"></i>'
          + '<video src="' + this.videoUrl + '" controls class="myVideo"></video>'
          + '<input type="text" class="video_input form-control" placeholder="Write a title...">'
          + '<p class="Notice" style="display: none">未填写视频title</p>'
          + '</li>';
        $('.video_tab').prepend(str);
        $('.close_box').click(function () {
          $(this).parent().remove()
        });
        $('.video_input').focus(function () {
          $(this).siblings('p').hide();
        })
      },
      //上传材料
      readAttach(file){
        var str = '';
        //this.videoUrl=this.getObjectURL(file);
        console.log(file.name)
        str += '<li class="attach_list">'
          + '<i class="close_box icon-close"></i>'
          + '<span class="metar_name" title="' + file.name + '">'
          + '<i class="fa fa-folder"></i>'
          + '' + file.name + ''
          + '</span>'
          + '</li>';
        $('.attach_tab').prepend(str);
        $('.close_box').click(function () {
          $(this).parent().remove()
        });
      },
      //上传文件判断格式、大小
      photo_file(file, maxSize){
        if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name)) {
          alert('请上传JPG、PNG、GIF格式的图片～');
          return false
        } else if (file.size > maxSize * 1024) {
          alert('上传图片不得大鱼300KB～');
          return false
        } else {
          this.upload_btn = false;
          this.photo_con = true;
          this.notice = false;
          this.readPic(file);
        }
      },
      //上传图片file
      upload_photo(){
        this.imgUrl = '';
        var file = this.$refs.photo_file.files[0],
          maxSize = 300;
        this.photo_file(file, maxSize)
        //console.log(file)

      },
      //重新上传图片file
      rep_photo(){
        var file = this.$refs.rep_photo_file.files[0],
          maxSize = 300;
        this.photo_file(file, maxSize)
      },
      //上传视频file
      upload_video(){
        //this.videoUrl='';
        var file = this.$refs.video_file.files,
          maxSize = 15000;
        for (var i = 0; i < file.length; i++) {
          if (!/\.(avi|dat|mpg|wmv|asf|rm|rmvb|mov|flv|mp4|3gp|dv|divx|qt|asx)$/i.test(file[i].name)) {
            alert('请上传avi、dat、mpg、wmv、asf、rm、rmvb、mov、flv、mp4、3gp、dv、divx、qt、asx格式的视频～')
            return false
          } else if (file[i].size > maxSize * 1024) {
            alert('上传视频不得大于15M～');
            return false
          } else {
            this.readVideo(file[i]);
          }
        }
      },
      //上传资料
      upload_attach(){
        var file = this.$refs.attach_file.files,
          maxSize = 500;
        for (var i = 0; i < file.length; i++) {
          if (!/\.(xlsx|docx|word|pdf)$/i.test(file[i].name)) {
            alert('请上传xlsx、docx、word、pdf格式的文件～');
            return false
          } else if (file[i].size > maxSize * 1024) {
            alert('上传视频不得大于' + maxSize + 'Kb～');
            return false
          } else {
            this.readAttach(file[i]);
          }
        }
      }
    },
    mounted(){
      var _this = this;
      $('.option_tab li').click(function () {
        $('.option_tab li').eq($(this).index()).addClass("active").siblings().removeClass('active');
        $(".divBox").hide().eq($(this).index()).show();
      });
      this.um = UM.getEditor('editor', {
        BaseUrl: '',
        UEDITOR_HOME_URL: '/static/umeditor1.2.3/',
        toolbar: [
          'source | undo redo | bold italic underline | forecolor backcolor | removeformat |',
          'insertorderedlist insertunorderedlist | cleardoc paragraph','| justifyleft justifycenter justifyright justifyjustify |', 'horizontal ', '| fontsize' ,
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
      this.um = UM.getEditor('editor1', {
        BaseUrl: '',
        UEDITOR_HOME_URL: '/static/umeditor1.2.3/',
        toolbar: [
          'source | undo redo | bold italic underline  | forecolor backcolor | removeformat |',
          'insertorderedlist insertunorderedlist | cleardoc paragraph','| justifyleft justifycenter justifyright justifyjustify |', 'horizontal ', '| fontsize' ,
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
      this.um = UM.getEditor('editor2', {
        BaseUrl: '',
        UEDITOR_HOME_URL: '/static/umeditor1.2.3/',
        toolbar: [
          'source | undo redo | bold italic underline  | forecolor backcolor | removeformat |',
          'insertorderedlist insertunorderedlist | cleardoc paragraph','| justifyleft justifycenter justifyright justifyjustify |', 'horizontal ', '| fontsize' ,
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
  .page-header-fixed .page-container{
    margin-top: inherit !important;
    padding-top: 50px;
  }
  .page-content{
    min-width: 1080px;
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
  .per_content {
    margin: 50px 0 0 30px;
    min-width: 1060px;
    padding-bottom: 50px;
  }
  .per_left_con {
    float: left;
    width: 580px;
    margin-right: 20px;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
  }
  .per_left_con .option_tab {
    border-bottom: 1px solid #E6ECF2;
  }
  .per_left_con .option_tab .option_list {
    float: left;
    font-size: 14px;
    color: #8492A6;
    padding: 15px 15px 12px 15px;
    cursor: pointer;
  }
  .per_left_con .option_tab .active {
    color: #4C9DFF;
    border-bottom: 3px solid #4C9DFF;
  }
  .info_box {
    padding: 50px 30px;
  }
  .information_tab {
    width: 100%;
  }
  .information_tab .information_list {
    margin-bottom: 60px;
  }
  .information_tab .information_list:last-child {
    margin-bottom: 0;
  }
  .information_tab .information_list h3 {
    padding-bottom: 20px;
    font-size: 14px;
    color: #283644;
    border-bottom: 1px solid #E6ECF2;
    font-weight: bold;
  }
  .information_tab .information_list .experience_tab {
    padding-bottom: 20px;
    border-bottom: 1px dashed #E6ECF2;
  }
  .information_tab .information_list .experience_tab:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .information_tab .information_list .star_rate_tab {
    display: inline-block;
    width: 300px;
    margin-right: 90px;
  }
  .el-rate__icon {
    font-size: 16px !important;
  }
  .el-progress--circle {
    vertical-align: top;
    margin-top: 60px;
  }
  .el-progress-circle {
    width: 100px !important;
    height: 100px !important;
  }
  .el-progress__text {
    color: rgb(255, 153, 0) !important;
  }
  .information_tab .information_list .list_col {
    margin-top: 10px;
    font-size: 0;
  }
  .information_tab .information_list .list_col .col_tag {
    display: inline-block;
    margin-right: 30px;
    width: 109px;
    text-align: -webkit-right;
    font-size: 14px;
    color: #979BA1;
    vertical-align: top;
  }
  .information_tab .information_list .list_col .col_des {
    display: inline-block;
    font-size: 14px;
    color: #283644;
    width: 370px;
    line-height: 24px;
  }
  .el-rate {
    display: inline-block;
  }
  .information_tab .information_list .comments_des {
    margin-top: 20px;
    font-size: 14px;
    color: #283644;
    line-height: 30px;
  }
  .application_box {
    display: none;
    padding: 50px 20px;
  }
  .action {
    margin-bottom: 20px;
  }
  thead {
    background: #F9FAFC;
  }
  thead tr th {
    vertical-align: top !important;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background: #fff;
  }
  .per_right_con {
    width: 400px;
    float: left;
    background: #F9FAFC;
    border: 1px solid #E6ECF2;
  }
  .per_right_con .top_tag {
    padding: 0 20px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E6ECF2;
  }
  .per_right_con .top_tag .top_title {
    float: left;
    font-size: 14px;
    color: #283644;
    line-height: 50px;
  }
  .per_right_con .top_tag .width60 {
    margin-top: 8px;
    width: 60px;
    float: right;
    border-radius: 2px !important;
  }
  .none_box {
    padding: 50px 20px;
  }
  .none_box .none_img {
    display: block;
    width: 130px;
    height: 85px;
    margin: auto;
  }
  .none_box .none_des {
    margin-top: 30px;
    font-size: 13px;
    color: #5E6D82;
    line-height: 24px;
    text-align: center;
  }
  .add_material {
    padding: 50px 20px;
  }
  .add_material .add_tab .add_list {
    position: relative;
    margin-bottom: 50px;
  }
  .add_material .add_tab .add_list .add_list_tag {
    position: relative;
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
    color: #283644;
    font-weight: bold;
  }
  .add_tab .add_list .add_list_tag b {
    position: absolute;
    top: 0;
    left: -15px;
    font-size: 14px;
    color: #FC3A3A;
  }
  .add_tab .add_list .upload_btn {
    display: block;
    width: 100%;
    height: 44px;
    background: #FFFFFF;
    border: 1px dashed #4C9DFF;
    border-radius: 2px;
    font-size: 14px;
    color: #4C9DFF;
    text-align: center;
    line-height: 44px;
  }
  .upload_file {
    width: 100%;
    height: 100%;
    opacity: 0;
    filter: alpha(opacity=0);
    margin-top: -44px;
    cursor: pointer;
  }
  .Notice {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-size: 14px;
    color: #FC3A3A;
  }
  .add_list .photo_con {
    font-size: 0;
  }
  .photo_con .per_pic {
    width: 75px;
    height: 75px;
    border-radius: 50% !important;
    display: inline-block;
  }
  .photo_con .rep_btn {
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
  .video_tab .video_list, .attach_tab .attach_list {
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    border: 1px solid #E6ECF2;
    background: #fff;
  }
  .attach_tab .attach_list {
    height: 40px;
    cursor: pointer;
  }
  .video_tab .video_list .myVideo {
    width: 100%;
    height: 105px;
    display: block;
  }
  .video_tab .video_list .video_input {
    width: 100%;
    height: 40px;
    border: none;
    border-top: 1px solid #E6ECF2;
    font-size: 14px;
    color: #283644;
  }
  .attach_tab .attach_list .metar_name {
    display: block;
    width: 260px;
    font-size: 14px;
    color: #283644;
    line-height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .attach_tab .attach_list .metar_name .fa-folder {
    margin: 0 14px 0 16px;
    font-size: 20px;
    color: #F6D42E;
    vertical-align: middle;
  }
  /*.close_box {
    position: absolute;
    bottom: 0;
    right: -56px;
    width: 40px;
    height: 40px;
    background: #fff;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
    text-align: center;
    cursor: pointer;
  }*/
  /*.close_box .fa-trash-o {
    line-height: 40px;
    font-size: 20px;
  }*/
  .work_tab{
    width: 100%;
    background: #fff;
    padding: 30px 16px;
    margin-bottom: 20px;
  }
  .work_tab:last-child{
    margin-bottom: 0;
  }
  .work_tab .work_list{
    margin-bottom: 20px;
  }
  .work_tab .work_list:last-child{
    margin-bottom: 0;
  }
  .work_tab .work_list .work_his_name{
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #979BA1;
  }
  .work_tab .work_list .work_list_des{
    font-size: 14px;
    color: #283644;
    line-height: 24px;
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
  .edui-container{
    width: 100% !important;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
    box-shadow: none;
  }
  .edui-container .edui-toolbar{
    border-bottom: 1px solid #E6ECF2;
    box-shadow: none;
  }
  #editor{
    width: 360px !important;
  }
  .edui_box{
    width: 100%;
  }
  #editor1{
    width: 326px !important;
  }
  .con_list{
    position: relative;
    width: 360px;
    padding: 26px 17px 0;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .con_list .list-group{
    font-size: 0;
  }
  .icon-close{
    position: absolute !important;
    right: -10px;
    top: -10px !important;
    font-size: 20px;
    background: #C8CBCF;
    color: #fff;
    width: 20px !important;
    height: 20px;
    line-height: 20px;
    border-radius: 50% !important;
    border: none;
    cursor: pointer;
  }
  .con_list .list-group label{
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #979BA1;
  }
  .con_list .list-group label b{
    display: inline-block;
    margin-left: 8px;
    color: #FC3A3A;
    vertical-align: top;
  }
  .con_list .list-group .textInput{
    display: block;
    width: 100%;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }
  .con_list .list-group .input-group{
    display: inline-block;
    width: 150px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }
  .con_list .list-group .startBox{
    margin-right: 24px;
  }
  #created_start,#created_end{
    background: #fff;
    border: none;
    width: 112px;
    height: 38px;
  }
  #created_start1,#created_end1{
    background: #fff;
    border: none;
    width: 112px;
    height: 38px;
  }
  .dateBtn{
    height: 38px;
    background: #fff;
  }
  .btn-sm{
    height: 100%;
  }
</style>
