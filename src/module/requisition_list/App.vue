<template>
  <div class="requisition_list">
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
              <a href="requisition_list.html" class="active">/ &nbspList</a>
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
                        :current-page="page"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                      </el-pagination>
                      <!--<div class="btn-add">
                        <button class="btn blue" style="width: 180px" @click="addUser">+ Add New</button>
                      </div>-->
                    </div>
                    <table class="table table-striped table-bordered table-hover table-checkable">
                      <thead>
                      <tr role="row" class="heading">
                        <th width="13%">Requisition ID</th>
                        <th width="18%">Tile</th>
                        <th width="13%">Category</th>
                        <th width="13%">Institute</th>
                        <th width="15%">ATS Update Time</th>
                        <th width="13%">Update Time</th>
                        <th width="9%">Status</th>
                        <th width="8%">Actions</th>
                      </tr>
                      <tr role="row" class="filter">
                        <td>
                          <input type="text" class="form-control form-filter input-sm userInput" name="order_id" v-model="resId">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm userInput" name="" v-model="title_val">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm userInput" name="" v-model="cate_val">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm userInput" name="" v-model="ins_name">
                        </td>
                        <td>
                          <div class="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from" placeholder="From" id="Ats_start">
                            <span class="input-group-btn">
                                <button class="btn btn-sm default" type="button">
                                  <i class="fa fa-calendar"></i>
                                </button>
                            </span>
                          </div>
                          <div class="input-group date date-picker" data-date-format="dd/mm/yyyy">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_to" placeholder="To"  id="Ats_end">
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
                          <select name="" id="state_sele" class="form-control">
                            <option value=""></option>
                            <option value="New">New</option>
                            <option value="Posted">Posted</option>
                            <option value="Closed">Closed</option>
                            <option value="Internal">Internal</option>
                          </select>
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
                        <tr v-for="list in this.listAry">
                          <td>{{list.requisitionId}}</td>
                          <td>{{list.title}}</td>
                          <td>{{list.category}}</td>
                          <td>{{list.instituteName}}</td>
                          <td>{{list.lastUpdatedDate}}</td>
                          <td>{{list.updateTimeStr}}</td>
                          <td>
                            <button class="btn new mt-ladda-btn ladda-button btn-circle" v-if="list.status===1001">New</button>
                            <button class="btn posted mt-ladda-btn ladda-button btn-circle" v-else-if="list.status===1002">Posted</button>
                            <button class="btn closed mt-ladda-btn ladda-button btn-circle" v-else-if="list.status===1003">Closed</button>
                            <button class="btn internal mt-ladda-btn ladda-button btn-circle" v-else="list.status===1004">Internal</button>
                          </td>
                          <td>
                            <a href="javascript:;" class="btn blue" @click="view(list.id)">view</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="page"
                      :page-sizes="[5, 10, 15, 20]"
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
        page: 1,
        pageSize:10,
        total:0,
        listAry:[],
        resId:'',
        title_val:'',
        cate_val:'',
        ins_name:'',
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      getRequisition_list(page,pageSize,ats_start,ats_end,update_start,update_end,status){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/requisition/list?access_token='+token+'&pageIndex='+page+'&pageSize='+pageSize+'&requisitionId='+this.resId+'&title='+this.title_val+'&category='+this.cate_val+'&lastUpdatedDateBeginDate='+ats_start+'&lastUpdatedDateEndDate='+ats_end+'&startDate='+update_start+'&endDate='+update_end+'&status='+status+'').then(function (res) {
          this.total=res.body.resultObj.recordsTotal;
          this.listAry=res.body.resultObj.data;
        });
      },
      addUser(){
        this.addshow=true;
        this.maskshow=true
      },
      addHide(){
        this.addshow=false;
        this.maskshow=false;
      },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.pageSize=val;
        this.getRequisition_list(this.page,this.pageSize,'','','','','')
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.page = val;
        this.getRequisition_list(this.page,this.pageSize,'','','','','')
      },
      search(){
        var Ats_start_time=$('#Ats_start').val(),
            Ats_end_time = $('#Ats_end').val(),
            update_start_time = $('#update_start').val(),
            update_end_time = $('#update_end').val(),
            status = $('#state_sele').val();
        if(status==='New'){
            status=1001
        }else if(status==='Posted'){
            status=1002
        }else if(status==='Closed'){
          status=1003
        }else if(status==='Internal'){
          status=1004
        }
        this.getRequisition_list(this.page,this.pageSize,Ats_start_time,Ats_end_time,update_start_time,update_end_time,status)
      },
      reset(){
        this.resId='';
        this.title_val='';
        this.cate_val='';
        this.ins_name='';
        $('#Ats_start').val('');
        $('#Ats_end').val('');
        $('#update_start').val('');
        $('#update_end').val('');
        $('#state_sele').val('');
        this.getRequisition_list(this.page,this.pageSize,$('#Ats_start').val(),$('#Ats_end').val(),$('#update_start').val(),$('#update_end').val(),$('#state_sele').val())
      },
      view(id){
        location.href='schoolDetail.html?id='+id
      }
    },
    mounted(){
      this.getRequisition_list(this.page,this.pageSize,'','','','','')
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
  .action{
    margin-bottom: 20px;
  }
  .portlet.light.bordered{
    border: none !important;
  }
  .portlet.bordered{
    border-left: none !important;
  }
  .table-checkable tr>td:first-child, .table-checkable tr>th:first-child{
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
  .new{
    background: #9CD106;
    color: #FFFFFF;
  }
  .posted{
    background: #009C45;
    color: #FFFFFF;
  }
  .closed{
    background: #3F3F3F;
    color: #FFFFFF;
  }
  .internal{
    background: #F7AC2A;
    color: #FFFFFF;
  }
  .btn{
    width: 70px !important;
  }
</style>
