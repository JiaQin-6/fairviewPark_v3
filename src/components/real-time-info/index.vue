<template>
  <div class="real-time-info" v-show="show">
    <div class="real-time-info-content">
      <!-- 主要内容 -->
      <div class="main-content" v-html="newRealTimeInfo&&newRealTimeInfo.content"></div>
      <!-- 选项框 -->
      <div>
        <div class="mb-2 flex items-center text-sm">
          <el-radio-group v-model="radio" class="ml-4">
            <el-radio label="1" size="large">下次提示我</el-radio>
            <el-radio label="2" size="large">下次不再提示我</el-radio>
          </el-radio-group>
        </div>
      </div>
      <!-- 按钮 -->
      <el-button @click="close" :disabled="!radio">确定</el-button>
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
    newRealTimeInfo:{
        type:Object,
    }
  },
  setup(props, ctx) {
    const data = reactive({
      show: false,
      fairview_park_lang: "",
      radio: "",
    });
    watch(
      () => props.showRealTimeInfo,
      (value) => {
        data.radio = '';
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
              : '',
            show: localStorage.getItem("real-info")
              ? JSON.parse(localStorage.getItem("real-info")).nonMember.show
              : true,
          },
          owner: {
            id: props.newRealTimeInfo.id,
            show: data.radio === "1" ? true : false,
          },
        };
      } else {
        obj = {
          nonMember: {
            id: props.newRealTimeInfo.id,
            show: data.radio === "1" ? true : false,
          },
          owner: {
            id: localStorage.getItem("real-info")
              ? JSON.parse(localStorage.getItem("real-info")).owner.id
              : '',
            show: localStorage.getItem("real-info")
              ? JSON.parse(localStorage.getItem("real-info")).owner.show
              : true,
          },
        };
      }
      localStorage.setItem("real-info", JSON.stringify(obj));
      ctx.emit("close");
    };
    return {
      ...toRefs(data),
      close,
    };
  },
};
</script>

<style lang="less" scoped>
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

  .real-time-info-content {
    width: 50%;
    height: 50%;
    background-color: #fff;
    margin: 0 auto;
    box-shadow: 0 0 2px 5px rgba(0, 0, 0, 0.5);
  }
}
</style>
>
