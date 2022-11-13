<template>
  <div id="app">
    <nav>
      <router-link to="/movies">Movie</router-link> |
      <router-link to="/random">Random</router-link> |
      <router-link to="/watch-list">WatchList</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
