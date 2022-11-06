<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-03 00:40:33
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
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;Residents" : "問題" }}</b>
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
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
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
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
                    class="content"
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
            console.log(data.FAQ_from_residents_sub_content);
          } else {
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
    onMounted(async () => {
      await findFaqFromResidentsList();
      await findFaqFromResidentsList(data.FAQ_from_residents_list[0].id);
    });
    return {
      ...toRefs(data),
      findFaqFromResidentsList,
      findOneFaqFromResidents,
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
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    width: 80%;
    text-align: center;
    b {
      color: #2fa94e;
    }
  }
}
.nav-wrap {
  padding: 20px;
  .row {
    .aside {
      ul {
        // box-shadow: 0 0 3px 3px rgba(143, 143, 143, 0.3);
        // border-radius: 10px;
        position: sticky;
        top: 10px;
        // flex-wrap: nowrap;
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
        }
        .active {
          background-color: #5cb89e;
          i {
            color: #fff;
            display: inline-block;
          }
          span {
            color: #fff;
          }
        }
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      .nav-content-main{
        // box-shadow: 0 0 3px 3px rgba(143, 143, 143, 0.3);
        // border-radius: 10px;
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
      ul{
        flex-wrap: nowrap; padding: 0;
        li{
          display: flex;
          text-align: center;
          align-items: center;
          span{
            margin:0 auto;
          }
        }
      }
    }
  }
  }
}
</style>
