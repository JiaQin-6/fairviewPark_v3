<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-13 00:14:22
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="decoration">
    <div class="content row">
      <p style="padding:0;font-size: 36px;color:#9cc212;font-weight:bold;">
        {{
            fairview_park_lang === "en_us"
              ? "House Type Enquiry"
              : "原型圖查詢"
        }}
      </p>
      <!-- nar -->
      <div class="decoration-type mb-20 flex-row">
        <span :class="{ active: type === 1 }" @click="type = 1">{{
            fairview_park_lang === "en_us" ? "Cast in Situ" : "原地建築"
        }}</span>
        <span :class="{ active: type === 2 }" @click="type = 2">{{
            fairview_park_lang === "en_us" ? "Precast" : "預制組件"
        }}</span>
      </div>
      <!-- 選項 -->
      <div class="menu mt-20">
        <!-- <transition name="el-zoom-in-top"> -->
        <div class="animate__animated animate__fadeInUp" v-show="type === 1">
          <div class="menu-oc row flex-row">
            <span class="col-12 col-md-2">{{
                (fairview_park_lang === "en_us" ? "Cast in Situ" : "原地建築") + "（OC）"
            }}</span>
            <ul class="flex-row">
              <li v-for="(item, index) in fairview_park_lang === 'en_us'
              ? castInsituOc_en
              : castInsituOc_zh" :key="index" @click="selectedInfo = item"
                :class="{ selected: selectedInfo.title == item.title }">
                {{ item.title }}
              </li>
            </ul>
          </div>
          <div class="menu-op row flex-row">
            <span class="col-12 col-md-2">{{
                (fairview_park_lang === "en_us" ? "Cast in Situ" : "原地建築") + "（OP）"
            }}</span>
            <ul class="flex-row">
              <li v-for="(item, index) in fairview_park_lang === 'en_us'
              ? castInsituOp_en
              : castInsituOp_zh" :key="index" @click="selectedInfo = item">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
        <!-- </transition> -->

        <!-- <transition name="el-zoom-in-top"> -->
        <div class="animate__animated animate__fadeInUp" v-show="type === 2">
          <div class="menu-oc row flex-row">
            <span class="col-12 col-md-2">{{
                (fairview_park_lang === "en_us" ? "Precast" : "預制組件") + "（OC）"
            }}</span>
            <ul class="flex-row">
              <li v-for="(item, index) in fairview_park_lang === 'en_us'
              ? precastOc_en
              : precastOc_zh" :key="index" @click="selectedInfo = item"
                :class="{ selected: selectedInfo.title == item.title }">
                {{ item.title }}
              </li>
            </ul>
          </div>
          <!--  -->
          <div class="menu-op row flex-row" v-show="type === 2">
            <span class="col-12 col-md-2">{{
                (fairview_park_lang === "en_us" ? "Precast" : "預制組件") + "（OP）"
            }}</span>
            <ul class="flex-row">
              <li v-for="(item, index) in fairview_park_lang === 'en_us'
              ? precastOp_en
              : precastOp_zh" :key="index" @click="selectedInfo = item">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
        <!-- </transition> -->
      </div>
      <!-- 圖片內容 -->
      <div class="decoration_content">
        <img :src="selectedInfo.image" alt="" style="width: 100%; max-width: 976px" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";

export default {

  setup() {
    const data = reactive({
      castInsituOc_en: [
        {
          title: "Type 850/1",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/2",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/3",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/4",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/1",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/2",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/3",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/4",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 950/1",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1100",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1100.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1150/C",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1150_c.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1150",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1150.gif",
            import.meta.url
          ).href,
        },
      ],
      castInsituOc_zh: [
        {
          title: "850/1 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/2 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/3 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/4 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/1 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/2 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/3 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/4 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "950/1 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1100 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1100.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1150/C 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1150_c.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1150 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_oc/1150.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOc_en: [
        {
          title: "Type 850/1",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/2",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/3",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 850/4",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/1",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/2",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/3",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1050/4",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 950/1",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1100",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1100.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOc_zh: [
        {
          title: "850/1 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/2 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/3 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "850/4 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/850_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/1 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/2 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_2.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/3 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_3.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1050/4 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1050_4.gif",
            import.meta.url
          ).href,
        },
        {
          title: "950/1 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/950_1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1100 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_oc/1100.gif",
            import.meta.url
          ).href,
        },
      ],
      castInsituOp_en: [
        {
          title: "Type 1050/5",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1050_5.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1150/D",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1150_d.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300/A",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300_a.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300/A1",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300_a1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1300/B",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300_b.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1500",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1700",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1700.gif",
            import.meta.url
          ).href,
        },
      ],
      castInsituOp_zh: [
        {
          title: "1050/5 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1050_5.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1150/D 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1150_d.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300/A 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300_a.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300/A1 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300_a1.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1300/B 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1300_b.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1500 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1700 型",
          image: new URL(
            "../../../assets/image/prospective buyer/cast_in_situ_op/1700.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOp_en: [
        {
          title: "Type 1500",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "Type 1700",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_op/1700.gif",
            import.meta.url
          ).href,
        },
      ],
      precastOp_zh: [
        {
          title: "1500 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_op/1500.gif",
            import.meta.url
          ).href,
        },
        {
          title: "1700 型",
          image: new URL(
            "../../../assets/image/prospective buyer/precast_op/1700.gif",
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
  width: 100%;

  .content {
    margin: 0px auto;
    max-width: 1000px;
    padding: 0 20px;

    .decoration-type {
      padding: 0;
      text-align: center;

      span {
        width: 50%;
        padding: 5px 0;
        color: var(--mainColor1);
        cursor: pointer;
        border: 1px solid var(--mainColor1);
        background-color: #fff;

        &:hover {
          color: #fff;
          background-color: var(--mainColor1);
        }
      }

      .active {
        color: #fff;
        background-color: var(--mainColor1);
      }
    }

    .menu {
      padding: 0;
      overflow: hidden;

      .menu-oc,
      .menu-op {
        span {
          font-size: 15px;
          color: var(--mainColor1);
        }

        ul {
          flex-wrap: wrap;
          flex: 1;

          li {
            background-color: #fff;
            border: 1px solid var(--mainColor2);
            color: var(--mainColor2);
            padding: 2px 15px;
            margin: 0 10px 10px 0;
            border-radius: 2px;
            cursor: pointer;
            font-size: 15px;

            &:hover {
              color: #fff;
              background-color: var(--mainColor2);
            }
          }

          .selected {
            color: #fff;
            background-color: var(--mainColor2);
          }
        }
      }

      .menu-op {}
    }

    .decoration_content {
      padding: 0;
      text-align: center;

      img {}
    }
  }
}
</style>
