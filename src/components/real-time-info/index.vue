<template>
  <div class="real-time-info" v-show="show">
    <div class="real-time-info-content">
      <!-- 主要内容 -->
      <div class="main-content">
        <div
          class="main-content-box"
          id="main-content-box"
          v-html="newRealTimeInfo && newRealTimeInfo.content"
        ></div>
      </div>
      <!-- 选项框 -->
      <div v-show="showbtn">
        <div class="mb-2 mt-2 flex items-center text-sm">
          <el-checkbox
            v-model="iKnow"
            :label="$t('real_time_info.I_understand_the_above_information')"
            size="large"
          />
        </div>
      </div>
      <!-- 按钮 -->
      <el-button v-show="showbtn" @click="close" round>{{ $t("real_time_info.Confirm") }}</el-button>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  nextTick,
  getCurrentInstance,
  toRefs,
  onMounted,
  watch,
} from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  props: {
    showRealTimeInfo: {
      type: Boolean,
    },
    newRealTimeInfo: {
      type: Object,
    },
  },
  setup(props, ctx) {
    const data = reactive({
      show: false,
      fairview_park_lang: "",
      iKnow: "",
      showbtn:false,//是否显示按钮
    });
    watch(
      () => props.showRealTimeInfo,
      (value) => {
        data.iKnow = "";
        data.show = value;
      }
    );
    // watch(
    //   () => newRealTimeInfo,
    //   (value) => {},
    //   { deep: true, immediate: true }
    // );
    const close = () => {
      /*
        nonMember（非会员）：{
            id:'',
            show:'',
        }
        owner（业主）{
            id:'',
            show:'',
        }
        residents（住客）{
            id:'',
            show:'',
        }
      **/
      //判断身份，和localStorage中的状态，修改对应状态
      let obj;
      if (localStorage.getItem("login-info")) {
        obj = {
          nonMember: {
            id: localStorage.getItem("real-info")
              ? JSON.parse(localStorage.getItem("real-info")).nonMember.id
              : "",
            show: localStorage.getItem("real-info")
              ? JSON.parse(localStorage.getItem("real-info")).nonMember.show
              : true,
          },
          owner: {
            id: props.newRealTimeInfo.id,
            show: data.iKnow ? false : true,
          },
        };
      } else {
        obj = {
          nonMember: {
            id: props.newRealTimeInfo.id,
            show: data.iKnow ? false : true,
          },
          owner: {
            id: localStorage.getItem("real-info")
              ? JSON.parse(localStorage.getItem("real-info")).owner.id
              : "",
            show: localStorage.getItem("real-info")
              ? JSON.parse(localStorage.getItem("real-info")).owner.show
              : true,
          },
        };
      }
      localStorage.setItem("real-info", JSON.stringify(obj));
      ctx.emit("close");
    };
    onMounted(async () => {
      if(document.getElementById('main-content-box')){
        document.getElementById('main-content-box').addEventListener('scroll',(e)=>{
          if(e.target.scrollHeight<=(e.target.scrollTop+e.target.offsetHeight)){
            data.showbtn = true
          }
        })
      }
    });
    return {
      ...toRefs(data),
      close,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";

.real-time-info {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);

  .real-time-info-content {
    width: 50%;
    background-color: #fff;
    margin: 0 auto;
    box-shadow: 0 0 6px 5px rgba(56, 55, 55, 0.5);
    border-radius: 6px;
    padding: 20px;
    box-sizing: border-box;

    .main-content {
      box-shadow: inset 0 0 2px 2px rgba(119, 118, 118, 0.5);
      border-radius: 6px;
      padding: 5px;
      height: 300px;
      .main-content-box {
        overflow: auto;
        height: 290px;
        // &::-webkit-scrollbar {
        //   display: none;
        // }
      }
    }

    @{deep} .el-checkbox {
      white-space: inherit;
      .el-checkbox__input {
        input {
        }

        span {
          border-color: #606266;
        }
      }

      .el-checkbox__label {
        font-size: 16px;
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

    @{deep} .el-button {
      background-color: var(--mainColor2);
      // height: 40px;
      padding: 0 30px;

      span {
        color: #fff;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 991px) {
  .real-time-info {
    .real-time-info-content {
      width: 90%;
      padding: 8px 8px 20px 8px;
      .main-content {
        height: 500px;
        .main-content-box {
          overflow: auto;
          height: 490px;
        }
      }
      @{deep} .el-checkbox {
        padding: 0 10px;
        .el-checkbox__label {
          font-size: 13px;
          // text-align: left;
        }
      }
      @{deep}.el-button {
        span {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
