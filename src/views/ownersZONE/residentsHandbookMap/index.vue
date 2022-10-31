<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-31 00:07:22
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
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;Map" : "屋邨地圖" }}</b>
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
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
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
         
          <iframe
          v-if="nav_index === 1"
              width="100%"
              height="700px;"
              :src="
              residents_handboo_map_content&&residents_handboo_map_content.fileUrlEnUs
              "
            ></iframe>
          <div
            v-if="nav_index === 2"
            class="ql-editor"
            v-html="residents_handboo_map_content&&residents_handboo_map_content.htmlEnUs"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
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
    opacity: 0.5;
    width: 100%;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    width: 80%;
    text-align: center;
    b {
      color: #2fa94e;
    }
  }
}
.nav-wrap {
  padding: 20px;
  .row {
    .aside {
      ul {
        // flex-wrap: nowrap;
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
            font-size: 16px;
            margin-right: 5px;
            display: none;
            color: #000;
          }
          span {
            font-size: 15px;
            color: #000;
          }
        }
        .active {
          background-color: #5cb89e;
          i {
            color: #fff;
            display: inline-block;
          }
          span {
            color: #fff;
          }
        }
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 15px;
      img {
        max-width: 100%;
      }
    }
  }
}
@media (max-width: 992px) {
  .banner {
    img {
      opacity: 0.5;
      width: auto;
      height: 200px;
    }
  }
}
</style>
