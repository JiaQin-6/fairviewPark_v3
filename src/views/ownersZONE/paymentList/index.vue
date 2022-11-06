<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-06 23:19:29
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="buyer-server">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "Payment" : "收費"
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;List" : "表" }}</b>
      </p>
    </div>
    <!-- 內容 -->
    <div class="content mt-20" style="max-width: 750px; margin: 20px auto">
      <h5>
        {{ fairview_park_lang === "en_us" ? "Payment List" : "付款項目" }}
      </h5>
      <p>
        {{
          fairview_park_lang === "en_us"
            ? "(This list will be updated upon changes to the fees)"
            : "本收費表將會跟隨有關費用 / 按金調整而做出更改"
        }}
      </p>
      <!-- 保安部 -->
      <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
            "
            >{{ fairview_park_lang === "en_us" ? "" : "保安部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr
            style="width: 100%; background-color: #d5ea95; text-align: center"
          >
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? '' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? '' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? '' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '違例泊車罰款',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? ''
                        : '繳交違例泊車罰款通知書',
                    isHasBottomBorder: false,
                    pdf:'https://en.fairviewpark.hk/attachment.php?id=1049',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	鎖車費用',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '320 / 部',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	移走車輛費用',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '350 / 部',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	存放車輛費用',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '320 / 日',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
              }"
            >
              <span v-if="!item2.pdf">{{ item2.text }}</span>
              <a v-if="item2.pdf" :href="item2.pdf" target="_blank">{{ item2.text }}</a>
            </td>
          </tr>
        </table>
      </div>
      <!-- 會計部 -->
      <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
            "
            >{{ fairview_park_lang === "en_us" ? "" : "保安部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr
            style="width: 100%; background-color: #d5ea95; text-align: center"
          >
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? '' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? '' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? '' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '違例泊車罰款',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? ''
                        : '繳交違例泊車罰款通知書',
                    isHasBottomBorder: true,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	鎖車費用',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '320 / 部',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                    color: '#fffecf',
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	移走車輛費用',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '350 / 部',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
                'background-color': item2.color ? item2.color : '',
              }"
            >
              {{ item2.text }}
            </td>
          </tr>
        </table>
      </div>
      <!-- 行政部 -->
      <div class="mb-20">
        <div class="flex-row">
          <span
            style="
              display: inline-block;
              padding: 0 10px;
              height: 29px;
              line-height: 29px;
              border-left: 1px solid #000;
              border-top: 1px solid #000;
              background-color: #699cfc;
            "
            >{{ fairview_park_lang === "en_us" ? "" : "行政部" }}</span
          ><img :src="title" alt="" />
        </div>
        <table style="width: 100%">
          <tr
            style="width: 100%; background-color: #d5ea95; text-align: center"
          >
            <th
              v-for="(item, index) in [
                {
                  text: fairview_park_lang === 'en_us' ? '' : '付款項目',
                },
                {
                  text: fairview_park_lang === 'en_us' ? '' : '金額(港幣$)',
                },
                {
                  text: fairview_park_lang === 'en_us' ? '' : '表格/通告',
                },
              ]"
              :key="index"
              style="width: 30%; padding: 10px; border: 1px solid #000"
            >
              {{ item.text }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in [
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '違例泊車罰款',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                  {
                    text:
                      fairview_park_lang === 'en_us'
                        ? ''
                        : '繳交違例泊車罰款通知書',
                    isHasBottomBorder: true,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	鎖車費用',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '320 / 部',
                    isHasBottomBorder: false,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: false,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	移走車輛費用',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '350 / 部',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
              {
                children: [
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '-	移走車輛費用',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '350 / 部',
                    isHasBottomBorder: true,
                  },
                  {
                    text: fairview_park_lang === 'en_us' ? '' : '',
                    isHasBottomBorder: true,
                  },
                ],
              },
            ]"
            :key="index"
            style="width: 100%; background-color: #cefece; text-align: center"
          >
            <td
              v-for="(item2, index2) in item.children"
              :key="index2"
              style="
                width: 30%;
                padding: 5px;
                border-width: 0 1px 0px 1px;
                border-color: #000;
              "
              :style="{
                'border-bottom-width': item2.isHasBottomBorder ? '1px' : '0px',
              }"
            >
              {{ item2.text }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      banner: new URL(
        "../../../assets/image/aboutUs/banner.png",
        import.meta.url
      ).href,
      title: new URL("../../../assets/image/privilege/dp.png", import.meta.url)
        .href,
    };
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.buyer-server {
  .banner {
    position: relative;
    overflow: hidden;
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
      width: 80%;
      text-align: center;
      b {
        color: #2fa94e;
      }
    }
  }
  .content {
    tr {
      &:last-child {
        td {
          // border-bottom-width: 1px !important;
        }
      }
      td {
        &:first-child {
          text-align: left !important;
        }
      }
    }
    td {
      border-style: solid;
      border-width: 2px;
    }
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
}
</style>
