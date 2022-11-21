<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-19 23:40:10
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Estate" : "屋邨通告"
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;Notice" : "須知" }}</b>
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-3 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in estate_notice_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="
                () => {
                  nav_index = index;
                  findEstateNoticeList(item.id);
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
              v-for="(item, index) in estate_notice_list"
              :key="index"
              :label="item.titleEnUs"
              :value="item.index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-9 nav-content mb-20 ql-container ql-snow">
          <div class="estate-notice-content">
            <div class="header flex-row mb-20">
              <span class="fs-16">{{
                fairview_park_lang === "en_us" ? "Sort：" : "排序："
              }}</span>
              <select class="form-select" aria-label="Default select example">
                <option selected>
                  {{
                    fairview_park_lang === "en_us"
                      ? "Time from new to old"
                      : "時間從新到舊"
                  }}
                </option>
              </select>
            </div>
            <ul>
              <li
                class="flex-row"
                v-for="(item, index) in estate_notice_content"
                :key="index"
              >
                <span class="fs-16">{{ item.titleEnUs }}</span>
                <div class="more">
                  <a :href="item.contentEnUs" target="_blank" class="fs-16">{{
                    fairview_park_lang === "en_us" ? "More" : "更多"
                  }}</a>
                </div>
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
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url)
        .href,
      nav_index: 0,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      estate_notice_list: [],
      estate_notice_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 屋邨资料 列表
    const findEstateNoticeList = async (id) => {
      try {
        const res = await proxy.$http.findEstateNoticeList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          if (id) {
            data.estate_notice_content = res.data.data.records;
          } else {
            res.data.data.records.map((item, index) => {
              item.index = index;
            });
            data.estate_notice_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
     //
     const changeMenu = async (val) =>{
      data.nav_index = val;
      for (let i = 0; i < data.estate_notice_list.length; i++) {
        if(data.estate_notice_list[i].index === val){
          findEstateNoticeList(data.estate_notice_list[i].id);
        }
      }
    };
    onMounted(async () => {
      await findEstateNoticeList();
      findEstateNoticeList(data.estate_notice_list[0].id);
    });
    return {
      ...toRefs(data),
      findEstateNoticeList,
      changeMenu
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
      color: var(--mainColor1);
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
      padding: 12px 0px;
      .estate-notice-content {
        .header {
          align-items: center;
          span {
          }
          select {
            width: 200px;
          }
        }
        ul {
          padding: 0;
          li {
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            padding: 10px 0;
            span {
            }
            .more {
              cursor: pointer;
              &:hover {
                color: #2fa94e;
              }
              a {
                text-decoration: none;
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
@media (max-width: 992px){
  .banner{
    img {
    opacity: 0.5;
    width:auto;
    height:200px;
  }
  }
  .nav-wrap {
    .row {
     
    .aside {
      ul{
        flex-wrap: nowrap; 
        padding: 0;
          display: none;
        li{
          display: flex;
          text-align: center;
          align-items: center;
          span{
            margin:0 auto;
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
