
class AboutService {
  constructor() {
    this.about = [
      {
        name: 'Jose Gabriel Castillo Mosquera',
        profession: 'Full Stack Developer',
        photo: 'https://i.ibb.co/KLZv0Ht/IMG-20210101-001430.jpg',
        about_me:`Ingeniero de sistemas con base de conocimiento en desarrollo de software
        en diferentes lenguajes de programación y bases de datos relacionales con practica
        en proyectos personales, tengo experiencia en el rol analistade calidad QA en todo
        el ciclo de pruebas funcionales y en el area administrativa como cordinador de
        contratos.`,
        skills: ['Node.js', 'Javascript', 'HTML', 'CSS','React', 'MySQL', 'PostgreSQL', 'PHP',
                  'framework Yii 2.0', 'Symfony', 'Git'],
      },
    ];
  }

  async create(data) {
    const newAbout = {
      ...data
    }
    this.about[0].skills.push(data.skills)
    this.about.push(newAbout)
    return newAbout;
  }

  async createSkill(data) {
    this.about[0].skills.push(data.skills)
    console.log(this.about);
    return this.about;
  }

  async find() {
    console.log('JEJEJE',this.about);
    return this.about;

  }

  async findOne(id) {
    return { id };
  }

  async update(changes) {
    const about = this.about[0]
    this.about[0] = {
      ...about,
      ...changes
    }
    return this.about;
  }

  async delete() {
    delete  this.about[0];
    return this.about;
  }
}

module.exports = AboutService;
