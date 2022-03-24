
const languages = {
  CSharp: { name: 'C#', id: 'CSharp' },
  HTML: { name: 'HTML5', id: 'HTML' },
  CSS: { name: 'CSS', id: 'CSS' },
  JavaScript: { name: 'JavaScript', id: 'JavaScript' },
  TypeScript: { name: 'TypeScript', id: 'TypeScript' },
  SQL: { name: 'SQL', id: 'SQL' }
}
const JAMStack = [languages.JavaScript, languages.TypeScript]
const frameworks = {
  EF: {
    name: 'Entity Framework',
    languages: [languages.CSharp]
  },
  Node: {
    name: 'NodeJS',
    languages: JAMStack
  },
  Vue: {
    name: 'Vue',
    languages: JAMStack
  },
  Vuetify: {
    name: 'Vuetify',
    languages: JAMStack
  },
  Vuex: {
    name: 'Vuex',
    languages: JAMStack
  },
  VueRouter: {
    name: 'Vue Router',
    languages: JAMStack
  },
  Angular: {
    name: 'Angular',
    languages: JAMStack
  },
  Bootstrap: {
    name: 'Bootstrap',
    languages: [languages.JavaScript, languages.HTML, languages.CSS]
  },
  DotNetNuke: {
    name: 'DotNetNuke',
    languages: [languages.CSharp]
  },
  PWA: {
    name: 'Progressive Web App (PWA)',
    languages: [languages.JavaScript]
  },
  DotNet: {
    name: 'DotNet',
    languages: [languages.CSharp]
  },
  jQuery: {
    name: 'jQuery',
    languages: [languages.JavaScript]
  }
}
const concepts = [
  'Rest APIs',
  'MVC',
  'Multi-tier project structure',
  'Encapsulation'
]

export default {
  languages: languages,
  frameworks: frameworks,
  concepts: concepts
}
