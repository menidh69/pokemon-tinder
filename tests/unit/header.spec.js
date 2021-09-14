import Vuex from 'vuex';
import usersState from '../../src/store/modules/users';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import VueRouter from 'vue-router';
import Header from '@/components/Header.vue';
import Login from '@/views/Login';

let mockRouter, store;
const localVue = createLocalVue();
const { state, getters, mutations } = usersState;
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Header component', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      modules: { users: usersState },
    });

    mockRouter = {
      push: jest.fn(),
    };
  });

  it('should not show logout button if not authenticated', () => {
    const wrapper = shallowMount(Header, {
      store,
      localVue,
      mocks: {
        $router: mockRouter,
      },
      stubs: ['router-link', 'router-view'],
    });
    expect(wrapper.find('.logout').exists()).toBeFalsy();
  });

  it('should show logout because user is authenticated', () => {
    const getters = {
      userData: () => ({ name: 'Manuel', fullName: 'Manuel Duarte' }),
      isLoggedIn: () => true,
    };
    store = new Vuex.Store({
      modules: {
        users: {
          namespaced: true,
          state() {
            return {
              userData: {
                name: 'Manuel',
                fullName: 'Manuel Duarte',
              },
            };
          },
          getters: getters,
        },
      },
    });
    const wrapper = shallowMount(Header, {
      store,
      localVue,
      mocks: {
        $router: mockRouter,
      },
      stubs: ['router-link', 'router-view'],
    });

    expect(wrapper.find('.logout').exists()).toBeTruthy();
  });

  it('should redirect to login', async () => {
    // const routes = [
    //   {
    //     path: '/',
    //     name: 'Home',
    //     component: { template: 'Home' },
    //   },
    //   {
    //     path: '/login',
    //     name: 'Login',
    //     component: { template: 'Login' },
    //   },
    // ];
    // const router = new VueRouter({
    //   mode: 'history',
    //   // base: process.env.BASE_URL,
    //   routes,
    // });
    const getters = {
      userData: () => null,
      isLoggedIn: () => false,
    };
    const routes = [
      {
        path: '/',
        name: 'Home',
        component: { template: 'Home' },
      },
      {
        path: '/login',
        name: 'Login',
        component: { template: 'Login' },
      },
    ];
    store = new Vuex.Store({
      modules: {
        users: {
          namespaced: true,
          state() {
            return {
              userData: null,
            };
          },
          getters: getters,
        },
      },
    });
    const router = new VueRouter({
      routes,
    });
    const wrapper = mount(Header, {
      store,
      localVue,
      router,
    });

    const login = wrapper.find('.login');
    await login.trigger('click');
    await flushPromises();
    expect(
      wrapper.find('.login.router-link-exact-active').exists()
    ).toBeTruthy();
  });
});
