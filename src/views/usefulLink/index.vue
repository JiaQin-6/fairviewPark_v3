<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-25 01:10:06
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
        {{ fairview_park_lang === "en_us" ? "Useful Telephone" : "常用電話及"
        }}{{ fairview_park_lang === "en_us" ? "&nbsp;Nos." : "連接" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container ">
        <div class="col-12 col-lg-3 aside mb-20">
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
          <el-select
            size="large"
            v-model="nav_index"
            class="m-2 menu-select"
            placeholder="Select"
          >
            <el-option
              v-for="(item, index) in telephone_link_list"
              :key="index"
              :label="item.titleEnUs"
              :value="item.index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-9 nav-content mb-20 ql-container ql-snow">
          <div align="center">
            <table
              :id="
                'telephone_link_' +
                (telephone_link_list[index] && telephone_link_list[index].orderNo)
              "
              style="margin-bottom: 20px"
              border="0"
              cellpadding="5"
              cellspacing="2"
              v-for="(item, index) in telephone_link_content"
              :key="index"
              width="100%"
            >
              <tbody>
                <tr>
                  <td height="25" colspan="2" bgcolor="#A0D31E">
                    <span class="style9 fs-15">{{
                      telephone_link_list[index] && telephone_link_list[index].titleEnUs
                    }}</span>
                  </td>
                </tr>
                <tr v-for="(item2, index2) in item" :key="index2">
                  <td style="width: 70%" height="25" bgcolor="#EAF7C1">
                    <span v-if="!item2.websiteUrl" class="style9 fs-15">{{
                      item2.titleEnUs
                    }}</span>
                    <a
                      v-if="item2.websiteUrl"
                      target="_blank"
                      :href="item2.websiteUrl"
                      class="style9 fs-15"
                      >{{ item2.titleEnUs }}</a
                    >
                  </td>
                  <td style="width: 30%" height="25" bgcolor="#FFFFCC">
                    <a
                      class="fs-15"
                      v-for="(item, index) in item2.tel.split(',')"
                      :key="index"
                      style="color: #000; text-decoration: none"
                      :href="'tel:' + item"
                      >{{ item }}</a
                    >
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
      data.telephone_link_list.map((item,index) => {
        item.index = index
        findUsefulTelephoneNosList(item.id);
      });
    });
    const jumpLink = (orderNo, index) => {
      document
        .querySelector("#telephone_link_" + orderNo)
        .scrollIntoView({ block: "center" });
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
  overflow: hidden;
  height: 280px;

  .img {
    opacity: 0.5;
    width: 100%;
    height: 280px;
    background-size: cover;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
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
  .row {
    margin: 0 auto;
    .aside {
      padding: 0;
      ul {
        position: sticky;
        top: 80px;
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
          cursor: pointer;
          i {
            font-size: 15px;
            margin-right: 5px;
            display: none;
            color: #000;
          }
          span {
            font-size: 15px;
            color: #000;
          }
          &:hover {
            background-color: var(--mainColor2);
            color: #fff;
            i {
              color: #fff;
            }
            span {
              color: #fff;
            }
          }
        }
        .active {
          background-color: var(--mainColor2);
          color: #fff;
          i {
            color: #fff;
          }
          span {
            color: #fff;
          }
        }
      }
      .menu-select{
        display: none;
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 12px 0px;
      img {
        max-width: 100%;
      }
      a {
        &:hover {
          color: var(--bs-link-color)!important;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .nav-wrap-container {
    width: 540px;
    
  }
}
@media (min-width: 768px) {
  .nav-wrap-container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-wrap-container {
    width: 960px;
   
  }
}
@media (min-width: 1200px) {
  .nav-wrap-container {
    width: 992px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap-container {
    width: 1280px;
  }
}
@media (max-width: 992px) {
  .banner {
    img {
      opacity: 0.5;
      width: auto;
      height: 200px;
    }
  }
  .nav-wrap {
    .row {
      .aside {
        ul {
          flex-wrap: nowrap;
          padding: 0;
          display: none;
          li {
            display: flex;
            text-align: center;
            align-items: center;
            span {
              margin: 0 auto;
            }
          }
        }
        .menu-select{
        display: block;
      }
      }
    }
  }
}
</style>
