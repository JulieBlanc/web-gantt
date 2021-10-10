
/* Start and end date of the calendar, format: YYYY-MM-DD  */
const calendarStart = '2021-10-10';
const calendarEnd = '2022-05-31';

/* Title in the header */
const title = 'Web Gantt (exemple)';

/* Language / supported: french ('fr'), english ('en)  */
const langSite = 'en';

/* Scroll direction of the page: "scrollY", "scrollX" or "both" */ 
const scrollDirection = "scrollY"

/* Color of types, add one item for each type (hex or rgb) 
ex: if you define 6 type in your projets, add 6 color/lines */
let colorType = [
    '243, 131, 243', 
    '60, 162, 246',
    '#fba500', 
    '15, 204, 125',
    '100, 100, 100'
];


/* Define the step of your project, format date: YYYY-MM-DD */
let projects = [
    {
        name: "Seminar",
        type: "other",
        start: "2021-10-14",
        end: "",
    },
    {
        name: "[Part 1] experimentation",
        type: "experimentations",
        start: "2021-10-11",
        end: "2021-10-22",
    }, 
    {
        name: "[Part 1] writing",
        type: "writing",
        start: "2021-10-18",
        end: "2021-10-22",
    },
    {
        name: "Article title",
        type: "writing",
        start: "2021-10-11",
        end: "2021-10-22",
    },
    {
        name: "Paged.js implementation",
        type: "workflow",
        start: "2021-10-25",
        end: "2021-10-26",
    },
    {
        name: "Workshop",
        type: "other",
        start: "2021-10-27",
        end: "2021-10-29",
    },
    {
        name: "[Part 2] experimentations",
        type: "experimentations",
        start: "2021-11-08",
        end: "2021-11-12",
    },
    {
        name: "[Part 2] writing",
        type: "writing",
        start: "2021-11-08",
        end: "2021-11-19",
    },
    {
        name: "Seminar preparation",
        type: "other",
        start: "2021-11-22",
        end: "2021-11-23",
    },
    {
        name: "Seminar",
        type: "other",
        start: "2021-11-24",
        end: "2021-11-26",
    },
    {
        name: "Article Title",
        type: "writing",
        start: "2021-11-28",
        end: "2021-12-6",
    },
    {
        name: "Article Title deadline",
        type: "deadline",
        start: "2021-12-06",
        end: ""
    },
    {
        name: "[Part 2] writing",
        type: "writing",
        start: "2021-12-07",
        end: "2021-12-22",
    },
    {
        name: "[Part 1 + 2] deadline",
        type: "deadline",
        start: "2021-12-22",
        end: ""
    },
    {
        name: "[Part 3] experimentations",
        type: "experimentations",
        start: "2022-01-03",
        end: "2022-01-07"
    },
    {
        name: "[Part 1]B writing",
        type: "writing",
        start: "2022-01-05",
        end: "2022-01-11",
    },
    {
        name: "[Part 4] experimentations",
        type: "experimentations",
        start: "2022-01-10",
        end: "2022-01-14"
    },
    {
        name: "[Part 3] + [Part 4] writing",
        type: "writing",
        start: "2022-01-12",
        end: "2022-01-28"
    },
    {
        name: "[Part 3] deadline",
        type: "deadline",
        start: "2022-01-31",
        end: ""
    },
    {
        name: "Workshop",
        type: "other",
        start: "2022-02-01",
        end: "2022-02-04"
    },
    {
        name: "[Part 4] writing",
        type: "writing",
        start: "2022-02-07",
        end: "2022-02-18"
    },
    {
        name: "[Part 4] 1er rendu",
        type: "deadline",
        start: "2022-02-18",
        end: ""
    },
    {
        name: "[Part 5] + [Part 1]B + intro",
        type: "writing",
        start: "2022-02-21",
        end: "2022-03-18"
    },
    {
        name: "Manuscrit 1dt draft",
        type: "deadline",
        start: "2022-03-18",
        end: ""
    },
    {
        name: "Workflow",
        type: "workflow",
        start: "2022-02-14",
        end: "2022-02-25"
    },
    {
        name: "image processing",
        type: "workflow",
        start: "2022-02-28",
        end: "2022-03-09"
    },
    {
        name: "Layout Paged.js",
        type: "workflow",
        start: "2022-03-07",
        end: "2022-03-18"
    },
    {
        name: "Prototype",
        type: "workflow",
        start: "2022-03-21",
        end: "2022-03-30"
    },
    {
        name: "Workshop",
        type: "other",
        start: "2022-03-28",
        end: "2022-03-30"
    },
    {
        name: "Web site",
        type: "workflow",
        start: "2022-03-28",
        end: "2022-04-22"
    },
    {
        name: "Rewriting / corrections",
        type: "writing",
        start: "2022-04-11",
        end: "2022-05-18"
    },
    {
        name: "Book + website",
        type: "deadline",
        start: "2022-05-06",
        end: ""
    },

    {
        name: "Impression",
        type: "workflow",
        start: "2022-05-19",
        end: "2022-05-24"
    },
    
    
   

  ];


  /* Define your holidays */
  let holidays = [
    {
        start: "2021-10-30",
        end: "2021-11-07",
    },
    {
        start: "2021-12-23",
        end: "2022-01-02"
    },

  ];


  /* Dimensions style (values are in pixels)*/

  let dimensions = [
    {
        /* Height of the header page */
        name: "header-height",
        value: "60",
    },
    {
        /* Width of the case of one day */
        name: "day-width",
        value: "18",
    },
    {
        /* Width of the list of items*/
        name: "project-width",
        value: "340",
    },
    {
        /* Height of each items in the list*/
        name: "project-height",
        value: "40",
    },
    {
        /* Height of colored blocks of the items */
        name: "project-height-span",
        value: "24",
    },
  ]