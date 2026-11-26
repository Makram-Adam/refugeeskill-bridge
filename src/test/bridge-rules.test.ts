import { describe,it,expect } from 'vitest';
import { analyzeExperience, reflectionResults, registrationRole, safeLink, experienceYears } from '@/lib/bridge/domain';
describe('Bridge rules',()=>{
 it('does not allow administrator self-registration',()=>{expect(registrationRole.safeParse('admin').success).toBe(false);expect(registrationRole.parse('employer')).toBe('employer');expect(registrationRole.parse('professional')).toBe('professional');});
 it('derives skills only from the submitted experience',()=>{const result=analyzeExperience('I used Python and SQL to analyze data for reporting.');expect(result.skills.map(s=>s.name)).toContain('Python');expect(result.skills.map(s=>s.name)).not.toContain('React');expect(result.skills.map(s=>s.name)).not.toContain('Teamwork');});
 it('keeps the original four reflection questions and requires all six categories',()=>{expect(()=>reflectionResults({'0':0,'1':1,'2':2,'3':1})).toThrow();const result=reflectionResults({'0':0,'1':1,'2':2,'3':1,'4':2,'5':0});expect(result).toHaveLength(6);expect(result[0]?.category).toBe('Communication');expect(result[4]?.category).toBe('Digital literacy');expect(result[5]?.category).toBe('Adaptability');});
 it('does not treat lower confidence as an accredited qualification',()=>{const result=reflectionResults({'0':0,'1':1,'2':2,'3':1,'4':2,'5':0});expect(result[0]?.confidence).toBe(0);expect(result[0]?.label).toBe('Developing');expect(result[2]?.label).toBe('Very confident');});
 it('blocks executable and insecure portfolio URLs',()=>{expect(safeLink('javascript:alert(1)')).toBeNull();expect(safeLink('http://example.com')).toBeNull();expect(safeLink('https://example.com')).toBe('https://example.com/');});
 it('does not double count overlapping experience',()=>{const common={job_title:'Developer',organization:'Company',description:''};expect(experienceYears([{...common,start_date:'2020-01-01',end_date:'2022-01-01'},{...common,start_date:'2021-01-01',end_date:'2023-01-01'}])).toBe(3);});
});
