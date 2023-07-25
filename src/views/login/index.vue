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
    <!-- login Modal -->
    <div
      class="modal fade"
      id="login"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" v-loading="loading">
        <div class="modal-content">
          <div class="modal-header">
            <button
              id="close-login"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2>{{ $t("login.Owner_login") }}</h2>
            <div>
              <ul>
                <li>
                  <input
                    :placeholder="$t('login.Login_name')"
                    v-model="loginForm.loginName"
                    type="text"
                    :class="{
                      error: login_error_tip.is_null && !loginForm.loginName,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.loginName"
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Please provide a valid login name."
                        : "請輸入正確的登陸名"
                    }}</i
                  >
                </li>
                <li>
                  <el-input
                    :placeholder="$t('login.Password')"
                    v-model="loginForm.password"
                    type="password"
                    :class="{
                      error: login_error_tip.is_null && !loginForm.password,
                    }"
                    show-password
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.password"
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Please provide a valid password."
                        : "請輸入正確的密碼"
                    }}</i
                  >
                </li>
              </ul>
            </div>
            <div class="remember flex-row">
              <div class="flex-row" style="align-items: center"></div>
              <i data-bs-target="#forgetPassword" data-bs-toggle="modal"
                >{{ $t("login.Forgot_password") }}?</i
              >
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="login_error_tip.is_show">
                {{ login_error_tip.text }}
              </p>
              <button @click="login">{{ $t("login.Sign_in") }}</button>
              <a data-bs-target="#signUp" data-bs-toggle="modal">{{
                $t("login.Online_user_registration")
              }}</a>
            </div>
            <div class="declaration flex-row">
              <a
                target="_blank"
                :href="
                  fairview_park_lang === 'en_us'
                    ? 'https://fairviewpark.hk/file/disclaimerEN.html'
                    : 'https://fairviewpark.hk/file/disclaimerTC.html'
                "
                >{{ $t("login.Disclaimer") }}</a
              >
              <a
                target="_blank"
                :href="
                  fairview_park_lang === 'en_us'
                    ? 'https://fairviewpark.hk/file/privacyEN.html'
                    : 'https://fairviewpark.hk/file/privacyTC.html'
                "
                >{{
                  $t("login.Privacy_Policy_and_Personal_Data_Collection_Statement")
                }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sign up modal -->
    <div
      class="modal fade"
      id="signUp"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" v-loading="loading">
        <div class="modal-content">
          <div class="modal-header">
            <button
              id="close-signUp"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2>{{ $t("sign_up.Online_user_registration") }}</h2>
            <button
              style="
                background-color: #b59962;
                color: #fff;
                padding: 5px 30px;
                margin-right: 20px;
                cursor: pointer;
                vertical-align: middle;
                border: none;
                border-radius: 50px;
              "
            >
              <a
                :href="
                  fairview_park_lang === 'en_us'
                    ? 'https://fairviewpark.hk/file/AccountCreateEN.html'
                    : 'https://fairviewpark.hk/file/AccountCreateTC.html'
                "
                target="_blank"
                style="text-decoration: none; color: #fff"
              >
                {{ $t("sign_up.How_to_Create_Account") }}</a
              >
            </button>
            <div>
              <ul>
                <li>
                  <p class="title">
                    {{ $t("sign_up.Owner_Name") }}
                  </p>
                  <input
                    v-model="registerForm.oname"
                    :placeholder="$t('sign_up.Same_as_the_owner_is_name')"
                    type="text"
                    :class="{
                      error: register_error_tip.is_null && !registerForm.oname,
                    }"
                    @input="registerForm.oname = registerForm.oname.toUpperCase()"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.oname"
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Owner Name Missing"
                        : "業主名稱不能為空"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("sign_up.Account_Number") }}
                  </p>
                  <input
                    v-model="registerForm.hcode"
                    :placeholder="$t('sign_up.A_BRS_100_must_be_filled')"
                    type="text"
                    :class="{
                      error: register_error_tip.is_null && !registerForm.hcode,
                    }"
                    @input="registerForm.hcode = registerForm.hcode.toUpperCase()"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.hcode"
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Account Number Missing"
                        : "客戶號碼不能為空"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("sign_up.Login_Name") }}</p>
                  <input
                    v-model="registerForm.loginName"
                    :placeholder="$t('sign_up.Login_Name')"
                    type="text"
                    :class="{
                      error: register_error_tip.is_null && !registerForm.loginName,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.loginName"
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Login ID Missing"
                        : "登入名稱不能為空"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("sign_up.Login_Password") }}
                  </p>
                  <el-input
                    v-model="registerForm.password"
                    :placeholder="$t('sign_up.Login_Password')"
                    type="password"
                    :class="{
                      error: register_error_tip.is_null && !registerForm.password,
                    }"
                    show-password
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.password"
                    >{{
                      fairview_park_lang === "en_us" ? "Password Missing" : "密碼不能為空"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("sign_up.Nickname") }}</p>
                  <input
                    v-model="registerForm.nickname"
                    :placeholder="$t('sign_up.Nickname')"
                    type="text"
                  />
                </li>
                <li v-if="fairview_park_lang === 'zh_tw'">
                  <p class="title">中文暱稱 (選填)</p>
                  <input
                    v-model="registerForm.cnickname"
                    placeholder="中文暱稱 (選填)"
                    type="text"
                  />
                </li>
                <li>
                  <p class="title">{{ $t("sign_up.Email_Address") }}</p>
                  <input
                    v-model="registerForm.email"
                    :placeholder="$t('sign_up.Email_Address')"
                    type="text"
                    :class="{
                      error:
                        (register_error_tip.is_null && !registerForm.email) ||
                        register_error_tip.is_email_correct,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      (register_error_tip.is_null && !registerForm.email) ||
                      register_error_tip.is_email_correct
                    "
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Email Address Missing"
                        : "電郵不能為空或格式錯誤"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("sign_up.Contact_Number") }}</p>
                  <input
                    v-model="registerForm.contactNo"
                    :placeholder="$t('sign_up.Contact_Number')"
                    @input="
                      registerForm.contactNo =
                        registerForm.contactNo.trim().length != 0
                          ? registerForm.contactNo.replace(/[^0-9]/g, '')
                          : ''
                    "
                  />
                </li>
              </ul>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="register_error_tip.is_show">
                {{ register_error_tip.text }}
              </p>
              <button @click="register">{{ $t("sign_up.Sign_up") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- forget password modal -->
    <div
      class="modal fade"
      id="forgetPassword"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" v-loading="loading">
        <div class="modal-content">
          <div class="modal-header">
            <button
              id="close-forgetPassword"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2>{{ $t("forget_password.Forgot_password") }}?</h2>
            <div>
              <ul>
                <li>
                  <p class="title">
                    {{ $t("forget_password.Login_Name") }}
                  </p>
                  <input
                    v-model="forgotPasswordForm.loginName"
                    type="text"
                    :placeholder="$t('forget_password.Please_enter_your_login_name')"
                    :class="{
                      error:
                        forgot_password_error_tip.is_null &&
                        !forgotPasswordForm.loginName,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_null && !forgotPasswordForm.loginName
                    "
                    >{{ $t("forget_password.This_field_is_required") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("forget_password.Contact_Email") }}
                  </p>
                  <input
                    v-model="forgotPasswordForm.email"
                    type="text"
                    :placeholder="
                      $t('forget_password.Please_enter_your_registration_contact_email')
                    "
                    :class="{
                      error:
                        (forgot_password_error_tip.is_null &&
                          !forgotPasswordForm.email) ||
                        forgot_password_error_tip.is_email_correct,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_null && !forgotPasswordForm.email
                    "
                    >{{ $t("forget_password.This_field_is_required") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_email_correct &&
                      forgotPasswordForm.email
                    "
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Please provide a valid email."
                        : "請輸入正確格式的郵件"
                    }}</i
                  >
                </li>
              </ul>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="forgot_password_error_tip.is_show">
                {{ forgot_password_error_tip.text }}
              </p>
              <button @click="forgetPassword">{{ $t("forget_password.Submit") }}</button>
            </div>
            <p>
              {{ $t("forget_password.If_you_forgot_your_Login_Name_and_Contact_Email")
              }}<span @click="toAboutsUs" style="cursor: pointer">{{
                $t("forget_password.contact_us")
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- edit member information -->
    <div
      ref="editMemberInformation"
      class="modal fade"
      id="editMemberInformation"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <!-- 輸入密碼驗證 -->
        <div
          class="verify"
          v-show="!showEditMemberModel"
          v-loading="verifyPasswordLoading"
        >
          <div class="verify-password">
            <el-icon @click="closeModel">
              <CloseBold />
            </el-icon>
            <p class="title">
              {{ $t("Edit_member_information.To_continue_first_verify_that_its_you") }}
            </p>
            <el-input
              type="password"
              v-model="editMemberInfoForm.verifyPassword"
              :placeholder="
                fairview_park_lang === 'en_us' ? 'Please enter password' : '請輸入密碼'
              "
              show-password
            />
            <i
              style="display: block; color: #fc0d1b; text-align: left"
              v-show="
                edit_member_info_error_tip.is_verify_password_null &&
                !editMemberInfoForm.verifyPassword
              "
              >{{ $t("forget_password.This_field_is_required") }}</i
            >
            <i
              style="display: block; color: #fc0d1b; text-align: left"
              v-show="edit_member_info_error_tip.is_verify_password_error"
              >{{
                fairview_park_lang === "en_us" ? "Incorrect password" : "密碼不正確"
              }}</i
            >
            <el-button @click="verifyPassword">{{
              fairview_park_lang === "en_us" ? "Confirm" : "確認"
            }}</el-button>
          </div>
        </div>
        <!-- 编辑资料 -->
        <div class="modal-content" v-show="showEditMemberModel" v-loading="loading">
          <div class="modal-header">
            <button
              id="close-edit-member"
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
                    {{ $t("Edit_member_information.Owner_Name") }}
                  </p>
                  <input
                    v-model="editMemberInfoForm.oname"
                    :placeholder="$t('Edit_member_information.Same_as_the_owner_is_name')"
                    type="text"
                    :class="{
                      error:
                        edit_member_info_error_tip.is_null && !editMemberInfoForm.oname,
                    }"
                    @input="
                      editMemberInfoForm.oname = editMemberInfoForm.oname.toUpperCase()
                    "
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null && !editMemberInfoForm.oname
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("Edit_member_information.Account_Number") }}
                  </p>
                  <input
                    v-model="editMemberInfoForm.hcode"
                    :placeholder="$t('Edit_member_information.A_BRS_100_must_be_filled')"
                    type="text"
                    disabled
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null && !editMemberInfoForm.hcode
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("Edit_member_information.Login_Name") }}</p>
                  <input
                    v-model="editMemberInfoForm.loginName"
                    :placeholder="$t('Edit_member_information.Login_Name')"
                    type="text"
                    :class="{
                      error:
                        edit_member_info_error_tip.is_null &&
                        !editMemberInfoForm.loginName,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null && !editMemberInfoForm.loginName
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("Edit_member_information.New_Password") }}
                  </p>
                  <el-input
                    v-model="editMemberInfoForm.password"
                    :placeholder="$t('Edit_member_information.New_Password')"
                    type="password"
                    :class="{
                      error:
                        (edit_member_info_error_tip.is_password_null &&
                          !editMemberInfoForm.confirmPassword) ||
                        edit_member_info_error_tip.is_confirm_password_error_null,
                    }"
                    show-password
                  />

                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_password_null &&
                      !editMemberInfoForm.password
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
                    v-model="editMemberInfoForm.confirmPassword"
                    :placeholder="$t('Edit_member_information.Confirm_New_Password')"
                    type="password"
                    :class="{
                      error:
                        (edit_member_info_error_tip.is_password_null &&
                          !editMemberInfoForm.confirmPassword) ||
                        edit_member_info_error_tip.is_confirm_password_error_null,
                    }"
                    show-password
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_password_null &&
                      !editMemberInfoForm.confirmPassword
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
                  <p class="title">{{ $t("Edit_member_information.Nickname") }}</p>
                  <input
                    v-model="editMemberInfoForm.nickname"
                    :placeholder="$t('Edit_member_information.Nickname')"
                    type="text"
                  />
                </li>
                <li v-if="fairview_park_lang === 'zh_tw'">
                  <p class="title">中文暱稱 (選填)</p>
                  <input
                    v-model="editMemberInfoForm.cnickname"
                    placeholder="中文暱稱 (選填)"
                    type="text"
                  />
                </li>
                <li>
                  <p class="title">{{ $t("Edit_member_information.Email_Address") }}</p>
                  <input
                    v-model="editMemberInfoForm.email"
                    :placeholder="$t('Edit_member_information.Email_Address')"
                    type="text"
                    :class="{
                      error:
                        (edit_member_info_error_tip.is_null &&
                          !editMemberInfoForm.email) ||
                        edit_member_info_error_tip.is_email_correct,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null && !editMemberInfoForm.email
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_email_correct &&
                      editMemberInfoForm.email
                    "
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Please provide a valid email."
                        : "請輸入正確格式的郵件"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("Edit_member_information.Contact_Number") }}</p>
                  <input
                    v-model="editMemberInfoForm.contactNo"
                    :placeholder="$t('Edit_member_information.Contact_Number')"
                    @input="
                      editMemberInfoForm.contactNo =
                        editMemberInfoForm.contactNo.trim().length != 0
                          ? editMemberInfoForm.contactNo.replace(/[^0-9]/g, '')
                          : ''
                    "
                  />
                </li>
                <li>
                  <p class="title">
                    {{ $t("sign_up.Willing_to_authorize_the_management_office") }}
                  </p>
                  <el-radio-group
                    v-model="editMemberInfoForm.isAgreeAuthorization"
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
                      !editMemberInfoForm.isAgreeAuthorization
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("sign_up.Willing_to_receive_physical_mail_information") }}
                  </p>
                  <el-radio-group
                    v-model="editMemberInfoForm.isAgreeReceiveLetter"
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
                      !editMemberInfoForm.isAgreeReceiveLetter
                    "
                    >{{ $t("Edit_member_information.This_field_is_required") }}</i
                  >
                </li>
              </ul>
            </div>
            <p class="update-time" v-if="editMemberInfoForm.updateTime">
              {{ $t("sign_up.Last_updated_data_time") }}:{{
                editMemberInfoForm.updateTime
              }}
            </p>
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
      verifyPasswordLoading: false,
      fairview_park_lang: "",
      loginForm: {
        loginName: null, //david
        password: null, //yG1tRPL1x7
      },
      registerForm: {
        oname: null,
        hcode: null,
        loginName: null,
        password: null,
        nickname: null,
        cnickname: null,
        email: null,
        contactNo: null,
      },
      forgotPasswordForm: {
        loginName: "",
        email: "",
      },
      editMemberInfoForm: {
        verifyPassword: null,
        verifyCode: null,
        oname: null,
        hcode: null,
        loginName: null,
        password: null,
        confirmPassword: null,
        nickname: null,
        cnickname: null,
        email: null,
        contactNo: null,
        isAgreeAuthorization: 'N',
        isAgreeReceiveLetter: null,
        updateTime: null,
      },
      login_error_tip: {
        is_null: false,
        is_show: false,
        text: "",
      },
      register_error_tip: {
        is_null: false,
        is_email_correct: false,
        is_show: false,
        text: "",
      },
      forgot_password_error_tip: {
        is_null: false,
        is_email_correct: false,
        is_show: false,
        text: "",
      },
      edit_member_info_error_tip: {
        is_verify_password_null: false,
        is_verify_password_error: false,
        is_null: false,
        is_password_null: false,
        is_confirm_password_error_null: false,
        is_email_correct: false,
        is_show: false,
        text: "",
      },
      showEditMemberModel: false,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const store = useStore();
    const router = useRouter();
    //登陸
    const login = async () => {
      data.login_error_tip.is_show = false;
      if (!data.loginForm.loginName || !data.loginForm.password) {
        data.login_error_tip.is_null = true;
        return;
      } else {
        data.login_error_tip.is_null = false;
      }
      try {
        const res = await proxy.$http.login({
          loginName: data.loginForm.loginName,
          password: data.loginForm.password,
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          document.getElementById("close-login").click();
          localStorage.setItem("login-info", JSON.stringify(res.data.data));
          store.commit("setLoginStatus", true);
        } else {
          data.login_error_tip.is_show = true;
          data.login_error_tip.text = res.data.msg;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //注册
    const register = async () => {
      const reg = /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (
        !data.registerForm.oname ||
        !data.registerForm.hcode ||
        !data.registerForm.loginName ||
        !data.registerForm.password ||
        !data.registerForm.email
      ) {
        data.register_error_tip.is_null = true;
        return;
      } else if (!reg.test(data.registerForm.email)) {
        data.register_error_tip.is_email_correct = true;
        return;
      } else {
        data.register_error_tip.is_null = false;
        data.register_error_tip.is_email_correct = false;
      }
      data.loading = true;
      try {
        const res = await proxy.$http.register({
          oname: data.registerForm.oname,
          hcode: data.registerForm.hcode,
          loginName: data.registerForm.loginName,
          password: data.registerForm.password,
          nickname: data.registerForm.nickname,
          cnickname: data.registerForm.cnickname,
          email: data.registerForm.email,
          contactNo: data.registerForm.contactNo,
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.loading = false;
          data.register_error_tip.is_show = false;
          data.register_error_tip.text = "";
          //如果注册成功了，帮用户自动登录
          try {
            const res = await proxy.$http.login({
              loginName: data.registerForm.loginName,
              password: data.registerForm.password,
              lang: data.fairview_park_lang,
            });
            if (res.data.status === 200) {
              ElMessage({
                showClose: true,
                message:
                  data.fairview_park_lang === "en_us"
                    ? "Register Successful"
                    : "註冊成功",
                type: "success",
              });
              document.getElementById("close-login").click();
              document.getElementById("close-signUp").click();
              localStorage.setItem("login-info", JSON.stringify(res.data.data));
              store.commit("setLoginStatus", true);
            } else {
              data.login_error_tip.is_show = true;
              data.login_error_tip.text = res.data.msg;
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          data.loading = false;
          data.register_error_tip.is_show = true;
          data.register_error_tip.text = res.data.msg;
        }
      } catch (error) {
        data.loading = false;
      }
    };
    //忘記密碼
    const forgetPassword = async () => {
      const reg = /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!data.forgotPasswordForm.loginName || !data.forgotPasswordForm.email) {
        data.forgot_password_error_tip.is_null = true;
        return;
      } else if (!reg.test(data.forgotPasswordForm.email)) {
        data.forgot_password_error_tip.is_email_correct = true;
        return;
      } else {
        data.forgot_password_error_tip.is_null = false;
        data.forgot_password_error_tip.is_email_correct = false;
      }
      data.loading = true;
      try {
        const res = await proxy.$http.forgetPassword({
          loginName: data.forgotPasswordForm.loginName,
          email: data.forgotPasswordForm.email,
          lang: sessionStorage.getItem("fairview_park_lang"),
        });
        if (res.data.status === 200) {
          document.getElementById("close-forgetPassword").click();
          data.loading = false;
          ElMessage({
            showClose: true,
            message:
              data.fairview_park_lang === "en_us"
                ? "Email Sent Successful"
                : "郵件發送成功",
            type: "success",
          });
          document.getElementsByClassName("el-overlay")[0].style["background-color"] =
            "transparent";
        } else {
          data.loading = false;
          data.forgot_password_error_tip.is_show = true;
          data.forgot_password_error_tip.text = res.data.msg;
        }
      } catch (error) {
        data.loading = false;
        console.log(error);
      }
    };
    //编辑资料之前验证密码
    const verifyPassword = async () => {
      if (!data.editMemberInfoForm.verifyPassword) {
        //如果为空
        data.edit_member_info_error_tip.is_verify_password_null = true;
        return;
      } else if (!(await checkPassword(data.editMemberInfoForm.verifyPassword))) {
        //如果密码不正确
        data.edit_member_info_error_tip.is_verify_password_error = true;
        return;
      } else {
        data.editMemberInfoForm.verifyPassword = "";
        data.showEditMemberModel = true;
      }
    };
    //修改用戶信息
    const editMemberInfo = async () => {
      for (const key in data.edit_member_info_error_tip) {
        if (key === "text") {
          data.edit_member_info_error_tip[key] = "";
        } else {
          data.edit_member_info_error_tip[key] = false;
        }
      }
      const reg = /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

      if (
        !data.editMemberInfoForm.oname ||
        !data.editMemberInfoForm.loginName ||
        !data.editMemberInfoForm.email ||
        !data.editMemberInfoForm.isAgreeAuthorization ||
        !data.editMemberInfoForm.isAgreeReceiveLetter
      ) {
        data.edit_member_info_error_tip.is_null = true;
        return;
      } else if (
        (data.editMemberInfoForm.password && !data.editMemberInfoForm.confirmPassword) ||
        (data.editMemberInfoForm.confirmPassword && !data.editMemberInfoForm.password)
      ) {
        data.edit_member_info_error_tip.is_password_null = true;
        return;
      } else if (
        data.editMemberInfoForm.password !== data.editMemberInfoForm.confirmPassword
      ) {
        data.edit_member_info_error_tip.is_confirm_password_error_null = true;
        return;
      } else if (!reg.test(data.editMemberInfoForm.email)) {
        data.edit_member_info_error_tip.is_email_correct = true;
        return;
      } else {
        data.edit_member_info_error_tip.is_null = false;
        data.edit_member_info_error_tip.is_email_correct = false;
      }
      data.loading = true;

      try {
        const res = await proxy.$http.editMemberInfo({
          id: JSON.parse(localStorage.getItem("login-info")).id,
          oname: data.editMemberInfoForm.oname,
          hcode: data.editMemberInfoForm.hcode,
          loginName: data.editMemberInfoForm.loginName,
          password: data.editMemberInfoForm.confirmPassword,
          nickname: data.editMemberInfoForm.nickname,
          cnickname: data.editMemberInfoForm.cnickname,
          email: data.editMemberInfoForm.email,
          contactNo: data.editMemberInfoForm.contactNo,
          lang: data.fairview_park_lang,
          typeList: [
            {
              typeCode: "auth_start", //授权处理固定传值（默认Y）
              typeValue: data.editMemberInfoForm.isAgreeAuthorization, //Y是；N否
            },
            {
              typeCode: "accept_email", //接受实体邮件固定传值（默认N）
              typeValue: data.editMemberInfoForm.isAgreeReceiveLetter, //Y是；N否
            },
          ],
          verifyCode: data.editMemberInfoForm.verifyCode,
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

          document.getElementById("close-edit-member").click();
          data.loading = false;
          data.edit_member_info_error_tip.is_show = false;
          data.edit_member_info_error_tip.text = "";
          localStorage.removeItem("login-info");
          store.commit("setLoginStatus", false);
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
      var button = document.getElementById("close-edit-member");
      button.click();
    };
    //去联系我们页面
    const toAboutsUs = () => {
      document.getElementById("close-forgetPassword").click();
      router.push({
        path: "/about-us",
        query: {
          lang: data.fairview_park_lang,
        },
      });
    };
    const checkPassword = async (password) => {
      data.verifyPasswordLoading = true;
      try {
        const res = await proxy.$http.checkPassword({
          password: password,
        });
        if (res.data.status === 200) {
          data.verifyPasswordLoading = false;
          data.editMemberInfoForm.verifyCode = res.data.data;
          return true;
        } else {
          data.verifyPasswordLoading = false;
          return false;
        }
      } catch (error) {
        data.verifyPasswordLoading = false;
        return false;
      }
    };
    onMounted(() => {
      var editMemberInformationModal = document.getElementById("editMemberInformation");
      editMemberInformationModal.addEventListener("show.bs.modal", function (event) {
        let strings = JSON.parse(localStorage.getItem("login-info")).jwt.split("."); //截取token，获取载体
        var userinfo = JSON.parse(
          decodeURIComponent(
            escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))
          )
        );
        data.editMemberInfoForm.hcode = userinfo.topic3 || "";
        data.editMemberInfoForm.loginName = userinfo.login || "";
        data.editMemberInfoForm.nickname = userinfo.name || "";
        data.editMemberInfoForm.cnickname = userinfo.cname || "";
        data.editMemberInfoForm.email = userinfo.email || "";
        data.editMemberInfoForm.contactNo = userinfo.contactNo || "";
        data.editMemberInfoForm.isAgreeAuthorization = userinfo.authList
          ? userinfo.authList.filter((item) => {
              return item.typeCode == "auth_start";
            })[0].typeValue
          : null;
        data.editMemberInfoForm.isAgreeReceiveLetter = userinfo.authList
          ? userinfo.authList.filter((item) => {
              return item.typeCode == "accept_email";
            })[0].typeValue
          : null;
        data.editMemberInfoForm.updateTime = userinfo.editInfoTime || "";
      });
      //当隐藏编辑资料框的时候，清除输入数据,下次打开还是要先显示输入密码框
      editMemberInformationModal.addEventListener("hidden.bs.modal", (event) => {
        data.showEditMemberModel = false;
        for (const key in data.editMemberInfoForm) {
          data.editMemberInfoForm[key] = null;
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
      //当隐藏登录框清除输入数据
      var loginModal = document.getElementById("login");
      loginModal.addEventListener("hidden.bs.modal", (event) => {
        data.loginForm.loginName = "";
        data.loginForm.password = "";
        //关闭提示
        data.login_error_tip.is_null = false;
        data.login_error_tip.is_show = false;
        data.login_error_tip.text = "";
      });
      //当隐藏注册框清除输入数据
      var signUpModal = document.getElementById("signUp");
      signUpModal.addEventListener("hidden.bs.modal", (event) => {
        for (const key in data.registerForm) {
          data.registerForm[key] = null;
        }
        //关闭提示
        for (const key in data.register_error_tip) {
          if (key === "text") {
            data.register_error_tip[key] = "";
          } else {
            data.register_error_tip[key] = false;
          }
        }
      });
      //当隐藏忘记密码框清除输入数据
      var forgetPasswordModal = document.getElementById("forgetPassword");
      forgetPasswordModal.addEventListener("hidden.bs.modal", (event) => {
        for (const key in data.forgotPasswordForm) {
          data.forgotPasswordForm[key] = null;
        }
        //关闭提示
        for (const key in data.forgot_password_error_tip) {
          if (key === "text") {
            data.forgot_password_error_tip[key] = "";
          } else {
            data.forgot_password_error_tip[key] = false;
          }
        }
      });
    });
    return {
      ...toRefs(data),
      login,
      register,
      forgetPassword,
      editMemberInfo,
      closeModel,
      toAboutsUs,
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

      .update-time {
        margin-bottom: 10px;
        color: var(--mainColor2);
      }

      .remember {
        justify-content: space-between;
        margin: 0 auto 30px;
        max-width: 400px;

        input {
          margin-right: 2px;
          width: 18px;
          height: 18px;
        }

        label {
          font-size: 18px;
          line-height: 23px;
          color: #808080;
        }

        i {
          font-size: 18px;
          line-height: 23px;
          color: #808080;
          cursor: pointer;
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

      .declaration {
        max-width: 400px;
        justify-content: space-between;
        margin: 0 auto;
        text-align: right;

        a {
          font-size: 15px;
          line-height: 21px;
          color: rgba(0, 0, 0, 0.5);
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

        .remember {
          i {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
