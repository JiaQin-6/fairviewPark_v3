<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-15 00:26:16
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
      {{
          fairview_park_lang === "en_us"
            ? "The Overhaul Project"
            : "大維修"
        }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in [
                {
                  title:
                    fairview_park_lang === 'en_us'
                      ? 'The Overhaul Project'
                      : '「大維修」',
                },
                {
                  title:
                    fairview_park_lang === 'en_us'
                      ? 'SPAC Member List'
                      : '特別工程諮詢委員會委員名單',
                },
                {
                  title:
                    fairview_park_lang === 'en_us'
                      ? 'Minutes of SPAC Meetings'
                      : '會議記錄',
                },
                {
                  title: fairview_park_lang === 'en_us' ? 'FAQ' : '常見問題',
                },
              ]"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="
                () => {
                  nav_index = index;
                }
              "
            >
              <span>{{ item.title }}</span>
            </li>
          </ul>
          <el-select size="large" v-model="nav_index" class="m-2 menu-select" placeholder="Select">
            <el-option
              v-for="(item, index) in [
                {
                  title:
                    fairview_park_lang === 'en_us'
                      ? 'The Overhaul Project'
                      : '「大維修」',
                  value:0,
                },
                {
                  title:
                    fairview_park_lang === 'en_us'
                      ? 'SPAC Member List'
                      : '特別工程諮詢委員會委員名單',
                  value:1,
                },
                {
                  title:
                    fairview_park_lang === 'en_us'
                      ? 'Minutes of SPAC Meetings'
                      : '會議記錄',
                      value:2,
                },
                {
                  title: fairview_park_lang === 'en_us' ? 'FAQ' : '常見問題',
                  value:3,
                },
              ]"
              :key="index"
              :label="item.title"
              :value="item.value"
            >
              <i class="iconfont" :class="item.icon" style="margin-right:10px"></i>
              <span>{{ item.title }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
          <TheOverhaulProject v-if="nav_index === 0"></TheOverhaulProject>
          <SPACMemberList v-if="nav_index === 1"></SPACMemberList>
          <MinutesOfSPACMeetings v-if="nav_index === 2"></MinutesOfSPACMeetings>
          <FAQ v-if="nav_index === 3"></FAQ>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import TheOverhaulProject from "./components/theOverhaulProject.vue";
import SPACMemberList from "./components/SPACMemberList.vue";
import MinutesOfSPACMeetings from "./components/minutesOfSPACMeetings.vue";
import FAQ from "./components/FAQ.vue";
export default {
  components: {
    TheOverhaulProject,
    SPACMemberList,
    MinutesOfSPACMeetings,
    FAQ,
  },
  data() {
    return {
      banner: new URL(
        "../../../assets/image/aboutUs/banner.png",
        import.meta.url
      ).href,
      nav_index: 0,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    onMounted(async () => {});
    return {
      ...toRefs(data),
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
    font-family: 'Poppins-Bold', SourceHanSansCN-Regular, Arial;
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
            // display: inline-block;
          }
          span {
            color: #fff;
          }
        }
      }
      .menu-select{
        display: none;
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 2px 0px 0 20px;
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
        .menu-select{
        display: block;
      }
      }
    }
  }
}
</style>
