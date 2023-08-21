<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-28 00:04:33
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-09 18:36:26
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="tenantModal">
      <div class="tenantModal-dialog"  >
        <div class="tenantModal-content animate__animated animate__fadeIn" v-loading="loading">
          <div class="tenantModal-header">
            <el-icon @click="closeModel"><Close /></el-icon>
          </div>
          <div class="tenantModal-body">
            <h3 style="text-align: left; font-weight: normal">
              {{ $t("tenant_account_management.Copy_Tenant_Account_Credentials") }}
            </h3>
            <p
              style="text-align: left"
              v-html="$t('tenant_account_management.Please_click_Copy_Invitation')"
            ></p>
            <textarea class="content" id="tenant-info" v-html="copy_tenant_info"></textarea>
            <div style="text-align: right">
              <el-button class="copy" @click="copyInfo">
                <i class="iconfont icon-fuzhi"></i>
                {{ $t("tenant_account_management.Copy_account_information") }}
              </el-button>
              <el-button round class="cannel"  @click="closeModel">
                {{ $t("tenant_account_management.Copied_and_Shared") }}
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  getCurrentInstance,
  toRefs,
  onMounted,
  provide,
  nextTick,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
// 导入插件
import useClipboard from "vue-clipboard3";
export default {
    props:{
        copy_tenant_info:{
            type:Object,
        }
    },
  setup(props, ctx) {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, refs } = getCurrentInstance();
    let data = reactive({
      loading: false,
      fairview_park_lang: "",
      copy_tenant_info:null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const store = useStore();
    const router = useRouter();
    //關閉彈框
    const closeModel = () => {
      ctx.emit("hideTenantModal", false);
    };
    //開啟或關閉住客賬號
    const clickTenantLaunch = async (type) => {
      data.loading = true;
      try {
        const res = await proxy.$http.clickTenantLaunch({
          ownerId: JSON.parse(localStorage.getItem("login-info")).id,
          launchType: type,
        });
        if (res.data.status === 200) {
          data.loading = false;
         
        } else {
          data.loading = false;
          ElMessage({
            message: res.data.msg,
            type: "warning",
          });
        }
      } catch (error) {
        data.loading = false;
      }
    };
    //複製內容
    const copyInfo = async () => {
      clickTenantLaunch("C");
      const { toClipboard } = useClipboard();
      try {
        // 复制
        let tenantInfo = document.getElementById('tenant-info')
        await toClipboard(tenantInfo.innerHTML);
        // 复制成功
        ElMessage({
          message: proxy.$t("tenant_account_management.Copy_Successful"),
          type: "success",
        });
      } catch (e) {
        // 复制失败
      }
    };
    onMounted(() => {
        data.copy_tenant_info = props.copy_tenant_info
    });
    return {
      ...toRefs(data),
      closeModel,
      copyInfo,
      clickTenantLaunch,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";

.tenantModal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .tenantModal-dialog {
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 1.75rem auto;
    min-height: calc(100% - 3.5rem);
    .tenantModal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.3rem;
      outline: 0;
      .tenantModal-header {
        text-align: right;
        padding: 20px 20px 0;
        .el-icon {
          font-size: 30px;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .tenantModal-body {
        text-align: center;
        padding: 0 20px 50px;
        .content {
          box-shadow: inset 0 0 2px 2px rgba(119, 118, 118, 0.5);
          border-radius: 6px;
          padding: 10px;
          margin: 20px auto;
          width: 100%;
          border:0;
          color:#606266;
          height:250px;
          overflow: auto;
          font-size: 18px;
        }
        .cannel {
          font-size: 18px;
          &:hover {
            border: 1px solid #606266;
            background-color: #fff;
            color: #606266;
            opacity: 0.8;
          }
          &:active {
            border: 1px solid #606266;
            background-color: #fff;
            color: #606266;
          }
        }
        .copy {
          color: #fff;
          cursor: pointer;
          margin-top: 20px;
          margin-bottom: 20px;
          border: 1px solid var(--mainColor2);
          border-radius: 20px;
          font-size: 18px;
          padding: 2px 20px;
          background-color: var(--mainColor2);
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .tenantModal {
    .tenantModal-dialog {
      max-width: 95%;
      .tenantModal-content {
        .tenantModal-header {
          .el-icon {
          }
        }
        .tenantModal-body {
        }
      }
    }
  }
}
</style>
