import React, { useState } from 'react';
// import { Button } from '@material-ui/core';
import { storage, db } from '../firebase';
import Footer from './Footer';

function PhotographsUpload() {
    const [newUrl, setNewUrl] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    // const [newType, setNewType] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    

    const handleUpload = (e) => {
        
        e.preventDefault();

        if(newDescription.trim() === '' || newUrl.trim() === '' || newTitle.trim() === '' || newImageUrl.trim() === ''){
            // setNewDescriptionIsValid(false);
            // setNewUrlIsValid(false);
            // setNewTitleIsValid(false);
            // setNewImageUrlIsValid(false);
            return;
        }


        db.collection('photographs')
        .add({
            description: newDescription,
            imageUrl: newImageUrl,
            title: newTitle,
            url: newUrl
        })
        .then(() => {
            alert('Uploaded');
            
        })
        .catch(error => {
            alert(error.message);
        })
            setNewDescription("");
            setNewImageUrl("");
            setNewTitle("");
            setNewUrl("");
    };

    return (
        <div>
        <div className="container mb-5 mt-5">
            <h1 className="mb-5">Insert a new blog: </h1>
            <form  method="post">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label for="name" class="form-label"><b>Url: </b></label>
                            <input type="text" class="form-control" placeholder="Enter the blog url" required onChange={even => setNewUrl(even.target.value)} value={newUrl} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label for="name" className="form-label"><b>Title:  </b></label>
                            <input type="text" className="form-control" placeholder="Enter the blog title" required onChange={even => setNewTitle(even.target.value)} value={newTitle} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label for="name" class="form-label"><b>Image Url:  </b></label>
                            <input type="text" class="form-control" placeholder="Enter the image url" required onChange={even => setNewImageUrl(even.target.value)} value={newImageUrl} />                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div class="mb-3">
                            <label for="name" className="form-label"><b>Description:  </b></label>
                            <input type="text" className="form-control" placeholder="Enter the blog description" required onChange={even => setNewDescription(even.target.value)} value={newDescription} />
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={handleUpload}>
                        Upload
                </button>
            </form>

        </div>
        <Footer />
        </div>
    )
}

export default PhotographsUpload
