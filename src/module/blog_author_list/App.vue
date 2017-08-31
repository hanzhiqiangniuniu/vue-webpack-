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
                 <a href="blog_author_list.html" class="active">Author</a>
               </li>
               <li class="con_list">
                 <a href="blog_posts.html">Posts</a>
               </li>
               <li class="con_list">
                 <a href="blog_category_list.html">Category</a>
               </li>
             </ul>
             <div class="table-container clear">
               <div class="action clear">
                 <div class="btn-add">
                   <button class="btn blue" style="width: 180px" @click="add_author">+ New Author</button>
                 </div>
               </div>
               <table class="table table-striped table-bordered table-hover table-checkable order-column"  id="tagTable">
                 <thead>
                 <tr role="row" class="heading">
                   <th width="12%">Avatar</th>
                   <th width="17%">Display Name</th>
                   <th width="17%">Real Name</th>
                   <th width="9%">Articles</th>
                   <th width="10%">Status</th>
                   <th width="15%">Created Time</th>
                   <th width="20%">Actions</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                   <!--<td>
                     <img src="" alt="" class="avatar_img">
                   </td>
                   <td>
                     Josh Wilson
                   </td>
                   <td>Elizabeth Smith</td>
                   <td>6</td>
                   <td>Active</td>
                   <td>2017/4/12 16:34</td>
                   <td>
                     <button type="button" class="btn blue width70" @click="link_edit_author">Edit</button>
                     <button type="button" class="btn red btn-outline width70" @click="author_dele">Delete</button>
                   </td>-->
                 </tr>
                 </tbody>
               </table>
             </div>
           </div>
         </div>
       </div>
     </div>
     <!--<div class="mask" v-show="mask"></div>
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
     </div>-->
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
        dele_popup:false,
        AuthorArr:[],
        editId:''
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods: {
      getAuthorList(){
        var _this=this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/setting/author/list?access_token='+token).then(function (authorRes) {
          this.AuthorArr=authorRes.body.resultObj;
          $("#tagTable").DataTable({
            "paging": true,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "aaSorting" : [[5, "desc"]], //默认的排序方式，第1列，升序排列
            "info": true,
            "destroy":true,
            "autoWidth": false,
            "processing":true,
            "serverSide":false,    //true代表后台处理分页，false代表前台处理分页
            "PaginationType" : "full_numbers", //详细分页组，可以支持直接跳转到某页
            //当处理大数据时，延迟渲染数据，有效提高Datatables处理能力
            "deferRender": true,
            "data":this.AuthorArr,
            "columns":[
              { data: function(e){
                  return '<img src="'+e.headImg+'" alt="" class="avatar_img">';
                }
              },
              { data: 'displayName'},
              { data: 'realName'},
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
                return '<button type="button" class="btn blue width70 authoritem" authorId="'+e.id+'">Edit</button>';
              }
              }
            ]

          })
          $(".authoritem").click(function(){
            var authorId=$(this).attr('authorId');
            _this.link_edit_author(authorId);
          });
          /*$('.authorDele').click(function () {
            var authorId=$(this).attr('authorId');
            _this.editId = authorId;
            _this.author_dele();
          })*/
        })

      },
      link_edit_author(id){
         location.href='author_edit.html?id='+id
      },
      add_author(){
        location.href='author_edit.html'
      }
      /*author_dele(){
        this.mask=true;
        this.dele_popup=true
      },
      dele_cancel(){
        this.mask=false;
        this.dele_popup=false
      },
      dele_confirm(){
        this.mask=false;
        this.dele_popup=false
      }*/
    },
    mounted(){
      this.getAuthorList()
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
    text-align: center !important;
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
  .avatar_img{
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50% !important;
    /*background: darkmagenta;*/
    margin: auto;
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
