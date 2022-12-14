/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      title : ['Permanent Marker'],
      textos : ['Fredoka']
    },
    colors: {
      primary: "#6C63FF",
      bgFigurasCirculo: 'rgb(108, 99, 255, .20)',
      bgFigurasCuadrado: 'rgb(10, 207, 131, .30)',
      colorGray: "rgb(0, 0, 0, .50)",
      colorGray2: "rgb(0, 0, 0, .70)",
      colorGray3: "rgb(250, 250, 250)",
      colorGray4: "#AAAAAA",
      colorBlack: "rgb(0, 0, 0)",
      colorBlanco: "#fff",
      colorRojo: "#F24E1E",
      colorMorado: "#6C63FF",
      colorVerder: "#0ACF83",
      colorAmarillo: "#F7DF1E",
      colorLinkedin: "#0a66c2",
      colorAzul: "#1572B6",
      colorAzulTransparente: "rgb(21, 114, 182, .50)",
      colorVerder2: "#0ACF83",
      colorVerder3: "#09B673",
      colorAzulOscuro: "#135D93",
      colorRojoClaro: "#F5B7B1",
      colorRojoClaro2: "#EF5350"
    }
  },
  plugins: [],
}
