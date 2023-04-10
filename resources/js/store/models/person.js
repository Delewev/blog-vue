const state = {
    person : null
}
const getters = {
    person: () => state.person
    // person: state => {
    //     return state.person
    // }
}

const actions = {
    getPerson(commit, id){
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },
}

const mutation = {
    setPerson(state, person) {
        state.person = person
    }
}

export default {
    state, mutation, actions, getters
}
