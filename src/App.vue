<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent, watch } from 'vue';
import { useStore } from './stores/main';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const store = useStore();

    watch(
      () => store.user,
      (state) => {
        localStorage.setItem('user', JSON.stringify(state));
      },
      { deep: true }
    );

    return {
      //
    };
  },
});
</script>
