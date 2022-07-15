/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-14 22:25:38
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-07-14 23:37:05
 * @FilePath: /fairviewpark/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/components/header/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from "vue";
import './index.css'
import logo from '../../assets/image/home/fairview park logo.png'
export default defineComponent({
    setup(props,) {
        const count = ref(0);
        return () => {
            return (
                <div class={"main"}>
                    <nav class={"navbar navbar-expand-lg navbar-dark bg-dark px-xl-5"}>
                        <div class={"container-fluid"}>
                            <a class={"navbar-brand"} href="#">
                                <img src={logo} alt=""
                                />
                            </a>
                            <button class={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class={"navbar-toggler-icon"}></span>
                            </button>
                            <div class={"collapse navbar-collapse"} id="navbarSupportedContent">
                                <ul class={"navbar-nav me-auto mb-2 mb-lg-0"}>
                                    <li class={"nav-item"}>
                                        <a class={"nav-link active"} aria-current="page" href="#">首頁</a>
                                    </li>
                                    <li class={"nav-item"}>
                                        <a class={"nav-link"} href="#">關於我們</a>
                                    </li>
                                    <li class={"nav-item dropdown"}>
                                        <a class={"nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            新買家須知
                                        </a>
                                        <ul class={"dropdown-menu"} aria-labelledby="navbarDropdown">
                                            <li><a class={"dropdown-item"} href="#">Action</a></li>
                                            <li><a class={"dropdown-item"} href="#">Another action</a></li>

                                            <li><a class={"dropdown-item"} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class={"nav-item dropdown"}>
                                        <a class={"nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            屋邨資料
                                        </a>
                                        <ul class={"dropdown-menu"} aria-labelledby="navbarDropdown">
                                            <li><a class={"dropdown-item"} href="#">Action</a></li>
                                            <li><a class={"dropdown-item"} href="#">Another action</a></li>

                                            <li><a class={"dropdown-item"} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class={"nav-item dropdown"}>
                                        <a class={"nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            專巴時間表
                                        </a>
                                        <ul class={"dropdown-menu"} aria-labelledby="navbarDropdown">
                                            <li><a class={"dropdown-item"} href="#">Action</a></li>
                                            <li><a class={"dropdown-item"} href="#">Another action</a></li>

                                            <li><a class={"dropdown-item"} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class={"nav-item dropdown"}>
                                        <a class={"nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            商城資訊
                                        </a>
                                        <ul class={"dropdown-menu"} aria-labelledby="navbarDropdown">
                                            <li><a class={"dropdown-item"} href="#">Action</a></li>
                                            <li><a class={"dropdown-item"} href="#">Another action</a></li>

                                            <li><a class={"dropdown-item"} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class={"nav-item dropdown"}>
                                        <a class={"nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            常用電話及連接
                                        </a>
                                        <ul class={"dropdown-menu"} aria-labelledby="navbarDropdown">
                                            <li><a class={"dropdown-item"} href="#">Action</a></li>
                                            <li><a class={"dropdown-item"} href="#">Another action</a></li>

                                            <li><a class={"dropdown-item"} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class={"nav-item dropdown"}>
                                        <a class={"nav-link dropdown-toggle"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            屋邨通知須知
                                        </a>
                                        <ul class={"dropdown-menu"} aria-labelledby="navbarDropdown">
                                            <li><a class={"dropdown-item"} href="#">Action</a></li>
                                            <li><a class={"dropdown-item"} href="#">Another action</a></li>

                                            <li><a class={"dropdown-item"} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul class={"navbar-nav me-auto mb-2 mb-lg-0 flex-row align-center btn"}>
                                    <div class={"lang"}>
                                        <span>ENG</span>
                                        <i></i>
                                        <span>中文</span>
                                    </div>
                                    <div class={"line"}></div>
                                    <button class={"login"}>業主登入</button>
                                    <i class={"iconfont icon-lingdang white"}></i>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            );
        };
    },
});