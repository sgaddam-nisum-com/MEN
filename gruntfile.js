module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jsDir: 'public/js/',
        jsDistDir: 'public/dist/js/',
        cssDir: 'public/css/',
        scssDir: 'public/scss/',
        cssDistDir: 'public/dist/css/',
        pkg: grunt.file.readJSON('package.json'),        
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: ['<%=jsDir%>*.js'],
                dest: '<%=jsDistDir%><%= pkg.name.toLowerCase() %>.js'
            }
            /* ,
                        css: {
                            src: ['<%=cssDir%>*.css'],
                            dest: '<%=cssDistDir%><%= pkg.name.toLowerCase() %>.css'
                        } */
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name.toLowerCase() %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%=jsDistDir%><%= pkg.name.toLowerCase() %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        },        
        jshint: {
            all: ['gruntfile.js', 'config/**/*.js', 'app/**/*.js'],
            options: {
                "loopfunc": true,
                "shadow": true
            }
        },
        watch: {
            files: ['<%=jsDir%>*.js', '<%=scssDir%>*.scss'],
            tasks: ['concat', 'uglify', 'sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);


};
