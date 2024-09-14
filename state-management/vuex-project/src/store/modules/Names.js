const Names = {
  state: {
    names: JSON.parse(localStorage.getItem("names")) || [], // Load names from localStorage or set an empty array
  },
  getters: {
    allNames: (state) => {
      return state.names;
    },
    lastUser: (state) => {
      return state.names[state.names.length - 1]?.name || null; // Handle case where no names exist
    },
    totalNames: (state) => {
      return state.names.length;
    },
  },
  mutations: {
    newName: (state, userInfo) => {
      state.names = [userInfo, ...state.names];
      localStorage.setItem("names", JSON.stringify(state.names)); // Sync with localStorage
    },
    deleteName: (state, id) => {
      state.names = state.names.filter((name) => name.id != id);
      localStorage.setItem("names", JSON.stringify(state.names)); // Sync with localStorage
    },
  },
  actions: {
    addName: (context, userInfo) => {
      context.commit("newName", userInfo);
    },
    removeName: (context, id) => {
      context.commit("deleteName", id);
    },
  },
};

export default Names;
