<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:10:14
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-10-07 20:46:00
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 轮播图 -->
    <div>
      <div
        id="carouselExampleFade"
        style="text-shadow: 0px 0px 2px #000"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="index === 0 && 'active'"
            v-for="(item, index) in web_banner_list"
            :key="index"
          >
            <a :href="item.webUrlEnUs" target="_blank">
              <img
                :src="item.bannerEnUs"
                class="d-block w-100"
                :alt="item.remark"
              />
            </a>
          </div>
        </div>
        <button
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
      <i class="iconfont icon-laba"></i>
      <marquee>
        <span v-for="(item, index) in new_notice_list" :key="index">
          <a
            v-show="item.websiteUrl"
            :href="item.websiteUrl"
            target="_blank"
            style="font-family: 'Nunito'; font-size: 16px; margin-right: 40px"
            :style="{ color: item.bgColor }"
            >{{ item.contentEnUs }}
          </a>
          <span
            v-show="!item.websiteUrl"
            style="font-family: 'Nunito'; font-size: 16px; margin-right: 40px"
            :style="{ color: item.bgColor }"
            >{{ item.contentEnUs }}</span
          >
        </span>
      </marquee>
    </div>
    <!-- 歡迎瀏覽錦綉花園 -->
    <div class="liulan">
      <h1 style="text-align: center; margin-bottom: 45px">
        {{ $t("Welcome to browse") }} <a>{{ $t("fairview part") }}</a>
      </h1>
      <div class="container">
        <div class="row flex-center">
          <div
            class="col col-12 col-lg-4 col-sm-12"
            v-for="(item, index) in [
              {
                text: $t('Resident information'),
                img_url: resident_information,
                route: '/',
              },
              {
                text: $t('Shops Directory'),
                img_url: shop_information,
                route: '/shopping-information',
              },
              {
                text: $t('Coach Service'),
                img_url: bus_time_table,
                route: '/',
              },
            ]"
            :key="index"
          >
            <div
              class="bg h100"
              :style="{ 'background-image': 'url(' + item.img_url + ')' }"
            >
              <button>
                <router-link :to="item.route">{{ item.text }}</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 關於我們 -->
    <div class="about-us">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 col-sm-12">
            <div class="jianjie">
              <h2>
                {{ fairview_park_lang === "en_us" ? "About" : "關於" }}
                <a href="#/about-us">{{
                  fairview_park_lang === "en_us" ? "us" : "我們"
                }}</a>
              </h2>
              <p>
                {{
                  fairview_park_lang === "en_us"
                    ? "Welcome to the website of Fairview Park Property Management Limited. Residents can communicate with us by visiting our purpose-designed website. We hope to provide the following value-added services to our residents through this website:"
                    : "歡迎進入錦綉花園物業管理有限公司網站，業戶可透過由我們自行設計之網站與我們聯繫，我們希望為業戶提供以下增值服務："
                }}
              </p>
              <ul>
                <li>
                  {{
                    fairview_park_lang === "en_us"
                      ? "Residents can browse the most updated news, introduction, facilities and floor plans of various house types of Fairview Park;"
                      : "業戶可以瀏覽屋邨最新資訊、屋邨簡介、屋邨設施以及各屋型的結構平面圖；"
                  }}
                </li>
                <li>
                  {{
                    fairview_park_lang === "en_us"
                      ? "Prospective buyers can obtain information about Fairview Park and answers of frequently asked questions;"
                      : "新買家可從網站得到有關錦綉花園的訊息和常遇之問題和答案；"
                  }}
                </li>
                <li>
                  {{
                    fairview_park_lang === "en_us"
                      ? "Residents can download various application forms from the website in order to save time;"
                      : "業戶可自行下載各類所需表格，節省業戶的寶貴時間；"
                  }}
                </li>
                <li>
                  {{
                    fairview_park_lang === "en_us"
                      ? "Residents can peruse the list of members and rules and regulations of Fairview Park Management Advisory Committee (MAC) which was established in 2001;"
                      : "業戶可查閱自2001年成立的錦綉花園管理諮詢委員會的規章制度及本屆委員名單；"
                  }}
                </li>
                <li>
                  {{
                    fairview_park_lang === "en_us"
                      ? "Residents can link up with the frequently used websites of public sectors and governmental departments easily."
                      : "附載常用公共機構和政府部門的網址，業戶可輕易連結到相關網頁。"
                  }}
                </li>
              </ul>
              <p>
                {{
                  fairview_park_lang === "en_us"
                    ? "We will update the website from time to time and provide more updated information to our residents."
                    : "我們會不時更新網頁，將最新資訊帶給業戶。"
                }}
              </p>
              <button class="fs-16 white">
                <router-link
                  to="/about-us"
                  class="white"
                  style="text-decoration: none"
                  >{{
                    fairview_park_lang === "en_us" ? "More" : "了解更多"
                  }}</router-link
                >
              </button>
            </div>
          </div>
          <div class="col col-12 col-lg-6 col-sm-12">
            <div class="img">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3686.7084291899987!2d114.0443692!3d22.4775886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0d4ef5ea8af%3A0x5f9ed764a5a55703!2sFairview%20Park%20-%20Town%20Centre!5e0!3m2!1sen!2shk!4v1663690634070!5m2!1sen!2shk"
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
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      app_store: new URL(
        "../../assets/image/home/Rectangle 22.png",
        import.meta.url
      ).href,
      google_play: new URL(
        "../../assets/image/home/snazzy-image.png",
        import.meta.url
      ).href,
      resident_information: new URL(
        "../../assets/image/home/resident information.png",
        import.meta.url
      ).href,
      shop_information: new URL(
        "../../assets/image/home/shop information.png",
        import.meta.url
      ).href,
      bus_time_table: new URL(
        "../../assets/image/home/bus time table.png",
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
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 最新消息
    const findNewNoticeList = async () => {
      try {
        const res = await proxy.$http.findNewNoticeList({
          lang: sessionStorage.getItem("fairview_park_lang"),
        });
        if (res.data.status === 200) {
          data.new_notice_list = res.data.data.records;
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
    onMounted(() => {
      findNewNoticeList();
      findWebsiteBannerList();
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.carousel {
  .carousel-inner {
    .carousel-item {
      max-height: 570px;
      overflow: hidden;
    }
  }
}
.marquee {
  background: rgba(252, 220, 0, 0.301961);
  padding: 0 0 0 70px;
  box-sizing: border-box;
  height: 54px;
  position: relative;
  .icon-laba {
    position: absolute;
    left: 30px;
    top: 12px;
    font-size: 24px;
    color: #ff6060;
  }
  marquee {
    line-height: 54px;
  }
}
.liulan {
  padding-top: 45px;
  h1 {
    margin-top: 60px;
    font-size: 32px;
    a {
      color: #2fa94e;
    }
  }
  .container {
    .row {
      .col {
        width: 350px;
        height: 350px;
        position: relative;
        padding: 0;
        margin: 0 21px;
        box-sizing: border-box;
        margin-bottom: 50px;
        // max-width: 350px;
        .bg {
          background-size: cover;
          border-radius: 30px;
          button {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            background: rgba(143, 188, 37, 0.9);
            border-radius: 20px;
            height: 70px;
            line-height: 70px;
            border: 0;
            font-size: 24px;
            color: #fff;
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
.about-us {
  padding-bottom: 20px;
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
            margin: 26px 0 30px 0;
            a {
              color: #82be00;
            }
          }
          p {
            font-size: 16px;
            font-family: "Quicksand";
            font-weight: 700;
            color: #70798b;
            margin-bottom: 40px;
          }
          ul {
            padding: 0px 0 15px 35px;
            li {
              font-size: 16px;
              list-style-type: disc;
              font-family: "Quicksand";
              font-weight: 700;
              color: #70798b;
              margin-bottom: 30px;
            }
          }
          button {
            background: #f0be64;
            padding: 7px 35px;
            border-radius: 25px;
            border: 0;
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
</style>