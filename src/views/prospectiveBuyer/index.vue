<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:10:40
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
        {{ fairview_park_lang === "en_us" ? "Prospective" : "新買家"
        }}{{ fairview_park_lang === "en_us" ? " buyer" : "須知" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row menu-ul">
            <li
              v-for="(item, index) in [
                {
                  icon: '',
                  text:
                    fairview_park_lang === 'en_us' ? 'Prospective buyer' : '買家須知',
                },
                {
                  icon: '',
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'One Stop Service for New Owners'
                      : '新業主的一站式服務',
                },
                {
                  icon: '',
                  text:
                    fairview_park_lang === 'en_us' ? 'House Type Enquiry' : '原型圖查詢',
                },
                {
                  icon: '',
                  text:
                    fairview_park_lang === 'en_us'
                      ? 'Master Colour Schedule'
                      : '外牆顏色系列',
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
              <!-- <i class="iconfont" :class="item.icon"></i> -->
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="menu-select"
            placeholder="Select"
          >
            <el-option
              v-for="(item, index) in [
                {
                  text:  fairview_park_lang === 'en_us' ? 'Prospective buyer' : '買家須知',
                  value: 0,
                },
                {
                  text:  fairview_park_lang === 'en_us'
                      ? 'One Stop Service for New Owners'
                      : '新業主的一站式服務',
                  value: 1,
                },
                {
                  text:  fairview_park_lang === 'en_us' ? 'House Type Enquiry' : '原型圖查詢',
                  value: 2,
                },
                {
                  text:  fairview_park_lang === 'en_us'
                      ? 'Master Colour Schedule'
                      : '外牆顏色系列',
                  value: 3,
                },
              ]"
              :key="index"
              :label="item.text"
              :value="item.value"
            >
              <span>{{ item.text }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content flex-row">
          <ProspecticeBuy v-show="nav_index === 0"></ProspecticeBuy>
          <BuyerServer v-show="nav_index === 1"></BuyerServer>
          <Decoration v-show="nav_index === 2"></Decoration>
          <WallColorSeries v-show="nav_index === 3"></WallColorSeries>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import ProspecticeBuy from "./components/prospecticeBuy.vue";
import BuyerServer from "./components/buyerServer.vue";
import Decoration from "./components/decoration.vue";
import WallColorSeries from "./components/wallColorSeries.vue";
export default {
  components: {
    ProspecticeBuy,
    BuyerServer,
    Decoration,
    WallColorSeries,
  },
  data() {
    return {
      banner: new URL("../../assets/image/common-banner/prospective-buyer.jpg", import.meta.url).href,
      map: new URL("../../assets/image/home/snazzy-image.png", import.meta.url).href,
      structure: new URL(
        "../../assets/image/aboutUs/handbook_chart.jpeg",
        import.meta.url
      ).href,
      landmark: new URL("../../assets/image/aboutUs/placeholder.png", import.meta.url)
        .href,
      phone: new URL("../../assets/image/aboutUs/telephone.png", import.meta.url).href,
      email: new URL("../../assets/image/aboutUs/Group.png", import.meta.url).href,
     
    };
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
      nav_index: 0,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
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
        top: 80px;
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
      padding: 0 20px;
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
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap-container {
    width: 1280px;
  }
}
@media (max-width: 991px) {
  .banner {
      height: 200px;
    img {
      width: auto;
    }
    p{
      font-size: 36px;
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
        @{deep} .menu-select {
          display: block;
          --el-select-input-focus-border-color:#ccc;
          .select-trigger{
            .el-input{
              font-size: 18px;
              .el-input__wrapper{
                
              }
            }
            .is-focus{
              border-color: #ccc;
            }
          }
        }
      }
      .nav-content{
        padding:0;
      }
    }
  }
}
</style>
