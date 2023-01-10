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
      <div
        class="modal-dialog modal-lg modal-dialog-centered"
        v-loading="loading"
      >
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
            <h2>{{ $t("Owner login") }}</h2>
            <!-- <h4>{{ $t("Owner zone, please enter the name and password") }}</h4> -->
            <div>
              <ul>
                <li>
                  <input
                    :placeholder="$t('Login name')"
                    v-model="loginForm.loginName"
                    type="text"
                    :class="{
                      error: login_error_tip.is_null && !loginForm.loginName,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.loginName"
                    >{{ $t("Please provide a valid login name.") }}</i
                  >
                </li>
                <li>
                  <input
                    :placeholder="$t('Password')"
                    v-model="loginForm.password"
                    type="password"
                    :class="{
                      error: login_error_tip.is_null && !loginForm.password,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.password"
                    >{{ $t("Please provide a valid password.") }}</i
                  >
                </li>
              </ul>
            </div>
            <div class="remember flex-row">
              <div class="flex-row" style="align-items: center">
                <!-- <input id="checkbox" type="checkbox" />
                <label for="checkbox">记住我</label> -->
              </div>

              <i data-bs-target="#forgetPasswor" data-bs-toggle="modal">{{
                $t("Forgot password")
              }}</i>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="login_error_tip.is_show">
                {{ login_error_tip.text }}
              </p>
              <button @click="login">{{ $t("Sign in") }}</button>
              <a data-bs-target="#signUp" data-bs-toggle="modal">{{
                $t("Online user registration")
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
                >{{ $t("Disclaimer") }}</a
              >
              <a
                target="_blank"
                :href="
                  fairview_park_lang === 'en_us'
                    ? 'https://fairviewpark.hk/file/privacyEN.html'
                    : 'https://fairviewpark.hk/file/privacyTC.html'
                "
                >{{
                  $t("Privacy Policy and Personal Data Collection Statement")
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
      <div
        class="modal-dialog modal-lg modal-dialog-centered"
        v-loading="loading"
      >
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
            <h2>{{ $t("Online user registration") }}</h2>
            <button
              style="
                background-color: var(--mainColor3);
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
                {{
                  fairview_park_lang === "en_us"
                    ? "How to Create Account"
                    : "網上註冊指引"
                }}</a
              >
            </button>
            <div>
              <ul>
                <li>
                  <p class="title">
                    {{ $t("Owner Name (On Account Statement)") }}
                  </p>
                  <input
                    v-model="registerForm.oname"
                    :placeholder="$t('Owner Name (On Account Statement)')"
                    type="text"
                    :class="{
                      error: register_error_tip.is_null && !registerForm.oname,
                    }"
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
                    {{ $t("Account Number (On Account Statement)") }}
                  </p>
                  <input
                    v-model="registerForm.hcode"
                    :placeholder="$t('Account Number (On Account Statement)')"
                    type="text"
                    :class="{
                      error: register_error_tip.is_null && !registerForm.hcode,
                    }"
                    @input="
                      registerForm.hcode = registerForm.hcode.toUpperCase()
                    "
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
                  <p class="title">{{ $t("Login Name (Self Customize)") }}</p>
                  <input
                    v-model="registerForm.loginName"
                    :placeholder="$t('Login Name (Self Customize)')"
                    type="text"
                    :class="{
                      error:
                        register_error_tip.is_null && !registerForm.loginName,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      register_error_tip.is_null && !registerForm.loginName
                    "
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Login ID Missing"
                        : "登入名稱不能為空"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("Login Password (Self Customize)") }}
                  </p>
                  <input
                    v-model="registerForm.password"
                    :placeholder="$t('Login Password (Self Customize)')"
                    type="password"
                    :class="{
                      error:
                        register_error_tip.is_null && !registerForm.password,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      register_error_tip.is_null && !registerForm.password
                    "
                    >{{
                      fairview_park_lang === "en_us"
                        ? "Password Missing"
                        : "密碼不能為空"
                    }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("Nickname(Optional)") }}</p>
                  <input
                    v-model="registerForm.nickname"
                    :placeholder="$t('Nickname(Optional)')"
                    type="text"
                  />
                </li>
                <li v-if="fairview_park_lang === 'zh_tw'">
                  <p class="title">中文暱稱 (選填) :</p>
                  <input
                    v-model="registerForm.cnickname"
                    placeholder="中文暱稱 (選填) :"
                    type="text"
                  />
                </li>
                <li>
                  <p class="title">{{ $t("Email Address") }}</p>
                  <input
                    v-model="registerForm.email"
                    :placeholder="$t('Email Address')"
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
                  <p class="title">{{ $t("Contact Number(Optional)") }}</p>
                  <input
                    v-model="registerForm.contactNo"
                    :placeholder="$t('Contact Number(Optional)')"
                    type="number"
                  />
                </li>
              </ul>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="register_error_tip.is_show">
                {{ register_error_tip.text }}
              </p>
              <button @click="register">{{ $t("Sign up") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- forget password modal -->
    <div
      class="modal fade"
      id="forgetPasswor"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div
        class="modal-dialog modal-lg modal-dialog-centered"
        v-loading="loading"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button
              id="close-forgetPasswor"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2>{{ $t("Forgot password") }}?</h2>
            <div>
              <ul>
                <li>
                  <p class="title">
                    {{
                      fairview_park_lang === "en_us" ? "Login Name" : "登入名稱"
                    }}
                  </p>
                  <input
                    v-model="forgotPasswordForm.loginName"
                    type="text"
                    :placeholder="$t('Please enter your login name')"
                    :class="{
                      error:
                        forgot_password_error_tip.is_null &&
                        !forgotPasswordForm.loginName,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_null &&
                      !forgotPasswordForm.loginName
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{
                      fairview_park_lang === "en_us"
                        ? "Contact Email"
                        : "聯絡電郵"
                    }}
                  </p>
                  <input
                    v-model="forgotPasswordForm.email"
                    type="text"
                    :placeholder="
                      $t('Please enter your registration contact email')
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
                      forgot_password_error_tip.is_null &&
                      !forgotPasswordForm.email
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_email_correct &&
                      forgotPasswordForm.email
                    "
                    >{{ $t("Please provide a valid email.") }}</i
                  >
                </li>
              </ul>
            </div>
            <div class="button">
              <p
                style="color: #fc0d1b"
                v-show="forgot_password_error_tip.is_show"
              >
                {{ forgot_password_error_tip.text }}
              </p>
              <button @click="forgetPassword">{{ $t("Submit") }}</button>
            </div>
            <p>
              {{
                fairview_park_lang === "en_us"
                  ? "If you forgot your Login Name and Contact Email, please contact us."
                  : "如閣下忘記了自設的登入名稱及聯絡電郵，請聯絡我們。"
              }}
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
      <div
        class="modal-dialog modal-lg modal-dialog-centered"
        v-loading="loading"
      >
        <!-- 輸入密碼驗證 -->
        <div class="verify" v-show="!showEditMemberModel">
          <div class="verify-password">
            <el-icon @click="closeModel">
              <CloseBold />
            </el-icon>
            <p class="title">
              {{
                fairview_park_lang === "en_us"
                  ? "To continue, first verify that it's you"
                  : "如要繼續操作，請驗證您的身分"
              }}
            </p>
            <input
              type="password"
              v-model="editMemberInfoForm.verifyPassword"
              :placeholder="
                fairview_park_lang === 'en_us'
                  ? 'Please enter password'
                  : '請輸入密碼'
              "
            />
            <i
              style="display: block; color: #fc0d1b; text-align: left"
              v-show="
                edit_member_info_error_tip.is_verify_password_null &&
                !editMemberInfoForm.verifyPassword
              "
              >{{ $t("This field is required.") }}</i
            >
            <i
              style="display: block; color: #fc0d1b; text-align: left"
              v-show="edit_member_info_error_tip.is_verify_password_error"
              >{{
                fairview_park_lang === "en_us"
                  ? "Incorrect password"
                  : "密碼不正確"
              }}</i
            >
            <el-button @click="verifyPassword">{{
              fairview_park_lang === "en_us" ? "Confirm" : "確認"
            }}</el-button>
          </div>
        </div>
        <div class="modal-content" v-show="showEditMemberModel">
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
            <h2>{{ $t("Edit member information") }}</h2>
            <div>
              <ul>
                <li>
                  <p class="title">
                    {{ $t("Owner Name (On Account Statement)") }}
                  </p>
                  <input
                    v-model="editMemberInfoForm.oname"
                    :placeholder="$t('Owner Name (On Account Statement)')"
                    type="text"
                    :class="{
                      error:
                        edit_member_info_error_tip.is_null &&
                        !editMemberInfoForm.oname,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null &&
                      !editMemberInfoForm.oname
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("Account Number (On Account Statement)") }}
                  </p>
                  <input
                    v-model="editMemberInfoForm.hcode"
                    :placeholder="$t('Account Number (On Account Statement)')"
                    type="text"
                    disabled
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null &&
                      !editMemberInfoForm.hcode
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("Login Name (Self Customize)") }}</p>
                  <input
                    v-model="editMemberInfoForm.loginName"
                    :placeholder="$t('Login Name (Self Customize)')"
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
                      edit_member_info_error_tip.is_null &&
                      !editMemberInfoForm.loginName
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("New Password") }}
                  </p>
                  <input
                    v-model="editMemberInfoForm.password"
                    :placeholder="$t('New Password')"
                    type="password"
                    :class="{
                      error:
                        edit_member_info_error_tip.is_null &&
                        !editMemberInfoForm.password,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null &&
                      !editMemberInfoForm.password
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <p class="title">
                    {{ $t("Confirm New Password") }}
                  </p>
                  <input
                    v-model="editMemberInfoForm.confirmPassword"
                    :placeholder="$t('Confirm New Password')"
                    type="password"
                    :class="{
                      error:
                        edit_member_info_error_tip.is_null &&
                        !editMemberInfoForm.confirmPassword,
                    }"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_null &&
                      !editMemberInfoForm.confirmPassword
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("Nickname(Optional)") }}</p>
                  <input
                    v-model="editMemberInfoForm.nickname"
                    :placeholder="$t('Nickname(Optional)')"
                    type="text"
                  />
                </li>
                <li v-if="fairview_park_lang === 'zh_tw'">
                  <p class="title">中文暱稱 (選填) :</p>
                  <input
                    v-model="editMemberInfoForm.cnickname"
                    placeholder="中文暱稱 (選填) :"
                    type="text"
                  />
                </li>
                <li>
                  <p class="title">{{ $t("Email Address") }}</p>
                  <input
                    v-model="editMemberInfoForm.email"
                    :placeholder="$t('Email Address')"
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
                      edit_member_info_error_tip.is_null &&
                      !editMemberInfoForm.email
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      edit_member_info_error_tip.is_email_correct &&
                      editMemberInfoForm.email
                    "
                    >{{ $t("Please provide a valid email.") }}</i
                  >
                </li>
                <li>
                  <p class="title">{{ $t("Contact Number(Optional)") }}</p>
                  <input
                    v-model="editMemberInfoForm.contactNo"
                    :placeholder="$t('Contact Number(Optional)')"
                    type="number"
                  />
                </li>
              </ul>
            </div>
            <div class="button">
              <p
                style="color: #fc0d1b"
                v-show="edit_member_info_error_tip.is_show"
              >
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
import {
  ref,
  reactive,
  getCurrentInstance,
  toRefs,
  onMounted,
  provide,
} from "vue";
import { useStore } from "vuex";
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
      loginForm: {
        loginName: "", //david
        password: "", //yG1tRPL1x7
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
        oname: null,
        hcode: null,
        loginName: null,
        password: null,
        confirmPassword: null,
        nickname: null,
        cnickname: null,
        email: null,
        contactNo: null,
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
        is_email_correct: false,
        is_show: false,
        text: "",
      },
      showEditMemberModel: false,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const store = useStore();
    //登陸
    const login = async () => {
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
          sessionStorage.setItem(
            "login-user",
            JSON.stringify({
              ln: data.loginForm.loginName,
              pd: data.loginForm.password,
            })
          );
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
      const reg =
        /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
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
      const reg =
        /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (
        !data.forgotPasswordForm.loginName ||
        !data.forgotPasswordForm.email
      ) {
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
          document.getElementById("close-forgetPasswor").click();
          data.loading = false;
          ElMessage({
            message:
              data.fairview_park_lang === "en_us"
                ? "Email Sent Successful"
                : "郵件發送成功",
            type: "success",
          });
          document.getElementsByClassName("el-overlay")[0].style[
            "background-color"
          ] = "transparent";
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
    //
    const verifyPassword = () => {
      if (!data.editMemberInfoForm.verifyPassword) {
        //如果为空
        data.edit_member_info_error_tip.is_verify_password_null = true;
        return;
      } else if (
        sessionStorage.getItem("login-user") &&
        JSON.parse(sessionStorage.getItem("login-user")).pd !==
          data.editMemberInfoForm.verifyPassword
      ) {
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
      const reg =
        /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (
        !data.editMemberInfoForm.oname ||
        !data.editMemberInfoForm.loginName ||
        !data.editMemberInfoForm.password ||
        !data.editMemberInfoForm.email
      ) {
        data.edit_member_info_error_tip.is_null = true;
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
          password: data.editMemberInfoForm.password,
          nickname: data.editMemberInfoForm.nickname,
          cnickname: data.editMemberInfoForm.cnickname,
          email: data.editMemberInfoForm.email,
          contactNo: data.editMemberInfoForm.contactNo,
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          ElMessage({
            message:
              data.fairview_park_lang === "en_us"
                ? "Edit Successful"
                : "編輯成功",
            type: "success",
          });
          document.getElementById("close-edit-member").click();
          data.loading = false;
          data.edit_member_info_error_tip.is_show = false;
          data.edit_member_info_error_tip.text = "";
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
    onMounted(() => {
      var myModalEl = document.getElementById("editMemberInformation");
      myModalEl.addEventListener("show.bs.modal", function (event) {
        data.editMemberInfoForm.hcode = localStorage.getItem("login-info")
          ? JSON.parse(localStorage.getItem("login-info")).topic3
          : "";
        data.editMemberInfoForm.loginName = localStorage.getItem("login-info")
          ? JSON.parse(localStorage.getItem("login-info")).login
          : "";
        data.editMemberInfoForm.nickname = localStorage.getItem("login-info")
          ? JSON.parse(localStorage.getItem("login-info")).name
          : "";
        data.editMemberInfoForm.cnickname = localStorage.getItem("login-info")
          ? JSON.parse(localStorage.getItem("login-info")).cname
          : "";
        data.editMemberInfoForm.email = localStorage.getItem("login-info")
          ? JSON.parse(localStorage.getItem("login-info")).email
          : "";
        data.editMemberInfoForm.contactNo = localStorage.getItem("login-info")
          ? JSON.parse(localStorage.getItem("login-info")).contactNo
          : "";
      });
      myModalEl.addEventListener("hidden.bs.modal", (event) => {
        data.showEditMemberModel = false;
      });
    });
    return {
      ...toRefs(data),
      login,
      register,
      forgetPassword,
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
          margin: 0 auto 30px;
          align-items: center;
          justify-content: space-between;

          .title {
            color: var(--mainColor1);
            text-align: left;
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
          }
        }
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
    .error {
      border-color: rgb(222, 7, 28) !important;
      background-color: rgba(222, 7, 28, 0.1);
      color: rgb(222, 7, 28);

      &::-webkit-input-placeholder {
        color: rgb(222, 7, 28);
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
