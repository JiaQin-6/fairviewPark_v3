<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:05:45
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
        {{ fairview_park_lang === "en_us" ? "MAC" : "管理諮詢委員會"
        }}{{ fairview_park_lang === "en_us" ? " Column" : "專欄" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 menu">
          <!--   mode="horizontal" -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            :mode="isPC ? '' : 'horizontal'"
            background-color="#ebe9e9"
            text-color="#000"
            active-text-color="#fff"
            @select="handleSelect"
          >
            <el-menu-item index="1">{{
              fairview_park_lang === "en_us" ? "Rules & Regulations" : "規章制度"
            }}</el-menu-item>
            <el-menu-item index="2">{{
              fairview_park_lang === "en_us"
                ? "Sample of Candidate Form"
                : "候選人表格樣本"
            }}</el-menu-item>
            <el-menu-item index="3">{{
              fairview_park_lang === "en_us"
                ? "Samlpe of Nomination Form"
                : "提名表格樣本"
            }}</el-menu-item>
            <el-menu-item index="4">{{
              fairview_park_lang === "en_us" ? "Election Procedure" : "選舉程序"
            }}</el-menu-item>
            <el-menu-item index="5">{{
              fairview_park_lang === "en_us"
                ? "11th MAC Members"
                : "應屆管理諮詢委員會委員資料"
            }}</el-menu-item>
            <el-menu-item index="6">{{
              fairview_park_lang === "en_us" ? "Minutes of MAC Meetings" : "會議記錄"
            }}</el-menu-item>
            <el-menu-item index="7">{{
              fairview_park_lang === "en_us"
                ? "Nearby Proposed Development(s)"
                : "周邊發展項目"
            }}</el-menu-item>
          </el-menu>
          <el-select class="menu-select" size="large" v-model="activeIndex">
            <el-option
              v-for="(item, index) in [
                {
                  label:
                    fairview_park_lang === 'en_us' ? 'Rules & Regulations' : '規章制度',
                  value: '1',
                },
                {
                  label:
                    fairview_park_lang === 'en_us'
                      ? 'Sample of Candidate Form'
                      : '候選人表格樣本',
                  value: '2',
                },
                {
                  label:
                    fairview_park_lang === 'en_us'
                      ? 'Samlpe of Nomination Form'
                      : '提名表格樣本',
                  value: '3',
                },
                {
                  label:
                    fairview_park_lang === 'en_us' ? 'Election Procedure' : '選舉程序',
                  value: '4',
                },
                {
                  label:
                    fairview_park_lang === 'en_us'
                      ? '11th MAC Members'
                      : '應屆管理諮詢委員會委員資料',
                  value: '5',
                  children: [],
                },
                {
                  label:
                    fairview_park_lang === 'en_us'
                      ? 'Minutes of MAC Meetings'
                      : '會議記錄',
                  value: '6',
                  children: [],
                },
                {
                  label:
                    fairview_park_lang === 'en_us'
                      ? 'Nearby Proposed Development(s)'
                      : '周邊發展項目',
                  value: '7',
                },
              ]"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 flex-row">
          <div class="nav-content-wrap" style="width: 100%">
            <RulesRegulations v-if="activeIndex === '1'"></RulesRegulations>
            <SampleOfCandidateForm v-if="activeIndex === '2'"></SampleOfCandidateForm>
            <SamlpeOfNominationForm v-if="activeIndex === '3'"></SamlpeOfNominationForm>
            <ElectionProcedure v-if="activeIndex === '4'"></ElectionProcedure>
            <MACMembers v-if="activeIndex === '5'"></MACMembers>
            <MinutesOfMacMeetings v-if="activeIndex === '6'"></MinutesOfMacMeetings>
            <NearbyProposedDevelopment
              v-if="activeIndex === '7'"
            ></NearbyProposedDevelopment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import RulesRegulations from "./rules-regulations/index.vue";
import SampleOfCandidateForm from "./sample-of-candidate-form/index.vue";
import SamlpeOfNominationForm from "./samlpe-of-nomination-form/index.vue";
import ElectionProcedure from "./election-procedure/index.vue";
import MACMembers from "./MAC-members/index.vue";
import MinutesOfMacMeetings from "./minutes-of-mac-meetings/minutesOfMacMeetings.vue";
import NearbyProposedDevelopment from "./nearby-proposed-development/nearbyProposedDevelopment.vue";
import commonFunc from "../../../assets/js/commonFunc";
export default {
  components: {
    RulesRegulations,
    SampleOfCandidateForm,
    SamlpeOfNominationForm,
    ElectionProcedure,
    MACMembers,
    MinutesOfMacMeetings,
    NearbyProposedDevelopment,
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
      lottery_system_for_mpound_content: [],
      fairview_park_lang: "",
      activeIndex: "1",
      MacColumnFile: "",
      isPC: false,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findLotterySystemForImpound = async () => {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await proxy.$http.findLotterySystemForImpound({
            lang: data.fairview_park_lang,
          });
          if (res.data.status === 200) {
            data.lottery_system_for_mpound_content = res.data.data;
            resolve(true);
          }
        } catch (error) {
          reject(false);
        }
      });
    };
    //查看工作回顧pdf
    const findOneMacColumnFile = async () => {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await proxy.$http.findOneMacColumnFile({
            lang: data.fairview_park_lang,
          });
          if (res.data.status === 200) {
            data.MacColumnFile = res.data.data.pdfUrlEnUs;
            resolve(true);
          }
        } catch (error) {
          reject(false);
        }
      });
    };
    const handleSelect = (key, keyPath) => {
      data.activeIndex = key;
    };
    //監聽屏幕縮放
    const screenChange = () => {
      window.addEventListener("resize", () => {
        getIsPC();
      });
    };
    //獲取屏幕狀態
    const getIsPC = () => {
      if (
        window
          .getComputedStyle(document.getElementById("navbar-button"))
          .getPropertyValue("display") !== "none"
      ) {
        data.isPC = false;
      } else {
        data.isPC = true;
      }
    };
    onMounted(async () => {
      screenChange();
      getIsPC();
      Promise.all([findLotterySystemForImpound(), findOneMacColumnFile()])
        .then((result) => {
          console.log(result);
        })
        .catch((e) => console.log(e));
    });
    return {
      ...toRefs(data),
      findLotterySystemForImpound,
      findOneMacColumnFile,
      handleSelect,
      screenChange,
      getIsPC,
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
    @{deep} .el-menu {
      position: sticky;
        top: 80px;
      background-color: #fff;
      border: none;
      .el-menu-item {

        padding: 6px 0 6px 10px;
        height: auto;
        line-height: inherit;
        margin-bottom: 5px;
        white-space: inherit;
        font-size: 18px;
        &:hover {
          background-color: var(--mainColor2) !important;
          color: #fff !important;
          a {
            color: #fff !important;
          }
        }
      }
      .el-sub-menu {
        margin-bottom: 5px;
        .el-sub-menu__title {
          padding: 6px 0 6px 10px;
          height: 40px;
          background-color: #fff !important;
          font-size: 18px;
        }
        .el-menu-item {
          margin-bottom: 0px;
        }
      }
      .is-active {
        background-color: var(--mainColor2);
      }
    }
    .menu-select {
      display: none;
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 0 20px;
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
  }
  .nav-wrap {
    padding: 20px;
    .row {
      .menu {
        padding: 0px;
        @{deep} .el-menu {
          background-color: #fff;
          display: none;
        }
        @{deep} .menu-select {
          display: block;
          --el-select-input-focus-border-color: #ccc;
          margin-bottom: 20px;
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
        }
      }
      @{deep} .nav-content {
      padding: 0px;
    }
    }
  }
}
</style>
