import service from '@/services/service';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      user: null,
    };
  },

  mutations: {
    logIn(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logOut(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    userData(state) {
      return state.user;
    },
  },
  actions: {
    async updateUser(context, action) {
      try {
        const updated = await service.updateUser(
          action.user,
          action.accessToken
        );
        if (!updated) {
          throw new Error('Failed to update the user!');
        }
        return updated;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getUserByEmail(context, action) {
      try {
        console.log(action);
        const user = await service.getUserByEmail(
          action.email,
          action.accessToken
        );
        return user;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
};
