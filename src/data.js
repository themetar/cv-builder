export const data = [
    {
      type: "personal",
      id: "personal",
      data: {
        name: "Harry James Potter",
        about: "Wizard. Head of the Department of Magical Law Enforcement. The boy who lived.",
        contactList: [
          {
            type: "email", value: "hpotter@mom.gov.mag",
          },
          {
            type: "address", value: "Some Street 100, London, England, Great Britain",
          },
          {
            type: "tel", value: "555-666-444",
          },
          {
            type: "web", value: "https://harrypotter.fandom.com/wiki/Harry_Potter",
          },
        ],
      },
    },
    {
      type: "skills",
      id: "skills",
      title: "Skills",
      data: [
        "Defence against Dark Arts",
        "Advanced broomstick piloting",
        "Care of Magical Animals",
        "Parseltongue",
        "MS Office",
      ],
    },
    {
      type: "chronicle",
      id: "education",
      title: "Education",
      data: [
        {
          from: "1991",
          until: "1997",
          where: "Hogwarts School of Witchcraft and Wizardry",
          what: "Graduate",
        },
      ]
    },
    {
      type: "chronicle",
      id: "work",
      title: "Work",
      data: [
        {
          from: "2017",
          until: "",
          where: "British Ministry of Magic",
          what: "Head of the Department of Magical Law Enforcement",
          description: "Oversees all operations of all subsections of the Department",
        },
        {
          from: "2007",
          until: "2016",
          where: "British Ministry of Magic",
          what: "Auror",
          description: "Revolutionised the Auror Department at the Ministry of Magic",
        },
      ]
    },
    {
      type: "otherSkills",
      id: "other",
      title: "Other Skills",
      data: [
        {
          topic: "Quidditch",
          details: "Won two Quidditch cups."
        },
      ]
    },
  ];
