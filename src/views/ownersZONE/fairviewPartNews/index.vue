<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-31 00:06:50
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Fairview part" : "錦綉"
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;news" : "專訓" }}</b>
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div style="margin:0 auto" class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
          <div style="text-align:right">
            <el-select v-model="fairview_part_news_index" class="m-2" placeholder="Select" size="large">
              <el-option
                v-for="(item, index) in fairview_part_news_list"
                :key="index"
                :label="item.titleEnUs"
                :value="index"
              />
            </el-select>
            <iframe
              width="100%"
              height="700px;"
              :src="
              fairview_part_news_list.length !== 0 &&
                fairview_part_news_list[fairview_part_news_index].fileEnUs
              "
            ></iframe>
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
      fairview_part_news_list: [],
      fairview_part_news_index: 0,
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findFairviewParkNewsList = async () => {
      try {
        const res = await proxy.$http.findFairviewParkNewsList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.fairview_part_news_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findFairviewParkNewsList();
    });
    return {
      ...toRefs(data),
      findFairviewParkNewsList,
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
@media (max-width: 992px) {
  .banner {
    img {
      opacity: 0.5;
      width: auto;
      height: 200px;
    }
  }
}
</style>
