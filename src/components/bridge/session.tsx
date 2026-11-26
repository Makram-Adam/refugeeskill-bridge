import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';
const SessionContext=createContext<{user:User|null;ready:boolean}>({user:null,ready:false});
export function SessionProvider({children}:{children:ReactNode}) {
 const [user,setUser]=useState<User|null>(null);const [ready,setReady]=useState(false);const router=useRouter();const queryClient=useQueryClient();
 useEffect(()=>{let active=true;
  void supabase.auth.getUser().then(({data})=>{if(active){setUser(data.user);setReady(true);}});
  const {data:{subscription}}=supabase.auth.onAuthStateChange((event,session)=>{
   if(event!=='SIGNED_IN'&&event!=='SIGNED_OUT'&&event!=='USER_UPDATED')return;
   setUser(session?.user??null);setReady(true);
   if(event==='SIGNED_OUT')queryClient.clear();
   // Do not wait for Auth calls from within its listener.
   queueMicrotask(()=>{void router.invalidate();if(event!=='SIGNED_OUT')void queryClient.invalidateQueries();});
  });return()=>{active=false;subscription.unsubscribe();};
 },[router,queryClient]);
 return <SessionContext.Provider value={{user,ready}}>{children}</SessionContext.Provider>;
}
export function useSession(){return useContext(SessionContext);}
