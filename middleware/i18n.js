/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description
 * @Date: 2019-04-11 09:27:56
 * @LastEditTime: 2020-09-22 18:15:37
 */
import { handleGetLang } from "~/assets/js/public";
export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  // console.log(route);
  const defaultLocale = app.i18n.fallbackLocale;
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return;
  // Get locale from params
  let locale;
  locale = handleGetLang();
  // cooki  cooki
  if (locale) {
    locale = handleGetLang();
    if (!locale) {
      return error({
        message: "Cookie not be found.",
        statusCode: 404
      });
    }
  } else {
    // cooki   zh
    locale = params.lang || defaultLocale;
    if (!store.state.locales.includes(locale)) {
      return error({
        message: "This page could not be found.",
        statusCode: 404
      });
    }
  }
  // stor
  store.commit("SET_LANG", locale);
  app.i18n.locale = store.state.locale;
  // console.log(defaultLocale);
  // console.log(route.fullPath.indexOf("/" + defaultLocale));
  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf("/" + defaultLocale) === 0
  ) {
    const toReplace =
      "^/" +
      defaultLocale +
      (route.fullPath.indexOf("/" + defaultLocale + "/") === 0 ? "/" : "");
    const zh = new RegExp(toReplace);
    return redirect(route.fullPath.replace(zh, "/"));
  }
}
