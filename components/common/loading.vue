<!--
 * @Author: renlei
 * @LastEditors: abc
 * @Description 
 * @Date: 2019-04-15 09:49:47
 * @LastEditTime: 2020-11-26 18:43:40
 -->

<template lang="html">
  <div v-if="spinning" class="hao-loading">
    <!--  <div class="m-load"></div> -->
    <div class="m-load2">
      <div class="line">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="circlebg"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spinning: false,
      numLoad: ""
    };
  },
  methods: {
    start() {
      this.spinning = true;
    },
    finish() {
      this.spinning = false;
    },
    fail() {},
    increase(num) {
      // console.log(num);
      // this.numLoad = `${num}%loading...`;
      // console.log(this.numLoad);
    }
  }
};
</script>

<style scoped lang="less">
.hao-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.m-load2 {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 36px;
  height: 36px;
}
.m-load2 .line div {
  position: absolute;
  left: 16px;
  top: 0;
  width: 3px;
  height: 36px;
}
.m-load2 .line div::before,
.m-load2 .line div::after {
  content: "";
  display: block;
  height: 50%;
  background: #fff;
  border-radius: 5px;
}
.m-load2 .line div:nth-child(2) {
  transform: rotate(30deg);
}
.m-load2 .line div:nth-child(3) {
  transform: rotate(60deg);
}
.m-load2 .line div:nth-child(4) {
  transform: rotate(90deg);
}
.m-load2 .line div:nth-child(5) {
  transform: rotate(120deg);
}
.m-load2 .line div:nth-child(6) {
  transform: rotate(150deg);
}
.m-load2 .circlebg {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 18px;
}

/**  **/

@keyframes load {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.m-load2 .line div:nth-child(1)::before {
  animation: load 1.2s linear 0s infinite;
}
.m-load2 .line div:nth-child(2)::before {
  animation: load 1.2s linear 0.1s infinite;
}
.m-load2 .line div:nth-child(3)::before {
  animation: load 1.2s linear 0.2s infinite;
}
.m-load2 .line div:nth-child(4)::before {
  animation: load 1.2s linear 0.3s infinite;
}
.m-load2 .line div:nth-child(5)::before {
  animation: load 1.2s linear 0.4s infinite;
}
.m-load2 .line div:nth-child(6)::before {
  animation: load 1.2s linear 0.5s infinite;
}
.m-load2 .line div:nth-child(1)::after {
  animation: load 1.2s linear 0.6s infinite;
}
.m-load2 .line div:nth-child(2)::after {
  animation: load 1.2s linear 0.7s infinite;
}
.m-load2 .line div:nth-child(3)::after {
  animation: load 1.2s linear 0.8s infinite;
}
.m-load2 .line div:nth-child(4)::after {
  animation: load 1.2s linear 0.9s infinite;
}
.m-load2 .line div:nth-child(5)::after {
  animation: load 1.2s linear 1s infinite;
}
.m-load2 .line div:nth-child(6)::after {
  animation: load 1.2s linear 1.1s infinite;
}
</style>
