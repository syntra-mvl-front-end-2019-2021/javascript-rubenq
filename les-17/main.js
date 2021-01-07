const App = {
    data() {
        return {
            name: 'Ruben',
            count: 1,
        };
    },
    mounted() {
        // setInterval( () => {
        // console.log(this);
        // this.count++;
        // }, 1000);
        },

    methods: {
        addOne() {
            this.count++;
        },
    },
};

Vue.createApp(App).mount('#app');
