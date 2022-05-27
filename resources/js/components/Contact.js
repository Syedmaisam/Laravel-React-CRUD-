import React from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';
import SingleContact from './SingleContact';
import { useNavigate  } from 'react-router-dom';

import "./app.css"



class Contact extends React.Component{
    state = {
        loading : true,
        contacts : []
    }

    ContactList = async ()  => {
      const list = await  axios.get('/contact');
      if(list.data != []){
          this.setState({ loading : false});
          this.setState({ contacts : list.data });

      }
      console.log(list);
    }

    componentDidMount(){
        this.ContactList();
    }
    DeleteContact = async(id) => {

        const res = await axios.delete(`/contact/${id}`);
        if(res.data.status == true){
            this.ContactList();
            // this.props.navigate('/');
          //  console.log(res.data.status );

         }
    }
    render(){
        if(this.state.loading ){
          return   <h1>Loading</h1>
        }
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>


                    { this.state.contacts.map( Contact => (
                        <SingleContact contact = {Contact} key = {Contact.id}  DeleteContact = {this.DeleteContact} />
                    ))

                }
                </tbody>
            </table>

        </div>
        )

    }
}

// export default Contact;
function WithNavigate(props){
    const navigate = useNavigate();
    return <Contact {...props} navigate={navigate}/>
}
export default WithNavigate;
