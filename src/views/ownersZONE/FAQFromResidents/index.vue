<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-27 15:35:38
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "FAQ from" : "居民常見"
        }}{{ fairview_park_lang === "en_us" ? "&nbsp;Residents" : "問題" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-3 aside mb-20">
          <ul class="row menu-ul">
            <li
              v-for="(item, index) in FAQ_from_residents_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="
                () => {
                  nav_index = index;
                  findFaqFromResidentsList(item.id);
                }
              "
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="m-2 menu-select"
            placeholder="Select"
            @change="changeMenu"
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
        <div class="col-12 col-lg-9 nav-content mb-20 ql-container ql-snow">
          <div class="nav-content-main">
            <div>
              <h5>
                {{
                  FAQ_from_residents_list.length !== 0 &&
                  FAQ_from_residents_list[nav_index].titleEnUs
                }}
              </h5>
              <ul>
                <li v-for="(item, index) in FAQ_from_residents_sub_list" :key="index">
                  <div class="sub-title">
                    <span>{{ index + 1 }}.</span>{{ item.titleEnUs }}
                  </div>
                  <div
                    class="content ql-editor"
                    v-html="
                      FAQ_from_residents_sub_content.length !== 0 &&
                      FAQ_from_residents_sub_content[index].htmlEnUs
                    "
                  ></div>
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
      banner: new URL("../../../assets/image/aboutUs/banner.png", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
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
          if (id) {
            data.FAQ_from_residents_sub_list = res.data.data.records;
            data.FAQ_from_residents_sub_content = [];
            data.FAQ_from_residents_sub_list.map((item) => {
              findOneFaqFromResidents(id, item.id);
            });
          } else {
            res.data.data.records.map((item, index) => {
              item.index = index;
            });
            data.FAQ_from_residents_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    //查看一條數據
    const findOneFaqFromResidents = async (parentId, id) => {
      try {
        const res = await proxy.$http.findOneFaqFromResidents({
          lang: data.fairview_park_lang,
          parentId: parentId,
          id: id,
        });
        if (res.data.status === 200) {
          data.FAQ_from_residents_sub_content.push(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    //
    const changeMenu = async (val) =>{
      data.nav_index = val;
      for (let i = 0; i < data.FAQ_from_residents_list.length; i++) {
        if(data.FAQ_from_residents_list[i].index === val){
          findFaqFromResidentsList(data.FAQ_from_residents_list[i].id);
        }
      }
    };
    onMounted(async () => {
      await findFaqFromResidentsList();
      await findFaqFromResidentsList(data.FAQ_from_residents_list[0].id);
    });
    return {
      ...toRefs(data),
      findFaqFromResidentsList,
      findOneFaqFromResidents,
      changeMenu,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.banner {
  position: relative;
  overflow: hidden;
  img {
    opacity: 0.5;
    width: 100%;
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
    font-family: 'Poppins-Bold', SourceHanSansCN-Regular, Arial;
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
      font-size: 13px;
      .nav-content-main {
        padding: 12px 15px;
        h5 {
          background-color: #549632;
          color: #fff;
          padding: 5px 10px;
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
