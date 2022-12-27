<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-11 23:25:10
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
        {{ fairview_park_lang === "en_us" ? "Frequently used" : "常用"
        }}{{ fairview_park_lang === "en_us" ? " forms" : "表格" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div
          style="margin: 0 auto"
          class="col-12 nav-content mb-20"
        >
          <div>
            <h5>
              {{ fairview_park_lang === "en_us" ? "Frequently used forms" : "常用表格" }}
            </h5>
            <p style="font-size:24px;font-weight:bold">{{fairview_park_lang === "en_us" ?'Residents can obtain any application forms from our Customer Service Department.':'住戶可到本處客戶服務索取任何有關申請表格'}}</p>
            <ul>
              <li
                class="flex-row"
                v-for="(item, index) in frequently_used_forms_list"
                :key="index"
              >
                <i>{{ index + 1 }}.</i>
                <span
                  ><a target="_blank" :href="item.fileEnUs">{{ item.titleEnUs }}</a></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      banner: new URL("../../../assets/image/common-banner/owner-zone.jpg", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      frequently_used_forms_list: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findFrequentlyUsedFormsList = async () => {
      try {
        const res = await proxy.$http.findFrequentlyUsedFormsList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.frequently_used_forms_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findFrequentlyUsedFormsList();
    });
    return {
      ...toRefs(data),
      findFrequentlyUsedFormsList,
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
    font-family: 'Poppins-Bold', SourceHanSansCN-Regular, Arial;
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
  margin: 0 auto;
  .row {
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 15px;
      h5{
        color: #9cc212;
          font-size: 36px;
          font-weight: bold;
      }
       ul {
          padding: 0;
          li {
            font-size: 18px;
            margin-bottom: 20px;
            align-items: center;
            background-color: #e3f3b3;

            i {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 40px;
              text-align: center;
              background-color: #e3f3b3;
              height: 100%;
            }

            span {
              line-height: 25px;
              background-color: #fff0be;
              flex: 1;
              padding: 7px 0 7px 10px;

              a {
                text-decoration: none;
                color: #4a4a4a;
              }
            }
          }
        }
    }
  }
}
@media (min-width: 576px) {
  .nav-wrap {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .nav-wrap {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-wrap {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .nav-wrap {
    width: 992px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap {
    width: 1280px;
  }
}
@media (max-width: 992px) {
  .banner {
      height: 200px;
    img {
      width: auto;
    }
  }
}
</style>
