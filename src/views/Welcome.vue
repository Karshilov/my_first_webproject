<template>
  <div class="welcome">
    <background title=""></background>
      <div class="app-title">
        <h3 class="app-text">形策问卷</h3>
        <el-button class="app-button" size="medium" type="success" @click="gotoTest">点击开始</el-button>
        <div class="line-decoration"></div>
      </div>
  </div>
</template>

<script>
import { Button } from "element-ui";
import Background from '../components/Background.vue';
export default {
  name: "welcome",
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  },
  components: {
    "el-button": Button,
    background : Background,
  },
  methods: {
    gotoTest() {
      this.$router.push({
        name: "test",
      });
    },
    print() {
      console.log(this.screenWidth);
    }
  }
};
</script>

<style lang="less" scoped>
.bg-orange {
  z-index: -10;
  width: 70%;
  position: fixed;
  left: 0;
  bottom: -500px;
  animation: orange-move-in 2s;
}
.bg-blue {
  z-index: -10;
  width: 70%;
  position: fixed;
  right: 0;
  top: -400px;
  animation: blue-move-in 2s;
}
.app-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 2s;
  .app-text {
    color: #000;
    margin-top: 160px;
  }
  .app-button {
    position: fixed;
    text-align: center;
    margin-top: 200px;
  }
  .line-decoration {
    animation: line-extract 2s;
    height: 2px;
    width: 7em;
    background: rgb(218, 150, 26);
    margin: 40px;
    font-size: 24px;
  }
}
@keyframes orange-move-in {
  from {
    bottom: -900px;
  }
  to {
    bottom: -500px;
  }
}
@keyframes blue-move-in {
  from {
    top: -700px;
  }
  to {
    top: -400px;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
@keyframes line-extract {
  from {
    width: 0;
  }
  to {
    width: 7em;
  }
}
</style>