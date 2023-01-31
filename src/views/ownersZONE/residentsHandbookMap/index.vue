<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-14 22:51:54
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
        {{ fairview_park_lang === "en_us" ? "Residents Handbook /" : "業主手冊及"
        }}{{ fairview_park_lang === "en_us" ? " Map" : "屋苑地圖" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              class="col-4 col-lg-12"
              :class="nav_index === 1 ? 'active' : ''"
              @click="nav_index = 1"
            >
              <span>{{
                fairview_park_lang === "en_us" ? "Residents Handbook" : "業主手冊"
              }}</span>
            </li>
            <li
              class="col-4 col-lg-12"
              :class="nav_index === 2 ? 'active' : ''"
              @click="nav_index = 2"
            >
              <span>{{
                fairview_park_lang === "en_us"
                  ? "House Floor Plan and Map"
                  : "屋宇平面圖及地圖"
              }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="menu-select"
            :placeholder="$t('Select')"
            @change="
              (val) => {
                nav_index = val;
              }
            "
            :teleported="false"
          >
            <el-option
              v-for="(item, index) in [
                {
                  titleEnUs:
                    fairview_park_lang === 'en_us' ? 'Residents Handbook' : '業主手冊',
                  index: 1,
                },
                {
                  titleEnUs:
                    fairview_park_lang === 'en_us'
                      ? 'House Floor Plan and Map'
                      : '屋宇平面圖及地圖',
                  index: 2,
                },
              ]"
              :key="index"
              :label="item.titleEnUs"
              :value="item.index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20">
          <p style="font-size: 36px; color: #9cc212; font-weight: bold">
            {{
              nav_index === 1
                ? fairview_park_lang === "en_us"
                  ? "Residents Handbook"
                  : "業主手冊"
                : fairview_park_lang === "en_us"
                ? "House Floor Plan and Map"
                : "屋宇平面圖及地圖"
            }}
          </p>
          <div
            v-if="nav_index === 1"
            id="viewer"
            style="width: 100%; height: 600px; margin: 0 auto"
          >
            <PDFPreview
              v-if="pdfPreview"
              :pdfPreview="pdfPreview"
              :pdfDownloadUrl="pdfDownloadUrl"
              :pageNumber="pageNumber"
            ></PDFPreview>
          </div>
          <div
            v-if="nav_index === 2"
            style="
              font-size: 14px;
              color: #6e6b7b;
              font-family: Helvetica, Arial, sans-serif;
            "
            v-html="
              residents_handboo_map_content && residents_handboo_map_content.htmlEnUs
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import PDFPreview from "../../../components/pdf-preview/index.vue";
export default {
  components: {
    PDFPreview,
  },
  data() {
    return {
      banner: new URL(
        "../../../assets/image/common-banner/owner-zone.jpg",
        import.meta.url
      ).href,
      nav_index: 1,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      residents_handboo_map_content: null,
      fairview_park_lang: "",
      pdfPreview: "",
      pdfDownloadUrl: "",
      pageNumber:0,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    //查看所有 业主手册及地图 列表
    const findResidentsHandbookMap = async () => {
      try {
        const res = await proxy.$http.findResidentsHandbookMap({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.residents_handboo_map_content = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findResidentsHandbookMap();
      data.pdfPreview =
        data.residents_handboo_map_content &&
        data.residents_handboo_map_content.fileUrlEnUs;
      data.pdfDownloadUrl =
        data.residents_handboo_map_content &&
        data.residents_handboo_map_content.fileUrlZhTw;
      data.pageNumber =
        data.residents_handboo_map_content &&
        data.residents_handboo_map_content.remark;
      
    });
    return {
      ...toRefs(data),
      findResidentsHandbookMap,
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
  padding: 20px;
  .row {
    margin: 0 auto;
    .aside {
      padding: 0;
      ul {
        position: sticky;
        top: 80px;
        overflow: auto;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        background-color: #fff;
        padding: 10px;
        li {
          text-align: left;
          margin-bottom: 5px;
          padding: 6px 0px 6px 10px;
          box-sizing: border-box;
          cursor: pointer;
          i {
            font-size: 15px;
            margin-right: 5px;
            display: none;
            color: #000;
          }
          span {
            font-size: 18px;
            color: #000;
          }
          &:hover {
            background-color: var(--mainColor2);
            color: #fff;
            i {
              color: #fff;
            }
            span {
              color: #fff;
            }
          }
        }
        .active {
          background-color: var(--mainColor2);
          color: #fff;
          i {
            color: #fff;
          }
          span {
            color: #fff;
          }
        }
      }
      .menu-select {
        display: none;
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 2px 20px;
      img {
        max-width: 100%;
      }
      .pdf-preview-content{
        width:100%;
      }
    }
  }
}
@media (min-width: 576px) {
  .nav-wrap-container {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .nav-wrap-container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-wrap-container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .nav-wrap-container {
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap-container {
    width: 1280px;
  }
}
@media (max-width: 992px) {
  .banner {
    height: 200px;
    img {
      width: auto;
    }
    p {
      font-size: 36px !important;
    }
  }
  .nav-wrap {
    .row {
      .aside {
        ul {
          flex-wrap: nowrap;
          padding: 0;
          display: none;
          li {
            display: flex;
            text-align: center;
            align-items: center;
            span {
              margin: 0 auto;
            }
          }
        }
        @{deep} .menu-select {
          display: block;
          --el-select-input-focus-border-color: #ccc;
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
            .el-select-dropdown {
              .el-scrollbar {
                .el-select-dropdown__wrap {
                  .el-scrollbar__view {
                    .el-select-dropdown__item {
                      text-align: left;
                      span {
                        margin: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .nav-content {
        padding: 0;
        > p {
          font-size: 28px !important;
        }
      }
    }
  }
}
</style>
