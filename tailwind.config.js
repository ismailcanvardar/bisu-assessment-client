module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html, ts}"],
  },
  theme: {
    extent: {},
  },
  variants: {},
  plugins: [require("daisyui")],
};
