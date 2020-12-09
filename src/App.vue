<template>
  <div class="main">
    <div class="container">
      <div class="header">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/motherboard" class="nav-link">Материнские платы</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cpu" class="nav-link">Процессоры</router-link>
            </li>
          </ul>
        </nav>
        <router-view />
        <hr />
        <FOOTER />
      </div>
    </div>
  </div>
</template>

<script>
import FOOTER from './views/FOOTER'
export default {
  components: {
    FOOTER
  }
}
</script>

<style scoped>
  .main {
    background: #9eacc3;
  }
</style>
