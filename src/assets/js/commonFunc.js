/*
 * @Author: your name
 * @Date: 2021-03-27 22:03:45
 * @LastEditTime: 2022-09-29 00:13:13
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Description: In User Settings Edit
 * @FilePath: /vue3.0/Users/david/Desktop/github_project/DTX/src/assets/js/commonFun.js
 */
import Vue from "vue";
function a() {}
a.install = function() {
  Vue.mixin({
    data() {
      return {};
    },
    methods: {
      //驗證email
      verificationEmail(email) {
        const reg = /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return reg.test(email);
      },
      //获取YYYY-MM-DD hh:mm:ss
      getDateformat(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? "0" + minute : minute;
        var second = date.getSeconds();
        second = second < 10 ? "0" + second : second;
        return y + "/" + m + "/" + d + " " + h + ":" + minute + ":" + second;
      },
      //驗證手機號
      verificationPhoneNumber(areacode, phoneNumber) {
        const reg = /^1[3456789]\d{9}$/;
        const reg2 = /^[13456789]\d{7}$/;
        if (areacode === "+86" || areacode === "86") {
          return reg.test(phoneNumber);
        } else if (areacode === "+62" || areacode === "62") {
          if (phoneNumber.length <= 11 || phoneNumber.length >= 14) {
            return false;
          } else {
            return true;
          }
        } else if (areacode === "+852" || areacode === "852") {
          return reg2.test(phoneNumber);
        } else if (areacode === "+976" || areacode === "976") {
          if (phoneNumber.length != 8) {
            return false;
          } else {
            return true;
          }
        } else {
          if (phoneNumber.length <= 5) {
            return false;
          } else {
            return true;
          }
        }
      },
      //获取系统时区 将UTC时间转成当前时区时间
      getSystemTimeToNewTime(time) {
        let nowTime = new Date(time);
        let time_zone = -(nowTime.getTimezoneOffset() / 60); //得到时区
        let offset_GMT = nowTime.getTimezoneOffset(); // 返回 UTC 和目标时间（GTM）之间的时差（分钟）
        let nowDate = nowTime.getTime(); // 目标时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
        let targetDate = new Date(
          nowDate + offset_GMT * 60 * 1000 + time_zone * 60 * 60 * 1000
        );
        return targetDate;
      },
      //随机生成数值
      getRamNumber(num) {
        var result = "";
        for (var i = 0; i < num; i++) {
          result += Math.floor(Math.random() * 36).toString(36); //获取0-9，a-b随机组合成的
        }
        //默认字母小写，手动转大写
        return result.toUpperCase();
      },
    },
  });
};
Vue.use(a);
//const reg =  new RegExp("^[0-9]*$");
