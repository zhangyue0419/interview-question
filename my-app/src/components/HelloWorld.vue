<template>
  <div class="hello">
    {{name}}
    <template>
      <el-button>张悦</el-button>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HelloWorld extends Vue {
  msg!: string;
  name: string = "888888";

  mounted() {
    const isDev = process.env.NODE_ENV;
    console.log(isDev, "ddddddddd");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
