<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-11-04 23:34:14
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-15 00:48:18
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/theOverhaulProject/components/theOverhaulProject.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p class="subject" style="font-size: 36px; color: #9cc212; font-weight: bold">
      {{
        $t('TheOverhaulProject.The_Overhaul_Project')
      }}
    </p>
    <p style="font-size:24px;font-weight:bold" class="subTitle">
      {{
        $t('TheOverhaulProject.The_Overhaul_Project_refers')
      }}
    </p>
    <div
      class="mb-20"
      v-for="(item, index) in content_1"
      :key="index"
    >
      <h5 style="background-color: #389818; color: #fff; font-size: 18px; padding: 5px">
        {{ item.title }}
      </h5>
      <p
        style="font-size: 18px; padding: 10px 20px; margin: 0"
        v-for="(item2, index2) in item.children"
        :key="index2"
        v-html="item2.text"
      ></p>
    </div>
    <!-- 大維修影片 -->
    <div>
      <h5 style="background-color: #389818; color: #fff; font-size: 16px; padding: 5px">
        {{
          fairview_park_lang === "en_us" ? "Overhaul Project Video" : "「大維修」資訊影片"
        }}
      </h5>
      <div style="text-align: center">
        <iframe
          style="width:100%;max-width:560px"
          height="315"
          src="https://www.youtube.com/embed/bjW8bxYGMC8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
   
    <!-- 2021年5月24日 宣傳單張 2021年4月12日 宣傳單張 -->
    <div
      v-for="(item, index) in content_2"
      :key="index"
    >
      <h5 style="background-color: #389818; color: #fff; font-size: 16px; padding: 5px">
        {{ item.title }}
      </h5>
      <div style="text-align: center" class="flex-row">
        <div
          class="col-lg-3 demo-image__preview"
          v-for="(item2, index2) in item.children"
          :key="index2"
          style="padding: 10px"
        >
          <el-image
            class="el-image"
            style="width: 100%"
            :src="item2.url"
            :preview-src-list="[item2.url]"
            fit="cover"
          />
        </div>
      </div>
      <p style="font-size: 15px">
        {{ fairview_park_lang === "en_us" ? "*Click to enlarge" : "*點選宣傳單張放大" }}
      </p>
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
      fairview_park_lang: "",
      content_1:null,
      content_2:null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content_1 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.TheOverhaulProject.content_1
        : window.i18n_zh_tw.TheOverhaulProject.content_1;
    data.content_2 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.TheOverhaulProject.content_2
        : window.i18n_zh_tw.TheOverhaulProject.content_2;
    onMounted(async () => {});
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.el-image {
  &:hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    transition: 0.3s;
  }
}
@media (max-width: 991px) {
  .subject{
    font-size: 28px!important;
  }
  .subTitle{
    font-size: 20px!important;
    margin-bottom:10px;
  }
  h5,p{
    font-size: 15px!important;
  }
}
</style>
