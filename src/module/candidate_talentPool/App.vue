<template>
  <div class="talentPoll">
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
              <a href="candidate_talentPool.html" class="active">/ &nbspTalent Pool</a>
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
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="100">
                      </el-pagination>
                    </div>
                    <table class="table table-striped table-bordered table-hover table-checkable">
                      <thead>
                      <tr role="row" class="heading">
                        <th width="4%"></th>
                        <th width="10%">Name</th>
                        <th width="13.8%">Email</th>
                        <th width="13%">Nationality</th>
                        <th width="6%">Age</th>
                        <th width="6%">Rate</th>
                        <th width="11%">Rate Recruiter</th>
                        <th width="16%">Assigning Customer</th>
                        <th width="12.2%">Status</th>
                        <th width="8%">Actions</th>
                      </tr>
                      <tr role="row" class="filter">
                        <td></td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm userInput" name="order_id">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id">
                        </td>
                        <td>
                          <input type="text" class="form-control form-filter input-sm" name="order_id">
                        </td>
                        <td>
                          <select name="" id="thead_sele">
                            <option value=""></option>
                            <option value="Invisible">Free</option>
                            <option value="Visible">Closed</option>
                            <option value="Visible">Proceed</option>
                            <option value="Visible">Visa</option>
                          </select>
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
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="readStatus">
                            <i class="no_icon"></i>
                          </div>
                          <div class="readStatus">
                            <i class="have_icon"></i>
                            <span class="readStatus_number">10</span>
                          </div>
                        </td>
                        <td>Steve Jobs</td>
                        <td>steve.jobs@apple.com</td>
                        <td>United States</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>Maggie Ran</td>
                        <td>First Leap Beijing</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Free</button>
                        </td>
                        <td>
                          <a href="javascript:;" class="btn blue" @click="view">view</a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="page"
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
        page:1
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
      view(){

      }
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
  thead {
    background: #F9FAFC;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background: #fff !important;
  }
  .portlet.light.bordered{
    border: none !important;
  }
  .portlet.bordered{
    border-left: none !important;
  }
  .row{
    margin-top: 36px;
  }
  .action{
    margin-bottom: 20px;
  }
  #thead_sele{
    width: 98%;
    height: 30px;
    background: #fff;
    border:1px solid #ccc;
    border-radius: 0 !important;
  }
  .btn-circle{
    width: 70px;
    height: 26px;
    line-height: 12px !important;
  }
  .readStatus{
    width: 20px;
    height: 18px;
    position: relative;
    margin: auto;
  }
  .readStatus .no_icon,.have_icon{
    display: block;
    width: 100%;
    height: 100%;
  }
  .readStatus .no_icon{
    background: url("../../common/img/icon-message-no.png")no-repeat center;
    background-size: cover;
  }
  .readStatus .have_icon{
    background: url("../../common/img/icon-message-have.png")no-repeat center;
    background-size: cover;
  }
  .readStatus .readStatus_number{
    position: absolute;
    top:0;
    left: 3px;
    font-size: 12px;
    color: #fff;
  }
</style>
