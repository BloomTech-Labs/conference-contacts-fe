const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.js", "./public/index.html"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const inDevelopment = process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'development';

module.exports = {
  plugins: [
    require('postcss-import'),
    require("tailwindcss"),
    require('postcss-nested'),
    require("autoprefixer"),
    ...(!inDevelopment ? [purgecss] : [])
  ]
};
