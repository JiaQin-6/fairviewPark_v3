<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-25 15:48:45
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>{{fairview_park_lang==='en_us'?'Useful Telephone':'常用電話及'}} <b>{{fairview_park_lang==='en_us'?'Nos.':'連接'}}</b></p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in telephone_link_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="jumpLink(item.orderNo, index)"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
          <div align="center">
            <table
              :id="
                'telephone_link_' +
                (telephone_link_list[index] && telephone_link_list[index].orderNo)
              "
              style="margin-bottom: 20px"
              width="645"
              border="0"
              cellpadding="5"
              cellspacing="2"
              v-for="(item, index) in telephone_link_content"
              :key="index"
            >
              <tbody>
                <tr>
                  <td height="25" colspan="2" bgcolor="#A0D31E">
                    <span class="style9">{{
                      telephone_link_list[index] && telephone_link_list[index].titleEnUs
                    }}</span>
                  </td>
                </tr>
                <tr v-for="(item2, index2) in item" :key="index2">
                  <td width="368" height="25" bgcolor="#EAF7C1">
                    <span v-if="!item2.websiteUrl" class="style9">{{
                      item2.titleEnUs
                    }}</span>
                    <a
                      v-if="item2.websiteUrl"
                      target="_blank"
                      :href="item2.websiteUrl"
                      class="style9"
                      >{{ item2.titleEnUs }}</a
                    >
                  </td>
                  <td width="251" height="25" bgcolor="#FFFFCC">
                    <span class="style12">{{ item2.tel }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
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
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      nav_index: 0,
      telephone_link_list: [],
      telephone_link_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 屋邨资料 列表
    const findUsefulTelephoneNosList = async (id) => {
      try {
        const res = await proxy.$http.findUsefulTelephoneNosList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          if (id) {
            data.telephone_link_content.push(res.data.data.records);
          } else {
            data.telephone_link_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findUsefulTelephoneNosList();
      data.telephone_link_list.map((item) => {
        findUsefulTelephoneNosList(item.id);
      });
    });
    const jumpLink = (orderNo, index) => {
      document.querySelector("#telephone_link_" + orderNo).scrollIntoView(true);
      data.nav_index = index;
    };
    return {
      ...toRefs(data),
      findUsefulTelephoneNosList,
      jumpLink,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.banner {
  position: relative;
  img {
    opacity: 0.5;
    width: 100%;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    b {
      color: #2fa94e;
    }
  }
}
.nav-wrap {
  padding: 20px;
  background-color: #e5e5e5;
  .row {
    .aside {
      ul {
        position: sticky;
        top: 10px;
        // flex-wrap: nowrap;
        overflow: auto;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        background-color: #fff;
        padding: 10px;
        li {
          text-align: left;
          margin-bottom: 5px;
          padding: 6px 0px 6px 10px;
          box-sizing: border-box;
          background-color: rgb(235, 233, 233);
          cursor: pointer;
          i {
            font-size: 16px;
            margin-right: 5px;
            display: none;
            color: #000;
          }
          span {
            font-size: 15px;
            color: #000;
          }
        }
        .active {
          background-color: #5cb89e;
          i {
            color: #fff;
            display: inline-block;
          }
          span {
            color: #fff;
          }
        }
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 15px;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
