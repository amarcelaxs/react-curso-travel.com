import {  useState, type FormEvent } from 'react'
import './App.css'
import './index.css'
import { ArrowRight, Plane, MapPin, Calendar, User, UserRoundPlus, Settings2, X, AtSign, Plus  } from 'lucide-react';

function App() {
  const [showInviteEmail,setShowInviteEmail] = useState(false)
  const [showDialog,setShowDialog] = useState(false)
  const [emailsListInvite, setemailsListInvite] = useState<string[]>([
    "amarcelaxs@gmail.com"
  ])


  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){  
    event.preventDefault();

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString();

    if(!email){
      return
    }

    if(emailsListInvite.includes(email)){
      alert(`E-mail:$(email) ja foi adicionado !`)
      return
    }

    setemailsListInvite(
      [
        ...emailsListInvite,
        email 

      ]
    )



    event.currentTarget.reset()


    

  }

  function removeEmailToInvite(emailToRemove:string){
    const newEmailsList = emailsListInvite.filter(email => email !== emailToRemove)
    setemailsListInvite(newEmailsList)
   
  }

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

    <div className="fixed inset-0 flex items-center justify-center  bg-black/60" >
      
      <div className="w-[640px] rounded-x1 py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/*SELECIONAR E X*/}
        <div className="space-y-2 ">
          <div className="flex imtes-center justify-between">
            <h2 className="font-lf font-semibold">Selecione os Convidados</h2>
            <button>
              <X className="size-5 text-sinz-400" onClick={() => setShowDialog(false)}
                />
            </button>
          </div>

          <p className="text-sm text-zin-400">
             os convidados irão receber emails para confirmar a participação na viagem 
          </p>
        </div>    


        <div className="flex flex-wrap gap-2">

          {
            emailsListInvite.map(email =>
            <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
            <span className="text-zinc-300">{email}</span>
              <button type="button">
                  <X className="size-5 text-sinz-400" onClick={() => {
                    removeEmailToInvite(email)
                  } }/>
              </button>
            </div>
            )
          }
        
        </div>

        <div className="w-full h-px bg-s=zinc-500" />

        <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5"/>
            <input type="email" name="email" placeholder="Digite o email do convidado" 
            className="bg-transparent text0lg plaveolder-zinc-400 outline-none flex-1"
            />

          </div>
          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-5 font-medium flex items-center gap-2 hover:bg-lime-400"> 
            Convidar
            <Plus />
          </button>
        </form>



      </div>
      
    </div>
    }

  </div>

  )
}

export default App
