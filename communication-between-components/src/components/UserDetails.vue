<template>
    <div class="component">
        Hello {{userName}} from User Details!
        Age: {{userAge}}
        <p>
            <button @click="resetName">Change name</button>
            <button @click="resetCallBack">Reset Name with Callback</button>
        </p>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  props: {
      userName: {
          type: String,
          default: "João"
      },
      userAge: {
          type: Number
      },
      resetCallBack: Function
  },
  methods: {
      resetName() {
          this.userName = "Pedrinho";
          this.$emit('nameChangedFromChild', this.userName)
      }
  },
  created() {
      eventBus.$on('ageWasEdited', (age) => {
          this.userAge = age;
      });
  }
}
</script>

<style scoped>
    .component {
        background-color: crimson;
    }
</style>

