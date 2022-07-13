/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-07-13 22:23:40
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-07-13 22:44:14
 * @FilePath: /fairviewpark/Users/david/Desktop/vue3.0/fairviewPark/src/components/HelloWorld.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from 'vue';

export default defineComponent({
    
    setup() {
        const count = ref(0)
        return () => {
            return (
                <div>
                    <div>
                        <a href="https://vitejs.dev" target="_blank">
                            <img src="/vite.svg" class="logo" alt="Vite logo" />
                        </a>
                        <a href="https://vuejs.org/" target="_blank">
                            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
                        </a>
                    </div>
                    <HelloWorld msg="Hello Vue 3 + Vite8" />
                </div>

            )
        }
    }
});