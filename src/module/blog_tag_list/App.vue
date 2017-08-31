<template>
  <div class="blog_setting_tag">
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
                <a href="blog_tag_list.html" class="active">Tag</a>
              </li>
              <li class="con_list">
                <a href="blog_author_list.html">Author</a>
              </li>
              <li class="con_list">
                <a href="blog_posts.html">Posts</a>
              </li>
              <li class="con_list">
                <a href="blog_category_list.html">Category</a>
              </li>
            </ul>
            <div class="table-container clear">
              <div class="btn-add">
                <button class="btn blue" style="width: 180px" @click="add_new_tag">+ New Tag</button>
              </div>
              <table class="table table-striped table-bordered table-hover table-checkable order-column"  id="tagTable">
                <thead>
                <tr role="row" class="heading">
                  <th width="30%">Tag Name</th>
                  <th width="15%">Related Articles</th>
                  <th width="15%">Status</th>
                  <th width="20%">Created Time</th>
                  <th width="20%">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                  <!--<td>-->
                    <!--&lt;!&ndash;{{tagList.tagName}}&ndash;&gt;-->
                  <!--</td>-->
                  <!--<td>-->
                    <!--&lt;!&ndash;{{tagList.links}}&ndash;&gt;-->
                  <!--</td>-->
                  <!--<td>-->
                    <!--&lt;!&ndash;Active&ndash;&gt;-->
                  <!--</td>-->
                  <!--<td>-->
                    <!--&lt;!&ndash;{{tagList.updateTimeStr}}4&ndash;&gt;-->
                  <!--</td>-->
                  <!--<td>-->
                     <!--<button type="button" class="btn blue width70" @click="list_edit">Edit</button>-->
                     <!--<button type="button" class="btn red btn-outline width70" @click="list_dele">Delete</button>-->
                  <!--</td>-->
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
        New Tag
        <i class="icon-close" @click="add_cancel"></i>
      </span>
      <div class="inputBox">
        <div class="form-group">
          <span class="tag_name">Tag Name</span>
          <input type="text" class="form-control" v-model="tag_name_val">
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
          <input type="text" class="form-control" v-model="tag_name_val1">
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
    <div class="popup" v-show="dele_popup">
      <span class="popup_tag">
        Delete
        <i class="icon-close" @click="dele_cancel"></i>
      </span>
      <p class="dele_des">Are you sure you want to delete them?</p>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="dele_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="dele_confirm">Confirm</button>
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
          mask:false,
          add_new:false,
          tag_name_val:'',
          edit_popup:false,
          tag_name_val1:'',
          dele_popup:false,
          tagArr:[],
          editId:'',
          state:0,
          addState:0
        }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods: {
      getTagList(){
          var _this=this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/setting/tag/list?access_token='+token).then(function (tagRes) {
          this.tagArr=tagRes.body.resultObj;

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
            "data":this.tagArr,
            "columns":[
              { data: 'tagName' },
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
                  return '<button type="button" class="btn blue width70 tagitem" tagId="'+e.id+'" tagName="'+e.tagName+'" tagStatus="'+e.status+'">Edit</button><button type="button" class="btn red btn-outline width70 tagDele" tagid="'+e.id+'">Delete</button>';
                }
              }
            ]

          })
          $(".tagitem").click(function(){
              var tagId=$(this).attr('tagId'),
                  tagName=$(this).attr('tagName'),
                  tagStatus=$(this).attr('tagStatus');
            _this.editId = tagId;
            _this.tag_name_val1 = tagName;
            if(tagStatus === "0"){
              $('#mySwitch1 input').bootstrapSwitch('state',true)
            }else{
              $('#mySwitch1 input').bootstrapSwitch('state',false)
            }
            _this.list_edit();
          });
          $('.tagDele').click(function () {
            var tagId=$(this).attr('tagid');
            _this.editId = tagId;
            _this.list_dele();
          })
        })

      },

      add_new_tag(){
        this.mask=true;
        this.add_new=true
      },
      add_cancel(){
        this.mask=false;
        this.add_new=false;
        this.tag_name_val=''
      },
      add_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/setting/tag/edit',{'access_token':token,'tagId':'','tagName':this.tag_name_val,'status':this.addState},{emulateJSON:true}).then(function (editRes) {
          if(editRes.body.error_code===200){
            this.getTagList();
            this.mask=false;
            this.add_new=false;
            this.tag_name_val='';
            if(this.addState === 0){
              $('#mySwitch input').bootstrapSwitch('state',true)
            }else{
              $('#mySwitch input').bootstrapSwitch('state',false)
            }
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
      },
      edit_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/setting/tag/edit',{'access_token':token,'tagId':this.editId,'tagName':this.tag_name_val1,'status':this.state},{emulateJSON:true}).then(function (editRes) {
          if(editRes.body.error_code===200){
            this.mask=false;
            this.edit_popup=false;
            this.getTagList();
          }
        });

      },

      list_dele(){
        this.mask=true;
        this.dele_popup=true;
      },
      dele_cancel(){
        this.mask=false;
        this.dele_popup=false;
      },
      dele_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/setting/tag/delete',{'access_token':token,'tagId':this.editId},{emulateJSON:true}).then(function (editRes) {
          if(editRes.body.error_code===200){
            this.mask=false;
            this.dele_popup=false;
            this.getTagList();
          }
        });
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
      this.getTagList();
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
  .btn-add{
    float: right;
    margin-bottom: 15px;
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
  .switch{
    display: inline-block;
  }
  .dele_des{
    margin: 80px;
    text-align: center;
    font-size: 16px;
    color: #283644;
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
