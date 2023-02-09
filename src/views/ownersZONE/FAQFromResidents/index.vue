<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:05:00
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
        {{ fairview_park_lang === "en_us" ? "FAQ from" : "居民常見"
        }}{{ fairview_park_lang === "en_us" ? " Residents" : "問題" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row menu-ul">
            <li
              v-for="(item, index) in FAQ_from_residents_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="
                () => {
                  v_loading = true;
                  nav_index = index;
                  findFaqFromResidentsList(item.id);
                }
              "
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            v-if="FAQ_from_residents_list.length>0"
            size="large"
            v-model="nav_index"
            class="menu-select"
            :placeholder="$t('Select')"
            @change="changeMenu"
            :teleported="false"
          >
            <el-option
              v-for="(item, index) in FAQ_from_residents_list"
              :key="index"
              :label="item.titleEnUs"
              :value="item.index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20">
          <div class="nav-content-main">
            <div>
              <h5 v-if="FAQ_from_residents_list.length !== 0">
                {{ FAQ_from_residents_list[nav_index].titleEnUs }}
              </h5>
              <el-collapse accordion v-model="activeNames" @change="handleChange">
                <el-collapse-item
                  v-for="(item, index) in FAQ_from_residents_sub_list"
                  :key="index"
                  :title="index + 1 + '. ' + item.titleEnUs"
                  :name="index + 1"
                >
                  <template #title>
                    <span class="title">{{ index + 1 }}.</span>
                    <span class="item">{{ item.titleEnUs }}</span>
                  </template>
                  <div>
                    <p
                      style="
                        font-size: 14px;
                        color: #6e6b7b;
                        padding: 5px 27px;
                        font-family: Helvetica, Arial, sans-serif;
                      "
                      v-html="
                        FAQ_from_residents_sub_content.length !== 0 &&
                        FAQ_from_residents_sub_content[index].htmlEnUs
                      "
                    ></p>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
     <!-- loading -->
     <div
      class="loading"
      v-loading="v_loading"
      style="
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10000;
      "
      :style="{'display':v_loading?'':'none'}"
    ></div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  getCurrentInstance,
  toRefs,
  onMounted,
  onUnmounted,
  nextTick,
} from "vue";
export default {
  data() {
    return {
      banner: new URL(
        "../../../assets/image/common-banner/owner-zone.jpg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      v_loading:false,
      nav_index: 0,
      FAQ_from_residents_list: [],
      FAQ_from_residents_sub_list: [],
      FAQ_from_residents_sub_content: [],
      collapse_index: 1,
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findFaqFromResidentsList = async (id) => {
      try {
        const res = await proxy.$http.findFaqFromResidentsList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          data.v_loading = false;
          if (id) {
            data.FAQ_from_residents_sub_list = res.data.data.records;
            data.FAQ_from_residents_sub_content = [];
            data.FAQ_from_residents_sub_list.map((item,index) => {
              findOneFaqFromResidents(id, item.id,index);
            });
            nextTick(() => {
              getHeight();
            });
          } else {
            data.v_loading = false;
            res.data.data.records.map((item, index) => {
              item.index = index;
            });
            data.FAQ_from_residents_list = res.data.data.records;
          }
        }
      } catch (error) {
        data.v_loading = false;
        console.log(error);
      }
    };
    //查看一條數據
    const findOneFaqFromResidents = async (parentId, id,index) => {
      try {
        const res = await proxy.$http.findOneFaqFromResidents({
          lang: data.fairview_park_lang,
          parentId: parentId,
          id: id,
        });
        if (res.data.status === 200) {
          data.v_loading = false;
          data.FAQ_from_residents_sub_content[index] = res.data.data
        }
      } catch (error) {
        data.v_loading = false;
        console.log(error);
      }
    };
    //
    const changeMenu = async (val) => {
      data.v_loading = true
      data.nav_index = val;
      for (let i = 0; i < data.FAQ_from_residents_list.length; i++) {
        if (data.FAQ_from_residents_list[i].index === val) {
          await findFaqFromResidentsList(data.FAQ_from_residents_list[i].id);
        }
      }
    };
    const getHeight = () => {
      for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
        document.getElementsByClassName("title")[i].style.height =
          document.getElementsByClassName("item")[i].getBoundingClientRect().height +
          "px";
        document.getElementsByClassName("title")[i].style["line-height"] =
          document.getElementsByClassName("item")[i].getBoundingClientRect().height +
          "px";
      }
    };
    onMounted(async () => {
      data.v_loading = true;
      await findFaqFromResidentsList();
      await findFaqFromResidentsList(data.FAQ_from_residents_list[0].id);
      window.addEventListener("resize", getHeight);
      getHeight();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", getHeight);
    });
    return {
      ...toRefs(data),
      findFaqFromResidentsList,
      findOneFaqFromResidents,
      changeMenu,
      getHeight,
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
            font-size: 15px;
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
      font-size: 13px;
      padding: 2px 20px;
      .nav-content-main {
        h5 {
          font-size: 36px;
          color: #9cc212;
          font-weight: bold;

          margin-bottom: 10px;
        }
        ul {
          padding: 0;
          li {
            .sub-title {
              background-color: #e6f2ba;
              font-size: 15px;
              margin-bottom: 10px;
              span {
                width: 30px;
                height: 30px;
                display: inline-block;
                background-color: #549632;
                text-align: center;
                line-height: 30px;
                color: #fff;
                font-size: 15px;
                margin-right: 5px;
              }
            }
            .content {
              padding-left: 35px;
            }
          }
        }
        .el-collapse {
          border: none;
          .el-collapse-item {
            margin-bottom: 2px;
            .el-collapse-item__header {
              font-size: 18px;
              align-items: center;
              background-color: #fffae7;
              border: none;
              height: auto;
              padding: 0;
              &:hover {
                background-color: #fff3c4;
                span {
                  &:first-child {
                    background-color: #cee97b;
                  }
                }
              }
              span {
                color: #4a4a4a;
                font-weight: normal;
                &:first-child {
                  width: 50px;
                  background-color: #e7f3be;
                  text-align: center;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  line-height: 25px;
                }
                &:nth-child(2) {
                  padding: 7px 0 7px 10px;
                  flex: 1;
                  // background-color: #fffae7;
                  line-height: 25px;
                  box-sizing: border-box;
                }
              }
            }
            .is-active {
              background-color: #fff3c4;
              span {
                font-weight: bold;
                &:first-child {
                  background-color: #cee97b;
                }
              }
            }
            .el-collapse-item__wrap {
              border: none;
              .el-collapse-item__content {
                color: #4a4a4a;
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
@media (max-width: 992px) {
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
        h5{
          font-size: 28px!important;
        }
        .item{
          font-size: 15px!important;
        }
      }
    }
  }
}
</style>
