/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct(){

    const navigate = useNavigate();

    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] =useState(null);

    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct = async() =>{
        await axios.get('http://localhost:8000/api/products/'+id)
        .then(({data})=>{
            const {title, description} = data.product
            setTitle(title)
            setDescription(description)
        }).catch(({response: {data}})=>{
            console.log(data.message);          
        })
    }

const changehandler = (e)=>{
    setImage(e.target.files[0]);
}

const updateProduct = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('_method', 'PATCH')
    formData.append('title', title)
    formData.append('description', description)
    if (image !== null) {
            formData.append('image', image)
    }

    await axios.post('http://localhost:8000/api/products' +id, formData)
    .then(({data})=>{
        console.log(data.message);
        navigate('/')
    }).catch(({response})=>{
        if (response.status == 422) {
            console.log(response.data.errors);
        } else {
            console.log(response.data.message);
        }
    })
}

return(
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title"> Create Form</h3>
                        <hr></hr>
                        <div className="form-wrapper">
                            <form onSubmit={updateProduct}>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" class="form-control" 
                                    value={title}
                                    onChange={(e)=>{setTitle(e.target.value)}}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea type="text" class="form-control" 
                                    value={description}
                                    onChange={(e)=>{setDescription(e.target.value)}}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <input type="file" className="form-control" 
                                    value={image}
                                    onChange={changehandler}
                                    />
                                    </div>
                                <button type="submit" className="btn btn-primary">update</button>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}