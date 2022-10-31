<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-28 00:04:33
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-10-10 23:44:56
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
            <h2>登入</h2>
            <h4>業主專區,請輸入名稱及密碼</h4>
            <div>
              <ul>
                <li>
                  <input
                    placeholder="登入名称"
                    v-model="loginForm.loginName"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.loginName"
                    >Please provide a valid name.</i
                  >
                </li>
                <li>
                  <input placeholder="密码" v-model="loginForm.password" type="text" />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="login_error_tip.is_null && !loginForm.password"
                    >Please provide a valid password.</i
                  >
                </li>
              </ul>
            </div>
            <div class="remember flex-row">
              <div class="flex-row" style="align-items: center">
                <input id="checkbox" type="checkbox" />
                <label for="checkbox">记住我</label>
              </div>

              <i data-bs-target="#forgetPasswor" data-bs-toggle="modal">忘记密码</i>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="login_error_tip.is_show">
                {{ login_error_tip.text }}
              </p>
              <button @click="login">登入</button>
              <a data-bs-target="#signUp" data-bs-toggle="modal">網上用戶註冊</a>
            </div>
            <div class="declaration flex-row">
              <a href="">免責聲明</a>
              <a href="">私隱政策及收集個人資料聲明</a>
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
            <h2>網上用戶註冊</h2>
            <div>
              <ul>
                <li>
                  <input
                    v-model="registerForm.oname"
                    placeholder="登記業主名稱 (請參考月結單):"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.oname"
                    >This field is required.</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.hcode"
                    placeholder="客戶號碼 (請參考月結單)"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.hcode"
                    >This field is required.</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.loginName"
                    placeholder="網站登入名稱 (自訂)"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.loginName"
                    >This field is required.</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.password"
                    placeholder="網站登入密碼 (自訂)"
                    type="password"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.password"
                    >This field is required.</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.nickname"
                    placeholder="Nickname (自訂)"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.nickname"
                    >This field is required.</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.cnickname"
                    placeholder="中文暱稱 (選填) :"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.cnickname"
                    >This field is required.</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.email"
                    placeholder="聯絡電郵"
                    type="text"
                  />
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_null && !registerForm.email"
                    >This field is required.</i
                  >
                  <i
                    style="display: block; color: #fc0d1b; text-align: left"
                    v-show="register_error_tip.is_email_correct && registerForm.email"
                    >Please provide a valid email.</i
                  >
                </li>
                <li>
                  <input
                    v-model="registerForm.contactNo"
                    placeholder="聯絡電話 (選填)"
                    type="number"
                  />
                </li>
              </ul>
            </div>
            <div class="button">
              <p style="color: #fc0d1b" v-show="register_error_tip.is_show">
                {{ register_error_tip.text }}
              </p>
              <button @click="register">註冊</button>
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
            <h2>忘記密碼</h2>
            <div>
              <ul>
                <li class="flex-row">
                  <input type="text" placeholder="請輸入閣下之登記聯絡電郵" />
                </li>
              </ul>
            </div>
            <div class="button">
              <button>提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, provide } from "vue";
import {useStore} from 'vuex'
export default {
  data() {
    return {};
  },
  setup(props,{emit}) {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive({
      loginForm: {
        loginName: "david",
        password: "david",
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
    });
    
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
        });
        if (res.data.status === 200) {
          document.getElementById("close-login").click();
          localStorage.setItem("login-info", JSON.stringify(res.data.data));
          store.commit('setLoginStatus',true)
        } else {
          data.login_error_tip.is_show = true;
          data.login_error_tip.text = res.data.msg;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //查看所有 最新消息
    const register = async () => {
      const reg = /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (
        !data.registerForm.oname ||
        !data.registerForm.hcode ||
        !data.registerForm.loginName ||
        !data.registerForm.password ||
        !data.registerForm.nickname ||
        !data.registerForm.cnickname ||
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
    return {
      ...toRefs(data),
      login,
      register,
    };
  },
};
</script>

<style lang="less" scoped>
.modal {
  .modal-dialog {
    .modal-body {
      text-align: center;
      padding: 0 20px 50px;
      h2 {
        font-family: "Nunito";
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
          font-size: 16px;
          line-height: 21px;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>
