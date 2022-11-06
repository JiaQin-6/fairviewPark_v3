<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-03 00:41:30
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Estate" : "屋邨"
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;Activities" : "活動" }}</b>
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in estate_activites_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="
                () => {
                  nav_index = index;
                  findOneEstateActivitesById(item.id);
                }
              "
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
          <div class="ql-editor" v-html="estate_activites_content"></div>
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
      banner: new URL("../../../assets/image/aboutUs/banner.png", import.meta.url)
        .href,
      nav_index: 0,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      estate_activites_list: [],
      estate_activites_content: null,
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    //查看所有 屋邨资料 列表
    const findEstateActivitesList = async () => {
      try {
        const res = await proxy.$http.findEstateActivitesList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          console.log(res.data.data.records);
          data.estate_activites_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //根据 id 和 语言获取一条屋邨资料数据
    const findOneEstateActivitesById = async (id) => {
      try {
        const res = await proxy.$http.findOneEstateActivitesById({
          id: id,
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.estate_activites_content = res.data.data.htmlEnUs;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findEstateActivitesList();
      findOneEstateActivitesById(data.estate_activites_list[0].id);
    });
    return {
      ...toRefs(data),
      findOneEstateActivitesById,
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
      padding: 12px 15px;
      img {
        max-width: 100%;
      }
    }
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