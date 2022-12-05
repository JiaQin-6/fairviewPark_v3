<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-02 21:52:20
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
    <div class="menu">
      <span
        v-for="(item, index) in minutes_of_mac_meetings_list"
        :key="index"
        @click="jumpLink(index)"
        >{{ item.titleEnUs }}</span
      >
    </div>
    <div
      class="content"
      v-for="(item, index) in minutes_of_mac_meetings_list"
      :key="index"
      :id="'minutes-of-mac-meetings' + index"
    >
      <p >{{ item.titleEnUs }}</p>
      <ul>
        <li
          v-for="(item, index) in item.children"
          :key="index"
          class="flex-row"
        >
          <i>{{ index + 1 }}.</i>
          <span
            ><a :href="item.pdfUrlEnUs">{{ item.titleEnUs }}</a></span
          >
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
      select_index: 0,
      minutes_of_mac_meetings_list: [],
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //查看所有列表
    const findMinutesOfSubComMeetingsList = async (id) => {
      try {
        const res = await proxy.$http.findMinutesOfSubComMeetingsList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          if (id) {
            for (let i = 0; i < data.minutes_of_mac_meetings_list.length; i++) {
              if(data.minutes_of_mac_meetings_list[i].id===id){
                data.minutes_of_mac_meetings_list[i].children = res.data.data.records
              }
            }
            
          } else {
            data.minutes_of_mac_meetings_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    const jumpLink = (index) => {
      document.querySelector("#minutes-of-mac-meetings" + index).scrollIntoView({block: "center"});
    };
    onMounted(async () => {
      await findMinutesOfSubComMeetingsList();
      for (let i = 0; i < data.minutes_of_mac_meetings_list.length; i++) {
         findMinutesOfSubComMeetingsList(
            data.minutes_of_mac_meetings_list[i].id
        );
      }
     
    });
    
    return {
      ...toRefs(data),
      findMinutesOfSubComMeetingsList,
      jumpLink
    };
  },
};
</script>

<style lang="less" scoped>
 h5{
    font-size: 16px;
    margin-bottom:20px;
  }
.menu {
  margin-bottom: 20px;
  text-align: center;
  span {
    border-right: 2px solid #000;
    padding: 0 10px;
    cursor: pointer;
    font-size: 15px;
    &:last-child {
      border: 0;
    }
  }
}
.content {
  margin-bottom: 30px;
  p {
    background-color: #a1d134;
    margin: 0 0 5px 0;
    padding: 5px 10px;
    font-size: 15px;
  }
  ul {
    padding: 0;
    li {
      font-size: 15px;
      i {
        width: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #e3f3b3;
      }
      span {
        line-height: 25px;
        background-color: #fff0be;
        flex: 1;
        padding: 7px 0 7px 10px;
        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
