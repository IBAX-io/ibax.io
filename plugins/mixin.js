/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: Vu
 * @Date: 2019-04-12 14:08:12
 * @LastEditTime: 2020-12-20 22:55:46
 */

import Vue from "vue";
import Cookie from "js-cookie";
// ，seo   head    nuxt  plugin
//   head  ：
// head() {
//     return this.$seo(this.detail.title, this.detail.summary)
// }
Vue.mixin({
  methods: {
    //
    handleLoading() {
      // ;
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        const that = this;
        document.onreadystatechange = function () {
          if (document.readyState === "complete") {
            //
            that.$nuxt.$loading.finish();
          }
        };
      });
    },
    $analysis(str, dataArr) {
      const arr = str.match(/\[(.*?)\]/g);
      // console.log(arr);
      const width = "25";
      const height = "25";
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          for (const j in dataArr) {
            if (arr[i] === dataArr[j].phrase) {
              // console.log(dataArr[j].phrase);
              const ex =
                '<img width="' +
                width +
                '" height="' +
                height +
                '" src="' +
                dataArr[j].url +
                '">';
              str = str.replace(arr[i], ex);
              break;
            }
          }
        }
      }
      return str;
    },
    //
    $handleGenerateTitle(title) {
      const hasKey = this.$te(title);
      const translatedTitle = this.$t(title); // $t :this method from vue-i18n, inject in @/lang/index.js
      if (hasKey) {
        return translatedTitle;
      }
      return title;
    },
    // cooki
    $handleSaveCookie(str, objdata, time) {
      const strData = encodeURIComponent(JSON.stringify(objdata));
      Cookie.set(str, strData, { expires: time });
    },
    // cooki
    $getLangType() {
      if (typeof window !== "undefined") {
        const objLang = Cookie.get("lang");
        let str = "zh";
        if (objLang) {
          str = JSON.parse(decodeURIComponent(objLang)).lang;
          return str;
        } else {
          return str;
        }
      }
    },
    // cooki
    $handleGetUserCookie(str) {
      if (typeof window !== "undefined") {
        const objUser = Cookie.get(str);
        let obj = {};
        if (objUser) {
          obj = JSON.parse(decodeURIComponent(objUser));
          return obj;
        } else {
          return obj;
        }
      }
    },
    //     meta  payload    meta  hid 。
    //
    /* og:type 
    og:title 
       og:description 
       og:url 
       og:image 
       og:site_name 
       og:videosrc Flas 
       og:audiosrc  */
    $seo(title, type, content, keyWord, author, robots, payload = []) {
      // console.log(robots);
      return {
        title,
        meta: [
          {
            hid: "og:site_name",
            name: "og:site_name",
            property: "og:site_name",
            content: "www.haomeren.com"
          },
          {
            hid: "og:type",
            name: "og:type",
            property: "og:type",
            content: type
          },
          {
            hid: "og:title",
            name: "og:title",
            property: "og:title",
            content: title
          },
          {
            hid: "og:description",
            name: "og:description",
            property: "og:description",
            content
          },
          {
            hid: "author",
            name: "author",
            property: "author",
            content: author
          },
          {
            hid: "keywords",
            name: "keywords",
            content: keyWord
          },
          {
            hid: "robots",
            name: "robots",
            content: robots
          }
        ].concat(payload)
      };
    },
    /* --  */
    htmlEncode(html) {
      // 1  DIV
      const temp = document.createElement("div");
      // 2 innerText(i  textContent ，googl )
      temp.textContent !== undefined
        ? (temp.textContent = html)
        : (temp.textContent = html);
      // 3 innerHTML HTM
      return temp.innerHTML;
    },
    /* --  */
    htmlDecode(text) {
      // 1  DIV
      const temp = document.createElement("div");
      // 2 innerHTML(ie ，googl )
      temp.innerHTML = text;
      // 3 innerText(i  textContent ，googl ) HTM 。
      return temp.textContent || temp.textContent;
    }
    /* $mixinGetSass(filename) {
     // console.log(filename);
      return require(`../assets/sass/${filename}/variables.scss`);
    } */
  }
});
