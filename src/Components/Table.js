import React, { Component } from 'react'
import { data } from './data'
export class Table extends Component {
    constructor(props) {
      super(props)
    }
   
    render() {
        const Users = data.map( user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{ user.avatar_url}</td>
               </tr>
           )
            
        } );
    return (
        <div>
            <table>
                <caption>Customers</caption>
                <thead>
                    <tr>
                        <th scope='col'>Serial No</th>
                        <th scope='col'>Cusomer Name</th>
                        <th scope='col'>Avatar Url</th>
                    </tr>
                </thead>
                <tbody>
                    {Users}
                </tbody>
           </table>
      </div>
    )
  }
}

export default Table