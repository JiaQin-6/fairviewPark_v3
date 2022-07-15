/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-14 22:25:32
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-07-14 23:07:23
 * @FilePath: /fairviewpark/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/components/footer/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from "vue";
import './index.css'
import logo from '../../assets/image/home/fairview park logo.png'
import app_store_icon from '../../assets/image/home/App store icon.png'
import google_play_icon from '../../assets/image/home/Google play icon.png'
export default defineComponent({
    setup() {
        return () => {
            return (
                <div class={'main'}>
                    {/* 上部份 */}
                    <div class={'top-part'}>
                        {/* 左部份 */}
                        <div class={'row'}>
                            <div class="col col-12 col-lg-8 col-sm-12 flex-row space-between">
                                <img
                                    class={'logo'}
                                    src={logo}
                                    alt=""
                                />
                                <div class={"browse"}>
                                    <h3 class={"fs-16 mt-20"}>瀏覽網頁</h3>
                                    <ul class={"link fs-16 flex-row flex-wrap"}>
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
                            {/* 右部份 */}
                            <div class={"col col-12 col-lg-4 col-sm-12 flex-row flex-column download"}>
                                <h3 class={"fs-16 black mt-20"}>手機應用程序</h3>
                                <p>下載 iOS & Android 錦綉花園 APP</p>
                                <div class={"image"}>
                                    <img src={app_store_icon} alt="" />
                                    <img src={google_play_icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 下部份 */}
                    <div class={"bottom-part"}>
                        <div class={"row"}>
                            {/* 左部份 */}
                            <div class={"col col-12 col-xl-8 col-md-6 "}>
                                <p class={"fs-16"}>© 2022 Fairview Park . All Rights Reserved</p>
                            </div>
                            {/* 右部份 */}
                            <div class={"col col-12 col-xl-4 col-md-6 "}>
                                <ul class={"flex-row"}>
                                    <li class={"fs-16"}>Term And Conditions</li>
                                    <li class={"fs-16"}>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
    },
});