const { src, dest, watch } = require("gulp");
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));


function css(done) {
    src('src/scss/**/*.scss') // Identificar el archivo de SASS 
        .pipe(plumber())
        .pipe(sass()) // Compilar
        .pipe(dest('build/css')) // Almacenar en el disco duro

    done();  // Callback que avisa a gulp cuando acabar la ejecucción
}

function dev(done) {
    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;