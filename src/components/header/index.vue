<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 23:18:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-10 11:30:53
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/components/header/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" :href="'#/home?lang=' + fairview_park_lang">
          <transition name="el-fade-in-linear">
            <img class="navbar-brand-logo-mobile" :src="logo_m" alt="" />
          </transition>

          <!-- <transition name="el-zoom-in-top">
            <img class="navbar-brand-logo" v-show="!showLogin_m" :src="logo" alt="" />
          </transition> -->
        </a>
        <!-- 手機端顯示的按鈕 -->
        <div style="margin-top: 15px; flex: 1; text-align: right" class="mobile-btn">
          <span
            class="lang"
            v-if="fairview_park_lang == 'zh_tw'"
            style="cursor: pointer; color: #fff; vertical-align: middle"
            @click="changeLang('en_us')"
            >EN</span
          >
          <span
            class="lang"
            v-if="fairview_park_lang == 'en_us'"
            style="cursor: pointer; color: #fff; vertical-align: middle"
            @click="changeLang('zh_tw')"
            >中</span
          >
          <div
            v-if="!is_login && isShowLoginButton"
            class="login-btn1"
            style="position: relative; display: inline-block; flex: 1; text-align: right"
          >
            <button class="login-btn-1" data-bs-toggle="modal" data-bs-target="#login">
              {{ $t("headed.Owner_login") }}
            </button>
          </div>
          <div
            v-if="is_login"
            class="login-btn2"
            style="position: relative; display: inline-block; flex: 1; text-align: right"
            :class="{ 'show-owner-zone-list': showOwnerZONEList }"
          >
            <button class="login-btn-2" @click="showOwnerIsZONE">
              {{ $t("headed.OWNERS_s_ZONE") }}
            </button>
            <i v-if="showOwnerZONEList"></i>
          </div>
          <div
            v-if="is_login"
            style="
              text-decoration: none;
              position: relative;
              display: inline-block;
              cursor: pointer;
              margin-left: 5px;
              margin-right: 5px;
              vertical-align: middle;
            "
            @click="toInformationPush"
          >
            <i class="iconfont icon-lingdang white" style="font-size: 22px"></i>
            <!-- v-if="pmLogHave === 'Y'" -->
            <span
              style="
                position: absolute;
                top: 2px;
                right: 0px;
                width: 8px;
                height: 8px;
                display: inline-block;
                background-color: #f0ce5f;
                border-radius: 50%;
              "
            ></span>
          </div>
        </div>
        <button
          id="navbar-button"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="hideOwnerIsZONE"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- PC端顯示的按鈕 -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div
            style="display: flex; flex-direction: column; align-items: center; flex: 1"
          >
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
                    text: $t('headed.Home'),
                    href: '#/home?lang=' + fairview_park_lang,
                  },
                  {
                    type: 'default',
                    text: $t('headed.About_us'),
                    href: '#/about-us?lang=' + fairview_park_lang,
                  },
                  {
                    type: 'default',
                    text: $t('headed.Prospective_Buyer'),
                    href: '#/prospective-buyer?lang=' + fairview_park_lang,
                  },
                  {
                    type: 'default',
                    text: $t('headed.Estate_Facilities'),
                    href: '#/estate-facilities?lang=' + fairview_park_lang,
                  },
                  {
                    type: 'default',
                    text: $t('headed.Coach_Service'),
                    href: '#/coach-service?lang=' + fairview_park_lang,
                  },
                  {
                    type: 'default',
                    text: $t('headed.Shops_Directory'),
                    href: '#/shopping-information?lang=' + fairview_park_lang,
                  },
                  {
                    type: 'default',
                    text: $t('headed.Useful_Telephone_Nos'),
                    href: '#/useful-link?lang=' + fairview_park_lang,
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
                  ><span>{{ item.text }}</span></a
                >
                <a
                  v-if="item.type === 'select'"
                  class="nav-link dropdown-toggle"
                  :id="'navbarDropdown' + index"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>{{ item.text }}</span>
                </a>
                <ul
                  v-if="item.type === 'select'"
                  class="dropdown-menu"
                  style="padding: 0; margin: 10px 0 0 -15px"
                  :aria-labelledby="'navbarDropdown' + index"
                >
                  <li v-for="(item2, index2) in item.children" :key="index2">
                    <a
                      class="dropdown-item"
                      style="padding: 8px 15px"
                      :href="item2.href"
                      >{{ item2.text }}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <ul
            class="lang-infomation navbar-nav me-auto mb-4 mb-lg-0 flex-row align-center"
          >
            <div class="lang">
              <span
                v-if="fairview_park_lang == 'zh_tw'"
                style="cursor: pointer"
                @click="changeLang('en_us')"
                >EN</span
              >
              <span
                v-if="fairview_park_lang == 'en_us'"
                style="cursor: pointer"
                @click="changeLang('zh_tw')"
                >中</span
              >
            </div>
            <button
              v-if="!is_login && isShowLoginButton"
              class="login"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              {{ $t("headed.Owner_login") }}
            </button>
            <div>
              <el-dropdown
                class="is-show-dropdown"
                v-if="is_login"
                @command="selectOwnersZone"
              >
                <el-button type="primary">
                  {{ $t("headed.OWNERS_s_ZONE")
                  }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item
                      v-if="isShowLoginOutButton"
                      class="yellow"
                      command="/edit-member-information"
                      data-bs-toggle="modal"
                      data-bs-target="#editMemberInformation"
                      ><el-icon><EditPen /></el-icon
                      >{{ $t("headed.Edit_member_information") }}</el-dropdown-item
                    >
                    <el-dropdown-item command="/news-update">{{
                      $t("headed.News_Update")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/FAQ-from-residents">{{
                      $t("headed.FAQ_from_Residents")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/estate-notice">{{
                      $t("headed.Estate_Notices")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/estate-activities">{{
                      $t("headed.Estate_Activities")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/fairview-part-news">{{
                      $t("headed.Fairview_Park_News")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/payment-list">{{
                      $t("headed.Payment_List")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/apply-resident-smartcard">{{
                      $t("headed.Apply_Resident_Smartcard")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/MAC-column">{{
                      $t("headed.MAC_Column")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/the-overhaul-project">{{
                      $t("headed.the_Overhaul_Project")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/lottery-system-for-impound">{{
                      $t("headed.Lottery_System_For_Impounding_Action")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/frequently-used-forms">{{
                      $t("headed.Frequently_Used_Forms")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/residents-handbook-map">{{
                      $t("headed.Residents_Handbook_Map")
                    }}</el-dropdown-item>
                    <el-dropdown-item command="/demographic-opinion-survey">{{
                      $t("headed.Demographic_Opinion_Survey")
                    }}</el-dropdown-item>

                    <el-dropdown-item
                      class="yellow"
                      command="/loginOut"
                      v-if="isShowLoginOutButton"
                    >
                      <el-icon><UserFilled /></el-icon>
                      {{ $t("headed.Login_out") }}</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>

            <div
              v-if="is_login"
              style="
                text-decoration: none;
                position: relative;
                cursor: pointer;
                margin-left: 20px;
              "
              @click="toInformationPush"
            >
              <i class="iconfont icon-lingdang white"></i>
              <!-- v-if="pmLogHave === 'Y'" -->
              <span
                style="
                  position: absolute;
                  top: 2px;
                  right: 0px;
                  width: 8px;
                  height: 8px;
                  display: inline-block;
                  background-color: #f0ce5f;
                  border-radius: 50%;
                "
              ></span>
            </div>
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
import { ElMessageBox, ElMessage } from "element-plus";
export default {
  components: {
    ArrowDown,
  },
  props: {
    loginStatus: Boolean,
    isShow: Boolean,
  },
  data() {
    return {
      logo: new URL("../../assets/image/home/logo.png", import.meta.url).href,
      logo_m: new URL("../../assets/image/home/logo_m.png", import.meta.url).href,
    };
  },
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const store = useStore();
    const data = reactive({
      route_url: "",
      fairview_park_lang: "",
      is_login: false,
      pmLogHave: null,
      showLogin_m: false,
      showOwnerZONEList: false,
      isShowLoginButton: true, //是否顯示登錄按鈕（app進來web判斷）
      isShowLoginOutButton: true, //是否顯示登出按鈕（app進來web判斷）
    });
    const router = useRouter(); // 必须在setup的根作用域调用，在函数中调返回undefined 如需在其他页面使用  import router from "./router"; router = useRouter();
    const route = useRoute(); // 必须在setup的根作用域调用，在函数中调返回undefined
    //獲取&設置語言
    if (!sessionStorage.getItem("fairview_park_lang")) {
      sessionStorage.setItem("fairview_park_lang", "zh_tw");
      data.fairview_park_lang = "zh_tw";
    } else {
      data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    }
    //判断url是否带有token参数
    if (route.query.session) {
      //如果已經登錄有token就替換，沒有登錄就直接拿token登錄
      // token变量传需要解析的jwt值
      let strings = route.query.session.split("."); //截取token，获取载体
      var userinfo = JSON.parse(
        decodeURIComponent(
          escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))
        )
      );
      userinfo.jwt = route.query.session;
      localStorage.setItem("login-info", JSON.stringify(userinfo));
    }
    //判断url是否带有语言参数
    if (
      route.query.lang &&
      (route.query.lang === "en_us" || route.query.lang === "zh_tw")
    ) {
      sessionStorage.setItem("fairview_park_lang", route.query.lang);
      data.fairview_park_lang = route.query.lang;
      proxy.$i18n.locale = route.query.lang;
    }
    //如果有登陸信息就顯示登陸
    if (localStorage.getItem("login-info")) {
      data.is_login = true;
    }
    onMounted(() => {
      // scrollPosition();

      //如果是從app進來用戶未登錄，隱藏登錄button
      if (sessionStorage.getItem("app-login-status") === "2") {
        data.isShowLoginButton = false;
      } else if (sessionStorage.getItem("app-login-status") === "1") {
        data.isShowLoginOutButton = false;
      }

      if (document.getElementsByClassName("el-popper")[0]) {
        document.getElementsByClassName("el-popper")[0].parentNode.style.position =
          "fixed";
        document.getElementsByClassName("el-popper")[0].parentNode.style.top = "0";
        document.getElementsByClassName("el-popper")[0].parentNode.style["z-index"] =
          "2000";
      }
    });
    //切換語言
    const changeLang = (lang) => {
      if (
        document.getElementById("navbar-button") &&
        window
          .getComputedStyle(document.getElementById("navbar-button"))
          .getPropertyValue("display") !== "none"
      ) {
        document.getElementById("navbar-button").click();
      }
      sessionStorage.setItem("fairview_park_lang", lang);
      data.fairview_park_lang = lang;
      proxy.$i18n.locale = lang;
      location.href = location.href.replace(route.query.lang, lang);
      location.reload();
    };
    //切換路由
    const changeRouter = (href, children) => {
      if (location.hash === "#/home") {
        if (!localStorage.getItem("login-info")) {
          data.is_login = false;
          store.commit("setLoginStatus", false);
        }
        data.route_url = href;
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
    const selectOwnersZone = (val) => {
      if (val === "/loginOut") {
        loginOut();
        router.push({
          path: "/home",
          query: {
            lang: data.fairview_park_lang,
          },
        });
      } else if (val === "/edit-member-information") {
      } else {
        router.push({
          path: val,
          query: {
            lang: data.fairview_park_lang,
          },
        });
      }
    };
    //
    const showOwnerIsZONE = (val) => {
      if (!data.showOwnerZONEList) {
        data.showOwnerZONEList = true;
        ctx.emit("showOwnerIsZONE", true);
      } else {
        data.showOwnerZONEList = false;
        ctx.emit("showOwnerIsZONE", false);
      }
    };
    const hideOwnerIsZONE = (val) => {
      data.showOwnerZONEList = false;
      ctx.emit("showOwnerIsZONE", false);
    };
    //查看当前登录用户是否已读
    const findPmLogHave = async () => {
      try {
        const res = await proxy.$http.findPmLogHave({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.pmLogHave = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //跳轉到信息頁
    const toInformationPush = () => {
      // if (
      //   document.getElementById("navbar-button") &&
      //   window
      //     .getComputedStyle(document.getElementById("navbar-button"))
      //     .getPropertyValue("display") !== "none"
      // ) {
      //   document.getElementById("navbar-button").click();
      // }
      router.push({
        path: "/information-push",
        query: {
          lang: data.fairview_park_lang,
        },
      });
    };
    //監聽滾動條的位置
    // const scrollPosition = () => {
    //   document.addEventListener("scroll", () => {
    //     var scrollTop =
    //       window.pageYOffset ||
    //       document.documentElement.scrollTop ||
    //       document.body.scrollTop;
    //     if (scrollTop >= 100) {
    //       if (!data.showLogin_m) {
    //         data.showLogin_m = true;
    //       }
    //     } else {
    //       if (data.showLogin_m) {
    //         data.showLogin_m = false;
    //       }
    //     }
    //   });
    // };
    //监听器
    watch(
      () => route,
      (value) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        window.pageYOffset = 0;
        data.showOwnerZONEList = false;
        if (location.hash === "#/home") {
          if (!localStorage.getItem("login-info")) {
            data.is_login = false;
            store.commit("setLoginStatus", false);
          }
          data.route_url = location.hash;
        } else {
          data.route_url = location.hash;
        }

        if (
          document.getElementById("navbar-button") &&
          window
            .getComputedStyle(document.getElementById("navbar-button"))
            .getPropertyValue("display") !== "none" &&
          document.getElementsByClassName("collapse")[0] &&
          window
            .getComputedStyle(document.getElementsByClassName("collapse")[0])
            .getPropertyValue("display") !== "none"
        ) {
          document.getElementById("navbar-button").click();
        }
      },
      { deep: true, immediate: true }
    );
    watch(
      () => store.state.loginStatus,
      (val) => {
        data.is_login = val;
        if (data.is_login) {
          findPmLogHave();
        }
      }
    );
    watch(
      () => props.isShow,
      (val) => {
        data.showOwnerZONEList = val;
      }
    );

    return {
      ...toRefs(data),
      changeLang,
      changeRouter,
      loginOut,
      selectOwnersZone,
      showOwnerIsZONE,
      hideOwnerIsZONE,
      findPmLogHave,
      toInformationPush,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.main {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 62px;
  .navbar {
    height: 100%;
    left: 0px;
    top: 0px;
    mix-blend-mode: normal;
    padding: 0;
    margin: 0 auto;
    align-items: inherit;
    background: var(--mainColor1);
    text-align: center;

    .container-fluid {
      align-items: inherit;
      background: var(--mainColor1);
      justify-content: flex-start;
      margin: 0 auto;
      text-align: center;
      width: auto;
      padding: 0;
    }
    .navbar-brand {
      padding: 0;
      margin-right: 10px;
      width: 55px;
      position: relative;
      img {
        position: absolute;
        left: 0;
        width: 100%;
        margin-top: 12px;
      }
    }
    .login-btn1,
    .login-btn2 {
      position: relative;
      button {
        margin-right: 10px;
        background: var(--mainColor2);
        border-radius: 50px;
        border: 0;
        font-size: 16px;
        color: #fff;
        padding: 3px 15px;
        border: 1px solid var(--mainColor2);
        white-space: nowrap;
        // &:hover {
        //   background: #fff;
        //   color: var(--mainColor2);
        // }
      }
      i {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 14px;
        border-color: transparent transparent var(--mainColor2) transparent;
        border-style: solid;
      }
    }
    .show-owner-zone-list {
      button {
        background: #fff;
        color: var(--mainColor2);
      }
    }
    .navbar-collapse {
      margin-left: auto;
      justify-content: space-between;
      .navbar-nav {
        height: 100%;
        .nav-item {
          padding: 15px 6px;
          .nav-link {
            height: 100%;
            color: #fff;
            box-sizing: border-box;
            border-bottom: 2px solid transparent;
          }
          .dropdown-toggle {
            &::after {
              display: none;
            }
          }

          .dropdown-menu {
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            top: auto;
            left: auto;
            box-shadow: 0 0 5px 3px rgba(107, 106, 106, 0.3);
            border: 0;
            &:hover {
              display: block;
            }
            li {
              &:hover {
                a {
                  color: #fff;
                  background-color: var(--mainColor2) !important;
                }
              }
              a {
                color: var(--el-text-color-regular);
              }
            }
          }
          &:hover {
            .nav-link {
              border-bottom: 2px solid var(--mainColor2);
              span {
                color: var(--mainColor2);
              }
            }
          }
        }
        .dropdown {
          &:hover {
            .dropdown-menu {
              display: block;
              top: auto;
            }
          }
        }
        .active {
          .nav-link {
            border-bottom: 2px solid var(--mainColor2);
            span {
              color: var(--mainColor2);
            }
          }
        }
      }
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
      margin-top: 11px;
      margin-right: 0px;
      height: 40px;
      width: 44px;
      padding: 5px;
      border: 0;
      box-shadow: none;
      .navbar-toggler-icon {
        width: 35px;
        vertical-align: top;
        height: 30px;
      }
    }
    .me-auto {
      margin-right: 0 !important;
      text-align: center;
      align-items: center;
      li {
        font-size: 18px;
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
        padding: 0 10px;
        span {
          display: inline-block;
          font-size: 18px;
          color: #fff;
          width: 40px;
          &:hover {
            color: var(--mainColor2);
          }
        }
      }
      .login {
        background: var(--mainColor2);
        border-radius: 50px;
        border: 0;
        font-size: 18px;
        color: #fff;
        padding: 3px 15px;
        border: 1px solid var(--mainColor2);
        white-space: nowrap;
        &:hover {
          background: #fff;
          color: var(--mainColor2);
        }
      }
      .icon-lingdang {
        font-size: 25px;
      }
      @{deep} .el-dropdown {
        .el-button {
          background: var(--mainColor2);
          border-radius: 50px;
          border: 0;
          font-size: 18px;
          // margin-left: 10px;
          padding: 3px 15px;
          border: 1px solid var(--mainColor2);
          display: inline-block;
          white-space: nowrap;
          font-weight: normal;

          span {
            font-size: 18px;
            color: #fff;
          }
          &:hover {
            background: #fff;

            span {
              color: var(--mainColor2);
            }
          }
        }
        .el-dropdown-link {
          width: 100px;
          background: #8fbc25;
          border-radius: 150px;
          border: 0;

          font-size: 18px;
          color: #fff;
          margin-right: 20px;
          .el-icon {
            color: #fff;
          }
        }
      }
    }
  }
}
@{deep} .el-popper {
  .el-dropdown-menu__item {
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    .navbar-collapse ul li {
      margin-bottom: 0 !important;
    }
  }

  .is-show-dropdown {
    display: block;
  }
  .mobile-btn {
    display: none;
    width: 0;
  }
}

@media (min-width: 1200px) {
  .container-fluid {
    width: 1100px !important;
  }
}
@media (min-width: 1400px) {
  .container-fluid {
    width: 1280px !important;
  }
}
@media (max-width: 991px) {
  .is-show-dropdown {
    display: none;
  }
  .main {
    height: 62px;
    .navbar {
      justify-content: space-between;
      .container-fluid {
        justify-content: space-between;
        width: 100%;
        padding: 0 20px;
        .navbar-collapse {
          margin-left: auto;
          justify-content: space-between;
          .navbar-nav {
            height: auto;
            width: 100%;
            .nav-item {
              height: auto;
              padding: 0;
              width: 100%;

              .nav-link {
                padding: 20px 6px 20px;
                height: auto;
                border-bottom: 1px solid rgba(237, 235, 235, 0.2);
                font-size: 20px;
              }
            }
            .active {
              .nav-link {
                border-bottom: 1px solid var(--mainColor2);
              }
            }
          }
        }
      }
      .mobile-btn {
        .lang {
          height: 32px;
          line-height: 32px;
          display: inline-block;
          font-size: 18px;
          margin-right: 10px;
        }
      }
      .navbar-brand {
        padding: 0;
        margin-right: 10px;
        width: 45px;
        position: relative;
        img {
          position: absolute;
          left: 0;
          width: 100%;
          margin-top: 15px;
        }
      }
      .navbar-brand-logo {
        display: none !important;
      }
    }
  }

  .line,
  .login {
    display: none;
  }
  .lang-infomation {
    display: none;
  }
}
</style>
