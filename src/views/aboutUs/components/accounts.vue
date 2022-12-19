<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-09-15 22:13:17
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-12-14 22:04:34
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/src/views/aboutUs/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-12 col-lg-10 nav-content">
    <div class="container">
      <div class="row">
       
        <p style="font-size: 36px; color: #9cc212; font-weight: bold">
          {{ $t("Accounts") }}
        </p>
        <div>
          <ul>
            <li
              v-for="(item, index) in fairview_park_lang === 'en_us'
                ? [
                    'Accounts Department issues statements of account to owners, handles various sources of income, follows cases of bounced cheques or problems relating to autopay, handles refund of deposits and answers enquiries from residents about their accounts.',
                    'House owners can pay the management fee by cash at designated convenience store by presenting their monthly Statement of Account each with a barcode printed thereon or by crossed cheque or by autopay. We highly recommend you to use autopay as it is the most convenient and the fastest method, and can prevent the risk of being charged an overdue interest arising from late payment.',
                    'Furthermore, Accounts Department has to comply with the payment procedure to ensure the budget is met. At the year end we will arrange our accounts to be audited, and make projections for the future years aiming at achieving surplus or breaking even.',
                  ]
                : [
                    '會計部負責發出月結單，處理各項收入，跟進被銀行退回的支票及有關自動轉帳的各類問題，同時亦負責發還按金及處理業戶有關帳項的查詢。',
                    '業主可攜附印有條碼的月結單到指定的便利店以現金繳交管理費，亦可以支票或自動轉帳形式繳費。我們極力推薦使用自動轉帳繳交管理費，因為這方式最快捷方便，並能防止業主因遲交管理費而須支付逾期利息的風險。',
                    '此外，會計部會根據既定的付款批核程序，確保各項開支符合預算。每年的財政年度完結時，我們會將所有收支帳目交予會計師審核並為來年作出財政預算，務求達至盈餘或收支平衡。',
                  ]"
              :key="index"
              v-html="item"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, toRefs, onMounted } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    let data = reactive({
      fairview_park_lang: "",
    });
    data.fairview_park_lang = sessionStorage.getItem("fairview_park_lang");
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.nav-content {
  padding-left: 20px;
  .container {
    padding: 0px 0px;
    h3 {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: normal;
    }
    ul {
      padding: 0px 0 15px 0px;
      li {
        font-size: 18px;
        list-style-type: disc;
        margin-bottom: 20px;
        list-style: none;
      }
    }
  }
}
</style>
