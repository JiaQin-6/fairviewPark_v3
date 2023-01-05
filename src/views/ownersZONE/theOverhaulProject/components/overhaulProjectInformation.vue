<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-11-04 23:34:14
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-15 00:28:22
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/theOverhaulProject/components/theOverhaulProject.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p style="font-size: 36px; color: #9cc212; font-weight: bold">
      {{ fairview_park_lang === "en_us" ? "Overhaul Project Information" : "大維修資訊" }}
    </p>
    <!-- 大維修資訊 -->
    <div style="text-align: right">
      <!-- <el-select
        v-model="fairview_part_news_index"
        style="margin: 20px 0"
        placeholder="Select"
        size="large"
        @change="changeFairviewPartNews"
      >
        <el-option
          v-for="(item, index) in fairview_part_news_list"
          :key="index"
          :label="item.titleEnUs"
          :value="index"
        />
      </el-select> -->
      <div style="text-align: center">
        <div id="viewer" style="width: 100%; height: 600px; margin: 0 auto"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import PDFJSExpress from "@pdftron/pdfjs-express";
export default {
  data() {
    return {};
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      tohpByFpn: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 业主手册及地图 列表
    const findTohpByFpn = async () => {
      try {
        const res = await proxy.$http.findTohpByFpn({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.tohpByFpn = res.data.data.fileEnUs;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findTohpByFpn();
      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc: data.tohpByFpn,
        },
        document.getElementById("viewer")
      ).then((instance) => {
        // use APIs here
      });
    });
    return {
      ...toRefs(data),
      findTohpByFpn,
    };
  },
};
</script>

<style lang="less" scoped>
@media (max-width: 991px) {
  p {
    font-size: 28px !important;
  }
  ul {
    li {
      font-size: 15px !important;
    }
  }
}
</style>
