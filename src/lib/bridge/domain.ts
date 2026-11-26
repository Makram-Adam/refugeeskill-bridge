import { z } from 'zod';
import type { Tables } from '@/integrations/supabase/types';
export type Profile = Tables<'profiles'>;
export const registrationRole = z.enum(['professional', 'employer']);
export const categories = ['Technology', 'Engineering', 'Design', 'Healthcare', 'Business', 'Other'];
export const reflectionQuestions = [
 { category: 'Communication', text: 'I can explain technical ideas clearly to my team.' },
 { category: 'Problem-solving', text: 'I can break down a complex problem into smaller steps.' },
 { category: 'Professional learning', text: 'I feel confident learning a new professional tool.' },
 { category: 'Teamwork', text: 'I can collaborate with people from different backgrounds.' },
 { category: 'Digital literacy', text: 'I can use digital tools to organize and share professional work.' },
 { category: 'Adaptability', text: 'I can adapt my approach when priorities or circumstances change.' },
] as const;
export function reflectionResults(answers: Record<string, number>) {
 return reflectionQuestions.map((q, i) => {
  const confidence = answers[String(i)];
  if (confidence === undefined || !Number.isInteger(confidence) || confidence < 0 || confidence > 2) throw new Error('Answer every question before saving.');
  return {category: q.category, confidence, label: ['Developing', 'Confident', 'Very confident'][confidence] ?? 'Developing', recommendation: confidence === 0 ? `Practice ${q.category.toLowerCase()} through a small project and request feedback from a colleague.` : `Document an example of ${q.category.toLowerCase()} and ask for practical feedback.`};
 });
}
const matchingSkills = [
 ['React','Technical', /\breact\b/i], ['TypeScript','Technical', /\btypescript\b/i], ['Python','Technical', /\bpython\b/i], ['SQL','Technical', /\bsql\b/i], ['JavaScript','Technical', /\bjavascript\b/i], ['AutoCAD','Technical', /\bautocad\b/i], ['BIM','Technical', /\bbim\b/i], ['Figma','Technical', /\bfigma\b/i], ['User research','Technical', /\b(user research|user interviews)\b/i], ['Patient care','Technical', /\b(patient care|cared for patients|nursing)\b/i], ['Data analysis','Technical', /\b(data analy\w*|analy[sz]ed data)\b/i], ['Project management','Technical', /\b(project management|managed projects|coordinated projects)\b/i], ['Communication','Transferable', /\b(communicat\w*|present\w*|explained|teaching|taught)\b/i], ['Teamwork','Transferable', /\b(team\w*|collaborat\w*)\b/i], ['Problem-solving','Transferable', /\b(solv\w*|troubleshoot\w*|debug\w*)\b/i], ['Adaptability','Transferable', /\b(adapt\w*|changing priorities|learned new)\b/i], ['Leadership','Transferable', /\b(led|leadership|supervised|mentored)\b/i],
] as const;
export function analyzeExperience(text: string) {
 const input = text.trim();
 if (input.length < 30 || input.length > 12000) throw new Error('Describe your experience in 30–12,000 characters.');
 const skills = matchingSkills.filter(([, , expression]) => expression.test(input)).map(([name, category]) => ({name, category}));
 const areas = [...new Set(skills.map(s => s.category))];
 return { summary: input.slice(0, 600) + (input.length > 600 ? '…' : ''), skills, strengths: skills.map(s => `${s.name} is mentioned in your submitted experience.`), growth_areas: skills.length ? ['Add concrete examples and outcomes to demonstrate each matched skill.'] : ['No supported keywords matched. Name tools, responsibilities and outcomes explicitly.'], recommendations: areas.includes('Technical') ? ['Compare relevant technical learning opportunities with the tools you described.'] : ['Explore communication or project-planning learning if relevant to your goals.'], evidence_suggestions: skills.map(s => ({skill: s.name, suggestion: `Provide a non-sensitive work sample or a project description demonstrating ${s.name}.`})) };
}
export function profileCompletion(profile: Profile, counts: {skills:number;experiences:number;qualifications:number}) {
 const values = [profile.full_name, profile.professional_title, profile.location, profile.biography, profile.languages.length, profile.portfolio_links.length, counts.skills, counts.experiences, counts.qualifications];
 return Math.round(values.filter(Boolean).length / values.length * 100);
}
export function safeLink(value: string) { try {const url = new URL(value); return url.protocol === 'https:' ? url.href : null;} catch {return null;} }
export const passportSchema = z.object({full_name:z.string(),professional_title:z.string(),location:z.string(),languages:z.array(z.string()),biography:z.string(),professional_category:z.string(),portfolio_links:z.array(z.string()),passport_id:z.string(),updated_at:z.string(),skills:z.array(z.object({skill_name:z.string(),skill_category:z.string(),proficiency_level:z.string(),assessment_status:z.string()})),experiences:z.array(z.object({job_title:z.string(),organization:z.string(),description:z.string(),start_date:z.string().nullable(),end_date:z.string().nullable()})),qualifications:z.array(z.object({qualification_name:z.string(),institution:z.string(),completion_year:z.number().nullable(),verification_status:z.string()})),assessments:z.array(z.object({results:z.unknown(),completed_at:z.string()}))});
export type Passport = z.infer<typeof passportSchema>;
export function experienceYears(experiences: Passport['experiences'], now = new Date()) {
 const intervals = experiences.flatMap(e => {if (!e.start_date) return []; const start=Date.parse(e.start_date); const end=e.end_date?Date.parse(e.end_date):now.getTime(); return Number.isFinite(start)&&Number.isFinite(end)&&end>=start?[[start,end] as const]:[];}).sort((a,b)=>a[0]-b[0]);
 let total=0;let start=0;let end=0;
 for (const interval of intervals) {if (interval[0]>end) {total+=end-start; start=interval[0]; end=interval[1];} else end=Math.max(end,interval[1]);}
 return Math.floor((total+end-start)/(365.25*86400000));
}
