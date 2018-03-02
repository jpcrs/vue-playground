<template>
    <div class="component container">
        <h1>I'm User Component</h1>
        <p>Hello {{name}}</p>
        <button @click='changeUser'>Chang User</button>
        <hr>
        <div class="row">
            <div class="col">
                <user-details :userName='name' @nameChangedFromChild='name = $event' :resetCallBack='resetName' :userAge='age'></user-details>
            </div>
            <div class="col">
                <user-edit :userAge='age' :userName='name'></user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetails from "./UserDetails.vue";
import UserEdit from "./UserEdit.vue";
export default {
    data: function() {
        return {
            name: "João",
            age: 25
        }
    },
    methods: {
        changeUser() {
            this.name = "Pedro"
        },
        resetName() {
            this.name = "João"
        }
    },
    components: {
        'user-details': UserDetails,
        'user-edit': UserEdit
    }
}
</script>

<style scoped>
    .component {
        background-color:darkcyan;
    }
</style>

