<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-10-08 01:18:13
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="decoration">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt="" />
      <p>
        {{ fairview_park_lang === "en_us" ? "House Type" : "原型圖"
        }}<b>{{ fairview_park_lang === "en_us" ? "&nbsp;Enquiry" : "查詢" }}</b>
      </p>
    </div>
    <!-- 內容 -->
    <div class="content row">
      <!-- nar -->
      <div class="decoration-type mb-20 flex-row">
        <span @click="type = 1">{{
          fairview_park_lang === "en_us" ? "Cast in Situ" : "原地建築"
        }}</span>
        <span @click="type = 2">{{
          fairview_park_lang === "en_us" ? "Precast" : "預制組件"
        }}</span>
      </div>
      <!-- 選項 -->
      <div class="menu mt-20">
        <div class="menu-oc row flex-row">
          <span class="col-12 col-md-2">{{
            type === 1
              ? (fairview_park_lang === "en_us" ? "Cast in Situ" : "原地建築") +
                "（OC）"
              : (fairview_park_lang === "en_us" ? "Precast" : "預制組件") +
                "（OC）"
          }}</span>
          <ul class="flex-row">
            <li
              v-for="(item, index) in type === 1
                ? fairview_park_lang === 'en_us'
                  ? castInsituOc_en
                  : castInsituOc_zh
                : fairview_park_lang === 'en_us'
                ? precastOc_en
                : precastOc_zh"
              :key="index"
              @click="selectedInfo = item"
              :class="{ selected: selectedInfo.title == item.title }"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="menu-op row flex-row">
          <span class="col-12 col-md-2">{{
            type === 1
              ? (fairview_park_lang === "en_us" ? "Cast in Situ" : "原地建築") +
                "（OP）"
              : (fairview_park_lang === "en_us" ? "Precast" : "預制組件") +
                "（OP）"
          }}</span>
          <ul class="flex-row">
            <li
              v-for="(item, index) in type === 1
                ? fairview_park_lang === 'en_us'
                  ? castInsituOp_en
                  : castInsituOp_zh
                : fairview_park_lang === 'en_us'
                ? precastOp_en
                : precastOp_zh"
              :key="index"
              @click="selectedInfo = item"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <!-- 圖片內容 -->
      <div class="decoration_content">
        <img :src="selectedInfo.image" alt="" style="width:100%;max-width:976px"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";

export default {
  data() {
    return {
      banner: new URL("../../assets/image/aboutUs/banner.png", import.meta.url)
        .href,
    };
  },
  setup() {
    const data = reactive({
      castInsituOc_en: [
        {
          title: "Type 850/1",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/2",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/3",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/4",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/1",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/2",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/3",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/4",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 950/1",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1100",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1100.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1150/C",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1150_c.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1150",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1150.gif",
            import.meta.url
          ).href,
        },
      ],
      castInsituOc_zh: [
        {
          title: "850/1 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/2 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/3 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/4 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/1 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/2 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/3 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/4 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "950/1 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1100 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1100.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1150/C 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1150_c.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1150 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_oc/1150.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOc_en: [
        {
          title: "Type 850/1",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/2",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/3",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/4",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/1",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/2",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/3",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/4",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 950/1",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1100",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1100.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOc_zh: [
        {
          title: "850/1 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/2 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/3 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/4 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/1 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/2 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/3 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/4 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "950/1 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1100 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_oc/1100.gif",
            import.meta.url
          ).href,
        },
      ],
      castInsituOp_en: [
        {
          title: "Type 1050/5",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1050_5.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1150/D",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1150_d.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300/A",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300_a.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300/A1",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300_a1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300/B",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300_b.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1500",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1700",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1700.gif",
            import.meta.url
          ).href,
        },
      ],
      castInsituOp_zh: [
        {
          title: "1050/5 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1050_5.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1150/D 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1150_d.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300/A 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300_a.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300/A1 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300_a1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300/B 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1300_b.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1500 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1700 型",
          image: new URL(
            "../../assets/image/prospective buyer/cast_in_situ_op/1700.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOp_en: [
        {
          title: "Type 1500",
          image: new URL(
            "../../assets/image/prospective buyer/precast_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1700",
          image: new URL(
            "../../assets/image/prospective buyer/precast_op/1700.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOp_zh: [
        {
          title: "1500 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1700 型",
          image: new URL(
            "../../assets/image/prospective buyer/precast_op/1700.gif",
            import.meta.url
          ).href,
        },
      ],
      type: 1,
      selectedInfo: null,
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    data.selectedInfo = data.castInsituOc_en[0];
    console.log(data.selectedInfo);
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.decoration {
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
    margin: 0px auto;
    max-width: 1000px;
    padding: 20px 0;
    .decoration-type {
      background-color: #afd8fa;
      padding: 5px 0;
      text-align: center;

      span {
        width: 50%;
        color: #000;
        cursor: pointer;
      }
    }
    .menu {
      .menu-oc,
      .menu-op {
        span {
          font-size: 15px;
          color: #8fbc25;
        }
        ul {
          flex-wrap: wrap;
          flex: 1;
          li {
            background-color: #edf6d9;
            border: 1px solid #8fbc25;
            color: #8fbc25;
            padding: 0 15px;
            margin: 0 10px 10px 0;
            cursor: pointer;
            font-size: 15px;
            &:hover {
              color: #fff;
              background-color: #8fbc25;
            }
          }
          .selected {
            color: #fff;
            background-color: #8fbc25;
          }
        }
      }
      .menu-op {
      }
    }
    .decoration_content {
      text-align: center;
      img {
      }
    }
  }
}
@media (max-width: 992px){
  .banner{
    img {
    opacity: 0.5;
    width:auto;
    height:200px;
  }
  }
}
</style>
