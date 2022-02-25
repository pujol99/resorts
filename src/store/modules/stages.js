const state = () => ({
    scene: null,
    renderer: null,
    gltfScene: null,
});

// getters
const getters = {
    getGLTF: state => {
        return state.gltfScene;
    },
    getRenderer: state => {
        return state.renderer;
    },
};

// actions
const actions = {
    onAppLoad({ commit, getters }) {
        
    },
    addGLTFScene({ commit }, scene) {
        commit("addToScene", scene);
        commit("setGLTFScene", scene);
    },
};

// mutations
const mutations = {
    setScene(state, scene) {
        state.scene = scene;
    },
    setRenderer(state, renderer) {
        state.renderer = renderer;
    },
    setGLTFScene(state, gltf) {
        state.gltfScene = gltf;
    },
    addToScene(state, object) {
        state.scene.add(object);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
