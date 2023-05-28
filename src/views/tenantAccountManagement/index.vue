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
    <div class="modal fade" id="startUp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" v-loading="loading">
        <div class="modal-content">
          <div class="modal-header">
            <button id="close-start-up" type="button" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h2>租客賬號管理</h2>
            <div>
              <el-button class="open-btn" type="primary" @click="clickTenantLaunch({
                  tenantId: '',
                  launchType: 'Y',
                  memberLogin: '',
                })">開啟租客管理</el-button>
            </div>
            <div>
              <p class="name">
                <span>登入名稱:</span>
                <span>aa</span>
              </p>
              <p class="password">
                <span>登入密碼:</span>
                <span>aa</span>
              </p>
              <p class="copy">複製賬號資料</p>
              <ul>
                <li v-for="(item, index) in [{
                  title: '上一次啓動租客賬號的來源:',
                  value: 'a'
                }, {
                  title: '上一次啓動租客賬號的時間:',
                  value: 'a'
                }, {
                  title: '上一次「複製該登入信息」的時間:',
                  value: 'a'
                }, {
                  title: '上一次租客登入時間:',
                  value: 'a'
                }]" :key="index">
                  <span>{{ item.title }}</span>
                  <span>{{ item.value }}</span>
                </li>
              </ul>
              <el-button class="close-btn" @click="closeTenantManagement" type="danger">關閉租客管理</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 關閉租客賬號提示 -->
    <div v-if="isShowCloseBox" class="close-box"
      style="position:fixed;padding:20px;left:50%;top:50%;transform:translate(-50%,-50%);background-color:#fff;box-shadow:0 0 3px 3px rgba(101, 99, 99,.5)">
      <div style="text-align:right"><el-icon @click="isShowCloseBox = false">
          <Close />
        </el-icon>
      </div>
      <h4>關閉賬號</h4>
      <p>安排：户口一旦被關閉，您的租客將不能操作其户口，其相關户口資料亦會失效。</p>
      <el-checkbox v-model="isAgreeClose" label="我明白及同意上述關閉户口安排" size="large" />
      <div class="button flex-row space-between">
        <el-button type="info" @click="isShowCloseBox = false">返回</el-button>
        <el-button @click="clickTenantLaunch({
            tenantId: tenantId,
            launchType: 'N',
            memberLogin: name,
          })" type="primary" :disabled="!isAgreeClose">確認</el-button>
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
  setup(props, { emit }) {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive({
      loading: false,
      fairview_park_lang: "",
      tenantId: '',
      name: '',
      password: '',
      isAgreeClose: false,
      isShowCloseBox: false,
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
      data.isShowCloseBox = true
    };
    const clickTenantLaunch = async (arr) => {
      data.loading = true;
      try {
        const res = await proxy.$http.clickTenantLaunch(arr);
        if (res.data.status === 200) {
          console.log(res)
          if(arr.tenantId){
            isShowCloseBox = false
          }
        } else {
          data.loading = false;
        }
      } catch (error) {
        data.loading = false;
      }
    };
    onMounted(() => { });
    return {
      ...toRefs(data),
      closeModel,
      closeTenantManagement,
      clickTenantLaunch,
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
        color: #2fa94e;
        margin-bottom: 20px;
        font-size: 38px;
        line-height: 65px;
      }

      .open-btn {
        background-color: var(--mainColor3);
        border-color: var(--mainColor3);
        margin: 30px auto;
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
            color: #2fa94e;
          }

          &:last-child {
            color: var(--mainColor2);
          }
        }
      }

      .copy {
        color: var(--mainColor2);
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      button {
        margin-bottom: 30px;
      }

      ul {
        text-align: center;
        padding: 0;
        margin: 0 auto 30px;

        li {
          margin-bottom: 5px;
          align-items: center;
          justify-content: space-between;
          color: #2fa94e;
        }
      }
    }
  }
}

.close-box {
  width: 400px;
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

  @{deep} .el-checkbox {
    margin-bottom: 20px;

    .el-checkbox__input {
      input {}

      span {
        border-color: #606266;
      }
    }

    .el-checkbox__label {
      font-size: 18px;
    }
  }

  @{deep} .is-checked {
    .el-checkbox__input {
      input {}

      span {
        border-color: var(--mainColor3);
        background-color: var(--mainColor3);
      }
    }

    .el-checkbox__label {
      color: var(--mainColor3);
    }
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

@media (max-width: 991px) {
  .modal {
    .modal-dialog {
      .modal-body {
        h2 {
          font-size: 26px;
        }

        .open-btn {
          margin: 30px auto;
          font-size: 15px;
        }

        .close-btn {
          font-size: 15px;
        }

        ul {
          li {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
