import Vuex from "vuex"
import users from "./modules/users"
import khachs from "./modules/khachs"

const createStore = () => {
  return new Vuex.Store({
    modules: {
      users,
      khachs
    }
  })
};

export default createStore
