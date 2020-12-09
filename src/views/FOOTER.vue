<template>
    <footer class="footer container">
        <div class="main">
            <h4>Исполнитель: Мищенко Денис Дмитриевич</h4>
            <h4>Группа: 181-361</h4>
            <h4>09.12.2020</h4>
        </div>
        <div class="literature">
            <h4>Перечень использованной литературы</h4>
            <p>
                <a target="_blank" href="https://router.vuejs.org/">VueRouter</a>
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FOOTER"
    }
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
    }
    .literature {
        display: flex;
        flex-direction: column;
    }
</style>
