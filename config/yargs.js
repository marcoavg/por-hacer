const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de por hacer '
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'desc de actualizar'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar reg', {
        descripcion
    })
    .help()
    .argv









module.exports = {
    argv
}