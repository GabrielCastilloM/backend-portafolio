
class AboutService {
  constructor() {
    this.about = [
      {
        name: 'Jose Gabriel Castillo Mosquera',
        profession: 'Full Stack Developer',
        photo: 'https://i.ibb.co/KLZv0Ht/IMG-20210101-001430.jpg',
        about_me:`Ingeniero de Sistemas con experiencia como Full Stack Developer, QA Tester y soporte técnico en aplicaciones empresariales.`,
        skills: {
          frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind'],
          backend: ['Node.js', 'PHP', 'Laravel', 'Symfony', 'Yii 2.0'],
          databases: ['MySQL', 'PostgreSQL'],
          tools: ['Git', 'Postman', 'Docker'],
          others: ['REST APIs', 'QA Testing', 'Jira']
        }              
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
    // console.log(this.about);
    return this.about;
  }

  async find() {
    // console.log('JEJEJE',this.about);
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
