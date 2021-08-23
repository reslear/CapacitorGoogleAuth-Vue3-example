declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '*.svg' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
