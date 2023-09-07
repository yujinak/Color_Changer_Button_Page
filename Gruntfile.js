module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        options: {
          compress: true,
        },
        files: {
          "dev/styles/main.min.css": "src/styles/main.less",
        },
      },
    },
    watch: {
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"],
      },
      html: {
        files: ["src/index.html"],
        tasks: ["htmlmin:dev", "replace:dev"],
      },
      javascript: {
        files: ["src/scripts/main.js"],
        tasks: ["uglify"],
      },
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: "ENDERECO-CSS",
              replacement: "./styles/main.min.css",
            },
            {
              match: "ENDERECO-JS",
              replacement: "./scripts/main.min.js",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["prebuild/index.html"],
            dest: "dev/",
          },
        ],
      },
    },
    uglify: {
      target: {
        files: {
          "dev/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
    htmlmin: {
      dev: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: { "prebuild/index.html": "src/index.html" },
      },
    },
    clean: ["prebuild"],
  });

  //Carregamento de plugins
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-replace");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-clean");

  //Tarefas
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("rodar", [
    "less",
    "htmlmin",
    "uglify",
    "replace",
    "clean",
  ]);
};
