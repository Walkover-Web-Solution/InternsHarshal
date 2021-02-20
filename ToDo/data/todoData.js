import Todo from '../models/todo';

const data = [
    new Todo('1',
        'Health',
        'Hope you are Healthy and Happy! Imagining about the campus life at SGSITS? Missing out the interaction? Online classes and assignments have hampered all of us, spice up your college life and set your plan to explore more. ',
        { hour: 10, min: 30, suffix: 'am' },
        'Sat Feb 20 2021',
        false),
    new Todo('2',
     'Walk', 
     'Go out for a walk with family', 
     { hour: 1, min: 21, suffix: 'pm' }, 
     'Sat Feb 20 2021', 
     true),
];

export default data;