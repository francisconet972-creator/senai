const carro = {
  marca: "Ferrari",
  modelo: "458italia",
  ano: 2015,
  cor: "vermelho",
  placa: "ABC-1234"
};


console.log(carro);


delete carro.placa;


console.log(carro);


console.log("placa" in carro);

