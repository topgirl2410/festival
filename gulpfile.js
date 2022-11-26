const { src, dest } = require("gulp")
const sass = require('sass')

function css(done) {
    src('src/scss/app.scss') // Identificar el archivo de SASS 
        .pipe(sass()) // Compilar
        .pipe(dest('build/css')) // Almacenar en el disco duro

    done();  // Callback que avisa a gulp cuando acabar la ejecucción
}

exports.css = css;