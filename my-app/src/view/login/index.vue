<template>
  <div class="login-main">
    <div class="login-body">
      <h1>是个网站</h1>
      <div class="form-box">{{$t('login.userName')}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

@Options({
  components: {}
})
export default class Hello extends Vue {
  created() {}
  mounted() {
    console.log(this.$i18n.locale);
  }
}
</script>

<style lang="less" scoped>
.login-main {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login-bg.jpg");
  background-size: cover;
  position: relative;
  .login-body {
    width: 20%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    right: 0;
    h1 {
      font-size: 25px;
      color: aliceblue;
      margin-top: 200px;
    }
  }
}
</style>