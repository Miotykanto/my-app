import { confirmAlert } from 'react-confirm-alert'; // Import
import React, { Component } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class confirm extends Component {
    submit = (a) => {
        confirmAlert({
          title: 'attention',
          message: 'Confirmer suppression',
          buttons: [
            {
              label: 'Oui',
              onClick: () => this.props.deleteUser(a)
            },
            {
              label: 'Non',
            }
          ]
        })
      };
      render(){
            return (
                <center>
                    <table class="table table-bordered">
                    <thead>
                        <tr className="tab">
                            <th>id</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.length > 0 ? (
                        this.props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nom}</td>
                                    <td>{user.prenom}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>this.submit(user.id)}>X</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}></td>
                            </tr>
                        )}
                    </tbody>
                </table>
	</center>
            );
      }
}
	

export default confirm;