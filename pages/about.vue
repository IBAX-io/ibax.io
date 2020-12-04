<!--
 * @Author: abc
 * @Date: 2020-09-16 15:19:11
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 14:58:43
 * @Description: 
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
            <a-button>
              <a
                href=" https://www.linkedin.com/company/ibaxio/"
                target="_blank"
                class="footer-href"
              >
                Find more positions on our LinkedIn</a
              >
            </a-button>
          </p>
        </a-col>
      </a-row>
    </div>
    <!-- about three -->
    <div class="about-three" style="display: none">
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <div class="about-three-box">
            <div class="about-three-left">
              <h4 class="about-three-title">Core Team</h4>
              <div class="about-three-content"></div>
            </div>
            <div class="about-three-right">
              <div class="about-three-right-top"></div>
              <div class="about-three-right-bottom">
                <h4 class="about-three-right-title">Personal introduction</h4>
                <p class="about-three-right-text">
                  {{ $t("declaration.basic9") }}
                </p>
                <p class="about-three-right-text">
                  {{ $t("declaration.basic10") }}
                </p>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- about four -->
    <a-row type="flex" justify="center">
      <a-col :md="15" :xs="23">
        <div class="about-four">
          <div class="about-four-left">Email：support@ibax.io</div>
          <div class="about-four-right">
            <p class="about-four-right-text">
              You can follow us or get in touch with us through these ways
            </p>
            <div class="about-four-right-btn">
              <a href="https://www.facebook.com/ibaxproject/" target="_blank">
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
                href="https://www.linkedin.com/company/ibaxio/"
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
    <div class="about-five">
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <h2 class="about-five-title">Our Story</h2>
          <a-row type="flex" justify="center">
            <a-col :md="8" :xs="23">
              <div class="about-five-img">
                <img
                  src="../assets/image/rw-pattern16w.png"
                  alt="rw-pattern16w"
                />
              </div>
            </a-col>
            <a-col :md="8" :xs="23">
              <div class="about-five-text">
                <p class="about-five-text__title"><span>Source</span></p>
                <p>
                  <span>{{ $t("declaration.unfairly") }}</span>
                </p>
                <p>
                  <span>{{ $t("declaration.management") }}</span>
                </p>
                <p>
                  <span>{{ $t("declaration.but") }}</span>
                </p>
              </div>
            </a-col>
            <a-col :md="8" :xs="23"
              ><div class="about-five-img" style="margin-left: 20%">
                <img src="../assets/image/right.png" alt="rw-pattern16w" /></div
            ></a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="23">
              <div class="about-five-img about-five-img-left">
                <img
                  src="../assets/image/person.png"
                  alt="rw-pattern16w"
                /></div
            ></a-col>
            <a-col :md="12" :xs="23">
              <div class="about-five-img about-five-img-right">
                <img
                  src="../assets/image/serven.png"
                  alt="rw-pattern16w"
                /></div
            ></a-col>
          </a-row>
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
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    if (process.browser) {
      this.$gtag("config", "G-3P74G75LD1", {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath
      });
    }
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
  },
  methods: {},
  head() {
    return {
      title: "IBAX-About Us",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "IBAX-About Us"
        }
      ]
    };
  }
};
</script>
