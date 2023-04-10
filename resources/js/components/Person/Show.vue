<template>
    <div v-if="person">
        <div>
            Name: {{person.name}}
        </div>
        <div>
            age: {{person.age}}
        </div>
        <div>
            job: {{person.job}}
        </div>
        <router-link :to="{ name: 'person.edit', params: {id: person.id}}">Edit</router-link>
    </div>
</template>

<script>
export default {
    name: "Show",

    // data(){
    //     return{
    //         person: null
    //     }
    // },
    mounted() {
        // this.getPerson()
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        person(){
            return this.$store.getters.person
        }

    }

    // methods: {
    //     getPerson(id){
    //         axios.get(`/api/people/${this.$route.params.id}`)
    //             .then(res => {
    //                 this.person = res.data.data
    //             })
    //     },
    // }
}
</script>

<style scoped>

</style>
