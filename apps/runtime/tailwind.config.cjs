/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@basebee/tailwind-config")],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
