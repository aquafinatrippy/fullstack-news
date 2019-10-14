<template>
    <div>
        <h1>News</h1>
    </div>
</template>

<script>
import newsService from '@/services/newsService'
export default {
    name: 'News',
    data(){
        return{
            news: [],
            feedback: ''
        }
    },
    async created(){
        try{
            this.news = await newsService.getNews()
        }
        catch(err){
            this.feedback = err
        }
    }
}
</script>