<template>
  <ion-page>
    <ion-content :fullscreen="true" class="content">
      <div class="center">
        <section>
          <ion-button expand="block">
            <img class="google" :src="require('@/assets/google.svg')" />
            <span>Login with Google</span>
          </ion-button>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
  },
})
</script>

<style scoped>
.google {
  background: #fff;
  padding: 4px;
  border-radius: 4px;
  margin-right: 13px;
}

.center {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}
section {
  width: 100%;
  padding: 0 10px;
}
</style>
