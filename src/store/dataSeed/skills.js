import techs from './techs'

const skills = [
  {
    categoryName: 'Basic',
    skills: [
      { name: 'JavaScript', icon: require('../../assets/skills/js.svg'), yearsExperience: 8, description: 'For the past 8 years of my career I\'ve used JavaScript and/or TypeScript in every web facing project I\'ve done.', type: 'language', target: techs.languages.JavaScript.name },
      { name: 'CSS', icon: require('../../assets/skills/css.svg'), yearsExperience: 8, description: 'During my career I\'ve had plenty of opportunities to get deep into the style-weeds and apply Cascading Style Sheets to many websites.', type: 'language', target: techs.languages.CSS.name },
      { name: 'HTML5', icon: require('../../assets/skills/html5.svg'), yearsExperience: 8, description: 'All websites I\'ve built within the last 8 years have been HTML5 compliant.', type: 'language', target: techs.languages.HTML.name }
    ]
  },
  {
    categoryName: 'Frontend',
    skills: [
      { name: 'Vue', icon: require('../../assets/skills/vue.svg'), yearsExperience: 3, description: 'Vue is my go to framework when designing new sites. I often enhance this with frameworks like Vuetify, Vuex, and Vue-router', type: 'framework', target: techs.frameworks.Vue.name },
      { name: 'Angular', icon: require('../../assets/skills/angular.svg'), yearsExperience: 1, description: 'All front-end work in my most recent position is Angular based, powered by Rest APIs', type: 'framework', target: techs.frameworks.Angular.name },
      { name: 'Bootstrap', icon: require('../../assets/skills/bootstrap.svg'), yearsExperience: 6, description: 'A variety of projects I\'ve worked on both new, and old have used Bootstrap', type: 'framework', target: techs.frameworks.Bootstrap.name },
      { name: 'jQuery', icon: require('../../assets/skills/jquery.svg'), yearsExperience: 7, description: 'jQuery is one of the quintessential original JS frameworks. As such many projects I\'ve worked in use it', type: 'framework', target: techs.frameworks.jQuery.name }
    ]
  },
  {
    categoryName: 'Backend',
    skills: [
      { name: 'C#', icon: require('../../assets/skills/csharp.svg'), yearsExperience: 8, description: 'Almost all of my professional back-end development during my career has utilized C# and .NET', type: 'language', target: techs.languages.CSharp.name },
      { name: '.NET', icon: require('../../assets/skills/dotnet.svg'), yearsExperience: 8, description: 'Almost all of my professional back-end development during my career has utilized C# and .NET', type: 'framework', target: techs.frameworks.DotNet.name },
      { name: 'DotNetNuke (DNN)', icon: require('../../assets/skills/dnn.svg'), yearsExperience: 2, description: 'A newer addition to my skill repetoire. Many projects during my time at i2 Integration utilized DotNetNuke', type: 'framework', target: techs.frameworks.DotNetNuke.name },
      { name: 'Rest APIs', icon: require('../../assets/skills/rest-api.svg'), yearsExperience: 6, description: 'Rest APIs (in my opinion) help facilitate cleaner user experiences with responsive UIs. As such, this is one of my favorite concepts to utilize', type: 'concept', target: 'Rest APIs' }
    ]
  },
  {
    categoryName: 'Database',
    skills: [
      { name: 'MSSQL', icon: require('../../assets/skills/mssql.svg'), yearsExperience: 8, description: 'Given my experience with Microsoft code ecosystem, most of my projects have utilized MSSQL for compatibility', type: 'language', target: techs.languages.SQL.name },
      { name: 'MySQL', icon: require('../../assets/skills/mysql.svg'), yearsExperience: 4, description: 'With MySQL being one of the most popular databases out there, several small projects I\'ve maintained have used it.', type: 'language', target: techs.languages.SQL.name },
      { name: 'Entity Framework', icon: require('../../assets/skills/entityframework.svg'), yearsExperience: 8, description: 'Entity Framework\'s ORM is a pleasure to work with. Many of my .NET projects utilize entity framework for ORM capabilities and more', type: 'framework', target: techs.frameworks.EF.name }
    ]
  },
  {
    categoryName: 'Tools',
    skills: [
      { name: 'Visual Studio', icon: require('../../assets/skills/visualstudio.svg'), yearsExperience: 8, description: 'Visual Studio is my IDE of choice when it comes to running or debugging anything C# or .NET' },
      { name: 'Visual Studio Code', icon: require('../../assets/skills/visualstudiocode.svg'), yearsExperience: 4, description: 'Visual Studio Code is my IDE of choice for pretty much anything else' },
      { name: 'SQL Server Managment Studio', icon: require('../../assets/skills/mssql.svg'), yearsExperience: 8, description: 'SQL Server Management Studio often is my preferred tool when doing any work with MSSQL databases' },
      { name: 'Git', icon: require('../../assets/skills/git.svg'), yearsExperience: 8, description: 'Pretty much every project I\'ve ever worked with has used Git for version control' }
    ]
  },
  {
    categoryName: 'Mobile',
    skills: [
      { name: 'Xamarin', icon: require('../../assets/skills/xamarin.svg'), yearsExperience: 1, description: 'During my time at TeamDDM I had the opportunity to assist in building a cross platform Augmented Reality app powered by Xamarin' },
      { name: 'Swift', icon: require('../../assets/skills/swift.svg'), yearsExperience: 1, description: 'One of my core duties at TeamDDM was maintaing and updating existing iOS applications. Swift was my preferred language of choice when possible' },
      { name: 'Objective-C', icon: require('../../assets/skills/objectivec.svg'), yearsExperience: 1, description: 'One of my core duties at TeamDDM was maintaing and updating existing iOS applications. A significant amount of our legacy code bases were based in Objective-C. As such, I frequently maintained code in Objective-C' },
      { name: 'Universal Windows Platform (UWP)', icon: require('../../assets/skills/uwp.svg'), yearsExperience: 1, description: 'The primary application I was responsible for at TeamDDM was a UWP application. During my time there I implemented many new features and maintained the app' }
    ]
  }
]

export default skills
