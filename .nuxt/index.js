import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_300addc7 from 'nuxt_plugin_plugin_300addc7' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_pluginrouting_76e91e49 from 'nuxt_plugin_pluginrouting_76e91e49' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_ddfecc74 from 'nuxt_plugin_pluginmain_ddfecc74' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_pluginserver_fb1d0882 from 'nuxt_plugin_pluginserver_fb1d0882' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_1cb80a37 from 'nuxt_plugin_pluginclient_1cb80a37' // Source: ./color-mode/plugin.client.js (mode: 'client')
import nuxt_plugin_swiper_3bb64ef0 from 'nuxt_plugin_swiper_3bb64ef0' // Source: ../plugins/swiper.js (mode: 'client')
import nuxt_plugin_vueTyper_62ae74ef from 'nuxt_plugin_vueTyper_62ae74ef' // Source: ../plugins/vueTyper.js (mode: 'client')
import nuxt_plugin_aos_78651e70 from 'nuxt_plugin_aos_78651e70' // Source: ../plugins/aos.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"ivan-resume","script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.13.1\u002Fjs\u002Fsolid.min.js"},{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.2.1.slim.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.12.9\u002Fumd\u002Fpopper.min.js"},{"src":"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.0.0\u002Fjs\u002Fbootstrap.min.js"},{"hid":"nuxt-color-mode-script","innerHTML":"!function (){\"use strict\";var e=window,t=document,s=t.documentElement,n=[\"dark\",\"light\"],a=function(e){for(var s=e+\"=\",n=t.cookie.split(\";\"),a=0;a\u003Cn.length;a++){for(var o=n[a];\" \"===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(s))return o.substring(s.length,o.length)}return null}(\"nuxt-color-mode\")||\"system\",o=\"system\"===a?i():a;function r(e){var t=e+\"-mode\";s.classList?s.classList.add(t):s.className+=\" \"+t}function c(t){return e.matchMedia(\"(prefers-color-scheme\"+t+\")\")}function i(){if(e.matchMedia&&\"not all\"!==c(\"\").media)for(var t of n)if(c(\":\"+t).matches)return t;return\"light\"}r(o),e[\"__NUXT_COLOR_MODE__\"]={preference:a,value:o,getColorScheme:i,addClass:r,removeClass:function(e){var t=e+\"-mode\";s.classList?s.classList.remove(t):s.className=s.className.replace(new RegExp(t,\"g\"),\"\")}}}();\n","pbody":true}],"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fsimple-line-icons\u002F2.4.1\u002Fcss\u002Fsimple-line-icons.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.rawgit.com\u002Fkonpa\u002Fdevicon\u002Fdf6431e323547add1b4cf45992913f15286456d3\u002Fdevicon.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.1.1\u002Fcss\u002Fbootstrap.min.css","integrity":"sha384-WskhaSGFgHYWDcbwN70\u002FdfYBj47jz9qbsMId\u002FiRN3ewGhXQFZCSftd1LZCfmhktB","crossorigin":"anonymous"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.1.0\u002Fcss\u002Fall.css","integrity":"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt","crossorigin":"anonymous"}],"style":[],"__dangerouslyDisableSanitizersByTagID":{"nuxt-color-mode-script":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_300addc7 === 'function') {
    await nuxt_plugin_plugin_300addc7(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_76e91e49 === 'function') {
    await nuxt_plugin_pluginrouting_76e91e49(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_ddfecc74 === 'function') {
    await nuxt_plugin_pluginmain_ddfecc74(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_fb1d0882 === 'function') {
    await nuxt_plugin_pluginserver_fb1d0882(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_1cb80a37 === 'function') {
    await nuxt_plugin_pluginclient_1cb80a37(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swiper_3bb64ef0 === 'function') {
    await nuxt_plugin_swiper_3bb64ef0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueTyper_62ae74ef === 'function') {
    await nuxt_plugin_vueTyper_62ae74ef(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_78651e70 === 'function') {
    await nuxt_plugin_aos_78651e70(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
