const { src, dest, watch } = require("gulp");

// CSS

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));

// Imagenes

const webp = require('gulp-webp');

function css(done) {
    src('src/scss/**/*.scss') // Identificar el archivo de SASS 
        .pipe(plumber())
        .pipe(sass()) // Compilar
        .pipe(dest('build/css')) // Almacenar en el disco duro

    done();  // Callback que avisa a gulp cuando acabar la ejecucción
}

function versionWebp(done) {
    src('src/img/**/*.{jpg, png}')

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    done();
}

exports.css = css;
exports.dev = dev;