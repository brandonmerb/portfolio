import techs from './techs'

const projectTypes = {
  Personal: 'Personal',
  Professional: 'Professional'
}

const projects = [
  {
    name: 'Portfolio Website',
    type: projectTypes.Personal,
    purpose: 'To show show off some skills, and document the rest',
    languages: [techs.languages.HTML, techs.languages.JavaScript, techs.languages.CSS],
    frameworks: [techs.frameworks.Vue, techs.frameworks.Vuex, techs.frameworks.Vuetify, techs.frameworks.VueRouter, techs.frameworks.Node],
    description: 'My portfolio website project is the very website you\'re looking at right now! It is built as a statically compiled web project using Vue (and supporting frameworks) for the UI.',
    github: 'https://github.com/brandonmerb/portfolio',
    hosted: 'https://hirebrandonerb.com'
  },
  {
    name: 'Mining Reinvestment Calculator',
    type: projectTypes.Personal,
    purpose: 'Exploring cryptocurrency mining profits',
    languages: [techs.languages.HTML, techs.languages.JavaScript, techs.languages.CSS],
    frameworks: [techs.frameworks.Vue, techs.frameworks.Vuex, techs.frameworks.Vuetify, techs.frameworks.VueRouter, techs.frameworks.Node],
    description: 'This project was intended to be an exploratory method of examining the profitability of mining cryptocurrency. This system originally began in a spreadsheet as a simple calculator. However as I continued to explore the problem domain I began to add complexity to the calculations by introducing multiple changing variables, and different possible scenarios. The complexity eventually ballooned to something that spreadsheets did not handle well. Given my profession I decided "What the heck? Let\'s build a small web app for this." Over the course of a couple days after work I built a mostly functional system that accomplished my primary goals. There are some quirks in this system given it was designed as a prototype to explore certain scenarios.',
    github: 'https://github.com/pending',
    hosted: 'https://something.com'
  },
  {
    name: 'Enterprise web application',
    type: projectTypes.Professional,
    purpose: 'A client web application for a fortune 500, designed to replace a legacy application',
    company: 'i2 Integration',
    languages: [techs.languages.HTML, techs.languages.JavaScript, techs.languages.CSS, techs.languages.CSharp, techs.languages.SQL],
    frameworks: [techs.frameworks.Vue, techs.frameworks.Vuex, techs.frameworks.Vuetify, techs.frameworks.VueRouter, techs.frameworks.EF, techs.frameworks.Bootstrap, techs.frameworks.DotNetNuke],
    description: 'The scope of work for this project was targeted at replacing the client\'s existing legacy application with all functionality updated to modern standards, and some additional functionality added. My role on this project was that of a Software Engineer. I was responsible for working with a team of developers to help plan, develop, and test functionality in the application. The general layout of the project was as follows: <br /><ul><li>DNN was used as the core CMS</li><li>Custom logic was written to integrate with DNN where needed</li><li>Vue and supporting frameworks powered the frontend</li><li>Most server actions were triggered through a Rest API call</li><li>Entity Framework was the primary method of interacting with the database</li></ul>'
  },
  {
    name: 'Enterprise Progressive Web App',
    type: projectTypes.Professional,
    purpose: 'A progressive web application built for a fortune 1000 client to replace their existing inventory, and point of sales systems',
    company: 'i2 Integration',
    languages: [techs.languages.HTML, techs.languages.JavaScript, techs.languages.CSS, techs.languages.CSharp, techs.languages.SQL],
    frameworks: [techs.frameworks.Vue, techs.frameworks.Vuex, techs.frameworks.Vuetify, techs.frameworks.VueRouter, techs.frameworks.EF, techs.frameworks.Bootstrap, techs.frameworks.DotNetNuke, techs.frameworks.PWA],
    description: 'The goal of this project was to build a system to replace some of the client\'s legacy systems, as well as integrate them. Some of the systems that were being replaced and integrated were: A point of sales system, an inventory management system, a time tracking system, an employee database, and a gratuity tracking system. Additionally parts of the application were required to have offline functionality available. This requirement was handled through the use of Service workers to make the application a Progressive Web App (PWA). My role on the project was that of a Software Engineer. As such I was responsible for working with a team to help plan, build, and test functionality. Additionally with the size of the team, I was periodically responsible for onboarding new employees and introducing them to the system.'
  }
]

export default projects
