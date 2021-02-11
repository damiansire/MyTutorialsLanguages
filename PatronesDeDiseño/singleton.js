//Declaro la clase singleton
class Singleton {
    //Creo una variable instance que 
    //sea la misma para todas las clases
    static instance;

    constructor() {
        //No se usa un get instance, 
        //como es comun
        if (instance) {
            return instance;
        }

        this.instance = this;
    }

}