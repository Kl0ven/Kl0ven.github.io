const scope = [
    "post",
    "assets",
    "jekyll",
    "plugin"
];

module.exports = {
    extends: ["@commitlint/config-angular"],
    rules: {
        "scope-enum": [2, "always", scope],
    },
};
