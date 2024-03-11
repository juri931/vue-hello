const { createApp } = Vue

createApp({

  data() {
    return {
      messaggio: "Ciao sono VUE!",
      contatore: 0,
      img: "acqua-albero-cielo-451855.jpg",
    };
  },

  methods: {
    incremento(){this.contatore++;}
  },

  mounted() {
    this.incremento();
  },
  
}).mount('#app')