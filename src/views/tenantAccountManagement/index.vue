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
      <div class="tenantModal-dialog">
        <div class="tenantModal-content animate__animated animate__fadeIn">
          <div class="tenantModal-header">
            <el-icon @click="closeModel"><Close /></el-icon>
          </div>
          <div class="tenantModal-body">
            
            <h2>{{ $t("headed.Tenant_account_management") }}</h2>
            <button
              style="
                background-color: #b59962;
                color: #fff;
                padding: 5px 30px;
                cursor: pointer;
                vertical-align: middle;
                border: none;
                border-radius: 50px;
              "
            >
              <a
                :href="
                  fairview_park_lang === 'en_us'
                    ? 'https://fairviewpark.hk/file/TenantAccountEN.html'
                    : 'https://fairviewpark.hk/file/TenantAccountTC.html'
                "
                target="_blank"
                style="text-decoration: none; color: #fff"
              >
                {{ $t("sign_up.Tenant_Account_Instruction") }}</a
              >
            </button>
            <!-- 如果沒有住客信息 -->
            <div v-if="tenantInfo && !tenantInfo.status">
              <p
                class="open-tip mb-20"
                style="text-align: left; padding: 0 10px"
                v-html="
                  $t('tenant_account_management.I_We_being_the_registered_house_owner')
                "
              ></p>
              <el-checkbox
                v-model="isAgreeOpen"
                :label="
                  $t(
                    'tenant_account_management.I_Accept_and_Understand_the_Terms_and_Agreement'
                  )
                "
              />
              <div>
                <el-button
                  class="open-btn"
                  type="primary"
                  :disabled="!isAgreeOpen"
                  @click="clickTenantLaunch('Y')"
                  >{{
                    $t("tenant_account_management.Enable_tenant_management")
                  }}</el-button
                >
              </div>
            </div>
            <!-- 如果有住客信息 -->
            <div v-if="tenantInfo && tenantInfo.status">
              <p class="name">
                <span>{{ $t("tenant_account_management.Login_Name") }}:</span>
                <span>{{ tenantInfo.memberLogin }}</span>
              </p>
              <p class="password" style="position: relative">
                <span>{{ $t("tenant_account_management.password") }}:</span>
                <span>{{ showPassword ? tenantInfo.password : "********" }}</span>
                <i
                  @click="showPassword = !showPassword"
                  class="iconfont icon-yanjing_xianshi_o fs-20 pointer"
                ></i>
              </p>
              <button class="copy" @click="copyTenantInfo">
                <i class="iconfont icon-fuzhi"></i>
                {{ $t("tenant_account_management.Copy_account_information") }}
              </button>
              <div class="account-record">
                <h5>{{ $t("tenant_account_management.Account_Record") }}</h5>
                <ul>
                  <li
                    v-for="(item, index) in [
                      {
                        title: $t(
                          'tenant_account_management.The_source_of_the_last_activation_of_the_tenant_account'
                        ),
                        value:
                          tenantInfo.lastLaunchSource === 4
                            ? $t(
                                'tenant_account_management.Fairview_Park_Management_Office'
                              )
                            : $t('tenant_account_management.Owner'),
                      },
                      {
                        title: $t(
                          'tenant_account_management.The_time_of_the_last_activation_of_the_tenant_account'
                        ),
                        value: tenantInfo.lastLaunchStartTime,
                      },
                      {
                        title: $t(
                          'tenant_account_management.The_time_of_the_copy_of_the_tenant_account_information'
                        ),
                        value: tenantInfo.lastCopyTime,
                      },
                      {
                        title: $t(
                          'tenant_account_management.The_time_of_the_last_login_of_the_tenant_account'
                        ),
                        value: tenantInfo.lastLoginTime,
                      },
                    ]"
                    :key="index"
                  >
                    <span
                      style="display: inline-block; margin-right: 10px; text-align: left"
                      >{{ item.title }}</span
                    >
                    <span style="text-align: left">{{
                      item.value || $t("tenant_account_management.Never")
                    }}</span>
                  </li>
                </ul>
              </div>

              <el-button class="close-btn" @click="closeTenantManagement" type="danger">{{
                $t("tenant_account_management.Confirmation_to_close_the_Tenant_Account")
              }}</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 關閉住客賬號提示 -->
    <div
      v-if="isShowCloseBox"
      class="close-box"
      style="
        position: fixed;
        padding: 20px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        box-shadow: 0 0 3px 3px rgba(101, 99, 99, 0.5);
      "
    >
      <div style="text-align: right">
        <el-icon @click="isShowCloseBox = false">
          <Close />
        </el-icon>
      </div>
      <h4>{{ $t("tenant_account_management.Close_account") }}</h4>
      <p>{{ $t("tenant_account_management.Once_the_account_is_closed") }}</p>
      <el-checkbox
        v-model="isAgreeClose"
        :label="
          $t('tenant_account_management.I_understand_and_agree_to_the_above_arrangement')
        "
      />
      <div class="button flex-row space-between">
        <el-button type="info" @click="isShowCloseBox = false">{{
          $t("tenant_account_management.Return")
        }}</el-button>
        <el-button
          @click="clickTenantLaunch('N')"
          type="primary"
          :disabled="!isAgreeClose"
          >{{ $t("tenant_account_management.Confirm") }}</el-button
        >
      </div>
    </div>
    <!--  -->
    <CopyTenantInfo
      v-if="showCopyTenantInfo"
      @hideTenantModal="showCopyTenantInfo = false"
      :copy_tenant_info="copy_tenant_info"
    ></CopyTenantInfo>
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
import CopyTenantInfo from "./copyTenantInfo.vue";
export default {
  components: {
    CopyTenantInfo,
  },
  setup(props, ctx) {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, refs } = getCurrentInstance();
    let data = reactive({
      loading: false,
      fairview_park_lang: "",
      tenantInfo: null,
      name: "",
      password: "",
      isAgreeClose: false, //是否同意關閉
      isAgreeOpen: false, //是否同意開啟
      isShowCloseBox: false,
      showPassword: false, //是否顯示密碼
      showCopyTenantInfo: false, //是否顯示CopyTenantInfo組件
      copy_tenant_info: null, //待複製賬號密碼
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const store = useStore();
    const router = useRouter();
    //
    const closeModel = () => {
      ctx.emit("hideTenantModal", false);
    };
    const closeTenantManagement = () => {
      data.isShowCloseBox = true;
    };
    //業主查看住客情況
    const selectTenantStatus = async () => {
      data.loading = true;
      try {
        const res = await proxy.$http.selectTenantStatus({
          id: JSON.parse(localStorage.getItem("login-info")).id,
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          if (res.data.data.launchType === "Y") {
            data.tenantInfo = res.data.data;
            data.tenantInfo.status = true;
          } else if (res.data.data.launchType === "N") {
            data.tenantInfo = res.data.data;
            data.tenantInfo.status = false;
          }
        } else if (res.data.status === 501) {
          closeModel();
          ElMessage({
            message: res.data.msg,
            type: "warning",
          });
        } else {
          ElMessage({
            message: res.data.msg,
            type: "warning",
          });
        }
        data.loading = false;
      } catch (error) {
        data.loading = false;
      }
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
          if (type === "Y") {
            selectTenantStatus();
          } else if (type === "N") {
            data.loading = false;
            data.isShowCloseBox = false;
            closeModel();
          } else if (type === "C") {
            data.loading = false;
          }
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
    // 使用插件
    const copyTenantInfo = async () => {
      data.showCopyTenantInfo = true;
      data.copy_tenant_info = `${proxy.$t(
        "tenant_account_management.You_are_now_being_invite_to_log_in"
      )}\n${proxy.$t(
        "tenant_account_management.Website"
      )}: http://www.fairviewpark.hk\n${proxy.$t(
        "tenant_account_management.tenant_Login_Name"
      )}: ${data.tenantInfo.memberLogin}\n${proxy.$t(
        "tenant_account_management.Login_password"
      )}: ${data.tenantInfo.password}\n${proxy.$t(
        "tenant_account_management.Invitation_time"
      )}: ${new Date().getFullYear()}${data.fairview_park_lang === "en_us" ? "-" : "年"}${
        new Date().getMonth() + 1 > 9
          ? new Date().getMonth() + 1
          : "0" + (new Date().getMonth() + 1)
      }${data.fairview_park_lang === "en_us" ? "-" : "月"}${
        new Date().getDate() > 9 ? new Date().getDate() : "0" + new Date().getDate()
      }${data.fairview_park_lang === "en_us" ? "" : "日"} ${
        new Date().getHours() > 9 ? new Date().getHours() : "0" + new Date().getHours()
      }:${
        new Date().getMinutes() > 9
          ? new Date().getMinutes()
          : "0" + new Date().getMinutes()
      }:${
        new Date().getSeconds() > 9
          ? new Date().getSeconds()
          : "0" + new Date().getSeconds()
      }`;
    };
    onMounted(() => {
      selectTenantStatus();
    });
    return {
      ...toRefs(data),
      closeModel,
      closeTenantManagement,
      selectTenantStatus,
      clickTenantLaunch,
      copyTenantInfo,
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
        h2 {
          font-style: normal;
          margin-bottom: 5px;
          font-size: 38px;
          line-height: 65px;
          color: #2fa94e;
        }
        .open-tip {
          font-size: 18px;
          @{deep} ul {
            padding-left: 20px;
            li {
              list-style: decimal;
            }
          }
        }
        .open-btn {
          background-color: var(--mainColor2);
          border-color: var(--mainColor2);
          margin: 0px auto 30px;
          font-size: 18px;
          border-radius: 20px;
        }

        .close-btn {
          background-color: var(--mainColor4);
          border-color: var(--mainColor4);
          font-size: 18px;
          border-radius: 20px;
          &:hover {
            opacity: 0.8;
          }
        }

        .name,
        .password {
          margin: 0 auto 10px;
          text-align: center;

          span {
            display: inline-block;

            &:first-child {
              margin-right: 5px;
              color: #07522b;
            }

            &:last-child {
              color: #4a4a4a;
            }
          }
          i {
            margin-left: 10px;
            font-size: 20px;
            line-height: 25px;
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

        button {
          margin-bottom: 30px;
        }
        .account-record {
          box-shadow: inset 0 0 2px 2px rgba(119, 118, 118, 0.5);
          border-radius: 6px;
          padding: 10px 5px;
          margin: 0 auto 30px;
          h5 {
            margin-bottom: 10px;
          }
          ul {
          text-align: center;
          padding: 0;
          margin: 0 auto 0px;
          width: 90%;
          li {
            display: flex;
            margin-bottom: 3px;
            align-items: center;
            span {
              color: #07522b;
              &:last-child {
                color: #4a4a4a;
              }
            }
          }
        }
        }
        
      }
    }
  }
}
.close-box {
  width: 500px;
  max-width: 90%;
  text-align: center;
  z-index: 2000;
  border-radius: 6px;

  i {
    font-size: 18px;
    cursor: pointer;
  }

  h4 {
    margin-bottom: 20px;
  }

  p {
    color: var(--mainColor4);
    margin-bottom: 20px;
  }

  .button {
    @{deep} .el-button {
      border-radius: 20px;
      padding: 0px 20px;
      &:last-child {
        background-color: var(--mainColor2);
        border: 1px solid var(--mainColor2);
      }
    }
  }
}
@{deep} .el-checkbox {
  margin-bottom: 20px;
  height: auto;

  .el-checkbox__input {
    input {
    }

    span {
      border-color: #606266;
    }
  }

  .el-checkbox__label {
    font-size: 18px;
    white-space: wrap;
    text-align: left;
  }
}

@{deep} .is-checked {
  .el-checkbox__input {
    input {
    }

    span {
      border-color: var(--mainColor3);
      background-color: var(--mainColor3);
    }
  }

  .el-checkbox__label {
    color: #606266;
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
          h2 {
            font-size: 26px;
          }
          .open-tip {
            font-size: 18px;
          }
          .open-btn {
            margin: 0px auto 30px;
            font-size: 18px;
          }

          .close-btn {
            font-size: 18px;
          }

          .name,
          .password {
            i {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              margin-left: 90px;
              font-size: 20px;
              top: 0;
              line-height: 25px;
            }
          }

          .account-record {
            padding: 10px;
            margin: 0 auto 30px;
            h5 {
              margin-bottom: 10px;
            }
            ul {
            width: 100%;
            li {
              margin-bottom: 3px;
             
              span {
                &:first-child {
                  flex: 1;
                }
                &:last-child {
                  width: 45%;
                }
              }
            }
          }
          }
          
        }
      }
    }
  }
}
</style>
