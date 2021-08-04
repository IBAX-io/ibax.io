<!--
 * @Author: abc
 * @Date: 2020-09-25 12:08:59
 * @LastEditors: abc
 * @LastEditTime: 2021-08-04 17:46:40
 * @Description: 
-->
<template>
  <div class="dynamic">
    <div class="dynamic-green">
      <a-row type="flex" justify="center">
        <a-col :md="15" :xs="23">
          <a-col :md="12" :xs="22">
            <p class="dynamic-text">{{ $t("declaration.communicate") }}</p>
            <p class="dynamic-text">{{ $t("declaration.collision") }}</p>
            <p class="dynamic-text" style="margin-bottom: 50px">
              {{ $t("declaration.please") }}
            </p>
            <a-row type="flex" justify="center">
              <nuxt-link :to="{ name: 'openSource' }" class="link-a-white">
                Our Technologies >>
              </nuxt-link>
            </a-row>
          </a-col>
        </a-col>
      </a-row>
    </div>
    <a-row type="flex" justify="center">
      <a-col :md="15" :xs="23">
        <h2 class="dynamic-title">Awards</h2>
        <a-row type="flex" justify="center">
          <div class="dynamic-warp">
            <h4 class="dynamic-h4">Ecosystem Reward Plan</h4>
            <div class="dynamic-first">
              <p class="dynamic-text">{{ $t("ecosystem") }}</p>
            </div>
          </div>
          <div class="dynamic-warp">
            <h4 class="dynamic-h4">Open Source Testing Bounty</h4>
            <div class="dynamic-first">
              <p class="dynamic-text">
                {{ $t("declaration.attach") }}
              </p>
            </div>
          </div>
          <div class="dynamic-warp">
            <h4 class="dynamic-h4">Ecosystem Summit</h4>
            <p class="dynamic-text dynamic-first">
              {{ $t("declaration.give") }}
            </p>
          </div>
          <p class="dynamic-btn">
            <a-button>Email：support@ibax.io</a-button>
          </p>
        </a-row>
        <div class="dynamic-box" style="display: none">
          <h2 class="dynamic-title">Latest Updates</h2>
          <div class="dynamic-box-one">
            <div class="dynamic-img">
              <img src="../assets/image/one-1.png" alt="one-1" />
            </div>
            <div class="dynamic-box-right">
              <p class="dynamic-text">{{ $t("declaration.won") }}</p>
              <p class="dynamic-text dynamic-box-date dynamic-12">2020-3-21</p>
            </div>
          </div>
          <div class="dynamic-box-two">
            <div class="dynamic-box-content">
              <p class="dynamic-text">{{ $t("declaration.won") }}</p>
              <p class="dynamic-text dynamic-box-content-middle dynamic-12">
                2020-3-21
              </p>
              <p class="dynamic-text dynamic-12">From: phoenix.com</p>
            </div>
            <div class="dynamic-box-two-middle">
              <img src="../assets/image/two-1.png" alt="two-1" />
              <img src="../assets/image/two-2.png" alt="two-2" />
              <img src="../assets/image/two-3.png" alt="two-3" />
            </div>
            <div class="dynamic-box-two-three">
              <p class="dynamic-text dynamic-12">
                {{ $t("declaration.lorem") }}
              </p>
            </div>
          </div>
          <div class="dynamic-box-three">
            <div class="dynamic-box-three-left">
              <p class="dynamic-text">{{ $t("declaration.won") }}</p>
              <p class="dynamic-text dynamic-12">
                {{ $t("declaration.ipsum") }}
              </p>
              <p class="dynamic-text dynamic-12">2020-3-21 From: phoenix.com</p>
            </div>
            <div class="dynamic-box-three-right">
              <img src="../assets/image/three-1.png" alt="three-1" />
            </div>
          </div>
          <div class="dynamic-page">
            <a-pagination
              v-model="current"
              :total="2"
              :page-size.sync="pageSize"
              show-less-items
            />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  props: {},
  data() {
    return { current: 2, pageSize: 1 };
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
      title: "Information | IBAX Network",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "You can learn more about IBAX network, Please stay tuned."
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "You can learn more about IBAX network, Please stay tuned."
        }
      ]
    };
  }
};
</script>
