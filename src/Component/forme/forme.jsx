import React, { useState } from 'react'

const Form = props => {

   const initial = { id: null, nom: '', prenom: '' }

   const [ user, setUser ] = useState(initial)

         const changed = event => {

            const { name, value } = event.target
         
            setUser({ ...user, [name]: value })
      }

	return (
		<form id="test"
            onSubmit={event => {
               event.preventDefault()
               if (!user.nom || !user.prenom) return
         
               props.ajouter(user)
               props.setCount(props.count +1)
               setUser(initial)
            }}>
               <label>Nom</label>
               <input type="text" name="nom" value={user.nom} onChange={changed}/>
               <label>Prénom</label>
               <input type="text" name="prenom"  value={user.prenom} onChange={changed}/>
               <button id="ajout" className="btn btn-info">Ajouter</button>
		</form>
   )
}
export default Form