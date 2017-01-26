module.exports =  function(grunt){
    //Configuration
    grunt.initConfig({
        sass:{
            build:{
                files:[{
                    src: 'dist/css/sass/styles.scss',
                    dest:'dist/css/sass/style.css'
                }]
            }
        },
        concat:{
            js:{
                src:['bower_components/jquery/dist/jquery.js','bower_components/bootstrap/dist/js/bootstrap.js','dist/js/main.js'],
                dest:'dist/js/scripts.js'
                },
            css:{
                src:['bower_components/bootstrap/dist/css/bootstrap.css','dist/css/sass/style.css'],
                dest:'dist/css/all.css'
            }
        },
        cssmin:{
            build:{
                files:[{
                    src:'dist/css/all.css',
                    dest:'build/assets/css/all.min.css'
                }]
            }
        },
        uglify:{
            build:{
                files:[{
                    src: 'dist/js/scripts.js',
                    dest:'build/assets/js/scripts.min.js'
                }]
            }
        },
        copy:{
            bootstrapFonts:{
                files:[
                    {
                        expand:true,flatten:true,filter: 'isFile',
                        src:['bower_components/bootstrap/fonts/**'],
                        dest:'build/assets/fonts'

                    }
                ]
            }

        },
        watch:{
            sass:{
                files:['dist/css/sass/*.scss'],
                tasks:['sass','concat:css','cssmin']
            },
            js:{
                files:['dist/js/*.js'],
                tasks:['concat:js','uglify']
            }
        }

    });
    //Load plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register task
    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    grunt.registerTask('css-minify',['cssmin']);
    grunt.registerTask('sass-css',['sass']);
    grunt.registerTask('js-minify',['uglify']);
    grunt.registerTask('copy-bootstrap-font',['copy:bootstrapFonts']);
    grunt.registerTask('watch-for-everything',['watch']);

};