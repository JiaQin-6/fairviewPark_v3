<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:51:55
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-select v-model="menuActive" class="menu-select" style="margin-bottom:20px" size="large"
      @click="menuActive = item2.value">
      <el-option v-for="(item, index) in [
        {
          text: fairview_park_lang === 'en_us' ? 'Election Procedure' : '選舉程序',
          value: 1,
        },
        {
          text:
            fairview_park_lang === 'en_us' ? 'Election Activities Rules' : '選舉守則',
          value: 2,
        },
        {
          text:
            fairview_park_lang === 'en_us'
              ? 'Election Activities Rules Time Table'
              : '選舉守則時間表',
          value: 3,
        },
      ]" :key="index" :label="item.text" :value="item.value" />
    </el-select>
    <h5>{{ $t('MACColumn_Rules_Regulations.Rules_Regulations') }}</h5>
    <div class="menu">
      <div class="sub-menu" :class="{ active: menuActive === item2.value }" v-for="(item2, index2) in [
        {
          text: fairview_park_lang === 'en_us' ? 'Election Procedure' : '選舉程序',
          value: 1,
        },
        {
          text:
            fairview_park_lang === 'en_us' ? 'Election Activities Rules' : '選舉守則',
          value: 2,
        },
        {
          text:
            fairview_park_lang === 'en_us'
              ? 'Election Activities Rules Time Table'
              : '選舉守則時間表',
          value: 3,
        },
      ]" :key="index2" @click="menuActive = item2.value">
        {{ item2.text }}
      </div>
    </div>
    <div>
      <div v-show="menuActive === 1" style="font-size: 18px" v-for="(item, index) in content" :key="index">
        <p v-show="item.title">{{ item.title }}</p>
        <p style="display: flex" v-show="item.children && item2.text" v-for="(item2, index2) in item.children"
          :key="index2">
          <span style="margin-right: 10px">{{ item2.index }}.</span>{{ item2.text }}
        </p>
        <div style="padding: 0 20px">
          <p style="display: flex" v-for="(item3, index3) in item.children2" :key="index3">
            <span>{{ item3.index }}</span>{{ item3.text }}
          </p>
        </div>
      </div>
      <div v-show="menuActive === 2">
        <div class="share" v-if="isShowShareButton">
          <el-button @click="sharePdf(pdfPreview1)">
            {{ fairview_park_lang === 'en_us' ? 'Share' : '分享' }}
          </el-button>
        </div>
        <PDFPreview v-if="pdfPreview1" :pdfPreview="pdfPreview1" :pdfDownloadUrl="pdfDownloadUrl1" :pageNumber="1">
        </PDFPreview>
      </div>
      <div v-show="menuActive === 3">
        <div class="share" v-if="isShowShareButton">
          <el-button @click="sharePdf(pdfPreview2)">
            {{ fairview_park_lang === 'en_us' ? 'Share' : '分享' }}
          </el-button>
        </div>
        <PDFPreview v-if="pdfPreview2" :pdfPreview="pdfPreview2" :pdfDownloadUrl="pdfDownloadUrl2" :pageNumber="1">
        </PDFPreview>
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
      menuActive: 1,
      pdfPreview1: "",
      pdfDownloadUrl1: "",
      pdfPreview2: "",
      pdfDownloadUrl2: "",
      isShowShareButton: false,
      content: null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.MACColumn_Election_Procedure.content
        : window.i18n_zh_tw.MACColumn_Election_Procedure.content;
    //分享pdf鏈接
    const sharePdf = (link) => {
      let a = document.createElement('a');
      a.href = link;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a)
    };
    onMounted(async () => {
      //如果是從app進來用戶未登錄，隱藏分享button
      if (sessionStorage.getItem("app-login-status")) {
        data.isShowShareButton = true;
      }
      data.pdfPreview1 = data.fairview_park_lang === "en_us"
        ? "https://fairviewpark.hk/file/mac/MAC_Election_Activities_Rules_Eng.pdf"
        : "https://fairviewpark.hk/file/mac/MAC_Election_Activities_Rules_Chi.pdf";
      data.pdfDownloadUrl1 = data.fairview_park_lang === "en_us"
        ? "https://app.fairviewpark.hk/houseweb/web/downFile?filePath=https://fairviewpark.hk/file/mac/MAC_Election_Activities_Rules_Eng.pdf"
        : "https://app.fairviewpark.hk/houseweb/web/downFile?filePath=https://fairviewpark.hk/file/mac/MAC_Election_Activities_Rules_Chi.pdf";
      data.pdfPreview2 = data.fairview_park_lang === "en_us"
        ? "https://fairviewpark.hk/file/mac/MAC_Election_Timetable_Eng.pdf"
        : "https://fairviewpark.hk/file/mac/MAC_Election_Timetable_Chi.pdf",
        data.pdfDownloadUrl2 = data.fairview_park_lang === "en_us"
          ? "https://app.fairviewpark.hk/houseweb/web/downFile?filePath=https://fairviewpark.hk/file/mac/MAC_Election_Timetable_Eng.pdf"
          : "https://app.fairviewpark.hk/houseweb/web/downFile?filePath=https://fairviewpark.hk/file/mac/MAC_Election_Timetable_Chi.pdf";
    });
    return {
      ...toRefs(data),
      sharePdf
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";

h5 {
  font-size: 36px;
  color: var(--mainColor3);
  text-align: left;
}

.menu {
  display: flex;
  margin-bottom: 20px;

  .sub-menu {
    font-size: 27px;
    font-weight: bold;
    padding: 0px 25px;
    cursor: pointer;
  }

  .active {
    background-color: var(--mainColor1);
    color: #fff;
  }
}

@{deep} .menu-select {
  display: none;
  --el-select-input-focus-border-color: #ccc;

  .select-trigger {
    .el-input {
      font-size: 18px;

      .el-input__wrapper {}
    }

    .is-focus {
      border-color: #ccc;
    }
  }
}

.share {
  text-align: right;

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
  .menu-select {
    display: block;
  }

  .sub-menu {
    display: none;
  }

  h5 {
    font-size: 28px;
  }

  p {
    font-size: 15px !important;
  }
}
</style>
