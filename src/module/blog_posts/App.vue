<template>
  <div class="blog_posts">
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
                <a href="blog_author_list.html">Author</a>
              </li>
              <li class="con_list">
                <a href="blog_posts.html" class="active">Posts</a>
              </li>
              <li class="con_list">
                <a href="blog_category_list.html">Category</a>
              </li>
            </ul>
            <div class="edit-btn-box clear">
              <button type="button" class="btn blue width120" @click="category_edit" v-show="cate_edit_btn">Edit</button>
            </div>
            <div class="post_con">
              <span class="post_con_tag">Blog Home Page</span>
              <ul class="page_tab clear">
                <li class="page_list">
                  <span class="list_name">Rank1 ID</span>
                  <input type="text" class="form-control" value="" v-model="Idtext1" :disabled="disabled">
                </li>
                <li class="page_list">
                  <span class="list_name">Rank2 ID</span>
                  <input type="text" class="form-control" value="" v-model="Idtext2" :disabled="disabled">
                </li>
                <li class="page_list">
                  <span class="list_name">Rank3 ID</span>
                  <input type="text" class="form-control" value="" v-model="Idtext3" :disabled="disabled">
                </li>
                <li class="page_list">
                  <span class="list_name">Rank4 ID</span>
                  <input type="text" class="form-control" value="" v-model="Idtext4" :disabled="disabled">
                </li>
              </ul>
            </div>
            <div class="buttons" v-show="buttons">
              <button type="button" class="btn grey-salsa btn-outline width120" @click="edit_cancel">Cancel</button>
              <button type="submit" class="btn blue width120" @click="edit_confirm">Confirm</button>
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
        Idtext1:'',
        Idtext2:'',
        Idtext3:'',
        Idtext4:'',
        cate_edit_btn:true,
        disabled:true,
        buttons:false,
        postsArr:[],
        postsIds:[]
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav': leftNav,
    },
    methods:{
      getPosts(){
        var _this=this;
        var token = $.cookie('token');
        this.$http.get(interfaceStr+'cc/blog/setting/posts/get?access_token='+token).then(function (postsRes) {
           this.postsArr= postsRes.body.resultObj;
           this.Idtext1=this.postsArr[0].blogId;
           this.Idtext2=this.postsArr[1].blogId;
           this.Idtext3=this.postsArr[2].blogId;
           this.Idtext4=this.postsArr[3].blogId;
        })
      },
      category_edit(){
        this.cate_edit_btn=false;
        this.disabled=false;
        this.buttons=true;
      },
      edit_cancel(){
        this.cate_edit_btn=true;
        this.disabled=true;
        this.buttons=false;
      },
      edit_confirm(){
        var token = $.cookie('token');
        this.postsIds=[this.Idtext1,this.Idtext2,this.Idtext3,this.Idtext4];
        this.$http.post(interfaceStr+'cc/blog/setting/posts/update',{'access_token':token,'blogIds':this.postsIds.join(',')},{emulateJSON:true}).then(function (res) {
          if(res.body.error_code===200){
            this.cate_edit_btn=true;
            this.disabled=true;
            this.buttons=false;
          }
        })
      }
    },
    mounted(){
      this.getPosts()
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
  .edit-btn-box{
    margin: 20px 0;
  }
  .width120{
    width: 120px;
    height: 44px;
  }
  .edit-btn-box .btn{
    float: right;
    border-radius: 2px !important;
  }
  .post_con{
    width: 100%;
    background: #F9FAFC;
    margin-bottom: 50px;
  }
  .post_con .post_con_tag{
    display: block;
    height: 74px;
    border-bottom: 1px solid #E6ECF2;
    line-height: 74px;
    text-align: center;
    font-size: 16px;
    color: #283644;
    font-weight: bold;
  }
  .post_con .page_tab{
    padding: 50px 0;
    width: 830px;
    margin: auto;
  }
  .post_con .page_tab .page_list{
    float: left;
    margin-right: 70px;
    font-size: 0;
  }
  .post_con .page_tab .page_list:last-child{
    margin-right: 0;
  }
  .post_con .page_tab .page_list .list_name{
    display: inline-block;
    font-size: 14px;
    color: #979BA1;
    margin-right: 16px;
  }
  .post_con .page_tab .page_list .form-control{
    display: inline-block;
    width: 80px;
    height: 40px;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
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
</style>
