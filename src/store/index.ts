import { createStore, createLogger } from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

const debug = process.env.NODE_ENV !== 'production';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default createStore({
  modules: {
  },
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()],
});
