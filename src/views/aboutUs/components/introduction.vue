<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-09 18:40:22
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <!--  關於我們 -->
    <div class="about-us">
      <p style="font-size: 36px; color: #9cc212; font-weight: bold">
        {{ $t("aboutUs_Introduction.Introduction") }}
      </p>
      <div class="container">
        <div class="row" style="margin: 0">
          <!--  -->
          <div class="col col-12" style="padding: 0">
            <div class="jianjie">
              <p>
                {{ $t("aboutUs_Introduction.content_1") }}
              </p>
              <ul>
                <li v-for="(item, index) in content_2" :key="index">
                  {{ item }}
                </li>
              </ul>
              <p>
                {{ $t("aboutUs_Introduction.content_3") }}
              </p>
            </div>
          </div>
          <!--  -->
          <div class="col col-12 mb-20" style="padding: 0">
            <div class="contact-us">
              <div class="row contact-us-content" style="margin: 0">
                <div
                  class="col-12 col-xxl-7"
                  style="padding: 15px 10px 0; box-sizing: border-box"
                >
                  <h3 class="mb-20">
                    {{ $t("aboutUs_Introduction.Contact_Us") }}
                  </h3>
                  <div>
                    <ul>
                      <li
                        class="flex-row"
                        v-for="(item, index) in content_4"
                        :key="index"
                      >
                        <span
                          style="display: inline-block; width: 110px; flex: 0 0 auto"
                          :style="{
                            width: fairview_park_lang === 'en_us' ? '110px' : '80px',
                          }"
                          v-html="item.title"
                        ></span>
                        <i style="margin-right: 5px; display: inline-block">:</i>
                        <span style="display: inline-block" v-html="item.content"></span>
                      </li>
                    </ul>
                    <ul>
                      <li
                        class="flex-row"
                        v-for="(item, index) in content_5"
                        :key="index"
                      >
                        <span
                          style="display: inline-block; width: 110px; flex: 0 0 auto"
                          :style="{
                            width: fairview_park_lang === 'en_us' ? '110px' : '80px',
                          }"
                          v-html="item.title"
                        ></span>
                        <i style="margin-right: 5px; display: inline-block">:</i>
                        <span style="display: inline-block" v-html="item.content"></span>
                      </li>
                    </ul>
                    <ul class="flex-row" style="margin-bottom: 0">
                      <li style="margin-bottom: 0">
                        <span
                          style="width: 110px; display: inline-block"
                          :style="{
                            width: fairview_park_lang === 'en_us' ? '110px' : '80px',
                          }"
                          >{{ $t("aboutUs_Introduction.Office_Hours") }}</span
                        >
                      </li>
                      <li
                        style="margin-right: 5px; margin-bottom: 0; display: inline-block"
                      >
                        :
                      </li>
                      <li style="margin-right: 20px; margin-bottom: 0">
                        <div
                          class="flex-row"
                          v-for="(item, index) in content_6"
                          :key="index"
                        >
                          <p style="min-width: 100px">{{ item.title }}</p>
                          <p>{{ item.content }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-12 col-xxl-5" style="padding: 0">
                  <div class="img">
                    <iframe
                      v-if="fairview_park_lang === 'zh_tw'"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7091679275286!2d114.04272728986919!3d22.47756085206866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0d4ef5ea8af%3A0x5f9ed764a5a55703!2z6Yym57aJ6Iqx5ZyS!5e0!3m2!1szh-TW!2shk!4v1669042722648!5m2!1szh-TW!2shk"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <iframe
                      v-if="fairview_park_lang === 'en_us'"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.7590476129535!2d114.04501169813709!3d22.477493702608907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0d4ef5ea8af%3A0x5f9ed764a5a55703!2sFairview%20Park%20-%20Town%20Centre!5e0!3m2!1sen!2shk!4v1668099153161!5m2!1sen!2shk"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div style="text-align: center; margin-top: 20px">
                <p style="text-align: left">
                  {{ $t("aboutUs_Introduction.content_7") }}
                </p>
                <img class="pc-img" :src="dep_structure_web" alt="" />
                <img class="mobile-img" :src="dep_structure_mobile" alt="" />
              </div>
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
      dep_structure_mobile: new URL(
        "../../../assets/image/aboutUs/dep_structure_mobile.jpg",
        import.meta.url
      ).href,
      dep_structure_web: new URL(
        "../../../assets/image/aboutUs/dep_structure_web.jpg",
        import.meta.url
      ).href,
      landmark: new URL("../../../assets/image/aboutUs/placeholder.png", import.meta.url)
        .href,
      phone: new URL("../../../assets/image/aboutUs/telephone.png", import.meta.url).href,
      email: new URL("../../../assets/image/aboutUs/Group.png", import.meta.url).href,
    };
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
      content_2: [],
      content_4: [],
      content_5: [],
      content_6: [],
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content_2 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.aboutUs_Introduction.content_2
        : window.i18n_zh_tw.aboutUs_Introduction.content_2;
    data.content_4 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.aboutUs_Introduction.content_4
        : window.i18n_zh_tw.aboutUs_Introduction.content_4;
    data.content_5 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.aboutUs_Introduction.content_5
        : window.i18n_zh_tw.aboutUs_Introduction.content_5;
    data.content_6 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.aboutUs_Introduction.content_6
        : window.i18n_zh_tw.aboutUs_Introduction.content_6;
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.nav-content {
  padding-left: 20px;
  .about-us {
    margin-bottom: 20px;
    .container {
      padding: 10px 0;
      .row {
        padding: 0;
        .col {
          text-align: left;
          .jianjie {
            margin-bottom: 30px;
            p {
              font-size: 18px;
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
          }

          .img {
            position: relative;
            text-align: center;
            height: 450px;
          }
          .contact-us {
            .contact-us-content {
              background-color: #faf6f2;
              border-radius: 10px;
            }
            h3 {
              display: inline-block;
              font-size: 24px;
            }
            ul {
              margin-bottom: 25px;
              padding: 0;
              li {
                line-height: 20px;
                margin-bottom: 10px;
              }
            }
            .mobile-img {
              display: none;
            }
            .pc-img {
              width: 100%;
              max-width: 688px;
            }
          }
          .contant-mode {
            ul {
              li {
                .contant-mode-img {
                  background-color: #fff;
                  width: 50px;
                  height: 50px;
                  text-align: center;
                  position: relative;
                  img {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  }
                }

                strong {
                  font-size: 18px;
                  line-height: 40px;
                }
                p {
                  font-size: 15px;
                  line-height: 20px;
                  color: #3a6547;
                  margin-bottom: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .nav-content {
    .about-us {
      > p {
        font-size: 28px !important;
      }

      .container {
        .row {
          .col {
            p {
              font-size: 15px !important;
            }
            ul {
              li {
                font-size: 15px !important;
              }
            }
            .contact-us {
              .mobile-img {
                width: 100%;
                max-width: 688px;
                display: block;
              }
              .pc-img {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
