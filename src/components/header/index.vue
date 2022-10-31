<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 23:18:57
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-31 00:04:21
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/components/header/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-dark px-xl-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img :src="logo" alt="" />
        </a>
        <button
          id="navbar-button"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              :class="{
                dropdown: item.type === 'select',
                active: route_url === item.href,
              }"
              v-for="(item, index) in [
                {
                  type: 'default',
                  text: $t('Home'),
                  href: '#/home',
                },
                {
                  type: 'default',
                  text: $t('About us'),
                  href: '#/about-us',
                },
                {
                  type: 'select',
                  text: $t('Prospective Buyer'),
                  href: '#/prospective-buyer',
                  children: [
                    {
                      text: $t('Prospective Buyer'),
                      href: '#/prospective-buyer',
                    },
                    {
                      text: $t('One Stop Service for New Owners'),
                      href: '#/buyer-server',
                    },
                    {
                      text: $t('House Type Enquiry'),
                      href: '#/decoration',
                    },
                    {
                      text: $t('Master Colour Schedule'),
                      href: '#/wall-color-series',
                    },
                  ],
                },
                {
                  type: 'default',
                  text: $t('Estate Facilities'),
                  href: '#/estate-facilities',
                },
                {
                  type: 'default',
                  text: $t('Coach Service'),
                  href: '#/coach-service',
                },
                {
                  type: 'select',
                  text: $t('Shops Directory'),
                  href: '#/shopping-information',
                  children: [
                    {
                      text: $t('Shops Directory'),
                      href: '#/shopping-information',
                    },
                    {
                      text: $t('Carpark Parking Privilege Payment'),
                      href: '#/carpark-parking-privilege-payment',
                    },
                  ],
                },
                {
                  type: 'default',
                  text: $t('Useful Telephone Nos.'),
                  href: '#/useful-link',
                },
                {
                  type: 'default',
                  text: $t('Estate Notice'),
                  href: '#/estate-notice',
                },
              ]"
              :key="index"
              @click="changeRouter(item.href)"
            >
              <a
                v-if="item.type === 'default'"
                class="nav-link"
                aria-current="page"
                :href="item.href"
                >{{ item.text }}</a
              >
              <a
                v-if="item.type === 'select'"
                class="nav-link dropdown-toggle"
                :id="'navbarDropdown' + index"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ item.text }}
              </a>
              <ul
                v-if="item.type === 'select'"
                class="dropdown-menu"
                :aria-labelledby="'navbarDropdown' + index"
              >
                <li v-for="(item2, index2) in item.children" :key="index2">
                  <a class="dropdown-item" :href="item2.href">{{ item2.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-4 mb-lg-0 flex-row align-center">
            <div class="lang">
              <span
                :class="{ active: fairview_park_lang == 'en_us' }"
                style="cursor: pointer"
                @click="changeLang('en_us')"
                >ENG</span
              >
              <i></i>
              <span
                :class="{ active: fairview_park_lang == 'zh_tw' }"
                style="cursor: pointer"
                @click="changeLang('zh_tw')"
                >中文</span
              >
            </div>
            <div class="line"></div>
            <button
              v-if="!is_login"
              class="login"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              {{ $t("Owner login") }}
            </button>
            <button
              v-if="is_login"
              class="is-show-button"
              style="
                background-color: #8fbc25;
                border-radius: 150px;
                margin-right: 30px;
                border: 0;
                color: #fff;
                padding: 5px 10px;
              "
              @click="showOwnerIsZONE"
            >
              {{ $t("OWNERS's ZONE") }}
            </button>
            <el-dropdown
              class="is-show-dropdown"
              v-if="is_login"
              @command="selectOwnersZone"
            >
              <el-button
                type="primary"
                style="
                  background-color: #8fbc25;
                  border-radius: 150px;
                  margin-right: 30px;
                  border: 0;
                "
              >
                {{ $t("OWNERS's ZONE")
                }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="/FAQ-from-residents">{{
                    $t("FAQ from Residents")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/estate-notice">{{
                    $t("Estate Notices")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/fairview-part-news">{{
                    $t("Fairview Part News")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/demographic-opinion-survey">{{
                    $t("Demographic & Opinion Survey")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/estate-activities">{{
                    $t("Estate Activities")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/news-update">{{
                    $t("News Update")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/residents-handbook-map">{{
                    $t("Residents Handbook / Map")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/frequently-used-forms">{{
                    $t("Frequently Used Forms")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/MAC-column">{{
                    $t("MAC Column")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/payment-list">{{
                    $t("Payment List")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/lottery-system-for-impound">{{
                    $t("Lottery System For Impounding Action")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/the-overhaul-project">{{
                    $t("the Overhaul Project")
                  }}</el-dropdown-item>
                  <el-dropdown-item command="/loginOut">
                    {{ $t("Login out") }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <i class="iconfont icon-lingdang white"></i>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, watch, inject } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ArrowDown } from "@element-plus/icons-vue";
import commonFunc from "../../assets/js/commonFunc";
export default {
  components: {
    ArrowDown,
  },
  props: {
    loginStatus: Boolean,
  },
  data() {
    return {
      logo: new URL("../../assets/image/home/fairview park logo.png", import.meta.url)
        .href,
    };
  },
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const store = useStore();
    const data = reactive({
      route_url: "",
      fairview_park_lang: "",
      is_login: false,
    });
    const router = useRouter(); // 必须在setup的根作用域调用，在函数中调返回undefined 如需在其他页面使用  import router from "./router"; router = useRouter();
    const route = useRoute(); // 必须在setup的根作用域调用，在函数中调返回undefined
    //如果有登陸信息就顯示登陸
    if (localStorage.getItem("login-info")) {
      data.is_login = true;
    }
    onMounted(() => {
      if (!sessionStorage.getItem("fairview_park_lang")) {
        sessionStorage.setItem("fairview_park_lang", "zh_tw");
        data.fairview_park_lang = "zh_tw";
      } else {
        data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
      }
    });
    const changeLang = (lang) => {
      if (!commonFunc.getIsPC()) {
        document.getElementById("navbar-button").click();
      }
      sessionStorage.setItem("fairview_park_lang", lang);
      data.fairview_park_lang = lang;
      proxy.$i18n.locale = lang;
      location.reload();
    };
    const changeRouter = (href) => {
      if (!commonFunc.getIsPC()) {
        document.getElementById("navbar-button").click();
      }

      if (
        location.hash === "#/buyer-server" ||
        location.hash === "#/decoration" ||
        location.hash === "#/wall-color-series"
      ) {
        data.route_url = "#/prospective-buyer";
      } else if (location.hash === "#/carpark-parking-privilege-payment") {
        data.route_url = "#/shopping-information";
      } else {
        data.route_url = href;
      }
    };
    //登出
    const loginOut = () => {
      localStorage.removeItem("login-info");
      data.is_login = false;
      store.commit("setLoginStatus", false);
    };
    //
    const selectOwer = (val) => {
      console.log(val);
    };
    //
    const selectOwnersZone = (val) => {
      if (val === "/loginOut") {
        loginOut();
        router.push("/home");
      } else {
        router.push(val);
      }
    };
    //
    const showOwnerIsZONE = (val) => {
      ctx.emit("showOwnerIsZONE", true);
    };
    //监听器
    watch(
      () => route,
      (value) => {
        if (
          location.hash === "#/buyer-server" ||
          location.hash === "#/decoration" ||
          location.hash === "#/wall-color-series"
        ) {
          data.route_url = "#/prospective-buyer";
        } else if (location.hash === "#/carpark-parking-privilege-payment") {
          data.route_url = "#/shopping-information";
        } else if(location.hash === "#/home"){
          if(!localStorage.getItem("login-info")){
            data.is_login = false;
            store.commit("setLoginStatus", false);
          }
        } else {
          data.route_url = location.hash;
        }
      },
      { deep: true, immediate: true }
    );
    watch(
      () => store.state.loginStatus,
      (val) => {
        data.is_login = val;
      }
    );
    return {
      ...toRefs(data),
      changeLang,
      changeRouter,
      loginOut,
      selectOwer,
      selectOwnersZone,
      showOwnerIsZONE,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.main {
  position: sticky;
  top: 0;
  z-index: 2;
  background: #255534;
  .navbar {
    max-width: 1920px;
    height: 80px;
    left: 0px;
    top: 0px;
    mix-blend-mode: normal;
    padding: 0;
    margin: 0 auto;
    align-items: inherit;
    justify-content: space-between;
    .container-fluid {
      align-items: inherit;
      background: #255534;
    }
    .navbar-brand {
      padding: 0;
      margin-left: 20px;
      width: 47px;
      position: relative;
      img {
        position: absolute;
        left: 0;
      }
    }
    .navbar-collapse {
      margin-left: auto;
      justify-content: space-between;
    }
    > .show {
      background-color: #fff;
      margin-top: -33px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0px 10px 30px rgb(83 88 93 / 40%);

      ul {
        li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 8px 30px;
          a {
            color: #066ac9 !important;
            span {
              color: #066ac9 !important;
            }
          }
        }
        .icon-lingdang {
          color: #255534 !important;
        }
      }
      .btn {
        padding: 10px 0;
      }
    }
    .navbar-toggler {
      margin-top: 15px;
      margin-right: 20px;
      height: 50px;
    }
    .me-auto {
      margin-right: 0 !important;
      text-align: center;
      align-items: center;
      li {
        font-size: 15px;
        margin-bottom: 10px;
        a {
          padding: 0 5px;
        }
      }
      .active {
        .nav-link {
          color: #fff;
        }
      }
      .lang {
        width: 80px;
        height: 35px;
        background: #f0ce5f;
        border-radius: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 14px;
          line-height: 35px;
        }
        i {
          width: 2px;
          height: 20px;
          background-color: #252525;
          margin: 0px 5px 0;
        }
        .active {
          color: #255534;
          font-weight: bold;
        }
      }
      .line {
        background-color: #abafc7;
        height: 30px;
        width: 1px;
        margin: 0 30px;
      }
      .login {
        width: 100px;
        background: #8fbc25;
        border-radius: 150px;
        border: 0;

        font-size: 16px;
        color: #fff;
        margin-right: 30px;
      }
      .icon-lingdang {
        font-size: 25px;
      }
      @{deep} .el-dropdown {
        .el-dropdown-link {
          width: 100px;
          background: #8fbc25;
          border-radius: 150px;
          border: 0;

          font-size: 16px;
          color: #fff;
          margin-right: 30px;
          .el-icon {
            color: #fff;
          }
        }
      }
    }
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse ul li {
    margin-bottom: 0 !important;
  }
  .is-show-button {
    display: none;
  }
  .is-show-dropdown {
    display: block;
  }
}
@media (max-width: 991px) {
  .is-show-button {
    display: block;
  }
  .is-show-dropdown {
    display: none;
  }
}
</style>
