<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-04 00:12:03
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h5>
      {{
        fairview_park_lang === "en_us"
          ? "Minutes of MAC Meetings"
          : "大會會議記錄"
      }}
    </h5>
    <div class="content">
        <ul>
            <li v-for="(item,index) in minutes_of_mac_meetings_list" :key="index" class="flex-row">
                <i>{{index+1}}.</i>
                <span><a :href="item.pdfUrlEnUs">{{item.titleEnUs}}</a></span>
            </li>
        </ul>
    </div>
  </div>
</template>
  
  <script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      minutes_of_mac_meetings_list:[]
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findMinutesOfMacMeetingsList = async () => {
      try {
        const res = await proxy.$http.findMinutesOfMacMeetingsList({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.minutes_of_mac_meetings_list = res.data.data.records;
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async () => {
        findMinutesOfMacMeetingsList()
    });
    return {
      ...toRefs(data),
      findMinutesOfMacMeetingsList
    };
  },
};
</script>
  
  <style lang="less" scoped>
  h5{
    font-size: 16px;
    margin-bottom:20px;
  }
    .content{
        ul{
            padding: 0;
            li{
                font-size: 15px;
                margin-bottom:20px;
                i{
                    width:40px;
                    line-height: 40px;
                    text-align: center;
                    background-color: #e3f3b3;
                }
                span{

                    line-height: 25px;
                    background-color: #fff0be;
                    flex: 1;
                    padding: 7px 0 7px 10px;
                    a{
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>
  