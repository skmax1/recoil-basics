import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import React, { useMemo } from 'react';


function App() {
  return <RecoilRoot>
    <Mainapp></Mainapp>
  </RecoilRoot>
}

function Mainapp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const [messagingNotificationCount,setMessgaingCount] = useRecoilState(messagingAtom);
  const notiCount = useRecoilValue(notificationAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const totalNotificationCount  = useMemo(()=>{
    return networkNotificationCount + messagingNotificationCount + notiCount + jobsNotificationCount
  },[networkNotificationCount , messagingNotificationCount , notiCount , jobsNotificationCount])

  return <div>
    <button>Home</button>
    <button>My network({networkNotificationCount >=100?"99+": networkNotificationCount})</button>
    <button>Jobs({jobsNotificationCount >=100 ? "99+" : jobsNotificationCount})</button>
    <button>Messaging ({messagingNotificationCount >= 100?"99+" : messagingNotificationCount})</button>
    <button>Noti ({notiCount >= 100?"99+" : notiCount})</button>
    {/*<button onClick={()=>{

      setMessgaingCount(c =>c+1);
    }}>Me</button>*/} 
    



    <button>Me ({totalNotificationCount})</button>
    
  </div>


}
export default App
