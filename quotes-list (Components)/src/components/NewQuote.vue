<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea class="form-control" row="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="createNewQuote">
                    Add Quote
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    data () {
        return {
            quote: ''
        }
    },
    methods: {
        createNewQuote() {
            if (this.quote == '') {
                return;
            }
            //Only if i was using event bus
            //eventBus.addQuote(this.quote);
            this.$emit('addNewQuote', this.quote);
            this.quote = "";
        }
    }
}
</script>

<style>

</style>

