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
          surface: "#FFFFFF",
          background: "#F5F5F5",
          primary: "#1976D2",
        },
      },
      dark: {
        colors: {
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
