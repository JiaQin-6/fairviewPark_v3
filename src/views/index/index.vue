<template>
  <div :class="{ 'flex-row': is_show }">
    <transition name="el-zoom-in-top">
      <div class="ownerIsZONE" v-if="is_show">
        <div class="ownerIsZONE-content">
          <ul>
            <li
              v-for="(item, index) in loginPower"
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
        @showTenantModal="()=>{
          isShowTenantModal = true
        }"
      ></Header>
      <router-view />
      <Footer v-if="is_show_footer"></Footer>
      <Login></Login>
      <EditTenantInformation></EditTenantInformation>
      <TenantAccountManagement v-if="isShowTenantModal" @hideTenantModal="()=>{isShowTenantModal = false}"></TenantAccountManagement>
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
      isShowTenantModal:false,//是否显示TenantAccountManagement组件
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
      } else if (val === "/start-up") {
        selectTenantStatus();
      } else {
        router.push({
          path: val,
          query: {
            lang: sessionStorage.getItem("fairview_park_lang"),
          },
        });
      }
    };
    //業主查看住客情況
    const selectTenantStatus = async () => {
      data.loading = true;
      try {
        const res = await proxy.$http.selectTenantStatus({
          id: JSON.parse(localStorage.getItem("login-info")).id,
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.isShowTenantModal = true
        } else if (res.data.status === 501) {
          ElMessage({
            message: res.data.msg,
            type: "warning",
          });
        } else {
          ElMessage({
            message: res.data.msg,
            type: "warning",
          });
        }
        data.loading = false;
      } catch (error) {
        data.loading = false;
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
        //通过身份和localStorage中的状态，决定实时信息提示框是否要显示
        //这里先调用api，拿到非会员和会员要提示的信息id，和localStorage里面的id对比
        const ownerData = await findOneNewPopupBox(0); //业主
        const nonMemberData = await findOneNewPopupBox(2); //游客
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
        if (val) {
        console.log(ownerData)
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
      let o_array = [];
      JSON.parse(localStorage.getItem("login-info")).menuList.map((item) => {
        o_array.push({
          router: item.route,
          text:
            sessionStorage.getItem("fairview_park_lang") === "en_us"
              ? item.nameEnUs
              : item.nameZhTw,
        });
      });
      if (data.isShowLoginOutButton) {
        o_array.push({
          router: "/loginOut",
          text: proxy.$t("headed.Login_out"),
        });
      }
      if (
        localStorage.getItem("login-info") &&
        JSON.parse(localStorage.getItem("login-info")).groupId === 0
      ) {
        o_array.unshift({
          router: "/start-up",
          text: proxy.$t("headed.Tenant_account_management"),
        });
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
      selectTenantStatus,
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
