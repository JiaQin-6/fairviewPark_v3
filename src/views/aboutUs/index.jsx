/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-14 21:37:48
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-07-27 00:34:37
 * @FilePath: /fairviewpark/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from "vue";
import './index.css'
import banner_img from '../../assets/image/aboutUs/banner.png'
import home_img from '../../assets/image/home/snazzy-image.png'
import { number } from "@intlify/core-base";
export default defineComponent({
  setup(props,) {
    const count = ref(0);
    const nav_list = [
      {
        icon: "icon-zhuye",
        text: "簡介",
      },
      {
        icon: "icon-kehufuwukefu",
        text: "客戶服務部",
      },
      {
        icon: "icon-zhongxinhuanjing",
        text: "環境服務部",
      },
      {
        icon: "icon-baoan",
        text: "保安部",
      },
      {
        icon: "icon-weixiu",
        text: "維修部",
      },
      {
        icon: "icon-tuandui",
        text: "行政部",
      },
      {
        icon: "icon-renliziyuan",
        text: "人力資源部",
      },
      {
        icon: "icon-tubiaozhizuomoban-48",
        text: "會計部",
      },
      {
        icon: "icon-zixun",
        text: "資訊科技部",
      },
    ];
    const nav_index = 0;
    return () => {
      return (
        <div>
          {/* banner */}
          <div class={"banner"}>
            <img src={banner_img} alt="" />
            <p>關於<b>我們</b></p>
          </div>
          {/* navs */}
          <div class={"nav-wrap"}>
            <div class={"row"}>
              <div class={"col-12 col-lg-2 aside"}>
                <ul class={"row"}>
                  {
                    nav_list.map((item, index) => {
                      return <li
                        class={['col-4', 'col-lg-12', nav_index === index ? 'active' : '']}
                        onClick={() => { nav_index = index }}>
                        <i class={["iconfont", item.icon]}></i>
                        <span>{item.text}</span>
                      </li>
                    })
                  }
                </ul>
              </div>
              <div class={"col-12 col-lg-10 nav-content"}>
                {/*  關於我們 */}
                <div class={"about-us"}>
                  <div class={"container"}>
                    <div class={"row"}>
                      <div class={"col col-12 col-lg-6 col-sm-12"}>
                        <div class={"jianjie"}>
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
                        </div>
                      </div>
                      <div class={"col col-12 col-lg-6 col-sm-12"}>
                        <div class={"img"}>
                          <img src={home_img} alt="" />
                        </div>
                      </div>
                    </div>
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
