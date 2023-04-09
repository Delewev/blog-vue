<template>
    <div v-if="person">
        <div>
            Name: {{this.person.name}}
        </div>
        <div>
            age: {{this.person.age}}
        </div>
        <div>
            job: {{this.person.job}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",

    data(){
        return{
            person: null
        }
    },
    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson(id){
            axios.get('/api/people/' + this.$route.params.id)
                .then(res => {
                    this.person = res.data
                })
        },
    }
}
</script>

<style scoped>

</style>
