<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:10:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 03:24:00
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 轮播图 -->
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-interval="3000"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            v-for="(item, index) in web_banner_list"
            :key="index"
            type="button"
            data-bs-target="#carouselExampleFade"
            :data-bs-slide-to="index"
            :class="{ active: carouselValue === index }"
            aria-current="true"
            :aria-label="'Slide' + (index + 1)"
          ></button>
        </div>
        <div style="height: 100%" class="carousel-inner">
          <!-- web_banner_list -->
          <div
            style="height: 100%"
            class="carousel-item"
            :class="{ active: carouselValue === index }"
            v-for="(item, index) in web_banner_list"
            :key="index"
          >
            <a
              style="position: absolute; height: 100%; width: 100%"
              :href="item.webUrlEnUs"
              target="_blank"
              :style="{ 'background-image': 'url(' + item.bannerEnUs + ')' }"
            >
            </a>
          </div>
        </div>
        <button
          id="carousel-control-prev"
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- 文字跑馬燈 -->
    <div class="marquee">
      <div class="marquee-container">
        <img :src="icon_news" class="icon-laba" alt="" />
        <el-carousel
          v-if="new_notice_list.length !== 0"
          indicator-position="none"
          height="45px"
          direction="vertical"
          :autoplay="true"
          class="pc"
        >
          <el-carousel-item
            style="display: flex; align-items: center"
            v-for="(item, index) in new_notice_list"
            :key="index"
          >
            <a
              v-show="item.websiteUrl"
              :href="item.websiteUrl"
              target="_blank"
              style="
                font-size: 18px;
                margin-right: 40px;
                color: #fff;
                text-decoration: underline;
              "
              class="line_clamp_2"
              >{{ item.contentEnUs }}
            </a>
            <span
              v-show="!item.websiteUrl"
              style="
                font-size: 18px;
                margin-right: 40px;
                color: #fff;
                text-decoration: none;
              "
              >{{ item.contentEnUs }}</span
            >
          </el-carousel-item>
        </el-carousel>
        <div
          id="scroll_div"
          class="mobile"
          style="
            height: 45px;
            line-height: 45px;
            overflow: hidden;
            overflow: hidden;
            white-space: nowrap;
            flex: 1;
            margin-left: 10px;
          "
        >
          <div id="scroll_front" style="display: inline-block"></div>
          <div id="scroll_begin" style="display: inline-block">
            <div
              style="display: inline"
              v-for="(item, index) in new_notice_list"
              :key="index"
            >
              <a
                v-if="item.websiteUrl"
                :href="item.websiteUrl"
                target="_blank"
                style="
                  text-decoration: underline;
                  font-family: 'Nunito';
                  font-size: 18px;
                  margin-right: 40px;
                  color: #fff;
                "
                >{{ item.contentEnUs }}
              </a>
              <span style="margin-right: 20px; color: #fff" v-if="!item.websiteUrl">{{
                item.contentEnUs
              }}</span>
            </div>
            <div style="display: inline-block; width: 500px"></div>
          </div>
          <div id="scroll_end" style="display: inline-block; width: 500px"></div>
        </div>
      </div>
    </div>
    <!-- 主要內容 -->
    <div class="container_wrap">
      <!-- 歡迎瀏覽錦綉花園 -->
      <div class="liulan">
        <h1 style="text-align: center; margin-bottom: 45px">
          {{ $t("home.Welcome_to") }} <a>{{ $t("home.fairview_park") }}</a>
        </h1>
        <div class="container">
          <div class="row flex-center">
            <div
              class="col col-12 col-md-4 col-lg-4 col-sm-12"
              v-for="(item, index) in [
                {
                  text: $t('home.Shops_Directory'),
                  img_url: shop_information,
                  route: '/shopping-information',
                },
                {
                  text: $t('home.Resident_information'),
                  img_url: resident_information,
                  route: '/prospective-buyer',
                },

                {
                  text: $t('home.Coach_Service'),
                  img_url: bus_time_table,
                  route: '/coach-service',
                },
              ]"
              :key="index"
            >
              <div class="bg h100">
                <img style="width: 100%" :src="item.img_url" alt="" />
                <button>
                  <router-link
                    style="
                      height: 100%;
                      width: 100%;
                      display: inline-block;
                      padding: 8px 0;
                    "
                    :to="{
                      path: item.route,
                      query: { lang: fairview_park_lang },
                    }"
                    >{{ item.text }}</router-link
                  >
                </button>
              </div>
            </div>
            <el-carousel indicator-position="outside">
              <el-carousel-item
                v-for="(item, index) in [
                  {
                    text: $t('home.Shops_Directory'),
                    img_url: shop_information,
                    route: '/shopping-information',
                  },
                  {
                    text: $t('home.Resident_information'),
                    img_url: resident_information,
                    route: '/prospective-buyer',
                  },

                  {
                    text: $t('home.Coach_Service'),
                    img_url: bus_time_table,
                    route: '/coach-service',
                  },
                ]"
                :key="index"
              >
                <div
                  class="bg h100"
                  :style="{ 'background-image': 'url(' + item.img_url + ')' }"
                >
                  <button>
                    <router-link
                      style="
                        height: 100%;
                        width: 100%;
                        display: inline-block;
                        padding: 8px 0;
                      "
                      :to="{
                        path: item.route,
                        query: { lang: fairview_park_lang },
                      }"
                      >{{ item.text }}</router-link
                    >
                  </button>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <!-- 關於我們 -->
      <div class="about-us">
        <h1>
          {{ fairview_park_lang === "en_us" ? "About" : "關於"
          }}<a href="#/about-us">{{ fairview_park_lang === "en_us" ? " us" : "我們" }}</a>
          <p></p>
        </h1>
        <div class="container">
          <div class="row">
            <div class="col col-12 col-lg-6 col-sm-12">
              <div class="jianjie">
                <p>
                  {{ $t("home.content_1") }}
                </p>
                <ul>
                  <li v-for="(item, index) in content_2" :key="index">
                    {{ item }}
                  </li>
                </ul>
                <router-link
                  :to="{
                    path: '/about-us',
                    query: {
                      lang: fairview_park_lang,
                    },
                  }"
                  style="text-decoration: none"
                >
                  <button class="fs-16">
                    {{ fairview_park_lang === "en_us" ? "More" : "了解更多" }}
                  </button>
                </router-link>
              </div>
            </div>
            <div class="col col-12 col-lg-6 col-sm-12">
              <div class="img">
                <iframe
                  v-if="fairview_park_lang === 'zh_tw'"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7091679275286!2d114.04272728986919!3d22.47756085206866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0d4ef5ea8af%3A0x5f9ed764a5a55703!2z6Yym57aJ6Iqx5ZyS!5e0!3m2!1szh-TW!2shk!4v1669042722648!5m2!1szh-TW!2shk"
                  width="100%"
                  height="450"
                  style="border-radius: 10px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <iframe
                  v-if="fairview_park_lang === 'en_us'"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.7590476129535!2d114.04501169813709!3d22.477493702608907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0d4ef5ea8af%3A0x5f9ed764a5a55703!2sFairview%20Park%20-%20Town%20Centre!5e0!3m2!1sen!2shk!4v1668099153161!5m2!1sen!2shk"
                  width="100%"
                  height="450"
                  style="border-radius: 10px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, nextTick } from "vue";
export default {
  data() {
    return {
      resident_information: new URL(
        "../../assets/image/home/pic_index01.jpg",
        import.meta.url
      ).href,
      shop_information: new URL(
        "../../assets/image/home/pic_index02.jpg",
        import.meta.url
      ).href,
      bus_time_table: new URL("../../assets/image/home/pic_index03.jpg", import.meta.url)
        .href,
      icon_news: new URL("../../assets/image/home/icon_news.png", import.meta.url).href,
      img1: new URL("../../assets/image/home/aboutus_banner_2e4X.jpg", import.meta.url)
        .href,
      img2: new URL(
        "../../assets/image/home/Podcast-Hour-Design-Idea_XPel.jpg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive({
      new_notice_list: [],
      web_banner_list: [],
      fairview_park_lang: "",
      carouselValue: 0,
      timer: null,
      content_2: [],
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content_2 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.home.content_2
        : window.i18n_zh_tw.home.content_2;
    //查看所有 最新消息
    const findNewNoticeList = async () => {
      try {
        const res = await proxy.$http.findNewNoticeList({
          lang: sessionStorage.getItem("fairview_park_lang"),
        });
        if (res.data.status === 200) {
          data.new_notice_list = res.data.data.records;
          nextTick(() => {
            //文字横向滚动
            let scroll_div = document.getElementById("scroll_div");
            let scroll_front = document.getElementById("scroll_front");
            let scroll_begin = document.getElementById("scroll_begin");
            let scroll_end = document.getElementById("scroll_end");
            scroll_front.style["width"] = scroll_div.getBoundingClientRect().width + "px";
            function Marquee() {
              if (
                scroll_end.offsetWidth +
                  scroll_div.getBoundingClientRect().width -
                  scroll_div.scrollLeft <=
                0
              ) {
                scroll_div.scrollLeft -= scroll_begin.offsetWidth;
              } else {
                scroll_div.scrollLeft++;
              }
            }
            data.timer = setInterval(Marquee, 50);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    //查看所有 banner 圖片
    const findWebsiteBannerList = async () => {
      try {
        const res = await proxy.$http.findWebsiteBannerList({
          lang: sessionStorage.getItem("fairview_park_lang"),
        });
        if (res.data.status === 200) {
          data.web_banner_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    findWebsiteBannerList();
    onMounted(async () => {
      await findNewNoticeList();
      setTimeout(() => {
        document.getElementById("carousel-control-prev").click();
      }, 3000);
      //
      var observer = new IntersectionObserver(function (changes) {
        changes.forEach(function (change) {
          var container = change.target;
          // 相交率，默认是相对于浏览器视窗
          if (change.intersectionRatio > 0) {
            setTimeout(() => {
              container.className += " show animate__animated animate__fadeIn";
            }, 500);
            observer.unobserve(container);
          }
        });
      });
      observer.observe(document.getElementsByClassName("liulan")[0]);
      var observer = new IntersectionObserver(function (changes) {
        changes.forEach(function (change) {
          var container = change.target;
          // 相交率，默认是相对于浏览器视窗
          if (change.intersectionRatio > 0) {
            setTimeout(() => {
              container.className += " show animate__animated animate__fadeIn";
            }, 500);
            observer.unobserve(container);
          }
        });
      });
      observer.observe(document.getElementsByClassName("about-us")[0]);
    });
    return {
      ...toRefs(data),
      findWebsiteBannerList,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";

.carousel {
  height: 450px;

  .carousel-indicators {
    display: none;

    button {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid transparent;
    }

    .active {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: var(--mainColor2);
      border: 2px solid #fff;
    }
  }

  .carousel-inner {
    .carousel-item {
      a {
        background-size: cover;
      }
    }
  }

  #carousel-control-prev {
    .carousel-control-prev-icon {
      height: 60px;
      width: 60px;
    }
  }

  .carousel-control-next {
    .carousel-control-next-icon {
      height: 60px;
      width: 60px;
    }
  }
}

.marquee {
  background: var(--mainColor2);
  box-sizing: border-box;
  height: 45px;

  .marquee-container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;

    .icon-laba {
      display: inline-block;
      width: 24px;
      color: #fff;
      margin-right: 15px;
    }

    .el-carousel {
      display: inline-block;
      width: 100%;

      .el-carousel__container {
        .el-carousel__item {
        }
      }
    }

    @{deep} .mobile {
      display: block;
    }

    @{deep} .pc {
      display: none;
    }
  }
}

.container_wrap {
  margin: 0 auto;

  .liulan {
    opacity: 0;

    h1 {
      margin-top: 60px;
      font-size: 32px;
      font-weight: 800;
      font-family: "微软雅黑";

      a {
        color: var(--mainColor1);
        font-family: "微软雅黑";
      }
    }

    .container {
      .row {
        .col {
          position: relative;
          padding: 0 16px;
          box-sizing: border-box;
          margin-bottom: 50px;
          border-radius: 30px;

          &:hover {
            transition: all 0.2s ease-in-out;
            transform: translateY(-10px);
          }

          .bg {
            background-size: cover;
            border-radius: 20px;
            overflow: hidden;

            &:hover {
              box-shadow: 0 0 8px 3px rgba(10, 10, 10, 0.2);
            }

            button {
              position: absolute;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              width: 80%;
              background: rgba(143, 188, 37, 0.9);
              border-radius: 20px;
              border: 0;
              color: #fff;

              &:hover {
                background: var(--mainColor1);
              }

              a {
                color: #fff;
                text-decoration: none;
                font-size: 18px;
              }
            }
          }
        }

        @{deep} .el-carousel {
          display: none;

          .el-carousel__container {
            .el-carousel__item {
              .bg {
                background-size: cover;
                border-radius: 20px;
                overflow: hidden;
                background-size: cover;

                button {
                  position: absolute;
                  bottom: 20px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 80%;
                  background: rgba(143, 188, 37, 0.9);
                  border-radius: 20px;
                  border: 0;
                  color: #fff;

                  &:hover {
                    background: var(--mainColor1);
                  }

                  a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 18px;
                  }
                }
              }
            }
          }

          .el-carousel__indicators {
            .el-carousel__indicator {
              .el-carousel__button {
                width: 10px;
                height: 10px;
                border-radius: 50%;
              }
            }

            .is-active {
              .el-carousel__button {
                background-color: var(--mainColor1);
              }
            }
          }
        }
      }
    }
  }

  .about-us {
    padding-bottom: 20px;
    opacity: 0;

    h1 {
      margin: 30px auto 30px;
      font-size: 32px;
      text-align: center;
      font-weight: 800;

      a {
        color: var(--mainColor3);
        text-decoration: none;
      }

      p {
        width: 100px;
        margin: 5px auto 0;
        border-bottom: 4px solid var(--mainColor2);
      }
    }

    .container {
      .row {
        .col {
          text-align: left;

          .jianjie {
            margin-bottom: 30px;

            .title {
              color: red;
            }

            h2 {
              margin: 26px 0 20px 0;

              a {
                color: #82be00;
              }
            }

            p {
              font-size: 18px;
              font-weight: 700;
              color: var(--el-text-color-primary);
              margin-bottom: 20px;
            }

            ul {
              padding: 0px 0 5px 35px;

              li {
                font-size: 18px;
                list-style-type: disc;
                color: var(--el-text-color-primary);
                margin-bottom: 10px;
              }
            }

            button {
              background: var(--mainColor2);
              padding: 7px 35px;
              border-radius: 25px;
              border: 2px solid var(--mainColor2);
              color: #fff;

              a {
                color: var(--mainColor2);
              }

              &:hover {
                background: #fff;
                color: var(--mainColor2);

                a {
                  color: var(--mainColor2);
                }
              }
            }
          }

          .img {
            position: relative;
            text-align: center;
            height: 470px;
          }
        }
      }
    }
  }

  .show {
    opacity: 1;
  }
}

@media (min-width: 576px) {
  .container_wrap,
  .marquee-container {
    width: 540px;
  }

  @{deep} .mobile {
    display: block !important;
  }

  @{deep} .pc {
    display: none !important;
  }
}

@media (min-width: 768px) {
  .container_wrap,
  .marquee-container {
    width: 720px;
  }

  @{deep} .mobile {
    display: block !important;
  }

  @{deep} .pc {
    display: none !important;
  }
}

@media (min-width: 992px) {
  .container_wrap,
  .marquee-container {
    width: 960px;
  }

  @{deep} .mobile {
    display: none !important;
  }

  @{deep} .pc {
    display: block !important;
  }
}

@media (min-width: 1200px) {
  .container_wrap,
  .marquee-container {
    width: 1100px;
  }

  @{deep} .mobile {
    display: none !important;
  }

  @{deep} .pc {
    display: block !important;
  }
}

@media (min-width: 1400px) {
  .container_wrap,
  .marquee-container {
    width: 1280px;
  }

  @{deep} .mobile {
    display: none !important;
  }

  @{deep} .pc {
    display: block !important;
  }
}

@media (max-width: 991px) {
  .carousel {
    height: calc(100vw / 2);
  }

  .marquee {
    a,
    span {
      font-size: 15px !important;
    }
  }

  #scroll_div {
    #scroll_begin {
      height: 45px;
      line-height: 45px;
    }
  }

  .container_wrap {
    .liulan {
      opacity: 0;

      h1 {
        font-size: 25px;
        margin: 20px 0 20px 0;
        margin-bottom: 20px !important;
      }
    }

    .about-us {
      opacity: 0;

      h1 {
        font-size: 25px;
      }

      .container {
        .row {
          .col {
            .jianjie {
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
    }

    .show {
      opacity: 1;
    }
  }
}

@media (max-width: 768px) {
  .container_wrap {
    .liulan {
      opacity: 0;

      .container {
        .row {
          .col {
            display: none;
          }

          .el-carousel {
            display: block;
          }
        }
      }
    }
  }
}
</style>
