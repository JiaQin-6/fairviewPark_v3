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
    <div
      ref="editTenantInformation"
      class="modal fade"
      id="editTenantInformation"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <!-- 輸入密碼驗證 -->
        <div class="verify" v-show="!showEditTenantModel" v-loading="loading">
          <div class="verify-password">
            <el-icon @click="closeModel">
              <CloseBold />
            </el-icon>
            <p class="title">
              {{ $t("Edit_member_information.To_continue_first_verify_that_its_you") }}
            </p>
            <el-input
              type="password"
              v-model="editTenantInfoForm.verifyPassword"
              :placeholder="
                fairview_park_lang === 'en_us' ? 'Please enter password' : '請輸入密碼'
              "
              show-password
            />
            <i
              style="display: block; color: #fc0d1b; text-align: left"
              v-show="
                edit_member_info_error_tip.is_verify_password_null &&
                !editTenantInfoForm.verifyPassword
              "
              >{{ $t("forget_password.This_field_is_required") }}</i
            >
            <i
              style="display: block; color: #fc0d1b; text-align: left"
              v-show="edit_member_info_error_tip.is_verify_password_error"
              >{{
                fairview_park_lang === "en_us"
                  ? "Password incorrect. If you forgets the passwords, please contact either your Owner or Estate Management for reset your account."
                  : "密碼不正確。如忘記密碼，請通知業主或管理公司重置戶口。"
              }}</i
            >
            <el-button @click="verifyPassword">{{
              fairview_park_lang === "en_us" ? "Confirm" : "確認"
            }}</el-button>
          </div>
        </div>
        <!-- 编辑资料 -->
        <div class="modal-content" v-show="showEditTenantModel"  v-loading="loading">
          <div class="modal-header">
            <button
              id="close-edit-tenant-model"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2>{{ $t("Edit_member_information.Edit_member_information") }}</h2>
            <div>
              <ul>
                <li>
                  <p class="title">
                    {{ $t("Edit_member_information.Login_Name_tenant") }}
                  </p>
                  <input
                    v-model="editTenantInfoForm.loginName"
                    :placeholder="$t('Edit_member_information.Login_Name_tenant')"
                    type="text"
                    :class="{
                      error:
                        edit_member_info_error_tip.is_null &&
                        !editTenantInfoForm.loginName,
                    }"
                    disabled
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null && !editTenantInfoForm.loginName
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("Edit_member_information.New_Password") }}
                  </p>
                  <el-input
                    v-model="editTenantInfoForm.password"
                    :placeholder="$t('Edit_member_information.New_Password')"
                    type="password"
                    :class="{
                      error:
                        (edit_member_info_error_tip.is_password_null &&
                          !editTenantInfoForm.confirmPassword) ||
                        edit_member_info_error_tip.is_confirm_password_error_null,
                    }"
                    show-password
                  />

                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_password_null &&
                      !editTenantInfoForm.password
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="edit_member_info_error_tip.is_confirm_password_error_null"
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Confirm password does not match"
                        : "密碼不一致"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("Edit_member_information.Confirm_New_Password") }}
                  </p>
                  <el-input
                    v-model="editTenantInfoForm.confirmPassword"
                    :placeholder="$t('Edit_member_information.Confirm_New_Password')"
                    type="password"
                    :class="{
                      error:
                        (edit_member_info_error_tip.is_password_null &&
                          !editTenantInfoForm.confirmPassword) ||
                        edit_member_info_error_tip.is_confirm_password_error_null,
                    }"
                    show-password
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_password_null &&
                      !editTenantInfoForm.confirmPassword
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="edit_member_info_error_tip.is_confirm_password_error_null"
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Confirm password does not match"
                        : "密碼不一致"
                    }}</i
                  >
                </li>
                <li>
                  <p style="text-align: left;color:#fc0d1b">
                    {{
                      $t("Edit_member_information.If_the_Tenant_forgets_the_passwords")
                    }}
                  </p>
                </li>
                <!-- <li v-if="editTenantInfoForm.isAgreeReceiveLetter">
                  <p class="title">
                    {{
                      $t(
                        "Edit_member_information.Willing_to_receive_physical_mail_information"
                      )
                    }}
                  </p>
                  <el-radio-group
                    v-model="editTenantInfoForm.isAgreeReceiveLetter"
                    class="ml-4"
                  >
                    <el-radio label="Y" size="large">{{
                      fairview_park_lang === "en_us" ? "Yes" : "是"
                    }}</el-radio>
                    <el-radio label="N" size="large">{{
                      fairview_park_lang === "en_us" ? "No" : "否"
                    }}</el-radio>
                  </el-radio-group>
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null &&
                      !editTenantInfoForm.isAgreeReceiveLetter
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                </li> -->
              </ul>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="edit_member_info_error_tip.is_show">
                {{ edit_member_info_error_tip.text }}
              </p>
              <button @click="editMemberInfo">
                {{ fairview_park_lang === "en_us" ? "Update" : "更新" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, provide } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
export default {
  data() {
    return {};
  },
  setup(props, { emit }) {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive({
      loading: false,
      fairview_park_lang: "",

      editTenantInfoForm: {
        verifyPassword: null,
        verifyCode: null,
        loginName: null,
        password: null,
        confirmPassword: null,
        isAgreeReceiveLetter: "N",
      },
      edit_member_info_error_tip: {
        is_verify_password_null: false,
        is_verify_password_error: false,
        is_null: false,
        is_password_null: false,
        is_confirm_password_error_null: false,
        is_show: false,
        text: "",
      },
      showEditTenantModel: false,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const store = useStore();
    const router = useRouter();
    //编辑资料之前验证密码
    const verifyPassword = async () => {
      if (!data.editTenantInfoForm.verifyPassword) {
        //如果为空
        data.edit_member_info_error_tip.is_verify_password_null = true;
        return;
      } else if (!(await checkPassword())) {
        //如果密码不正确
        data.edit_member_info_error_tip.is_verify_password_error = true;
        return;
      } else {
        data.editTenantInfoForm.verifyPassword = "";
        data.showEditTenantModel = true;
      }
    };
    //修改用戶信息
    const editMemberInfo = async () => {
      data.edit_member_info_error_tip.is_verify_password_null = false;
      data.edit_member_info_error_tip.is_null = false;
      data.edit_member_info_error_tip.is_password_null = false;
      data.edit_member_info_error_tip.is_show = false;
      data.edit_member_info_error_tip.is_confirm_password_error_null = false;
      data.edit_member_info_error_tip.text = "";
      
      if(!data.editTenantInfoForm.password&&!data.editTenantInfoForm.confirmPassword){
        //如果沒填寫新密碼及確認新密碼就跳出
        closeModel()
        return;
      }else if (
        (data.editTenantInfoForm.password && !data.editTenantInfoForm.confirmPassword) ||
        (data.editTenantInfoForm.confirmPassword && !data.editTenantInfoForm.password)
      ) {
        data.edit_member_info_error_tip.is_password_null = true;
        return;
      } else if (
        data.editTenantInfoForm.password !== data.editTenantInfoForm.confirmPassword
      ) {
        data.edit_member_info_error_tip.is_confirm_password_error_null = true;
        return;
      } else {
        data.edit_member_info_error_tip.is_null = false;
      }
      data.loading = true;
      try {
        const res = await proxy.$http.editTenantMemberInfo({
          password: data.editTenantInfoForm.confirmPassword,
          verifyCode: data.editTenantInfoForm.verifyCode,
          typeList: data.editTenantInfoForm.isAgreeReceiveLetter?[
            {
              typeCode: "accept_email", //接受实体邮件固定传值（默认N）
              typeValue: data.editTenantInfoForm.isAgreeReceiveLetter, //Y是；N否
            },
          ]:[],
        });
        if (res.data.status === 200) {
          // localStorage.setItem("login-info", JSON.stringify(res.data.data));
          ElMessage({
            showClose: true,
            message:
              data.fairview_park_lang === "en_us"
                ? "Edit Successful, Please login again!"
                : "編輯成功,請從新登陸！",
            type: "success",
          });

          document.getElementById("close-edit-tenant-model").click();
          data.loading = false;
          data.edit_member_info_error_tip.is_show = false;
          data.edit_member_info_error_tip.text = "";
          localStorage.removeItem("login-info");
          store.commit("setLoginStatus", false);
          ctx.emit("showPopupBox");//是否顯示popup彈框
          router.push({
            path: "/",
            query: {
              lang: data.fairview_park_lang,
            },
          });
        } else {
          data.loading = false;
          data.edit_member_info_error_tip.is_show = true;
          data.edit_member_info_error_tip.text = res.data.msg;
        }
      } catch (error) {
        data.loading = false;
      }
    };
    //
    const closeModel = () => {
      data.edit_member_info_error_tip.is_verify_password_null = false;
      data.edit_member_info_error_tip.is_verify_password_error = false;
      var button = document.getElementById("close-edit-tenant-model");
      button.click();
    };
    //编辑之前检查密码是否正确
    const checkPassword = async () => {
          data.loading = true;
      try {
        const res = await proxy.$http.checkPassword({
          password: data.editTenantInfoForm.verifyPassword,
        });
        if (res.data.status === 200) {
          data.loading = false;
          data.editTenantInfoForm.verifyCode = res.data.data.randomNumber;
          return true;
        } else {
          data.loading = false;
          return false;
        }
      } catch (error) {
        data.loading = false;
        return false;
      }
    };
    onMounted(() => {
      var editTenantInformationModal = document.getElementById("editTenantInformation");
      editTenantInformationModal.addEventListener("show.bs.modal", function (event) {
        //如果是住客首次登陸，修改密碼不需要輸入密碼
        let strings = JSON.parse(localStorage.getItem("login-info")).jwt.split("."); //截取token，获取载体
        var userinfo = JSON.parse(
          decodeURIComponent(
            escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))
          )
        );
        console.log(userinfo);
        if (userinfo.verifyCode) {
          data.editTenantInfoForm.verifyCode = userinfo.verifyCode;
          data.editTenantInfoForm.verifyPassword = "";
          data.showEditTenantModel = true;
        }
        data.editTenantInfoForm.loginName = localStorage.getItem("login-info")
          ? JSON.parse(localStorage.getItem("login-info")).login
          : "";
      });
      //当隐藏编辑资料框的时候，清除输入数据,下次打开还是要先显示输入密码框
      editTenantInformationModal.addEventListener("hidden.bs.modal", (event) => {
        data.showEditTenantModel = false;
        for (const key in data.editTenantInfoForm) {
          data.editTenantInfoForm[key] = null;
        }
        //关闭提示
        for (const key in data.edit_member_info_error_tip) {
          if (key === "text") {
            data.edit_member_info_error_tip[key] = "";
          } else {
            data.edit_member_info_error_tip[key] = false;
          }
        }
      });
    });
    return {
      ...toRefs(data),
      editMemberInfo,
      closeModel,
      verifyPassword,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";

.modal {
  background-color: rgba(0, 0, 0, 0.5);

  .modal-dialog {
    .verify {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 370px;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.3rem;
      outline: 0;
      margin: 0 auto;

      .verify-password {
        position: relative;
        padding: 30px 20px;
        text-align: center;

        .el-icon {
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
          font-size: 20px;
        }

        p {
          margin-bottom: 20px;
          font-size: 18px;
        }

        @{deep} .el-input {
          height: 45px;
          line-height: 45px;

          .el-input__wrapper {
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.5);
            box-shadow: none;

            input {
              font-size: 18px;
              color: #000;
            }
          }
        }

        input {
          display: block;
          width: 100%;
          max-width: 400px;
          border: 1px solid rgba(0, 0, 0, 0.5);
          box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
          border-radius: 10px;
          height: 45px;
          line-height: 45px;
          padding-left: 10px;
          margin: 0 auto;
          margin-bottom: 10px;
          font-size: 18px;
        }

        @{deep} .el-button {
          background-color: var(--mainColor2);
          margin-top: 20px;
          height: 40px;
          padding: 0 30px;

          span {
            color: #fff;
            font-size: 18px;
          }
        }
      }
    }

    .modal-header {
      border-bottom: none;
    }

    .modal-body {
      text-align: center;
      padding: 0 20px 50px;

      h2 {
        font-style: normal;
        color: #2fa94e;
        margin-bottom: 20px;
        font-size: 38px;
        line-height: 65px;
      }

      button {
        margin-bottom: 30px;
      }

      h4 {
        color: #8fbc25;
        font-size: 24px;
        margin-bottom: 50px;
        line-height: 41px;
      }

      ul {
        text-align: center;
        padding: 0;
        max-width: 400px;
        margin: 0 auto;

        li {
          margin: 0 auto 20px;
          align-items: center;
          justify-content: space-between;

          .title {
            color: var(--mainColor1);
            text-align: left;
          }

          @{deep} .el-input {
            height: 45px;
            line-height: 45px;

            .el-input__wrapper {
              border-radius: 10px;
              border: 1px solid rgba(0, 0, 0, 0.5);
              box-shadow: none;

              input {
                font-size: 18px;
                color: #000;
              }
            }
          }
          @{deep} .el-radio-group {
            width: 100%;

            .el-radio {
              .el-radio__input {
                .el-radio__inner {
                  width: 18px;
                  height: 18px;
                }
              }

              .el-radio__label {
                font-size: 18px;
              }
            }

            .is-checked {
              .el-radio__input {
                .el-radio__inner {
                  background-color: #fff;
                  border: 1px solid var(--mainColor1);

                  &:after {
                    width: 13px;
                    height: 13px;
                    background-color: var(--mainColor1);
                  }
                }
              }

              .el-radio__label {
                color: var(--mainColor1);
              }
            }
          }
          input {
            width: 100%;
            max-width: 400px;
            border: 1px solid rgba(0, 0, 0, 0.5);
            box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
            border-radius: 10px;
            height: 45px;
            line-height: 45px;
            padding-left: 10px;
            font-size: 18px;
            color: #4a4a4a;
          }
        }
      }

      .button {
        margin-bottom: 30px;

        button {
          width: 100%;
          max-width: 400px;
          display: block;
          background: #558426;
          box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
          border-radius: 6px;
          border: none;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          color: #fff;
          margin: 0 auto 30px;
        }

        a {
          display: block;
          font-size: 18px;
          line-height: 23px;
          text-decoration-line: underline;
          color: #ffa41b;
          cursor: pointer;
        }
      }
    }

    @{deep} .error {
      border-color: rgb(222, 7, 28) !important;
      background-color: rgba(222, 7, 28, 0.1);
      color: rgb(222, 7, 28);

      &::-webkit-input-placeholder {
        color: rgb(222, 7, 28);
      }

      .el-input__wrapper {
        border-color: rgb(222, 7, 28) !important;
        background-color: rgba(222, 7, 28, 0.1);
        color: rgb(222, 7, 28);

        .el-input__inner {
          &::-webkit-input-placeholder {
            color: rgb(222, 7, 28);
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .modal {
    .modal-dialog {
      .modal-body {
        h2 {
          font-size: 26px;
        }

        h4 {
          font-size: 20px;
          margin-bottom: 30px;
        }

        ul {
          li {
            margin-bottom: 20px;
            @{deep} .el-radio-group {
              width: 100%;

              .el-radio {
                .el-radio__label {
                  font-size: 15px;
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
