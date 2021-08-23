<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <main>
        <div>
          <ion-avatar class="avatar">
            <img
              :src="user.imageUrl || 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'"
            />
          </ion-avatar>
        </div>

        <div class="items">
          <ion-item v-for="(value, key) in user" :key="key">
            <ion-label position="fixed">{{ key }}</ion-label>
            <div>{{ value }}</div>
          </ion-item>
        </div>

        <ion-button expand="block" @click="signOut()"> Sign out </ion-button>
      </main>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useStore } from '@/stores/main';
import { IonPage, IonContent, IonAvatar, IonButton, IonItem, IonLabel } from '@ionic/vue';
import { computed, defineComponent } from 'vue';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import router from '@/router';

export default defineComponent({
  components: { IonContent, IonPage, IonAvatar, IonButton, IonItem, IonLabel },
  setup() {
    const store = useStore();
    const user = computed(() => store.user);

    const signOut = () => {
      GoogleAuth.signOut();
      store.resetUser();

      router.replace('/login');
    };

    return { user, signOut };
  },
});
</script>

<style scoped>
main {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.items {
  padding: 20px 0;
  width: 100%;
}

.avatar {
  width: 128px;
  height: 128px;
}
</style>
