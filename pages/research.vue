<!--
 * @Author: abc
 * @Date: 2020-09-18 10:35:25
 * @LastEditors: abc
 * @LastEditTime: 2020-11-26 00:46:11
 * @Description: 
-->
<template>
  <div class="research">
    <div class="research-box">
      <div class="research-banner">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <div class="research-top">
              <h2 class="about-box-warp-h3">Technology has no end,</h2>
              <h2 class="about-box-warp-h3">just eternal exploration.</h2>
              <p>
                <span style="margin-left: 30px">———</span
                ><span>The truth seeking never stops.</span>
              </p>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="research-two">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <div class="research-two-top">
              <h3 class="research-title" style="padding-top: 1rem">
                Cross-chain + DeFi<span class="research-spot"></span>
              </h3>
              <img
                src="../assets/image/research-chart.png"
                alt="research-chart"
              />
            </div>
            <p>{{ $t("declaration.decentralized") }}</p>
            <p>{{ $t("declaration.realization") }}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="research-part">
      <div class="research-three">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <h3 class="research-title">
              Transaction Sharding<span class="research-spot"></span>
            </h3>
            <div class="research-three-content">
              <div class="research-three-left">
                <p>{{ $t("declaration.network") }}</p>
                <p>{{ $t("declaration.different") }}</p>
                <p>{{ $t("declaration.number") }}</p>
              </div>
              <div class="research-three-right">
                <img src="../assets/image/chart_two.png" alt="chart_two" />
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="research-four">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <h3 class="research-title">
              Multisig<span class="research-spot"></span>
            </h3>
            <img src="../assets/image/chart_three.png" alt="chart_three" />
          </a-col>
        </a-row>
      </div>
      <div class="research-five">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <h3 class="research-title">
              CLB<span class="research-spot"></span>
            </h3>
            <p>{{ $t("declaration.virtual") }}</p>
            <p>{{ $t("declaration.runs") }}</p>
            <p>{{ $t("declaration.designed") }}</p>
            <p>{{ $t("declaration.obtain") }}</p>
            <img
              src="../assets/image/chart_four.png"
              alt="chart_four"
            /> </a-col
        ></a-row>
      </div>
      <div class="research-six">
        <a-row type="flex" justify="center">
          <a-col :md="15" :xs="23">
            <h3 class="research-title">
              Private Transactions<span class="research-spot"></span>
            </h3>
            <p>{{ $t("declaration.important") }}</p>
            <p>{{ $t("declaration.provides") }}</p>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
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
      title: "IBAX-Research Center",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "IBAX-Research Center"
        }
      ]
    };
  }
};
</script>
