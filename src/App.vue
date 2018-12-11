<template>
  <div class="container" id="app">
    <h4>Strings</h4>
    <p><kbd v-html="leftFill"></kbd> => <code>{{2 | leftFill(0, 3)}}</code></p>
    <p><kbd v-html="rightFill"></kbd> => <code>{{1 | rightFill(0, 3)}}</code></p>
    <p><kbd v-html="toUpperCase"></kbd> => <code>{{'gurudin' | toUpperCase}}</code></p>
    <p><kbd v-html="toLowerCase"></kbd> => <code>{{'GURUDIN' | toLowerCase}}</code></p>
    <p><kbd v-html="toUcfirst"></kbd> => <code>{{'gurudin' | toUcfirst}}</code></p>
    <p><kbd v-html="toLcfirst"></kbd> => <code>{{'GURUDIN' | toLcfirst}}</code></p>
    <p><kbd v-html="truncate"></kbd> => <code>{{'Praeterea iter est quasdam res quas ex communi.' | truncate}}</code></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      leftFill: '{{2 | leftFill(0, 3)}}',
      rightFill: '{{1 | rightFill(0, 3)}}',
      toUpperCase: "{{'gurudin' | toUpperCase}}",
      toLowerCase: "{{'GURUDIN' | toUpperCase}}",
      toUcfirst: "{{'gurudin' | toUcfirst}}",
      toLcfirst: "{{'GURUDIN' | toLcfirst}}",
      truncate: "{{'Praeterea iter est quasdam res quas ex communi.' | truncate}}",
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
