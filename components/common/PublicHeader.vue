<!--
 * @Author: abc
 * @Date: 2020-09-17 10:28:12
 * @LastEditors: abc
 * @LastEditTime: 2020-12-20 22:55:09
 * @Description: header nav 
-->
<template>
  <div class="globel-header">
    <div class="computer">
      <!-- PC Nav -->
      <div class="header-logo">
        <nuxt-link :to="{ name: 'index' }" tag="a"></nuxt-link>
      </div>
      <a-menu v-model="current" mode="horizontal" class="header-nav">
        <a-menu-item v-for="(item, index) in arrNav" :key="item.name">
          <nuxt-link v-if="index === 0" :to="{ name: item.name }" tag="a" exact
            >{{ $t(item.label) }}
          </nuxt-link>
          <nuxt-link v-else :to="{ name: item.name }" tag="a"
            >{{ $t(item.label) }}
          </nuxt-link>
        </a-menu-item>
      </a-menu>
      <a-dropdown style="display: none">
        <a class="ant-dropdown-link" style="font-size: 16px">
          {{ label }} <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item v-for="item in objLang" :key="item.value">
            <a href="javascript:;" @click="handleLangSwitch(item.value)">{{
              item.label
            }}</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <!--  <div class="mobile">
      <a-dropdown
        overlay-class-name="nav-dropdown"
        @visibleChange="visibleChange"
      >
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <a-icon type="unordered-list" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item
            v-for="(item, index) in arrNav"
            :key="item.name"
            @click="btn(item)"
          >
            <nuxt-link
              v-if="index === 0"
              :to="{ name: item.name }"
              tag="a"
              exact
              >{{ $t(item.label) }}
            </nuxt-link>
            <nuxt-link v-else :to="{ name: item.name }" tag="a"
              >{{ $t(item.label) }}
            </nuxt-link>
          </a-menu-item>
        </a-menu>
        <span></span>
      </a-dropdown>
    </div> -->
  </div>
</template>
<script>
import { handleGetLang, handleSaveCookie } from "~/assets/js/public";
export default {
  data() {
    return {
      current: ["mail"],
      label: "English",
      arrNav: [
        {
          name: "index",
          label: "nav.home"
        },
        {
          name: "research",
          label: "nav.research"
        },
        {
          name: "openSource",
          label: "nav.source"
        },
        {
          name: "dynamic",
          label: "nav.dynamic"
        },

        {
          name: "about",
          label: "nav.about"
        }
      ],
      objLang: [
        {
          value: "zh",
          label: "English"
        },
        {
          value: "tw",
          label: "English"
        },
        {
          value: "en",
          label: "English"
        }
      ]
    };
  },
  mounted() {
    const strLang = handleGetLang();
    // console.log(strLang);
    const arr = this.objLang;
    this.label = this.handleLabel(arr, strLang);
  },
  methods: {
    btn() {},
    visibleChange(val) {
      // console.log(val);
    },
    handleLabel(arr, val) {
      let label = "English";
      arr.forEach((item) => {
        if (item.value === val) {
          label = item.label;
        }
      });
      return label;
    },
    handleLangSwitch(val) {
      //  console.log(val);
      // stor
      this.$store.commit("SET_LANG", val);
      this.label = this.handleLabel(this.objLang, val);
      this.$i18n.locale = val;
      //
      const objData = {
        lang: val
      };
      // console.log(objData);
      handleSaveCookie("lang", objData, 7);
    }
  }
};
</script>
