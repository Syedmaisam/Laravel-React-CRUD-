import React from 'react';
// import {link ,useNavigate } from "react-router-dom"
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
// import { useParams } from "react-router-dom";


class EditContact extends React.Component{

    state = {
        full_name : '',
        email : '',
        phone_number : '',

    }
    handleInput = (e) => {
        this.setState({ [e.target.name] : e.target.value })

    }

    async componentDidMount(){
        // this.ContactList();
        // const id =  await this.props.params;
        const url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");

        const res = await axios.get(`/contact/${id}/edit`);

        this.setState({ full_name : res.data.data.full_name });
        this.setState({ email : res.data.data.email  });
        this.setState({ phone_number : res.data.data.phone_number });






    }
    editContact = async(e) => {
        e.preventDefault();

        const url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");


        const res = await axios.patch(`/contact/${id}`, this.state);
        this.setState({
            full_name : '',
            email : '',
            phone_number : ''
         })
         if(res.data.status == true){
            this.props.navigate('/');

         }
        console.log(res);
    }
    render(){
        return (

            <div>
                <h1>
                    Edit Contact
                </h1>

                <form onSubmit={this.editContact}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" name='email' className="form-control" onChange={this.handleInput}   placeholder="Enter email" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label >Fullname</label>
                        <input type="text" name='full_name' className="form-control" onChange={this.handleInput}  placeholder="Full Name" value={this.state.full_name} />
                    </div>

                    <div className="form-group">
                        <label >Phone Number</label>
                        <input type="number" name='phone_number' className="form-control" onChange={this.handleInput}  placeholder="Phone number" value={this.state.phone_number} />
                    </div>

                    <input type="submit" className="btn btn-primary" value='Edit Contact' />
                    </form>
            </div>

        )
    }
}

// export default AddContact;
function WithNavigate(props){
    const navigate = useNavigate();
    return <EditContact {...props} navigate={navigate}/>
}
export default WithNavigate;
