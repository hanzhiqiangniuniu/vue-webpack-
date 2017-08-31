<template>
  <div class="author_list">
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
              <a href="blog_tag_list.html" class="active">/ &nbspSetting&nbsp&nbsp</a>
            </li>
          </ul>
          <div class="set_tag_con">
            <ul class="con_tab clear">
              <li class="con_list">
                <a href="blog_tag_list.html">Tag</a>
              </li>
              <li class="con_list">
                <a href="blog_author_list.html">Author</a>
              </li>
              <li class="con_list">
                <a href="blog_posts.html">Posts</a>
              </li>
              <li class="con_list">
                <a href="blog_category_list.html" class="active">Category</a>
              </li>
            </ul>
            <div class="table-container clear">
              <div class="action clear">
                <div class="btn-add">
                  <button class="btn blue" style="width: 180px" @click="add_new_tag">+ New Category</button>
                </div>
              </div>
              <table class="table table-striped table-bordered table-hover table-checkable order-column"  id="tagTable">
                <thead>
                <tr role="row" class="heading">
                  <th width="30%">Category Name</th>
                  <th width="15%">Related Articles</th>
                  <th width="15%">Status</th>
                  <th width="20%">Created Time</th>
                  <th width="20%">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="mask"></div>
    <div class="popup" v-show="add_new">
      <span class="popup_tag">
        New Category
        <i class="icon-close" @click="add_cancel"></i>
      </span>
      <div class="inputBox">
        <div class="form-group">
          <span class="tag_name">Tag Name</span>
          <input type="text" class="form-control" v-model="tag_name_val" @focus="inputFocus">
          <span class="notice" v-show="add_notice">Required</span>
        </div>
        <div class="form-group" style="margin-bottom: 0">
          <span class="tag_name">Tag Status</span>
          <div class="switch" id="mySwitch" data-on-label="Active" data-off-label="Inactive">
            <input type="checkbox" class="make-switch" checked data-on-color="success" data-off-color="warning" value=""/>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="add_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="add_confirm">Confirm</button>
      </div>
    </div>
    <div class="popup" v-show="edit_popup">
      <span class="popup_tag">
        Edit
        <i class="icon-close" @click="edit_cancel"></i>
      </span>
      <div class="inputBox">
        <div class="form-group">
          <span class="tag_name">Tag Name</span>
          <input type="text" class="form-control" v-model="tag_name_val1" @focus="inputFocus">
          <span class="notice" v-show="edit_notice">Required</span>
        </div>
        <div class="form-group" style="margin-bottom: 0">
          <span class="tag_name">Tag Status</span>
          <div class="switch" id="mySwitch1" data-on-label="Active" data-off-label="Inactive">
            <input type="checkbox" class="make-switch" checked data-on-color="success" data-off-color="warning" value=""/>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="edit_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="edit_confirm">Confirm</button>
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
        mask:false,
        add_new:false,
        tag_name_val:'',
        edit_popup:false,
        tag_name_val1:'',
        categoryList:[],
        cateId:'',
        state:0,
        addState:0,
        add_notice:false,
        edit_notice:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods: {
      getCategoryList(){
        var _this=this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/setting/category/list?access_token='+token).then(function (cateRes) {
          this.categoryList=cateRes.body.resultObj;
          console.log(this.categoryList)
          $("#tagTable").DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "aaSorting" : [[3, "desc"]], //默认的排序方式，第1列，升序排列
            "info": true,
            "destroy":true,
            "autoWidth": false,
            "processing":true,
            "serverSide":false,    //true代表后台处理分页，false代表前台处理分页
            "PaginationType" : "full_numbers", //详细分页组，可以支持直接跳转到某页
            //当处理大数据时，延迟渲染数据，有效提高Datatables处理能力
            "deferRender": true,
            "data":this.categoryList,
            "columns":[
              { data: 'categoryName' },
              { data: 'links'},
              { data: function (e) {
                  if(e.status == 0){
                    return "Active";
                  }else{
                    return "Inactive";
                  }
                }
              },
              { data: 'updateTimeStr'},
              { data: function(e){
                return '<button type="button" class="btn blue width70 cateList" cateId="'+e.id+'" cateName="'+e.categoryName+'" cateStatus="'+e.status+'">Edit</button>';
              }
              }
            ]

          });
          $('.cateList').click(function () {
            var cateId = $(this).attr('cateId'),
                cateName = $(this).attr('cateName'),
                cateStatus = $(this).attr('cateStatus');
            _this.cateId = cateId;
            _this.tag_name_val1 = cateName;
            if(cateStatus === "0"){
              $('#mySwitch1 input').bootstrapSwitch('state',true)
            }else{
              $('#mySwitch1 input').bootstrapSwitch('state',false)
            }
            _this.list_edit()
          })
        })
      },
      inputFocus(){
        this.add_notice=false;
        this.edit_notice=false;
      },
      add_new_tag(){
        this.mask=true;
        this.add_new=true
      },
      add_cancel(){
        this.mask=false;
        this.add_new=false;
        this.tag_name_val='';
        this.add_notice=false
      },
      add_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/setting/category/edit',{'access_token':token,'categoryId':'','categoryName':this.tag_name_val,'status':this.addState},{emulateJSON:true}).then(function (editRes) {
          if(editRes.body.error_code===200){
            this.getCategoryList();
            this.mask=false;
            this.add_new=false;
            this.tag_name_val='';
            if(this.addState === 0){
              $('#mySwitch input').bootstrapSwitch('state',true)
            }else{
              $('#mySwitch input').bootstrapSwitch('state',false)
            }
          }else {
            this.add_notice=true
          }
        });
      },

      list_edit(){
        this.mask=true;
        this.edit_popup=true;
      },
      edit_cancel(){
        this.mask=false;
        this.edit_popup=false;
        this.edit_notice=false
      },
      edit_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/setting/category/edit',{'access_token':token,'categoryId':this.cateId,'categoryName':this.tag_name_val1,'status':this.state},{emulateJSON:true}).then(function (editRes) {
          if(editRes.body.error_code===200){
            this.mask=false;
            this.edit_popup=false;
            this.getCategoryList();
          }else {
            this.edit_notice=true
          }
        });
      },
    },
    mounted(){
      var _this=this;
      $('#mySwitch input').bootstrapSwitch({
        onText:"Active",
        offText:"Inactive",
      });
      $('#mySwitch input').on('switchChange.bootstrapSwitch',function(event,state) {
        if (state === true) {
          _this.addState = 0
        } else if (state === false) {
          _this.addState = 1
        }
      });
      $('#mySwitch1 input').bootstrapSwitch({
        onText:"Active",
        offText:"Inactive",
      });
      $('#mySwitch1 input').on('switchChange.bootstrapSwitch',function(event,state) {
        if (state === true) {
          _this.state = 0
        } else if (state === false) {
          _this.state = 1
        }
      });
      this.getCategoryList()
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
  tbody tr td{
    text-align: inherit !important;
    padding: 8px 12px !important;
  }
  .set_tag_con{
    min-width: 1060px;
    padding: 0 30px;
  }
  .set_tag_con .con_tab{
    margin: 35px 0;
    border-bottom: 1px solid #E6ECF2;
  }
  .set_tag_con .con_tab .con_list{
    float: left;
    margin-right: 10px;
  }
  .set_tag_con .con_tab .con_list:last-child{
    margin-right: 0;
  }
  .set_tag_con .con_tab .con_list a{
    display: block;
    font-size: 14px;
    color: #8492A6;
    padding: 0 36px 12px;
    cursor: pointer;
  }
  .set_tag_con .con_tab .con_list .active{
    border-bottom: 3px solid #4C9DFF;
    color: #4C9DFF;
  }
  .action{
    margin-bottom: 20px;
  }
  .el-pagination{
    float: left;
  }
  .btn-add{
    float: right;
    margin-top: -10px;
  }
  .btn-add .btn{
    height: 44px;
  }
  .btn{
    border-radius: 2px !important;
  }
  .width70{
    width: 70px;
    height: 26px;
    line-height: 14px !important;
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
  .popup{
    position: fixed;
    top:50%;
    left: 50%;
    width: 540px;
    height: 340px;
    margin-left: -270px;
    margin-top: -170px;
    background: #fff;
    border-radius: 4px!important;
    z-index: 110;
  }
  .popup .popup_tag{
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
  .popup .popup_tag .icon-close{
    position: absolute;
    right: 10px;
    top: 24px;
    font-size: 24px;
    color: #CCCDCE;
    cursor: pointer;
  }
  .popup .popup_tag .icon-close:hover{
    color: #283644;
  }
  .inputBox{
    width: 412px;
    margin: 50px auto;
  }
  .inputBox .form-group{
    position: relative;
    margin-bottom: 27px;
    font-size: 0;
  }
  .inputBox .form-group .tag_name{
    display: inline-block;
    width: 75px;
    text-align: -webkit-right;
    margin-right: 16px;
    font-size: 14px;
    color: #979BA1;
  }
  .inputBox .form-group .form-control{
    display: inline-block;
    width: 320px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
    font-size: 14px;
    color: #283644;
  }
  .notice{
    position: absolute;
    left: 95px;
    bottom: -20px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .switch{
    display: inline-block;
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
  .dataTables_extended_wrapper .table.dataTable{
    margin: 0 !important;
  }
</style>
