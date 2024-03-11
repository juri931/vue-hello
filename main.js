const { createApp } = Vue

createApp({

  data() {
    return {
      messaggio: "Ciao sono VUE!",
      contatore: 0,
      img: "https://picsum.photos/200/300",
    };
  },

  methods: {
    incremento(){this.contatore++;}
  },

  mounted() {
    this.incremento();
  },
  
}).mount('#app')