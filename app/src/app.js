import IngredientesComponent from './components/Ingredientes.js';
import ResultadoComponent from './components/Platillo.js';
import Servicios from './services/api.js';

var app = new Vue({
    el: '#app',
    data: {
        platos: [],
        selectedIngredientes: [],
        recetaResultante: null,
        mensajeError: ''
    },
    components: {
        IngredientesComponent,
        ResultadoComponent
    },
    methods: {
        async fetchData() {
            const servicio = new Servicios();            
            servicio.fetchData((error, response) => {
                if (error) {
                    console.error('Error al obtener los platos:', error);
                } else {
                    this.platos = response;
                }
            });
        },
        cocinar() {
            const recetaEncontrada = this.platos.find(plato => {
                return this.selectedIngredientes.every(ingrediente => plato.ingredientes.includes(ingrediente));
            });
            if (recetaEncontrada) {
                this.recetaResultante = recetaEncontrada;
                this.mensajeError = '';
            } else {
                this.recetaResultante = null;
                this.mensajeError = 'No hay resultados';
            }
        }
    },
    mounted() {
        this.fetchData();
    },
    template: `
        <div>
            <Ingredientes
                :platos="platos" 
                @select-ingrediente="selectedIngredientes = $event" 
                @cocinar="cocinar" 
            />
            <Platillo
                :receta="recetaResultante" 
                :mensaje-error="mensajeError" 
            />
        </div>
    `
});
