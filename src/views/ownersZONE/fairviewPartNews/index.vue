<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:04:50
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
        {{ fairview_park_lang === "en_us" ? "Fairview Park" : "錦綉"
        }}{{ fairview_park_lang === "en_us" ? " News" : "專訊" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div style="margin: 0 auto" class="col-12 nav-content mb-20">
          <div style="text-align: right">
            <el-select
              v-model="fairview_part_news_index"
              style="margin:20px 0"
              placeholder="Select"
              size="large"
              @change="changeFairviewPartNews"
              placement="bottom"
            >
              <el-option
                v-for="(item, index) in fairview_part_news_list"
                :key="index"
                :label="item.titleEnUs"
                :value="index"
              />
            </el-select>
            <div id="pdf-wrap">
              <div
                id="pdf-preview"
                style="width: 100%; height: 600px; margin: 0 auto"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import PDFJSExpress from "@pdftron/pdfjs-express";
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
      fairview_part_news_list: [],
      fairview_part_news_index: 0,
      fairview_park_lang: "",
      ramNumber: "",
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
    const changeFairviewPartNews = () => {
      data.ramNumber = getRamNumber(6);
      document
        .getElementById("pdf-wrap")
        .removeChild(document.getElementById("pdf-wrap").childNodes[0]);
      let div = document.createElement("div");
      div.id = data.ramNumber;
      div.style.height = "600px";
      document.getElementById("pdf-wrap").appendChild(div);

      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc:
            data.fairview_part_news_list.length !== 0 &&
            data.fairview_part_news_list[data.fairview_part_news_index].fileEnUs,
        },
        document.getElementById(data.ramNumber)
      ).then((instance) => {
        // use APIs here
      });
    };
    //随机生成数值
    const getRamNumber = (num) => {
      var result = "";
      for (var i = 0; i < num; i++) {
        result += Math.floor(Math.random() * 36).toString(36); //获取0-9，a-b随机组合成的
      }
      //默认字母小写，手动转大写
      return result.toUpperCase();
    };
    onMounted(async () => {
      await findFairviewParkNewsList();
      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc:
            data.fairview_part_news_list.length !== 0 &&
            data.fairview_part_news_list[data.fairview_part_news_index].fileEnUs,
        },
        document.getElementById("pdf-preview")
      ).then((instance) => {
        // use APIs here
        // const { documentViewer, annotationManager } = instance.Core;
        // call methods from instance, documentViewer and annotationManager as needed
        // instance.UI.setTheme('dark');
      });
    });
    return {
      ...toRefs(data),
      findFairviewParkNewsList,
      changeFairviewPartNews,
      getRamNumber,
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
  margin: 0 auto;
  .row {
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 15px;

      img {
        max-width: 100%;
      }
      .el-select {
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
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap {
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
  .el-select{
    width:100%;
  }
}
</style>
