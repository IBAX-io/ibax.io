<!--
 * @Author: abc
 * @Date: 2020-09-15 16:29:27
 * @LastEditors: abc
 * @LastEditTime: 2020-12-20 22:53:47
 * @Description: 
-->
<template>
  <vue-scroll id="global" class="global" :ops="ops" style="height: 100%">
    <a-config-provider :locale="locale">
      <a-layout>
        <!--  -->
        <a-layout-header
          ref="headerTop"
          :class="{
            'global-fixed': isFixed,
            slideInDown: isFixed,
            slideInUp: isInUp
          }"
          class="animated"
        >
          <a-row type="flex" justify="center">
            <a-col :md="15" :xs="23">
              <public-header></public-header>
            </a-col>
          </a-row>
        </a-layout-header>
        <!--  -->
        <a-layout-content>
          <a-row type="flex" justify="center">
            <a-col :span="24">
              <keep-alive> <Nuxt /></keep-alive>
            </a-col>
          </a-row>
        </a-layout-content>
        <!--  -->
        <a-layout-footer>
          <a-row type="flex" justify="center">
            <a-col :md="15" :xs="23">
              <public-footer></public-footer>
            </a-col>
          </a-row>
        </a-layout-footer>
      </a-layout>
    </a-config-provider>
    <!--  -->
    <div
      :class="{ zoomIn: back, 'zoomIn-out': !back }"
      class="hao-back-box animated"
      @click="handleBackTop"
    >
      <a-icon type="caret-up" class="hao-back-icon" />
    </div>
  </vue-scroll>
</template>
<script>
// import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import PublicHeader from "../components/common/PublicHeader";
import PublicFooter from "../components/common/PublicFooter";
import { handleGetLang } from "~/assets/js/public";
if (process.client) {
  // eslint-disable-next-line no-var
  var { WOW } = require("wowjs");
}
export default {
  components: {
    PublicHeader,
    PublicFooter
  },
  data() {
    return {
      locale: null,
      domGlobal: "",
      domHeaderTop: "",
      isFixed: false,
      back: false,
      isInUp: false,
      ops: {
        vuescroll: {},
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInQuad",
          verticalNativeBarPos: "right",
          maxHeight: undefined,
          maxWidth: undefined
        },
        rail: {
          background: "red",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          background: "gray"
        }
      }
    };
  },
  computed: {
    lang() {
      // console.log(this.$store.state.locale);
      return this.$store.state.locale;
    }
  },
  watch: {
    lang: {
      handler(val, oldVal) {
        this.locale = this.$i18n.messages[val];
      },
      immediate: true
    }
  },
  created() {
    const strLang = handleGetLang();
    // console.log(this.$i18n.messages[strLang]);
    // console.log(strLang);
    this.locale = this.$i18n.messages[strLang];
  },
  mounted() {
    //  console.log(document.getElementById("global"));
    this.domGlobal = document.getElementById("global").firstChild;
    this.domHeaderTop = this.$refs.headerTop.$el;

    this.domGlobal.addEventListener("scroll", this.handleScroll);
    // this.$store.commit("handleDomGlobal", this.domGlobal);
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        scrollContainer: ".__panel",
        offset: 0,
        mobile: true,
        live: false
      });
      // console.log(wow);
      wow.init();
    }
  },
  methods: {
    //
    handleBackTop() {
      const scrollTop = this.domGlobal.scrollTop;
      if (scrollTop > 0) {
        window.requestNextAnimationFrame(this.handleBackTop);
        this.domGlobal.scrollTop = scrollTop - scrollTop / 5;
      }
    },
    //
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 300) {
        this.back = true;
      } else {
        this.back = false;
      }
      const topHeight = this.domHeaderTop.offsetTop;
      this.isFixed = scrollTop > topHeight;
      this.isInUp = scrollTop === topHeight;
    },
    handleChange(val, oldVal) {
      this.locale = this.$i18n.messages[val];
    }
  }
};
</script>
