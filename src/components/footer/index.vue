<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 23:18:38
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:50:20
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
          class="col col-12 col-xl-7 col-lg-6 col-md-6 col-sm-12 flex-row space-between"
          style="padding:0 10px 0 0"
        >
          <div>
            <img class="logo" :src="logo" alt="" />
          </div>

          <div class="browse">
            <ul class="link mt-20 fs-16 flex-row flex-wrap">
              <li>
                <a :href="'#/about-us?lang=' + fairview_park_lang">{{
                  $t("About us")
                }}</a>
              </li>
              <li>
                <a :href="'#/prospective-buyer?lang=' + fairview_park_lang">{{
                  $t("Prospective Buyer")
                }}</a>
              </li>
              <li>
                <a :href="'#/estate-facilities?lang=' + fairview_park_lang">{{
                  $t("Estate Facilities")
                }}</a>
              </li>
              <li>
                <a :href="'#/coach-service?lang=' + fairview_park_lang">{{
                  $t("Coach Service")
                }}</a>
              </li>
              <li>
                <a :href="'#/shopping-information?lang=' + fairview_park_lang">{{
                  $t("Shops Directory")
                }}</a>
              </li>
              <li>
                <a :href="'#/useful-link?lang=' + fairview_park_lang">{{
                  $t("Useful Telephone Nos.")
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 右部份 -->
        <div
          class="col col-12 col-xl-5 col-lg-6 col-md-6 col-sm-12 flex-row flex-column download"
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
        <div style="padding:0" class="col col-12 col-xl-5 col-lg-5 col-md-5">
          <p class="fs-18" style="padding:0">
            {{ $t("All Rights Reserved") }} {{ new Date().getFullYear() }}
            {{ $t("Fairview Park Property Management Limited") }}
          </p>
        </div>
        <!-- 右部份 -->
        <div class="bottom-right-part col col-12 col-xl-7 col-lg-7 col-md-7" style="padding:0">
          <ul class="flex-row">
            <li class="fs-18">
              <a
                target="_blank"
                :href="
                  fairview_park_lang === 'en_us'
                    ? 'https://fairviewpark.hk/file/disclaimerEN.html'
                    : 'https://fairviewpark.hk/file/disclaimerTC.html'
                "
                >{{ $t("Disclaimer") }}</a
              >
            </li>
            <li class="fs-18">
              <a
                target="_blank"
                :href="
                  fairview_park_lang === 'en_us'
                    ? 'https://fairviewpark.hk/file/privacyEN.html'
                    : 'https://fairviewpark.hk/file/privacyTC.html'
                "
                >{{ $t("Privacy Policy and Personal Data Collection Statement") }}</a
              >
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
      logo: new URL("../../assets/image/home/logo_footer.png", import.meta.url).href,
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
    const data = reactive({
      fairview_park_lang: "",
    });
    //判断url是否带有语言参数
    if (
      route.query.lang &&
      (route.query.lang === "en_us" || route.query.lang === "zh_tw")
    ) {
      data.fairview_park_lang = route.query.lang;
    } else {
      data.fairview_park_lang = "zh_tw";
    }
    console.log(data.fairview_park_lang);
    const transferFooter = () => {
      let height = document.getElementById("footer").getBoundingClientRect().height;
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
      ...toRefs(data),
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
            font-weight: 700;
            color: #000;
            line-height: 30px;
          }

          ul {
            // height: 110px;
            // flex-direction: column !important;
            padding-left: 0;

            li {
              font-style: normal;
              font-size: 18px;
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
          font-size: 18px;
          color: var(--el-text-color-primary);
          line-height: 20px;
          margin-bottom: 5px;
        }

        .image {
          margin-bottom: 10px;

          img {
            margin-right: 5px;
            &:last-child{
              margin-right: 0;
            }
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
            color: #fff;
            display: inline-block;
            a {
              text-decoration: none !important;
              color: #fff;
            }
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

  .bottom-right-part {
    text-align: right;

    ul {
      display: block;
      text-align: right;
    }
  }
}

@media (min-width: 1200px) {
  .top-part-wrap {
    width: 992px;
  }

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
          li {
          }
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
            padding: 0 10px!important;
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
          font-size: 18px;
        }

        ul {
          li {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
