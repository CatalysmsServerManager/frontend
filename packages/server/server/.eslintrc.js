module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-var-requires": "off"
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        "node": true,
        "mocha": true
    },
};