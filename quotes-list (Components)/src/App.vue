<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @addNewQuote="pushNewQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="removeQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue'
import { eventBus } from './main';

    export default {
        data () {
            return {
                quotes: ['Just a Quote to see something'],
                maxQuotes: 10,
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            pushNewQuote(quote) {
                if(this.quotes.length >= this.maxQuotes) {
                    return;
                }
                this.quotes.push(quote);
            },
            removeQuote(index) {
                this.quotes = this.quotes.filter((item, _index) => _index != index);
            }
        }
        //Only if i was using event bus.
        // created() {
        //     eventBus.$on('addNewQuote', (quote) => {
        //         this.quotes.push(quote);
        //     })
        // }
    }
</script>

<style>
</style>
