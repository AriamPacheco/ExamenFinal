export default {
    template: `
        <section v-if="receta" class="receta">
            <h2>Felicidades has conseguido cocinar un {{ receta.nombre }}</h2>
            <img :src="receta.foto" :alt="receta.nombre">
            <h3>Ingredientes</h3>
            <ul>
                <li v-for="ingrediente in receta.ingredientes" :key="ingrediente">{{ ingrediente }}</li>
            </ul>
        </section>
        <section v-else class="receta">
            <p>{{ mensajeError }}</p>
        </section>
    `,
    props: {
        receta: {
            type: Object,
            default: null
        },
        mensajeError: {
            type: String,
            default: ''
        }
    },
    name: 'ResultadoComponent'
};
