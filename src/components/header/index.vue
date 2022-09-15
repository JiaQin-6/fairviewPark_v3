<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 23:18:57
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-15 23:28:20
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/components/header/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-xl-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img :src="logo" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">首頁</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">關於我們</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                新買家須知
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                屋邨資料
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                專巴時間表
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                商城資訊
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                常用電話及連接
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                屋邨通知須知
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row align-center btn">
            <div class="lang">
              <span>ENG</span>
              <i></i>
              <span>中文</span>
            </div>
            <div class="line"></div>
            <button class="login">業主登入</button>
            <i class="iconfont icon-lingdang white"></i>
          </ul>
        </div>
      </div>
    </nav>
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
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  background: #255534;
  .navbar {
    max-width: 1920px;
    height: 80px;
    left: 0px;
    top: 0px;
    mix-blend-mode: normal;
    padding: 0;
    margin: 0 auto;
    align-items: inherit;
    justify-content: space-between;
    .container-fluid {
      align-items: inherit;
    }
    .navbar-brand {
      padding: 0;
      margin-left: 20px;
      img {
      }
    }
    .navbar-collapse {
      margin-left: auto;
      justify-content: space-between;
    }
    > .show {
      background-color: #fff;
      margin-top: -33px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0px 10px 30px rgb(83 88 93 / 40%);
      ul {
        li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 8px 30px;
          a {
            color: #066ac9 !important;
            span {
              color: #066ac9 !important;
            }
          }
        }
        .icon-lingdang {
          color: #255534 !important;
        }
      }
      .btn {
        padding: 10px 0;
      }
    }
    .navbar-toggler {
      margin-top: 15px;
      margin-right: 20px;
      height: 50px;
    }
    .me-auto {
      margin-right: 0 !important;
      .lang {
        width: 80px;
        height: 35px;
        background: #f0ce5f;
        border-radius: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 14px;
          line-height: 35px;
        }
        i {
          width: 2px;
          height: 20px;
          background-color: #252525;
          margin: 0px 5px 0;
        }
      }
      .line {
        background-color: #abafc7;
        height: 30px;
        width: 1px;
        margin: 0 30px;
      }
      .login {
        width: 100px;
        height: 35px;
        background: #8fbc25;
        border-radius: 150px;
        border: 0;

        font-size: 16px;
        color: #fff;
        margin-right: 30px;
      }
      .icon-lingdang {
        font-size: 25px;
      }
    }
  }
}
</style>