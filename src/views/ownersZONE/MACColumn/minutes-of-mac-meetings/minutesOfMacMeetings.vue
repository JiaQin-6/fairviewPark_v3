<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-14 23:14:46
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-select
      v-model="menuActive"
      class="menu-select"
      style="margin-bottom: 20px"
      :placeholder="$t('Select')"
      size="large"
      @click="menuActive = item2.value"
    >
      <el-option
        v-for="(item, index) in [
          {
            text:
              fairview_park_lang === 'en_us' ? 'Minutes of MAC Meetings' : '大會議記錄',
            value: 1,
          },
          {
            text:
              fairview_park_lang === 'en_us'
                ? 'Minutes of Sub-com. Meetings'
                : '分組會議記錄',
            value: 2,
          },
          {
            text: fairview_park_lang === 'en_us' ? 'Work Review' : '工作回顧',
            value: 3,
          },
        ]"
        :key="index"
        :label="item.text"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-if="menuActive === 2"
      v-model="sub_mac_meetings_index"
      class="menu-select-sub-meetings"
      style="margin-bottom: 20px"
      :placeholder="$t('Select')"
      size="large"
      @change="selectSubMacMeeting"
    >
      <el-option
        v-for="(item, index) in minutes_of_sub_mac_meetings_list"
        :key="index"
        :label="item.titleEnUs"
        :value="index"
      />
    </el-select>
    <h5>
      {{ fairview_park_lang === "en_us" ? "MAC Meetings" : "會議記錄" }}
    </h5>
    <div class="menu">
      <div
        class="sub-menu"
        :class="{ active: menuActive === item2.value }"
        v-for="(item2, index2) in [
          {
            text:
              fairview_park_lang === 'en_us' ? 'Minutes of MAC Meetings' : '大會議記錄',
            value: 1,
          },
          {
            text:
              fairview_park_lang === 'en_us'
                ? 'Minutes of Sub-com. Meetings'
                : '分組會議記錄',
            value: 2,
          },
          {
            text: fairview_park_lang === 'en_us' ? 'Work Review' : '工作回顧',
            value: 3,
          },
        ]"
        :key="index2"
        @click="menuActive = item2.value"
      >
        {{ item2.text }}
      </div>
    </div>
    <div class="content">
      <el-config-provider :locale="local">
        <ul v-show="menuActive === 1">
          <li
            v-for="(item, index) in minutes_of_mac_meetings_show_list"
            :key="index"
            class="flex-row"
          >
            <i>{{ item.index + 1 }}.</i>
            <span
              ><a target="_blank" :href="item.pdfUrlEnUs">{{ item.titleEnUs }}</a></span
            >
          </li>
          <!-- 分頁 -->
          <div style="display: flex; align-items: center" v-if="total !== 0">
            <el-pagination
              style="flex-wrap: wrap; margin: 0 auto; font-size: 18px; width: 100%"
              v-model:current-page="currentPage1"
              v-model:page-size="pageSize1"
              :page-sizes="[5, 10, 15, 20]"
              :small="false"
              :disabled="false"
              :background="false"
              layout="total, sizes, prev, pager, next"
              :total="total1"
              @size-change="handleSizeChange1"
              @current-change="handleCurrentChange1"
            />
          </div>
        </ul>
      </el-config-provider>

      <div v-show="menuActive === 2">
        <div class="menu">
          <span
            v-for="(item, index) in minutes_of_sub_mac_meetings_list"
            :key="index"
            @click="selectSubMacMeeting(index)"
            >{{ item.titleEnUs }}</span
          >
        </div>
        <div class="content" v-if="minutes_of_sub_mac_meetings_list.length !== 0">
          <p>{{ minutes_of_sub_mac_meetings_list[sub_mac_meetings_index].titleEnUs }}</p>
          <ul>
            <li
              v-for="(item, index) in minutes_of_sub_mac_meetings_show_list"
              :key="index"
              class="flex-row"
            >
              <i>{{ index + 1 }}.</i>
              <span
                ><a target="_blank" :href="item.pdfUrlEnUs">{{ item.titleEnUs }}</a></span
              >
            </li>
          </ul>
        </div>
        <!-- 分頁 -->
        <div style="display: flex; align-items: center" v-if="total !== 0">
          <el-pagination
            style="flex-wrap: wrap; margin: 0 auto; font-size: 18px"
            v-model:current-page="currentPage2"
            v-model:page-size="pageSize2"
            :page-sizes="[5, 10, 15, 20]"
            :small="false"
            :disabled="false"
            :background="false"
            layout="total, sizes, prev, pager, next"
            :total="total2"
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange2"
          />
        </div>
      </div>
      <div v-show="menuActive === 3">
        <div class="share" v-if="isShowShareButton">
             <el-button @click="sharePdf">
              {{ fairview_park_lang==='en_us'?'Share':'分享' }}
             </el-button>
            </div>
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
import { ElConfigProvider } from "element-plus";
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import en from "element-plus/dist/locale/en.mjs";
import PDFPreview from "../../../../components/pdf-preview/index.vue";
export default {
  components: {
    ElConfigProvider,
    PDFPreview,
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      minutes_of_mac_meetings_list: [],
      minutes_of_mac_meetings_show_list: [],
      menuActive: 1,
      minutes_of_sub_mac_meetings_list: [],
      minutes_of_sub_mac_meetings_show_list: [],
      sub_mac_meetings_index: 0,
      MacColumnFile: {
        pdfUrlEnUs: "",
        pdfUrlZhTw: "",
      },
      currentPage1: 1,
      pageSize1: 5,
      total1: 0,
      currentPage2: 1,
      pageSize2: 5,
      total2: 0,
      local: "",
      pdfPreview: "",
      pdfDownloadUrl: "",
      pageNumber:0,
      isShowShareButton:false,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.local = data.fairview_park_lang === "en_us" ? en : zhTw;
    //查看所有列表
    const findMinutesOfMacMeetingsList = async () => {
      try {
        const res = await proxy.$http.findMinutesOfMacMeetingsList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          res.data.data.records.map((item, index) => {
            item.index = index;
          });
          data.minutes_of_mac_meetings_list = res.data.data.records;
          data.total1 = data.minutes_of_mac_meetings_list.length;
          handleCurrentChange1(1);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const findMinutesOfSubComMeetingsList = async (id) => {
      try {
        const res = await proxy.$http.findMinutesOfSubComMeetingsList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          if (id) {
            for (let i = 0; i < data.minutes_of_sub_mac_meetings_list.length; i++) {
              if (data.minutes_of_sub_mac_meetings_list[i].id === id) {
                data.minutes_of_sub_mac_meetings_list[i].children = res.data.data.records;
                data.total2 = data.minutes_of_sub_mac_meetings_list[i].children.length;
              }
            }
            handleCurrentChange2(1);
          } else {
            data.minutes_of_sub_mac_meetings_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    //查看工作回顧pdf
    const findOneMacColumnFile = async () => {
      try {
        const res = await proxy.$http.findOneMacColumnFile({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.MacColumnFile.pdfUrlEnUs = res.data.data.pdfUrlEnUs;
          data.MacColumnFile.pdfUrlZhTw = res.data.data.pdfUrlZhTw;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //
    const selectSubMacMeeting = async (index) => {
      data.sub_mac_meetings_index = index;
      data.currentPage2 = 1
        data.pageSize2 = 5
        await findMinutesOfSubComMeetingsList(
          data.minutes_of_sub_mac_meetings_list[index].id
        );
    };
    const handleSizeChange1 = (val) => {
      data.minutes_of_mac_meetings_show_list = data.minutes_of_mac_meetings_list.slice(
        (data.currentPage1 - 1) * val,
        data.currentPage1 * val
      );
    };
    const handleCurrentChange1 = (val) => {
      data.minutes_of_mac_meetings_show_list = data.minutes_of_mac_meetings_list.slice(
        (val - 1) * data.pageSize1,
        val * data.pageSize1
      );
    };
    const handleSizeChange2 = (val) => {
      data.minutes_of_sub_mac_meetings_show_list = data.minutes_of_sub_mac_meetings_list[data.sub_mac_meetings_index].children.slice(
        (data.currentPage2 - 1) * val,
        data.currentPage2 * val
      );
    };
    const handleCurrentChange2 = (val) => {
      data.minutes_of_sub_mac_meetings_show_list = data.minutes_of_sub_mac_meetings_list[data.sub_mac_meetings_index].children.slice(
        (val - 1) * data.pageSize2,
        val * data.pageSize2
      );
      console.log(data.minutes_of_sub_mac_meetings_show_list)
    };
    //分享pdf鏈接
    const sharePdf = () => {
      let a = document.createElement('a');
      a.href = data.pdfPreview;
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
      findMinutesOfMacMeetingsList();
      await findMinutesOfSubComMeetingsList();
      await findMinutesOfSubComMeetingsList(data.minutes_of_sub_mac_meetings_list[0].id);
      await findOneMacColumnFile();
      data.pdfPreview = data.MacColumnFile.pdfUrlEnUs;
      data.pdfDownloadUrl = data.MacColumnFile.pdfUrlZhTw;
      data.pageNumber = data.MacColumnFile.remark;
      
    });
    return {
      ...toRefs(data),
      findMinutesOfMacMeetingsList,
      findMinutesOfSubComMeetingsList,
      findOneMacColumnFile,
      selectSubMacMeeting,
      handleSizeChange1,
      handleCurrentChange1,
      handleSizeChange2,
      handleCurrentChange2,
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
    font-size: 24px;
    font-weight: bold;
    padding: 0px 25px;
    cursor: pointer;
  }

  .active {
    background-color: var(--mainColor1);
    color: #fff;
  }
}

.content {
  ul {
    padding: 0;

    li {
      font-size: 18px;
      margin-bottom: 20px;
      align-items: center;
      background-color: #e3f3b3;

      i {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40px;
        text-align: center;
        background-color: #e3f3b3;
        height: 100%;
      }

      span {
        line-height: 25px;
        background-color: #fff0be;
        flex: 1;
        padding: 7px 0 7px 10px;

        a {
          text-decoration: none;
          color: #4a4a4a;
        }
      }
    }
  }
  .menu {
    margin-bottom: 20px;
    text-align: center;
    span {
      border-right: 2px solid #000;
      padding: 0 10px;
      cursor: pointer;
      font-size: 18px;
      &:last-child {
        border: 0;
      }
    }
  }
  .content {
    margin-bottom: 30px;
    p {
      color: var(--mainColor3);
      margin: 0 0 5px 0;
      padding: 5px 0px;
      font-size: 18px;
      font-weight: bold;
    }
    ul {
      padding: 0;
      li {
        font-size: 18px;
        align-items: center;
        background-color: #e3f3b3;
        i {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
          text-align: center;
          background-color: #e3f3b3;
          height: 100%;
        }
        span {
          line-height: 25px;
          background-color: #fff0be;
          flex: 1;
          padding: 7px 0 7px 10px;
          a {
            text-decoration: none;
            color: #4a4a4a;
          }
        }
      }
    }
   
  }
  .share{
    text-align: right;
        .el-button{
          background-color: var(--mainColor2);
          color:#fff;
          border-color: var(--mainColor2);
          padding: 10px 20px;
        }
      }
  @{deep} .el-pagination {
    .el-pagination__total {
      font-size: 18px;
    }

    .el-input__inner {
      font-size: 18px;
    }
    .el-icon {
      font-size: 18px;
    }
    .el-pager {
      li {
        font-size: 18px;
        &:hover {
          color: var(--mainColor2);
        }
      }
      .is-active {
        color: var(--mainColor2);
      }
    }
    .el-pagination__jump {
      font-size: 18px;
    }
  }
}
@{deep} .menu-select {
  display: none;
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
@{deep} .menu-select-sub-meetings {
  display: none;
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
@{deep} .pdf-preview {
  .pdf-preview-content {
    width: 100%;
  }
}
@media (max-width: 991px) {
  .menu-select {
    display: block;
  }
  h5 {
    font-size: 28px;
  }
  .menu-select-sub-meetings {
    display: block;
  }
  .sub-menu,
  .menu {
    display: none;
  }
  .content {
    ul {
      li {
        font-size: 15px;
      }
      @{deep} .el-pagination {
        .el-pagination__total {
          font-size: 15px !important;
        }
        .el-pagination__sizes {
          .el-input__inner {
            font-size: 15px !important;
          }
        }
        .el-pager {
          li {
            font-size: 15px !important;
          }
        }
        .el-pagination__jump {
          font-size: 15px !important;
          .el-input__inner {
            font-size: 15px !important;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  @{deep} .el-pagination {
    .el-pagination__total {
      font-size: 15px !important;
      margin: 0;
    }
    .el-pagination__sizes {
      text-align: left;
      position: relative;
      width: calc(100% - 85px);
      display: block;
      padding-left: 10px;
      box-sizing: border-box;
      .el-select {
        position: relative;
        left: 0;
      }
    }
    .btn-prev {
      margin-left: 0;
    }
    .el-input__inner {
      font-size: 15px !important;
    }
    .el-icon {
      font-size: 15px !important;
    }
    .el-pager {
      width: 79%;
      overflow: auto;
      li {
        font-size: 15px !important;
        &:hover {
          color: var(--mainColor2);
        }
      }
      .is-active {
        color: var(--mainColor2);
      }
    }
    .el-pagination__jump {
      font-size: 15px !important;
      margin: 0;
    }
  }
}
</style>
