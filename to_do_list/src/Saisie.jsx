import {CirclePlus, Trash2} from "lucide-react";
import { useState } from "react";


function Saisie() {
  const [tache, setTache] = useState("")
  const [taches, setTaches] = useState([])
  const [fait, setFait] = useState(false)

  const handelchange = (e) =>{
    setTache(e.target.value)
  }

  const addTache = () =>{
    if(tache === ""){
      return;
    }
    setTaches([...taches, tache])
    setTache("")
  }

  return (
    <>
      <div className="m-20 p-0 flex gap-2">
        <input 
        className="border rounded-xl p-1.5 w-70" 
        type="text"
        value={tache}
        onChange={handelchange}
        placeholder="Saisir une tâche..."
        />
        <div className="w-32 flex-initial">
            <button 
            className="btn btn-soft btn-primary rounded-lg "
            onClick={addTache}
            >
                <CirclePlus />
                Ajouter
                </button>

        </div>
      </div>
      <div className="bg-primary/10 w-180 ml-10 rounded-xl flex">
        {taches.map((t, index) => {
           return(
            <>
            <p key={index} className={`p-3 ${fait?"line-through opacity-5à" : ""}`}>{t}</p>
             <input type="checkbox" checked={fait} className="checkbox checkbox-secondary mt-3 " 
             onChange={(e) => setFait(e.target.checked)} />
             <button className="btn btn-error "><Trash2 className="w-4 h-4" /></button>
            </>
           )
        })
        } 
        
        </div>
    </>
  )
}

export default Saisie


