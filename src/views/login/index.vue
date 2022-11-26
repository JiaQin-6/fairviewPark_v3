<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-28 00:04:33
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-24 23:04:49
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
      <div class="modal-dialog modal-lg modal-dialog-centered">
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
            <h2>{{$t('Owner login')}}</h2>
            <h4>{{$t('Owner zone, please enter the name and password')}}</h4>
            <div>
              <ul>
                <li>
                  <input
                    :placeholder="$t('Login name')"
                    v-model="loginForm.loginName"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.loginName"
                    >{{$t('Please provide a valid login name.')}}</i
                  >
                </li>
                <li>
                  <input :placeholder="$t('Password')" v-model="loginForm.password" type="password" />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.password"
                    >{{$t('Please provide a valid password.')}}</i
                  >
                </li>
              </ul>
            </div>
            <div class="remember flex-row">
              <div class="flex-row" style="align-items: center">
                <!-- <input id="checkbox" type="checkbox" />
                <label for="checkbox">记住我</label> -->
              </div>

              <i data-bs-target="#forgetPasswor" data-bs-toggle="modal">{{$t('Forgot password')}}</i>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="login_error_tip.is_show">
                {{ login_error_tip.text }}
              </p>
              <button @click="login">{{$t('Sign in')}}</button>
              <a data-bs-target="#signUp" data-bs-toggle="modal">{{$t('Online user registration')}}</a>
            </div>
            <div class="declaration flex-row">
              <a href="">{{$t('Disclaimer')}}</a>
              <a href="">{{$t('Privacy Policy and Personal Data Collection Statement')}}</a>
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
      <div class="modal-dialog modal-lg modal-dialog-centered">
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
            <h2>{{$t('Online user registration')}}</h2>
            <div>
              <ul>
                <li>
                  <input
                    v-model="registerForm.oname"
                    :placeholder="$t('Owner Name (On Account Statement)')"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.oname"
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.hcode"
                    :placeholder="$t('Account Number (On Account Statement)')"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.hcode"
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.loginName"
                    :placeholder="$t('Login Name (Self Customize)')"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.loginName"
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.password"
                    :placeholder="$t('Login Password (Self Customize)')"
                    type="password"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.password"
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.nickname"
                    :placeholder="$t('Nickname(Optional)')"
                    type="text"
                  />
                  
                </li>
                <li v-if="fairview_park_lang ==='zh_tw'">
                  <input
                    v-model="registerForm.cnickname"
                    placeholder="中文暱稱 (選填) :"
                    type="text"
                  />
                 
                </li>
                <li>
                  <input
                    v-model="registerForm.email"
                    :placeholder="$t('Email Address')"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.email"
                    >{{ $t("This field is required.") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_email_correct && registerForm.email"
                    >{{$t('Please provide a valid email.')}}</i
                  >
                </li>
                <li>
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
              <button @click="register">{{$t('Sign up')}}</button>
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
      <div class="modal-dialog modal-lg modal-dialog-centered">
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
            <h2>{{ $t("Forgot password") }}</h2>
            <div>
              <ul>
                <li>
                  <input
                    v-model="forgotPasswordForm.loginName"
                    type="text"
                    :placeholder="$t('Please enter your login name')"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_null && !forgotPasswordForm.loginName
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                </li>
                <li>
                  <input
                    v-model="forgotPasswordForm.email"
                    type="text"
                    :placeholder="$t('Please enter your registration contact email')"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_null && !forgotPasswordForm.email
                    "
                    >{{ $t("This field is required.") }}</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="
                      forgot_password_error_tip.is_email_correct &&
                      forgotPasswordForm.email
                    "
                    >{{$t('Please provide a valid email.')}}</i
                  >
                </li>
              </ul>
            </div>
            <div class="button">
              <button @click="forgetPassword">{{ $t("Submit") }}</button>
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
import { ElMessageBox } from "element-plus";
export default {
  data() {
    return {};
  },
  setup(props, { emit }) {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive({
      fairview_park_lang: "",
      loginForm: {
        loginName: "",//david
        password: "",//kew12dMALS
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
          lang:data.fairview_park_lang
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
          lang: "",
        });
        if (res.data.status === 200) {
          document.getElementById("signUp").style.display = "none";
          document.getElementById("login").style.display = "block";
          data.register_error_tip.is_show = false;
          data.register_error_tip.text = "";
        } else {
          data.register_error_tip.is_show = true;
          data.register_error_tip.text = res.data.msg;
        }
      } catch (error) {
        console.log(error);
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
      try {
        const res = await proxy.$http.forgetPassword({
          loginName: data.forgotPasswordForm.loginName,
          email: data.forgotPasswordForm.email,
          lang: sessionStorage.getItem("fairview_park_lang"),
        });
        if (res.data.status === 200) {
          document.getElementById("close-forgetPasswor").click()
          ElMessageBox.alert(res.data.msg, "", {
            confirmButtonText: "OK",
          });
          document.getElementsByClassName("el-overlay")[0].style["background-color"] =
            "transparent";
        } else {
          data.login_error_tip.is_show = true;
          data.login_error_tip.text = res.data.msg;
        }
      } catch (error) {
        console.log(error);
      }
    };
    return {
      ...toRefs(data),
      login,
      register,
      forgetPassword,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.modal {
  .modal-dialog {
    .modal-body {
      text-align: center;
      padding: 0 20px 50px;
      h2 {
        font-style: normal;
        color: #2fa94e;
        margin-bottom: 50px;
        font-size: 38px;
        line-height: 65px;
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
          width: 80%;
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
        a {
          font-size: 15px;
          line-height: 21px;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>
