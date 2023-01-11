<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:04:34
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="pdf-preview">
    <div class="pdf-wrap">
      <vue-pdf-embed
        :source="source"
        :style="scale"
        class="vue-pdf-embed"
        :page="pageNum"
      />
     
    </div>
    <div class="page-tool">
      <div class="page-tool-item" @click="lastPage">上一页</div>
      <div class="page-tool-item" @click="nextPage">下一页</div>
      <div class="page-tool-item">{{ pageNum }}/{{ numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut">放大</div>
      <div class="page-tool-item" @click="pageZoomIn">缩小</div>
      <div class="page-tool-item" @click="download(source, '1')">下载</div>
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs/esm"; // 获得总页数
import { ref, reactive, getCurrentInstance, toRefs, onMounted, computed } from "vue";
export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {};
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
      source: "https://fairviewpark.hk/new_web/uat/fairview_park_news/Javascript1.pdf", //预览pdf文件地址
      pageNum: 1, //当前页面
      scale: 1, // 缩放比例
      numPages: 0, // 总页数
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const scale = computed(() => `transform:scale(${data.scale})`);
    const lastPage = () => {
      if (data.pageNum > 1) {
        data.pageNum -= 1;
      }
    };
    const nextPage = () => {
      if (data.pageNum < data.numPages) {
        data.pageNum += 1;
      }
    };
    const pageZoomOut = () => {
      if (data.scale < 2) {
        data.scale += 0.1;
      }
    };
    const pageZoomIn = () => {
      if (data.scale > 1) {
        data.scale -= 0.1;
      }
    };
    const download = (data, fileName) => {
       let blob = new Blob([data], {
        //type类型后端返回来的数据中会有，根据自己实际进行修改
        type: "application/pdf;charset-UTF-8",
      });
      let filename = fileName || "pdf.pdf";
      if (typeof window.navigator.msSaveBlob !== "undefined") {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        var blobURL = window.URL.createObjectURL(blob);
        // 创建隐藏<a>标签进行下载
        var tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobURL;
        tempLink.setAttribute("download", filename);
        if (typeof tempLink.download === "undefined") {
          tempLink.setAttribute("target", "_blank");
        }
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
      }
    };
    onMounted(() => {
      const loadingTask = createLoadingTask(data.source);
      loadingTask.promise.then((pdf) => {
        data.numPages = pdf.numPages;
      });
    });
    return {
      ...toRefs(data),
      lastPage,
      nextPage,
      pageZoomOut,
      pageZoomIn,
      download,
      scale,
    };
  },
};
</script>

<style lang="less" scoped>
.vue-pdf-embed {
  text-align: center;
  width: 515px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}
.pdf-preview {
  position: relative;
  height: 800px;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #e9e9e9;
}
.pdf-wrap {
  height: 100%;
  overflow-y: auto;
}
.vue-pdf-embed {
  text-align: center;
  width: 515px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}

.page-tool {
  position: absolute;
  bottom: 35px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  background: rgb(66, 66, 66);
  color: white;
  border-radius: 19px;
  z-index: 100;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}
.page-tool-item {
  padding: 8px 15px;
  padding-left: 10px;
  cursor: pointer;
}
</style>
