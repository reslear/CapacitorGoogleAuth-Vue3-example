<template>
  <ion-page>
    <ion-content :fullscreen="true" class="content">
      <div class="center">
        <section>
          <ion-button expand="block" @click="logIn()">
            <img class="google" :src="require('@/assets/google.svg')" />
            <span>Login with Google</span>
          </ion-button>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { defineComponent, onMounted } from 'vue';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { useStore, UserWithoutAuth } from '@/stores/main';
import router from '@/router';

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
  },

  setup() {
    const store = useStore();

    onMounted(() => {
      // TODO: remove
      const head = document.querySelector('head');
      const meta = document.createElement('meta');
      meta.name = 'google-signin-client_id';
      meta.content = process.env.VUE_APP_GOOGLE_CLIENT_ID;

      if (head) {
        head.appendChild(meta);
      }

      GoogleAuth.init();
    });

    const logIn = async () => {
      try {
        const response: UserWithoutAuth = await GoogleAuth.signIn();

        if (response.id) {
          delete response.authentication;
          delete response.serverAuthCode;

          store.setUser(response);
          router.push('/');
        }
      } catch (e) {
        //
      }
    };

    return {
      logIn,
    };
  },
});
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
  max-width: 300px;
  padding: 0 10px;
}
</style>
