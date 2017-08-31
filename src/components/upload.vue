<template>
  <div class="upload" id="Upload">
    <div class="upload-img">
      <span class="upload_name">Pictures</span>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :multiple="true"
        :on-preview="handlePictureCardPreview"
        :on-success="ajax_http"
        :on-error="error"
        :on-remove="handleRemove" class="imgBox">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny" name="img_uploadfile">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="upload-img">
      <span class="upload_name">Videos</span>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :multiple="true"
        :on-error="error"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove" class="imgBox">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny" name="video_uploadfile">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Upload',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
        if (confirm("你确定删除吗？")) {
          alert("确定");
        }
        else {
            return false
        }
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(this.dialogImageUrl)
      },
      ajax_http(response, file, fileList){
          console.log(file,fileList)
      },
      /*beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.listShow=false
          //this.$message.error('上传头像图片只能是 JPG 格式!');
          alert("上传头像图片只能是 JPG 格式!")
          return false
        }
        if (!isLt2M) {
          this.listShow=false
          //this.$message.error('上传头像图片大小不能超过 2MB!');
          alert('上传头像图片大小不能超过 2MB!')
          return false
        }
        return isJPG && isLt2M;
      },*/
      error(err, file, fileList){
          alert('上传失败,请重试。。。')
      }
    }
  }
</script>

<style>
  .upload{
    margin-top: 50px;
  }
  .upload-img{
    margin-bottom: 40px;
    background: #F9FAFC;
  }
  .upload-img .upload_name{
    margin-left: 20px;
    display: block;
    font-size: 14px;
    color: #283644;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #E6ECF2;
  }
  .imgBox{
    padding:30px 20px;
  }
  .el-upload__input{
    display: none !important;
  }
  el-dialog{
    display: none;
  }
  .el-upload--picture-card{
    width: 200px !important;
    height: 75px !important;
    line-height: 88px !important;
  }
  .el-upload-list--picture-card .el-upload-list__item{
    width: 200px !important;
    height: 75px !important;
  }
  .el-progress-circle{
    width: 50px !important;
    height: 50px !important;
    margin: auto !important;
  }
</style>
