<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:52:09
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="new-buyer-notice">
    <div class="content mt-20" style="margin: 0px auto;">
      <table border="0" cellpadding="0" cellspacing="0" align="center">
        <tbody>
          <tr>
            <td valign="top">
              <table border="0" align="center" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td valign="top">
                      <table
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                        style="
                          border-radius: 8px;
                          border-collapse: separate;
                          border-spacing: 0px;
                          overflow: hidden;
                        "
                      >
                        <tbody style="border: 1px solid #275535; border-radius: 5px">
                          <tr style="box-sizing: border-box">
                            <td class="subject"
                              style="font-size: 36px; color: #9cc212; font-weight: bold"
                            >
                              {{
                                $t('ProspectiveBuyer_Prospective_buyer.Prospective_buyer')
                              }}
                            </td>
                          </tr>
                          <tr style="height: 50px; box-sizing: border-box">
                            <td class="subTitle" style="font-size: 24px; font-weight: bold">
                              {{
                                $t('ProspectiveBuyer_Prospective_buyer.To_New_Owners_or_Prospective_Buyers')
                              }}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td valign="top">
                                      <table
                                        border="0"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td class="style13" style="">
                                              <p>
                                                {{
                                                  $t('ProspectiveBuyer_Prospective_buyer.New_owners_are_reminded')
                                                }}
                                              </p>
                                              <p></p>
                                            </td>
                                          </tr>
                                          <tr
                                            v-for="(item, index) in content_1"
                                            :key="index"
                                          >
                                            <td class="style13" style="">
                                              <table
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <p style="margin-bottom: 5px">
                                                        <strong>{{ item.title }}</strong>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <p style="margin-bottom: 25px">
                                                        {{ item.des }}
                                                        <br />
                                                        <span
                                                          v-if="item.tip"
                                                          style="color:#3399FF"
                                                          >{{ item.tip }}</span
                                                        >
                                                      </p>
                                                      <p></p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <el-collapse accordion v-model="activeNames">
                        <el-collapse-item
                          v-for="(item, index) in content_2 "
                          :key="index"
                          :title="index + 1 + '. ' + item.title"
                          :name="index + 1"
                        >
                          <template #title>
                            <span class="prospectice-buy-title">{{ index + 1 }}.</span>
                            <span class="prospectice-buy-item">{{ item.title }}</span>
                          </template>
                          <div>
                            <p style="font-size: 18px; padding: 5px 27px">
                              {{ item.des }}<br />
                              <span v-if="item.tip" style="color:#3399ff">{{ item.tip }}</span>
                            </p>
                          </div>
                        </el-collapse-item>
                      </el-collapse>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    let data = reactive({
      fairview_park_lang: "",
      activeNames:"",
      content_1:null,
      content_2:null,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.content_1 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.ProspectiveBuyer_Prospective_buyer.content_1
        : window.i18n_zh_tw.ProspectiveBuyer_Prospective_buyer.content_1;
    data.content_2 =
      data.fairview_park_lang === "en_us"
        ? window.i18n_en_us.ProspectiveBuyer_Prospective_buyer.content_2
        : window.i18n_zh_tw.ProspectiveBuyer_Prospective_buyer.content_2;
    const getHeight = () => {
      for (let i = 0; i < document.getElementsByClassName("prospectice-buy-title").length; i++) {
        document.getElementsByClassName("prospectice-buy-title")[i].style.height = 
          document
            .getElementsByClassName("prospectice-buy-item")[i].getBoundingClientRect().height + "px";
        document.getElementsByClassName("prospectice-buy-title")[i].style["line-height"] =
          document
            .getElementsByClassName("prospectice-buy-item")[i].getBoundingClientRect().height + "px";
      }
    };
    onMounted(async () => {
      window.addEventListener("resize", getHeight);
      // for (let i = 0; i < document.getElementsByClassName("prospectice-buy-title").length; i++) {
        getHeight();
      // }
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
.new-buyer-notice {
  font-size: 18px;
  color: #4a4a4a;
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
}
@media (max-width: 991px) {
  .new-buyer-notice{
    .subject{
      font-size:28px!important;
    }
    .subTitle{
      font-size:20px!important;
    }
    td{
      font-size:15px!important;
    }
    .el-collapse{
      .el-collapse-item{
        span,p{
          font-size:15px!important;
        }

      }
    }
  }
}
</style>
