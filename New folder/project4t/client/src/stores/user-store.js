import { defineStore } from 'pinia';

export const userStore = defineStore('user-store', {
  state: () => ({
    user: [],
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    addNewUser(newUser) {
      console.log(newUser);
      this.user.push(newUser);
    },
  },
});
