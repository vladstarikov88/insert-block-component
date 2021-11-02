<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="footer current-footer">
    <p>Default footer.</p>
  </div>

  <insert-block in=".footer" as="fill">
    <p>This is new footer.</p>
    <company-name />
    <counter-button />
  </insert-block>
</template>

<script setup>
import InsertBlock from './components/InsertBlock.vue';
import CompanyName from './components/CompanyName.vue';
import CounterButton from './components/CounterButton.vue';
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
  height: 12rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.current-footer {
  background-color: #8dc6ff;
}
</style>
