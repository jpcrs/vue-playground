<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- Using Dynamic Components -->
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p> {{selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!-- Using Dynamic Components -->
                
                <!-- Using Slots -->
                    <!-- <app-quote>
                        <h2 slot="title">{{ quoteTitle }}</h2>
                        <p>A wonderful Quote</p>
                    </app-quote> -->
                <!-- Using Slots -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';
    export default {
        data () {
            return {
                quoteTitle: "The Quote!",
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
