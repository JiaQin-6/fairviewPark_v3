<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-19 12:29:05
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wall-color-series">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Master Colour" : "外牆顏色"
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;Schedule" : "系列" }}</b>
      </p>
    </div>
    <!-- 內容 -->
    <div class="content" style="margin:20px auto;padding:0 20px;">
      <table
        border="0"
        align="center"
        cellpadding="0"
        cellspacing="0"
      >
        <tbody style="width:100%">
          <tr
            v-for="(item, index) in fairview_park_lang === 'en_us'
              ? image_en
              : image"
            :key="index"
          >
            <td valign="top">
              <div align="center" class="mb-20">
                <img
                  :src="item.url"
                  
                  :alt="item.alt"
                  style="width:100%"
                /><br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
      image_en: [
        {
          url: new URL(
            "../../assets/image/prospective buyer/colour_schedule_en.jpeg",
            import.meta.url
          ).href,
          alt: "",
        },
      ],
      image: [
        {
          url: new URL(
            "../../assets/image/prospective buyer/colour_schedule.jpeg",
            import.meta.url
          ).href,
          alt: "",
        },
      ],
    };
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.wall-color-series {
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
  .content {
    table {
      background-color: #fff;
      padding: 20px 0;
    }
  }
}
@media (min-width: 576px) {
  .content {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .content {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .content {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .content {
    width: 992px;
  }
}
@media (min-width: 1400px) {
  .content {
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
}
</style>
