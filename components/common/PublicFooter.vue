<!--
 * @Author: abc
 * @Date: 2020-10-10 14:35:51
 * @LastEditors: abc
 * @LastEditTime: 2021-06-03 19:20:49
 * @Description: footer
-->
<template>
  <div class="footer">
    <a-row type="flex" justify="center">
      <div class="footer-top">
        <h4 class="footer-title">Technological Iterations</h4>
        <a href="https://github.com/ibax-io" target="_blank" class="github"></a>
      </div>
      <a-col :md="24" :xs="22">
        <a-col :md="3" :xs="23">
          <h5 class="footer-link">INTRODUCTION</h5>
          <a
            href="https://ibax.io/IBAX_Public_Network_Whitepaper_V1.1.pdf"
            target="_blank"
            class="footer-href"
            >White Paper
          </a>
          <!-- <a
            href="https://ibax.io/IBAX%20Public%20Network%20Whitepaper%20V1.0.pdf"
            target="_blank"
            class="footer-href"
            >White Paper
          </a> -->
        </a-col>
        <a-col :md="5" :xs="23">
          <h5 class="footer-link">RESEARCH</h5>
          <nuxt-link :to="{ name: 'research' }" class="footer-href"
            >Cross-chain</nuxt-link
          >
          <nuxt-link :to="{ name: 'research' }" class="footer-href"
            >DeFi</nuxt-link
          >
          <nuxt-link :to="{ name: 'research' }" class="footer-href"
            >Anonymous transaction</nuxt-link
          >
          <nuxt-link :to="{ name: 'research' }" class="footer-href"
            >Multi-signature</nuxt-link
          >
        </a-col>
        <a-col :md="5" :xs="23">
          <h5 class="footer-link">COMMUNITY EVENTS</h5>
          <a
            href="https://github.com/ibax-io"
            target="_blank"
            class="footer-href"
            >Awards</a
          >
          <a
            href="https://github.com/ibax-io"
            target="_blank"
            class="footer-href"
            >Contribution</a
          >
          <a
            href="https://github.com/ibax-io"
            target="_blank"
            class="footer-href"
            >Knowledge Base</a
          >
        </a-col>
        <a-col :md="5" :xs="23">
          <h5 class="footer-link">OPEN SOURCE</h5>
          <a
            href="https://ibax.gitbook.io/docs/"
            target="_blank"
            class="footer-href"
            >Open Documentation</a
          >
          <a
            href="https://github.com/ibax-io"
            target="_blank"
            class="footer-href"
            >Open Source</a
          >
        </a-col>
        <a-col :md="6" :xs="23">
          <p class="footer-href">{{ $t("declaration.this") }}</p>
          <p class="footer-href">{{ $t("declaration.willing") }}</p>
          <p class="footer-href">
            <span>Contact US：</span>
            <span>Email：support@ibax.io</span>
          </p>
          <p class="footer-share">
            <a
              v-for="(item, index) in arrShare"
              :key="index"
              target="_blank"
              :href="item.href"
              ><img :src="item.img" :alt="item.value"
            /></a>
          </p>
        </a-col>
      </a-col>
    </a-row>
  </div>
</template>
<script>
const twitter = require("@/assets/image/twitter.png");
const facebook = require("@/assets/image/facebook.png");
const youtube = require("@/assets/image/youtube.png");
const ins = require("@/assets/image/in.png");
export default {
  props: {},
  data() {
    return {
      arrShare: [
        {
          value: "facebook",
          img: facebook,
          href: "https://www.facebook.com/IBAXNetwork/"
        },
        {
          value: "twitter",
          img: twitter,
          href: "https://twitter.com/IbaxNetwork"
        },
        {
          value: "youtube",
          img: youtube,
          href: "https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ?view_as=subscribe"
        },
        {
          value: "in",
          img: ins,
          href: "https://www.linkedin.com/company/ibaxio/"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    isDevice() {
      if (process.client) {
        //  console.log("+++");
        const userAgent = navigator.userAgent;
        const Agents = [
          "Android",
          "iPhone",
          "SymbianOS",
          "Windows Phone",
          "iPad",
          "iPod"
        ];
        // console.log("userAgent:", userAgent);
        return Agents.some((i) => {
          return userAgent.includes(i);
        });
      }
    },
    share(type) {
      const that = this;
      //
      const toOpen = function (url) {
        let option =
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350";
        // console.log(that.isDevice());
        option = that.isDevice() ? option : "";
        window.open(url, "_blank", option);
      };
      const href = encodeURIComponent(document.location.href);
      // console.log(href);
      const title = encodeURIComponent(document.title);
      switch (type) {
        case "facebook": // Faceboo
          toOpen(`http://www.facebook.com/sharer.php?u=${href}&t=${title}`);
          break;
        case "twitter": // twitte
          toOpen(`http://twitter.com/share?text=${title}&url=${href}`);
          break;
        case "linkedin": // linkedin
          toOpen(
            "http://www.linkedin.com/shareArticle?mini=true&url=" +
              href +
              "&title=" +
              title
          );
          break;
      }
    },
    handleShare(val) {
      this.share(val);
    }
  }
};
</script>
