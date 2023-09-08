<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-10 11:29:16
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-config-provider :locale="local" >
    <div>
      <p style="font-size: 36px; color: #9cc212; font-weight: bold">
        {{ $t('TheOverhaulProject_Minutes_of_SPAC_Meetings.Minutes_of_SPAC_Meetings') }}
      </p>
      <div class="content">
        <ul>
          <li
            v-for="(item, index) in minutes_of_mac_meetings_show_list"
            :key="index"
            class="flex-row"
          >
            <i>{{ index + 1 }}.</i>
            <span
              ><a :href="item.pdfUrlEnUs" target="_blank">{{ item.titleEnUs }}</a></span
            >
          </li>
        </ul>
        <!-- 分頁 -->
        <div style="display: flex; align-items: center" v-if="total !== 0">
          <el-pagination
            style="flex-wrap: wrap; margin: 0 auto; font-size: 18px;width: 100%;"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 15, 20]"
            :small="false"
            :disabled="false"
            :background="false"
            layout="total, sizes, prev, pager, next"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <!-- loading -->
    <div
      class="loading"
      v-loading="laoding"
      style="
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10000;
      "
      :style="{'display':laoding?'':'none'}"
    ></div>
  </el-config-provider>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import { ElConfigProvider } from "element-plus";
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import en from "element-plus/dist/locale/en.mjs";
export default {
  components: {
    ElConfigProvider,
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      laoding:false,
      fairview_park_lang: "",
      minutes_of_mac_meetings_list: [],
      minutes_of_mac_meetings_show_list: [],
      currentPage: 1,
      pageSize: 5,
      total: 0,
      local: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.local = data.fairview_park_lang === "en_us" ? en : zhTw;
    //查看所有列表
    const findTheOverhaulProjectList = async () => {
      data.laoding =true
      try {
        const res = await proxy.$http.findTheOverhaulProjectList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.minutes_of_mac_meetings_list = res.data.data.records;
          data.total = data.minutes_of_mac_meetings_list.length;
          handleCurrentChange(1);
          data.laoding =false
        }
      } catch (error) {
        data.laoding =false
        console.log(error);
      }
    };
    const handleSizeChange = (val) => {
      data.minutes_of_mac_meetings_show_list = data.minutes_of_mac_meetings_list.slice(
        (data.currentPage - 1) * val,
        data.currentPage * val
      );
    };
    const handleCurrentChange = (val) => {
      data.minutes_of_mac_meetings_show_list = data.minutes_of_mac_meetings_list.slice(
        (val - 1) * data.pageSize,
        val * data.pageSize
      );
    };
    onMounted(async () => {
      findTheOverhaulProjectList();
    });
    return {
      ...toRefs(data),
      findTheOverhaulProjectList,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
h5 {
  font-size: 16px;
  margin-bottom: 20px;
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
@media (max-width: 991px) {
  p {
    font-size: 28px !important;
    margin-bottom: 20px;
  }
  ul {
    li {
      font-size: 15px !important;
      span {
        a {
          font-size: 15px !important;
        }
      }
    }
  }
  @{deep} .el-pagination{
          .el-pagination__total{
            font-size: 15px!important;
          }
          .el-pagination__sizes{
            .el-input__inner{
              font-size: 15px!important;
            }
          }
          .el-pager{
            li{
              font-size: 15px!important;
            }
          }
          .el-pagination__jump{
            font-size: 15px!important;
            .el-input__inner{
              font-size: 15px!important;
            }
          }
        }
}
@media (max-width: 768px) {
  @deep: ~">>>";
  @{deep} .el-pagination {
          .el-pagination__total {
            font-size: 15px;
            margin: 0;
          }
          .el-pagination__sizes{
            text-align: left;
            position: relative;
            width: calc(100% - 85px);
            display: block;
            padding-left: 10px;
            box-sizing: border-box;
            .el-select{
              position: relative;
              left: 0;
            }
          }
          .btn-prev{
            margin-left:0;
          }
          .el-input__inner {
            font-size: 15px;
          }
          .el-icon {
            font-size: 15px;
          }
          .el-pager {
            width: 79%;
            overflow: auto;
            li {
              font-size: 15px;
              &:hover {
                color: var(--mainColor2);
              }
            }
            .is-active {
              color: var(--mainColor2);
            }
          }
          .el-pagination__jump {
            font-size: 15px;
            margin: 0;
          }
        }
}
</style>
