<template>
  <div class="login-main">张粤</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

@Options({
  components: {}
})
export default class Hello extends Vue {
  created() {}
  mounted() {}
}
</script>

<style lang="less" scoped>
.login-main {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login-bg.jpg");
}
</style>