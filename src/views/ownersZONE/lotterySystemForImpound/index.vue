<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:05:21
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <div
        class="img"
        style="width: 100%; height: 100%"
        :style="{ 'background-image': 'url(' + banner + ')' }"
      ></div>
      <p>
        {{ $t("headed.Lottery_System_For_Impounding_Action") }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div style="margin: 0 auto" class="col-12 nav-content mb-20">
          <div
            style="
              font-size: 14px;
              color: #6e6b7b;
              font-family: Helvetica, Arial, sans-serif;
            "
            v-html="lottery_system_for_mpound_content.htmlEnUs"
          ></div>
        </div>
      </div>
    </div>
     <!-- loading -->
     <div
      class="loading"
      v-loading="loading"
      style="
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10000;
      "
      :style="{'display':loading?'':'none'}"
    ></div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      banner: new URL(
        "../../../assets/image/common-banner/owner-zone.jpg",
        import.meta.url
      ).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      loading:false,
      lottery_system_for_mpound_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findLotterySystemForImpound = async () => {
      data.loading = true
      try {
        const res = await proxy.$http.findLotterySystemForImpound({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.lottery_system_for_mpound_content = res.data.data;
          data.loading = false
        }
      } catch (error) {
        console.log(error);
        data.loading = false
      }
    };
    onMounted(async () => {
      await findLotterySystemForImpound();
    });
    return {
      ...toRefs(data),
      findLotterySystemForImpound,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.banner {
  position: relative;
  overflow: hidden;
  height: 280px;
  .img {
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: bottom;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-style: normal;
    font-weight: bold;
    width: 80%;
    text-align: center;
    font-family: "Poppins-Bold", SourceHanSansCN-Regular, Arial;
    color: #fff;
    text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
    b {
      color: var(--mainColor1);
      text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
    }
  }
}
.nav-wrap {
  padding: 20px;
  min-height:200px;
  .row {
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 15px;
    }
  }
}
@media (min-width: 576px) {
  .nav-content {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .nav-content {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-content {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .nav-content {
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-content {
    width: 1280px;
  }
}
@media (max-width: 991px) {
  .banner {
    height: 200px;
    img {
      width: auto;
    }
    p {
      font-size: 36px;
    }
  }
}
</style>
