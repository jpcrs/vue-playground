const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    incrementCounter: (state, payload) => {
        state.counter += payload;
    },
    decrementCounter: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    incrementCounter: ({ commit }, payload) => {
        commit('incrementCounter', payload);
    },
    decrementCounter: ({ commit }, payload) => {
        commit('decrementCounter', payload);
    },
    incrementCounterAsync: ({commit}, payload) => {
        setTimeout(() => {
            commit('incrementCounter', payload.by);
        }, payload.duration);
    },
    decrementCounterAsync: ({commit}, payload) => {
        setTimeout(() => {
            commit('decrementCounter', payload.by);
        }, payload.duration);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}