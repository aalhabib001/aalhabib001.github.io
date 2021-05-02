/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Abdullah AL Habib",
  title: "Hi all, I'm Habib",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building Web backend Application using Java-Spring Boot and familier with " +
    "ReactJs, ExpressJs, NodeJs, Flutter Frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/18dhrBtPA_BafoSi_5OL-_WiSbKRQ1Kz4/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aalhabib001",
  linkedin: "https://www.linkedin.com/in/aalhabib001/",
  gmail: "aalhabib001@gmail.com",
  gitlab: "https://gitlab.com/aalhabib001",
  facebook: "https://www.facebook.com/aalhabib001",
  medium: "https://medium.com/@aalhabib001",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Web Backend Engineer & familiar with frontend and cross platform app development",
  skills: [
    emoji(
      "⚡ Develop highly interactive Web Backend Applications with Java-Spring-boot"
    ),
    emoji("⚡ Competitive programmer. Solves many problems in online judges"),
    emoji("⚡ Frontend Development using react"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C Programming",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring-Boot",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Dart-Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Daffodil International University",
      logo: require("./assets/images/diulogo.png"),
      subHeader: "B.Sc in Software Engineering with Major in Cyber Security",
      duration: "September 2018 - August 2022",
      desc: " ",
      descBullets: [
        "ACM Programming Contest Trainer, DIU SWE Programming Community - Permanent Campus."
      ]
    },
    {
      schoolName: "Milestone Collage",
      logo: require("./assets/images/milestone.jpg"),
      subHeader: "Science",
      duration: "July 2016 - May 2018",
      desc: " ",
      descBullets: [

      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Cross Platform App Development",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/14.PNG"),
      projectName: "Dokanee",
      projectDesc: "A Platform to create E-Commerce website and Point of sale Easily.",
      footerLink: [
        {
          name: "Backend Repo",
          url: "https://github.com/Dokanee/Dokanee-Backend-Monolithic"
        },
        {
          name: "Live Documentation",
          url: "https://dokanee-backend-monolithic.herokuapp.com/swagger-ui.html"
        }
        //  you can add extra buttons here.
      ], technologies: [
        {
          techName: "Java"
        },
        {
          techName: "Spring Boot"
        },
        {
          techName: "Spring Security"
        },
        {
          techName: "PGSQL"
        },
        {
          techName: "Rest API"
        },
        {
          techName: "JWT"
        },
        {
          techName: "Deployed to Heroku"
        }
      ],
      features: [
        {
          featureName: "Create Store"
        },
        {
          featureName: "Category Add/Edit"
        },
        {
          featureName: "POS"
        },
        {
          featureName: "Manage Order"
        },
        {
          featureName: "Manage Customer"
        },
        {
          featureName: "Add employee"
        },
        {
          featureName: "Place Order"
        }
      ]
    },
    {
      image: require("./assets/images/12.PNG"),
      projectName: "Zaatun",
      projectDesc: "A Single Vendor E-Commerce.",
      footerLink: [
        {
          name: "Backend Repo",
          url: "https://github.com/Dreamwinners-Technologies/zaatun-backend"
        },
        {
          name: "Live Documentation",
          url: "https://zaatun-backend.herokuapp.com/swagger-ui.html"
        }
      ],
      technologies: [
        {
          techName: "Java"
        },
        {
          techName: "Spring Boot"
        },
        {
          techName: "Spring Security"
        },
        {
          techName: "PGSQL"
        },
        {
          techName: "Rest API"
        },
        {
          techName: "JWT"
        },
        {
          techName: "Deployed to Heroku"
        }
      ],
      features: [
        {
          featureName: "Add/Edit Product"
        },
        {
          featureName: "Category Add/Edit"
        },
        {
          featureName: "Affiliate functionality"
        },
        {
          featureName: "Manage Order"
        },
        {
          featureName: "Manage Customer"
        },
        {
          featureName: "Add employee"
        }
      ]
    },
    {
      image: require("./assets/images/11.PNG"),
      projectName: "Fixman",
      projectDesc: "A Website for Computer Fixing Service Provider.",
      footerLink: [
        {
          name: "Backend Repo",
          url: "https://github.com/aalhabib001/Fixman/tree/master/fixman-frontend"
        },
        {
          name: "Frontend Repo",
          url: "https://github.com/aalhabib001/Fixman/tree/master/fixman-frontend"
        },
        {
          name: "Live Site",
          url: "https://fixman-phero.netlify.app/"
        }
      ],
      technologies: [
        {
          techName: "NodeJs"
        },
        {
          techName: "ExpressJs,"
        },
        {
          techName: "MongoDB"
        },
        {
          techName: "Mongoose"
        },
        {
          techName: "Rest API"
        },
        {
          techName: "ReactJs"
        },
        {
          techName: "Bootstrap"
        },
        {
          techName: "Firebase"
        }
      ],
      features: [
        {
          featureName: "Add/Edit Services"
        },
        {
          featureName: "Take service"
        },
        {
          featureName: "Give Review"
        },
        {
          featureName: "Admin Dashboard"
        },
        {
          featureName: "User Dashboard"
        },
        {
          featureName: "Social Media Login"
        },
        {
          featureName: "Single Page App"
        }
      ]
    },
    {
      image: require("./assets/images/171.PNG"),
      projectName: "Bookommerce",
      projectDesc: "A Website to buy books.",
      footerLink: [
        {
          name: "Backend Repo",
          url: "https://github.com/aalhabib001/Bookommerce-An-Online-Book-Shop/tree/master/bookommerce-backend"
        },
        {
          name: "Frontend Repo",
          url: "https://github.com/aalhabib001/Bookommerce-An-Online-Book-Shop/tree/master/bookommerce-frontend"
        },
        {
          name: "Live Site",
          url: "https://bookommerce.netlify.app/"
        }
      ],
      technologies: [
        {
          techName: "NodeJs"
        },
        {
          techName: "ExpressJs,"
        },
        {
          techName: "MongoDB"
        },
        {
          techName: "Mongoose"
        },
        {
          techName: "Rest API"
        },
        {
          techName: "ReactJs"
        },
        {
          techName: "Bootstrap"
        },
        {
          techName: "Firebase"
        }
      ],
      features: [
        {
          featureName: "Add/Edit Books"
        },
        {
          featureName: "Place Order"
        },
        {
          featureName: "Show/Search Books"
        },
        {
          featureName: "Dashboard"
        },
        {
          featureName: "Social Media Login"
        },
        {
          featureName: "Single Page App"
        }
      ]
    },
    {
      image: require("./assets/images/13.PNG"),
      projectName: "Need Doctors",
      projectDesc: "An App for Drug and Doctors Directory.",
      footerLink: [
        {
          name: "Backend Repo",
          url: "https://github.com/Dreamwinners-Technologies/Need-Doctors-Backend"
        },
        {
          name: "Live Documentation",
          url: "http://need-doctors-backend.southeastasia.cloudapp.azure.com:8100/swagger-ui.html"
        },
        {
          name: "App Repo",
          url: "https://github.com/aalhabib001/To-Let-App-Android"
        },
        {
          name: "App Link",
          url: "https://a2sdms.com/"
        }
      ],
      technologies: [
        {
          techName: "Java"
        },
        {
          techName: "Spring Boot"
        },
        {
          techName: "Spring Security,"
        },
        {
          techName: "PGSQL"
        },
        {
          techName: "Rest API"
        },
        {
          techName: "JWT"
        },
        {
          techName: "Azure VM"
        },
        {
          techName: "Azure Blob Storage"
        }
      ],
      features: [
        {
          featureName: "Drug List"
        },
        {
          featureName: "Doctors List"
        },
        {
          featureName: "Add/Edit Doctor"
        },
        {
          featureName: "Manage Drugs"
        },
        {
          featureName: "Manage moderator"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Got Appreciation",
      subtitle: "For Contribution on Competitive Programming",
      image: require("./assets/images/ac1.jpg"),
      footerLink: [
        // { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "1st Postion",
      subtitle: "4th DIU SWE Intra Dept Programming Contest, Summer-19",
      image: require("./assets/images/ac2.png"),
      footerLink: [{name: "Contest Standing", url: "https://toph.co/c/4th-diu-swe-intra-2019-j/standings"}]
    },
    {
      title: "9th Position",
      subtitle: "Takeoff Programming Contest, Spring-19",
      image: require("./assets/images/ac4.jpg"),
      footerLink: [
        // { name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+88-01515-212687",
  email_address: "aalhabib001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "aalhabib001", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
