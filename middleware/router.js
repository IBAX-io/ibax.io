/*
 * @Author: abc
 * @Date: 2020-10-16 16:45:00
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 15:15:58
 * @Description:
 */
export default ({ app }) => {
  app.router.afterEach((to, from, next) => {
    if (process.client) {
      document.getElementById("global").firstChild.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    // scrollTop = 0
  });
  /* ---------------------------  ----------------------------------------- */
  /* app.router.beforeEach((to, from, next) => {
    next();
    if (process.client) {
      const _hmt = _hmt || [];
      // 
      (function () {
        const hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0cb92588b9c690b3c48173df77fa700d";
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  }); */
};
