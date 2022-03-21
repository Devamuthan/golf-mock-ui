<template>
    <div class="article">
        <div class="title">
            {{ article.title }}
        </div>
        <div class="description">
            {{ article.description }}
        </div>
        <div class="author">
            {{ article.author }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleComponent",
    props: ['article'],
}
</script>

<style scoped>

</style>