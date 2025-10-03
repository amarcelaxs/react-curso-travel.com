import { useState } from 'react'
import './App.css'
import './index.css'
import { ArrowRight, Plane, MapPin, Calendar, User, UserRoundPlus, Settings2  } from 'lucide-react';

function App() {
  const [showInviteEmail,setShowInviteEmail] = useState(false)
  const [showDialog,setShowDialog] = useState(false)

  return (
    <div>
    <div className="h-screen flex items-center justify-center bg-quadrados bg-no-repeat bg-center">

      <div className='max-w-3x1 w-full px-6 text-center space-y-10'>
        {/*LOGO E TITULO*/}   
        <div className="flex flex-col items-center gap-3">
          <p>
            <Plane />
          travel.com
          </p>
          
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua proxia viagem !
          </p>    
        </div>

        {/*INPUTS*/}
     
        
        <div>
          <div className="h16 bg-size-zinc-900 px-4 rounded-x1 flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className='size-5 text-zinc-400'/>
              <input 
              type="text" 
              placeholder="para onde você vai ?"
              className="bg-transparent text-lg placeholder-zinc-400
              outline-none flex-1"/>
            </div>
           <div className="flex items-center gap-2 ">
             <Calendar className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder=" Quando?"
                className="bg-transparent text-lg placeholder-zinc-400
                outline-none flex-1"
              />
            </div>
            
            {showInviteEmail?

            <button className="bg-zinc-300 text-zinc-950 rounded-lg px-5 py-5 font-medium flex items-center 
            gap-2 hover:bg-lime-400"  onClick={() => setShowInviteEmail(!showInviteEmail)}>
              Alterar local/data
              <Settings2  className="size-5" />
            </button> :

            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-5 font-medium flex items-center 
            gap-2 hover:bg-lime-400  "  onClick={() => setShowInviteEmail(!showInviteEmail)}>
              Continuar
              <ArrowRight  className="size-5" />
            </button>
            }
          </div>
        </div>
       
         {/*INPUTS - 2*/}
         {
          showInviteEmail &&
        <div>

          <div className="h16 bg-size-zinc-900 px-4 rounded-x1 flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              
              <UserRoundPlus className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder="Quem estara na viagem  ?"
                className="bg-transparent text-lg placeholder-zinc-400
                outline-none flex-1"
              />
            </div>
          
            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-5 font-medium flex items-center 
            gap-2 hover:bg-lime-400" onClick={() => setShowDialog(true)}>
              Confirmar viagem
              <ArrowRight  className="size-5" />

            </button>
          </div>
        </div>
        }
      </div>

      {/*TEXTO PEQUENO APOS INPUT */}

      <p className='text-zinc-500 text-sm '>  
        Ao planejar sua viagem planner você automaticamenteo concorda<br /> com nossos <a href="#" className="tet-zinc-300 underline">termos de uso</a> e <a href="#" className="tet-zinc-300 underline">politicas de privacidade.</a>
      </p>
    </div> 
    {
    showDialog &&

    <div className="fixed inset-0 flex items-center justify-center  bg-black/60" onClick={() => setShowDialog(false)}>
      
      <div className="w-[640px] rounded-x1 py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
          Selecione os Convidados
      </div>
      
    </div>
    }

    </div>

  )
}

export default App
