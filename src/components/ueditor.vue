<template>
  <div id="editor" type="text/plain" @change="setUser"></div>
</template>

<script type="text/ecmascript-6">
  import '../../static/umeditor1.2.3/lang/zh-cn/zh-cn'
  export default {
    name: 'ued',
    data () {
      return {
        um: '',
        uedata: [],
        xierudata: []
      }
    },
    methods:{
      setUser(){
         this.$emit('transUm',this.um)
      }
    },
    mounted() {
      this.um = UM.getEditor('editor', {
        BaseUrl: '',
        UEDITOR_HOME_URL: '/static/umeditor1.2.3/',
        toolbars: [
          'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
          'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
          '| justifyleft justifycenter justifyright justifyjustify |',
          'link unlink | emotion image video | map',
          '| horizontal print preview ', 'drafts', 'formula'

        ],
        elementPathEnabled:false,
        wordCountMsg:'word number:{#count} ',
        initialFrameHeight:140,
        imagePopup:false,
        //serverUrl:"<c:url value='/cc/blog/uediterconfig.action'/>",
        autoHeightEnabled: true,//自动长高
        autoFloatEnabled: true,
        enableAutoSave:false,
        fullscreen:false
      });

    },

  }
</script>

<style>
 .edui-container{
   z-index: inherit !important;
   box-shadow: none;
   border: 1px solid #E6ECF2 !important;
   border-radius: 4px !important;
 }
 .edui-container .edui-toolbar{
   box-shadow: none;
   border-bottom: 1px solid #E6ECF2 !important;
   z-index: inherit !important;
 }
</style>
