<template>
  <div class="home">    
    
    <input-component v-model="tareaNueva" @keyup.enter.native="guardarTarea"/>

    <table>
      <thead>
        <th>#</th>
        <th class="ok">Tarea</th>
        <th>Editar</th>
        <th>Eliminar</th>
      </thead>

      <tbody>
        <item-component v-for="(tarea, index) in tareas" :key="index" 
        :tarea="tarea" :indice="index"
        v-on:editar="editarTarea"
        v-on:eliminar="eliminarTarea"
        />
      </tbody>
    </table>
  </div>
</template>

<script>

import InputComponent from "../components/InputComponent.vue";
import ItemComponent from "../components/ItemComponent.vue";

export default {
  name: "home",
  components: { InputComponent, ItemComponent },
  data() {
    return {
      tareaNueva: '',
      indexCurrent: null,
      tareas: [
        { text: "Tarea comer", done: true },
        { text: "Tarea estudiar", done: true },
        { text: "Tarea programar", done: true }
      ]
    };
  },
  methods: {
    guardarTarea() {
      if (this.indexCurrent !== null) {
        this.tareas[this.indexCurrent].text = this.tareaNueva;
      } else {
        this.tareas.push({text: this.tareaNueva, done: false});
      }
      
      this.indexCurrent = null;
      this.tareaNueva = '';
    },
    editarTarea(index) {
      this.indexCurrent = index;
      this.tareaNueva = this.tareas[index].text
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    }
  }
};
</script>
