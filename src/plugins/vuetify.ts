/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from "vuetify";
// Styles
import "@mdi/font/css/materialdesignicons.css";

import "../styles/layers.css";
import "vuetify/styles";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "system",
    themes: {
      light: {
        colors: {
          primary: "#F53E28",
          surface: "#FFFFFF",
          background: "#FBF7F1",
          primaryBG: "#FBF7F1",
          secondaryBG: "#F7EFE4",
        },
      },
      dark: {
        colors: {
          primary: "#F53E28",
          corChip: "#151515",
        },
      },
    },
  },
});

// createVuetify({
//   theme: {
//     themes: {
//       light: {
//         colors: {
//           surface: "#FFFFFF",
//           background: "#F5F5F5",
//           primary: "#1976D2",
//         },
//       },
//     },
//   },
// });
