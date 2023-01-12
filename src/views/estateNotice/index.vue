<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-10 11:29:10
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-config-provider :locale="local">
    <div>
      <!-- banner -->
      <div class="banner">
        <div
          class="img"
          style="width: 100%; height: 100%"
          :style="{ 'background-image': 'url(' + banner + ')' }"
        ></div>
        <p>
          {{ fairview_park_lang === "en_us" ? "Estate" : "屋苑"
          }}{{ fairview_park_lang === "en_us" ? " Notice" : "通告" }}
        </p>
      </div>
      <!-- navs -->
      <div class="nav-wrap">
        <div class="row nav-wrap-container">
          <div class="col-12 col-lg-2 aside mb-20">
            <ul class="row">
              <li
                v-for="(item, index) in estate_notice_list"
                :key="index"
                class="col-4 col-lg-12"
                :class="nav_index === index ? 'active' : ''"
                @click="
                  () => {
                    nav_index = index;
                    currentPage = 1;
                    pageSize = 5;
                    findEstateNoticeList(item.id);
                  }
                "
              >
                <span>{{ item.titleEnUs }}</span>
              </li>
            </ul>
            <el-select
              v-if="estate_notice_list.length>0"
              size="large"
              v-model="nav_index"
              class="menu-select"
              :placeholder="$t('Select')"
              @change="changeMenu"
            :teleported="false"
            >
              <el-option
                v-for="(item, index) in estate_notice_list"
                :key="index"
                :label="item.titleEnUs"
                :value="item.index"
              >
                <span>{{ item.titleEnUs }}</span>
              </el-option>
            </el-select>
          </div>
          <div class="col-12 col-lg-10 nav-content mb-20">
            <div class="estate-notice-content">
              <p
                v-if="estate_notice_list.length !== 0"
                style="font-size: 36px; color: #9cc212; font-weight: bold"
              >
                {{ estate_notice_list[nav_index].titleEnUs }}
              </p>
              <ul>
                <li
                  class="flex-row item-list"
                  v-for="(item, index) in estate_notice_show_content"
                  :key="index"
                >
                  <i>{{ item.index + 1 }}.</i>
                  <span
                    ><a target="_blank" :href="item.contentEnUs">{{
                      item.titleEnUs
                    }}</a></span
                  >
                </li>
              </ul>
              <!-- 分頁 -->
              <div style="display: flex; align-items: center" v-if="total !== 0">
                <el-pagination
                  style="flex-wrap: wrap; margin: 0 auto; font-size: 18px;width: 100%;"
                  v-model:current-page="currentPage"
                  v-model:page-size="pageSize"
                  :page-sizes="[5, 10, 15, 20]"
                  :small="false"
                  :disabled="false"
                  :background="false"
                  layout="total, sizes, prev, pager, next"
                  :total="total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :teleported="false"
                  class="pagination"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-config-provider>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import { ElConfigProvider } from "element-plus";
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import en from "element-plus/dist/locale/en.mjs";
export default {
  components: {
    ElConfigProvider,
  },
  data() {
    return {
      banner: new URL("../../assets/image/common-banner/owner-zone.jpg", import.meta.url)
        .href,

      nav_index: 0,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      estate_notice_list: [],
      estate_notice_content: [],
      estate_notice_show_content: [],
      fairview_park_lang: "",
      currentPage: 1,
      pageSize: 5,
      total: 0,
      local: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.local = data.fairview_park_lang === "en_us" ? en : zhTw;
    //查看所有 屋苑资料 列表
    const findEstateNoticeList = async (id) => {
      try {
        const res = await proxy.$http.findEstateNoticeList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          if (id) {
            res.data.data.records.map((item, index) => {
              item.index = index;
            });
            data.estate_notice_content = res.data.data.records;
            data.total = data.estate_notice_content.length;
            handleCurrentChange(1)
          } else {
            res.data.data.records.map((item, index) => {
              item.index = index;
            });
            data.estate_notice_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    //
    const changeMenu = async (val) => {
      data.nav_index = val;
      for (let i = 0; i < data.estate_notice_list.length; i++) {
        if (data.estate_notice_list[i].index === val) {
          findEstateNoticeList(data.estate_notice_list[i].id);
        }
      }
    };
    const handleSizeChange = (val) => {
      data.estate_notice_show_content = data.estate_notice_content.slice(
        (data.currentPage - 1) * val,
        data.currentPage * val
      );
    };
    const handleCurrentChange = (val) => {
      data.estate_notice_show_content = data.estate_notice_content.slice(
        (val - 1) * data.pageSize,
        val * data.pageSize
      );
    };
    onMounted(async () => {
      await findEstateNoticeList();
      await findEstateNoticeList(data.estate_notice_list[0].id);
      
    });
    return {
      ...toRefs(data),
      findEstateNoticeList,
      changeMenu,
      handleSizeChange,
      handleCurrentChange,
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
            // display: inline-block;
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
      padding: 0px 20px 0 20px;
      .estate-notice-content {
        .header {
          align-items: center;
          span {
          }
          select {
            width: 200px;
          }
        }
        ul {
          padding: 0;
          .item-list {
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
        .el-pagination {
          .el-pagination__total {
            font-size: 18px;
          }

          .el-input__inner {
            font-size: 18px;
          }
          .el-icon {
            font-size: 18px;
          }
          .el-pager {
            li {
              font-size: 18px;
              &:hover {
                color: var(--mainColor2);
              }
            }
            .is-active {
              color: var(--mainColor2);
            }
          }
          .el-pagination__jump {
            font-size: 18px;
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
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap-container {
    width: 1280px;
  }
}
@media (max-width: 991px) {
  .banner {
    height: 200px;
    img {
      width: auto;
    }
    p{
      font-size: 36px;
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
        @{deep} .menu-select {
          display: block;
          --el-select-input-focus-border-color: #ccc;
          .select-trigger {
            .el-input {
              font-size: 18px;
              .el-input__wrapper {
              }
            }
            .is-focus {
              border-color: #ccc;
            }
          }
          .el-popper {
            position: absolute;
            top: 52px !important;
            left: 0 !important;
            .el-select-dropdown {
              .el-scrollbar {
                .el-select-dropdown__wrap {
                  .el-scrollbar__view {
                    .el-select-dropdown__item {
                      text-align: left;
                      span {
                        margin: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .nav-content{
        padding: 0;
        p{
          font-size: 28px!important;
        }
        ul{
          li{
            span{
              a{
                font-size: 15px;
              }
            }
          }
        }
        @{deep} .el-pagination{
          .el-pagination__total{
            font-size: 15px!important;
          }
          .el-pagination__sizes{
            .el-input__inner{
              font-size: 15px!important;
            }
          }
          .el-pager{
            li{
              font-size: 15px!important;
            }
          }
          .el-pagination__jump{
            font-size: 15px!important;
            .el-input__inner{
              font-size: 15px!important;
            }
          }
        }
      }
    }
  }
}
@media (max-width:768px) {
  .nav-wrap {
    .row {
      @{deep} .el-pagination {
          .el-pagination__total {
            font-size: 15px;
            margin: 0;
          }
          .el-pagination__sizes{
            text-align: left;
            position: relative;
            width: calc(100% - 85px);
            display: block;
            padding-left: 10px;
            box-sizing: border-box;
            .el-select{
              position: relative;
              left: 0;
            }
          }
          
          .btn-prev{
            margin-left:0;
          }
          .el-input__inner {
            font-size: 15px;
          }
          .el-icon {
            font-size: 15px;
          }
          .el-pager {
            width: 79%;
            overflow: auto;
            li {
              font-size: 15px;
              &:hover {
                color: var(--mainColor2);
              }
            }
            .is-active {
              color: var(--mainColor2);
            }
          }
          .el-pagination__jump {
            font-size: 15px;
            margin: 0;
          }
        }
    }
  }
}
</style>
