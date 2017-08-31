<template>
  <div class="candidate_list">
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
              <a href="candidate_list.html" class="active">/ &nbspList</a>
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
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="100">
                      </el-pagination>
                      <!--<div class="btn-add">
                        <button class="btn blue" style="width: 180px" @click="addUser">+ Add New</button>
                      </div>-->
                    </div>
                    <table class="table table-striped table-bordered table-hover table-checkable">
                      <thead>
                        <tr role="row" class="heading">
                          <th width="10%">Name</th>
                          <th width="20%">Requisition Title</th>
                          <th width="13%">Email</th>
                          <th width="13%">Source</th>
                          <th width="9%">Other Application</th>
                          <th width="9%">Update Time</th>
                          <th width="9%">Current Workflow</th>
                          <th width="9%">Recruiter</th>
                          <th width="8%">Actions</th>
                        </tr>
                        <tr role="row" class="filter">
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="order_id">
                          </td>
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="">
                          </td>
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="">
                          </td>
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="">
                          </td>
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="">
                          </td>
                          <td>
                            <div class="input-group date date-picker margin-bottom-5" data-date-format="dd/mm/yyyy">
                              <input type="text" class="form-control form-filter input-sm" readonly name="order_date_from" placeholder="From" style="padding: 5px 2px">
                              <span class="input-group-btn">
                                  <button class="btn btn-sm default" type="button">
                                    <i class="fa fa-calendar"></i>
                                  </button>
                              </span>
                            </div>
                            <div class="input-group date date-picker" data-date-format="dd/mm/yyyy">
                              <input type="text" class="form-control form-filter input-sm" readonly name="order_date_to" placeholder="To" style="padding: 5px 2px">
                              <span class="input-group-btn">
                                  <button class="btn btn-sm default" type="button">
                                   <i class="fa fa-calendar"></i>
                                  </button>
                                </span>
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="">
                          </td>
                          <td>
                            <input type="text" class="form-control form-filter input-sm userInput" name="">
                          </td>
                          <td>
                            <div class="margin-bottom-5">
                              <button class="btn btn-sm green btn-outline filter-submit margin-bottom">
                                <i class="fa fa-search"></i> Search
                              </button>
                            </div>
                            <button class="btn btn-sm red btn-outline filter-cancel">
                              <i class="fa fa-times"></i> Reset
                            </button>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Steve Jobs</td>
                          <td>Music Teacher in A+W Academy </td>
                          <td>steve.jobs@apple.com</td>
                          <td>Agency New Life ESL</td>
                          <td>+2</td>
                          <td>2017/4/12 16:34</td>
                          <td>Internal 1st interview</td>
                          <td>Maggie</td>
                          <td>
                            <a href="personnel_detail.html" class="btn blue" @click="view">view</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="[5, 10, 15, 20]"
                      :page-size="10"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="100">
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
  import nav from '../../components/nav.vue'
  import leftNav from '../../components/leftNav.vue'
  export default{
    data(){
      return{

      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      addUser(){

      },
      addHide(){

      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      view(){
        //location.href='schoolDetail.html'
      }
    },
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
  .table>thead>tr>th{
    vertical-align: middle !important;
  }
  .table .btn{
    margin-right: 0 !important;
  }
</style>
