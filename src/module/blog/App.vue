<template>
  <div class="blog">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list" style="cursor: default">
              <a href="javascript:;">Blog Management&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="blog.html" class="active">/ &nbspBlog</a>
            </li>
          </ul>
          <!--分类选择-->
          <div class="blog_cate clear">
            <div class="left_sele_box">
              <span class="sele_tag">Category</span>
              <select name="cate_sele" id="category" class="form-control category_sele" v-model="cateId" @change="cateChange">
                <option v-for="cate in this.categoryList" :value="cate.id">{{cate.categoryName}}</option>
              </select>
            </div>
            <button type="button" class="btn blue width180 new_posts" @click="link_edit">+ New Post</button>
          </div>
          <!--tab按钮区-->
          <ul class="blog_tab clear">
            <li class="blog_list" @click="draftClick">Draft</li>
            <li class="blog_list active" @click="pubClick">Published</li>
            <li class="blog_list" @click="libClick">Library</li>
            <li class="blog_list" @click="binClick">Bin</li>
          </ul>
          <!--draft-content-->
          <div class="draft_con tab_content">
            <div class="glob_edit_btn">
              <button type="button" class="btn blue width70 move_btn" @click="blog_move">Move to</button>
              <button type="button" class="btn red btn-outline width70 dele_btn" @click="blog_dele_glob">Delete</button>
            </div>
            <div class="table-container clear">
              <table class="table table-striped table-bordered table-hover table-checkable">
                <thead>
                  <tr role="row" class="heading">
                    <th width="4%">
                      <input type="checkbox" class="form-control head_check" name="draft_table_check" value="0" v-model="all_check" @click="checkClick">
                    </th>
                    <th width="6%">ID</th>
                    <th width="12%">Cover Image</th>
                    <th width="18%">Title</th>
                    <th width="7%">Author</th>
                    <th width="8%">Category</th>
                    <th width="16%">Summary</th>
                    <th width="11%">Tags</th>
                    <th width="9%">Created Date</th>
                    <th width="9%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="blogList in this.blogArr">
                    <td>
                      <input type="checkbox" class="form-control body_check" name="draft_table_check" v-model="checkArr" :value="blogList.id">
                    </td>
                    <td>{{blogList.id}}</td>
                    <td>
                      <img :src="blogList.material===null?'':blogList.material.materialUrl" :alt="blogList.material===null?'':blogList.material.altText" style="width: 100px;height: 55px">
                    </td>
                    <td>
                      {{blogList.title}}
                    </td>
                    <td>{{blogList.authorName}}</td>
                    <td>{{blogList.categoryName}}</td>
                    <td>
                      {{blogList.description}}
                    </td>
                    <td>
                      <p v-for="blogTag in (blogList.blogTags.slice(0,2))">{{blogTag.tagName}}</p>
                    </td>
                    <td>
                      {{blogList.updateTimeStr}}
                    </td>
                    <td>
                      <button type="button" class="btn blue width70" style="margin-bottom: 10px" @click="blog_list_edit(blogList.id)">Edit</button>
                      <button type="button" class="btn red btn-outline width70" @click="blog_dele(blogList.id)">Delete</button>
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
          <!--publish-content-->
          <div class="publish_con tab_content">
            <div class="glob_edit_btn">
              <button type="button" class="btn blue width70 move_btn" @click="blog_move">Move to</button>
              <button type="button" class="btn blue btn-outline width70 dele_btn" @click="to_draft_glob">To draft</button>
            </div>
            <div class="table-container clear">
              <table class="table table-striped table-bordered table-hover table-checkable">
                <thead>
                <tr role="row" class="heading">
                  <th width="4%">
                    <input type="checkbox" class="form-control head_check" name="table_check" value="0" v-model="all_check" @click="checkClick">
                  </th>
                  <th width="6%">ID</th>
                  <th width="12%">Cover Image</th>
                  <th width="18%">Title</th>
                  <th width="7%">Author</th>
                  <th width="8%">Category</th>
                  <th width="16%">Summary</th>
                  <th width="11%">Tags</th>
                  <th width="9%">Created Date</th>
                  <th width="9%">Actions</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="blogList in this.blogArr">
                    <td>
                      <input type="checkbox" class="form-control body_check" name="table_check" v-model="checkArr" :value="blogList.id">
                    </td>
                    <td>{{blogList.id}}</td>
                    <td>
                      <img :src="blogList.material===null?'':blogList.material.materialUrl" :alt="blogList.material===null?'':blogList.material.altText" style="width: 100px;height: 55px">
                    </td>
                    <td>
                      {{blogList.title}}
                    </td>
                    <td>{{blogList.authorName}}</td>
                    <td>{{blogList.categoryName}}</td>
                    <td>
                      {{blogList.description}}
                      </td>
                    <td>
                      <p v-for="blogTag in (blogList.blogTags.slice(0,2))">{{blogTag.tagName}}</p>
                    </td>
                    <td>
                      {{blogList.updateTimeStr}}
                      </td>
                    <td>
                      <button type="button" class="btn blue width70" style="margin-bottom: 10px" @click="blog_list_edit(blogList.id)">Edit</button>
                      <button type="button" class="btn blue btn-outline width70 dele_btn" @click="to_draft(blogList.id)">To draft</button>
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
          <!--library-content-->
          <div class="library_con tab_content">
            <div class="glob_edit_btn">
              <button type="button" class="btn blue width70 move_btn" @click="blog_move">Move to</button>
              <button type="button" class="btn blue btn-outline width70 dele_btn" @click="to_draft_glob">To draft</button>
            </div>
            <div class="table-container clear">
              <table class="table table-striped table-bordered table-hover table-checkable">
                <thead>
                <tr role="row" class="heading">
                  <th width="4%">
                    <input type="checkbox" class="form-control head_check" name="table_check" value="0" v-model="all_check" @click="checkClick">
                  </th>
                  <th width="6%">ID</th>
                  <th width="12%">Cover Image</th>
                  <th width="18%">Title</th>
                  <th width="7%">Author</th>
                  <th width="8%">Category</th>
                  <th width="16%">Summary</th>
                  <th width="11%">Tags</th>
                  <th width="9%">Created Date</th>
                  <th width="9%">Actions</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="blogList in this.blogArr">
                  <td>
                    <input type="checkbox" class="form-control body_check" name="table_check" v-model="checkArr" :value="blogList.id">
                  </td>
                  <td>{{blogList.id}}</td>
                  <td>
                    <img :src="blogList.material===null?'':blogList.material.materialUrl" :alt="blogList.material===null?'':blogList.material.altText" style="width: 100px;height: 55px">
                  </td>
                  <td>
                    {{blogList.title}}
                      </td>
                  <td>{{blogList.authorName}}</td>
                  <td>{{blogList.categoryName}}</td>
                  <td>
                    {{blogList.description}}
                      </td>
                  <td>
                    <p v-for="blogTag in (blogList.blogTags.slice(0,2))">{{blogTag.tagName}}</p>
                  </td>
                  <td>
                    {{blogList.updateTimeStr}}
                      </td>
                  <td>
                    <button type="button" class="btn blue width70" style="margin-bottom: 10px" @click="blog_list_edit(blogList.id)">Edit</button>
                    <button type="button" class="btn blue btn-outline width70 dele_btn" @click="to_draft(blogList.id)">To draft</button>
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
          <!--bin-content-->
          <div class="bin_con tab_content">
            <div class="glob_edit_btn">
              <button type="button" class="btn blue width70 move_btn" @click="blog_move">Move to</button>
              <button type="button" class="btn blue btn-outline width70 dele_btn" @click="to_draft_glob">To draft</button>
            </div>
            <div class="table-container clear">
              <table class="table table-striped table-bordered table-hover table-checkable">
                <thead>
                <tr role="row" class="heading">
                  <th width="4%">
                    <input type="checkbox" class="form-control head_check" name="table_check" value="0" v-model="all_check" @click="checkClick">
                  </th>
                  <th width="6%">ID</th>
                  <th width="12%">Cover Image</th>
                  <th width="18%">Title</th>
                  <th width="7%">Author</th>
                  <th width="8%">Category</th>
                  <th width="16%">Summary</th>
                  <th width="11%">Tags</th>
                  <th width="9%">Created Date</th>
                  <th width="9%">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="blogList in this.blogArr">
                  <td>
                    <input type="checkbox" class="form-control body_check" name="table_check" v-model="checkArr" :value="blogList.id">
                  </td>
                  <td>{{blogList.id}}</td>
                  <td>
                    <img :src="blogList.material===null?'':blogList.material.materialUrl" :alt="blogList.material===null?'':blogList.material.altText" style="width: 100px;height: 55px">
                  </td>
                  <td>
                    {{blogList.title}}
                      </td>
                  <td>{{blogList.authorName}}</td>
                  <td>{{blogList.categoryName}}</td>
                  <td>
                    {{blogList.description}}
                      </td>
                  <td>
                    <p v-for="blogTag in (blogList.blogTags.slice(0,2))">{{blogTag.tagName}}</p>
                  </td>
                  <td>
                    {{blogList.updateTimeStr}}
                  </td>
                  <td>
                    <button type="button" class="btn blue btn-outline width70 dele_btn" @click="to_draft(blogList.id)">To draft</button>
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
    <div class="mask" v-show="mask" @click="click_mask"></div>
    <div class="popup" v-show="dele_box">
      <span class="popup_top_tag">
        Delete
        <i class="icon-close" @click="dele_cancel"></i>
      </span>
      <div class="dele_con">
        <p class="dele_con_tag">
          Are you sure you want to delete the them？
        </p>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="dele_cancel">Cancel</button>
          <button type="submit" class="btn blue width120" @click="dele_confirm">Confirm</button>
        </div>
      </div>
    </div>
    <div class="popup" v-show="draft_box">
      <span class="popup_top_tag">
        To Draft
        <i class="icon-close" @click="draft_cancel"></i>
      </span>
      <div class="dele_con">
        <p class="dele_con_tag">
          Are you sure you want to draft the them？
        </p>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="draft_cancel">Cancel</button>
          <button type="submit" class="btn blue width120" @click="draft_confirm">Confirm</button>
        </div>
      </div>
    </div>
    <div class="popup" v-show="move_cate">
      <span class="popup_top_tag">
        Move
        <i class="icon-close" @click="move_cancel"></i>
      </span>
      <div class="cate_sele">
        <label for="">Move to category</label>
        <select name="cate-sele" id="cate_select" class="form-control cate_select" v-model="move_sele_val">
          <option v-for="cate in this.categoryList" :value="cate.id">{{cate.categoryName}}</option>
        </select>
      </div>
      <div class="buttons">
        <button type="button" class="btn grey-salsa btn-outline width120" @click="move_cancel">Cancel</button>
        <button type="submit" class="btn blue width120" @click="move_confirm">Confirm</button>
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
        dele_box:false,
        move_cate:false,
        draft_box:false,
        move_sele_val:1,
        checkArr:[],
        //获取分类
        categoryList:[],
        //分类ID
        cateId:1,
        //博客列表
        blogArr:[],
        //分页
        page:1,
        pageSize:10,
        total:0,
        status:1,
        //点击全选
        all_check:[],
        blogIds:[]
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav':leftNav,
    },
    methods: {
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.pageSize=val;
        this.getBlogList()
      },
      handleCurrentChange(val) {
        this.page=val;
        this.getBlogList()
        //console.log(`当前页: ${val}`);
      },
      pubClick(){
        this.status=1;
        this.all_check=[];
        this.checkArr=[];
        this.blogIds=[];
        this.getBlogList()
      },
      draftClick(){
        this.status=2;
        this.all_check=[];
        this.checkArr=[];
        this.blogIds=[];
        this.getBlogList()
      },
      libClick(){
        this.status=3;
        this.all_check=[];
        this.checkArr=[];
        this.blogIds=[];
        this.getBlogList()
      },
      binClick(){
        this.status=4;
        this.all_check=[];
        this.checkArr=[];
        this.blogIds=[];
        this.getBlogList()
      },
      cateChange(){
        this.all_check=[];
        this.checkArr=[];
        this.blogIds=[];
        this.getBlogList()
      },
      getCategoryList(){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/setting/category/list?access_token='+token).then(function (cateRes) {
          this.categoryList=cateRes.body.resultObj
        })
      },
      getBlogList(){
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/page?access_token='+token+'&page='+this.page+'&pageSize='+this.pageSize+'&categoryId='+this.cateId+'&status='+this.status).then(function (blogRes) {
          this.blogArr=blogRes.body.resultObj.data;
          //console.log(this.blogArr)
          this.total = blogRes.body.resultObj.count;
          for(var i=0;i<this.blogArr.length;i++){
            this.blogIds.push(this.blogArr[i].id)
          }
        })
      },
      link_edit(){
        location.href='blog_edit.html'
      },
      checkClick(){
        if(this.all_check.length === 1){
          for(var i=0;i<this.blogIds.length;i++){
            this.checkArr.push(this.blogIds[i])
          }
        }else if(this.all_check.length === 0){
          this.checkArr=[];
        }
      },
      blog_move(){
        if(this.checkArr.length===0){
          alert('未选中选项～')
        }else{
          this.mask=true;
          this.move_cate=true
        }
      },
      blog_dele_glob(){
        if(this.checkArr.length===0){
          alert('未选中选项～')
        }else{
          this.mask=true;
          this.dele_box=true
        }
      },
      to_draft_glob(){
        if(this.checkArr.length===0){
          alert('未选中选项～')
        }else{
          this.mask=true;
          this.draft_box=true
        }
      },
      updateStatus(status){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/changestatus',{'access_token':token,'blogIds':this.checkArr.join(','),'status':status},{emulateJSON:true}).then(function (deleRes) {
          if(deleRes.body.error_code===200){
            this.all_check=[];
            this.checkArr=[];
            this.blogIds=[];
            this.getBlogList();
            this.mask=false;
            if(status===2){
              this.draft_box=false
            }else {
              this.dele_box=false
            }
          }
        })
      },
      blog_dele(id){
        this.checkArr.push(id);
        this.mask=true;
        this.dele_box=true;
      },
      blog_list_edit(id){
        location.href='blog_edit.html?id='+id+'&status='+this.status;
      },
      to_draft(id){
        this.checkArr.push(id);
        this.mask=true;
        this.draft_box=true
      },
      draft_cancel(){
        this.all_check=[];
        this.checkArr=[];
        this.mask=false;
        this.draft_box=false
      },
      draft_confirm(){
        this.updateStatus(2)
      },
      click_mask(){

      },
      dele_cancel(){
        this.mask=false;
        this.dele_box=false;
        this.all_check=[];
        this.checkArr=[];
      },
      dele_confirm(){
        this.updateStatus(4)
      },
      move_cancel(){
        this.all_check=[];
        this.checkArr=[];
        this.mask=false;
        this.move_cate=false
      },
      move_confirm(){
        var token = $.cookie('token');
        this.$http.post(interfaceStr+'cc/blog/batchmove',{'access_token':token,'blogIds':this.checkArr.join(','),'categoryId':this.move_sele_val},{emulateJSON:true}).then(function (deleRes) {
          if(deleRes.body.error_code===200){
            this.blogIds=[];
            this.getBlogList();
            this.mask=false;
            this.move_cate=false;
            this.all_check=[];
            this.checkArr=[];
            this.move_sele_val=1;
          }
        });
      }
    },
    created(){
      this.getCategoryList();
    },
    mounted(){
      String.prototype.queryURLParameter=function () {
        var obj={},
          reg=/([^?=&#]+)=([^?=&#]+)/g;
        this.replace(reg,function () {
          var key=arguments[1],
            value=arguments[2];
          obj[key]=value;
        });
        return obj;
      };
      var status=window.location.href.queryURLParameter()["status"];
      console.log(status)
      if(status===undefined){
        this.getBlogList();
        tabClick();
      }else if(status==='1'){
        this.getBlogList();
        tabClick();
        //this.pubClick()
      }else if(status==='2'){
        $('.blog_tab li').eq(0).addClass("active").siblings().removeClass('active');
        $(".tab_content").hide().eq(0).show();
        this.draftClick();
        tabClick();
      }else if(status==='3'){
        $('.blog_tab li').eq(2).addClass("active").siblings().removeClass('active');
        $(".tab_content").hide().eq(2).show();
        this.libClick();
        tabClick();
      }
      function tabClick() {
        $('.blog_tab li').click(function () {
          //location.href='blog.html';
          $('.blog_tab li').eq($(this).index()).addClass("active").siblings().removeClass('active');
          $(".tab_content").hide().eq($(this).index()).show();
        });
      }


    }
  }
</script>

<style scoped>
  .page-content{
    min-width: 1080px !important;
    padding: 25px 20px 100px !important;
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
  thead{
    background: #F9FAFC;
  }
  thead tr th{
    vertical-align: top;
  }
  tbody tr{
    background: #fff !important;
  }
  .blog_cate{
    min-width: 1060px;
    margin: 35px auto;
    padding: 0 30px;
  }
  .blog_cate .left_sele_box{
    float: left;
    font-size: 0;
  }
  .blog_cate .left_sele_box .sele_tag{
    display: inline-block;
    font-size: 14px;
    color: #979BA1;
    margin-right: 16px;
  }
  .blog_cate .left_sele_box .category_sele{
    display: inline-block;
    padding: 16px;
    width: 200px;
    height: 44px;
    border: 1px solid #E6ECF2 !important;
    border-radius: 4px !important;
    font-size: 14px;
    color: #283644;
  }
  .blog_cate .new_posts{
    display: block;
    float: right;
  }
  .width180{
    width: 180px;
    height: 44px;
    border-radius: 2px !important;
    border: none !important;
    font-size: 14px;
    color: #FFFFFF;
  }
  .blog_tab{
    width: 100%;
    padding: 50px 0 0 36px;
    background: #F9FAFC;
  }
  .blog_tab .blog_list{
    float: left;
    margin-right: 10px;
    padding: 0 36px 12px;
    font-size: 14px;
    color: #8492A6;
    cursor: pointer;
  }
  .blog_tab .blog_list:hover{
    color: #4C9DFF;
  }
  .blog_tab .blog_list:last-child{
    margin-right: 0;
  }
  .blog_tab .active{
    color: #4C9DFF;
    border-bottom: 3px solid #4C9DFF;
  }
  .glob_edit_btn{
    margin: 30px 0;
    padding: 0 30px;
  }
  .glob_edit_btn .move_btn{
    display: inline-block;
    margin-right: 14px;
  }
  .glob_edit_btn .dele_btn{
    display: inline-block;
  }
  .width70{
    width: 70px;
    height: 26px;
    border-radius: 2px !important;
    line-height: 14px !important;
  }
  .table-container{
    padding: 0 30px;
  }
  .head_check,.body_check{
    width: 16px;
    height: 16px;
    margin: auto;
    cursor: pointer;
  }
  .draft_con,.library_con,.bin_con{
    display: none;
  }
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,.4);
    z-index: 120;
  }
  .popup{
    width: 540px;
    height: 340px;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -270px;
    border-radius: 4px;
    background: #fff;
    z-index: 130;
  }
  .popup .popup_top_tag{
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
  .popup .popup_top_tag .icon-close{
    position: absolute;
    right: 10px;
    top: 24px;
    font-size: 24px;
    color: #CCCDCE;
    cursor: pointer;
  }
  .popup .popup_top_tag .icon-close:hover{
    color: #283644;
  }
  .popup .dele_con .dele_con_tag{
    margin: 92px 0;
    text-align: center;
    font-size: 16px;
    color: #283644;
  }
  .cate_sele{
    width: 436px;
    margin: 83px auto;
    font-size: 0;
  }
  .cate_sele label{
    display: inline-block;
    font-size: 14px;
    color: #979BA1;
    margin-right: 16px;
  }
  .cate_sele .cate_select{
    display: inline-block;
    width: 300px;
    height: 40px;
    border: 1px solid #E6ECF2 !important;
    border-radius: 4px !important;
    font-size: 14px;
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
</style>
