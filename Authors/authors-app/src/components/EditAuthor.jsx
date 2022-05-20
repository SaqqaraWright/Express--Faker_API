import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const EditAuthor = () => {
    const history = useHistory(); //initialize history so that we can redirect using history.push()
    const { _id } = useParams(); //this has to match the id in the app.js path.

    const [authorInfo, setAuthorInfo] = useState({
        name : ""
    });

    //state variable to store validation errors inside of
    let [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log("response-->", res)
                // console.table(res.data.results) //shows object data in a table--nicely organized
                if(res.data.error){
                    history.push("/error")
                }
                else{
                    setAuthorInfo({
                        name: res.data.results.name //this state variable contains info about the author that I want to populate in my form
                    })

                }
            })
            .catch(err => console.log(err))
    }, []) //Tried adding _id and name as 


    const submitHandler = (e) => {
        e.preventDefault();

        console.log('submit handler name: ', authorInfo);
        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    console.log("hello")
                    setErrors(res.data.error.errors);
                    console.log({ errors })
                }
                else { //"else statement" here means that there are no errors; therefore clear out the for
                    history.push("/") //redirect after submitting form
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p id="text-left"><Link to="/">Home</Link></p>
            <p id="text-left">Edit this author:</p>
            <form onSubmit={submitHandler} className="form-group">
                <div className="mb-3">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" onChange={changeHandler} className="form-control" value={authorInfo.name} />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <div className="text-center">
                    <input type="submit" value="Submit" className="btn btn-info mb-2" />
                    <p><Link to="/" className="btn btn-outline-info">Cancel</Link></p>
                </div>
            </form>
        </div>
    );
};

export default EditAuthor;