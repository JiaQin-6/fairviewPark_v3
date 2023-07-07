<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:11:53
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-06 21:26:02
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :class="{ 'flex-row': is_show }">
    <transition name="el-zoom-in-top">
      <div class="ownerIsZONE" v-if="is_show">
        <div class="ownerIsZONE-content">
          <ul>
            <!-- <li
              v-for="(item, index) in loginPower"
              :key="index"
              @click="selectOwnersZone(item.router)"
            >
              {{ item.text }}
            </li> -->
            <li
              v-for="(item, index) in isShowLoginOutButton
                ? [
                    {
                      router: '/edit-member-information',
                      text: $t('headed.Edit_member_information'),
                    },
                    {
                      router: '/news-update',
                      text: $t('headed.News_Update'),
                    },
                    {
                      router: '/FAQ-from-residents',
                      text: $t('headed.FAQ_from_Residents'),
                    },
                    {
                      router: '/estate-notice',
                      text: $t('headed.Estate_Notices'),
                    },
                    {
                      router: '/estate-activities',
                      text: $t('headed.Estate_Activities'),
                    },
                    {
                      router: '/fairview-part-news',
                      text: $t('headed.Fairview_Park_News'),
                    },
                    {
                      router: '/payment-list',
                      text: $t('headed.Payment_List'),
                    },
                    {
                      router: '/apply-resident-smartcard',
                      text: $t('headed.Apply_Resident_Smartcard'),
                    },
                    {
                      router: '/MAC-column',
                      text: $t('headed.MAC_Column'),
                    },
                    {
                      router: '/the-overhaul-project',
                      text: $t('headed.the_Overhaul_Project'),
                    },
                    {
                      router: '/lottery-system-for-impound',
                      text: $t('headed.Lottery_System_For_Impounding_Action'),
                    },
                    {
                      router: '/frequently-used-forms',
                      text: $t('headed.Frequently_Used_Forms'),
                    },
                    {
                      router: '/residents-handbook-map',
                      text: $t('headed.Residents_Handbook_Map'),
                    },
                    {
                      router: '/demographic-opinion-survey',
                      text: $t('headed.Demographic_Opinion_Survey'),
                    },
                    {
                      router: '/loginOut',
                      text: $t('headed.Login_out'),
                    },
                  ]
                : [
                    {
                      router: '/news-update',
                      text: $t('headed.News_Update'),
                    },
                    {
                      router: '/FAQ-from-residents',
                      text: $t('headed.FAQ_from_Residents'),
                    },
                    {
                      router: '/estate-notice',
                      text: $t('headed.Estate_Notices'),
                    },
                    {
                      router: '/estate-activities',
                      text: $t('headed.Estate_Activities'),
                    },
                    {
                      router: '/fairview-part-news',
                      text: $t('headed.Fairview_Park_News'),
                    },
                    {
                      router: '/payment-list',
                      text: $t('headed.Payment_List'),
                    },
                    {
                      router: '/apply-resident-smartcard',
                      text: $t('headed.Apply_Resident_Smartcard'),
                    },
                    {
                      router: '/MAC-column',
                      text: $t('headed.MAC_Column'),
                    },
                    {
                      router: '/the-overhaul-project',
                      text: $t('headed.the_Overhaul_Project'),
                    },
                    {
                      router: '/lottery-system-for-impound',
                      text: $t('headed.Lottery_System_For_Impounding_Action'),
                    },
                    {
                      router: '/frequently-used-forms',
                      text: $t('headed.Frequently_Used_Forms'),
                    },
                    {
                      router: '/residents-handbook-map',
                      text: $t('headed.Residents_Handbook_Map'),
                    },
                    {
                      router: '/demographic-opinion-survey',
                      text: $t('headed.Demographic_Opinion_Survey'),
                    },
                  ]"
              :key="index"
              @click="selectOwnersZone(item.router)"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="main-content">
      <Header
        :isShow="is_show"
        :isShowLoginButton="isShowLoginButton"
        :isShowLoginOutButton="isShowLoginOutButton"
        @showOwnerIsZONE="showOwnerIsZONE"
      ></Header>
      <router-view />
      <Footer v-if="is_show_footer"></Footer>
      <Login></Login>
      <EditTenantInformation></EditTenantInformation>
      <TenantAccountManagement></TenantAccountManagement>
      <div class="mask" @click="is_show = false"></div>
    </div>
    <!-- 回到頂部按鈕 -->
    <el-backtop style="background-color: transparent">
      <img style="width: 100%" :src="arrowUpCircle" alt="" />
    </el-backtop>
    <!-- 非會員和正式會員信息彈框 -->
    <RealTimeInfo
      :showRealTimeInfo="showRealTimeInfo"
      :newRealTimeInfo="newRealTimeInfo"
      @close="
        () => {
          showRealTimeInfo = false;
        }
      "
    ></RealTimeInfo>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  getCurrentInstance,
  toRefs,
  onMounted,
  provide,
  watch,
  computed,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import Header from "../../components/header/index.vue";
import Footer from "../../components/footer/index.vue";
import RealTimeInfo from "../../components/real-time-info/index.vue";
import Login from "../login/index.vue";
import EditTenantInformation from "../login/editTenantInformation.vue";
import TenantAccountManagement from "../tenantAccountManagement/index.vue";
import commonFunc from "../../assets/js/commonFunc";
// import  "../../assets/js/rem";
export default {
  components: {
    Header,
    Footer,
    RealTimeInfo,
    Login,
    EditTenantInformation,
    TenantAccountManagement,
  },
  data() {
    return {
      arrowUpCircle: new URL(
        "../../assets/image/home/arrow-up-circle.png",
        import.meta.url
      ).href,
    };
  },
  setup() {
    const { proxy, ctx } = getCurrentInstance();
    const store = useStore();
    const data = reactive({
      is_show: false,
      is_show_footer: true,
      isShowLoginOutButton: true, //是否顯示登出按鈕（app進來web判斷）
      isShowLoginButton: true, //是否顯示登錄按鈕（app進來web判斷）
      showRealTimeInfo: false, //是否显示资讯内容组件
      newRealTimeInfo: {
        id: "",
        content: "",
      },
    });
    const router = useRouter(); // 必须在setup的根作用域调用，在函数中调返回undefined 如需在其他页面使用  import router from "./router"; router = useRouter();
    const route = useRoute(); // 必须在setup的根作用域调用，在函数中调返回undefined

    //判斷當從app進來的時候用戶是否登錄
    if (
      route.query.source &&
      route.query.source === "app" &&
      !sessionStorage.getItem("app-login-status")
    ) {
      if (route.query.session) {
        //在app已登錄
        sessionStorage.setItem("app-login-status", "1");
        data.is_show_footer = false;
        data.isShowLoginOutButton = false;
      } else {
        //在app未登錄
        sessionStorage.setItem("app-login-status", "2");
        data.is_show_footer = false;
        data.isShowLoginButton = false;
      }
    } else if (sessionStorage.getItem("app-login-status")) {
      if (sessionStorage.getItem("app-login-status") === "1") {
        data.is_show_footer = false;
        data.isShowLoginOutButton = false;
      } else if (sessionStorage.getItem("app-login-status") === "2") {
        data.is_show_footer = false;
        data.isShowLoginButton = false;
      }
    }
    //
    const showOwnerIsZONE = (val) => {
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
      data.is_show = val;
    };
    //登出
    const loginOut = () => {
      localStorage.removeItem("login-info");
      store.commit("setLoginStatus", false);
    };
    //查询最新一条弹窗信息
    const findOneNewPopupBox = async (memberType) => {
      try {
        const res = await proxy.$http.findOneNewPopupBox({
          memberType: memberType,
          lang: sessionStorage.getItem("fairview_park_lang") || "zh_tw",
        });
        if (res.data.status === 200) {
          return res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //
    const selectOwnersZone = (val) => {
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
      data.is_show = false;
      if (val === "/loginOut") {
        loginOut();
        router.push({
          path: "/home",
          query: {
            lang: sessionStorage.getItem("fairview_park_lang"),
          },
        });
      } else if (val === "/edit-member-information") {
        const button = document.createElement("button");
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#editMemberInformation");
        document.body.appendChild(button);
        button.click();
        document.body.removeChild(button);
      } else if (val === "/start-up-tenant") {
        const button = document.createElement("button");
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#editTenantInformation");
        document.body.appendChild(button);
        button.click();
        document.body.removeChild(button);
      } else {
        router.push({
          path: val,
          query: {
            lang: sessionStorage.getItem("fairview_park_lang"),
          },
        });
      }
    };
    watch(
      () => route,
      (value) => {
        data.is_show = false;
        if (document.getElementById("close-login")) {
          document.getElementById("close-login").click();
        }
        if (document.getElementById("close-signUp")) {
          document.getElementById("close-signUp").click();
        }
        if (document.getElementById("close-forgetPasswor")) {
          document.getElementById("close-forgetPasswor").click();
        }
        if (document.getElementById("close-edit-member")) {
          document.getElementById("close-edit-member").click();
        }
      },
      { deep: true, immediate: true }
    );
    watch(
      () => store.state.loginStatus,
      async (val) => {
        localStorage.removeItem("real-info");
        //通过身份和localStorage中的状态，决定实时信息提示框是否要显示
        //这里先调用api，拿到非会员和会员要提示的信息id，和localStorage里面的id对比
        const ownerData = await findOneNewPopupBox(0);
        const nonMemberData = await findOneNewPopupBox(2);
        //根据localStorage中的状态来决定显示隐藏
        let newData = {
          nonMember: {
            id: nonMemberData && nonMemberData.id,
            content: nonMemberData && nonMemberData.htmlEnUs,
          },
          owner: {
            id: ownerData && ownerData.id,
            content: ownerData && ownerData.htmlEnUs,
          },
        };
        console.log(val);
        if (val) {
          if (!ownerData) {
            return false;
          }
          data.newRealTimeInfo.id = newData.owner.id;
          data.newRealTimeInfo.content = newData.owner.content;

          if (localStorage.getItem("real-info")) {
            if (
              newData.owner.id !== JSON.parse(localStorage.getItem("real-info")).owner.id
            ) {
              localStorage.setItem(
                "real-info",
                JSON.stringify({
                  nonMember: {
                    id: JSON.parse(localStorage.getItem("real-info")).nonMember.id,
                    show: JSON.parse(localStorage.getItem("real-info")).nonMember.show,
                  },
                  owner: {
                    id: newData.owner.id,
                    show: true,
                  },
                })
              );
            }

            if (JSON.parse(localStorage.getItem("real-info")).owner.show) {
              data.showRealTimeInfo = true;
            }
          } else {
            data.showRealTimeInfo = true;
          }
        } else {
          if (!nonMemberData) {
            return false;
          }
          data.newRealTimeInfo.id = newData.nonMember.id;
          data.newRealTimeInfo.content = newData.nonMember.content;
          if (localStorage.getItem("real-info")) {
            if (
              newData.nonMember.id !==
              JSON.parse(localStorage.getItem("real-info")).nonMember.id
            ) {
              localStorage.setItem(
                "real-info",
                JSON.stringify({
                  nonMember: {
                    id: newData.nonMember.id,
                    show: true,
                  },
                  owner: {
                    id: JSON.parse(localStorage.getItem("real-info")).owner.id,
                    show: JSON.parse(localStorage.getItem("real-info")).owner.show,
                  },
                })
              );
            }
            if (JSON.parse(localStorage.getItem("real-info")).nonMember.show) {
              data.showRealTimeInfo = true;
            }
          } else {
            data.showRealTimeInfo = true;
          }
        }
      },
      { deep: true, immediate: true }
    );
    const loginPower = computed(() => {
      let o_array = [
        {
          router: "/news-update",
          text: proxy.$t("headed.News_Update"),
        },
        {
          router: "/FAQ-from-residents",
          text: proxy.$t("headed.FAQ_from_Residents"),
        },
        {
          router: "/estate-notice",
          text: proxy.$t("headed.Estate_Notices"),
        },
        {
          router: "/estate-activities",
          text: proxy.$t("headed.Estate_Activities"),
        },
        {
          router: "/fairview-part-news",
          text: proxy.$t("headed.Fairview_Park_News"),
        },
        {
          router: "/payment-list",
          text: proxy.$t("headed.Payment_List"),
        },
        {
          router: "/apply-resident-smartcard",
          text: proxy.$t("headed.Apply_Resident_Smartcard"),
        },
        {
          router: "/MAC-column",
          text: proxy.$t("headed.MAC_Column"),
        },
        {
          router: "/the-overhaul-project",
          text: proxy.$t("headed.the_Overhaul_Project"),
        },
        {
          router: "/lottery-system-for-impound",
          text: proxy.$t("headed.Lottery_System_For_Impounding_Action"),
        },
        {
          router: "/frequently-used-forms",
          text: proxy.$t("headed.Frequently_Used_Forms"),
        },
        {
          router: "/residents-handbook-map",
          text: proxy.$t("headed.Residents_Handbook_Map"),
        },
        {
          router: "/demographic-opinion-survey",
          text: proxy.$t("headed.Demographic_Opinion_Survey"),
        },
      ];
      if (data.isShowLoginOutButton) {
        o_array.push({
          router: "/loginOut",
          text: proxy.$t("headed.Login_out"),
        });
      }
      if (data.loginInfo && data.loginInfo.groupId === 0) {
        o_array.unshift({
          router: "/edit-member-information",
          text: proxy.$t("headed.Edit_member_information"),
        });
      } else {
        o_array.unshift({
          router: "/start-up-tenant",
          text: proxy.$t("headed.Tenant_account_management"),
        });
      }
      return o_array;
    });
    onMounted(async () => {
      //如果滚动隐藏下拉框
      document.onscroll = () => {
        // if (
        //   document.getElementsByClassName("menu-select") &&
        //   document.getElementsByClassName("menu-select")[0] &&
        //   document
        //     .getElementsByClassName("menu-select")[0]
        //     .getElementsByClassName("is-reverse").length !== 0
        // ) {
        //   document.getElementsByClassName("menu-select")[0].click();
        // }
        if (
          document.getElementsByClassName("el-pagination__sizes") &&
          document.getElementsByClassName("el-pagination__sizes")[0] &&
          document
            .getElementsByClassName("el-pagination__sizes")[0]
            .getElementsByClassName("is-reverse").length !== 0
        ) {
          document
            .getElementsByClassName("el-pagination__sizes")[0]
            .childNodes[0].click();
        }
      };
    });

    return {
      ...toRefs(data),
      loginOut,
      selectOwnersZone,
      showOwnerIsZONE,
      findOneNewPopupBox,
      loginPower,
    };
  },
};
</script>

<style lang="less" scoped>
.ownerIsZONE {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 100vw;
  z-index: 10;

  .ownerIsZONE-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    position: relative;

    ul {
      padding: 0;
      background-color: var(--mainColor2);

      li {
        border-bottom: 1px solid rgba(206, 204, 204, 0.3);
        padding: 12px 10px;
        font-size: 26px;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

.main-content {
  position: relative;
  background-color: #fff;
  width: 100%;

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: none;
    z-index: 300;
  }
}

@media (max-width: 991px) {
  .ownerIsZONE {
    .ownerIsZONE-content {
      ul {
        li {
          font-size: 20px;
          padding: 10px 10px;
        }
      }
    }
  }
}
</style>
