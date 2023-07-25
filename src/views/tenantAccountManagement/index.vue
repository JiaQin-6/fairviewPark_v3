<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-28 00:04:33
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-09 18:36:26
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-show="isShowModal">
    <div
      class="modal fade"
      id="startUp"
      ref="startUp"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content" v-loading="loading">
          <div class="modal-header">
            <button
              id="close-start-up"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- 如果沒有住客信息 -->
            <h2>{{ $t("headed.Tenant_account_management") }}</h2>
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
              <button class="copy" @click.prevent="copyTenantInfo">
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
                $t("tenant_account_management.Turn_off_tenant_management")
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
export default {
  setup(props, { emit }) {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx, refs } = getCurrentInstance();
    let data = reactive({
      loading: false,
      fairview_park_lang: "",
      tenantInfo: null,
      name: "",
      password: "",
      isAgreeClose: false, //是否同意關閉
      isAgreeOpen: false, //是否同意開啟
      isShowCloseBox: false,
      isShowModal: false,
      showPassword: false, //是否顯示密碼
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const store = useStore();
    const router = useRouter();

    //
    const closeModel = () => {
      var button = document.getElementById("close-edit-tenant");
      button.click();
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
          data.isShowModal = true;
          if (res.data.data.launchType === "Y") {
            data.tenantInfo = res.data.data;
            data.tenantInfo.status = true;
          } else if (res.data.data.launchType === "N") {
            data.tenantInfo = res.data.data;
            data.tenantInfo.status = false;
          }
        } else if (res.data.status === 501) {
          document.getElementById("close-start-up").click();
          // data.isShowModal = false;
          // data.tenantInfo = null;
          // data.isShowCloseBox = false;
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
            document.getElementById("close-start-up").click();
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
    const copyTenantInfo = async () => {
      await clickTenantLaunch("C");
      const node = document.createElement("span");
      node.innerHTML = `${proxy.$t(
        "tenant_account_management.You_are_now_being_invite_to_log_in"
      )}<br/>${proxy.$t(
        "tenant_account_management.Website"
      )}: http://www.fairviewpark.hk<br/>${proxy.$t(
        "tenant_account_management.Login_Name"
      )}: ${data.tenantInfo.memberLogin}<br/>${proxy.$t(
        "tenant_account_management.Login_password"
      )}: ${data.tenantInfo.password}<br/>${proxy.$t(
        "tenant_account_management.Invitation_time"
      )}: ${new Date().getFullYear()}${data.fairview_park_lang === "en_us" ? "-" : "年"}${
        new Date().getMonth() + 1 > 9
          ? new Date().getMonth() + 1
          : "0" + (new Date().getMonth() + 1)
      }${data.fairview_park_lang === "en_us" ? "-" : "月"}${
        new Date().getDate() > 9 ? new Date().getDate() : "0" + new Date().getDate()
      }${
        data.fairview_park_lang === "en_us" ? "-" : "日"
      }&nbsp${new Date().toLocaleTimeString()}`;
      document.body.appendChild(node);
      const range = document.createRange();
      range.selectNode(node);
      const selection = window.getSelection();
      selection.empty();
      selection.addRange(range);
      document.execCommand("copy");
      selection.empty();
      range.detach();
      document.body.removeChild(node);
      ElMessage({
        message: proxy.$t("tenant_account_management.Copy_Successful"),
        type: "success",
      });
    };
    const startUp = ref();
    onMounted(() => {
      var startUpModal = document.getElementById("startUp");
      startUpModal.addEventListener("show.bs.modal", (event) => {
        selectTenantStatus();
      });
      console.log(startUp);
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

.modal {
  background-color: rgba(0, 0, 0, 0.5);

  .modal-dialog {
    .modal-header {
      border-bottom: 0;
    }

    .modal-body {
      text-align: center;
      padding: 0 20px 50px;

      h2 {
        font-style: normal;
        margin-bottom: 20px;
        font-size: 38px;
        line-height: 65px;
      }
      .open-tip {
        font-size: 18px;
        color: var(--mainColor3);
      }
      .open-btn {
        background-color: var(--mainColor3);
        border-color: var(--mainColor3);
        margin: 0px auto 30px;
        font-size: 18px;
      }

      .close-btn {
        background-color: var(--mainColor4);
        border-color: var(--mainColor4);
        font-size: 18px;
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
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-left: 110px;
          font-size: 20px;
          line-height: 25px;
        }
      }

      .copy {
        color: var(--mainColor2);
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 18px;
        padding: 0 10px;
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
      }
      ul {
        text-align: center;
        padding: 0;
        margin: 0 auto 0px;
        width: 90%;
        li {
          display: flex;
          margin-bottom: 5px;
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
    color: var(--mainColor3);
  }
}

@media (max-width: 991px) {
  .modal {
    .modal-dialog {
      .modal-body {
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
        .password {
          i {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            margin-left: 90px;
            font-size: 20px;
            top: 0;
            line-height: 20px;
          }
        }
        .account-record {
          padding: 10px;
          margin: 0 auto 30px;
          h5 {
            margin-bottom: 10px;
          }
        }
        ul {
          width: 100%;
          li {
            margin-bottom: 10px;
            span {
              &:first-child {
                flex: 1;
              }
              &:last-child {
                width: 30%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
