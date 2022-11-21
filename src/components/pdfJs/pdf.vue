<template>
  <div class="pdf-preview">
    <div class="pdf-wrap">
      <vue-pdf-embed
        :source="source"
        :style="scaleFun"
        class="vue-pdf-embed"
        :page="pageNum"
      />
    </div>
  </div>
</template>
<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs/esm"; // 获得总页数
export default {
    props: {
        pdfUrl: String,
  },
  components: {
    VuePdfEmbed,
  },
  setup(props) {
    // const props = defineProps({
    //   pdfUrl: {
    //     type: String,
    //     required: true,
    //   },
    // });
   
    const state = reactive({
      source: props.pdfUrl, //预览pdf文件地址
      pageNum: 1, //当前页面
      scale: 1, // 缩放比例
      numPages: 0, // 总页数
    });
    console.log(props.pdfUrl)
    onMounted(() => {
        console.log(state.source)
      const loadingTask = createLoadingTask(state.source);
      loadingTask.promise.then((pdf) => {
        state.numPages = pdf.numPages;
      });
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="css" scoped>
.pdf-preview {
  position: relative;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
  background: rgb(66, 66, 66);
}

.vue-pdf-embed {
  text-align: center;
  width: 515px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
