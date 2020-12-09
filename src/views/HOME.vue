<template>
    <div class="container">
        <h1>Главная страница</h1>
        <img src="https://pcsite.co.uk/wp-content/uploads/2020/02/t3600-motherboard-B.jpg" alt />
    </div>
</template>

<script>
    export default {
        name: "HOME"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    .container {
        margin-top: 15px;
        font-family: 'Roboto', sans-serif;
    }

    img {
        width: 40%;
        height: 40%;
        -webkit-animation: pulsing 4s infinite;
        animation: pulsing 4s infinite;
    }

    @-webkit-keyframes pulsing {
        0% {
            -webkit-transform: scale(0.8, 0.8);
            transform: scale(0.8, 0.8);
        }
        50% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        100% {
            -webkit-transform: scale(0.8, 0.8);
            transform: scale(0.8, 0.8);
        }
    }
</style>
