<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-24 23:54:09
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Fairview Park" : "錦綉"
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;News" : "專訊" }}</b>
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div
          style="margin: 0 auto"
          class="col-12 nav-content mb-20 ql-container ql-snow"
        >
          <div style="text-align: right">
            <el-select
              v-model="fairview_part_news_index"
              class="m-2"
              placeholder="Select"
              size="large"
            >
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
              seamless
              scrolling="yes"
              :src="
                fairview_part_news_list.length !== 0 &&
                fairview_part_news_list[fairview_part_news_index].fileEnUs
              "
            ></iframe>
            <!-- <VuePdfEmbed
              :pdfUrl="'https://fairviewpark.hk/new_web/uat/pdf/Javascript1_7zhr.pdf'"
            >
            </VuePdfEmbed> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import VuePdfEmbed from "../../../components/pdfJs/pdf.vue";
export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      banner: new URL(
        "../../../assets/image/aboutUs/banner.png",
        import.meta.url
      ).href,
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
  margin: 0 auto;
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
@media (min-width: 576px) {
  .nav-wrap {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .nav-wrap {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-wrap {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .nav-wrap {
    width: 992px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap {
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
}
</style>
