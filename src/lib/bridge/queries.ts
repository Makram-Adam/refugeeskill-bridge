import { queryOptions, useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { getWorkspace, getPathways, getDirectory, getAdminStats, getPublicPassport } from './workspace.functions';
export const workspaceOptions = queryOptions({queryKey:['workspace'],queryFn:()=>getWorkspace(),staleTime:30000});
export const pathwaysOptions = queryOptions({queryKey:['pathways'],queryFn:()=>getPathways()});
export const directoryOptions = queryOptions({queryKey:['directory'],queryFn:()=>getDirectory(),staleTime:0});
export const adminOptions = queryOptions({queryKey:['admin'],queryFn:()=>getAdminStats()});
export const passportOptions = (id:string)=>queryOptions({queryKey:['public-passport',id],queryFn:()=>getPublicPassport({data:{id}}),staleTime:0});
export function useWorkspace() {return useSuspenseQuery(workspaceOptions).data;}
export function useRefreshWorkspace() {const client=useQueryClient();return async()=>{await Promise.all([client.invalidateQueries({queryKey:['workspace']}),client.invalidateQueries({queryKey:['directory']}),client.invalidateQueries({queryKey:['public-passport']})]);};}
