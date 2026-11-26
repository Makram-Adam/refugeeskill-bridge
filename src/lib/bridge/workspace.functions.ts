import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import type { Database } from '@/integrations/supabase/types';
import { passportSchema } from './domain';
export const getWorkspace = createServerFn({method:'GET'}).middleware([requireSupabaseAuth]).handler(async ({context}) => {
 const {supabase,userId}=context;
 const results = await Promise.all([
  supabase.from('profiles').select('*').eq('id',userId).single(),
  supabase.from('user_roles').select('role').eq('user_id',userId).single(),
  supabase.from('skills').select('*').eq('user_id',userId).order('created_at'),
  supabase.from('experiences').select('*').eq('user_id',userId).order('start_date',{ascending:false}),
  supabase.from('qualifications').select('*').eq('user_id',userId).order('created_at'),
  supabase.from('assessments').select('*').eq('user_id',userId).order('completed_at',{ascending:false}),
  supabase.from('analysis_results').select('*').eq('user_id',userId).order('created_at',{ascending:false}),
  supabase.from('saved_pathways').select('*').eq('user_id',userId),
 ]);
 for(const result of results) if(result.error) throw new Error('Your workspace could not be loaded. Please try again.');
 const [profile,role,skills,experiences,qualifications,assessments,analyses,saved]=results;
 if(!profile.data || !role.data) throw new Error('Your account profile is not available.');
 return {profile:profile.data,role:role.data.role,skills:skills.data??[],experiences:experiences.data??[],qualifications:qualifications.data??[],assessments:assessments.data??[],analyses:analyses.data??[],saved:saved.data??[]};
});
function publicClient() {
 const url=process.env['SUPABASE_URL']; const key=process.env['SUPABASE_PUBLISHABLE_KEY'];
 if(!url||!key) throw new Error('The service is unavailable.');
 return createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const headers=new Headers(init?.headers);if(key.startsWith('sb_')&&headers.get('Authorization')===`Bearer ${key}`) headers.delete('Authorization');headers.set('apikey',key);return fetch(input,{...init,headers});}}});
}
export const getPathways = createServerFn({method:'GET'}).handler(async()=> {const {data,error}=await publicClient().from('learning_pathways').select('*').order('title'); if(error) throw new Error('Learning opportunities could not be loaded.'); return data;});
export const getPublicPassport = createServerFn({method:'GET'}).inputValidator(z.object({id:z.uuid()})).handler(async({data})=>{const response=await publicClient().rpc('public_passport',{_passport_id:data.id});if(response.error) throw new Error('This passport could not be loaded.');return response.data?passportSchema.parse(response.data):null;});
export const getDirectory = createServerFn({method:'GET'}).middleware([requireSupabaseAuth]).handler(async({context})=>{const {data,error}=await context.supabase.rpc('employer_directory');if(error) throw new Error('The directory could not be loaded.');return (data??[]).map(row=>passportSchema.parse(row));});
export const getAdminStats = createServerFn({method:'GET'}).middleware([requireSupabaseAuth]).handler(async({context})=>{const {data,error}=await context.supabase.rpc('admin_statistics');if(error) throw new Error('Administrator access is required.');return z.object({profiles:z.number(),employers:z.number(),assessments:z.number(),saved_pathways:z.number()}).parse(data);});
