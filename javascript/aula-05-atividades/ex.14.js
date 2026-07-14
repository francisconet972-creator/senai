let cargo = "gerente";

switch (cargo) {
  case "estagiario":
    console.log("R$ 1500");
    break;
  case "analista":
    console.log("R$ 4000");
    break;
  case "gerente":
    console.log("R$ 8000");
    break;
  case "diretor":
    console.log("R$ 15000");
    break;
  default:
    console.log("Cargo não encontrado");
}