module.exports = {
    packages: [
        'eslint',
        'eslint-plugin-import',
        'eslint-plugin-react',
        'eslint-plugin-jsx-a11y',
        'eslint-config-airbnb',
    ],
    // return eslintrc as string or JSON object
    eslintrc: `{
  "extends": "airbnb",
  "env": {
    "browser": true,
    "amd": true,
    "es6": true
  },
  "rules": {
    "indent": [
      "warn",
      4
    ]
  }
}
`,
    editorconfig: `root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
# editorconfig-tools is unable to ignore longs strings or urls
max_line_length = off
`,
};
