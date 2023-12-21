import { NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default function configNaiveResolverPlugin() {
  const configNaiveResolverPlugin = Components({
    dirs: [], // Avoid parsing src/components.  避免解析到src/components
    resolvers: [NaiveUiResolver()],
  })
  return configNaiveResolverPlugin
}

export function autoImportPlugin() {
  const autoImportPluginConf = AutoImport({
    imports: [
      'vue',
      {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar',
        ],
      },
    ],
  })
  return autoImportPluginConf
}
