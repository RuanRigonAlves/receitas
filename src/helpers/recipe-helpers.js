export function convertIngToArray(obj) {
  const ingredientes = [];

  for (let i = 1; i <= 20; i++) {
    const ingrediente = obj[`strIngredient${i}`];
    const medida = obj[`strMeasure${i}`];

    if (!ingrediente || ingrediente.trim() === "") {
      break;
    }

    ingredientes.push({
      nome: ingrediente,
      medida: medida?.trim() || "",
    });
  }

  return ingredientes;
}
