<template>
  <div class="welcome">
    <background title></background>
    <div class="app-title">
      
    </div>
  </div>
</template>

<script>
//import { Button, Form, FormItem, Input, Card } from "element-ui";
import Background from "../components/Background.vue";
var validateUser = async (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    //Todo async check
    await setTimeout(() => {}, 100);
    callback();
  }
};
var validatePass = async (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    //Todo async check
    await setTimeout(() => {}, 100);
    callback();
  }
};
export default {
  name: "welcome",
  data() {
    return {
      screenWidth: document.body.clientWidth,
      userInfo: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [
          { validator: validateUser, trigger: "blur", max: 16, min: 1 }
        ],
        passWord: [
          { validator: validatePass, trigger: "blur", max: 16, min: 8 }
        ]
      }
    };
  },
  components: {
    /*"el-button": Button,
    "el-form": Form,
    "el-form-item": FormItem,
    "el-input": Input,
    "el-card": Card,*/
    background: Background
  },
  methods: {
    gotoTest(form) {
      this.$refs[form].validate(value => {
        if (value) {
          this.$message({
            type: "success",
            message: "登陆成功~"
          });
          this.$router.push({
            name: "test"
          });
        } else {
          return;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.bg-orange {
  z-index: -10;
  width: 70%;
  position: fixed;
  left: -550px;
  bottom: 0px;
  animation: orange-move-in 2s;
}
.bg-blue {
  z-index: -10;
  width: 70%;
  position: fixed;
  right: -400px;
  top: 0px;
  animation: blue-move-in 2s;
}
.app-title {
  position: flex;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 2s;
  .app-text {
    color: #000;
    margin-top: 120px;
    padding: 10px;
    .app-button {
      text-align: center;
      margin: auto;
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
}
@keyframes orange-move-in {
  from {
    left: -900px;
  }
  to {
    left: -550px;
  }
}
@keyframes blue-move-in {
  from {
    right: -700px;
  }
  to {
    right: -400px;
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