/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 22:23:40
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-07-15 23:50:31
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/src/components/HelloWorld.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from "vue";
import './index.css'
import img_rectangle from '../../assets/image/home/Rectangle 22.png'
import img_snazzy from "../../assets/image/home/snazzy-image.png"
export default defineComponent({
  setup(props,) {
    const count = ref(0);
    return () => {
      return (
        <div>
          {/*  轮播图 */}
          <div>
            <div id="carouselExampleFade"
              style="text-shadow: 0px 0px 2px #000" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://picsum.photos/1024/480/?image=10" class="d-block w-100" alt=""/>
                </div>
                <div class="carousel-item">
                  <img src="https://picsum.photos/1024/480/?image=12" class="d-block w-100" alt=""/>
                </div>
                <div class="carousel-item">
                  <img src="https://picsum.photos/1024/480/?image=22" class="d-block w-100" alt=""/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* 文字跑馬燈 */}
          <div class={"marquee"}>
            <i class={"iconfont icon-laba"}></i>
            <marquee>
              <a
                href="#"
                style="font-family: 'Nunito';font-size: 16px;margin-right: 40px;color: #255534;"
              >
                「智慧能源舍區」簡介及招募日 - 歡迎報名參加太陽能車工作坊
                (名額先到先得)！
              </a>
              <a
                href="#"
                style="font-family: 'Nunito';font-size: 16px;margin-right: 40px;color: #fd346e;"
              >
                請更新2021-2022年度住戶車輛入閘証
              </a>
              <a
                href="#"
                style="font-family: 'Nunito';font-size: 16px;margin-right: 40px;color: #0eabbb;"
              >
                歡迎申請住戶智能咭
              </a></marquee
            >
          </div>
          {/* 歡迎瀏覽錦綉花園 */}
          <div class={"liulan"}>
            <h1>歡迎瀏覽<a>錦綉花園</a></h1>
            <div class={"container"}>
              <div class={"row flex-center"}>
                <div class={"col col-12 col-lg-4 col-sm-12"}>
                  <div
                    class={"bg h100"}
                    style="background-image: url('https://picsum.photos/1024/480/?image=10');"
                  >
                    <button>居民資訊</button>
                  </div>
                </div>
                <div class={"col col-12 col-lg-4 col-sm-12"}>
                  <div
                    class={"bg h100"}
                    style="background-image: url('https://picsum.photos/1024/480/?image=10');"
                  >
                    <button>商場資訊</button>
                  </div>
                </div>
                <div class={"col col-12 col-lg-4 col-sm-12"}>
                  <div
                    class={"bg h100"}
                    style="background-image: url('https://picsum.photos/1024/480/?image=10');"
                  >
                    <button class={"fs-4"}>專巴時間表</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 關於我們 */}
          <div class={"about-us"}>
            <div class={"container"}>
              <div class={"row"}>
                <div class={"col col-12 col-lg-6 col-sm-12"}>
                  <div class={"jianjie"}>
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
                    <button class={"fs-16 white"}>了解更多</button>
                  </div>
                </div>
                <div class={"col col-12 col-lg-6 col-sm-12"}>
                  <div class={"img"}>
                    <img src={img_rectangle} alt="" />
                    <img src={img_snazzy} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});
