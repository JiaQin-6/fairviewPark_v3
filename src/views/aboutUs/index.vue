<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-07 01:09:33
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
        {{ fairview_park_lang === "en_us" ? "About" : "關於"
        }}{{ fairview_park_lang === "en_us" ? "&nbsp;us" : "我們" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-3 aside mb-20">
          <ul class="row menu-ul">
            <li
              v-for="(item, index) in [
                {
                  icon: 'icon-zhuye',
                  text: $t('Introduction'),
                },
                {
                  icon: 'icon-kehufuwukefu',
                  text: $t('Customer Service'),
                },
                {
                  icon: 'icon-zhongxinhuanjing',
                  text: $t('Environmental Service'),
                },
                {
                  icon: 'icon-baoan',
                  text: $t('Security'),
                },
                {
                  icon: 'icon-weixiu',
                  text: $t('Maintenance'),
                },
                {
                  icon: 'icon-tuandui',
                  text: $t('Administration'),
                },
                {
                  icon: 'icon-renliziyuan',
                  text: $t('Human Resources'),
                },
                {
                  icon: 'icon-tubiaozhizuomoban-48',
                  text: $t('Accounts'),
                },
                {
                  icon: 'icon-zixun',
                  text: $t('Information Technology'),
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
              <i class="iconfont" :class="item.icon"></i>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="m-2 menu-select"
            placeholder="Select"
          >
            <el-option
              v-for="(item, index) in [
                {
                  icon: 'icon-zhuye',
                  text: $t('Introduction'),
                  value: 0,
                },
                {
                  icon: 'icon-kehufuwukefu',
                  text: $t('Customer Service'),
                  value: 1,
                },
                {
                  icon: 'icon-zhongxinhuanjing',
                  text: $t('Environmental Service'),
                  value: 2,
                },
                {
                  icon: 'icon-baoan',
                  text: $t('Security'),
                  value: 3,
                },
                {
                  icon: 'icon-weixiu',
                  text: $t('Maintenance'),
                  value: 4,
                },
                {
                  icon: 'icon-tuandui',
                  text: $t('Administration'),
                  value: 5,
                },
                {
                  icon: 'icon-renliziyuan',
                  text: $t('Human Resources'),
                  value: 6,
                },
                {
                  icon: 'icon-tubiaozhizuomoban-48',
                  text: $t('Accounts'),
                  value: 7,
                },
                {
                  icon: 'icon-zixun',
                  text: $t('Information Technology'),
                  value: 8,
                },
              ]"
              :key="index"
              :label="item.text"
              :value="item.value"
            >
              <i class="iconfont" :class="item.icon" style="margin-right: 10px"></i>
              <span>{{ item.text }}</span>
            </el-option>
          </el-select>
        </div>
        <Introduction v-show="nav_index === 0"></Introduction>
        <CustomerService v-show="nav_index === 1"></CustomerService>
        <EnvironmentalService v-show="nav_index === 2"></EnvironmentalService>
        <Security v-show="nav_index === 3"></Security>
        <Maintenance v-show="nav_index === 4"></Maintenance>
        <Administration v-show="nav_index === 5"></Administration>
        <HumanResources v-show="nav_index === 6"></HumanResources>
        <Accounts v-show="nav_index === 7"></Accounts>
        <InformationTechnology v-show="nav_index === 8"></InformationTechnology>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import Introduction from "./components/introduction.vue";
import CustomerService from "./components/customerService.vue";
import EnvironmentalService from "./components/environmentalService.vue";
import Security from "./components/security.vue";
import Maintenance from "./components/maintenance.vue";
import Administration from "./components/administration.vue";
import HumanResources from "./components/humanResources.vue";
import Accounts from "./components/accounts.vue";
import InformationTechnology from "./components/informationTechnology.vue";
export default {
  components: {
    Introduction,
    CustomerService,
    EnvironmentalService,
    Security,
    Maintenance,
    Administration,
    HumanResources,
    Accounts,
    InformationTechnology,
  },
  data() {
    return {
      banner: new URL("../../assets/image/aboutUs/banner.jpg", import.meta.url).href,
      map: new URL("../../assets/image/home/snazzy-image.png", import.meta.url).href,
      structure: new URL(
        "../../assets/image/aboutUs/handbook_chart.jpeg",
        import.meta.url
      ).href,
      landmark: new URL("../../assets/image/aboutUs/placeholder.png", import.meta.url)
        .href,
      phone: new URL("../../assets/image/aboutUs/telephone.png", import.meta.url).href,
      email: new URL("../../assets/image/aboutUs/Group.png", import.meta.url).href,
      nav_index: 0,
    };
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
      nav_index: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 280px;

  .img {
    opacity: 0.5;
    width: 100%;
    height: 280px;
    background-size: cover;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-family: "Poppins-Bold", SourceHanSansCN-Regular, Arial;
    font-style: normal;
    font-weight: bold;
    width: 80%;
    text-align: center;
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
        position: sticky;
        top: 10px;
        overflow: auto;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        background-color: #fff;
        padding: 10px;
        display: block;
        li {
          text-align: left;
          margin-bottom: 5px;
          padding: 6px 6px 6px 10px;
          box-sizing: border-box;
          cursor: pointer;
          i {
            font-size: 15px;
            margin-right: 5px;

            color: var(--mainColor2);
          }
          span {
            font-size: 15px;
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
      .menu-select {
        display: none;
      }
    }
    .nav-content {
      .about-us {
        margin-bottom: 20px;
        .container {
          // background-color: #e6eae5;

          .row {
            padding: 20px 0;
            .col {
              text-align: left;
              .jianjie {
                margin-bottom: 30px;
                p {
                  font-size: 15px;
                  font-weight: 700;
                  color: #3a6547;
                  margin-bottom: 40px;
                }
                ul {
                  padding: 0px 0 15px 35px;
                  li {
                    font-size: 15px;
                    list-style-type: disc;
                    font-weight: 700;
                    color: #3a6547;
                    margin-bottom: 30px;
                  }
                }
              }

              .img {
                position: relative;
                text-align: center;
                height: 470px;
                img {
                  width: 90%;
                  max-width: 440px;
                  max-height: 440px;
                  border-radius: 20px;
                  position: absolute;
                  right: 0;
                  top: 0;
                }
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
                img {
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
      opacity: 0.5;
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
            width: auto;
            span {
              margin: 0 auto;
            }
          }
        }
        .menu-select {
          display: block;
        }
      }
    }
  }
}
</style>
