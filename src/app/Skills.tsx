'use client'


import Proffecional from '@/components/Proffecional';
import React ,{useState} from 'react'


  const skills:any = {
	soft: [
    
		{ icon: "👂🏼", text: "Active Listening" },
		{ icon: "💬", text: "Effective Communication" },
		{ icon: "👥", text: "Collaboration" },
		{ icon: "⽓", text: "Teamwork" },
		{ icon: "💡", text: "Creative Problem Solving" },
		{ icon: "⌛️", text: "Time management" },
	],
	hard: [
    
		{ icon: "💻", text: "Crystal Reports" },
		{ icon: "ʦ", text: "TypeScript" },
		{ icon: "🚀", text: "Next Js" },
		{ icon: "💾", text: "SQL" },
		{ icon: "💾", text: "SAP" },
		{ icon: "📈", text: "HTML & CSS" },
	],
};


export default function Skills() {

const [activeTab, setActiveTab] = useState('soft');

const setBg=(active:string) => (activeTab === active ? "bg-yellow-300" : "bg-gray-200");
const setTabsAlignment = (tab:string) =>
		tab === "soft" ? "text-left" : "text-right";
    const content = (
      <ul
        className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
          activeTab === "soft" ? "justify-start" : "justify-end"
        }`}
      >
        {skills[activeTab].map(({text,icon}:any) => (
          <li key={text} className='font-serif text-black bg-blue-300 rounded-xl px-3 py-4 '>
            <span> {icon}</span> {text}
          </li>
        ))}
      </ul>
    );





  return (<>
    <div>
    <div className='flex flex-wrap  font-semibold text-black w-auto'>
        {["soft","hard"].map((el) =>(
            <button key={el} type='button' className={`btn ${setBg(el)} ${setTabsAlignment(el)}`} 
            onClick={()=> setActiveTab(el)}>{el} Skills</button> ))}    
                
      
    </div>

    <div>
  
      {content}
    </div>
    <Proffecional/>
    </div>
    
    </>
  )
}
