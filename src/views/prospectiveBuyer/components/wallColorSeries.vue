<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-13 00:13:11
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wall-color-series">
    <div class="content" style="margin:0px auto;padding:0 20px;">
      <p style="padding:0;font-size: 36px;color:#9cc212;font-weight:bold;">
        {{
            fairview_park_lang === "en_us"
              ? "Master Colour Schedule"
              : "外牆顏色系列"
        }}
      </p>
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
      image_en: [
        {
          url: new URL(
            "../../../assets/image/prospective buyer/colour_schedule_en.jpeg",
            import.meta.url
          ).href,
          alt: "",
        },
      ],
      image: [
        {
          url: new URL(
            "../../../assets/image/prospective buyer/colour_schedule.jpeg",
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
  width: 100%;
  .content {
    table {
      background-color: #fff;
      padding: 20px 0;
    }
  }
}


</style>
