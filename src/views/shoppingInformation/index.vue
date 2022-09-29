<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-25 15:47:46
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>{{fairview_park_lang==='en_us'?'Shopping':'商場'}} <b>{{fairview_park_lang==='en_us'?'information':'資訊'}}</b></p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in shop_information_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="jumpLink(item.orderNo, index)"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20">
          <div
            class="nav-content-list"
            :id="
              'shop_information_' +
              (shop_information_list[index] && shop_information_list[index].orderNo)
            "
            v-for="(item, index) in shop_information_content"
            :key="index"
          >
            <div class="header">
              <span>{{
                shop_information_list[index] && shop_information_list[index].titleEnUs
              }}</span>
              <img src="" alt="" />
            </div>
            <ul>
              <li class="flex-row" v-for="(item2, index2) in item" :key="index2">
                <span class="col-5">{{ item2.shopNo }}</span>
                <div class="img col-4" ><img  :src="item2.logUrl" alt="" /></div>
                
                <span class="col-3">{{ item2.tel }}</span>
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
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      nav_index: 0,
      shop_information_list: [],
      shop_information_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有 屋邨资料 列表
    const findShopsDirectoryList = async (id) => {
      try {
        const res = await proxy.$http.findShopsDirectoryList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          console.log(res.data.data.records);
          if (id) {
            data.shop_information_content.push(res.data.data.records);
          } else {
            data.shop_information_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findShopsDirectoryList();
      data.shop_information_list.map((item) => {
        findShopsDirectoryList(item.id);
      });
    });
    const jumpLink = (orderNo, index) => {
      document.querySelector("#shop_information_" + orderNo).scrollIntoView(true);
      data.nav_index = index;
    };
    return {
      ...toRefs(data),
      findShopsDirectoryList,
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
      padding: 12px 15px;
      max-height: 500px;
      overflow: auto;
      .nav-content-list {
        .header {
          background-color: #275535;
          padding: 5px 20px;
          border-radius: 15px 15px 0 0;
          span {
            color: #fff;
          }
          img {
          }
        }
        ul {
          justify-content: space-between;
          padding: 0;
          box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.05);
          li {
            padding: 10px 20px;
            span {
            }
            .img{
              img {
              width: 50px;
            }
            }
            
            &:nth-child(2n) {
              background-color: #5cb89e;
            }
          }
        }
      }
    }
  }
}
</style>
