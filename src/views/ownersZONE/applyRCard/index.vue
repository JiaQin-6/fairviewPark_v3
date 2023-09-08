<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-01-09 18:55:56
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="apply-resident-smartcard custom-loading-svg">
    <!-- banner -->
    <div class="banner">
      <div
        class="img"
        style="width: 100%; height: 100%"
        :style="{ 'background-image': 'url(' + banner + ')' }"
      ></div>
      <p>
        {{ $t("headed.Apply_Resident_Smartcard") }}
      </p>
    </div>
    <div class="apply-resident-smartcard-wrap">
      <div class="row nav-wrap-container">
        <div class="col-12 col-lg-2 aside mb-20">
          <ul class="row" id="useful-menu">
            <li
              v-for="(item, index) in [
                {
                  titleEnUs: $t('applyRCard.Apply_Resident_Smartcard'),
                },
                {
                  titleEnUs: $t('applyRCard.Application_Status'),
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
            :teleported="false"
            :placeholder="' '"
          >
            <el-option
              v-for="(item, index) in [
                {
                  titleEnUs: $t('applyRCard.Apply_Resident_Smartcard'),
                  index: 0,
                },
                {
                  titleEnUs: $t('applyRCard.Application_Status'),
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
                  style="text-decoration: none; color: #fff;width:100%;display:inline-block;
            padding: 5px 30px;"
                  :href="
                    fairview_park_lang === 'en_us'
                      ? 'https://fairviewpark.hk/file/ResidentCard_InstructionEN.html'
                      : 'https://fairviewpark.hk/file/ResidentCard_InstructionTC.html'
                  "
                >
                  {{ $t("applyRCard.How_to_apply") }}</a
                >
              </button>
              <span>{{ $t("applyRCard.After_apply_success") }}</span>
            </div>
            <div class="application">
              <h5>
                {{ $t("applyRCard.B_Card_Users") }}
              </h5>
              <p>
                {{
                  loginInfo && loginInfo.groupId === 0
                    ? $t("applyRCard.the_Registered_House_Owner")
                    : $t("applyRCard.the_Registered_House_Talent")
                }}
              </p>
            </div>
            <div class="application-form">
              <h5>
                {{ $t("applyRCard.Application_materials") }}
              </h5>
              <li style="color: #07522b; margin-bottom: 10px; font-weight: bold">
                {{ address_t }}
              </li>
              <!-- 申請資料填寫 -->
              <div class="form">
                <ul>
                  <li>
                    <div class="form-wrap flex-row">
                      <span class="col-6">{{ $t("applyRCard.Name_of_Card_User") }}</span>
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
                      <span class="col-6">{{ $t("applyRCard.Relation") }}</span>
                      <el-select
                        v-model="form.relation"
                        class="col-6"
                        @change="
                          () => {
                            form.rcrelationOther = '';
                            form.relationFile.file = null;
                            form.relationFile.url = '';
                          }
                        "
                        :teleported="false"
                        :placeholder="' '"
                      >
                        <el-option
                          v-for="item in loginInfo && loginInfo.groupId === 0
                            ? memberRalationList
                            : residentRalationList"
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
                    <div v-if="form.relation === 'ROf'||form.relation === 'RTf'">
                      <div class="form-wrap flex-row mb-10">
                        <span class="yellow col-6 pl-20">{{$t('applyRCard.Specify')
                        }}</span>
                        <el-input v-model="form.rcrelationOther" class="col-6"></el-input>
                      </div>
                      <i
                        v-if="!isRequest && !form.rcrelationOther"
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
                          $t("applyRCard.Upload_the_address_proof")
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
                              ><span>{{ form["relationFile"].file
                                    ? $t('applyRCard.Change_file')
                                    : $t('applyRCard.Select_file')
                              }}</span
                              ><el-icon class="el-icon--upload"><upload-filled /></el-icon
                            ></el-button>
                          </template>
                        </el-upload>
                        <i class="yellow pl-20" style="flex: 1; margin-top: 10px">{{
                          $t('applyRCard.Please_upload_file_size')
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
                        $t("applyRCard.Octopus_Card_Number")
                      }}</span>
                      <div class="flex-row">
                        <el-input
                          class="mr-6"
                          maxlength="9"
                          v-model="form.cardNumber1"
                          @input="
                            form.cardNumber1 =
                              form.cardNumber1.trim().length != 0
                                ? form.cardNumber1.replace(/[^0-9]/g, '')
                                : ''
                          "
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
                            @input="
                              form.cardNumber2 =
                                form.cardNumber2.trim().length != 0
                                  ? form.cardNumber2.replace(/[^0-9]/g, '')
                                  : ''
                            "
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
                      $t('applyRCard.Please_fill_in_the_complete')
                    }}</i>
                  </li>
                  <li>
                    <div class="form-wrap flex-row">
                      <span class="col-6">{{
                        $t("applyRCard.Card_User_s_Photo_Upload")
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
                            ><span>{{ form["photoFile"].file
                                  ? $t('applyRCard.Change_file')
                                  : $t('applyRCard.Select_file')
                               
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
                      $t('applyRCard.Please_upload_file_size_below_5MB')
                    }}</i>
                  </li>
                </ul>
              </div>
              <!-- 條款雞條件 -->
              <div class="item">
                <h5>
                  {{
                    $t('applyRCard.Undertakings')
                  }}
                </h5>
                <p
                  v-if="loginInfo && loginInfo.groupId === 0"
                  style="margin-bottom: 30px"
                  v-html="$t('applyRCard.we_being_the_registered_house_owner')"
                ></p>
                <p
                  v-else
                  style="margin-bottom: 30px"
                  v-html="
                    $t('applyRCard.We_being_the_registered_house_tenant')
                  "
                ></p>
                <div style="text-align: center">
                  <el-checkbox
                    v-model="form.checked"
                    :label="
                      $t('applyRCard.I_Accept_and_Understand_the_Terms_and_Agreement')
                    "
                    size="large"
                    style="display: block"
                  />
                  <el-button @click="applyRCard">{{
                    $t('applyRCard.Confirm')
                  }}</el-button>
                </div>
              </div>
            </div>
          </div>
          <!-- 智能卡列表 -->
          <div class="cardList" v-if="nav_index === 1">
            <p style="font-size: 36px; font-weight: bold; color: #9cc212">
              {{ $t('applyRCard.Apply_Status') }}
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
                      style="
                        color: #ba9859;
                        font-size: 24px;
                        font-weight: bold;
                        margin-bottom: 20px;
                      "
                    >
                      {{
                        $t('applyRCard.Waiting_for_approve')
                      }}
                    </h3>
                    <h3
                      v-if="item.rcAppStatus === 2"
                      style="
                        color: #9cc212;
                        font-size: 24px;
                        font-weight: bold;
                        margin-bottom: 20px;
                      "
                    >
                      {{ $t('applyRCard.Approved') }}
                    </h3>
                    <p style="font-size: 18px; font-weight: bold">
                      {{
                        $t('applyRCard.Date_of_receipt')
                      }}
                    </p>
                    <p style="font-size: 18px">
                      {{ item.lastUpdate.slice(0, 10) }}
                    </p>
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
                            $t('applyRCard.Name_of_Card_User_2')
                          }}{{ item.rcname }}
                        </h3>
                      </div>
                      <div>
                        <strong style="margin-right: 5px">{{
                          $t('applyRCard.Relation_2')
                        }}</strong>
                        <span>{{
                          item.rcrelation  
                        }}</span>
                      </div>
                      <div v-if="item.rcrelationOther">
                        <strong style="margin-right: 5px">{{
                         $t('applyRCard.Specify_Others')
                        }}</strong>
                        <span>{{ item.rcrelationOther }}</span>
                      </div>
                      <div v-if="item.rcrelationDoc">
                        <strong style="margin-right: 5px">{{
                          $t("applyRCard.Uploaded_Document")
                        }}</strong>
                        <span style="display: block">{{
                          item.rcrelationDoc.split("/").pop()
                        }}</span>
                      </div>
                      <div>
                        <strong style="margin-right: 5px"
                          >{{ $t("applyRCard.Octopus_Card_Number_2")
                          }}</strong
                        >
                        <span>{{ item.rcOcto }}({{ item.rcOctoBk }})</span>
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
                          $t("applyRCard.Approved_Image_Record")
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
    <!-- loading -->
    <div
      class="loading"
      v-loading="v_loading"
      style="
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10000;
      "
      :style="{ display: v_loading ? '' : 'none' }"
    ></div>
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
    console.log(getCurrentInstance());
    let data = reactive({
      nav_index: 0,
      fairview_park_lang: "",
      pmLogList: null,
      form: {
        name: "",
        relation: "",
        rcrelationOther: "",
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
      v_loading: false,
      address_t: "",
      rCardList: [],
      loginInfo: null, //登陸信息
      memberRalationList: [
        {
          label: proxy.$t("applyRCard.Owner_co-owner"),
          value: "ROa",
        },
        {
          label: proxy.$t("applyRCard.Spouse"),
          value: "ROb",
        },
        {
          label: proxy.$t("applyRCard.Child"),
          value: "ROc",
        },
        {
          label: proxy.$t("applyRCard.Domestic_Helper"),
          value: "ROd",
        },
        {
          label: proxy.$t("applyRCard.Parents"),
          value: "ROe",
        },
        {
          label: proxy.$t("applyRCard.Other_please_specify"),
          value: "ROf",
        },
      ],
      residentRalationList: [
        {
          label: proxy.$t("applyRCard.Tenant_Co-Tenant"),
          value: "RTa",
        },
        {
          label: proxy.$t("applyRCard.Tenant_Spouse"),
          value: "RTb",
        },
        {
          label: proxy.$t("applyRCard.TenantChild"),
          value: "RTc",
        },
        {
          label: proxy.$t("applyRCard.Tenant_Domestic_Helper"),
          value: "RTd",
        },
        {
          label: proxy.$t("applyRCard.Tenant_Parents"),
          value: "RTe",
        },
        {
          label: proxy.$t("applyRCard.Other_please_specify"),
          value: "RTf",
        },
      ],
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    //如果有登陸信息就顯示登陸
    if (localStorage.getItem("login-info")) {
      data.loginInfo = JSON.parse(localStorage.getItem("login-info"));
    }
    //
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
        ElMessage.error({
          showClose: true,
          message:
            data.fairview_park_lang === "en_us"
              ? "The upload file format is incorrect!"
              : "上傳文件格式不正確!",
          type: "error",
        });
        return false;
      } else if (files.raw.size / 1024 / 1024 > 2) {
        ctx.$refs.relationFile.clearFiles();
        data.form["relationFile"].file = null;
        ElMessage.error({
          showClose: true,
          message:
            data.fairview_park_lang === "en_us"
              ? "The file size cannot exceed 2MB!"
              : "文件大小不能超過2MB!",
          type: "error",
        });
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
        ElMessage.error({
          showClose: true,
          message:
            data.fairview_park_lang === "en_us"
              ? "The upload file format is incorrect!"
              : "上傳文件格式不正確!",
          type: "error",
        });
        return false;
      } else if (files.raw.size / 1024 / 1024 > 5) {
        ctx.$refs.photoFile.clearFiles();
        data.form["photoFile"].file = null;
        ElMessage.error({
          showClose: true,
          message:
            data.fairview_park_lang === "en_us"
              ? "The file size cannot exceed 5MB!"
              : "文件大小不能超過5MB!",
          type: "error",
        });
        return false;
      } else {
        data.form["photoFile"].file = files.raw;
      }
    };
    //申請
    const applyRCard = async () => {
      if (
        !data.form.name ||
        !data.form.relation ||
        !data.form.cardNumber1 ||
        !data.form.cardNumber2 ||
        !data.form.photoFile.file
      ) {
        data.isRequest = false;
        return false;
      } else if (data.form.cardNumber1.length < 8) {
        ElMessage.error({
          showClose: true,
          message:
            data.fairview_park_lang === "en_us"
              ? "Please fill in the complete 8- or 9-digit Octopus Number"
              : "請填上八達通卡的8-9位之完整編號",
          type: "error",
        });
        return false;
      } else if (
        data.form.relation === "ROf" &&
        (!data.form.rcrelationOther || !data.form.relationFile.file)
      ) {
        data.isRequest = false;
        return false;
      }else if (
        data.form.relation === "RTf" &&
        (!data.form.rcrelationOther || !data.form.relationFile.file)
      ) {
        data.isRequest = false;
        return false;
      } else if (!data.form.checked) {
        ElMessage.error({
          showClose: true,
          message:
            data.fairview_park_lang === "en_us"
              ? "Please tick the consent clause first!"
              : "請先勾選同意條款!",
          type: "error",
        });
        return false;
      }  
      data.v_loading = true;
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
          rcrelationOther: data.form.rcrelationOther,
          rcrelationDoc: data.form.relationFile.url || "",
          rcOcto: data.form.cardNumber1,
          rcPhoto: data.form.photoFile.url || "",
          rcOctoBk: data.form.cardNumber2,
        });
        if (res.data.status === 200) {
          data.isRequest = true;
          data.v_loading = false;
          data.form.name = "";
          data.form.relation = "";
          data.form.rcrelationOther = "";
          data.form.relationFile.file = null;
          data.form.relationFile.url = "";
          data.form.cardNumber1 = "";
          data.form.cardNumber2 = "";
          data.form.photoFile.file = null;
          data.form.photoFile.url = "";
          data.form.checked = false;
          ElMessage({
            showClose: true,
            message:
              data.fairview_park_lang === "en_us" ? "Submit Successful" : "提交成功",
            type: "success",
          });
        } else {
          data.v_loading = false;
          ElMessage({
            showClose: true,
            message: res.data.msg,
            type: "warning",
          });
        }
      } catch (error) {
        console.log(error);
        data.v_loading = false;
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
          data.v_loading = false;
          ElMessage({
            showClose: true,
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
@deep: ~">>>";

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
            }

            span {
              font-size: 18px;
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
            margin-right: 20px;
            cursor: pointer;
            vertical-align: middle;
            height: 39px;
            width: 200px;
          }

          span {
            vertical-align: middle;
            margin-top: 5px;
            flex: 1;
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
                  position: relative;

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

                  @{deep} .el-select {
                    position: relative !important;
                    z-index: 1 !important;
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

                @{deep}.el-popper {
                  position: absolute;
                  top: 52px !important;
                  left: 0 !important;

                  .el-select-dropdown {
                    .el-scrollbar {
                      .el-select-dropdown__wrap {
                        .el-scrollbar__view {
                          background-color: var(--mainColor2);

                          .el-select-dropdown__item {
                            text-align: left;
                            margin-bottom: 0;
                            color: #fff;
                          }
                        }
                      }
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
                margin-bottom: 0;
                line-height: 24px !important;
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

    p {
      font-size: 36px !important;
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

      .el-popper {
        position: absolute;
        top: 52px !important;
        left: 0 !important;

        .el-select-dropdown {
          .el-scrollbar {
            .el-select-dropdown__wrap {
              .el-scrollbar__view {
                .el-select-dropdown__item {
                  text-align: left;

                  span {
                    margin: 0;
                  }
                }
              }
            }
          }
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

    .application-form {
      .item {
        h5,
        p {
          font-size: 15px !important;
        }

        @{deep} .el-checkbox {
          white-space: inherit;
          display: flex !important;
          align-items: center;
          margin-bottom: 20px;

          .el-checkbox__label {
            text-align: left;
            font-size: 15px !important;
            line-height: 18px;
          }
        }
      }

      @{deep} .el-input {
        .el-input__wrapper {
          .el-input__inner {
            font-size: 15px !important;
          }
        }
      }
    }
  }
}
</style>