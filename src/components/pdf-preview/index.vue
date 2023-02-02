<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-14 22:54:37
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="pdf-preview">
    <div class="pdf-preview-content">
      <!-- <div class="page-tool">
        <div class="page-tool-content">
          <div class="page-tool-item" @click="lastPage">
            <i class="iconfont icon-shangyiye" style="font-size: 18px"></i>
          </div>
          <div class="page-tool-item" @click="nextPage">
            <i class="iconfont icon-xiayiye" style="font-size: 18px"></i>
          </div>
          <div class="page-tool-item">{{ pageNum }}/{{ numPages }}</div>
          <div class="page-tool-item" @click="pageZoomOut">
            <i class="iconfont icon-fangda" style="font-size: 20px"></i>
          </div>
          <div class="page-tool-item" @click="pageZoomIn">
            <i class="iconfont icon-suoxiao" style="font-size: 20px"></i>
          </div>
          <div class="page-tool-item" @click="download(pdfDownloadUrl, '1')">
            <i class="iconfont icon-xiazai" style="font-size: 20px"></i>
          </div>
        </div>
      </div>
      <div class="pdf-wrap">
        <VuePdfEmbed
          :source="source"
          :style="scaleStyle"
          class="vue-pdf-embed"
          :page="pageNum"
        ></VuePdfEmbed> 
      </div> -->
      <iframe
        width="100%"
        height="700px"
        frameborder="0"
        :src="`${env}/web/viewer.html?file=${encodeURIComponent(source)}`"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";
// import { createLoadingTask } from "vue3-pdfjs/esm/index.js"; // 获得总页数
import {
  ref,
  reactive,
  getCurrentInstance,
  toRefs,
  onMounted,
  computed,
  watch,
  nextTick,
} from "vue";
export default {
  components: {
    VuePdfEmbed,
  },
  props: {
    pdfPreview: {
      type: String,
      required: true,
    },
    pdfDownloadUrl: {
      type: String,
      required: true,
    },
    pageNumber: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const data = reactive({
      fairview_park_lang: "",
      source: "", //预览pdf文件地址
      pdfDownloadUrl: "", //下载pdf文件地址
      pageNum: 1, //当前页面
      scale: 1, // 缩放比例
      numPages: 0, // 总页数
      env:
        location.hostname === "localhost"
          ? ""
          : import.meta.env.DEV
          ? "/app/dist"
          : "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.source = props.pdfPreview;
    data.pdfDownloadUrl = props.pdfDownloadUrl;
    data.numPages = props.pageNumber;
    const scaleStyle = computed(() => `transform:scale(${data.scale})`);
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
        nextTick(() => {
          let pdf_wrap_width = document
            .getElementsByClassName("pdf-wrap")[0]
            .getBoundingClientRect().width;
          console.log(pdf_wrap_width);
          let canvas_width = document
            .getElementsByTagName("canvas")[0]
            .getBoundingClientRect().width;
          console.log(canvas_width);
          if (pdf_wrap_width < canvas_width) {
            document.getElementsByTagName("canvas")[0].style["margin-left"] =
              canvas_width - pdf_wrap_width - 20 + "px";
          }
        });
      }
    };
    const pageZoomIn = () => {
      if (data.scale > 1) {
        data.scale -= 0.1;
        nextTick(() => {
          let pdf_wrap_width = document.getElementsByClassName("pdf-wrap")[0]
            .getBoundingClientRect.width;
          let canvas_width = document.getElementsByTagName("canvas")[0]
            .getBoundingClientRect.width;
          if (pdf_wrap_width > canvas_width) {
            document.getElementsByTagName("canvas")[0].style["margin-left"] =
              pdf_wrap_width - canvas_width - 20 + "px";
          }
        });
      }
    };
    const download = (data, fileName) => {
      var tempLink = document.createElement("a");
      tempLink.style.display = "none";
      tempLink.href = data;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    };
    watch(
      () => props.pdfPreview,
      (val) => {
        data.source = val;
        // data.pdfDownloadUrl = props.pdfDownloadUrl;
        // let loadingTask = createLoadingTask(data.source);
        // loadingTask._capability.promise.then((pdf) => {
        //   data.numPages = pdf.numPages;
        // });
      }
    );
    onMounted(() => {
      // let loadingTask = createLoadingTask(data.source);
      // loadingTask._capability.promise.then((pdf) => {
      //   data.numPages = pdf.numPages;
      // });
      let timer = null;
      timer = setInterval(() => {
        if (
          document
            .getElementsByTagName("iframe")&&
            document
            .getElementsByTagName("iframe")[0]&&
            document
            .getElementsByTagName("iframe")[0]
            .contentDocument&&
          document
            .getElementsByTagName("iframe")[0]
            .contentDocument.getElementById("editorModeButtons")&&
          document
            .getElementsByTagName("iframe")[0]
            .contentDocument.getElementById("viewFind")
        ) {
          clearInterval(timer);

          document
            .getElementsByTagName("iframe")[0]
            .contentDocument.getElementById("mainContainer").style['min-width'] =
            "329px";
          document
            .getElementsByTagName("iframe")[0]
            .contentDocument.getElementById("editorModeButtons").style.display =
            "none";
          document
            .getElementsByTagName("iframe")[0]
            .contentDocument.getElementById("viewFind").style.display =
            "none";
        }
      }, 500);
    });
    return {
      ...toRefs(data),
      lastPage,
      nextPage,
      pageZoomOut,
      pageZoomIn,
      download,
      scaleStyle,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.pdf-preview {
  position: relative;
  padding: 20px 0;
  box-sizing: border-box;
  .pdf-preview-content {
    margin: 0 auto;
    height: 100%;
    .page-tool {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      background: #e7ebee;

      .page-tool-content {
        display: flex;
        align-items: center;
        .page-tool-item {
          padding: 8px 15px;
          padding-left: 10px;
          cursor: pointer;
          color: #868e96;
        }
      }
    }
    .pdf-wrap {
      height: 550px;
      overflow: auto;
      margin-bottom: 20px;
      background-color: #f1f3f5;
      padding: 20px;
      @{deep} .vue-pdf-embed {
        text-align: center;
        max-width: 515px;
        margin: 0 auto;
        box-sizing: border-box;
        > div {
          position: absolute;
          padding: 10px 20px 20px 20px;
          box-sizing: border-box;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}

@media (min-width: 576px) {
  .pdf-preview-content {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .pdf-preview-content {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .pdf-preview-content {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .pdf-preview-content {
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .pdf-preview-content {
    width: 1280px;
  }
}
@media (max-width: 991px) {
  .pdf-preview-content {
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
    .pdf-wrap {
      @{deep} .vue-pdf-embed {
        > div {
          // position: absolute;
          // padding: 0px !important;
          // box-sizing: border-box;
          // left: 0px !important;
          // transform: inherit !important;
        }
      }
    }
    .display {
      display: none;
    }
  }
}
</style>
