<template>
    <input type="text" v-bind:value="value"  @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
    name : 'InputComponent',
    props: ['value']
}
</script>

