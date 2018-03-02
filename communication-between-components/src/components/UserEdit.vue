<template>
    <div class="component">
        Hello {{userName}} from User Edit!
        Age: {{userAge}}
        <P>
            <button @click='editAge'>Edit age</button>
        </P>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props:['userAge', 'userName'],
    methods: {
        editAge() {
            this.userAge = 30;
            // eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>

<style scoped>
    .component {
        background-color: cornflowerblue;
    }
</style>

