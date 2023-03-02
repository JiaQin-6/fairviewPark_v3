<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 00:38:26
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h5>
      {{
        $t('MACColumn_Nearby_Proposed_Development.Nearby_Proposed_Development')
      }}
    </h5>
    <h6>
      {{
        fairview_park_lang === "en_us"
          ? "Document provided by 11th MAC Chairman"
          : "文件由第十一屆MAC主席提供"
      }}
    </h6>
    <div class="content">
      <ul>
        <li
          v-for="(item, index) in nearby_proposed_development_list"
          :key="index"
          class="col-6 col-md-4"
        >
          <a :href="item.pdfUrlEnUs" style="border: 2px solid #f7f7f7;">
            <img
              :src="item.fileImage"
              alt=""
            />
          </a>
          <p>{{ item.titleEnUs }}</p>
        </li>
      </ul>
    </div>
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
      nearby_proposed_development_list: [],
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findNearbyProposedDevelopmentsList = async () => {
      try {
        const res = await proxy.$http.findNearbyProposedDevelopmentsList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.nearby_proposed_development_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      findNearbyProposedDevelopmentsList();
    });
    return {
      ...toRefs(data),
      findNearbyProposedDevelopmentsList,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
h5 {
  font-size: 36px;
  color: var(--mainColor3);
  text-align: left;
  margin-bottom: 20px;
}
.content {
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 15px;
      margin-bottom: 10px;
      padding: 20px;
      text-align: center;

      a {
        display: inline-block;
        max-width: 192px;
        max-height: 272px;
        height: 100%;
        width: 100%;
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }

      p {
        font-size: 15px;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
      }
    }
  }
}
@media (max-width: 991px) {
  h5{
    font-size: 28px;
  }
}
</style>
