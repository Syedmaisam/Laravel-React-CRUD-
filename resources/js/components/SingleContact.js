import React from 'react';
import {Link} from "react-router-dom"





class SingleContact extends React.Component{



    render(){
        const {contact } = this.props;
        const DelContact = (id) => {
            this.props.DeleteContact(id)
        }

        return (

            <tr>

            <td>{contact.id}</td>

            <td>{contact.full_name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone_number}</td>
            <td>
                <Link to={`/EditContact?id= ${contact.id}`}  className="btn btn-outline-primary">Edit</Link>
                <button onClick={()=> DelContact( contact.id )} className="btn btn-outline-danger">Delete</button>

            </td>

            </tr>



        )
    }
}

export default SingleContact;
