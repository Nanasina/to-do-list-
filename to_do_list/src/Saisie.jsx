import {CirclePlus} from "lucide-react";

function Saisie() {

  return (
    <>
      <div className="m-20 p-0 flex gap-2">
        <input className="border rounded-xl p-1.5 w-70" type="text" placeholder="Saisir une tâche..."/>
        <div className="w-32 flex-initial">
            <button className="btn btn-soft btn-primary rounded-lg ">
                <CirclePlus />
                Ajouter
                </button>
        </div>
      </div>
    </>
  )
}

export default Saisie
