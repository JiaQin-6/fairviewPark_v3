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
          <li
            v-for="(item, index) in [
              {
                router: '/edit-member-information',
                text: $t('Edit member information'),
              },
              {
                router: '/FAQ-from-residents',
                text: $t('FAQ from Residents'),
              },
              {
                router: '/estate-notice',
                text: $t('Estate Notices'),
              },
              {
                router: '/fairview-part-news',
                text: $t('Fairview Park News'),
              },
              {
                router: '/demographic-opinion-survey',
                text: $t('Demographic & Opinion Survey'),
              },
              {
                router: '/estate-activities',
                text: $t('Estate Activities'),
              },
              {
                router: '/news-update',
                text: $t('News Update'),
              },
              {
                router: '/residents-handbook-map',
                text: $t('Residents Handbook / Map'),
              },
              {
                router: '/frequently-used-forms',
                text: $t('Frequently Used Forms'),
              },
              {
                router: '/MAC-column',
                text: $t('MAC Column'),
              },
              {
                router: '/payment-list',
                text: $t('Payment List'),
              },
              {
                router: '/lottery-system-for-impound',
                text: $t('Lottery System For Impounding Action'),
              },
              {
                router: '/the-overhaul-project',
                text: $t('the Overhaul Project'),
              },
              {
                router: '/apply-resident-smartcard',
                text: $t('Apply Resident Smartcard'),
              },
             
              {
                router: '/loginOut',
                text: $t('Login out'),
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
    <div
      class="main-content"
    >
      <Header :isShow="is_show" @showOwnerIsZONE="showOwnerIsZONE"></Header>
      <router-view />
      <Footer></Footer>
      <Login></Login>
      <div class="mask" @click="is_show = false"></div>
    </div>
    <!-- 回到頂部按鈕 -->
    <el-backtop>
      <img style="width:60px" :src="arrowUpCircle" alt="" />
    </el-backtop>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, provide,watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import Header from "../../components/header/index.vue";
import Footer from "../../components/footer/index.vue";
import Login from "../login/index.vue";
import commonFunc from "../../assets/js/commonFunc";
export default {
  components: {
    Header,
    Footer,
    Login,
  },
  data(){
    return {
      arrowUpCircle: new URL(
        "../../assets/image/home/arrow-up-circle.png",
        import.meta.url
      ).href,
    }
  },
  setup() {
    const store = useStore();
    const data = reactive({
      is_show: false,
    });
    const router = useRouter(); // 必须在setup的根作用域调用，在函数中调返回undefined 如需在其他页面使用  import router from "./router"; router = useRouter();
    const route = useRoute(); // 必须在setup的根作用域调用，在函数中调返回undefined
    const showOwnerIsZONE = (val) => {
      data.is_show = val;
    };
    //登出
    const loginOut = () => {
      localStorage.removeItem("login-info");
      store.commit("setLoginStatus", false);
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
          path:'/home',
          query:{
            lang:sessionStorage.getItem('fairview_park_lang')
          }
        });
      } else if (val === "/edit-member-information") {
        const button = document.createElement('button');
        button.setAttribute('data-bs-toggle','modal')
        button.setAttribute('data-bs-target','#editMemberInformation')
        document.body.appendChild(button)
        button.click();
        document.body.removeChild(button)
      } else {
        router.push({
          path:val,
          query:{
            lang:sessionStorage.getItem('fairview_park_lang')
          }
        });
      }
    };
    watch(
      () => route,
      (value) => {
        data.is_show = false
      },
      { deep: true, immediate: true }
    );
    return {
      ...toRefs(data),
      loginOut,
      selectOwnersZone,
      showOwnerIsZONE,
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
  background-color: var(--mainColor2);
  z-index: 10;
  .ownerIsZONE-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    ul {
      padding: 0;
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
</style>
