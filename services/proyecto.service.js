const boom = require('@hapi/boom');

class ProyectosService {
  constructor() {
    this.proyectos = [
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
    this.proyectos.push(newCurso)
    return newCurso;
  }

  async find() {
    return this.proyectos;
  }

  async findOne(id) {
    const proyecto = await this.proyectos.find(item => item.id == id);
    if (!proyecto) {
      throw boom.notFound('product not found')
    }
    return proyecto;
  }

  async update(id, changes) {
    const index = this.proyectos.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Proyecto no encontrado!');
    }
    const curso = this.proyectos[index];
    this.proyectos[index] = {
      ...curso,
      ...changes
    }
    return this.proyectos[index];
  }

  async delete(id) {
    const index = this.proyectos.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Proyecto no encontrado!');
    }
    this.proyectos.splice(index, 1);
    return this.proyectos;
  }
}

module.exports = ProyectosService;
