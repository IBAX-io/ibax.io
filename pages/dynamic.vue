<!--
 * @Author: abc
 * @Date: 2020-09-25 12:08:59
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 14:58:35
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
            <p class="dynamic-text">{{ $t("declaration.please") }}</p>
            <a-row type="flex" justify="center">
              <a-button>
                <nuxt-link :to="{ name: 'openSource' }">
                  Our Technologies >>
                </nuxt-link>
              </a-button>
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
            <!-- <p class="dynamic-btn">
              <a-button>If you want to get ibxc, learn about it </a-button>
            </p> -->
          </div>
          <div class="dynamic-warp">
            <h4 class="dynamic-h4">Open Source Testing Bounty</h4>
            <div class="dynamic-first">
              <p class="dynamic-text">
                {{ $t("declaration.attach") }}
              </p>
            </div>
            <!--  <p class="dynamic-btn">
              <a-button>View event details </a-button>
            </p> -->
          </div>
          <div class="dynamic-warp">
            <h4 class="dynamic-h4">Ecosystem Summit</h4>
            <p class="dynamic-text dynamic-first">
              {{ $t("declaration.give") }}
            </p>
            <!--  <p class="dynamic-btn">
              <a-button>Entering the summit</a-button>
            </p> -->
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
              <p class="dynamic-text">{{ $t("declaration.ibaa") }}</p>
              <p class="dynamic-text dynamic-box-date dynamic-12">2020-3-21</p>
            </div>
          </div>
          <div class="dynamic-box-two">
            <div class="dynamic-box-content">
              <p class="dynamic-text">{{ $t("declaration.ibaa") }}</p>
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
              <p class="dynamic-text">{{ $t("declaration.ibaa") }}</p>
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
      title: "IBAX-Information",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "IBAX-Information"
        }
      ]
    };
  }
};
</script>
