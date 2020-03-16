<template>
  <div>
    <div class="bg">
      <img class="bg-blue bg-pc" src="../assets/blue.svg" />
      <img class="bg-orange bg-pc" src="../assets/orange.svg" />
      <img class="bg-blue-small bg-mobile" src="../assets/blue-small.svg" />
      <img class="bg-orange-small bg-mobile" src="../assets/orange-small.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    desc: { type: String, default: "" },
    isHome: { type: Boolean, default: false }
  },
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  },
};
</script>

<style lang="less" scoped>
.bg {
  z-index: -100;
  width: 100%;
  @media screen and (min-width: 870px) {
    .bg-mobile {
      display: none;
    }
  }
  @media screen and (max-width: 870px) {
    .bg-pc {
      display: none;
    }
  }
  .bg-orange {
    z-index: -99;
    position: fixed;
    left: 0px;
    bottom: -300px;
    animation: orange-move-in 2s;
  }
  .bg-blue {
    z-index: -98;
    position: fixed;
    right: 0px;
    top: -200px;
    animation: blue-move-in 2s;
  }
  .bg-orange-small {
    z-index: -99;
    position: fixed;
    left: 0px;
    bottom: -30px;
    animation: small-orange-move-in 2s;
  }
  .bg-blue-small {
    z-index: -98;
    position: fixed;
    right: 0px;
    top: -30px;
    animation: small-blue-move-in 2s;
  }
  @keyframes orange-move-in {
    from {
      bottom: -900px;
    }
    to {
      bottom: -300px;
    }
  }
  @keyframes blue-move-in {
    from {
      top: -700px;
    }
    to {
      top: -200px;
    }
  }
  @keyframes small-orange-move-in {
    from {
      bottom: -240px;
    }
    to {
      bottom: -30px;
    }
  }
  @keyframes small-blue-move-in {
    from {
      top: -240px;
    }
    to {
      top: -30px;
    }
  }
}
</style>