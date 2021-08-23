// stores/counter.js
import { defineStore } from 'pinia';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

// TODO: remove
type Await<T> = T extends PromiseLike<infer U> ? U : T;
export type User = Await<ReturnType<typeof GoogleAuth.signIn>>;

// TODO: remove
export type UserWithoutAuth = Omit<User, 'authentication' | 'serverAuthCode'> &
  Partial<Pick<User, 'authentication' | 'serverAuthCode'>>;

const getLocalUser = () => {
  try {
    const user: UserWithoutAuth = JSON.parse(localStorage.getItem('user') || '');
    return user;
  } catch (e) {
    //
  }
};

const getEmptyUser = () => {
  const user: UserWithoutAuth = {
    email: '',
    familyName: '',
    givenName: '',
    id: '',
    imageUrl: '',
    name: '',
  };
  return user;
};

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
    setUser(user: UserWithoutAuth) {
      this.user = user;
    },
    resetUser() {
      this.user = getEmptyUser();
    },
  },
});
