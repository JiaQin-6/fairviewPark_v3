<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-05 03:16:09
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="apply-resident-smartcard custom-loading-svg"
    v-loading="loading"
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
  >
    <!-- banner -->
    <div class="banner">
      <div
        class="img"
        style="width: 100%; height: 100%"
        :style="{ 'background-image': 'url(' + banner + ')' }"
      ></div>
      <p>
        {{ fairview_park_lang === "en_us" ? "Apply Resident" : "申請住戶"
        }}{{ fairview_park_lang === "en_us" ? " Smartcard" : "智能卡" }}
      </p>
    </div>
    <div class="apply-resident-smartcard-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row" id="useful-menu">
            <li
              v-for="(item, index) in [
                {
                  titleEnUs:
                    fairview_park_lang === 'en_us'
                      ? 'Apply Resident Smartcard'
                      : '申請住戶智能卡',
                },
                {
                  titleEnUs:
                    fairview_park_lang === 'en_us' ? 'Application Status' : '申請狀況',
                },
              ]"
              :key="index"
              class="col-4 col-lg-12"
              :class="nav_index === index ? 'active' : ''"
              @click="
                () => {
                  nav_index = index;
                  if (nav_index === 1) {
                    findRcardList();
                  }
                }
              "
            >
              <span>{{ item.titleEnUs }}</span>
            </li>
          </ul>
          <el-select
            size="large"
            v-model="nav_index"
            class="m-2 menu-select"
            placeholder="Select"
          >
            <el-option
              v-for="(item, index) in [
                {
                  titleEnUs:
                    fairview_park_lang === 'en_us'
                      ? 'Apply Resident Smartcard'
                      : '申請住戶智能卡',
                  index: 0,
                },
                {
                  titleEnUs:
                    fairview_park_lang === 'en_us' ? 'Application Status' : '申請狀況',
                  index: 1,
                },
              ]"
              :key="index"
              :label="item.titleEnUs"
              :value="item.index"
            >
              <span>{{ item.titleEnUs }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="col-12 col-lg-10 nav-content mb-20">
          <!-- 申請智能卡 -->
          <div v-if="nav_index === 0">
            <div class="how-to-apply">
              <button style="border-radius: 50px; border: 0">
                <a
                  target="_blank"
                  style="text-decoration: none; color: #fff"
                  :href="
                    fairview_park_lang === 'en_us'
                      ? 'https://fairviewpark.hk/file/ResidentCard_InstructionEN.html'
                      : 'https://fairviewpark.hk/file/ResidentCard_InstructionTC.html'
                  "
                >
                  {{ fairview_park_lang === "en_us" ? "How to apply" : "申請指引" }}</a
                >
              </button>
              <span>{{
                fairview_park_lang === "en_us"
                  ? "(After apply success, Please wait about five working days to Customer Service Department get the Resident Smart Card)"
                  : "(申請成功後，請等約5天工作天到客戶服務部領取住戶智能卡)"
              }}</span>
            </div>
            <div class="application">
              <h5>
                {{ fairview_park_lang === "en_us" ? "B. Card Users" : "乙.持咭人士資料" }}
              </h5>
              <p>
                {{
                  fairview_park_lang === "en_us"
                    ? "I/We, the Registered House Owner(s) of the captioned premises am/are now applying to the Fairview Park Property Management Limited for the Resident Smart Card for each of the following card users with 1 recent color photo* (size: 40mm×50mm) and residence proof (if applicable) attached:"
                    : "本人/我們為上述物業的註冊業主，現向錦綉花園物業管理有限公司申請錦綉住戶口咭予以下每一個持咭人士，並附上其彩色近照1張* (尺寸:40mm×50mm)及住址證明 (如適用)。"
                }}
              </p>
            </div>
            <div class="application-form">
              <h5>
                {{
                  fairview_park_lang === "en_us" ? "Application materials" : "申請資料"
                }}
              </h5>
              <li style="color: #07522b; margin-bottom: 10px; font-weight: bold">
                {{ address_t }}
              </li>
              <!-- 申請資料填寫 -->
              <div class="form">
                <ul>
                  <li>
                    <div class="form-wrap flex-row">
                      <span class="col-6">{{
                        fairview_park_lang === "en_us"
                          ? "1. Name of Card User (as appears in the ID document)"
                          : "1. 持咭人姓名(如身份證明文件所顯示)"
                      }}</span>
                      <el-input v-model="form.name" class="col-6"></el-input>
                    </div>
                    <i
                      v-if="!isRequest && !form.name"
                      style="display: block; font-size: 14px; text-align: right"
                      class="mt-6 mb-6"
                      >{{
                        fairview_park_lang === "en_us"
                          ? "The field is required"
                          : "該欄位為必填欄位"
                      }}</i
                    >
                  </li>
                  <li>
                    <div class="form-wrap flex-row mb-10">
                      <span class="col-6">{{
                        fairview_park_lang === "en_us" ? "2. Relation" : "2. 與業主關係"
                      }}</span>
                      <el-select
                        v-model="form.relation"
                        class="col-6"
                        placeholder="Select"
                        @change="
                          () => {
                            form.remark = '';
                            form.relationFile.file = null;
                            form.relationFile.url = '';
                          }
                        "
                      >
                        <el-option
                          v-for="item in [
                            {
                              label:
                                fairview_park_lang === 'en_us'
                                  ? 'Owner / co-owner'
                                  : '業主/共同業主',
                              value: 'ROa',
                            },
                            {
                              label: fairview_park_lang === 'en_us' ? 'Spouse' : '配偶',
                              value: 'ROb',
                            },
                            {
                              label: fairview_park_lang === 'en_us' ? 'Child' : '子女',
                              value: 'ROc',
                            },
                            {
                              label:
                                fairview_park_lang === 'en_us'
                                  ? 'Domestic Helper'
                                  : '家庭傭工',
                              value: 'ROd',
                            },
                            {
                              label: fairview_park_lang === 'en_us' ? 'Parents' : '父母',
                              value: 'ROe',
                            },
                            {
                              label:
                                fairview_park_lang === 'en_us'
                                  ? 'Other (please specify)'
                                  : '其他(請註明)',
                              value: 'ROf',
                            },
                          ]"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </div>
                    <i
                      v-if="!isRequest && !form.relation"
                      style="display: block; font-size: 14px; text-align: right"
                      class="mt-6 mb-6"
                      >{{
                        fairview_park_lang === "en_us"
                          ? "The field is required"
                          : "該欄位為必填欄位"
                      }}</i
                    >
                    <div v-if="form.relation === 'ROf'">
                      <div class="form-wrap flex-row mb-10">
                        <span class="yellow col-6 pl-20">{{
                          fairview_park_lang === "en_us" ? "Specify(Others)" : "註明"
                        }}</span>
                        <el-input v-model="form.remark" class="col-6"></el-input>
                      </div>
                      <i
                        v-if="!isRequest && !form.remark"
                        style="display: block; font-size: 14px; text-align: right"
                        class="mt-6 mb-6"
                        >{{
                          fairview_park_lang === "en_us"
                            ? "The field is required"
                            : "該欄位為必填欄位"
                        }}</i
                      >
                      <div class="form-wrap flex-row mb-10 flex-wrap">
                        <span class="yellow col-6 pl-20">{{
                          fairview_park_lang === "en_us"
                            ? "Upload Document"
                            : "上傳証明文件"
                        }}</span>

                        <el-upload
                          ref="relationFile"
                          class="upload-demo col-6"
                          action=""
                          :limit="1"
                          :on-exceed="handleRelationFileExceed"
                          :on-change="handleRelationFileChange"
                          :on-remove="
                            () => {
                              form['relationFile'].file = null;
                            }
                          "
                          :auto-upload="false"
                          :show-file-list="form['relationFile'].file ? true : false"
                        >
                          <template #trigger>
                            <el-button type="primary"
                              ><span>{{
                                fairview_park_lang === "en_us"
                                  ? form["relationFile"].file
                                    ? "Change file"
                                    : "Select file"
                                  : form["relationFile"].file
                                  ? "更換文件"
                                  : "上傳文件"
                              }}</span
                              ><el-icon class="el-icon--upload"><upload-filled /></el-icon
                            ></el-button>
                          </template>
                        </el-upload>
                        <i class="yellow pl-20" style="flex: 1; margin-top: 10px">{{
                          fairview_park_lang === "en_us"
                            ? "*Please upload file size below 2MB and file format must be(.jpg | .jpeg | .png | .pdf)."
                            : " *請上傳檔案大小為 2MB 以下及檔案格式為(.jpg | .jpeg | .png | .pdf)"
                        }}</i>
                      </div>
                      <i
                        v-if="!isRequest && !form.relationFile.file"
                        style="display: block; font-size: 14px; text-align: right"
                        class="mt-6 mb-6"
                        >{{
                          fairview_park_lang === "en_us"
                            ? "The field is required"
                            : "該欄位為必填欄位"
                        }}</i
                      >
                    </div>
                  </li>
                  <li>
                    <div class="form-wrap flex-row mb-10">
                      <span class="col-6">{{
                        fairview_park_lang === "en_us"
                          ? "3. Octopus Card Number"
                          : "3. 八達通編號"
                      }}</span>
                      <div class="flex-row">
                        <el-input
                          class="mr-6"
                          maxlength="9"
                          v-model="form.cardNumber1"
                        ></el-input>
                        <div
                          class="flex-row"
                          style="
                            padding: 0 5px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                          "
                        >
                          (
                          <el-input
                            class="card-name"
                            style="width: 20px"
                            maxlength="1"
                            v-model="form.cardNumber2"
                          ></el-input
                          >)
                        </div>
                      </div>
                    </div>
                    <i
                      v-if="!isRequest && (!form.cardNumber1 || !form.cardNumber2)"
                      style="display: block; font-size: 14px; text-align: right"
                      class="mt-6 mb-6"
                      >{{
                        fairview_park_lang === "en_us"
                          ? "The field is required"
                          : "該欄位為必填欄位"
                      }}</i
                    >
                    <i class="yellow">{{
                      fairview_park_lang === "en_us"
                        ? "*Please fill in the complete 8- or 9-digit Octopus Number and the number in the bracket (if applicable)."
                        : "*請填上八達通卡的8-9位之完整編號，當附有括號號碼時也須一併填寫。"
                    }}</i>
                  </li>
                  <li>
                    <div class="form-wrap flex-row">
                      <span class="col-6">{{
                        fairview_park_lang === "en_us"
                          ? "4. Card User's Photo Upload"
                          : "4. 上載住戶照片"
                      }}</span>
                      <el-upload
                        ref="photoFile"
                        class="upload-demo col-6"
                        action=""
                        :limit="1"
                        :on-exceed="handlePhotoFileExceed"
                        :on-change="handlePhotoFileChange"
                        :on-remove="
                          () => {
                            form['photoFile'].file = null;
                          }
                        "
                        :auto-upload="false"
                        :show-file-list="form['photoFile'].file ? true : false"
                      >
                        <template #trigger>
                          <el-button type="primary"
                            ><span>{{
                              fairview_park_lang === "en_us"
                                ? form["photoFile"].file
                                  ? "Change file"
                                  : "Select file"
                                : form["photoFile"].file
                                ? "更換文件"
                                : "上傳文件"
                            }}</span
                            ><el-icon class="el-icon--upload"><upload-filled /></el-icon
                          ></el-button>
                        </template>
                      </el-upload>
                    </div>
                    <i
                      v-if="!isRequest && !form.photoFile.file"
                      style="display: block; font-size: 14px; text-align: right"
                      class="mt-6 mb-6"
                      >{{
                        fairview_park_lang === "en_us"
                          ? "The field is required"
                          : "該欄位為必填欄位"
                      }}</i
                    >
                    <i class="yellow" style="margin-top: 10px; display: block">{{
                      fairview_park_lang === "en_us"
                        ? "*Please upload file size below 5MB and file format must be (.jpg | .jpeg | .png | .pdf)"
                        : "*請上傳檔案大小為 5MB 以下及檔案格式為 (.jpg | .jpeg | .png | .pdf)"
                    }}</i>
                  </li>
                </ul>
              </div>
              <!-- 條款雞條件 -->
              <div class="item">
                <h5>
                  {{
                    fairview_park_lang === "en_us"
                      ? "Undertakings - Terms and Conditions"
                      : "丙. 承諾書 - 條款及條件"
                  }}
                </h5>
                <p
                  style="margin-bottom: 30px"
                  v-html="
                    fairview_park_lang === 'en_us'
                      ? 'I/We, being the registered house owner(s) (“the Owner”) of the captioned premises (“the Corresponding Premises”) wish to apply to the Fairview Park Property Management Limited (”the Estate Management”) for Resident Smart Card(s) (“the Card”) for the persons with details listed in part B above. I/We declare that these persons all live in the Corresponding Premises and the information given in parts A, B and photographs supplied are true and correct. I/We fully understand and agree to accept and be bound by all the following terms and conditions:<br/><p></p>1. The Card is non-transferrable. In case the eligibility of this application ceases to exist, such as when the Owner is no longer the registered owner of the Corresponding Premises, all Cards issued under this application will be cancelled instantly.<br/><p></p>2. The New Owner(s) must inform the Estate Management whether the Card Users will remain the same when there is a change of ownership of the Corresponding Premises. Otherwise, all issued Cards will be cancelled instantly.<br/><p></p>3. The Card is the property of the Estate Management, please return it when your status is no longer valid.<br/><p></p>4. The Card should be shown to Estate Management staff upon request. Estate Management staff have the right to repossess the cancelled Card.<br/><p></p>5. The Estate Management reserves the absolute right to reject the application or cancel all the Cards issued under the Corresponding Premises if the Owner is in arrear of any fees including management fee payable to the Estate Management or in breach of the Deed of Mutual Covenant or Estate Rules.<br/><p></p>6. The Owner shall notify the Estate Management immediately for loss of any Card so as to enable the Estate Management to cancel the said Card.<br/><p></p>7. The Estate Management will charge HK$50 for each of the replacement of the Card by the request of the Owner due to whatsoever reasons.<br/><p></p>8. The Owner hereby declares that he and the Card Users consent to the collection and handling of personal data provided herewith in accordance with the Personal Data Statement below.<br/><p></p>9. The Estate Management reserves the right to revise any terms and conditions herein at any time without further notice.'
                      : '我/我們為上述物業(以下簡稱「相關物業」)之業主，現向錦綉花園物業管理有限公司(以 下簡稱「管理公司」)申請住戶智能咭(以下簡稱住戶咭)予詳列於上述乙部的人士。我 們謹此聲明此等人士皆居住於相關物業以及在本申請表甲及乙部所提供的資料及相片，乃真 實及正確無誤，我們完全明白並同意接受及受約束於下列條款及條件：<br/><p></p>1. 住戶咭不能轉讓。如作出是項申請之基本資格不再存在，例如上述業主不再是相 關物業的業主，所有以往所發出的住戶咭及於此申請表申請的住戶咭將即時被取消。<br/><p></p>2. 當相關物業業權出現變動時，新業主必須通知管理公司持咭人是否仍舊相同，否 則管理公司將即時取消已發出的所有住戶咭。<br/><p></p>3. 住戶咭乃屬管理公司所有，如持咭人身份已不符合使用此住戶咭，請交回予管理 公司。<br/><p></p>4. 持咭人應按管理公司保安人員之要求出示住戶咭，若該住戶咭已被取消，管理公 司職員有權收回該住戶咭。<br/><p></p>5. 管理公司保留絕對權利拒絕拖欠其任何款項包括管理費、或違反公契或屋苑守則 之業戶之申請或取消所有已發出予該單位的住戶咭。<br/><p></p>6. 住戶咭如有遺失，業主須立即通知管理公司，以便管理公司取消該住戶咭。<br/><p></p>7. 無論因任何原因，業主如須補領住戶咭，管理公司將收取港幣 50 元之手續費。<br/><p></p>8. 業主在此聲明業主及持咭人士同意管理公司收集和處理根據下面的個人資料聲明提 供的個人資料。<br/><p></p>9. 管理公司保留絕對權利隨時修訂本申請表上之任何條款及條件而不作另行通告。'
                  "
                ></p>
                <div style="text-align: center">
                  <el-checkbox
                    v-model="form.checked"
                    :label="
                      fairview_park_lang === 'en_us'
                        ? 'I Accept and Understand the Terms and Agreement'
                        : '本人同意上述條款'
                    "
                    size="large"
                    style="display: block"
                  />
                  <el-button @click="applyRCard">{{
                    fairview_park_lang === "en_us" ? "Confirm" : "提交申請"
                  }}</el-button>
                </div>
              </div>
            </div>
          </div>
          <!-- 智能卡列表 -->
          <div class="cardList" v-if="nav_index === 1">
            <p style="font-size: 36px; font-weight: bold; color: #9cc212">
              {{ fairview_park_lang === "en_us" ? "Apply Status" : "申請狀況" }}
            </p>
            <ul>
              <li
                v-for="(item, index) in rCardList"
                :key="index"
                style="margin-bottom: 20px"
              >
                <div class="flex-row" style="flex-wrap: wrap">
                  <!-- 取證日期 -->
                  <div class="col-12 col-lg-3 col-sm-12" style="margin-bottom: 10px">
                    <h3
                      v-if="item.rcAppStatus === 1"
                      style="font-size: 24px; font-weight: bold; margin-bottom: 20px"
                    >
                      {{
                        fairview_park_lang === "en_us"
                          ? "Waiting for approve"
                          : "資料待審核"
                      }}
                    </h3>
                    <h3
                      v-if="item.rcAppStatus === 2"
                      style="font-size: 24px; font-weight: bold; margin-bottom: 20px"
                    >
                      {{ fairview_park_lang === "en_us" ? "Approved" : "已成功申請" }}
                    </h3>
                    <p style="font-size: 18px; font-weight: bold">
                      {{
                        fairview_park_lang === "en_us"
                          ? "Date of receipt"
                          : "預計取證日期："
                      }}
                    </p>
                    <p style="font-size: 18px">{{ item.lastUpdate.slice(0, 10) }}</p>
                  </div>
                  <!-- 戶主信息 -->
                  <div
                    class="flex-row user-content"
                    style="flex: 1; justify-content: space-between"
                  >
                    <div
                      class="user-info"
                      style="margin-bottom: 10px; margin-right: 10px"
                    >
                      <div>
                        <h3
                          style="font-size: 24px; font-weight: bold; margin-bottom: 20px"
                        >
                          {{
                            fairview_park_lang === "en_us"
                              ? "Name of Card User: "
                              : "持卡人姓名："
                          }}{{ item.rcname }}
                        </h3>
                      </div>
                      <div>
                        <strong style="margin-right: 5px">{{
                          fairview_park_lang === "en_us" ? "Relation" : "與業主關係："
                        }}</strong>
                        <span>{{ item.rcrelation }}</span>
                      </div>
                      <div v-if="item.rcrelationOther">
                        <strong style="margin-right: 5px">{{
                          fairview_park_lang === "en_us"
                            ? "Specify(Others)"
                            : "證明(其他)："
                        }}</strong>
                        <span>{{ item.rcrelationOther }}</span>
                      </div>
                      <div v-if="item.rcrelationDoc">
                        <strong style="margin-right: 5px">{{
                          fairview_park_lang === "en_us"
                            ? "Uploaded Document:"
                            : "證明文件檔案名稱："
                        }}</strong>
                        <span style="display: block">{{
                          item.rcrelationDoc.split("/").pop()
                        }}</span>
                      </div>
                      <div>
                        <strong style="margin-right: 5px">{{
                          fairview_park_lang === "en_us"
                            ? "Octopus Card Number:"
                            : "八達通編號："
                        }}</strong>
                        <span>{{ item.rcOcto }}</span>
                      </div>
                    </div>
                    <div class="user-info">
                      <div class="user-img" v-if="item.rcAppStatus === 1">
                        <img
                          style="max-width: 130px; max-height: 140px"
                          :src="item.rcPhoto"
                          alt=""
                        />
                      </div>
                      <div v-if="item.rcAppStatus === 2">
                        <strong style="margin-right: 5px">{{
                          fairview_park_lang === "en_us"
                            ? "Approved Image Record:"
                            : "已審核圖片記錄編號 :"
                        }}</strong>
                        <span style="display: block">{{
                          item.rcPhoto.split("/").pop()
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
import { ElMessage, genFileId } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";
// import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
export default {
  data() {
    return {
      banner: new URL(
        "../../../assets/image/common-banner/owner-zone.jpg",
        import.meta.url
      ).href,
      imageUrl: "",
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    };
  },
  setup() {
    //获取当前组件的实例、上下文来操作router和vuex等。相当于this
    const { proxy, ctx } = getCurrentInstance();
    let data = reactive({
      nav_index: 0,
      fairview_park_lang: "",
      pmLogList: null,
      form: {
        name: "",
        relation: "",
        remark: "",
        relationFile: {
          file: null,
          url: "",
        },
        cardNumber1: "",
        cardNumber2: "",
        photoFile: {
          file: null,
          url: "",
        },
        checked: false,
      },
      isRequest: true,
      loading: false,
      address_t: "",
      rCardList: [],
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    const handleRelationFileExceed = (files) => {
      ctx.$refs.relationFile.clearFiles();
      const file = files[0];
      files.uid = genFileId();
      ctx.$refs.relationFile.handleStart(file);
    };
    const handleRelationFileChange = (files) => {
      if (
        files.raw.type !== "image/jpeg" &&
        files.raw.type !== "image/jpg" &&
        files.raw.type !== "image/png" &&
        files.raw.type !== "application/pdf"
      ) {
        ctx.$refs.relationFile.clearFiles();
        data.form["relationFile"].file = null;
        ElMessage.error(
          data.fairview_park_lang === "en_us"
            ? "The upload file format is incorrect!"
            : "上傳文件格式不正確!"
        );
        return false;
      } else if (files.raw.size / 1024 / 1024 > 2) {
        ctx.$refs.relationFile.clearFiles();
        data.form["relationFile"].file = null;
        ElMessage.error(
          data.fairview_park_lang === "en_us"
            ? "The file size cannot exceed 2MB!"
            : "文件大小不能超過2MB!"
        );
        return false;
      } else {
        data.form["relationFile"].file = files.raw;
      }
    };

    const handlePhotoFileExceed = (files) => {
      ctx.$refs.photoFile.clearFiles();
      const file = files[0];
      files.uid = genFileId();
      ctx.$refs.photoFile.handleStart(file);
    };
    const handlePhotoFileChange = (files) => {
      if (
        files.raw.type !== "image/jpeg" &&
        files.raw.type !== "image/jpg" &&
        files.raw.type !== "image/png" &&
        files.raw.type !== "application/pdf"
      ) {
        ctx.$refs.photoFile.clearFiles();
        data.form["photoFile"].file = null;
        ElMessage.error(
          data.fairview_park_lang === "en_us"
            ? "The upload file format is incorrect!"
            : "上傳文件格式不正確!"
        );
        return false;
      } else if (files.raw.size / 1024 / 1024 > 5) {
        ctx.$refs.photoFile.clearFiles();
        data.form["photoFile"].file = null;
        ElMessage.error(
          data.fairview_park_lang === "en_us"
            ? "The file size cannot exceed 5MB!"
            : "文件大小不能超過5MB!"
        );
        return false;
      } else {
        data.form["photoFile"].file = files.raw;
      }
    };
    //查看所有 业主手册及地图 列表
    const applyRCard = async () => {
      if (!data.form.checked) {
        ElMessage.error(
          data.fairview_park_lang === "en_us"
            ? "Please tick the consent clause first!"
            : "請先勾選同意條款!"
        );
        return false;
      } else if (
        !data.form.name ||
        !data.form.relation ||
        !data.form.cardNumber1 ||
        !data.form.cardNumber2 ||
        !data.form.photoFile.file
      ) {
        data.isRequest = false;
        return false;
      } else if (
        data.form.cardNumber1.length<8 
      ) {
        ElMessage.error(
          data.fairview_park_lang === "en_us"
            ? "需要8-9位!"
            : "需要8-9位!"
        );
        return false;
      } else if (
        data.form.relation === "ROf" &&
        (!data.form.remark || !data.form.relationFile.file)
      ) {
        data.isRequest = false;
        return false;
      }
      data.loading = true;
      if (data.form.relationFile.file) {
        data.form.relationFile.url = await uploadRcard(data.form.relationFile.file, "rd");
      }
      if (data.form.photoFile.file) {
        data.form.photoFile.url = await uploadRcard(data.form.photoFile.file, "ri");
      }

      try {
        const res = await proxy.$http.applyRCard({
          lang: data.fairview_park_lang,
          memberId: JSON.parse(localStorage.getItem("login-info")).id,
          unitCode: JSON.parse(localStorage.getItem("login-info")).topic3,
          rcname: data.form.name,
          rcrelation: data.form.relation,
          rcrelationOther: data.form.relation,
          rcrelationDoc: data.form.relationFile.url || "",
          rcOcto: data.form.cardNumber1,
          rcPhoto: data.form.photoFile.url || "",
          rcOctoBk: data.form.cardNumber2,
        });
        if (res.data.status === 200) {
          data.loading = false;
          data.form.name = "";
          data.form.relation = "";
          data.form.remark = "";
          data.form.relationFile.file = null;
          data.form.relationFile.url = "";
          data.form.cardNumber1 = "";
          data.form.cardNumber2 = "";
          data.form.photoFile.file = null;
          data.form.photoFile.url = "";
          data.form.checked = false;
          ElMessage({
            message:
              data.fairview_park_lang === "en_us" ? "Submit Successful" : "提交成功",
            type: "success",
          });
        } else {
          data.loading = false;
          ElMessage({
            message: res.data.msg,
            type: "warning",
          });
        }
      } catch (error) {
        console.log(error);
        data.loading = false;
      }
    };
    const uploadRcard = async (file, key) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("key", key);
      formData.append("memberId", JSON.parse(localStorage.getItem("login-info")).id);
      formData.append("unitCode", JSON.parse(localStorage.getItem("login-info")).topic3);
      try {
        const res = await proxy.$http.uploadRcard(formData);
        if (res.data.status == 200) {
          return res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const findRcardList = async () => {
      try {
        const res = await proxy.$http.findRcardList({
          lang: data.fairview_park_lang,
          memberId: JSON.parse(localStorage.getItem("login-info")).id,
        });
        if (res.data.status === 200) {
          console.log(res);
          data.rCardList = res.data.data;
        } else {
          data.loading = false;
          ElMessage({
            message: res.data.msg,
            type: "warning",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      let strings = JSON.parse(localStorage.getItem("login-info")).jwt.split("."); //截取token，获取载体
      var userinfo = JSON.parse(
        decodeURIComponent(
          escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))
        )
      );
      data.address_t =
        data.fairview_park_lang === "en_us"
          ? `Fairview Park Session ${userinfo.section}, Street/Road ${userinfo.street}, No ${userinfo.number}`
          : `錦綉花園${userinfo.section}段${userinfo.street}街/路${userinfo.number}號`;
      findRcardList();
    });
    return {
      ...toRefs(data),
      applyRCard,
      handleRelationFileExceed,
      handlePhotoFileExceed,
      handleRelationFileChange,
      handlePhotoFileChange,
      uploadRcard,
      findRcardList,
    };
  },
};
</script>

<style lang="less" scoped>
@deep:~ '>>>';
.apply-resident-smartcard {
  .banner {
    position: relative;
    overflow: hidden;
    height: 280px;
    .img {
      width: 100%;
      height: 280px;
      background-size: cover;
      background-position: bottom;
    }
    p {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 48px;
      font-style: normal;
      font-weight: bold;
      width: 80%;
      text-align: center;
      font-family: "Poppins-Bold", SourceHanSansCN-Regular, Arial;
      color: #fff;
      text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
      b {
        color: var(--mainColor1);
        text-shadow: 0px 1px 4px rgb(0 0 0 / 50%);
      }
    }
  }
  .apply-resident-smartcard-wrap {
    .nav-wrap-container {
      margin: 0 auto;
      padding-top: 30px;
      .aside {
        padding: 0;
        ul {
          position: sticky;
          top: 80px;
          overflow: auto;
          width: 100%;
          box-sizing: border-box;
          margin: 0;
          background-color: #fff;
          padding: 10px;
          li {
            text-align: left;
            margin-bottom: 5px;
            padding: 6px 0px 6px 10px;
            box-sizing: border-box;
            cursor: pointer;
            i {
              font-size: 18px;
              margin-right: 5px;
              display: none;
              color: #000;
            }
            span {
              font-size: 18px;
              color: #000;
            }
            &:hover {
              background-color: var(--mainColor2);
              color: #fff;
              i {
                color: #fff;
              }
              span {
                color: #fff;
              }
            }
          }
          .active {
            background-color: var(--mainColor2);
            color: #fff;
            i {
              color: #fff;
            }
            span {
              color: #fff;
            }
          }
        }
        .menu-select {
          display: none;
        }
      }
      .nav-content {
        padding: 10px 20px 0;
        .how-to-apply {
          margin-bottom: 30px;
          padding: 0;
          display: flex;
          align-items: center;
          button {
            background-color: var(--mainColor3);
            color: #fff;
            padding: 5px 30px;
            margin-right: 20px;
            cursor: pointer;
            vertical-align: middle;
            height: 36px;
            flex: 1 0 auto;
          }
          span {
            vertical-align: middle;
            margin-top: 5px;
          }
        }
        .application {
          border-radius: 5px;
          overflow: hidden;
          padding: 0;
          border: 1px solid var(--mainColor1);
          margin-bottom: 30px;
          h5 {
            font-size: 18px;
            background-color: var(--mainColor1);
            color: #fff;
            padding: 10px;
            box-sizing: border-box;
            margin-bottom: 0;
          }
          p {
            font-size: 18px;
            padding: 10px;
            box-sizing: border-box;
          }
        }
        .application-form {
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
          padding: 20px;
          margin-bottom: 50px;
          border-radius: 5px;
          h5 {
            font-size: 18px;
            font-weight: bold;
          }
          .form {
            ul {
              padding-left: 0;
              li {
                margin-bottom: 30px;
                .form-wrap {
                  align-items: center;
                  span {
                    color: var(--mainColor1);
                  }
                  @{deep} .el-upload {
                    .el-button {
                      background-color: var(--bs-gray-600);
                      border-color: var(--bs-gray-600);
                      &:hover {
                        background-color: var(--mainColor2);
                        border-color: var(--mainColor2);
                      }
                      span {
                        color: #fff;
                        span {
                          margin-right: 10px;
                        }
                        .el-icon {
                          color: #fff;
                          font-size: 18px;
                        }
                      }
                    }
                  }
                }
                .yellow {
                  color: var(--mainColor2);
                }
                i {
                  color: var(--bs-red);
                }
                @{deep} .card-name {
                  .el-input__wrapper {
                    box-shadow: none;
                    padding: 0 2px;

                    input {
                      text-align: center;
                      font-size: 18px;
                    }
                  }
                }
                @{deep} .el-input {
                  .el-input__wrapper {
                    .el-input__inner {
                      font-size: 18px;
                    }
                  }
                }
              }
            }
          }
          .item {
            h5 {
              font-size: 18px;
              margin-bottom: 10px;
              font-weight: bold;
            }
            p {
              font-size: 18px;
              margin-bottom: 20px;
            }
            .el-button {
              background-color: var(--mainColor2);
              border-radius: 50px;
              padding: 0 20px;
              color: #fff;
              &:hover {
                border: 1px solid var(--mainColor2);
                background-color: #fff;
                color: var(--mainColor2);
              }
              span {
              }
            }
            @{deep} .el-checkbox {
              .el-checkbox__input {
                vertical-align: middle;
                .el-checkbox__inner {
                  width: 20px;
                  height: 20px;
                  &:after {
                    top: 1px;
                    left: 5px;
                    height: 11px;
                    width: 6px;
                  }
                }
              }

              .el-checkbox__label {
                font-size: 18px;
                vertical-align: middle;
              }
            }
          }
        }
        .cardList {
          ul {
            padding: 0;
            li {
              border: 2px solid #ccc;
              padding: 25px;
              h3 {
                color: var(--mainColor2);
                margin-bottom: 0;
                line-height: 24px !important;
                &:last-child {
                  color: var(--mainColor1);
                }
              }
              p {
                margin-bottom: 0px;
              }
            }
          }
        }
      }
    }
  }
  @{deep} .el-loading-mask {
    height: 100vh;
    position: fixed;
  }
}
@media (min-width: 576px) {
  .nav-wrap-container {
    width: 540px;
  }
}
@media (min-width: 768px) {
  .nav-wrap-container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .nav-wrap-container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .nav-wrap-container {
    width: 1100px;
  }
}
@media (min-width: 1400px) {
  .nav-wrap-container {
    width: 1280px;
  }
}
@media (max-width: 991px) {
  .banner {
    height: 200px !important;
    img {
      width: auto;
    }
  }
  .aside {
    ul {
      flex-wrap: nowrap;
      padding: 0;
      display: none;
      li {
        display: flex;
        text-align: center;
        align-items: center;
        span {
          margin: 0 auto;
        }
      }
    }
    @{deep} .menu-select {
      display: block !important;
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
  }
  .nav-content {
    .how-to-apply {
      flex-wrap: wrap !important;
      button {
        flex: 0 auto !important;
      }
    }
    .user-img {
      margin-top: 0 !important;
    }
    .user-content {
      flex-wrap: wrap;
    }
  }
}
</style>
