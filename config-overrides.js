/* config-overrides.js */

module.exports = function override(config, env) {
    require("react-app-rewire-postcss")(config, {
        plugins: loader => [
            require("autoprefixer")({ grid: "no-autoplace" }),
            require("postcss-preset-env")({ stage: 0 }),
        ],
    });

    return config;
};
