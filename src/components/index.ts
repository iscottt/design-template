// vite vue3注册全局组件
const components = import.meta.glob('./**/*.vue',{ eager: true }) as any
export default {
  //必须是install这个名字的方法
  install(app) {
    Object.keys(components).forEach((key) => {
      // 过滤组件名称，去掉/index.vue后缀
      const name = key.replace(/^\.\/(.*)\/index\.\w+$/, '$1')
      // 注册组件
      app.component(name, components[key].default || components[key])
    })
  }
}

