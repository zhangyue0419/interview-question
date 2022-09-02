<template>
  <div>
    <div>{{ count }}</div>
    <!-- <div>{{ age }}</div> -->
    <button @click="increment">+1</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue, watch } from "vue-class-component";

@Options({
  watch: {
    count: (val: number): void => {
      console.log(val);
    }
  }
})
export default class HelloWorld extends Vue {
  name: string = "Simon Zhang";
  count: number = 1;

  // computed
  get MyName(): string {
    return `My name is ${this.name}`;
  }

  increment() {
    this.count = this.count + 1;
  }

  // methods
  sayHello(): void {
    alert(`Hello ${this.name}`);
  }

  mounted() {
    this.sayHello();
  }
}
</script>