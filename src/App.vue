<template>
  <div class="container" id="app">
    <h4>Strings</h4>
    <p>
      <kbd v-html="leftFill"></kbd> => <code>{{2 | leftFill(0, 3)}}</code>
    </p>
    <p>
      <kbd v-html="rightFill"></kbd> => <code>{{1 | rightFill(0, 3)}}</code>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      leftFill: '{{2 | leftFill(0, 3)}}',
      rightFill: '{{1 | rightFill(0, 3)}}',
    };
  }
}
</script>

<style>
@import "https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css";
#app {
  margin-top: 20px;
}
</style>
