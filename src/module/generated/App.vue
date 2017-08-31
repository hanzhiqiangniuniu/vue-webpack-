<template>
  <div class="generated">
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
                <a href="business.html">Registered</a>
              </li>
              <li class="con_list">
                <a href="generated.html" class="active">Generated</a>
              </li>
            </ul>
            <div class="table-container clear">
              <div class="btn-add">
                <button class="btn blue" style="width: 180px" @click="addNew">+ Add New</button>
              </div>
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
                  <!--<td>12345678900</td>-->
                  <!--<td>北京励步英语儿童教育集团</td>-->
                  <!--<td>张双全</td>-->
                  <!--<td>12345678900</td>-->
                  <!--<td>2017/04/12 16:34</td>-->
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
        Add New
        <i class="icon-close" @click="add_cancel"></i>
      </span>
      <div class="inputBox">
        <div class="form-group">
          <span class="tag_name">Company Name</span>
          <input type="text" class="form-control" v-model="Company_name_val" @focus="input1Focus">
          <span class="notice" v-show="com_name_notice">Required</span>
        </div>
        <div class="form-group">
          <span class="tag_name">Contact Name</span>
          <input type="text" class="form-control" v-model="Contact_name_val" @focus="input2Focus">
          <span class="notice" v-show="con_name_notice">Required</span>
        </div>
        <div class="form-group" style="margin-bottom: 0">
          <span class="tag_name">Contact Number</span>
          <input type="text" class="form-control" v-model="Contact_number_val" @focus="input3Focus">
          <span class="notice" v-show="number_notice">Required</span>
          <span class="notice" v-show="number_notice1">The format is incorrect</span>
        </div>
      </div>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="add_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="add_confirm">Confirm</button>
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
        Company_name_val:'',
        Contact_name_val:'',
        Contact_number_val:'',
        listArr:[],
        com_name_notice:false,
        con_name_notice:false,
        number_notice:false,
        number_notice1:false,
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods:{
      getList(){
        var token=$.cookie('token');
        this.$http.get(interfaceStr+'cc/account/list/visitor?access_token='+token).then(function (res) {
          //console.log(res)
          this.listArr = res.body.resultObj;
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
      },
      input1Focus(){
        this.com_name_notice=false
      },
      input2Focus(){
        this.con_name_notice=false
      },
      input3Focus(){
        this.number_notice=false;
        this.number_notice1=false
      },
      addNew(){
        this.mask=true;
        this.add_new=true
      },
      add_cancel(){
        this.mask=false;
        this.add_new=false
      },
      add_confirm(){
        var  reg = /^1\d{10}$/;
        var token=$.cookie('token');
        if(this.Company_name_val===''||this.Contact_name_val===''||!reg.test(this.Contact_number_val)){
           if(this.Company_name_val===''){
             console.log(1111)
             this.com_name_notice=true
           }
           if(this.Contact_name_val===''){
             this.con_name_notice=true
           }
           if(this.Contact_number_val===''){
             this.number_notice=true
           }else if(!reg.test(this.Contact_number_val)){
             this.number_notice1=true
           }
        }else {
          this.$http.post(interfaceStr+'cc/account/generate/visitor',{'access_token':token,'customerName':this.Company_name_val,'contactPerson':this.Contact_name_val,'contactNumber':this.Contact_number_val},{emulateJSON:true}).then(function (res) {
            //console.log(res);
            if(res.body.error_code===200){
              this.getList();
              this.mask=false;
              this.add_new=false
            }
          })
        }
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
    height: 366px;
    margin-left: -270px;
    margin-top: -183px;
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
    width: 446px;
    margin: 30px auto;
  }
  .inputBox .form-group{
    position: relative;
    margin-bottom: 27px;
    font-size: 0;
  }
  .inputBox .form-group .tag_name{
    display: inline-block;
    width: 110px;
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
    bottom: -20px;
    left: 129px;
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
  .dataTables_extended_wrapper .table.dataTable{
    margin: 0 !important;
  }
  @media (min-width: 992px){
    .page-content-wrapper .page-content{
      padding: 25px 50px 10px !important;
    }
  }

</style>
