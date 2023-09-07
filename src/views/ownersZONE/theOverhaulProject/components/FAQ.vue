<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-11-04 23:34:14
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-15 00:44:30
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/theOverhaulProject/components/theOverhaulProject.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p style="font-size: 36px; color: #9cc212; font-weight: bold">
      {{ $t("TheOverhaulProject_FAQ.FAQ") }}
    </p>
    <div
      class="mb-20"
      v-for="(item, index) in content_1"
      :key="index"
    >
      <h5 style="font-size: 24px; padding: 5px; font-weight: bold">
        {{ item.title }}
      </h5>
      <el-collapse accordion v-model="activeNames">
        <el-collapse-item
          v-for="(item2, index2) in item.children"
          :key="index2"
          :title="index2 + 1 + '. ' + item2.title"
          :name="index2 + 1"
        >
          <template #title>
            <span class="faq-title">{{ index2 + 1 }}.</span>
            <span class="faq-item">{{ item2.title }}</span>
          </template>
          <div>
            <p
              style="font-size: 18px; padding: 10px 20px; margin: 0"
              v-for="(item3, index3) in item2.children"
              :key="index3"
              v-html="item3.text"
            ></p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, onUnmounted } from "vue";
export default {
  data() {
    return {
      banner: new URL("../../../assets/image/aboutUs/banner.png", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      content_1:null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content_1 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.TheOverhaulProject_FAQ.content_1
        : window.i18n_zh_tw.TheOverhaulProject_FAQ.content_1;
    const getHeight = () => {
      for (let i = 0; i < document.getElementsByClassName("faq-title").length; i++) {
        document.getElementsByClassName("faq-title")[i].style.height =
          document.getElementsByClassName("faq-item")[i].getBoundingClientRect().height +
          "px";
        document.getElementsByClassName("faq-title")[i].style["line-height"] =
          document.getElementsByClassName("faq-item")[i].getBoundingClientRect().height +
          "px";
      }
    };
    onMounted(async () => {
      window.addEventListener("resize", getHeight);
      for (let i = 0; i < document.getElementsByClassName("faq-title").length; i++) {
        getHeight();
      }
    });
    onUnmounted(() => {
      window.removeEventListener("resize", getHeight);
    });
    return {
      ...toRefs(data),
      getHeight,
    };
  },
};
</script>

<style lang="less" scoped>
@deep:~ ">>>";
@{deep} .el-collapse {
  border: none;
  .el-collapse-item {
    margin-bottom: 2px;
    .el-collapse-item__header {
      font-size: 18px;
      align-items: center;
      background-color: #fffae7;
      border: none;
      height: auto;
      padding: 0;
      &:hover {
        background-color: #fff3c4;
        span {
          &:first-child {
            background-color: #cee97b;
          }
        }
      }
      span {
        color: #4a4a4a;
        font-weight: normal;
        &:first-child {
          width: 50px;
          background-color: #e7f3be;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 25px;
        }
        &:nth-child(2) {
          padding: 7px 0 7px 10px;
          flex: 1;
          // background-color: #fffae7;
          line-height: 25px;
          box-sizing: border-box;
        }
      }
    }
    .is-active {
      background-color: #fff3c4;
      span {
        font-weight: bold;
        &:first-child {
          background-color: #cee97b;
        }
      }
    }
    .el-collapse-item__wrap {
      border: none;
      .el-collapse-item__content {
        color: #4a4a4a;
      }
    }
  }
}
@media (max-width: 991px) {
  p {
    font-size: 28px !important;
    margin-bottom: 20px;
  }
  .el-collapse {
    .el-collapse-item {
      .el-collapse-item__header {
        .item {
          font-size: 15px;
        }
      }
      .el-collapse-item__content {
        p {
          font-size: 15px !important;
        }
      }
    }
  }
}
</style>
