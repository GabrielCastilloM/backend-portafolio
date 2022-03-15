const res = require("express/lib/response");

class AboutService {
  constructor() {
    this.cursos = [
      {
        id: 1,
        name: "Proyecto 1",
        description: "Utilice JavaScript, HTML y CSS para trabajar con los estilos utilize Snowpack Tailwind y consumi la api de api.openweathermap",
        image: "https://i.ibb.co/KLZv0Ht/IMG-20210101-001430.jpg",
        link : "https://gabrielcastillom.github.io/videoClima/"
      },
      {
        id: 2,
        name: "Proyecto 2",
        description: "Utilice HTML y CSS HTML y CSS para trabajar con los estilos utilize Snowpack Tailwind",
        image: "https://i.ibb.co/KLZv0Ht/IMG-20210101-001430.jpg",
        link: "https://gabrielcastillom.github.io/lazyLoading/"
      }
    ];
  }

  async create(data) {
    const newCurso = {
      ...data
    }
    this.cursos.push(newCurso)
    return newCurso;
  }

  async find() {
    return this.cursos;
  }

  async findOne(id) {
    const index = await this.cursos.findIndex(item => item.id == id);
    return this.cursos[index];
  }

  async update(id, changes) {
    const index = this.cursos.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('¡Curso no encontrado!');
    }
    const curso = this.cursos[index];
    this.cursos[index] = {
      ...curso,
      ...changes
    }
    return this.cursos[index];
  }

  async delete(id) {
    const index = this.cursos.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('¡Curso no encontrado!');
    }
    this.cursos.splice(index, 1);
    console.log(index);
    return this.cursos;
  }
}

module.exports = AboutService;
