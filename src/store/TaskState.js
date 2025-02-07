import { defineStore } from "pinia";
export const useTaskState= defineStore('taskState',{
state:()=>({
   listaTareas:[] 
}),
getters:{

 listaActual:(state)=>state.listaTareas

},
actions:{
    iniciarLista(lista){
        this.listaTareas=lista;
    },
    AddTarea(tarea){
        this.listaTareas.push(tarea)
    }
}
})