<!--
 * @Author: abc
 * @Date: 2020-09-18 10:39:20
 * @LastEditors: abc
 * @LastEditTime: 2021-08-04 17:50:28
 * @Description: open Source
-->
<template>
  <div class="open">
    <div class="open-first">
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <h4 class="content-second-title">
                IBAX Open Source <span class="content-spot">.</span>
              </h4>
              <h4 class="content-second-title">Technical Documentation</h4>
            </a-col>
            <a-col :md="12" :xs="22">
              <p class="content-text">{{ $t("declaration.blockchain") }}</p>
              <p class="content-text">{{ $t("declaration.contract") }}</p>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :md="12" :xs="22">
              <div class="open-img">
                <img src="../assets/image/icon_one2.png" alt="icon_one" />
                <span class="open-span">{{ $t("declaration.relevant") }} </span>
              </div>
            </a-col>
            <a-col :md="12" :xs="22">
              <div class="open-img">
                <img src="../assets/image/icon_two2.png" alt="icon_one" />
                <span class="open-span"> {{ $t("contractDescription") }} </span>
              </div>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a
              style="margin-top: 60px"
              href="https://github.com/ibax-io"
              target="_blank"
              class="link-a-white"
              >Use IBAX</a
            >
          </a-row>
        </a-col>
      </a-row>
      <div class="open-second">
        <div class="open-part">
          <a-row type="flex" justify="center">
            <a-col :md="15" :xs="23">
              <h4 class="open-title">
                About Our Technology <span class="content-spot">.</span>
              </h4>
              <a-row type="flex" justify="center">
                <a-col :md="8" :xs="22">
                  <a-row type="flex" justify="center">
                    <div class="open-warp">
                      <h5 class="open-h5">Underlying Framework</h5>
                      <h6 class="open-h6">Golang</h6>
                      <p class="open-text">{{ $t("declaration.golang") }}</p>
                      <p class="open-text">{{ $t("declaration.quick") }}</p>
                      <p class="open-text">{{ $t("declaration.decoupled") }}</p>
                      <p class="open-text">{{ $t("declaration.perfect") }}</p>
                    </div>
                  </a-row>
                </a-col>
                <a-col :md="8" :xs="22">
                  <a-row type="flex" justify="center">
                    <div class="open-warp">
                      <h5 class="open-h5">Data Storage</h5>
                      <h6 class="open-h6">PG Database</h6>
                      <p class="open-text">{{ $t("declaration.database") }}</p>
                      <p class="open-text">{{ $t("declaration.doubt") }}</p>
                      <p class="open-text">
                        {{ $t("declaration.modification") }}
                      </p>
                    </div>
                  </a-row>
                </a-col>
                <a-col :md="8" :xs="22">
                  <h5 class="open-h5">Cryptography Applications</h5>
                  <a-row type="flex" justify="center">
                    <a-col :md="12" :xs="12">
                      <div class="open-warp">
                        <h6 class="open-h6">
                          <span>SHA256</span>
                          <!-- <span>&</span> -->
                        </h6>
                        <p class="open-text">
                          {{ $t("declaration.generation") }}
                        </p>
                      </div>
                    </a-col>
                    <a-col :md="12" :xs="12">
                      <div class="open-warp">
                        <h6 class="open-h6">Secp256k1</h6>
                        <p class="open-text">
                          {{ $t("declaration.asymmetric") }}
                        </p>
                      </div>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <h3 class="open-title">
              {{ $t("developers") }}
              <span class="content-spot">.</span>
            </h3>
            <a-col :md="8" :xs="22">
              <a-row type="flex" justify="center">
                <div class="open-warp-broder">
                  <h6 class="open-h6">
                    {{ $t("configuration") }}
                  </h6>
                  <p class="open-text">*{{ $t("location") }}</p>
                  <p class="open-text">
                    {{ $t("parameter") }}
                  </p>
                  <p class="open-text">* Platform parameter configuration</p>
                  <p class="open-text">* Blockchain network configuration</p>
                  <p class="open-text">New ecoLib configuration</p>
                  <p class="open-text">Database configuration</p>
                  <p class="open-text">Block production configuration</p>
                  <p class="open-text">
                    <a
                      href="https://github.com/ibax-io"
                      target="_blank"
                      class="footer-href"
                      >Details >></a
                    >
                  </p>
                </div>
              </a-row>
            </a-col>
            <a-col :md="8" :xs="22">
              <a-row type="flex" justify="center">
                <div class="open-warp-broder">
                  <h6 class="open-h6">Open Server Configuration Files</h6>
                  <p class="open-text">* Example of configuration files</p>
                  <p class="open-text">Structure of configuration files</p>
                  <p class="open-text">Location of configuration files</p>
                  <p class="open-text">
                    * Introduction to server configuration files
                  </p>
                  <p class="open-text">
                    <a
                      href="https://github.com/ibax-io"
                      target="_blank"
                      class="footer-href"
                      >Details >></a
                    >
                  </p>
                </div>
              </a-row>
            </a-col>
            <a-col :md="8" :xs="22">
              <a-row type="flex" justify="center">
                <div class="open-warp-broder">
                  <h6 class="open-h6">RESTful API V2</h6>
                  <p class="open-text">Error response</p>
                  <p class="open-text">* Certified interfaces</p>
                  <p class="open-text">* Server command interface</p>
                  <p class="open-text">* Data request function interface</p>
                  <p class="open-text">Indicator interface acquisition</p>
                  <p class="open-text">* ecoLib interface</p>
                  <p class="open-text">* Contract function interface</p>
                  <p class="open-text">
                    <a
                      href="https://github.com/ibax-io"
                      target="_blank"
                      class="footer-href"
                      >Details >></a
                    >
                  </p>
                </div>
              </a-row>
            </a-col>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="open-green">
      <div class="open-third">
        <div class="open-white">
          <a-row type="flex" justify="center">
            <a-col :md="15" :xs="23">
              <h4 class="open-title">
                Never Ordinary, Always Innovative
                <span class="content-spot">.</span>
              </h4>
              <a-row type="flex" justify="center">
                <a-col :md="8" :xs="22">
                  <div class="open-block">
                    <div class="open-block-img">
                      <img
                        src="../assets/image/iccs_logo.png"
                        alt="iccs_logo"
                      />
                    </div>
                    <div class="open-block-btn">
                      <a
                        style="margin-top: 20px"
                        href="https://weaver.ibax.io"
                        target="_blank"
                        class="link-a-none"
                        >Enter Weaver>></a
                      >
                    </div>
                  </div>
                </a-col>
                <a-col :md="8" :xs="22">
                  <a-row type="flex" justify="center">
                    <div class="open-block">
                      <h6 class="open-h6">Front End Logicor Language</h6>
                      <p class="open-text">{{ $t("declaration.language") }}</p>
                      <p class="open-text">
                        <a
                          href="https://ibax.gitbook.io"
                          target="_blank"
                          class="footer-href"
                          >Documentation >></a
                        >
                      </p>
                    </div>
                  </a-row>
                </a-col>
                <a-col :md="8" :xs="22">
                  <div class="open-block">
                    <h6 class="open-h6">Back End Needle Language</h6>
                    <p class="open-text">{{ $t("declaration.efficient") }}</p>
                    <p class="open-text">
                      <a
                        href="https://ibax.gitbook.io"
                        target="_blank"
                        class="footer-href"
                        >Documentation >></a
                      >
                    </p>
                  </div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
      </div>
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <h4 class="content-title">
            Functions of Weaver
            <span class="content-spot">.</span>
          </h4>
          <div class="open-tabs">
            <client-only>
              <a-tabs
                :default-active-key="activeKey"
                :tab-position="tabPosition"
                :tab-bar-style="barStyle"
                size="large"
              >
                <a-tab-pane
                  v-for="item in arrTabs"
                  :key="item.key"
                  :tab="item.label"
                >
                  <div class="open-tabs-content">
                    <h6 class="open-h6">{{ item.title }}</h6>
                    <p class="open-text">{{ $t(item.text1) }}</p>
                    <p class="open-text">{{ $t(item.text2) }}</p>
                    <div class="open-tabs-img">
                      <img :src="item.img" alt="logo" />
                    </div>
                  </div>
                </a-tab-pane>
              </a-tabs>
            </client-only>
          </div>
        </a-col>
      </a-row>
      <div class="open-bottom">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <h4 class="open-title">
              Related Technologies<span class="content-spot">.</span>
            </h4>
            <div class="open-bottom-box">
              <div class="open-bottom-warp">
                <img src="../assets/image/related_one.png" alt="related_one" />
              </div>
              <div class="open-bottom-warp">
                <img src="../assets/image/eth.jpg" alt="related_two" />
              </div>
              <div class="open-bottom-warp">
                <img
                  src="../assets/image/related_three.png"
                  alt="related_three"
                />
              </div>
              <div class="open-bottom-warp">
                <img
                  src="../assets/image/related_four.png"
                  alt="related_four"
                />
              </div>
              <div class="open-bottom-warp">
                <img
                  src="../assets/image/related_five.png"
                  alt="related_five"
                />
              </div>
              <div class="open-bottom-warp">
                <img src="../assets/image/related_six.png" alt="related_six" />
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
let logo = null;
let marshalling = null;
let triangle = null;
let first = null;
let moon = null;

logo = require("../assets/image/1.png");
marshalling = require("../assets/image/2.png");
triangle = require("../assets/image/3.png");
first = require("../assets/image/4.png");
moon = require("../assets/image/5.png");

export default {
  props: {},
  data() {
    return {
      size: "small",
      activeKey: 1,
      tabPosition: "left",
      barStyle: { color: "#fff" },
      arrTabs: [
        {
          key: 1,
          label: "Create EcoLib",
          title: "How to Create a New ecoLib?",
          text1:
            "EcoLib creation is fast with LESS. The creator has all the management permissions.",
          text2:
            "P.S. We have been researching DAO. ecoLib management by its members is just around the corner.",
          img: logo
        },
        {
          key: 2,
          label: "EcoLib Governance",
          title: "EcoLib Member Management and Access",
          text1:
            "Initialize ecoLib parameters and define the basic rules. Manage ecoLib members by invitation or removal.",
          text2: "Add more fascinating DApps to the ecoLib and enrich it.",
          img: marshalling
        },
        {
          key: 3,
          label: "Role Assignment",
          title: "Create roles and empower members",
          text1: "You can create a role and assign it to an ecoLib member.",
          text2: "",
          img: triangle
        },
        {
          key: 4,
          label: "Contract Creation",
          title: "Create ecoLib Contract",
          text1:
            "The online contract editor ensures convenient checking of contract and result correctness during contract creation.",
          text2:
            "The editor saves lots of development time and greatly reduces the learning cost for developers.",
          img: first
        },
        {
          key: 5,
          label: "EcoLib Voting",
          title:
            "EcoLib members decide on the basic ecoLib parameters together",
          text1:
            "To ensure the ecoLib fairness, the basic ecoLib parameters can only be changed after more than 50% of ecoLib members vote for it.",
          text2: "",
          img: moon
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
  },
  methods: {},
  head() {
    return {
      title: "Open Source | IBAX Network",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "IBAX opens up technical code based on the principle of sharing and open. We hope to explore with all communities in blockchain together and seek more innovative technologies."
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "IBAX opens up technical code based on the principle of sharing and open. We hope to explore with all communities in blockchain together and seek more innovative technologies."
        }
      ]
    };
  }
};
</script>
