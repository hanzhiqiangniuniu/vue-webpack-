<template>
  <div class="business">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;" style="cursor:default;">Admin&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="blog_tag_list.html" class="active">/ &nbspBusiness Users&nbsp&nbsp</a>
            </li>
          </ul>
          <div class="set_tag_con">
            <ul class="con_tab clear">
              <li class="con_list">
                <a href="business.html" class="active">Registered</a>
              </li>
              <li class="con_list">
                <a href="generated.html">Generated</a>
              </li>
            </ul>
            <div class="table-container clear">
              <table class="table table-striped table-bordered table-hover table-checkable order-column"  id="tagTable">
                <thead>
                <tr role="row" class="heading">
                  <th width="16%">Login Account</th>
                  <th width="32%">Company Name</th>
                  <th width="16%">Contact Name</th>
                  <th width="16%">Contact Number</th>
                  <th width="20%">Register Time</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                  <!--<td>12345678900</td>
                  <td>北京励步英语儿童教育集团</td>
                  <td>张双全</td>
                  <td>12345678900</td>
                  <td>2017/04/12 16:34</td>-->
                </tr>
                </tbody>
              </table>
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
        listArr:[],
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      getList(){
        var token=$.cookie('token');
        this.$http.get(interfaceStr+'cc/account/list/register?access_token='+token).then(function (res) {
          this.listArr=res.body.resultObj;
          $("#tagTable").DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "aaSorting" : [[4, "desc"]], //默认的排序方式，第1列，升序排列
            "info": true,
            "destroy":true,
            "autoWidth": false,
            "processing":true,
            "serverSide":false,    //true代表后台处理分页，false代表前台处理分页
            "PaginationType" : "full_numbers", //详细分页组，可以支持直接跳转到某页
            //当处理大数据时，延迟渲染数据，有效提高Datatables处理能力
            "deferRender": true,
            "data":this.listArr,
            "columns":[
              { data: 'phoneNumber' },
              { data: function (e) {
                return e.customerEntity.customerName
              }},
              { data: function (e) {
                return e.customerEntity.contactPerson
              }},
              { data: function (e) {
                return e.customerEntity.contactPhone
              }},
              { data: 'addTiemStr'},
            ]

          })
        })
      }
    },
    mounted(){
      this.getList()
    }
  }
</script>

<style>
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
  .set_tag_con .con_tab .con_list:hover a{
    color: #4C9DFF;
  }
  @media (min-width: 992px){
    .page-content-wrapper .page-content{
      padding: 25px 50px 10px !important;
    }
  }

</style>
