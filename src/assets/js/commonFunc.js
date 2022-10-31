/*
 * @Author: your name
 * @Date: 2021-03-27 22:03:45
 * @LastEditTime: 2022-10-23 13:18:10
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Description: In User Settings Edit
 * @FilePath: /vue3.0/Users/david/Desktop/github_project/DTX/src/assets/js/commonFun.js
 */
function CommonFunc() {
  this.getIsPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    var flagPc = true;
    for (var i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) > 0) {
        flagPc = false;
        break;
      }
    }
    return flagPc;
  },
    //驗證email
    this.verificationEmail = (email) => {
      const reg = /^[A-Za-z0-9.^\u4e00-\u9fa5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      return reg.test(email);
    },
    //获取YYYY-MM-DD hh:mm:ss
    this.getDateformat = (date) => {
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
    this.verificationPhoneNumber = (areacode, phoneNumber) => {
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
    //随机生成数值
    this.getRamNumber = (num) => {
      var result = "";
      for (var i = 0; i < num; i++) {
        result += Math.floor(Math.random() * 36).toString(36); //获取0-9，a-b随机组合成的
      }
      //默认字母小写，手动转大写
      return result.toUpperCase();
    }
}
export default new CommonFunc()