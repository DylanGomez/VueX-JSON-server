module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],

    settings: {
        'import/resolver': {
            webpack: {
                config: require.resolve('@vue/cli-service/webpack.config.js'),
            },
        },
    },

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        semi: ['error', 'never'],
        'vue/html-indent': ['error', 4],
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            // CallExpression: {
            // parameters: null,
            // },
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
        }],
        'no-mixed-operators': [
            'error',
            {
                allowSamePrecedence: true,
            },
        ],
        'max-len': 0,
        'multiline-ternary': ['error', 'always-multiline'],
        // eslint-plugin-vue
        'vue/max-len': ['error', {
            code: 120,
            template: 200,
        }],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'never',
                component: 'any',
            },
        }],
        'vue/max-attributes-per-line': [2, {
            singleline: 2,
            multiline: {
                max: 1,
                allowFirstLine: true,
            },
        }],
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/order-in-components': ['error', {
            order: [
                'el',
                'name',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                'components',
                'directives',
                'filters',
                'extends',
                'mixins',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'static',
                'data',
                'validations',
                'computed',
                'watch',
                'LIFECYCLE_HOOKS',
                'methods',
                ['template', 'render'],
                'renderError',
            ],
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'always',
        }],
    },

    parserOptions: {
        parser: 'babel-eslint',
    },

    overrides: [{
        files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
        env: {
            jest: true,
        },
    }],
}
