const state = () => ({
    stages: ["Welcome"],
    currentStageIndex: 0,
    sceneLoading: false,
    scene: null,
    renderer: null,
    gltfScene: null,
});

// getters
const getters = {
    isCurrentStage: state => name => {
        return state.stages[state.currentStageIndex] == name;
    },
    currentStageIsScene: state => {
        return state.stages[state.currentStageIndex].includes("Scene");
    },
    isSceneLoading: state => {
        return state.sceneLoading;
    },
    getGLTF: state => {
        return state.gltfScene;
    },
    getRenderer: state => {
        return state.renderer;
    },
    isLastStage: state => {
        return state.currentStageIndex == state.stages.length - 1;
    },
};

// actions
const actions = {
    onAppLoad({ commit, getters }) {
        if (getters.currentStageIsScene) commit("loadingStart");
    },
    nextStage({ commit, getters }) {
        if (!getters.isLastStage) commit("nextStage");
        if (getters.currentStageIsScene) commit("loadingStart");
    },
    addGLTFScene({commit}, scene){
        commit("addToScene", scene);
        commit("setGLTFScene", scene);
    },
    loadingFinish({ commit }) {
        commit("removeLoading");
        commit("loadingEnd");
    },
};

// mutations
const mutations = {
    nextStage(state) {
        state.currentStageIndex++;
    },
    setScene(state, scene) {
        state.scene = scene;
    },
    setRenderer(state, renderer) {
        state.renderer = renderer;
    },
    setGLTFScene(state, gltf) {
        state.gltfScene = gltf;
    },
    removeLoading(state) {
        state.scene.remove(state.scene.scene.getObjectByName("loadingPlane"));
    },
    addToScene(state, object) {
        state.scene.add(object);
    },
    loadingStart(state) {
        state.sceneLoading = true;
        state.sceneReporting = false;
    },
    loadingEnd(state) {
        state.sceneLoading = false;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
