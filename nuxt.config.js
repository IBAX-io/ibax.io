/*
 * @Author: abc
 * @Date: 2020-09-15 16:29:27
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 15:01:32
 * @Description
 */
// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require("path");
let pattern = false;
const plugins = [
  [
    "import",
    {
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      //   es  ant-design-vue/es/component
      // lib  ant-design-vue/lib/component
      style: true
      //   ,  ant-design-vue  js
      // true  import  'ant-design-vue/es/component/style'
      // 'css'  import 'ant-design-vue/es/component/style/css'
    }
  ]
];
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") {
  pattern = true;
} else {
  plugins.push("transform-remove-console");
  pattern = false;
}
console.log(pattern);
// console.log(process.env.BASE_URL);

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "IBAX",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "IBAX" },
      { hid: "og:title", name: "og:title", content: "IBAX" },
      {
        hid: "keyswords",
        name: "keyswords",
        content:
          "IBAX,CryptoCurrency,Bitcoin,Cross-Chain,Crypto,DeFi,Dapps,Blockchaintechnology,corelayertechnology,decentralizedapplication,Distributedledger,IBAXAMA"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "IBAX"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "IBAX"
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "IBAX"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/animate/animate.min.css" }
    ],
    script: [
      {
        type: "text/javascript",
        src: "/js/requestNextAnimationFrame.js"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/less/index.less"],
  //  Nuxt.js .nuxt
  // buildDir: "nuxt-dist",
  /*  */
  loading: "~/components/common/loading.vue",
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:8888"
  },
  /* ,dev  true
  nuxt build， nuxt start  nuxt generate ，dev  false */
  dev: pattern,
  //
  layoutTransition: "layout",
  /*
   **
   */
  router: {
    middleware: ["i18n", "router"],
    linkActiveClass: "nav-active-link"
    /* scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    } */
  },
  transition: {
    name: "page",
    mode: "out-in",
    beforeEnter(el) {
      // console.log("Before enter...");
    }
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: "@/plugins/antd-ui"
    },
    "@/plugins/vuescroll",
    "@/plugins/i18n.js",
    "@/plugins/mixin.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    "@aceforth/nuxt-optimized-images"
  ],
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    "@nuxtjs/google-gtag"
  ],
  "google-gtag": {
    id: "G-3P74G75LD1",
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ["ibax.io", "m.ibax.io"]
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: true // disable if you don't want to track each page route
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    cssSourceMap: pattern,
    cache: pattern,
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#244134"
          },
          javascriptEnabled: true
        }
      }
    },
    transpile: [/ant-design-vue/],
    extractCSS: !pattern,
    /*
     *
     */
    quiet: false,
    hotMiddleware: {
      quiet: true,
      client: {
        noInfo: true
      }
    },
    babel: {
      plugins
    },
    //
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[id].[name].js"),
      img: ({ isDev }) => (isDev ? "[path][name].[ext]" : "img/[hash:7].[ext]"),
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[hash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[hash:7].[ext]"
    },
    extend(config, ctx) {
      //
      if (ctx.isClient) {
        config.devtool = pattern ? "eval-source-map" : "none";
      }
      //
      if (ctx.isServer) {
        config.devtool = pattern ? "eval-source-map" : "none";
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
        config.resolve.alias["@ant-design/icons/lib/dist$"] = path.resolve(
          __dirname,
          "./plugins/icons.js"
        ); //
        /*   */
        /*  config.module.rules.push({
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: [
            {
              loader: "image-webpack-loader",
              options: { bypassOnDebug: true }
            }
          ]
        }); */
      }
    }
  }
};
