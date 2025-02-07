<script setup>


const props=defineProps({
    titulo: String,
    estado: Boolean,
}
   
)
</script>
<template>
<div>
    <p>Tarea</p>
    <p>Descripcion: {{ props.titulo }}</p>
    <p>Estado: {{ props.estado }}</p>

</div>
</template>
<style scoped>
div{
    display: flex;
    flex-direction: column;
    justify-content: left;
    border-bottom: 2px solid black;
}
</style>
