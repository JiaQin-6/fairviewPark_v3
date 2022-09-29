<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-25 13:47:01
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="buyer-server">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>{{fairview_park_lang==='en_us'?'One Stop Service for':'新業主的一站式'}} <b>{{fairview_park_lang==='en_us'?'New Owners':'服務'}}</b></p>
    </div>
    <!-- 內容 -->
    <div class="content mt-20">
      <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
        <tbody>
          <tr v-for="(item, index) in fairview_park_lang==='en_us'?image_en:image" :key="index">
            <td valign="top">
              <div align="center" class="mb-20">
                <img :src="item.url" width="600" height="798" :alt="item.alt" /><br />
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
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url).href,
      image: [
        {
          url: new URL("../../assets/image/prospective buyer/oss1a.jpeg", import.meta.url)
            .href,
          alt: "",
        },
        {
          url: new URL("../../assets/image/prospective buyer/oss2a.jpeg", import.meta.url)
            .href,
          alt: "",
        },
        {
          url: new URL("../../assets/image/prospective buyer/oss3a.jpeg", import.meta.url)
            .href,
          alt: "",
        },
        {
          url: new URL("../../assets/image/prospective buyer/oss4a.jpeg", import.meta.url)
            .href,
          alt: "",
        },
      ],
      image_en: [
        {
          url: new URL("../../assets/image/prospective buyer/oss1a_en.jpeg", import.meta.url)
            .href,
          alt: "",
        },
        {
          url: new URL("../../assets/image/prospective buyer/oss2a_en.jpeg", import.meta.url)
            .href,
          alt: "",
        },
        {
          url: new URL("../../assets/image/prospective buyer/oss3a_en.jpeg", import.meta.url)
            .href,
          alt: "",
        },
        {
          url: new URL("../../assets/image/prospective buyer/oss4a_en.jpeg", import.meta.url)
            .href,
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
.buyer-server {
  background-color: #e5e5e5;
  .banner {
    position: relative;
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
      b {
        color: #2fa94e;
      }
    }
  }
}
</style>
