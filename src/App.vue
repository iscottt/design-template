<script setup lang="ts">
import { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    "fontFamily": "微软雅黑,Microsoft YaHei UI,Microsoft YaHei,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif",
    "fontFamilyMono": "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
    "borderRadius": "6px",
    "borderRadiusSmall": "3px",
    "primaryColor": "#007dffFF",
    "primaryColorHover": "#3196ffFF",
    "primaryColorPressed": "#276cebFF",
    "primaryColorSuppl": "#3196ffFF",
    "infoColor": "#409effFF",
    "infoColorHover": "#66b1ffFF",
    "infoColorPressed": "#3a8ee6FF",
    "infoColorSuppl": "#66b1ffFF",
    "successColor": "#67c23aFF",
    "successColorHover": "#85ce61FF",
    "successColorPressed": "#5daf34FF",
    "successColorSuppl": "#85ce61FF",
    "warningColor": "#e6a23cFF",
    "warningColorHover": "#ebb563FF",
    "warningColorPressed": "#cf9236FF",
    "warningColorSuppl": "#ebb563FF",
    "errorColor": "#f56c6cFF",
    "errorColorHover": "#f78989FF",
    "errorColorPressed": "#dd6161FF",
    "errorColorSuppl": "#f78989FF"
  },
  Button: {
    borderRadiusSmall: "4px"
  }
}

</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-dialog-provider>
      <n-message-provider>
        <router-view #="{ Component, route }">
          <component :is="Component" :key="route.path" />
        </router-view>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
<style lang='scss' scoped>
</style>
