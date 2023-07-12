module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: ["airbnb-typescript", "prettier", "plugin:import/recommended"],
  rules: {
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [0],
  },
};
