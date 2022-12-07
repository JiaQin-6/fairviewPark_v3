<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-07 01:21:45
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
        {{ fairview_park_lang === "en_us" ? "Shopping" : "商場"
        }}{{ fairview_park_lang === "en_us" ? "&nbsp;information" : "資訊" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-3 aside mb-20">
          <ul class="row" id="shopping-information-menu">
            <li
              v-for="(item, index) in shop_information_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="jumpLink(item.orderNo, index)"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="menu-select"
            placeholder="Select"
          >
            <el-option
              v-for="(item, index) in shop_information_list"
              :key="index"
              :label="item.titleEnUs"
              :value="item.index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-9 nav-content mb-20">
          <div
            class="nav-content-list"
            :id="
              'shop_information_' +
              (shop_information_list[index] && shop_information_list[index].orderNo)
            "
            v-for="(item, index) in shop_information_list"
            :key="index"
          >
            <div class="header">
              <span>{{ item && item.titleEnUs }}</span>
              <img src="" alt="" />
            </div>
            <ul>
              <li
                class="flex-row"
                v-for="(item2, index2) in shop_information_list[index].children"
                :key="index2"
              >
                <div class="img col-4">
                  <img @click="openUrl(item2.websiteUrl)" :src="item2.logUrl" alt="" />
                  <p>{{ item2.titleEnUs }}</p>
                </div>
                <span class="col-5">{{ item2.shopNo }}</span>
                <span class="col-3" v-if="item2.tel">
                  <a
                    class="fs-15"
                    v-for="(item3, index3) in item2.tel.indexOf(',') !== -1
                      ? item2.tel.split(',')
                      : [item2.tel]"
                    :key="index3"
                    style="color: #000; text-decoration: none"
                    :href="'tel:' + item3"
                    >{{ item3 }}</a
                  ></span
                >
              </li>
            </ul>
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
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      nav_index: 0,
      shop_information_list: [],
      shop_information_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 屋邨资料 列表
    const findShopsDirectoryList = async (id, index) => {
      try {
        const res = await proxy.$http.findShopsDirectoryList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          console.log(res.data.data.records);
          if (id) {
            data.shop_information_list[index].children = res.data.data.records;
          } else {
            data.shop_information_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findShopsDirectoryList();
      data.shop_information_list.map((item, index) => {
        findShopsDirectoryList(item.id, index);
      });
      if (
        document.getElementById("shopping-information-menu").getBoundingClientRect()
          .height
      ) {
        document.getElementsByClassName("nav-content")[0].style.height =
          document.getElementById("shopping-information-menu").getBoundingClientRect()
            .height>500?document.getElementById("shopping-information-menu").getBoundingClientRect()
            .height + "px":'500px';
      }
    });
    const jumpLink = (orderNo, index) => {
      document.querySelector("#shop_information_" + orderNo).scrollIntoView(true);
      data.nav_index = index;
    };
    const openUrl = (url) => {
      if (url) {
        const a = document.createElement("a");
        (a.href = url), (a.target = "_blank");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };
    return {
      ...toRefs(data),
      findShopsDirectoryList,
      jumpLink,
      openUrl,
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
        li {
          text-align: left;
          margin-bottom: 5px;
          padding: 6px 0px 6px 10px;
          box-sizing: border-box;
          background-color: rgb(235, 233, 233);
          cursor: pointer;
          i {
            font-size: 15px;
            margin-right: 5px;
            display: none;
            color: #000;
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
    @{deep} .nav-content {
      background-color: #fff;
      padding: 12px 0px;
      overflow: auto;
      &::-webkit-scrollbar {
                display: none;
              }
      .nav-content-list {
        .header {
          background-color: #275535;
          padding: 5px 20px;
          border-radius: 15px 15px 0 0;
          span {
            color: #fff;
          }
          img {
          }
        }
        ul {
          justify-content: space-between;
          padding: 0;
          box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.05);
          li {
            padding: 10px 20px;
            align-items: center;
            span {
              text-align: center;
              a {
                &:hover {
                  color: #0d6efd !important;
                }
              }
            }
            .img {
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                min-width: 50px;
                max-width: 100px;
                margin-bottom: 5px;
              }
              p {
              }
            }

            &:nth-child(2n) {
              background-color: #5cb89e;
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
