<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:52:17
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
        {{ fairview_park_lang === "en_us" ? "Useful Telephone" : "常用電話及"
        }}{{ fairview_park_lang === "en_us" ? " Nos." : "連接" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row" id="useful-menu">
            <li
              v-for="(item, index) in telephone_link_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="jumpLink(index)"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            v-if="telephone_link_list.length > 0"
            size="large"
            v-model="nav_index"
            class="menu-select"
            :placeholder="$t('Select')"
            @change="
              (index) => {
                jumpLink(index);
              }
            "
            :teleported="false"
          >
            <el-option
              v-for="(item, index) in telephone_link_list"
              :key="index"
              :label="item.titleEnUs"
              :value="index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div id="nav-content" class="col-12 col-lg-10 nav-content mb-20">
          <!-- <div align="center"> -->
          <table
            :id="'telephone_link_' + (index + 1)"
            border="0"
            cellpadding="5"
            cellspacing="2"
            v-for="(item, index) in telephone_link_list"
            :key="index"
            width="100%"
          >
            <tbody>
              <tr>
                <td
                  colspan="2"
                  :style="
                    index === 0 ? 'padding:0 0 0px 0' : 'padding:10px 0 0 0'
                  "
                >
                  <span class="style9 title">{{
                    telephone_link_list[index] &&
                    telephone_link_list[index].titleEnUs
                  }}</span>
                </td>
              </tr>
              <tr v-for="(item2, index2) in item.secondList" :key="index2">
                <td style="width: 70%" height="25" bgcolor="#EAF7C1">
                  <span v-if="!item2.websiteUrl" class="style9 fs-18">{{
                    item2.titleEnUs
                  }}</span>
                  <a
                    v-if="item2.websiteUrl"
                    target="_blank"
                    :href="item2.websiteUrl"
                    class="style9 fs-18"
                    >{{ item2.titleEnUs }}</a
                  >
                </td>
                <td style="width: 30%" height="25" bgcolor="#FFFFCC">
                  <el-icon
                    color="#07522b"
                    class="no-inherit"
                    style="margin-right: 5px"
                  >
                    <Phone />
                  </el-icon>
                  <a
                    class="fs-18"
                    v-for="(item, index) in item2.tel.split(',')"
                    :key="index"
                    style="color: #000; text-decoration: none"
                    :href="'tel:' + item"
                    >{{ item
                    }}{{
                      index === item2.tel.split(",").length - 1 ? "" : ","
                    }}</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- </div> -->
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
      banner: new URL(
        "../../assets/image/common-banner/useful-link.jpg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      nav_index: 0,
      telephone_link_list: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 屋苑资料 列表
    const findUsefulTelephoneNosList2 = async (id) => {
      try {
        const res = await proxy.$http.findUsefulTelephoneNosList2({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          data.telephone_link_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findUsefulTelephoneNosList2();
      if (
        document.getElementById("useful-menu").getBoundingClientRect().height
      ) {
        document.getElementsByClassName("nav-content")[0].style.height =
          document.getElementById("useful-menu").getBoundingClientRect()
            .height > 500
            ? document.getElementById("useful-menu").getBoundingClientRect()
                .height + "px"
            : "500px";
      } else {
        document.getElementsByClassName("nav-content")[0].style.height =
          "500px";
      }
    });
    const jumpLink = (index) => {
      let top = 0;
      for (let i = 0; i < index; i++) {
        top += document.querySelector(
          "#telephone_link_" + (i + 1)
        ).scrollHeight;
      }
      document.querySelector("#nav-content").scrollTop = top;
      data.nav_index = index;
    };
    return {
      ...toRefs(data),
      findUsefulTelephoneNosList2,
      jumpLink,
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
          cursor: pointer;
          i {
            font-size: 18px;
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
      font-size: 13px;
      padding: 0 20px;
      overflow: auto;
      .title {
        color: #9cc212;
        font-size: 36px;
        font-weight: bold;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      img {
        max-width: 100%;
      }
      a {
        &:hover {
          color: var(--bs-link-color) !important;
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
        @{deep} .menu-select {
          display: block;
          --el-select-input-focus-border-color: #ccc;
          .select-trigger {
            .el-input {
              font-size: 18px;
              .el-input__wrapper {
              }
            }
            .is-focus {
              border-color: #ccc;
            }
          }
          .el-popper {
            position: absolute;
            top: 52px !important;
            left: 0 !important;
            .el-select-dropdown {
              .el-scrollbar {
                .el-select-dropdown__wrap {
                  .el-scrollbar__view {
                    .el-select-dropdown__item {
                      text-align: left;
                      span {
                        margin: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .nav-content {
        padding: 0;
        table {
          .title {
            font-size: 28px;
          }
          td {
            i {
            }
            a,
            span {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
