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
      {{
        $t("TheOverhaulProject_Overhaul_Project_Information.Overhaul_Project_Information")
      }}
    </p>
    <!-- 大維修資訊 -->
    <div style="text-align: right">
      <el-select
        v-if="tohpByFpnList.length > 0"
        v-model="tohpByFpnIndex"
        style="margin: 20px 0; width: 100%"
        :placeholder="' '"
        size="large"
        @change="changeTohpByFpn"
        :teleported="false"
      >
        <el-option
          v-for="(item, index) in tohpByFpnList"
          :key="index"
          :label="item.titleEnUs"
          :value="index"
        />
      </el-select>
      <div class="share" v-if="isShowShareButton">
        <el-button @click="sharePdf">
          {{ fairview_park_lang === "en_us" ? "Share" : "分享" }}
        </el-button>
      </div>
      <div style="height:700px">
        <PDFPreview
        v-if="pdfPreview"
        :pdfPreview="pdfPreview"
        :pdfDownloadUrl="pdfDownloadUrl"
        :pageNumber="pageNumber"
      ></PDFPreview>
      </div>
    
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import PDFPreview from "../../../../components/pdf-preview/index.vue";
export default {
  components: {
    PDFPreview,
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      tohpByFpnList: [],
      tohpByFpnIndex: 0,
      ramNumber: "",
      pdfPreview: "",
      pdfDownloadUrl: "",
      pageNumber: 0,
      isShowShareButton: false,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 业主手册及地图 列表
    const findTohpByFpn2 = async () => {
      try {
        const res = await proxy.$http.findTohpByFpn2({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.tohpByFpnList = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const changeTohpByFpn = () => {
      data.pdfPreview =
        data.tohpByFpnList.length !== 0 &&
        data.tohpByFpnList[data.tohpByFpnIndex].fileEnUs;
      data.pdfDownloadUrl =
        data.tohpByFpnList.length !== 0 &&
        data.tohpByFpnList[data.tohpByFpnIndex].fileZhTw;
      data.pageNumber =
        data.tohpByFpnList.length !== 0 && data.tohpByFpnList[data.tohpByFpnIndex].remark;
    };
    //分享pdf鏈接
    const sharePdf = () => {
      console.log(data.pdfPreview);
      let a = document.createElement("a");
      a.href = data.pdfPreview;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    onMounted(async () => {
      //如果是從app進來用戶未登錄，隱藏分享button
      if (sessionStorage.getItem("app-login-status")) {
        data.isShowShareButton = true;
      }
      await findTohpByFpn2();
      data.pdfPreview =
        data.tohpByFpnList.length !== 0 &&
        data.tohpByFpnList[data.tohpByFpnIndex].fileEnUs;
      data.pdfDownloadUrl =
        data.tohpByFpnList.length !== 0 &&
        data.tohpByFpnList[data.tohpByFpnIndex].fileZhTw;
      data.pageNumber =
        data.tohpByFpnList.length !== 0 && data.tohpByFpnList[data.tohpByFpnIndex].remark;
    });
    return {
      ...toRefs(data),
      findTohpByFpn2,
      changeTohpByFpn,
      sharePdf,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
@{deep} .el-popper {
  position: absolute;
  top: 52px !important;
  left: 0 !important;
  .el-select-dropdown {
    .el-scrollbar {
      .el-select-dropdown__wrap {
        .el-scrollbar__view {
          .el-select-dropdown__item {
            text-align: left;
          }
        }
      }
    }
  }
}
.share {
  .el-button {
    background-color: var(--mainColor2);
    color: #fff;
    border-color: var(--mainColor2);
    padding: 10px 20px;
  }
}
@{deep} .pdf-preview {
  .pdf-preview-content {
    width: 100%;
  }
}
@media (max-width: 991px) {
  p {
    font-size: 28px !important;
  }
  ul {
    li {
      font-size: 15px !important;
    }
  }
  .el-select {
    width: 100%;
  }
}
</style>
