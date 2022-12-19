<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 00:41:14
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Residents Handbook /" : "業主手冊及"
        }}{{ fairview_park_lang === "en_us" ? " Map" : "屋邨地圖" }}
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
                  ? "House Floor Plan and Fairview Park Map Enquiry"
                  : "屋宇平面圖及錦綉花園地圖查詢"
              }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="m-2 menu-select"
            placeholder="Select"
            @change="
              (val) => {
                nav_index = val;
              }
            "
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
                      ? 'House Floor Plan and Fairview Park Map Enquiry'
                      : '屋宇平面圖及錦綉花園地圖查詢',
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
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
          <p style="font-size: 36px; color: #9cc212; font-weight: bold">
            {{
              nav_index === 1
                ? fairview_park_lang === "en_us"
                  ? "Residents Handbook"
                  : "業主手冊"
                : fairview_park_lang === "en_us"
                ? "House Floor Plan and Fairview Park Map Enquiry"
                : "屋宇平面圖及錦綉花園地圖查詢"
            }}
          </p>
          <div
            v-if="nav_index === 1"
            id="viewer"
            style="width: 100%; height: 600px; margin: 0 auto"
          ></div>
          <div
            v-if="nav_index === 2"
          
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
import PDFJSExpress from "@pdftron/pdfjs-express";
export default {
  data() {
    return {
      banner: new URL("../../../assets/image/aboutUs/banner.png", import.meta.url).href,
      nav_index: 1,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      residents_handboo_map_content: null,
      fairview_park_lang: "",
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
      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc:
            data.residents_handboo_map_content &&
            data.residents_handboo_map_content.fileUrlEnUs,
        },
        document.getElementById("viewer")
      ).then((instance) => {
        // use APIs here
      });
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
  img {
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
          background-color: rgb(235, 233, 233);
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
    width: 992px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap-container {
    width: 1280px;
  }
}
@media (max-width: 992px) {
  .banner {
    img {
      width: auto;
      height: 200px;
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
        .menu-select {
          display: block;
        }
      }
    }
  }
}
</style>
