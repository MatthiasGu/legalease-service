module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: ["airbnb-typescript", "prettier"],
  rules: {
    "no-underscore-dangle": "off",
  },
};
