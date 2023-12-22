<script setup lang="ts">
import useDialogTools from '@/core/tools/dialog';
import Header from './components/Header.vue'
import { RouterLink } from 'vue-router';
const dialogTools = useDialogTools()

onMounted(() => {
  window.$dialog = dialogTools
})
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '回家' }
      ),
    key: 'go-back-home',
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
    key: 'hear-the-wind-sing',
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<template>
  <n-layout h-screen overflow-hidden box-border>
    <n-layout-header h-56px bg="[var(--base-bg)]">
      <header class="layout-header">
        <Header />
      </header>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider class="layout-sider" :native-scrollbar="false" :width="256">
        <n-menu :options="menuOptions" />
      </n-layout-sider>
      <n-layout-content class="main-column" :native-scrollbar="false">
        <RouterView p-20px />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<style lang='scss' scoped>
.layout-header {
  height: 56px;
  background: linear-gradient(#25292f, #454a53);
  box-shadow: inset 0 1px #ffffff1a, inset 0 -1px #00000026, 0 1px #ffffff12;
  box-sizing: border-box;
  padding: 15px 11px;
}

.layout-sider {
  background: linear-gradient(#454a53, #25292f);
  border-right: 1px solid var(--gray-7);
  box-shadow: 1px 0 var(--white-opacity-7);
}

.main-column {
  height: calc(100vh - 56px);
  background: var(--base-bg);
}
</style>
