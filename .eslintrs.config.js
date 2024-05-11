import pluginVue from 'eslint-plugin-vue';
import operatorLinebreak from 'eslint-plugin-vue/lib/rules/operator-linebreak';

export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      // override/add rules settings here, such as:
      "no-unused-vars": "off",
      "unicorn/consistent-line-endings": ["error", "LF"],
      operatorLinebreak: 0,
    },
  },
];
