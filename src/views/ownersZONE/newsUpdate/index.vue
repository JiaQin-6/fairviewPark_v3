<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:10:50
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "New" : "最新"
        }}{{ fairview_park_lang === "en_us" ? "&nbsp;Update" : "消息" }}
      </p>
    </div>
    <!-- navs -->
    <div class="nav-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row">
            <li
              v-for="(item, index) in new_update_list"
              :key="index"
              class="col-4 col-lg-12"
              :class="new_update_index === item.id ? 'active' : ''"
              @click="findOneNewUpdateById(item.id)"
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            v-model="new_update_index"
            class="m-2 menu-select"
            placeholder="Select"
            size="large"
            @change="
              () => {
                findOneNewUpdateById(new_update_index);
              }
            "
          >
            <el-option
              v-for="(item, index) in new_update_list"
              :key="index"
              :label="item.titleEnUs"
              :value="item.id"
            />
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20 ql-container ql-snow">
          <p style="font-size: 36px; color: #9cc212; font-weight: bold" v-if="new_update_list.length!==0">
            {{ new_update_list.filter(item=>{ return item.id === new_update_index})[0].titleEnUs }}
          </p>
          <div class="ql-editor" v-html="new_update_content.htmlEnUs"></div>
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
      banner: new URL("../../../assets/image/aboutUs/banner.png", import.meta.url).href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      new_update_list: [],
      new_update_index: null,
      new_update_content: [],
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findNewUpdateList = async () => {
      try {
        const res = await proxy.$http.findNewUpdateList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.new_update_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //查看一條數據
    const findOneNewUpdateById = async (id) => {
      try {
        const res = await proxy.$http.findOneNewUpdateById({
          lang: data.fairview_park_lang,
          id: id,
        });
        if (res.data.status === 200) {
          data.new_update_content = res.data.data;
          data.new_update_index = res.data.data.id;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
      await findNewUpdateList();
      await findOneNewUpdateById(data.new_update_list[0].id);
    });
    return {
      ...toRefs(data),
      findNewUpdateList,
      findOneNewUpdateById,
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.banner {
  position: relative;
  overflow: hidden;
  img {
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
  margin: 0 auto;
  .row {
    margin: 0 auto;
    .aside {
      padding: 0;
      ul {
        position: sticky;
        top: 10px;
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
            font-size: 18px;
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
      .menu-select {
        display: none;
      }
    }
    @{deep} .nav-content {
      background-color: #fff;
      font-size: 13px;
      padding: 2px 0px 0 20px;
      img {
        max-width: 100%;
      }
      .el-collapse {
        border-bottom: none;
        .el-collapse-item {
          box-shadow: 0 0 3px 3px rgba(176, 176, 176, 0.5);
          border-radius: 5px;
          margin-bottom: 20px;
          overflow: hidden;
          .el-collapse-item__header {
            border-bottom: 1px solid var(--el-collapse-border-color);
            padding: 0 10px;
          }
          // .is-active{
          //   border-bottom-color:var(--el-collapse-border-color);
          // }
          .el-collapse-item__wrap {
            .el-collapse-item__content {
              padding: 15px;
            }
          }
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
        .menu-select {
          display: block;
        }
      }
    }
  }
}
</style>
