<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">个人简介</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
// 保持原有的逻辑不变
</script>

<style scoped>
/* 保持原有的样式不变 */
</style>