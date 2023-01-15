<template>
    <div class="repo__item">
        <div class="repo__item-left">
            <h2 class="repo__item-title">{{repo.name}}</h2>
            <p class="pero__item-stars">Кол-во звёзд: {{repo.stargazers_count}} ⭐</p>
            <p class="pero__item-date">Дата добавления: {{new Date (repo.created_at).toLocaleDateString()}}</p>
           
        </div>
        <div class="repo__item-right">
            <a :href="repo.html_url" target="blank" class="repo__item-link">ПОСЕТИТЬ</a>
        </div>
    </div>
</template>

<script>
export default {
  props:['repo']
}
</script>

<style>

</style>