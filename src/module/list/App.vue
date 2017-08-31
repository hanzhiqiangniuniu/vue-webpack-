<template>
  <div class="in-list">
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
              <a href="institute_list.html" class="active">/ &nbspList</a>
            </li>
          </ul>
          <div class="row" style="min-width:1070px">
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
                      <div class="btn-add">
                        <button class="btn blue" style="width: 180px" @click="addNew">+ Add New</button>
                      </div>
                    </div>
                    <table class="table table-striped table-bordered table-hover table-checkable">
                      <thead>
                      <tr role="row" class="heading">
                        <th width="24%">Logo</th>
                        <th width="18%">Name</th>
                        <th width="8%">Branches</th>
                        <th width="8%">Order</th>
                        <th width="13%">Update Time</th>
                        <th width="11%">Status</th>
                        <th width="18%">Actions</th>
                      </tr>
                      <tr role="row" class="filter">
                        <td>
                          <input type="text" class="form-control form-filter input-sm userInput" name="order_id"
                                 disabled="disabled">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id" v-model="name_val">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id" disabled="disabled">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id" disabled="disabled">
                        </td>
                        <td>
                          <div class="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from"
                                   placeholder="From" disabled="disabled">
                            <span class="input-group-btn">
                                <button class="btn btn-sm default" type="button">
                                  <i class="fa fa-calendar"></i>
                                </button>
                              </span>
                          </div>
                          <div class="input-group date date-picker" data-date-format="dd/mm/yyyy">
                            <input type="text" class="form-control form-filter input-sm" readonly name="order_date_to" placeholder="To" disabled="disabled">
                            <span class="input-group-btn">
                                <button class="btn btn-sm default" type="button">
                                 <i class="fa fa-calendar"></i>
                                </button>
                              </span>
                          </div>
                        </td>
                        <td>
                          <select name="" id="" class="form-control" v-model="status_val">
                            <option value=""></option>
                            <option value="0">Invisible</option>
                            <option value="1">Visible</option>
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
                      <tr v-for="instituteList in this.indtituteArr">
                        <td>
                          <img src="" style="width: 200px;height: 75px" alt="" v-if="instituteList.logo===null">
                          <img :src="instituteList.logo.materialUrl" style="width: 200px;height: 75px" :alt="instituteList.logo.altText" v-else="instituteList.logo!=null">
                        </td>
                        <td>{{instituteList.instituteName}}</td>
                        <td>2</td>
                        <td>{{instituteList.orderNumber}}</td>
                        <td>{{instituteList.startYear}}</td>
                        <td>
                          <button class="btn invisible mt-ladda-btn ladda-button btn-circle" v-if="instituteList.visible===0">Invisible</button>
                          <button class="btn visible mt-ladda-btn ladda-button btn-circle" v-else="instituteList.visible===1">visible</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view(instituteList.id)">view</a>
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
      return {
        logUrl: '',
        indtituteArr:[],
        total:0,
        page:1,
        pageSize:10,
        name_val:'',
        status_val:''
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav': leftNav,
    },
    methods: {
      get_instituteList(page,pageSize,name_val,status_val){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/insititute/list?access_token='+token+'&pageIndex='+page+'&pageSize='+pageSize+'&instituteName='+name_val+'&visible='+status_val).then(function (res) {
          this.indtituteArr=res.body.resultObj.instituteList;
          this.total=res.body.resultObj.totalNumber;
        })
      },
      handleSizeChange(val) {
          console.log(1111)
        this.pageSize=val;
        this.get_instituteList(this.page,this.pageSize,this.name_val,this.status_val);
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(22222)
        this.page=val;
        this.get_instituteList(this.page,this.pageSize,this.name_val,this.status_val);
        //console.log(`当前页: ${val}`);
      },
      view(id){
        location.href='institute_info.html?id='+id
      },
      addNew(){
        location.href='institute_info.html'
      },
      search(){
        this.get_instituteList(this.page,this.pageSize,this.name_val,this.status_val);
      },
      reset(){
        this.name_val='';
        this.status_val='';
        this.get_instituteList(this.page,this.pageSize,this.name_val,this.status_val);
      }
    },
    mounted(){
     this.get_instituteList(this.page,this.pageSize,'','')
    },

  }

</script>

<style>
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

  .portlet.light.bordered {
    border: none !important;
  }

  .portlet.bordered {
    border-left: none !important;
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

  .action {
    margin-bottom: 20px;
  }

  .blue {
    display: block;
    width: 60px;
    margin: auto !important;
    /*background: #4c9dff !important;*/
  }

  .btn-circle {
    width: 80px;
    display: block;
    margin: auto !important;
  }

  .el-pagination {
    float: left;
  }
  .btn-add {
    float: right;
    width: 180px;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background: #fff !important;
  }
  .invisible,.visible{
    width: 70px;
    height: 26px;
    background: #3F3F3F;
    color: #fff;
    line-height: 14px !important;
  }
  .visible{
    background: #13CE66;
  }


</style>
