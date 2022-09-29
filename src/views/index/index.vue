<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:11:53
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-09-28 00:05:17
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <Login></Login>
  </div>
</template>

<script>
import Header from "../../components/header/index.vue";
import Footer from "../../components/footer/index.vue";
import Login from '../login/index.vue';
export default {
  components: {
    Header, 
    Footer,
    Login
  },
};
</script>

<style>
</style>