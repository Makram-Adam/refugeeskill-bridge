import { BriefcaseBusiness, BrainCircuit, ClipboardCheck, GraduationCap, LayoutDashboard, ShieldCheck, UserRound, UsersRound } from 'lucide-react';
export const workspaceNav = [
 {to:'/dashboard',label:'Dashboard',icon:LayoutDashboard}, {to:'/profile',label:'My Profile',icon:UserRound}, {to:'/analyzer',label:'AI Skills Analyzer',icon:BrainCircuit}, {to:'/assessment',label:'Skills Assessment',icon:ClipboardCheck}, {to:'/passport',label:'Skills Passport',icon:ShieldCheck}, {to:'/learning',label:'Learning Pathways',icon:GraduationCap}, {to:'/talent',label:'Talent Directory',icon:UsersRound}, {to:'/admin',label:'Admin Preview',icon:BriefcaseBusiness},
] as const;
export const talents = [
 {name:'Amira Hassan',initials:'AH',title:'Software Engineer',location:'Berlin, Germany',skills:['React','TypeScript','Python'],experience:'6 years',category:'Technology'},
 {name:'Daniel Okoro',initials:'DO',title:'Civil Engineer',location:'Amsterdam, Netherlands',skills:['AutoCAD','Project Management','BIM'],experience:'8 years',category:'Engineering'},
 {name:'Nour Al-Karim',initials:'NA',title:'UX / UI Designer',location:'London, United Kingdom',skills:['Figma','User Research','Prototyping'],experience:'4 years',category:'Design'},
 {name:'Omar Khalil',initials:'OK',title:'Data Analyst',location:'Stockholm, Sweden',skills:['SQL','Python','Power BI'],experience:'5 years',category:'Technology'},
 {name:'Sara Mahmoud',initials:'SM',title:'Healthcare Professional',location:'Berlin, Germany',skills:['Patient Care','Public Health','Research'],experience:'7 years',category:'Healthcare'},
 {name:'Leila Farah',initials:'LF',title:'Project Coordinator',location:'Paris, France',skills:['Agile','Communication','Planning'],experience:'5 years',category:'Business'},
];
export const courses = [
 {title:'Advanced React & TypeScript',provider:'Open Learning Academy',category:'Technology',duration:'6 weeks',level:'Intermediate',description:'Build on your frontend experience with typed, production-ready applications.'},
 {title:'Professional English for the Workplace',provider:'Bridge Language Institute',category:'Communication',duration:'4 weeks',level:'All levels',description:'Develop the confidence to communicate your skills in a new workplace.'},
 {title:'Agile Project Management',provider:'Global Skills Network',category:'Business',duration:'3 weeks',level:'Beginner',description:'Explore collaborative planning, delivery and team leadership.'},
];
export function metadata(title:string,description:string) { return {meta:[{title:`${title} | RefugeeSkill Bridge`},{name:'description',content:description},{property:'og:title',content:`${title} | RefugeeSkill Bridge`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}; }
export function filterTalents(query:string,category:string) { return talents.filter(t=>(category==='All fields'||t.category===category)&&`${t.name} ${t.title} ${t.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase())); }
