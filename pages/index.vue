<!--
 * @Author: abc
 * @Date: 2020-09-15 16:29:27
 * @LastEditors: abc
 * @LastEditTime: 2021-07-30 16:23:17
 * @Description: home web
-->
<template>
  <div class="content">
    <!-- first part -->
    <a-row type="flex" justify="center">
      <a-col :md="15" :xs="23">
        <a-row type="flex" justify="center">
          <a-col :md="12" :xs="22">
            <div class="content-left wow slideInLeft">
              <h3 class="content-title">
                {{ $t("blockChain") }}<span class="content-spot">.</span>
              </h3>
              <p class="content-text">{{ $t("declaration.one") }}</p>
              <p class="content-text">{{ $t("declaration.two") }}</p>
              <p class="content-text">{{ $t("declaration.three") }}</p>
            </div>
          </a-col>
          <a-col :md="12" :xs="22">
            <a-row type="flex" justify="center">
              <div class="content-right wow slideInRight">
                <img src="../assets/image/first.png" alt="first" />
              </div>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <div class="content-box">
      <!-- second part -->
      <div class="content-second">
        <a-row type="flex" justify="center">
          <a-col :md="8" :xs="20">
            <h4 class="content-second-title">
              {{ $t("whitePaper") }}<span class="content-spot">.</span>
            </h4>
            <p
              class="content-text"
              style="background: rgba(255, 255, 255, 0.8)"
              v-html="$t('declaration.four')"
            ></p>
            <div class="content-btn">
              <a
                href="https://ibax.io/IBAX_Public_Network_Whitepaper_V1.1.pdf"
                target="_blank"
                class="link-a-none"
              >
                {{ $t("learnMor") }}
              </a>
              <!--  <a
                  href="https://ibax.io/IBAX%20Public%20Network%20Whitepaper%20V1.0.pdf"
                  target="_blank"
                >
                  {{ $t("learnMor") }}
                </a> -->
            </div>
          </a-col>
        </a-row>
      </div>
      <!-- three part -->
      <!-- video -->
      <a-row type="flex" justify="center">
        <a-col :md="12" :xs="23">
          <div ref="videoBox" class="video">
            <video
              id="video"
              ref="video"
              src="/video/video.mp4"
              webkit-playsinline="true"
              x5-playsinline="true"
              controls
              muted
              playsinline="true"
              poster="/video/poster.jpg"
              class="video-content"
            >
              Your browser does not support video tags.
            </video>
            <div ref="play" class="video-poster" @click="handleVideo">
              <img src="/video/612.png" alt="612" />
            </div>
          </div>
        </a-col>
      </a-row>
      <!-- text -->
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <h4>{{ $t("upgraded") }}</h4>
                <p>{{ $t("declaration.double") }}</p>
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <img src="../assets/image/moon.png" alt="moon" />
              </div>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <img src="../assets/image/horseshoe.png" alt="horseshoe" />
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <h4>{{ $t("compatible") }}</h4>
                <p>
                  {{ $t("declaration.dpoa") }}
                </p>
              </div>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <h4>{{ $t("commercial") }}</h4>
                <p>
                  {{ $t("declaration.we") }}
                </p>
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <img src="../assets/image/circular.png" alt="circular" />
              </div>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <img src="../assets/image/triangle.png" alt="triangle" />
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <h4>{{ $t("effective") }}</h4>
                <p>{{ $t("declaration.block") }}</p>
              </div>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <h4>{{ $t("scalable") }}</h4>
                <p>
                  {{ $t("declaration.approximately") }}
                </p>
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <img src="../assets/image/line.png" alt="line" />
              </div>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <img src="../assets/image/rectangle.png" alt="rectangle" />
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-small">
                <h4>{{ $t("transparent") }}</h4>
                <p>{{ $t("declaration.leader") }}</p>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <!-- four part -->
      <div class="content-four">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <a-row type="flex" justify="center">
              <a-col :md="12" :xs="22">
                <h4 class="content-four-title">
                  {{ $t("Cross-chain + DeFi") }}
                  <span class="content-spot">.</span>
                </h4>
                <p class="content-text">{{ $t("decentralized") }}</p>
                <p class="content-text">{{ $t("declaration.concept") }}</p>
                <p class="content-text">{{ $t("declaration.world") }}</p>
                <p class="content-text">{{ $t("declaration.explore") }}</p>
                <div class="content-challenge">
                  <nuxt-link :to="{ name: 'openSource' }" class="link-a-none">
                    {{ $t("challenge") }}
                  </nuxt-link>
                </div>
              </a-col>
              <a-col :md="12" :xs="22">
                <a-row type="flex" justify="center">
                  <div class="content-img">
                    <img
                      src="../assets/image/marshalling.png"
                      alt="Marshalling"
                    />
                  </div>
                </a-row>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>

      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23" class="content-five-box">
          <a-row type="flex" justify="center">
            <a-col :md="24" :xs="22">
              <div class="content-small">
                <h4>
                  {{ $t("ibaxValue") }}<span class="content-spot">.</span>
                </h4>
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-small-six">
                <p class="content-five-text" style="color: #fff">
                  {{ $t("richEcosystem") }}
                </p>
                <p>{{ $t("declaration.fast") }}</p>
                <p>{{ $t("declaration.simple") }}</p>
                <p>{{ $t("declaration.consensus") }}</p>
                <p>{{ $t("declaration.sharing") }}</p>
                <p>{{ $t("declaration.platform") }}</p>
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="content-img-six" style="margin-bottom: 30px">
                <img src="../assets/image/six.png" alt="six" />
              </div>
            </a-col>
            <a-row type="flex" justify="center">
              <a-col :md="12" :xs="22">
                <div class="content-img-six">
                  <img src="../assets/image/six-1.png" alt="six-1" />
                </div>
              </a-col>
              <a-col :md="12" :xs="22">
                <div class="content-small-six">
                  <p class="content-five-text" style="color: #fff">
                    {{ $t("operating") }}
                  </p>
                  <p>
                    {{ $t("declaration.realistic") }}
                  </p>
                  <p>{{ $t("declaration.and") }}</p>
                  <p>{{ $t("declaration.full") }}</p>
                  <p>{{ $t("declaration.storage") }}</p>
                  <p>{{ $t("declaration.own") }}</p>
                  <p>{{ $t("declaration.ecological") }}</p>
                  <p>{{ $t("declaration.smart") }}</p>
                  <p>{{ $t("declaration.distributed") }}</p>
                </div>
              </a-col>
            </a-row>
          </a-row>
        </a-col>
      </a-row>
      <!-- five part -->
      <div class="content-five" style="display: none">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23" class="content-five-box">
            <a-row type="flex" justify="center">
              <a-col :md="24" :xs="22">
                <div class="content-small">
                  <h4>Team<span class="content-spot">.</span></h4>
                  <p>{{ $t("declaration.cohesion") }}</p>
                </div>
              </a-col>
              <a-row type="flex" justify="center">
                <a-col :md="12" :xs="22">
                  <div class="content-img">
                    <img src="../assets/image/pelope.png" alt="Marshalling" />
                  </div>
                </a-col>
                <a-col :md="12" :xs="22">
                  <div class="content-small">
                    <h4>Peter Czaban</h4>
                    <p class="content-five-text">Position: Product Director</p>
                    <p>{{ $t("declaration.peter") }}</p>
                  </div>
                </a-col>
              </a-row>
            </a-row>
            <img
              src="../assets/image/t.png"
              alt="t"
              class="content-five-box-t"
            />
            <img
              src="../assets/image/s.png"
              alt="s"
              class="content-five-box-s"
            />
            <img
              src="../assets/image/y.png"
              alt="y"
              class="content-five-box-y"
            />
            <img
              src="../assets/image/z.png"
              alt="z"
              class="content-five-box-z"
            />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
if (process.client) {
  // eslint-disable-next-line no-var
  var { WOW } = require("wowjs");
}
export default {
  data() {
    return {
      name: "renlei"
    };
  },
  mounted() {
    console.log(this.$metaInfo.title);
    this.handleLoading();
    this.handlePullDown();
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
      const videoBox = this.$refs.videoBox.clientWidth;
      console.log(this.$refs.videoBox);
      console.log(videoBox);
      this.$refs.videoBox.style.height = (videoBox * 9) / 16 + "px";
      // this.initComputer();
    });
  },
  methods: {
    handleVideo() {
      this.$refs.play.style.display = "none";
      this.$refs.video.play();
    },
    handlePullDown() {
      // console.log(document.getElementsByClassName("__panel")[0]);
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
    onPanelChange(value, mode) {
      // console.log(value, mode);
    },
    change() {}
  },
  head() {
    return {
      title: "IBAX Network",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "IBAX is a blockchain infrastructural Network. It is running on our own chain and has Cross-chain solutions. IBAX is concentrated on solving problems that exist on Ethereum. We encourage developers to build their applications and establish a sustainable ecosystem."
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "IBAX is a blockchain infrastructural Network. It is running on our own chain and has Cross-chain solutions. IBAX is concentrated on solving problems that exist on Ethereum. We encourage developers to build their applications and establish a sustainable ecosystem."
        }
      ]
    };
  }
};
</script>
