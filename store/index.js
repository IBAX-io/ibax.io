/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: vuex
 * @Date: 2019-04-11 09:26:40
 * @LastEditTime: 2020-10-16 16:53:14
 */

export const state = () => ({
  locales: ["zh", "en", "tw"],
  locale: "en"
});

export const mutations = {
  //
  SET_LANG(state, locale) {
    // console.log(locale);
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};
//      store/index.js  ）。
export const actions = {
  // nuxtServerIni Nuxt.j
  async nuxtServerInit({ dispatch, commit }, { req }) {}
};
export const getters = {
  //
  handdleLang(state) {
    const { locale } = state;
    // console.log(authUser);
    return locale;
  }
};
