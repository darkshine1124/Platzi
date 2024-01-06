class learningPath {
    constructor ({
        nombre,
        id,
        cursos = [],
        cursosCompletados = 0
    })
    {
        this.nombre =  nombre,
        this.id = id,
        this.cursos = cursos,
        this.cursosCompletados = cursosCompletados,
        this.porcentajeCompletado = this.operacionPorcentajeCompletado()
    }

    operacionPorcentajeCompletado () {
        if (cursosCompletados === 0) return 0;
        return (cursosCompletados/this.cursos.length) * 100;
    }
}

const escuelaWeb = new learningPath();
const escuelaData = new learningPath();
const escuelaVgs = new learningPath();


class alumnos {
    constructor({
        nombre,
        email,
        usuario,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.nombre = nombre
        this.email = email
        this.usuario = usuario
        this.socialMedia = {
            twitter,
            facebook,
            instagram
        }
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }
}