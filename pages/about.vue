<!--
 * @Author: abc
 * @Date: 2020-09-16 15:19:11
 * @LastEditors: abc
 * @LastEditTime: 2021-08-02 14:14:40
 * @Description: index
-->
<template>
  <div class="about">
    <!-- about one -->
    <div class="about-green">
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <div class="about-top">
            <div class="about-top-content">
              <div class="about-top-box">
                <img src="../assets/image/green-1.png" alt="green-1" />
                <p>Secure</p>
              </div>
            </div>
            <div class="about-top-content">
              <div class="about-top-box">
                <img src="../assets/image/green-2.png" alt="green-1" />
                <p>Efficient</p>
              </div>
            </div>
            <div class="about-top-content">
              <div class="about-top-box">
                <img src="../assets/image/green-3.png" alt="green-1" />
                <p>Easy</p>
              </div>
            </div>
          </div>
          <h3 class="about-title">IBAX Is Much More</h3>
        </a-col>
      </a-row>
    </div>
    <!-- about two -->
    <div class="about-box">
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <h2 class="dynamic-title">We Are Hiring</h2>
          <p class="about-box-maybe">
            You may not be perfect now, but join us so we can be greater
            together!
          </p>
          <div class="about-box-warp">
            <div class="about-box-warp-text">
              <h3 class="about-box-warp-h3">Blockchain Expert</h3>
              <h4 class="about-box-warp-h4">
                {{ $t("declaration.interested") }}
              </h4>
              <p class="about-box-warp-p">{{ $t("declaration.need") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.design") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.apply") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.have") }}</p>
              <h4 class="about-box-warp-h4">
                {{ $t("declaration.following") }}
              </h4>
              <p class="about-box-warp-p">{{ $t("declaration.need-1") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.need-2") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.need-3") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.need-4") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.need-5") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.need-6") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.need-7") }}</p>
            </div>
            <div class="about-box-warp-img">
              <img src="../assets/image/about-1.png" alt="about-1" />
            </div>
          </div>
          <div class="about-box-warp">
            <div class="about-box-warp-img2">
              <img src="../assets/image/about-2.png" alt="about-2" />
            </div>
            <div class="about-box-warp-text">
              <h3 class="about-box-warp-h3">Network Transmission Engineer</h3>
              <h4 class="about-box-warp-h4">
                {{ $t("declaration.interested") }}
              </h4>
              <p class="about-box-warp-p">{{ $t("declaration.track") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.develop") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.papers") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data") }}</p>
              <h4 class="about-box-warp-h4">
                {{ $t("declaration.following") }}
              </h4>
              <p class="about-box-warp-p">{{ $t("declaration.skilled") }}</p>
              <p class="about-box-warp-p">
                {{ $t("declaration.technologies") }}
              </p>
              <p class="about-box-warp-p">{{ $t("declaration.principles") }}</p>
              <p class="about-box-warp-p">
                {{ $t("declaration.understanding") }}
              </p>
              <p class="about-box-warp-p">{{ $t("declaration.things") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.algorithm") }}</p>
            </div>
          </div>
          <div class="about-box-warp">
            <div class="about-box-warp-text">
              <h3 class="about-box-warp-h3">Blockchain Planner</h3>
              <h4 class="about-box-warp-h4">
                {{ $t("declaration.interested") }}
              </h4>
              <p class="about-box-warp-p">{{ $t("declaration.data1") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data2") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data3") }}</p>
              <h4 class="about-box-warp-h4">
                {{ $t("declaration.following") }}
              </h4>
              <p class="about-box-warp-p">{{ $t("declaration.data4") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data5") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data6") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data7") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data8") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data9") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.data10") }}</p>
            </div>
            <div class="about-box-warp-img">
              <img src="../assets/image/about-3.png" alt="about-1" />
            </div>
          </div>
          <div class="about-box-warp">
            <div class="about-box-warp-img3">
              <img src="../assets/image/about-4.png" alt="about-2" />
            </div>
            <div class="about-box-warp-text">
              <h3 class="about-box-warp-h3">Consensus Algorithm Architect</h3>
              <h4 class="about-box-warp-h4">
                {{ $t("declaration.interested") }}
              </h4>
              <p class="about-box-warp-p">{{ $t("declaration.basic1") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.basic2") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.basic3") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.basic4") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.basic5") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.basic6") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.basic7") }}</p>
              <p class="about-box-warp-p">{{ $t("declaration.basic8") }}</p>
            </div>
          </div>
          <p class="about-btn">
            <a
              href=" https://www.linkedin.com/company/ibaxio/"
              target="_blank"
              class="link-a-none"
            >
              Find more positions on our LinkedIn</a
            >
          </p>
        </a-col>
      </a-row>
    </div>
    <!-- about three -->
    <div class="about-three">
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <div class="about-three-content">
            <div class="about-three-tabs">
              <h4 class="about-three-title">Core team members</h4>
              <template v-for="(item, index) in arrCeo">
                <div
                  :key="index"
                  class="about-three-tabs-box"
                  :class="item.isActive ? 'about-three-tabs-box-active' : ''"
                  @click="handleActive(index)"
                >
                  {{ item.name }}
                </div>
              </template>
            </div>
            <div class="about-three-right">
              <div class="about-three-right-img" :style="objStyle">
                <img :src="objCeo.img" alt="ceo-1" />
              </div>
              <div class="about-three-right-content">
                <div class="about-three-right-top">
                  <img :src="objCeo.card" alt="ceo-1" />
                </div>
                <div class="about-three-right-bottom">
                  <h4 class="about-three-right-title">Personal introduction</h4>
                  <p class="about-three-right-text">
                    {{ objCeo.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- about four -->
    <a-row type="flex" justify="center" style="display: none">
      <a-col :md="15" :xs="23">
        <div class="about-four">
          <div class="about-four-left">Email：support@ibax.io</div>
          <div class="about-four-right">
            <p class="about-four-right-text">
              You can follow us or get in touch with us through these ways
            </p>
            <div class="about-four-right-btn">
              <a href="https://www.facebook.com/IBAXNetwork/" target="_blank">
                <a-button>
                  <span class="about-four-right-facebook"></span>Facebook
                </a-button>
              </a>
              <a href="https://twitter.com/IbaxNetwork" target="_blank">
                <a-button>
                  <span class="about-four-right-twitter"></span>Twitter
                </a-button>
              </a>
              <a
                href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ?view_as=subscribe"
                target="_blank"
              >
                <a-button>
                  <span class="about-four-right-youtube"></span
                  >YouTube</a-button
                >
              </a>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <!-- Story wall -->
    <div class="about-five">
      <h2 class="about-five-title">Roadmap</h2>
      <a-row type="flex" justify="center">
        <a-col :md="12" :xs="23">
          <div class="about-five-content">
            <div class="about-five-content-item">
              <div class="about-five-content-item-img">
                <img src="../assets/image/five-1.png" alt="five-1" />
              </div>
              <h3 class="about-five-title-small">Empower</h3>
              <div class="about-five-content-text">
                <h4>Oct 2020</h4>
                <div>
                  IBAX Network WHITEPAPER Version 1.0 IBAX Network GLOABL
                  FOUNDATION SET UP
                </div>
              </div>
              <div class="about-five-content-text">
                <h4>Dec 2020WARM-UP PRESS CONFERENCE</h4>
                <div>
                  IBAX Network WEBSITE TESTING MAIN-NET Global ECO-SYSTEM NODE
                  SUMMON
                </div>
              </div>
              <div class="about-five-content-text">
                <h4>Aug 2021</h4>
                <div>
                  MAIN-NET ONLINE ANNOUNCEMENT DAPPS ECO-SYSTEM PUBLISH（SUCH
                  AS：ECO-SYSTEM BUILDING、ONE CLICK COIN、ECO-SYSTEM VOTING
                  RIGHT、DECENTRALIZED EXCHANGE ETC.
                </div>
              </div>
            </div>
            <div class="about-five-content-item">
              <div class="about-five-content-item-img">
                <img src="../assets/image/five-2.png" alt="five-1" />
              </div>
              <h3 class="about-five-title-small">Forward</h3>
              <div class="about-five-content-text">
                <h4>2021 - 2022</h4>
                <div>
                  GLOBAL ECO-FOUNDATION GOVERNOR'S ELECTION CONFERENCE AND NODE
                  VOTING OPENING THE GLOBAL CONFERENCE OF DEVELOPERS RELEASING
                  V1.01 VERSION OF GFILES DISTRIBUTED STORAGE APPLICATION BASED
                  ON IBAX Network
                </div>
              </div>
              <div class="about-five-content-text">
                <h4>Jun 2022</h4>
                <div>
                  MAIN CHAIN TECHNOLOGY UPGRADE ITERATION IBAX Network
                  WHITEPAPER V2.0 REALIZE IPFS DISTRIBUTED NETWORK BASED ON IBAX
                  Network MAIN CHAIN, OPTIMIZE AND INCREASE THE RICHNESS OF
                  ECO-COMMERCE, AND INTRODUCE SOCIAL, GAME, INFORMATION, VIDEO
                  AND OTHER APPLICATIONS. INCORPORATING 1000+ ENTERPRISES,
                  INSTITUTIONS AND DEVELOPING ECOLOGICAL PARTNERS
                </div>
              </div>
            </div>
            <div class="about-five-content-item">
              <div class="about-five-content-item-img">
                <img src="../assets/image/five-3.png" alt="five-1" />
              </div>
              <h3 class="about-five-title-small">Vsion</h3>
              <div class="about-five-content-text">
                <h4>2022 — 2025</h4>
                <div>
                  CONSTRUCTING AND PERFECTING BLOCK CHAIN INFRASTRUCTURE IN AN
                  ALL-ROUND WAY FOUNDATION INVESTMENT TO INTRODUCE BUSINESS
                  COOPERATION AND EXPAND IBAX Network ECOLOGY
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  asyncData(context) {
    //
    let mark = false;
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      mark = true;
      // console.log( ");
    }, 6000);
    if (mark) {
      return { project: "nuxt" };
    }
  },
  data() {
    return {
      arrCeo: [
        {
          name: "Stuart Nichols (CEO)",
          card: require("../assets/image/ceo-2-1.jpg"),
          img: require("../assets/image/ceo-1.png"),
          text: this.$t("stuart"),
          isActive: true
        },
        {
          name: "Alan McIvor (COO)",
          card: require("../assets/image/ceo-2-1.jpg"),
          img: require("../assets/image/ceo-2.png"),
          text: this.$t("alan"),
          isActive: false
        },
        {
          name: "Simon Hemmrich (Senior Consultant)",
          card: require("../assets/image/ceo-2-1.jpg"),
          img: require("../assets/image/ceo-3.png"),
          text: this.$t("simon"),
          isActive: false
        }
      ],
      objCeo: {
        name: "XXX（CEO）",
        card: require("../assets/image/ceo-2-1.jpg"),
        img: require("../assets/image/ceo-1.png"),
        text: this.$t("stuart"),
        isActive: true
      },
      objStyle: {
        width: "400px",
        marginTop: "95px",
        marginRight: "-5px"
      },
      timer: null,
      i: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
    this.handleLoop();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    handleActive(index) {
      this.arrCeo.map((item, i) => {
        item.isActive = false;
        if (index === i) {
          item.isActive = true;
        }
        return item;
      });
      this.objCeo = this.arrCeo[index];
      if (index === 0) {
        this.objStyle = {
          width: "400px",
          marginTop: "95px",
          marginRight: "-5px"
        };
      } else if (index === 1) {
        this.objStyle = {
          width: "400px",
          marginTop: "165px",
          marginRight: "-8px"
        };
      } else {
        this.objStyle = {
          width: "370px",
          marginTop: "108px",
          marginRight: "0px"
        };
      }
      this.i = index;
    },
    handleLoop() {
      if (this.i >= 2) {
        this.i = 0;
      } else {
        ++this.i;
      }
      this.handleActive(this.i);
      console.log(this.i);
      this.timer = setTimeout(() => {
        this.handleLoop();
      }, 5000);
    }
  },
  head() {
    return {
      title: "About Us | IBAX Network",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Welcome to join us and Let's grow together."
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Welcome to join us and Let's grow together."
        }
      ]
    };
  }
};
</script>
