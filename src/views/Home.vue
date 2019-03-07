<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- Testing Bootstrap + Bootstrap Vue -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">1 of 3</div>
        <div class="col-12 col-md-4">2 of 3</div>
        <div class="col-12 col-md-4">3 of 3</div>
      </div>
      <div class="row">
        <div class="col-12">
          <b-button v-b-modal.modal1>Launch demo modal</b-button>

          <!-- Modal Component -->
          <b-modal id="modal1" title="BootstrapVue">
            <p class="my-4">Hellow World !</p>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
