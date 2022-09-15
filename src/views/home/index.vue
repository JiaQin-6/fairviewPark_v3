<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:10:14
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-16 00:52:28
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 轮播图 -->
    <div>
      <div
        id="carouselExampleFade"
        style="text-shadow: 0px 0px 2px #000"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://picsum.photos/1024/480/?image=10"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://picsum.photos/1024/480/?image=12"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://picsum.photos/1024/480/?image=22"
              class="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- 文字跑馬燈 -->
    <div class="marquee">
      <i class="iconfont icon-laba"></i>
      <marquee>
        <a v-for="(item,index) in new_notice_list" :key="index"
          :href="item.websiteUrl"
          target="_blank"
          style="
            font-family: 'Nunito';
            font-size: 16px;
            margin-right: 40px;
          "
          :style="{'color':item.bgColor}"
        >{{item.contentEnUs}}
        </a></marquee
      >
    </div>
    <!-- 歡迎瀏覽錦綉花園 -->
    <div class="liulan">
      <h1>歡迎瀏覽<a>錦綉花園</a></h1>
      <div class="container">
        <div class="row flex-center">
          <div class="col col-12 col-lg-4 col-sm-12">
            <div
              class="bg h100"
              style="
                background-image: url('https://picsum.photos/1024/480/?image=10');
              "
            >
              <button>居民資訊</button>
            </div>
          </div>
          <div class="col col-12 col-lg-4 col-sm-12">
            <div
              class="bg h100"
              style="
                background-image: url('https://picsum.photos/1024/480/?image=10');
              "
            >
              <button>商場資訊</button>
            </div>
          </div>
          <div class="col col-12 col-lg-4 col-sm-12">
            <div
              class="bg h100"
              style="
                background-image: url('https://picsum.photos/1024/480/?image=10');
              "
            >
              <button class="fs-4">專巴時間表</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 關於我們 -->
    <div class="about-us">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 col-sm-12">
            <div class="jianjie">
              <h2>關於<a href="#">我們</a></h2>
              <p>
                歡迎進入錦綉花園物業管理有限公司網站，業戶可透過由我們自行設計之網站與我們聯繫，我們希望為業戶提供以下增值服務：
              </p>
              <ul>
                <li>
                  業戶可以瀏覽屋邨最新資訊、屋邨簡介、屋邨設施以及各屋型的結構平面圖；
                </li>
                <li>
                  新買家可從網站得到有關錦綉花園的訊息和常遇之問題和答案；
                </li>
                <li>業戶可自行下載各類所需表格，節省業戶的寶貴時間；</li>
                <li>
                  業戶可查閱自2001年成立的錦綉花園管理諮詢委員會的規章制度及本屆委員名單；
                </li>
                <li>
                  附載常用公共機構和政府部門的網址，業戶可輕易連結到相關網頁。
                </li>
              </ul>
              <p>我們會不時更新網頁，將最新資訊帶給業戶。</p>
              <button class="fs-16 white">了解更多</button>
            </div>
          </div>
          <div class="col col-12 col-lg-6 col-sm-12">
            <div class="img">
              <img :src="img1" alt="" />
              <img :src="img2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive,getCurrentInstance,toRefs, onMounted } from "vue";
export default {
  data() {
    return {
      img1: new URL("../../assets/image/home/Rectangle 22.png", import.meta.url)
        .href,
      img2: new URL("../../assets/image/home/snazzy-image.png", import.meta.url)
        .href,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let state = reactive({
        new_notice_list:[],
    });
    const findNewNoticeList = async () => {
        try {
            const res = await proxy.$http.findNewNoticeList()
            if(res.data.status===200){
                state.new_notice_list = res.data.data.records
            }
        } catch (error) {
            console.log(error)
        }
    };
    onMounted(()=>{
        findNewNoticeList()
    })
    return {
        ...toRefs(state),
		 
    };
  },
};
</script>

<style lang="less" scoped>
.carousel {
  .carousel-inner {
    .carousel-item {
    }
  }
}
.marquee {
  background: rgba(252, 220, 0, 0.301961);
  padding: 0 0 0 70px;
  box-sizing: border-box;
  height: 54px;
  position: relative;
  .icon-laba {
    position: absolute;
    left: 30px;
    top: 12px;
    font-size: 24px;
    color: #ff6060;
  }
  marquee {
    line-height: 54px;
  }
}
.liulan {
  h1 {
    margin-bottom: 45px;
    margin-top: 60px;
    a {
      color: #2fa94e;
    }
  }
  .container {
    .row {
      .col {
        width: 370px;
        height: 355px;
        position: relative;
        padding: 0 25px;
        box-sizing: border-box;
        margin-bottom: 50px;
        .bg {
          background-size: cover;
          border-radius: 30px;
          button {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            background: rgba(143, 188, 37, 0.9);
            border-radius: 20px;
            height: 70px;
            line-height: 70px;
            border: 0;
            font-size: 24px;
            color: #fff;
          }
        }
      }
    }
  }
}
.about-us {
  margin-bottom: 20px;
  .container {
    .row {
      .col {
        text-align: left;
        .jianjie {
          margin-bottom: 30px;
          .title {
            color: red;
          }
          h2 {
            margin: 26px 0 30px 0;
            a {
              color: #82be00;
            }
          }
          p {
            font-size: 16px;
            font-family: "Quicksand";
            font-weight: 700;
            color: #70798b;
            margin-bottom: 40px;
          }
          ul {
            padding: 0px 0 15px 35px;
            li {
              font-size: 16px;
              list-style-type: disc;
              font-family: "Quicksand";
              font-weight: 700;
              color: #70798b;
              margin-bottom: 30px;
            }
          }
          button {
            background: #f0be64;
            padding: 7px 35px;
            border-radius: 25px;
            border: 0;
          }
        }

        .img {
          position: relative;
          text-align: center;
          height: 470px;
          img:first-child {
            width: 90%;
            max-width: 440px;
            max-height: 440px;
            border-radius: 20px;
            position: absolute;
            right: 0;
            top: 0;
          }
          img:last-child {
            width: 90%;
            max-width: 440px;
            max-height: 440px;
            border-radius: 20px;
            position: absolute;
            right: 30px;
            top: 30px;
          }
        }
      }
    }
  }
}
</style>