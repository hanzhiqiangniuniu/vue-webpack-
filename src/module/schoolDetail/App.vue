<template>
  <div class="schoolDetail">
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
              <a href="requisition_list.html">/ &nbspList</a>
            </li>
            <li class="list" v-show="schoolName">
              <a href="schoolDetail.html" class="active">&nbsp&nbsp/ &nbsp{{resultObj.instituteName}}</a>
            </li>
          </ul>
          <div class="school_detail_con clear">
            <div class="left_tab_box">
              <ul class="leftTab clear">
                <li class="leftList active">Requisition Detail</li>
                <li class="leftList">Requisition Share</li>
                <!--<li class="leftList">Log</li>-->
              </ul>
              <ul class="detail_content List_content">
                <li class="detail_content_list">
                  <span class="list_tag">Title</span>
                  <span class="list_des">{{resultObj.title}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Update time in jobvite</span>
                  <span class="list_des">{{resultObj.updateTimeStr}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Requisition ID</span>
                  <span class="list_des">{{resultObj.requisitionId}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Job Type</span>
                  <span class="list_des">{{resultObj.jobType}}</span>
                </li>
                <li class="detail_content_list">
                <span class="list_tag">Openings</span>
                <span class="list_des">{{resultObj.openings}}</span>
              </li>
                <li class="detail_content_list">
                <span class="list_tag">Category</span>
                <span class="list_des">{{resultObj.category}}</span>
              </li>
                <li class="detail_content_list">
                  <span class="list_tag">Subject</span>
                  <span class="list_des">{{resultObj.subject}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Age Group</span>
                  <span class="list_des">{{resultObj.age_group}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Institute</span>
                  <span class="list_des">{{resultObj.instituteName}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Department</span>
                  <span class="list_des">{{resultObj.department}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Location</span>
                  <span class="list_des">{{resultObj.locationCity}}</span>
                </li>
                <li class="detail_content_list">
                  <span class="list_tag">Description</span>
                  <span class="list_des" id="description">
                  </span>
                </li>
              </ul>
              <div class="share_content List_content">
                <span class="boards_tab">Choose Job Boards</span>
                <select name="share_name" id="" class="form-control share_select" v-model="channel_val" @change="channelVal_change">
                  <option value="" style="color: #99A9BF;">Please Choose…</option>
                  <option :value="channelList.channelName" v-for="channelList in this.channelArr">{{channelList.channelName}}</option>
                </select>
                <div class="urlBox" v-show="share_url">
                  <span class="url_tag">Share URL</span>
                  <div class="mt-clipboard-container">
                    <input type="text" id="mt-target-1" class="form-control url_input" :value="'https://www.careerchina.com/schoolDetail.html?id='+this.resultObj.id+'&channel='+this.channel_val" />
                    <a href="javascript:;" class="btn green mt-clipboard" data-clipboard-action="copy" data-clipboard-target="#mt-target-1">
                      <i class="icon-note"></i> Copy from Input</a>
                  </div>
                </div>
              </div>
              <!--<div class="logBox List_content">
                <div class="action clear">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next"
                    :total="total">
                  </el-pagination>
                </div>
                &lt;!&ndash;jumper 分页加这个是输入跳转页 layout="jumper"&ndash;&gt;
                <table class="table table-striped table-bordered table-hover table-checkable">
                  <thead>
                    <tr role="row" class="heading">
                      <th width="60%">Activity</th>
                      <th width="40%">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                    <tr>
                      <td>Requisition Import (New)</td>
                      <td>2017/4/12 16:34:18</td>
                    </tr>
                  </tbody>
                </table>
                <div class="action clear">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next"
                    :total="total">
                  </el-pagination>
                </div>
              </div>-->
            </div>
            <div class="schoolRight_status">
               <div class="top_box clear">
                 <span class="top_tag">Requisition Status</span>
                 <span class="btn blue width60" v-show="Edit" @click="status_edit">Edit</span>
               </div>
               <ul class="status_tab" v-show="status_tab">
                 <li class="status_list">
                   <span class="status_list_tag">Post Status</span>
                   <span class="status_list_des" v-if="resultObj.status===1001">New</span>
                   <span class="status_list_des" v-else-if="resultObj.status===1002">Posted</span>
                   <span class="status_list_des" v-else-if="resultObj.status===1003">Closed</span>
                   <span class="status_list_des" v-else-if="resultObj.status===1004">Internal</span>
                   <span class="status_list_des" v-else="resultObj.status===''">暂无</span>
                 </li>
                 <!--<li class="status_list">
                   <span class="status_list_tag">Expiration Time</span>
                   <span class="status_list_des">2017/4/12</span>
                 </li>-->
                 <li class="status_list">
                   <span class="status_list_tag">Related Institute</span>
                   <span class="status_list_des">{{resultObj.instituteName}}</span>
                 </li>
               </ul>
               <form action="##" v-show="form_body">
                 <div class="form-body">
                   <div class="form-group">
                     <label class="control-label">
                       <span class="required"> * </span>
                       Post Status
                     </label>
                     <select class="form-control" name="select" v-model="statusVal" @focus="statu_sele_focus">
                       <option value="">Please Choose...</option>
                       <option value="New">New</option>
                       <option value="Posted">Posted</option>
                       <option value="Closed">Closed</option>
                       <option value="Internal">Internal</option>
                     </select>
                     <span class="notice" v-show="notice">Required</span>
                   </div>
                   <!--<div class="form-group">
                     <label class="control-label" style="margin-left: 10px">Expiration Time</label>
                     <div class="input-group date date-picker margin-bottom-5" data-date-format="yyyy/mm/dd">
                       <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from" placeholder="Please Choose...">
                       <span class="input-group-btn">
                         <button class="btn btn-sm default" type="button">
                           <i class="fa fa-calendar"></i>
                         </button>
                       </span>
                     </div>
                   </div>-->
                   <div class="form-group">
                     <label class="control-label" style="margin-left: 10px">Related Institute</label>
                     <select class="form-control" name="select" v-model="instituVal">
                       <option value="">Please Choose...</option>
                       <option :value="intuList.id" v-for="intuList in this.instituArr">{{intuList.instituteName}}</option>
                     </select>
                   </div>
                 </div>
                 <div class="buttons">
                   <button type="button" class="btn grey-salsa btn-outline width120" @click="status_cancel">Cancel</button>
                   <button type="button" class="btn blue width120" @click="edit_confirm">Confirm</button>
                 </div>
               </form>
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
        page:1,
        pageSize:10,
        total:0,
        schoolName:true,
        share_url:false,
        form_body:false,
        status_tab:true,
        Edit:true,
        resultObj:{},
        channelArr:[],
        channel_val:'',
        instituArr:[],
        statusVal:'',
        instituVal:'',
        insId:'',
        notice:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      getDetail(id){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/requisition/detail?access_token='+token+'&id='+id).then(function (res) {
          console.log(res)
          this.resultObj=res.body.resultObj;
          this.insId=res.body.resultObj.id;
          this.channelArr=res.body.resultObj.channelList;
          this.instituArr=res.body.resultObj.listInstitute;
          var des=this.resultObj.description;
          $('#description').html(des);
          if(res.body.resultObj.status===1001){
            this.statusVal='New'
          }else if(res.body.resultObj.status===1002){
            this.statusVal='Posted'
          }else if(res.body.resultObj.status===1003){
            this.statusVal='Closed'
          }else if(res.body.resultObj.status===1004){
            this.statusVal='Internal'
          }
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      status_edit(){
        this.Edit=false;
        this.status_tab=false;
        this.form_body=true;
      },
      status_cancel(){
        this.Edit=true;
        this.status_tab=true;
        this.form_body=false;
      },
      edit_confirm(){
        var token = $.cookie('token');
        if(this.statusVal===''){
          this.notice=true;
          return false
        }else {
          if(this.statusVal==='New'){
            this.statusVal=1001
          }else if(this.statusVal==='Posted'){
            this.statusVal=1002
          }else if(this.statusVal==='Closed'){
            this.statusVal=1003
          }else if(this.statusVal==='Internal'){
            this.statusVal=1004
          }
          this.$http.get(interfaceStr+'cc/requisition/update?access_token='+token+'&id='+this.insId+'&status='+this.statusVal+'&instituteId='+this.instituVal).then(function (res) {
            if(res.body.error_code===200){
              this.status_tab=true;
              this.form_body=false;
              this.Edit=true;
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
              var jobId=window.location.href.queryURLParameter()["id"];
              this.getDetail(jobId)
            }
          })
        }
      },
      statu_sele_focus(){
        this.notice=false;
      },
      channelVal_change(){
        if(this.channel_val===''){
          this.share_url=false
        }else {
          this.share_url=true
        }
      }
    },
    mounted(){
      $('.leftTab li').click(function () {
        $('.leftTab li').eq($(this).index()).addClass("active").siblings().removeClass('active');
        $(".List_content").hide().eq($(this).index()).show();
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
      var jobId=window.location.href.queryURLParameter()["id"];
      this.getDetail(jobId)
    }
  }
</script>

<style>
  .page-container{
    padding-top: 50px !important;
    margin-top: 0 !important;
    min-height: 600px;
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
  .school_detail_con{
    min-width: 1100px;
    padding: 50px 30px;
  }
  .school_detail_con .left_tab_box{
    float: left;
    margin-right: 20px;
    width: 580px;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
  }
  .school_detail_con .left_tab_box .leftTab{
    width: 100%;
    border-bottom: 1px solid #E6ECF2;
  }
  .school_detail_con .left_tab_box .leftTab .leftList{
    float: left;
    padding: 0 15px;
    font-size: 14px;
    color: #8492A6;
    line-height: 50px;
    cursor: pointer;
  }
  .school_detail_con .left_tab_box .leftTab .active{
    color: #4C9DFF;
    border-bottom: 3px solid #4C9DFF;
  }
  .left_tab_box .detail_content{
    width: 520px;
    margin: 50px auto;
  }
  .left_tab_box .detail_content .detail_content_list{
    margin-bottom: 10px;
    font-size: 0;
  }
  .left_tab_box .detail_content .detail_content_list:last-child{
    margin-bottom: 0;
  }
  .left_tab_box .detail_content .detail_content_list .list_tag{
    display: inline-block;
    margin-right: 30px;
    width: 140px;
    font-size: 14px;
    color: #979BA1;
    text-align: -webkit-right;
    vertical-align: top;
    line-height: 24px;
  }
  .left_tab_box .detail_content .detail_content_list .list_des{
    display: inline-block;
    width: 340px;
    font-size: 14px;
    color: #283644;
    line-height: 24px;
  }
  .share_content{
    padding: 50px 40px;
    display: none;
  }
  .share_content .boards_tab,.url_tag{
    display: block;
    margin:0 0 12px 2px;
    font-size: 14px;
    color: #979BA1;
  }
  .share_content .share_select{
    width: 300px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }
  .urlBox{
    margin-top: 30px;
  }
  .mt-clipboard-container{
    padding: inherit;
  }
  .url_input{
    margin-bottom: 26px;
    width: 500px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
  }
  .logBox{
    padding: 50px 20px;
    display: none;
  }
  .table{
    margin-top: 20px;
  }
  .table-checkable tr>td:first-child, .table-checkable tr>th:first-child{
    text-align: inherit;
    padding:8px !important;
  }
  .table-striped>tbody>tr:nth-of-type(odd){
    background: #fff;
  }
  .el-pagination{
    padding: 2px 0 !important;
  }
  .el-pagination__total{
    margin: 0 10px 0 0 !important;
  }
  .el-pagination .el-select .el-input{
    width: 90px !important;
  }
  .schoolRight_status{
    float: left;
    width: 400px;
    background: #F9FAFC;
    border: 1px solid #E6ECF2;
  }
  .schoolRight_status .top_box{
    padding: 0 20px;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #E6ECF2;
  }
  .schoolRight_status .top_box .top_tag{
    float: left;
    line-height: 50px;
    font-size: 14px;
    color: #283644;
  }
  .schoolRight_status .top_box .width60{
    float: right;
    width: 60px;
    height: 26px;
    border-radius: 2px !important;
    line-height: 14px;
    margin-top: 12px;
  }
  .schoolRight_status .status_tab,form{
    padding: 50px 20px;
  }
  .schoolRight_status .status_tab .status_list{
    margin-bottom: 30px;
  }
  .schoolRight_status .status_tab .status_list:last-child{
    margin-bottom: 0;
  }
  .schoolRight_status .status_tab .status_list .status_list_tag,.status_list_des{
    display: block;
    font-size: 14px;
  }
  .schoolRight_status .status_tab .status_list .status_list_tag{
    margin-bottom: 14px;
    color: #979BA1;
  }
  .schoolRight_status .status_tab .status_list .status_list_des{
    color: #283644;
  }
  .form-group{
    position: relative;
    margin-bottom: 30px;
  }
  .control-label{
    margin-bottom: 14px;
    font-size: 14px;
    color: #979BA1;
  }
  .form-control{
    width: 348px;
    height: 40px !important;
    margin-left: 10px !important;
    background: #FFFFFF !important;
    border: 1px solid #E6ECF2 !important;
    border-radius: 4px !important;
    font-size: 14px;
  }
  select:first-child{
    color: #99A9BF;
  }
  .input-group-btn{
    z-index: 20;
  }
  .btn.default:not(.btn-outline){
    width: 40px;
    height: 40px;
  }
  .notice{
    position: absolute;
    bottom: -20px;
    left:14px;
    font-size: 12px;
    color: #FC3A3A;
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
