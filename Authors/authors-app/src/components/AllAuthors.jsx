import React, {useState, useEffect} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom"


const AllAuthors = () => {

    const [allAuthors, setAllAuthors] = useState([]) //this allows me to save all variables
    const  [deleteToggle, setDeleteToggle] = useState(false)

    const sortArray = (x,y) => {
        return x.name.localeCompare(y.name);
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                console.log("response-->", res.data.results);
                setAllAuthors(res.data.results.sort(sortArray));
            })
            .catch(err=>{
                console.log("errr", err)
            })

    }, [deleteToggle])

    const deleteAuthor = (_id)=>{
        console.log("deleting...")
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log("res after deleting!", res);
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=>console.log(err))        
    }




    return (
        <div>
            <p id="text-left"><Link to="/new">Add an Author</Link></p>
            <p id="text-left">We have quotes by:</p>
            {
                allAuthors.map((authorObj, idx)=>{
                    return(
                        
                        <div key={idx} className="mb-3 border border-dark">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Author</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{authorObj.name}</td>
                                        <td><Link className="btn btn-warning mt-2" to={`/edit/${authorObj._id}`}>Edit</Link></td>
                                        <td><button onClick={(e)=>{deleteAuthor(authorObj._id)}} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            
                            
                            {/* <p><Link className="btn btn-info mt-2" to={`/edit/${productObj._id}`}>Edit {productObj.title}</Link></p> */}
                            {/* <button onClick={(e)=>{deleteProduct(productObj._id)}} className="btn btn-danger">Delete {productObj.title}</button> */}
                        </div>
                    );
                })
            }
        </div>
    );
};


export default AllAuthors;