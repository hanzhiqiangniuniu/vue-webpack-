<template>
  <div id="app">
    <v-nav></v-nav>
    <!-- <select id="groupselect" class="selectpicker" data-live-search="true" title="Please select a group">
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">as</option>
       <option value="1">beer</option>
       <option value="1">cccdfdsfd</option>
       <option value="1">fff</option>
       <option value="1">gdcxvcxv</option>
       <option value="1">rigfh</option>
       <option value="1">dsfcxv</option>
       <option value="1">lkkl</option>
       <option value="1">ppqkej</option>
       <option value="1">qdfdsff</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
       <option value="1">dfdfdljf</option>
     </select>-->
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Admin&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="backend.html" class="active">/ &nbspBackend Users</a>
            </li>
          </ul>
          <div class="row">
            <div class="col-md-12">
              <div class="portlet light portlet-fit portlet-datatable bordered">
                <div class="portlet-body">
                  <div class="table-container clear">
                    <div class="action clear">
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="pageSizes"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                      </el-pagination>
                      <div class="btn-add">
                        <button class="btn blue" style="width: 180px" @click="addUser">+ Add New</button>
                      </div>
                    </div>
                    <table class="table table-striped table-bordered table-hover table-checkable">
                      <thead>
                        <tr role="row" class="heading">
                          <th width="40%">User Name</th>
                          <th width="20%">Created Time</th>
                          <th width="20%">Update Time</th>
                          <th width="20%"> Actions</th>
                        </tr>
                        <tr role="row" class="filter">
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="order_id" v-model="search_userName">
                          </td>
                          <td>
                            <div class="input-group date date-picker margin-bottom-5" data-date-format="yyyy/mm/dd">
                              <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from" placeholder="From" id="created_start">
                              <span class="input-group-btn">
                                <button class="btn btn-sm default" type="button">
                                  <i class="fa fa-calendar"></i>
                                </button>
                              </span>
                            </div>
                            <div class="input-group date date-picker" data-date-format="yyyy/mm/dd">
                              <input type="text" class="form-control form-filter input-sm" readonly name="order_date_to" placeholder="To" id="created_end">
                              <span class="input-group-btn">
                                <button class="btn btn-sm default" type="button">
                                 <i class="fa fa-calendar"></i>
                                </button>
                              </span>
                            </div>
                        </td>
                          <td>
                            <div class="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                              <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from" placeholder="From" id="update_start">
                              <span class="input-group-btn">
                                <button class="btn btn-sm default" type="button">
                                  <i class="fa fa-calendar"></i>
                                </button>
                              </span>
                            </div>
                            <div class="input-group date date-picker" data-date-format="dd/mm/yyyy">
                              <input type="text" class="form-control form-filter input-sm" readonly name="order_date_to" placeholder="To" id="update_end">
                              <span class="input-group-btn">
                                <button class="btn btn-sm default" type="button">
                                 <i class="fa fa-calendar"></i>
                                </button>
                              </span>
                            </div>
                          </td>
                          <td>
                          <div class="margin-bottom-5">
                            <button class="btn btn-sm green btn-outline filter-submit margin-bottom" @click="search">
                              <i class="fa fa-search"></i> Search
                            </button>
                          </div>
                          <button class="btn btn-sm red btn-outline filter-cancel" @click="reset">
                            <i class="fa fa-times"></i> Reset
                          </button>
                        </td>
                         </tr>
                      </thead>
                      <tbody>
                        <tr v-for="userList in userAry">
                          <td>{{userList.userName}}</td>
                          <td>{{userList.createTimeStr}}</td>
                          <td>{{userList.updateTimeStr}}</td>
                          <td>
                            <a href="javascript:;" class="btn blue" @click="view(userList.id)">view</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="pageSizes"
                      :page-size="10"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="total">
                    </el-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="maskshow" @click="addHide"></div>
    <div class="add" v-show="addshow">
      <div class="title">
        <span class="title-word">Add New</span>
        <i class="close" @click="addHide"></i>
      </div>
      <form action="">
        <div class="username">
          <label>
            <span class="required" aria-required="true" style="color: #e02222;"> * </span>
            User Name
          </label>
          <input type="text" placeholder="" v-model="add_username">
        </div>
        <div class="note">
          <label>
            Note
          </label>
          <textarea name="" id="" cols="30" rows="10" v-model="Note">
          </textarea>
        </div>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="addHide">Cancel</button>
          <button type="submit" class="btn blue width120" @click="generate">Generate</button>
        </div>
      </form>
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
          addshow:false,
          maskshow:false,
          currentPage4: 1,
          buttons:false,
          pageSizes:[5, 10, 15, 20],
          pageSize:10,
          total:0,
          userAry:[],
          search_userName:'',
          /*created_start_time:'',
          created_end_time:'',
          update_start_time:'',
          update_end_time:''*/
          add_username:'',
          Note:''
        }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      addUser(){
        this.addshow=true;
        this.maskshow=true
      },
      addHide(){
        this.addshow=false;
        this.maskshow=false;
        this.add_username='';
        this.Note=''
      },
      generate(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/bg/user/add',{'access_token':token,'userName':this.add_username,'note':this.Note},{emulateJSON:true}).then(function (res) {
          console.log(res)
        });
      },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        var token = $.cookie('token');
        var page=1;
        this.$http.get(interfaceStr+'cc/bg/user/page?access_token='+token+'&page='+page+'&pageSize='+val+'').then(function (res) {
          this.total=res.body.resultObj.count;
          this.userAry=res.body.resultObj.data;
        });
        this.pageSize=val;
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/bg/user/page?access_token='+token+'&page='+val+'&pageSize='+this.pageSize+'').then(function (res) {
          this.total=res.body.resultObj.count;
          this.userAry=res.body.resultObj.data;
        });
      },
      view(id){
         location.href='userDetail.html?id='+id
      },
      search(){
        var token = $.cookie('token');
        var page=1;
        var created_start_time=$('#created_start').val(),
            created_end_time = $('#created_end').val(),
            update_start_time = $('#update_start').val(),
            update_end_time = $('#update_end').val();
        this.$http.get(interfaceStr+'cc/bg/user/page?access_token='+token+'&page='+page+'&pageSize='+this.pageSize+'&userName='+this.search_userName+'&startCreateTime='+created_start_time+'&endCreateTime='+created_end_time+'&startUpdateTime='+update_start_time+'&endUpdateTime='+update_end_time+'').then(function (res) {
          console.log(res)
          this.total=res.body.resultObj.count;
          this.userAry=res.body.resultObj.data;
        });
      },
      reset(){
        this.search_userName='';
        $('#created_start').val('');
        $('#created_end').val('');
        $('#update_start').val('');
        $('#update_end').val('')
      }
    },
    mounted(){
      $('.option_tab li').click(function () {
        $('.option_tab li').eq($(this).index()).addClass("active").siblings().removeClass('active');
        $(".tab-content").hide().eq($(this).index()).show();
      });
      var token = $.cookie('token');
      var page=1;
      this.$http.get(interfaceStr+'cc/bg/user/page?access_token='+token+'&page='+page+'&pageSize='+this.pageSize+'').then(function (res) {
        console.log(res.body.resultObj)
        this.total=res.body.resultObj.count;
        this.userAry=res.body.resultObj.data;
      });
    },
    created(){
     //$('#groupselect').selectpicker('render');
     //$('#groupselect').selectpicker('refresh');

    }
  }
</script>

<style scoped>
  .page-container{
    padding-top: 50px !important;
    margin-top: 0 !important;
  }
  thead{
    background: #F9FAFC;
  }
  .userInput{
    width: 80%;
    display: block;
    margin: auto;
  }
  tbody tr td{
    vertical-align: inherit !important;
  }
  .blue{
    display: block;
    width: 60px;
    margin: auto;
    /*background: #4c9dff !important;*/
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
  .add,.prompt-box{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -270px;
    width: 540px;
    height: 340px;
    background: #FFFFFF;
    border-radius: 4px;
    z-index: 100;
  }
  .add .title,.prompt-box .head-name{
    display: block;
    width: 100%;
    height: 60px;
    position: relative;
    background: #F9FAFC;
    text-align: center;
  }
  .prompt-box .head-name{
    line-height: 60px;
    font-size: 16px;
    color: #283644;
  }
  .add .title .title-word{
    line-height: 60px;
    font-size: 16px;
    color: #283644;
  }
  .add .title .close,.prompt-box .head-name .close{
    position: absolute;
    right: 20px;
    top: 27px;
  }
  .prompt-box .prompt-word{
    margin: 92px auto;
    font-size: 16px;
    color: #283644;
    text-align: center;
  }
  .username{
    text-align: center;
    margin-top: 30px;
  }
  .username label,.note label{
    display: inline-block;
    margin-right: 16px;
    font-size: 14px;
    color: #979BA1;
  }
  .note{
    padding:0 0 0 103px;
    border-left: none;
    margin: 26px 0;
  }
  .note label{
    vertical-align: top;
  }
  .username input{
    display: inline-block;
    width: 335px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
    padding-left: 10px;
  }
  textarea{
    display: inline-block;
    width: 335px;
    height: 80px;
    border: 1px solid #E6ECF2;
    border-radius: 4px;
    padding: 10px;
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
  .action{
    margin-bottom: 20px;
  }
  .el-pagination{
    float: left;
  }
  .btn-add{
    float: right;
    width: 180px;
  }
  .table-striped>tbody>tr:nth-of-type(odd){
    background: #fff !important;
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
  .portlet.light.bordered{
    border: none !important;
  }
  .portlet.bordered{
    border-left: none !important;
  }


</style>
