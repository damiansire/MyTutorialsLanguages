//Vas a un restaurant y te da la lista de bebidas
let bebidas = ["Pepsi", "Fanta", "Agua", "Coca", "Batido"];
//Tienes ganas de tomarte una coca, 
// ¿Como te fijaria si hay Coca? 
// Logicamente, nos fijamos si la lista de bebidas, incluye Coca
bebidas.includes("Coca");
// Como sabes que hay, le queres pedir al mozo
// El mozo te dice, te animas a pasarme el numero de la coca? 
// En otras palabras, su indice en el array
bebidas.indexOf("Coca");
//El mozo te agradece

//Ahora, te trae la carta de comida
let comidas = [
    { nombre: "Papas fritas con huevo frito", cost: 180, tipo: "Vegetariana" },
    { nombre: "Asado con papas", cost: 180, tipo: "Carne" },
    { nombre: "Ensalada", cost: 99, tipo: "Vegana" },
    { nombre: "Frutos secos", cost: 80, tipo: "Vegana" },
    { nombre: "Lechuga y Tomate", cost: 70, tipo: "Vegana" },
    { nombre: "Milanesa napolitana con papas fritas", cost: 180, tipo: "Carne" },
    { nombre: "Taco de carne", cost: 180, tipo: "Carne" },
    { nombre: "Tequeños de queso", cost: 180, tipo: "Vegetariana" }
]

//La verdad, que sos vegano, entonces, solo queres comida vegana
comidas.filter(comida => comida.tipo === "Vegana")

//Ahora, te diste cuenta que en realidad, tenes solo 100 pesos, entonces,
//Tiene que vales menos de eso
comidas.filter(comida => comida.tipo === "Vegana" && comida.cost < 100)

//Que descicion mas dificil, como no te podes decidir 
//Optas por agarrar la primer comida vegana que valga menos de 100
comidas.find(comida => comida.tipo === "Vegana" && comida.cost < 100)

//Mozo, quiero una ensalada
//El numero amigo, el numero
comidas.findIndex(comida => comida.tipo === "Vegana" && comida.cost < 100)