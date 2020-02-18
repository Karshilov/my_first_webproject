<template>
  <div class="test">
    <background title></background>
    <div class="app-title">
      <h3>问题{{currentPage}}</h3>
      <el-form :model="result" style="font-size:24px;">
        <el-form-item>
          <h4 v-html="tableData[currentPage - 1].question"></h4>
          <el-radio-group
            v-if="tableData[currentPage - 1].type==='radio'"
            v-model="result.qa[currentPage - 1]"
            class="app-question"
          >
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceA!=''"
                :label="tableData[currentPage - 1].choiceA"
                class="app-choice"
              ></el-radio>
            </el-row>
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceB!=''"
                :label="tableData[currentPage - 1].choiceB"
                class="app-choice"
              ></el-radio>
            </el-row>
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceC!=''"
                :label="tableData[currentPage - 1].choiceC"
                class="app-choice"
              ></el-radio>
            </el-row>
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceD!=''"
                :label="tableData[currentPage - 1].choiceD"
                class="app-choice"
              ></el-radio>
            </el-row>
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceE!=''"
                :label="tableData[currentPage - 1].choiceE"
                class="app-choice"
              ></el-radio>
            </el-row>
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceF!=''"
                :label="tableData[currentPage - 1].choiceF"
                class="app-choice"
              ></el-radio>
            </el-row>
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceG!=''"
                :label="tableData[currentPage - 1].choiceG"
                class="app-choice"
              ></el-radio>
            </el-row>
            <el-row type="flex" justify="start">
              <el-radio
                v-if="tableData[currentPage - 1].choiceH!=''"
                :label="tableData[currentPage - 1].choiceH"
                class="app-choice"
              ></el-radio>
            </el-row>
          </el-radio-group>
          <el-checkbox-group
            v-if="tableData[currentPage - 1].type==='checkbox'"
            v-model="result.qa[currentPage - 1]"
            class="app-question"
          >
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceA!=''"
                :label="tableData[currentPage - 1].choiceA"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceB!=''"
                :label="tableData[currentPage - 1].choiceB"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceC!=''"
                :label="tableData[currentPage - 1].choiceC"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceD!=''"
                :label="tableData[currentPage - 1].choiceD"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceE!=''"
                :label="tableData[currentPage - 1].choiceE"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceF!=''"
                :label="tableData[currentPage - 1].choiceF"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceG!=''"
                :label="tableData[currentPage - 1].choiceG"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
            <el-row type="flex" justify="start">
              <el-checkbox
                v-if="tableData[currentPage - 1].choiceH!=''"
                :label="tableData[currentPage - 1].choiceH"
                class="app-choice2"
              ></el-checkbox>
            </el-row>
          </el-checkbox-group>
          <el-row type="flex" justify="start">
            <el-input
              type="textarea"
              :rows=3
              v-if="tableData[currentPage-1].other===true"
              class="true-input"
              placeholder="其他"
              v-model="input"
              clearable
            ></el-input>
          </el-row>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button v-if="currentPage>1" type="primary" size="mini" @click="toLast">上一题</el-button>
        <el-button v-if="currentPage<totalSize" type="primary" size="mini" @click="toNext">下一题</el-button>
        <el-button v-if="currentPage===totalSize" type="success" size="mini" @click="submit">点击提交</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  Button,
  Form,
  FormItem,
  Radio,
  Row,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Input
} from "element-ui";
import api from '@/api';
import Background from "../components/Background.vue";
export default {
  name: "welcome",
  data() {
    return {
      totalSize: 20,
      already: false,
      input: "",
      screenWidth: document.body.clientWidth,
      currentPage: 1,
      pageSize: 1,
      tableData: [
        {
          type: "radio",
          other: false,
          question: "请问您的性别？",
          choiceA: "A.男",
          choiceB: "B.女",
          choiceC: "",
          choiceD: "",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "请问您所学的学科种类是？",
          choiceA: "A.文",
          choiceB: "B.理",
          choiceC: "C.工",
          choiceD: "D.医",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "请问您所在的年级",
          choiceA: "A.大一",
          choiceB: "B.大二",
          choiceC: "C.大三",
          choiceD: "D.大四",
          choiceE: "E.硕士在读",
          choiceF: "F.博士在读",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "请问您的政治面貌是？",
          choiceA: "A.群众",
          choiceB: "B.共青团员",
          choiceC: "C.共青团员(已提交入党申请书)",
          choiceD: "D.党员(含预备党员)",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "若您现在还不是党员，您是否打算提交入党申请书？",
          choiceA: "A.已经提交入党申请书",
          choiceB: "B.准备提交入党申请书",
          choiceC: "C.暂时不打算入党",
          choiceD: "D.根本不打算入党",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "您周围的同学对于入党的态度怎么样？",
          choiceA: "A.所有人都想入党",
          choiceB: "B.大部分人想入党",
          choiceC: "C.少数人想入党",
          choiceD: "D.绝大多数人都不想入党",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "checkbox",
          other: false,
          question: "如果不想入党，请问原因是什么？（可多选）",
          choiceA: "A.自我觉得未达到入党条件",
          choiceB: "B.党的宗旨不符合个人信仰/党的形象未达期望",
          choiceC: "C.想加入其他党派",
          choiceD: "D.觉得与个人成才，实现美好生活没有什么关系",
          choiceE: "E.流程繁琐，没有时间",
          choiceF: "F.入党受到约束太多",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "如果愿意入党，请问原因是什么？",
          choiceA: "A.出于政治信仰",
          choiceB: "B.考虑现实利益，便于就业",
          choiceC: "C.长辈要求",
          choiceD: "D.随大流",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "请问您对身边入党的同学朋友的看法是什么?",
          choiceA: "A.入党是光荣的",
          choiceB: "B.可以为自己提供机遇",
          choiceC: "C.与我无关",
          choiceD: "",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "您对带有功利性入党动机看法如何?",
          choiceA: "A.很不好，应当杜绝",
          choiceB: "B.虽然不好，但目前无法改变",
          choiceC: "C.社会形势的必然结果，没有必要在意",
          choiceD: "D.非常理解，我也有这种想法",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "checkbox",
          other: true,
          question: "你觉得现在的共产党员具备了怎样的素质(可多选）?",
          choiceA: "A.为国为民，大公无私",
          choiceB: "B.两袖清风，恪尽职守",
          choiceC: "C.栽赃陷害，歪曲事实",
          choiceD: "D.利己主义，贪污腐败",
          choiceE: "E.工作脱离实际，低能低效",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "checkbox",
          other: true,
          question: "你觉得现在的共产党是怎样的一个党（可多选）?",
          choiceA: "A.存在官僚之风",
          choiceB: "B.代表先进的力量",
          choiceC: "C.实力有待加强，许多民生问题亟待解决",
          choiceD: "D.一党独大,只手遮天",
          choiceE: "E.随便一个党都差不多",
          choiceF: "F.只有共产党才能发展中国",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "你认为中国共产党有能力应对当今中国出现的一些考验吗?",
          choiceA: "A.肯定有 ",
          choiceB: "B.有",
          choiceC: "C.没有",
          choiceD: "D.不知道",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "你校举办任何形式的爱国建党相关活动的频率如何呢？（如：设定10月为爱国月，举办“不忘初心，牢记使命”主题教育活动）",
          choiceA: "A.一个月及一次",
          choiceB: "B.一个季度一次",
          choiceC: "C.半年一次",
          choiceD: "D.每年一次",
          choiceE: "E.似乎…从未",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "你校举办任何形式的入党宣传或关于党的介绍的频率如何呢？（如：党员干部或教师的谈心，集体上课",
          choiceA: "A.一个月及一次",
          choiceB: "B.一个季度一次",
          choiceC: "C.半年一次",
          choiceD: "D.每年一次",
          choiceE: "E.似乎…从未",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "依照个人参与体验，你认为你校党建教育活动开展效果如何?",
          choiceA: "A.方式新颖，深得我心，我常常能认真听完全程",
          choiceB: "B.形式稍显枯燥，让我有些许厌倦",
          choiceC: "C.太单调啦，没事情做，只想睡觉",
          choiceD: "D.还好我带了作业，自习它不香吗",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "checkbox",
          other: true,
          question: "你认为部分学生参与组织活动不积极的主要原因是(可多选)?",
          choiceA: "A.形式朴实无华且枯燥",
          choiceB: "B.脱离群众，不明白学生的需求，只会照本宣科",
          choiceC: "C.他们不想入党QAQ",
          choiceD: "",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: false,
          question: "你所在党支部组织党建教育活动的频率如何呢？",
          choiceA: "A.一个月及一次",
          choiceB: "B.一个季度一次",
          choiceC: "C.半年一次",
          choiceD: "D.每年一次",
          choiceE: "E.似乎…从未",
          choiceF: "F.不是党员",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: true,
          question: "你有遇到过什么惊为天人的操作，让你对党建活动瞬间充满热情吗？",
          choiceA: "",
          choiceB: "",
          choiceC: "",
          choiceD: "",
          choiceE: "",
          choiceF: "",
          choiceG: "",
          choiceH: ""
        },
        {
          type: "radio",
          other: true,
          question: "无内鬼，你的入党动机是否（曾）受到过以下观点的影响呢？",
          choiceA: "A.当党员光荣，顺便在朋友亲戚面前也显得卓尔不凡",
          choiceB: "B.周围同志都提出了申请，我岂能落下？",
          choiceC: "C.我要报答党的恩情，为人民谋福祉",
          choiceD: "D.党票也是一种政治资本，值得投资",
          choiceE: "E.入了党，容易受重用，可以找好工作",
          choiceF: "F.希望能在入党后有所建树，为党的明天添砖加瓦",
          choiceG: "G.从未有过",
          choiceH: ""
        },
      ],
      result: {
        qa: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
      },
      answer: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
    };
  },
  components: {
    "el-button": Button,
    "el-form": Form,
    "el-form-item": FormItem,
    "el-row": Row,
    "el-radio": Radio,
    "el-radio-group": RadioGroup,
    "el-checkbox": Checkbox,
    "el-checkbox-group": CheckboxGroup,
    "el-input": Input,
    background: Background
  },
  methods: {
    showTable() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    toNext() {
      this.answer[this.currentPage - 1] = this.result.qa[this.currentPage - 1];
      if (this.tableData[this.currentPage - 1].other === true) {
        if (this.input != '') {
          this.answer[this.currentPage - 1] = ("O." + this.input);
        }
      }
      this.currentPage++;
    },
    toLast() {
      this.currentPage--;
    },
    async submit() {
      if (this.already === true) {
        this.$message({
          type: "info",
          message: "您已经提交过了哦~"
        });
        return ;
      }
      var fg = true;
      this.answer[this.currentPage - 1] = this.result.qa[this.currentPage - 1];
      this.answer.forEach(s => {
        if (fg === true && s.length === 0) {
          this.$message({
            type: "warning",
            message: "还有题没做哦~"
          });
          fg = false;
        }
      });
      if (fg === true) {
        await api.post('/api/answers', this.answer);
        this.$message({
          type: "success",
          message: "提交成功~"
        });
        this.already = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.app-question {
  margin-left: 10px;
  margin-right: 10px;
  margin: 10px;
}
.app-choice {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 8px;
}
.app-choice2 {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: -5px;
}
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
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 2s;
  margin-top: 150px;
}
@media screen and (max-height: 720px) {
  .app-title {
    margin-top: 50px;
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