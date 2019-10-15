<template>
    <v-layout align-start>
        <v-flex>
            <v-data-table
            :headers="headers"
            :items="dominios"
            :search="search"
            sort-by="nombre"
            class="elevation-1"
            >
                <template v-slot:top>
                <v-toolbar flat color="indigo" dark>
                    <v-toolbar-title>CRUD</v-toolbar-title>
                    <v-divider
                    class="mx-4"
                    inset
                    vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field class="text-xs-center" v-model="search"  label="Búsqueda" single-line hide-details></v-text-field>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="success" dark class="mb-2" v-on="on">Nuevo Dominio</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field v-model="editedItem.nombreApp" label="Nombre de la Aplicación"></v-text-field>
                                
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field v-model="editedItem.puerto" label="Puerto"></v-text-field>
                                
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field v-model="editedItem.nombreDom" label="Dominio"></v-text-field>
                                
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click.native='close'>Cancelar</v-btn>
                        <v-btn color="blue darken-1" text @click.native='save'>Guardar</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>

                <template slot="items" slot-scope="props">
                  <td>{{ props.item.id }}</td>
                  <td class = "text-xs-right">{{props.item.nombreApp}}</td>
                  <td class = "text-xs-right">{{props.item.puerto}}</td>
                  <td class = "text-xs-right">{{props.item.nombreDom}}</td>
                </template> 
                 <template v-slot:item.action="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)"> {{ icons.mdiPencil }}</v-icon>
                <v-icon small @click="deleteItem(item)"> {{ icons.mdiDelete }}</v-icon>
                </template>                                
            </v-data-table>        
        </v-flex>
    </v-layout>
</template>

<script>

import {
    mdiPencil,
    mdiDelete,
  } from '@mdi/js';

  export default {
    data: () => ({
      icons: {
        mdiPencil,
        mdiDelete
      },
      dialog: false,
      headers: [
        {
          text: 'Nombre de la Aplicación',
          align: 'left',
          sortable: false,
          value: 'nombreApp',
        },
        { text: 'Puerto', value: 'puerto' },
        { text: 'Dominio', value: 'nombreDom' },
        { text: 'Acciones', value: 'action', sortable: false },
      ],
      dominios:[],
      search: "",
      editedIndex: -1,
      editedItem: {
        _id:'',
        nombreApp: '',
        puerto: '',
        nombreDom: '',
      },
      defaultItem: {
        _id:"",
        nombreApp: '',
        puerto: '',
        nombreDom: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Dominio' : 'Editar Dominio'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize();
    },

    methods: {

      initialize(){
        this.listarDominios();
        
      },

      listarDominios(){
        console.log('pasa por aqui')
      this.axios.get('/api/dominio')
      .then((response) => {
        console.log('se ejecuta then')
        console.log(response.data)
        this.dominios = response.data;
      })
      .catch((e)=>{
        console.log('se ejecuta error')
        console.log('error' + e);
      })
    },

      editItem (item) {
        this.editedIndex = this.dominios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        console.log(item)
        const index = this.dominios.indexOf(item)
        confirm('¿Esta seguro que desea Eliminar?') && this.dominios.splice(index, 1)
        console.log('Datos eliminados');

        this.axios.delete('/api/dominio/'+item._id)
          .then(response=>{
            console.log(response);
          })
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          console.log('Datos guardados');
          console.log(this.editedItem);
          console.log(this.editedItem._id);


          this.axios.put('/api/dominio',{_id:this.editedItem._id, nombreApp:this.editedItem.nombreApp, puerto:this.editedItem.puerto, nombreDom:this.editedItem.nombreDom})
          .then(response=>{
            console.log(response);
          })

          Object.assign(this.dominios[this.editedIndex], this.editedItem)
        } else {
          console.log('Datos creados');
          console.log(this.editedItem)

          this.axios.post('/api/dominio',{nombreApp:this.editedItem.nombreApp, puerto:this.editedItem.puerto, nombreDom:this.editedItem.nombreDom})
          .then(response=>{
            console.log(response);
          })       
          this.dominios.push(this.editedItem)
        }
        this.close()
      },
    }
  }
</script>