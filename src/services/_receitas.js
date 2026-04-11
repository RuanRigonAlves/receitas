import apiReceitas from "./api.js";
import { convertIngToArray } from "@/helpers/recipe-helpers";
import categorias from "@/mocks/categoria.js";

const _receitas = {
  listarCategorias() {
    return new Promise((resolve, reject) => {
      apiReceitas
        .get("/categories.php")
        .then((response) => resolve(response.data.categories))
        .catch((erro) => reject(erro));
    });
  },
  buscarReceitaAleatoria() {
    return new Promise((resolve, reject) => {
      apiReceitas
        .get("/random.php")
        .then((response) => {
          const receita = response.data.meals[0];

          receita.ingredients = convertIngToArray(receita);
          resolve(receita);
        })
        .catch((erro) => reject(erro));
    });
  },
  buscarReceitaPorId(id) {
    return new Promise((resolve, reject) => {
      apiReceitas
        .get(`/lookup.php?i=${id}`)
        .then((response) => {
          const receita = response.data.meals[0];

          receita.ingredients = convertIngToArray(receita);
          resolve(receita);
        })
        .catch((erro) => reject(erro));
    });
  },

  buscarCategorias(categoria) {
    return new Promise((resolve, reject) => {
      apiReceitas
        // .get(`/filter.php?c=${categoria}`)
        .get("/filter.php", {
          params: {
            c: categoria,
          },
        })
        .then((response) => {
          resolve(response.data.meals);
        })
        .catch((erro) => reject(erro));
    });
  },
};

export default _receitas;
