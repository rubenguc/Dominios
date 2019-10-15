<template>
    <v-layout align-start>
        <v-flex>
             <v-app id="inspire">
                 <v-content>
                    <v-container
                        class="fill-height"
                        fluid
                    >
                    <v-row
                    align="center"
                    justify="center"
                    >
                    <v-col
                        cols="12"
                        sm="8"
                        md="4"
                    >
                    <v-card class="elevation-12">
                    <v-toolbar flat color="indigo" dark>
                     <v-toolbar-title>Iniciar Sesion</v-toolbar-title>
                        <v-spacer></v-spacer>
                
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-content>
                                <v-container>
                                    <v-row
                                    align="center"
                                    justify="center"
                                    >
                                    <v-col
                                        cols="1"
                                        sm="1"
                                        md="1"
                                    >
                                    <v-icon>{{ icons.mdiAccount }}</v-icon>
                                    </v-col>
                                    <v-col 
                                        cols="10"
                                        sm="10"
                                        md="10"
                                    > 
                                        <v-text-field
                                            id="Login"
                                            label="Login"
                                            name="Login"
                                            type="text"
                                        ></v-text-field>
                                    </v-col>
                                 </v-row>
                                <v-row
                                    align="center"
                                    justify="center"
                                    >
                                    <v-col
                                        cols="1"
                                        sm="1"
                                        md="1"
                                    >
                                    <v-icon>{{ icons.mdiLockQuestion }}</v-icon>
                                    </v-col>
                                    <v-col 
                                        cols="10"
                                        sm="10"
                                        md="10"    
                                    >
                                         <v-text-field
                                        id="password"
                                        label="password"
                                        name="password"
                                        type="password"
                                    ></v-text-field>
                                    </v-col>
                                 </v-row>
                                </v-container>
                            </v-content>
                        </v-form>
                    </v-card-text>
                <v-card-actions>
            <v-spacer></v-spacer>
                    
            <v-btn color="indigo" dark>Login</v-btn>
            </v-card-actions>
         </v-card>
         </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
  </v-flex>
 </v-layout>
</template>

<script>
import { mdiLockQuestion, mdiAccount } from '@mdi/js';
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      icons: {
          mdiLockQuestion, 
          mdiAccount
      }
    }),
  }
</script>