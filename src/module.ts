import { defineNuxtModule, addPlugin, createResolver, addImports, addComponent } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-lenis',
    configKey: 'Nuxt3Lenis',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    addPlugin: true
  },
  setup () {
    const resolver = createResolver(import.meta.url)

    addImports([
      {
        name: 'default',
        as: 'Lenis',
        from: '@studio-freight/lenis'
      }
    ])
    addImports([
      {
        name: 'default',
        as: 'Tempus',
        from: '@studio-freight/tempus'
      }
    ])
    addImports([
      {
        name: 'useScrollState',
        as: 'useScrollState',
        from: resolver.resolve('./runtime/composables/useScrollState')
      }
    ])
    addPlugin(resolver.resolve('./runtime/plugin')),
    addComponent({
      name: 'lenis',
      filePath: resolver.resolve('./runtime/components', 'lenis.vue')
    })
  }
})
