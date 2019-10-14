<template>
    <v-layout align-start>
        <v-flex>
            <v-data-table
            :headers="headers"
            :items="desserts"
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
                                <v-text-field v-model="editedItem.nombre" label="Nombre de la Aplicación"></v-text-field>
                                
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field v-model="editedItem.puerto" label="Puerto"></v-text-field>
                                
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field v-model="editedItem.dominio" label="Dominio"></v-text-field>
                                
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                
                </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                  {{item.nombreDom}}
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                  {{ icons.mdiPencil }}
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                     {{ icons.mdiDelete }}
                </v-icon>
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

      dominios:[],
  
      icons: {
        mdiPencil,
        mdiDelete,
      },
      dialog: false,
      headers: [
        {
          text: 'Nombre de la Aplicación',
          align: 'left',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Puerto', value: 'puerto' },
        { text: 'Dominio', value: 'dominio' },
        { text: 'Acciones', value: 'action', sortable: false },
      ],
      search: "",
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        puerto: '',
        dominio: '',
      },
      defaultItem: {
        nombre: '',
        puerto: '',
        dominio: '',
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
      /* this.initialize() */
      this.listarDominios();
    },

    methods: {
      listarDominios(){
      this.axios.get('dominios')
      .then((response) => {
        console.log(response.data)
        this.dominios = response.data;
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    }
  },

      /* initialize () {
        this.desserts = [
          {
            nombre: 'Facebook',
            puerto: '1000',
            dominio: 'LocalHost',
          },
        {
            nombre: 'Instagram',
            puerto: '4000',
            dominio: 'LocalHost',
          },
          {
            nombre: 'Twitter',
            puerto: '3101',
            dominio: 'Host Remoto',
          },
          {
            nombre: 'WhatsApp',
            puerto: '5555',
            dominio: 'Host',
          },
          {
            nombre: 'Stark Industries',
            puerto: '3000',
            dominio: 'Jarvis',
          },
        ]
      },
 */
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('¿Esta seguro que desea Eliminar?') && this.desserts.splice(index, 1)
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
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    }
</script>