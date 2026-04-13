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
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          textprimary: "#743416",
          ptext: "#53240C",
          bgprimary: "#ebe5dc",
          bgsecondary: "#e9d8c1",
          background: "#ebe5dc",
          // background: "#FBF7F1",

          // bgprimary: "#FBF7F1",
          // bgsecondary: "#F7EFE4",
          primary: "#F53E28",
          surface: "#FFFFFF",
          // primaryBG: "#FBF7F1",
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
