<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 23:18:38
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-15 23:24:12
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/components/footer/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main">
    <!-- 上部份 -->
    <div class="top-part">
      <!-- 左部份 -->
      <div class="row">
        <div class="col col-12 col-lg-8 col-sm-12 flex-row space-between">
          <img class="logo" :src="logo" alt="" />
          <div class="browse">
            <h3 class="fs-16 mt-20">瀏覽網頁</h3>
            <ul class="link fs-16 flex-row flex-wrap">
              <li>關於我們</li>
              <li>新買家須知</li>
              <li>屋邨資料</li>
              <li>專巴時間表</li>
              <li>商場資訊</li>
              <li>常用電話及連接</li>
              <li>屋邨通告須知</li>
            </ul>
          </div>
        </div>
        <!-- 右部份 -->
        <div
          class="col col-12 col-lg-4 col-sm-12 flex-row flex-column download"
        >
          <h3 class="fs-16 black mt-20">手機應用程序</h3>
          <p>下載 iOS & Android 錦綉花園 APP</p>
          <div class="image">
            <img :src="app_store_icon" alt="" />
            <img :src="google_play_icon" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 下部份 -->
    <div class="bottom-part">
      <div class="row">
        <!-- 左部份 -->
        <div class="col col-12 col-xl-8 col-md-6">
          <p class="fs-16">© 2022 Fairview Park . All Rights Reserved</p>
        </div>
        <!-- 右部份 -->
        <div class="col col-12 col-xl-4 col-md-6">
          <ul class="flex-row">
            <li class="fs-16">Term And Conditions</li>
            <li class="fs-16">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: new URL(
        "../../assets/image/home/fairview park logo.png",
        import.meta.url
      ).href,
      app_store_icon: new URL(
        "../../assets/image/home/App store icon.png",
        import.meta.url
      ).href,
      google_play_icon: new URL(
        "../../assets/image/home/Google play icon.png",
        import.meta.url
      ).href,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #e5e5e5;
  .top-part {
    border-bottom: 2px solid #abafc7;
    padding-bottom: 30px;
    .row {
      max-width: 1000px;
      margin: 0 auto;
      .col {
        text-align: left;
        .logo {
          width: 66px;
        }
        .browse {
          width: 60%;
          text-align: left;
          h3 {
            font-family: "Nunito";
            font-weight: 700;
            color: #000;
            line-height: 30px;
          }
          ul {
            height: 110px;
            flex-direction: column !important;
            padding-left: 0;
            li {
              font-family: "Quicksand";
              font-style: normal;
              font-size: 16px;
              line-height: 25px;
              color: #70798b;
            }
          }
        }
        p {
          font-size: 16px;
          color: #70798b;
          line-height: 30px;
        }
        .image {
          img {
            margin-right: 10px;
          }
        }
      }
      .download {
        justify-content: right;
      }
    }
  }
  .bottom-part {
    .row {
      // padding: 10px 10px;
      width: 100%;
      .col {
        text-align: left;
        margin: 10px 0;

        p {
          font-family: "Quicksand";
          color: #70798b;
          padding: 0 20px;
        }
        ul {
          padding-left: 0;
          li {
            padding: 0 20px;
            font-family: "Quicksand";
            color: #70798b;
            &:first-child {
              border-right: 1px solid #abafc7;
            }
          }
        }
      }
    }
  }
}
</style>