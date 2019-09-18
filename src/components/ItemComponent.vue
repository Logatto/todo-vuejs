<template>   
    <tr :key="`item-tarea-${indice}`" :class="tarea.done ? 'ok' : ''">
        <td>{{ indice + 1}}</td>
        <td>{{ tarea.text | upperCase }}</td>
        <td>
            <button-component @click.native="$emit('editar',indice)" :text="`Editar`"/>
        </td>
        <td>
            <button-component @click.native="$emit('eliminar', indice)" :text="`Eliminar`"/>
        </td>
    </tr>
</template>
<script>

import ButtonComponent from "../components/ButtonComponent.vue";

export default {
    name: 'ItemComponent',
    components: { ButtonComponent },
    props: ['tarea', 'indice']
}
</script>
<style scoped>
.ok {
  background-color: green;
  color: white;
}
</style>