<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-14 23:42:00
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <div
        class="img"
        style="width: 100%; height: 100%"
        :style="{ 'background-image': 'url(' + banner + ')' }"
      ></div>
      <p>
        {{ $t('headed.Fairview_Park_News')}}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div style="margin: 0 auto" class="col-12 nav-content mb-20">
          <div style="text-align: right">
            <el-select
              v-if="fairview_part_news_list.length > 0"
              v-model="fairview_part_news_index"
              style="margin: 20px 0"
              size="large"
              @change="changeFairviewPartNews"
              placement="bottom"
              :teleported="false"
              :placeholder="' '"
            >
              <el-option
                v-for="(item, index) in fairview_part_news_list"
                :key="index"
                :label="item.titleEnUs"
                :value="index"
              />
            </el-select>
            <div class="share" v-if="isShowShareButton">
             <el-button @click="sharePdf">
              {{ fairview_park_lang==='en_us'?'Share':'分享' }}
             </el-button>
            </div>
            <div v-if="pdfPreview" style="height:700px">
              <PDFPreviewTool
                :pdfPreview="pdfPreview"
                :pdfDownloadUrl="pdfDownloadUrl"
                :pageNumber="pageNumber"
              ></PDFPreviewTool>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- loading -->
    <div
      class="loading"
      v-loading="v_loading"
      style="
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10000;
      "
      :style="{'display':v_loading?'':'none'}"
    ></div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import PDFPreviewTool from "../../../components/pdf-preview/index.vue";
export default {
  components: {
    PDFPreviewTool,
  },
  data() {
    return {
      banner: new URL(
        "../../../assets/image/common-banner/owner-zone.jpg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      v_loading:false,
      fairview_part_news_list: [],
      fairview_part_news_index: 0,
      fairview_park_lang: "",
      ramNumber: "",
      pdfPreview: "",
      pdfDownloadUrl: "",
      pageNumber:0,
      isShowShareButton:false,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findFairviewParkNewsList = async () => {
      try {
        const res = await proxy.$http.findFairviewParkNewsList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.v_loading = false;
          data.fairview_part_news_list = res.data.data.records;
        }
      } catch (error) {
        data.v_loading = false;
        console.log(error);
      }
    };
    const changeFairviewPartNews = () => {
      data.pdfPreview =
        data.fairview_part_news_list.length !== 0 &&
        data.fairview_part_news_list[data.fairview_part_news_index].fileEnUs;
      data.pdfDownloadUrl =
        data.fairview_part_news_list.length !== 0 &&
        data.fairview_part_news_list[data.fairview_part_news_index].fileZhTw;
      data.pageNumber =
        data.fairview_part_news_list.length !== 0 &&
        data.fairview_part_news_list[data.fairview_part_news_index].remark;
      
    };
    //分享pdf鏈接
    const sharePdf = () => {
      console.log(data.pdfPreview)
      let a = document.createElement('a');
      a.href = data.pdfPreview;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a)
    };
    onMounted(async () => {
      data.v_loading = true
      //如果是從app進來用戶未登錄，隱藏分享button
      if (sessionStorage.getItem("app-login-status")) {
        data.isShowShareButton = true;
      } 
      await findFairviewParkNewsList();
      data.pdfPreview =
        data.fairview_part_news_list.length !== 0 &&
        data.fairview_part_news_list[data.fairview_part_news_index].fileEnUs;
      data.pdfDownloadUrl =
        data.fairview_part_news_list.length !== 0 &&
        data.fairview_part_news_list[data.fairview_part_news_index].fileZhTw;
      data.pageNumber =
        data.fairview_part_news_list.length !== 0 &&
        data.fairview_part_news_list[data.fairview_part_news_index].remark;
     
    });
    return {
      ...toRefs(data),
      findFairviewParkNewsList,
      changeFairviewPartNews,
      sharePdf,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.banner {
  position: relative;
  overflow: hidden;
  height: 280px;
  .img {
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: bottom;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-style: normal;
    font-weight: bold;
    width: 80%;
    text-align: center;
    font-family: "Poppins-Bold", SourceHanSansCN-Regular, Arial;
    color: #fff;
    text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
    b {
      color: var(--mainColor1);
      text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
    }
  }
}
.nav-wrap {
  // padding: 20px;
  margin: 0 auto;
  .row {
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 15px;

      img {
        max-width: 100%;
      }
      .el-select {
        --el-select-input-focus-border-color: #ccc;
        width: 100%;
        .select-trigger {
          .el-input {
            font-size: 18px;
            .el-input__wrapper {
            }
          }
          .is-focus {
            border-color: #ccc;
          }
        }
        .el-popper {
          position: absolute;
          top: 52px !important;
          left: 0 !important;
          background-color: var(--mainColor2);
          .el-select-dropdown {
            background-color: var(--mainColor2);
            .el-scrollbar {
              .el-select-dropdown__wrap {
                .el-scrollbar__view {
                  .el-select-dropdown__item {
                    text-align: left;
                  }
                }
              }
            }
          }
        }
      }
      .share{
        .el-button{
          background-color: var(--mainColor2);
          color:#fff;
          border-color: var(--mainColor2);
          padding: 10px 20px;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .nav-wrap {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .nav-wrap {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-wrap {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .nav-wrap {
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap {
    width: 1280px;
  }
}
@media (max-width: 991px) {
  .banner {
    height: 200px;
    img {
      width: auto;
    }
    p {
      font-size: 36px;
    }
  }
  .nav-wrap {
    // padding: 20px;
  }
  .el-select {
    width: 100%;
  }
}
@media (max-width: 575px) {
  .nav-wrap {
    padding: 20px;
  }
}
</style>
