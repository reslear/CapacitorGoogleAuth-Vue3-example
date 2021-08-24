import { defineStore } from 'pinia';
import type { User } from '@reslear/capacitor-google-auth';

const getLocalUser = () => {
  try {
    const user: User = JSON.parse(localStorage.getItem('user') || '');
    return user;
  } catch (e) {
    //
  }
};

const getEmptyUser = () => {
  const user = {
    email: '',
    familyName: '',
    givenName: '',
    id: '',
    imageUrl: '',
    name: '',
    accessToken: '',
    idToken: '',
    serverAuthCode: '',
    refreshToken: '',
  };
  return user;
};

export type SUser = ReturnType<typeof getEmptyUser>;

export const useStore = defineStore('auth', {
  state() {
    const user = getLocalUser() || getEmptyUser();
    return { user };
  },
  getters: {
    isLoggedIn(): boolean {
      return !!this.user.id;
    },
  },
  actions: {
    setUser(payload: User) {
      const { authentication, ...user } = payload;
      this.user = { ...user, ...authentication };
    },
    resetUser() {
      this.user = getEmptyUser();
    },
  },
});
