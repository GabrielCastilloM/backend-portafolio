
class AboutService {
  constructor() {
    this.about = [
      {
        name: 'Jose Gabriel Castillo',
        profession: 'Full Stack Developer',
        photo: 'https://i.ibb.co/KLZv0Ht/IMG-20210101-001430.jpg',
        about_me:'me gustan mucho las tecnologías, amo hacer desarrollo web y confío en la colaboración entre comunidades para lograr un mejor ecosistema en el ámbito de la tecnología.',
        skills: ['Javascript', 'NodeJs', 'ReactJS', 'HTML', 'CSS', 'MySQL'],
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
