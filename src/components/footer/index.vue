<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 23:18:38
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-19 21:53:45
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/components/footer/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main" id="footer">
    <!-- 上部份 -->
    <div class="top-part">
      <div class="row top-part-wrap">
        <!-- 左部份 -->
        <div
          class="
            col col-12 col-xl-8 col-lg-6 col-md-6 col-sm-12
            flex-row
            space-around
          "
        >
          <div>
            <img class="logo" :src="logo" alt="" />
          </div>

          <div class="browse">
            <ul class="link mt-20 fs-16 flex-row flex-wrap">
              <li>
                <a href="#/about-us">{{ $t("About us") }}</a>
              </li>
              <li>
                <a href="#/prospective-buyer">{{ $t("Prospective Buyer") }}</a>
              </li>
              <li>
                <a href="#/estate-facilities">{{ $t("Estate Facilities") }}</a>
              </li>
              <li>
                <a href="#/home">{{ $t("Coach Service") }}</a>
              </li>
              <li>
                <a href="#/shopping-information">{{ $t("Shops Directory") }}</a>
              </li>
              <li>
                <a href="#/useful-link">{{ $t("Useful Telephone Nos.") }}</a>
              </li>
              <li>
                <a href="#/estate-notice">{{ $t("Estate Notice") }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 右部份 -->
        <div
          class="
            col col-12 col-xl-4 col-lg-6 col-md-6 col-sm-12
            flex-row flex-column
            download
          "
        >
          <p>{{ $t("Easy access to the information of fairview park") }}</p>
          <div class="image flex-row space-between">
            <img style="width: 32%" :src="app_store_icon" alt="" />
            <img style="width: 32%" :src="google_play_icon" alt="" />
            <img style="width: 32%" :src="download_apk_icon" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 下部份 -->
    <div class="bottom-part">
      <div class="row bottom-part-wrap">
        <!-- 左部份 -->
        <div class="col col-12 col-xl-5 col-lg-5 col-md-5">
          <p class="fs-16">
            {{ $t("All Rights Reserved") }} © {{ new Date().getFullYear() }}
            {{ $t("fairview park") }}
          </p>
        </div>
        <!-- 右部份 -->
        <div class="bottom-right-part col col-12 col-xl-7 col-lg-7 col-md-7">
          <ul class="flex-row">
            <li class="fs-16">{{ $t("Disclaimer") }}</li>
            <li class="fs-16">
              {{ $t("Privacy Policy and Personal Data Collection Statement") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  nextTick,
  getCurrentInstance,
  toRefs,
  onMounted,
  watch,
  inject,
} from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  data() {
    return {
      logo: new URL("../../assets/image/home/logo_footer.png", import.meta.url)
        .href,
      app_store_icon: new URL(
        "../../assets/image/home/App store icon.png",
        import.meta.url
      ).href,
      google_play_icon: new URL(
        "../../assets/image/home/Google play icon.png",
        import.meta.url
      ).href,
      download_apk_icon: new URL(
        "../../assets/image/home/download apk.png",
        import.meta.url
      ).href,
    };
  },
  setup(props) {
    const router = useRouter(); // 必须在setup的根作用域调用，在函数中调返回undefined 如需在其他页面使用  import router from "./router"; router = useRouter();
    const route = useRoute(); // 必须在setup的根作用域调用，在函数中调返回undefined
    const transferFooter = () => {
      let height = document
        .getElementById("footer")
        .getBoundingClientRect().height;
      let top = document.getElementById("footer").getBoundingClientRect().top;
      if (height + top < document.body.offsetHeight) {
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.bottom = "0px";
      } else {
        document.getElementById("footer").style.position = "";
      }
    };
    onMounted(() => {
      // transferFooter()
      // window.addEventListener("resize", () => {
      //   transferFooter()
      // });
    });
    //监听器
    watch(
      () => route,
      (value) => {
        // setTimeout(()=>{
        //   nextTick(() => {
        //   transferFooter()
        // });
        // },1000)
      },
      { deep: true }
    );
    return {
      transferFooter,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #e5e5e5;
  width: 100%;
  .top-part {
    border-bottom: 2px solid #abafc7;
    padding-bottom: 20px;
    .row {
      margin: 0 auto;
      align-items: center;
      .col {
        text-align: left;
        .logo {
          width: 66px;
        }
        .browse {
          width: 68%;
          text-align: left;
          h3 {
            font-family: "Nunito";
            font-weight: 700;
            color: #000;
            line-height: 30px;
          }
          ul {
            // height: 110px;
            // flex-direction: column !important;
            padding-left: 0;
            li {
              font-family: "Quicksand";
              font-style: normal;
              font-size: 16px;
              line-height: 25px;
              margin-right: 30px;
              width: 180px;
              a {
                cursor: pointer;
                text-decoration: none;
                color: var(--el-text-color-primary);
              }
            }
          }
        }
        p {
          font-size: 16px;
          color: var(--el-text-color-primary);
          line-height: 20px;
          margin-bottom: 5px;
        }
        .image {
          margin-bottom: 10px;
          img {
            margin-right: 5px;
          }
        }
      }
      .download {
        justify-content: right;
      }
    }
  }
  .bottom-part {
    background-color: var(--mainColor1);
    .row {
      margin: 0 auto;
      .col {
        text-align: left;
        margin: 10px 0;

        p {
          font-family: "Quicksand";
          color: #fff;
          padding: 0 20px;
          margin: 0;
        }
        ul {
          padding-left: 0;
          margin: 0;
          align-items: center;
          li {
            padding: 0 10px;
            font-family: "Quicksand";
            color: #fff;
            display: inline-block;
            &:first-child {
              border-right: 1px solid #abafc7;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .top-part-wrap,
  .bottom-part-wrap {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .top-part-wrap,
  .bottom-part-wrap {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .top-part-wrap,
  .bottom-part-wrap {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .top-part-wrap {
    width: 992px;
  }
  .bottom-part {
    .bottom-part-wrap {
      width: 992px;
    }
    .bottom-right-part {
      text-align: right;
      ul {
        display: block;
      }
    }
  }
}
@media (min-width: 1400px) {
  .top-part-wrap,
  .bottom-part-wrap {
    width: 1280px;
  }
}
@media (max-width: 767px) {
  .main {
    .top-part {
      .row {
        .col {
          &:first-child {
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
          }
          &:last-child {
            text-align: center;
            .image {
              flex-wrap: wrap;
              img {
                // width: 80%!important;
              }
            }
          }
        }
      }
    }
    .bottom-part {
      .bottom-part-wrap {
        p {
          text-align: center;
        }
        ul {
          justify-content: center;
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .main {
    .top-part {
      .row {
        .col {
          &:first-child {
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
          }
          &:last-child {
            text-align: center;
            .image {
              display: block !important;
              img {
                width: auto !important;
                height: 60px !important;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
    .bottom-part {
      .bottom-part-wrap {
        p {
          font-size: 15px;
        }
        ul {
          li {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
