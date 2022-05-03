const boom = require('@hapi/boom');

const pool = require('../libs/mysql.pool');
// Get a Promise wrapped instance of that pool
const promisePool = pool.promise();

class ProyectosService {
  constructor() {
    this.proyectos = [
      {
        id: 1,
        name: "Curso JavaScript",
        description: "Utilice JavaScript vanilla, HTML y CSS para trabajar con los estilos",
        image: "https://i.ibb.co/6mJL417/Screenshot-1.png",
        link : "https://gabrielcastillom.github.io/platzi-curso-practico-javascript/"
      },
      {
        id: 2,
        name: "Juego Simon Dice",
        description: "Utilice JavaScript vanilla, HTML y CSS",
        image: "https://i.ibb.co/H7Xnnpx/Screenshot-2.jpg",
        link : "https://gabrielcastillom.github.io/JuegoSimonDice//"
      },
      {
        id: 3,
        name: "Portafolio",
        description: "Cree una api restfull en node.js y mysql en el Backend subido a heroku. el Frontend en react.js deploy en vercel",
        image: "https://i.ibb.co/ZzvHv2S/Portafolio.jpg",
        link : "https://frontend-portafolio-gabriel.vercel.app/"
      },
      {
        id: 4,
        name: "Lazy Loading",
        description: "Utilice HTML y CSS HTML y CSS para trabajar con los estilos utilize Snowpack Tailwind",
        image: "https://i.ibb.co/hYjXjXv/Lazy-Loading.jpg",
        link: "https://gabrielcastillom.github.io/lazyLoading/"
      },
      {
        id: 5,
        name: "Video y Clima",
        description: "Utilice JavaScript, HTML y CSS para trabajar con los estilos utilize Snowpack Tailwind y consumi la api de api.openweathermap",
        image: "https://i.ibb.co/cD9LwPT/Video-Clima.jpg",
        link : "https://gabrielcastillom.github.io/videoClima/"
      },
      {
        id: 6,
        name: "curso React basico",
        description: "Utilice React para consumir api de rick-morty ",
        image: "https://i.ibb.co/Xs6Mzdt/Rick-Morty.jpg",
        link : "https://rick-morty-jgabrielcastillo.vercel.app/"
      },
    ];
  }

  async create(data) {
    let sql = `INSERT INTO tasks (name, description, image, link) VALUES (?, ?, ?, ?);`;
    // Value to be inserted
    const values = [];
    values.push(data.name, data.description, data.image, data.link )
    // Creating queries
    const rta = await promisePool.query(sql, values);
      const newProyecto = {
        id: rta[0].insertId,
        ...data
      }
      return newProyecto;
  }

  async find() {
    //const [rows] = await promisePool.query("SELECT * FROM tasks");
    //return rows;
    return this.proyectos;
  }

  async findOne(id) {
    const [rows] = await promisePool.execute('SELECT * FROM tasks WHERE id = ?', [id]
    );
    if (rows.length === 0) {
      throw boom.notFound('Proyecto no encontrado!');
    }
    return rows;
  }

  async update(id, changes) {
    let sql = `UPDATE tasks set ?  WHERE id = ${id}`;
    await promisePool.query(sql, [changes]);
    const proyecto = await this.findOne(id);
    return proyecto
  }

   async delete(id) {
    await this.findOne(id);
    let sql = `DELETE FROM tasks WHERE id = ${id}`;
    await promisePool.query(sql);
    return `Proyecto eliminado satisfactoriamente con id = ${id}`;
  }
}

module.exports = ProyectosService;
