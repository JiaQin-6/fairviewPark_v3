<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:11:53
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-23 00:47:15
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :class="{'flex-row':is_show}">
    <div class="ownerIsZONE" v-if="is_show">
      <div class="ownerIsZONE-content">
        <div
          class="flex-row space-between mb-10 pb-2"
          style="border-bottom: 1px solid #9d9d9d"
        >
          <span>選項</span>
          <el-icon @click="is_show = false"><Close /></el-icon>
        </div>
        <ul>
          <li
            v-for="(item, index) in [
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
                text: $t('Fairview Part News'),
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
                router: 'loginOut',
                text: $t('Login out'),
              },
            ]"
            :key="index"
            @click="selectOwnersZone(item.router)"
          >{{item.text}}</li>
        </ul>
      </div>
    </div>
    <div
      class="main-content"
      :class="{ show: is_show === true, hide: is_show === false }"
    >
      <Header @showOwnerIsZONE="showOwnerIsZONE"></Header>
      <router-view />
      <Footer></Footer>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, provide } from "vue";
import { useRouter, useRoute } from "vue-router";
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
  setup() {
    const data = reactive({
      is_show: "",
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
      if(!commonFunc.getIsPC()){
        data.is_show = false;
        document.getElementById("navbar-button").click();
      }
      if (val === "/loginOut") {
        loginOut();
        router.push("/home");
      } else {
        router.push(val);
      }
    };
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
  top: 0;
  height: 100vh;
  background-color: #ccc;
  .ownerIsZONE-content {
    width: 50vw;
    max-width: 200px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
    span {
    }
    i {
    }
    ul {
      padding: 0;
      li {
        border-bottom: 1px solid #9d9d9d;
        padding: 10px 5px;
        font-size: 14px;
        color: #000;
        cursor: pointer;
      }
    }
  }
}
.main-content {
  position: relative;
  background-color: #fff;
}
.show {
  transform: translate(50vw);
  animation: show50vw 0.3s linear 1; //动画名  时长   匀速   1次
}
.hide {
  transform: translate(0vw);
  animation: hide50vw 0.3s linear 1; //动画名  时长   匀速   1次
}

@keyframes show50vw {
  from {
    transform: translate(0vw);
  }
  to {
    transform: translate(50vw);
  }
}
@keyframes hide50vw {
  from {
    transform: translate(50vw);
  }
  to {
    transform: translate(0vw);
  }
}
</style>
