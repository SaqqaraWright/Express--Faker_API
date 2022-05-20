import React, {useState} from 'react';
import{Link, useHistory} from "react-router-dom";
import axios from 'axios';


const AddNewAuthor = ()=>{ //props-->place this into the Add New Author function later

    let [name, setName] = useState("");
    const history = useHistory();
    //state variable to store validation errors inside of
    let [errors, setErrors] = useState({})

    //submitHandler
    const addAuthor = (e) =>{
        e.preventDefault();

        //package up the state variables into an object
        let formInfo = {name}

        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res=>{
                console.log("response after posting-->", res)

                // this "if statement" below means that if there are errors and validation errors that we need to save, then to save those validation errors into state
                if(res.data.error){
                    setErrors(res.data.error.errors);
                }
                else{ //"else statement" here means that there are no errors; therefore clear out the form
                setName("")
                history.push("/")

                
                }
            })
            .catch(err=>console.log("errrr", err))
    }

    return(
        <div>
            <p id="text-left"><Link to="/">Home</Link></p>
            <p id="text-left">Add a new author:</p>
            <form onSubmit={addAuthor} className="form-group border border-dark p-3">
                <div className="mb-3">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" />
                    <p className="text-danger">{errors.name?.message}</p> {/*In the error if statement, I am conditionally parsing through an object */}
                </div>
                <div className="text-center">
                    <input type="submit" value="Submit" className="btn btn-info mb-2"/>
                    <p><Link to="/" className="btn btn-outline-info">Cancel</Link></p>
                </div>
            </form>
        </div>

    );
};

export default AddNewAuthor;