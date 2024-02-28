import type { App } from 'vue'
import * as ElIcons from '@element-plus/icons-vue'
export function setupIcon(app: App<Element>) {
  app.config.globalProperties.$icons = []
  for (const name in ElIcons) {
    app.config.globalProperties.$icons.push(name)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    app.component(name, (ElIcons as any)[name])
  }
}
