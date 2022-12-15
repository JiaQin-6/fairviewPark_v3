<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 23:53:30
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h5>
      {{ fairview_park_lang === "en_us" ? "MAC Meetings" : "會議記錄" }}
    </h5>
    <div class="menu">
      <div
        class="sub-menu"
        :class="{ active: menuActive === item2.value }"
        v-for="(item2, index2) in [
          {
            text:
              fairview_park_lang === 'en_us' ? 'Minutes of MAC Meetings' : '大會議記錄',
            value: 1,
          },
          {
            text:
              fairview_park_lang === 'en_us'
                ? 'Minutes of Sub-com. Meetings'
                : '分組會議記錄',
            value: 2,
          },
          {
            text: fairview_park_lang === 'en_us' ? 'Work Review' : '工作回顧',
            value: 3,
          },
        ]"
        :key="index2"
        @click="menuActive = item2.value"
      >
        {{ item2.text }}
      </div>
    </div>
    <div class="content">
      <ul v-show="menuActive === 1">
        <li
          v-for="(item, index) in minutes_of_mac_meetings_list"
          :key="index"
          class="flex-row"
        >
          <i>{{ index + 1 }}.</i>
          <span
            ><a :href="item.pdfUrlEnUs">{{ item.titleEnUs }}</a></span
          >
        </li>
      </ul>
      <div v-show="menuActive === 2">
        <div class="menu">
          <span
            v-for="(item, index) in minutes_of_sub_mac_meetings_list"
            :key="index"
            @click="selectSubMacMeeting(index)"
            >{{ item.titleEnUs }}</span
          >
        </div>
        <div class="content" v-if="minutes_of_sub_mac_meetings_list.length!==0">
          <p>{{ minutes_of_sub_mac_meetings_list[sub_mac_meetings_index].titleEnUs }}</p>
          <ul>
            <li v-for="(item, index) in minutes_of_sub_mac_meetings_list[sub_mac_meetings_index].children" :key="index" class="flex-row">
              <i>{{ index + 1 }}.</i>
              <span
                ><a :href="item.pdfUrlEnUs">{{ item.titleEnUs }}</a></span
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-show="menuActive === 3">
        <div id="pdf-wrap">
          <div id="pdf-preview" style="width: 100%; height: 600px; margin: 0 auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import PDFJSExpress from "@pdftron/pdfjs-express";
export default {
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    const data = reactive({
      fairview_park_lang: "",
      minutes_of_mac_meetings_list: [],
      menuActive: 1,
      minutes_of_sub_mac_meetings_list: [],
      sub_mac_meetings_index:0,
      MacColumnFile: "",
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
    const findMinutesOfSubComMeetingsList = async (id) => {
      try {
        const res = await proxy.$http.findMinutesOfSubComMeetingsList({
          lang: data.fairview_park_lang,
          parentId: id,
        });
        if (res.data.status === 200) {
          if (id) {
            for (let i = 0; i < data.minutes_of_sub_mac_meetings_list.length; i++) {
              if (data.minutes_of_sub_mac_meetings_list[i].id === id) {
                data.minutes_of_sub_mac_meetings_list[i].children = res.data.data.records;
              }
            }
          } else {
            data.minutes_of_sub_mac_meetings_list = res.data.data.records;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    //查看工作回顧pdf
    const findOneMacColumnFile = async () => {
      try {
        const res = await proxy.$http.findOneMacColumnFile({
          lang: data.fairview_park_lang,
        });
        if (res.data.status === 200) {
          data.MacColumnFile = res.data.data.pdfUrlEnUs;
        }
      } catch (error) {
        console.log(error);
      }
    };
    //
    const selectSubMacMeeting = async (index) =>{
      data.sub_mac_meetings_index = index;
      await findMinutesOfSubComMeetingsList(data.minutes_of_sub_mac_meetings_list[index].id);
    };
    onMounted(async () => {
      findMinutesOfMacMeetingsList();
      await findMinutesOfSubComMeetingsList();
      await findMinutesOfSubComMeetingsList(data.minutes_of_sub_mac_meetings_list[0].id);
      await findOneMacColumnFile();
      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc: data.MacColumnFile,
        },
        document.getElementById("pdf-preview")
      ).then((instance) => {});
    });
    return {
      ...toRefs(data),
      findMinutesOfMacMeetingsList,
      findMinutesOfSubComMeetingsList,
      findOneMacColumnFile,
      selectSubMacMeeting
    };
  },
};
</script>

<style lang="less" scoped>
h5 {
  font-size: 36px;
  color: var(--mainColor3);
  text-align: left;
}

.menu {
  display: flex;
  margin-bottom: 20px;

  .sub-menu {
    font-size: 24px;
    font-weight: bold;
    padding: 0px 25px;
    cursor: pointer;
  }

  .active {
    background-color: var(--mainColor1);
    color: #fff;
  }
}

.content {
  ul {
    padding: 0;

    li {
      font-size: 15px;
      margin-bottom: 20px;

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
  .menu {
    margin-bottom: 20px;
    text-align: center;
    span {
      border-right: 2px solid #000;
      padding: 0 10px;
      cursor: pointer;
      font-size: 18px;
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
      font-size: 18px;
    }
    ul {
      padding: 0;
      li {
        font-size: 18px;
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
}
</style>
