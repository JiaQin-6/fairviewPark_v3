<template>
  <div>
    <h5>
      {{ $t("MACColumn_Rules_Regulations.Rules_Regulations") }}
    </h5>
    <ul style="font-size: 18px; padding: 0">
      <li v-for="(contentItme, contentIndex) in content_1" :key="contentIndex">
        <p>
          <span style="margin-right: 10px">{{ contentIndex + 1 }}.</span
          ><span>{{ contentItme.title }}</span>
        </p>
        <div v-for="(item, index) in contentItme.content" :key="index">
          <p>{{ item.title }}</p>
          <div style="padding: 0 20px">
            <div v-for="(item2, index2) in item.children" :key="index2">
              <p style="display: flex" v-if="item2.text">
                <span style="margin-right: 10px"
                  >{{ contentIndex + 1 }}.{{ item2.index }}</span
                ><span v-html="item2.text"></span>
              </p>
              <div
                v-if="item2.children"
                style="padding: 0 20px"
                v-for="(item3, index3) in item2.children"
                :key="index3"
              >
                <p style="display: flex">
                  <span
                    style="margin-right: 10px"
                    v-if="item3.index"
                    v-html="item3.index"
                  ></span
                  ><span v-html="item3.text"></span>
                </p>
                <div v-if="item3.children" style="margin-left: 30px">
                  <p v-for="(item4, index4) in item3.children" :key="index4">
                    <span v-html="item4.text"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      content_1: null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content_1 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.MACColumn_Rules_Regulations.content_1
        : window.i18n_zh_tw.MACColumn_Rules_Regulations.content_1;
    onMounted(async () => {});
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
h5 {
  font-size: 36px;
  color: var(--mainColor3);
  text-align: left;
}

@media (max-width: 991px) {
  h5 {
    font-size: 28px;
  }

  p {
    font-size: 15px !important;
  }
}
</style>
