<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-22 23:02:25
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-9 nav-content">
    <!--  關於我們 -->
    <div class="about-us">
      <div class="container">
        <div class="row">
          <!--  -->
          <div class="col col-12 col-lg-6 col-sm-12">
            <div class="jianjie">
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
            </div>
          </div>
          <!--  -->
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
          <!--  -->
          <div class="col col-12 mb-20">
            <div class="contact-us">
              <h3 class="mb-30">{{ $t("About us") }}</h3>
              <ul>
                <li
                  v-for="(item, index) in fairview_park_lang === 'en_us'
                    ? [
                        'Address : Block G, Town Centre, Fairview Park, Yuen Long, N.T.',
                        'Office Hours	:	General Office Mondays to Saturdays From 09:00 a.m. to 6:00 p.m.(Closed on all Public Holidays)',
                        'Security Department Mondays to Sundays 24 Hours',
                        'Customer Service Department Mondays to Sundays From 08:00 a.m. to 8:00 p.m.',
                        'Fairview Park Property Management Limited consists of eight departments as follows:',
                      ]
                    : [
                        '地址	:	新界元朗錦綉花園市中心G座',
                        '辦公時間	:	管理處星期一至六 上午九時至六時 (公眾假期除外)',
                        '保安部星期一至日 24 小時',
                        '客戶服務部星期一至日上午八時至下午八時',
                        '錦綉花園物業管理有限公司設有以下八個部門：',
                      ]"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
              <div style="text-align: center">
                <img class="pc-img" :src="dep_structure_web" alt="" />
                <img class="mobile-img" :src="dep_structure_mobile" alt="" />
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col col-12">
            <div class="contant-mode">
              <ul class="row">
                <li class="col-12 col-lg-4 flex-row mb-20">
                  <div class="contant-mode-img mr-10">
                    <img :src="landmark" alt="" />
                  </div>

                  <div style="flex: 1">
                    <strong>{{
                      fairview_park_lang === "en_us" ? "Address" : "地址"
                    }}</strong>
                    <p>
                      {{
                        fairview_park_lang === "en_us"
                          ? "Block G, Town Centre, Fairview Park, Yuen Long, N.T."
                          : "新界元朗錦綉花園市中心G座"
                      }}
                    </p>
                  </div>
                </li>
                <li class="col-12 col-lg-4 flex-row mb-20">
                  <div class="contant-mode-img mr-10">
                    <img :src="phone" alt="" />
                  </div>
                  <div style="flex: 1">
                    <strong>{{
                      fairview_park_lang === "en_us" ? "Telephone" : "電話"
                    }}</strong>
                    <p>
                      {{
                        fairview_park_lang === "en_us"
                          ? "	Estate Management 2471 1301 (24 hours)/2471 8210 (Fax)"
                          : "管理公司: 2471 1301 (24小時) / 2471 8210 (傳真)"
                      }}
                    </p>
                    <p>
                      {{
                        fairview_park_lang === "en_us"
                          ? "Emergency Hotline 2471 1999 (24 hours)"
                          : "緊急熱線: 2471 1999 (24小時)"
                      }}
                    </p>
                    <p>
                      {{
                        fairview_park_lang === "en_us"
                          ? "(Conversations at these telephones may be recorded)"
                          : "(請注意，於上述電話號碼之對話可能會被錄音)"
                      }}
                    </p>
                  </div>
                </li>
                <li class="col-12 col-lg-4 flex-row mb-20">
                  <div class="contant-mode-img mr-10">
                    <img :src="email" alt="" />
                  </div>
                  <div style="flex: 1">
                    <strong>{{
                      fairview_park_lang === "en_us" ? "Email" : "電郵"
                    }}</strong>
                    <p>info@fairviewpark.hk</p>
                  </div>
                </li>
              </ul>
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
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.nav-content {
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
              font-size: 16px;
              font-weight: 700;
              color: var(--el-text-color-primary);
              margin-bottom: 20px;
            }
            ul {
              padding: 0px 0 5px 35px;
              li {
                font-size: 16px;
                list-style-type: disc;
                color: var(--el-text-color-primary);
                margin-bottom: 10px;
              }
            }
          }

          .img {
            position: relative;
            text-align: center;
            height: 470px;
          }
          .contact-us {
            h3 {
              border-bottom: 5px solid #f0be64;
              display: inline-block;
            }
            ul {
              margin-bottom: 40px;
              li {
                color: #3a6547;
                font-weight: 700;
                font-size: 15px;
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
                  border-radius: 10px;
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
@media (max-width: 992px) {
  .nav-content {
    .about-us {
      .container {
        .row .col .contact-us {
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
</style>
