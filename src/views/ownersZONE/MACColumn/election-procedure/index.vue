<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-10-31 22:31:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 01:51:55
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/ownersZONE/MACColumn/sample-of-candidate-form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-select
      v-model="menuActive"
      class="menu-select"
      style="margin-bottom:20px"
      :placeholder="$t('Select')"
      size="large"
      @click="menuActive = item2.value"
    >
      <el-option
        v-for="(item, index) in [
          {
            text: fairview_park_lang === 'en_us' ? 'Election Procedure' : '選舉程序',
            value: 1,
          },
          {
            text:
              fairview_park_lang === 'en_us' ? 'Election Activities Rules' : '選舉守則',
            value: 2,
          },
          {
            text:
              fairview_park_lang === 'en_us'
                ? 'Election Activities Rules Time Table'
                : '選舉守則時間表',
            value: 3,
          },
        ]"
        :key="index"
        :label="item.text"
        :value="item.value"
      />
    </el-select>
    <h5>{{ fairview_park_lang === "en_us" ? "Election Procedure" : "選舉程序" }}</h5>
    <div class="menu">
      <div
        class="sub-menu"
        :class="{ active: menuActive === item2.value }"
        v-for="(item2, index2) in [
          {
            text: fairview_park_lang === 'en_us' ? 'Election Procedure' : '選舉程序',
            value: 1,
          },
          {
            text:
              fairview_park_lang === 'en_us' ? 'Election Activities Rules' : '選舉守則',
            value: 2,
          },
          {
            text:
              fairview_park_lang === 'en_us'
                ? 'Election Activities Rules Time Table'
                : '選舉守則時間表',
            value: 3,
          },
        ]"
        :key="index2"
        @click="menuActive = item2.value"
      >
        {{ item2.text }}
      </div>
    </div>
    <div>
      <div
        v-show="menuActive === 1"
        style="font-size: 18px"
        v-for="(item, index) in [
          {
            title: fairview_park_lang === 'en_us' ? 'Election Notice' : '選舉通告',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'At least 60 days before the Election Day, the Manager shall distribute Estate Notices to residents giving notice of Election Day and Election Procedure and distributing Candidate Forms.'
                    : '在選舉日前最少六十天，管理人須向居民派發管理通告，通知選舉日和選舉程序，及準備妥當其他有關表格。',
                index: '1',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Candidates' : '候選人',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Each Candidate shall personally deliver a completed Candidate Form, duly signed by himself and owners nominating him, to the Management Office not later than the day specified in the Estate Notice, being a day not less than 40 days before the Election Day. A corporate owner shall deliver the completed Candidate Form by a duly authorized representative together with a written authorization from the corporation. Upon receipt of a duly completed Candidate Form, the Management Office shall issue an acknowledgment thereof.'
                    : '候選人須在屋苑管理通告指定的時限內，即在選舉日前不少於四十天，把候選人表格(附錄二)填妥並簽署，並按照要求，連同附有業主簽名提名其參選的提名表格(附錄三)，親自送交管理處。法人團體須由正式授權的代表將填妥的候選人表格，連同法人團體的書面授權書送交管理處。管理處收妥候選人表格及提名表格後，會發通知書予候選人確認收妥表格。',
                index: '2',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The Manager shall verify the information and particulars contained in the Candidate Forms and publish names of candidates for each Geographical Section not less than 30 days before the Election Day.'
                    : '若同一單位遞交多於一份候選人表格或提名表格，該等表格即會永久作廢，有關通知書將會派發至相關單位。但由於涉及多方，因此管理人不會接受重新提交表格，該單位將因此失去推舉候選人或作出提名的資格。',
                index: '3',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Candidates and their campaign workers are prohibited from the vicinity of the voting centre as specified by the Manager during election hours. After closing of the polls, Candidates will be invited into designated areas of the voting centre to witness vote counting.'
                    : '管理人須核實候選人表格及提名表格所載的資料和詳情，並在選舉日前不少於三十天公佈每個地理分段的候選人姓名。管理人應將這些候選人姓名列印於選票上。',
                index: '4',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? ''
                    : '候選人、其競選工作人員及其支持者應遵守管理人所訂定的諮詢委員會選舉活動規則，否則，基於公平的原則下，其候選人及被選為諮詢委員會成員的資格會被自動取消。當候選人接獲有關其違規事項通知後，其名字亦同時會在選票中刪除。',
                index: fairview_park_lang === 'en_us' ? '' : '5',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? '' : '授權投票',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? ''
                    : '業主可親自出席或委任代表出席投票。委任代表授權書(附錄四)須由業主簽署；如業主是法人團體，則須由該法人團體蓋上其印章。委任代表授權書，除非在投票站開放前最少72小時內送交管理人，否則該項委任無效。',
                index: fairview_park_lang === 'en_us' ? '' : '6',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? ''
                    : '若同一單位遞交多於一份委任代表授權書，該等授權書即會永久作廢，有關通知書將會派發至該單位。但由於涉及多方，因此管理人將不會接受重新提交的授權書。請注意，無論授權書在任何理由下作廢，業主仍可於選舉當日親自出席投票。',
                index: fairview_park_lang === 'en_us' ? '' : '7',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Observer' : '觀察員',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The Manager shall be responsible for the management of the voting centre and the counting of votes. The Manager shall invite a representative from the Yuen Long District Office or such other persons as they think desirable as observers at the voting centre.'
                    : '管理人要負責管理投票站和點票工作。管理人須邀請一名元朗民政事務處代表，或者邀請其他適合人士，擔任投票站的觀察員。',
                index: fairview_park_lang === 'en_us' ? '5' : '8',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Voting' : '投票',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Voting shall take place on the Election Day at a place within the Estate as shall be decided by the Manager for the first election and thereafter by the Committee. In case of Typhoon Signal No. 8 or Black Rainstorm Warning being hoisted or any other unforeseen events, voting shall be postponed till further notice. The final decision as to what constitutes an unforeseen event shall be solely decided by the Returning Officer.'
                    : ' 於選舉日在屋苑的某個地方進行投票選舉，第一次選舉地點由管理人決定，之後則由委員會決定。當8號颱風訊號懸掛或天文台發出黑色暴雨警告或任何不能預知的情況，選舉將會延期，直至另行通知。監票主任有最終決定權，界定何謂不能預知的情況。',
                index: fairview_park_lang === 'en_us' ? '6' : '9',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Sealed boxes shall be provided for receiving votes for each Geographical Section unless there is no candidate or only one candidate has been registered for the Geographical Section.'
                    : ' 除非某個地理分段沒有登記候選人，或僅有一名登記候選人，否則管理人必須提供密封的投票箱給每一個地理分段接受投票。',
                index: fairview_park_lang === 'en_us' ? '7' : '10',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Voting Details' : '投票細則',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Voting shall be conducted in the following manner :'
                    : '投票應該以下列形式進行：',
                index: fairview_park_lang === 'en_us' ? '8' : '11',
              },
            ],
          },
          {
            title:
              fairview_park_lang === 'en_us'
                ? 'Opening Hours of the Voting Centre'
                : '投票站開放時間',
            children2: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The voting centre shall be open for voting between 11:00 a.m. and 3:00 p.m. on the Election Day.'
                    : '投票站應該在選舉日從上午11時至下午3時對外開放。',
                index: '（a）',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Eligible Voters' : '投票者資格',
            children2: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'The owner of each unit in a Geographical Section shall be entitled to one vote.'
                    : '每段地理分段的每一個單位只有一次投票資格及只可揀選一位候選人。',
                index: '（b）',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'A vote may be cast either personally or by a proxy. The instrument appointing a proxy shall be in writing signed by the owner, or if the owner is a body corporate, under seal of that body. The appointment of a proxy shall have no effect unless the instrument appointing the proxy is lodged with both the Chairman and the Manager (only the Manager in the first election) not less than 72 hours before the time for holding the election.'
                    : '如果一個單位是由二人或多於二人共同擁有，在選舉日最先出席投票站的其中一位共有人或其委任代表則可以行使該單位那一票的投票權。但假若該單位有兩位或多於兩位共有人，或其中一位共有人的委任代表與其他共有人，同時出席投票站，則只有在管理公司記錄排名最先的共有人或其委任代表才有權投票。',
                index: '（c）',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'In the event two or above instruments appointing the proxy signed by the owner/ respective co-owners of the same unit in a Geographical Section, such instruments shall be void.'
                    : '業主或業主代表要向管理人在投票站指定的投票主任出示身份証明文件。身份經核實後，業主或業主代表會獲得一張所屬地理分段的選票。業主或業主代表要把選票投入指定的地理分段投票箱。',
                index: '（d）',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'If a unit in a Geographical Section is owned by two (2) or more persons, the vote in respect of that unit may be cast by any one of the co-owners who personally or by proxy first attends the Voting Centre on the Election Day to cast a vote PROVIDED that if two or more co-owners of the unit or proxy of one of the co-owners and the other co-owner(s) attend the Voting Centre at the same time, the one whose name stands highest in the record kept by the Manager or his or her proxy shall be entitled to vote.'
                    : '',
                index: fairview_park_lang === 'en_us' ? '（e）' : '',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Verification of Voters’ ID' : '投票',
            children2: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'An owner or his authorized representative shall present his identity document to the Voting Officer at the voting centre. After verification, the owner or his authorized representative shall be given a vote for the relevant Geographical Section and cast his vote in the ballot box designated for that Geographical Section.'
                    : '投票應該採取不記名方式。',
                index: fairview_park_lang === 'en_us' ? '（f）' : '（e）',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? ''
                    : '投票站開放時間結束後，每個投票箱都須打開點票。',
                index: fairview_park_lang === 'en_us' ? '' : '（f）',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? ''
                    : '候選人將被邀請往投票站指定範圍內見證點票。',
                index: fairview_park_lang === 'en_us' ? '' : '（g）',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Ballots' : '',
            children2: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Votes shall be by way of secret ballots.'
                    : '',
                index: fairview_park_lang === 'en_us' ? '（g）' : '',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'After the closure of the votes, each ballot box shall be opened and votes shall be counted.'
                    : '',
                index: fairview_park_lang === 'en_us' ? '（h）' : '',
              },
            ],
          },
          {
            title: fairview_park_lang === 'en_us' ? 'Returning Officer' : '監票主任',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'An independent person shall be invited by the Manager in consultation with the District Office to be the Returning Officer of the first election who shall be in charge of the voting centre, decide on the validity of any vote which may be in doubt and conduct the balloting for the case of equal votes. In respect of subsequent elections, an independent person shall be invited jointly by the Committee and the Manager to be the Returning Officer.'
                    : '管理人應該與民政事務處協商，邀請一名中立人士擔任第一次選舉的監票主任，負責監督投票站的工作，決定任何可能有疑問的選票的有效性，以及如有兩人或以上獲得最多同等票數時，安排進行以抽籤的辦法決定當選人。從第二屆選舉開始，委員會和管理人應該共同邀請一名中立人士，擔任監票主任。',
                index: fairview_park_lang === 'en_us' ? '9' : '12',
              },
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'After the votes (including spoiled ballots) have been counted, the result shall be recorded in writing and the Returning Officer and the person in charge of votes counting shall be invited to sign on the record. The Manager shall publish the result of the election as soon as possible.'
                    : '點票（包括廢票）結束後，要書面記錄點票結果，監票主任和點票的負責人須在紀錄上簽字。管理人會儘快公佈選舉結果。',
                index: fairview_park_lang === 'en_us' ? '10' : '13',
              },
            ],
          },
          {
            title:
              fairview_park_lang === 'en_us'
                ? 'First Committee Meeting'
                : '第一次委員會會議',
            children: [
              {
                text:
                  fairview_park_lang === 'en_us'
                    ? 'Successful candidates shall become members of the Committee on the Commencement Date of the term after the date of election. Earliest after Commencement Date, the Manager shall arrange for a meeting of successful candidates for the purpose of electing amongst themselves officers of the Committee. Successful candidates in a By-election shall become Committee members on the date after his election.'
                    : '當選的候選人應該從選舉結束後的任期起始日成為委員會成員。管理人要在任期起始日後儘早為當選的候選人安排一次會議，以便在其中選出委員會幹事。補選中當選的候選人應該從當選後之翌日開始成為委員會成員。',
                index: fairview_park_lang === 'en_us' ? '11' : '14',
              },
            ],
          },
        ]"
        :key="index"
      >
        <p v-show="item.title">{{ item.title }}</p>
        <p
          style="display: flex"
          v-show="item.children && item2.text"
          v-for="(item2, index2) in item.children"
          :key="index2"
        >
          <span style="margin-right: 10px">{{ item2.index }}.</span>{{ item2.text }}
        </p>
        <div style="padding: 0 20px">
          <p
            style="display: flex"
            v-for="(item3, index3) in item.children2"
            :key="index3"
          >
            <span>{{ item3.index }}</span
            >{{ item3.text }}
          </p>
        </div>
      </div>
      <div v-show="menuActive === 2">
        <div id="pdf-wrap">
          <div
            id="pdf-preview-1"
            style="width: 100%; height: 600px; margin: 0 auto"
          ></div>
        </div>
      </div>
      <div v-show="menuActive === 3">
        <div id="pdf-wrap">
          <div
            id="pdf-preview-2"
            style="width: 100%; height: 600px; margin: 0 auto"
          ></div>
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
      menuActive: 1,
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");

    onMounted(async () => {
      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc:
            data.fairview_park_lang === "en_us"
              ? "https://fairviewpark.hk/file/mac/MAC_Election_Activities_Rules_Eng.pdf"
              : "https://fairviewpark.hk/file/mac/MAC_Election_Activities_Rules_Chi.pdf",
        },
        document.getElementById("pdf-preview-1")
      ).then((instance) => {
        // use APIs here
        // const { documentViewer, annotationManager } = instance.Core;
        // call methods from instance, documentViewer and annotationManager as needed
        // instance.UI.setTheme('dark');
      });
      PDFJSExpress(
        {
          path: location.pathname.split("index.html")[0] + "public/pdfjsexpress",
          licenseKey:
            process.env.NODE_ENV === "development"
              ? "oCrqt6OMULAoS15T2J62"
              : "ukZ2T6b500exNQH0GDJg",
          initialDoc:
            data.fairview_park_lang === "en_us"
              ? "https://fairviewpark.hk/file/mac/MAC_Election_Timetable_Eng.pdf"
              : "https://fairviewpark.hk/file/mac/MAC_Election_Timetable_Chi.pdf",
        },
        document.getElementById("pdf-preview-2")
      ).then((instance) => {
        // use APIs here
        // const { documentViewer, annotationManager } = instance.Core;
        // call methods from instance, documentViewer and annotationManager as needed
        // instance.UI.setTheme('dark');
      });
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";

h5 {
  font-size: 36px;
  color: var(--mainColor3);
  text-align: left;
}

.menu {
  display: flex;
  margin-bottom: 20px;

  .sub-menu {
    font-size: 27px;
    font-weight: bold;
    padding: 0px 25px;
    cursor: pointer;
  }

  .active {
    background-color: var(--mainColor1);
    color: #fff;
  }
}
@{deep} .menu-select {
  display: none;
  --el-select-input-focus-border-color: #ccc;
  .select-trigger {
    .el-input {
      font-size: 18px;
      .el-input__wrapper {
      }
    }
    .is-focus {
      border-color: #ccc;
    }
  }
}
@media (max-width: 991px) {
  .menu-select{
    display: block;
  }
  .sub-menu{
    display: none;
  }
  h5{
    font-size:28px;
  }
  p{
    font-size: 15px!important;
  }
}
</style>
