<script setup lang="ts">
</script>

<template>
  <div flex items-center justify-between wh-full px-3>
    <div flex flex-center gap-10px>
      <div class="logo" flex flex-center>
        <img src="/logo.svg" alt="logo" />
      </div>
      <h2 font-italic pr-5>Naive UI后台管理系统</h2>
    </div>
    <div class="right">
    </div>
  </div>
</template>
<style lang='scss' scoped>
.logo img {
  filter: drop-shadow(4px 4px 5px var(--primary-opacity-3)) drop-shadow(-4px -4px 2px #333);
}

h2 {
  font-size: 1.5em;
  font-family: TITLE;
  color: #eee;
  text-shadow: .1em .1em rgb(255 255 255 / 20%), .2em .2em .2em rgb(0 0 0 / 30%);
  font-size: 2em;
  -webkit-mask: linear-gradient(rgba(0, 0, 0, .8) 20%, #000 60%) 0 0/100% 1.3em;
  mask: linear-gradient(rgba(0, 0, 0, .8) 20%, #000 60%) 0 0/100% 1.3em;
}
</style>
