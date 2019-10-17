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
                        <v-form @submit.prevent="login">
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
                                            label="Login"
                                            name="Login"
                                            type="email"
                                            id="email"
                                            v-model="form.email"
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
                                        v-model="form.password"
                                    ></v-text-field>
                                    </v-col>
                                 </v-row>
                                </v-container>
                            </v-content>
                        </v-form>
                    </v-card-text>
                <v-card-actions>
            <v-spacer></v-spacer>
                    
            <v-btn color="indigo" dark @click.native='login'>Login</v-btn>
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
  import Api from "@/services/methods";
  import { server, port } from "@/services/environment";
  export default {
    ruta: server + ":" + port,
    settings: {},
    name: 'login',
    props: {
      source: String,
    },
    data: () => ({
      form: {
      id: 1,
      token: "a82kddn282020",
      email: null,
      password: null
    },
      drawer: null,
      icons: {
          mdiLockQuestion, 
          mdiAccount
      }
    }),
    created() {
        this.initialize();
        if (this.$store.state.isUserLoggedIn) {
        this.$router.push("/");
        }
    },
    methods: {
        initialize() {},
        login() {
        console.log('entro en login')
        Api.post("admin/login", this.form)
            .then(res => {
                console.log('entro en api')
            if (res.data.status == "Success") {
                console.log('entro en donde deberia')
                this.$store.dispatch("login", res.data);
                this.$cookies.set("token", res.data.token, "5D", "");
                window.location.href = "/home";
            } else {
                console.log('entro en donde no deberia')
                this.$swal.fire(
                "Oops...",
                "Error encontrado, usuario o contraseña incorrecta.",
                "error"
                );
            }
            })
            .catch(err => {
            console.log(err);
            });
        }
    }
  }
</script>