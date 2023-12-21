<script setup lang="ts">
const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
]
const test = () => {
  window.$dialog.error({
    title: '提示',
    content: '这是一段内容',
    positiveText: '知道了',
    negativeText: '取消',
    showIcon: false,
    onPositiveClick: (e) => {
      console.log('positive', e)
    },
    onNegativeClick: (e) => {
      console.log('negative', e)
    }
  })
}

import { h } from 'vue'
import { NButton } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { RouterLink } from 'vue-router';

type Song = {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]
const columns = createColumns({
  play: (row) => {
    console.log('play', row)
  }
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
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
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
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          }
        ]
      },
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
  <div>
    <n-button type="success">2</n-button>
    <n-button type="warning">3</n-button>
    <n-button type="error">4</n-button>


    <n-menu :options="menuOptions" />

    <n-select :options="options"></n-select>
    <n-checkbox></n-checkbox>
    <n-element>

      <!-- <input type="text" class="nv-input"> -->
      <button class="nv-button primary" @click="test">取消</button>
      <div class="blank"></div>
    </n-element>
    <i class="el-icon-close"></i>
    <s-tooltip title="提示文字" placement="bottom" trigger="click">
      <n-button type="primary">hello</n-button>
    </s-tooltip>


    <div p-4 box-border>
      <n-data-table :columns="columns" :data="data" :pagination="false" bordered />
    </div>
  </div>
</template>
<style lang='' scoped>
</style>
