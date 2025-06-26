import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import jsImg from "./assets/js.png";
import reactImg from "./assets/react.png";

export const CORE_SKILLS = [
    {
        title : "HTML",
        description : "The Standard markup language for Web pages.",
        image : htmlImg
    },{
        title : "CSS",
        description : "Used to style an HTML document.",
        image : cssImg
    },{
        
        title : "JavaScript",
        description : "The programming language of the Web.",
        image : jsImg      
    },
    {
        
        title : "ReactJs",
        description : "A JavaScript library for building user interfaces.",
        image : reactImg
          
    }
];

export const EXAMPLES = {
  Project1: {
    title: 'To-Do App',
    description:
      'A basic to-do list app to manage daily tasks. Helps you understand React components and event handling.',
    features: [
      'Add and delete tasks',
      'Mark tasks as complete',
      'Clear all tasks'
    ],
  },
  Project2: {
    title: 'Greeting Card Generator',
    description:
      'A dynamic greeting message generator that introduces you to JSX and rendering dynamic values.',
    features: [
      'Enter your name to personalize greeting',
      'Live preview of JSX output',
      'Styling using inline CSS or className',
    ],
  },
  Project3: {
    title: 'User Profile Card',
    description:
      'A reusable component to display user information, perfect for learning how props work.',
    features: [
      'Reusable card layout',
      'Pass data as props (name, age, bio)',
      'Conditional rendering of info',
    ],
  },
  Project4: {
    title: 'Show/Hide Details App',
    description:
      'An interactive app to toggle visibility of content using state. Helps you learn useState effectively.',
    features: [
      'Show/hide a message with a button',
      'Use React useState hook',
      'Simple boolean state toggle',
    ],
  },
};
