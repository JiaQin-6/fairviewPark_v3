<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-14 23:49:35
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="information-push">
    <h3 class="mb-20">{{fairview_park_lang==='en_us'?'Push Up Message Record':'推送訊息記錄'}}</h3>
    <div class="information-push-wrap">
      <ul class="col col-12 col-lg-8 col-sm-12" style="padding:0 10px">
        <li
          class="flex-row mb-20"
          v-for="(item, index) in pmLogList"
          :key="index"
        >
          <div class="col col-2 col-lg-1 order">{{index+1}}.</div>
          <div class="col col-10 col-lg-11 content">
            <p>{{ item.pushdate.slice(0,10) }}</p>
            <p>{{ item.title }}</p>
            <p>{{ item.descriptions }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive({
      fairview_park_lang: "",
      pmLogList:null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 业主手册及地图 列表
    const findPmLogList = async () => {
      try {
        const res = await proxy.$http.findPmLogList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.pmLogList = res.data.data.records
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      findPmLogList();
    });
    return {
      ...toRefs(data),
      findPmLogList,
    };
  },
};
</script>

<style lang="less" scoped>
.information-push {
  h3 {
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #afca75;
  }
  .information-push-wrap {
    ul {
      margin: 0 auto;
      padding: 0;
      li {
        .order {
          background-color: #e6f2ba;
          padding: 5px;
          box-sizing: border-box;
        }
        .content {
          background-color: #fdf0c3;
          padding: 5px;
          box-sizing: border-box;
          font-size: 15px;

          p {
            font-size: 15px;
            margin: 0 0 3px 0;
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .information-push{
    h3 {
    font-size: 20px;
  }
  }
}
</style>
