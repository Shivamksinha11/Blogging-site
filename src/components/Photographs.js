import React, {useEffect, useState} from 'react';

import Navbar from './Navbar';
import { db } from '../firebase';
import PhotographsUpload from './PhotographsUpload';
function Photographs() {

    const [posts, setPosts] = useState([

    ])

    useEffect(() => {
        db.collection('photographs').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc =>  ({
                id: doc.id,
                photograph: doc.data()
            })));
        })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                {
                    posts.map(({id, photograph}) => (
                        <div className="row mt-5">
                            <div className="col">
                                <a href={photograph.url}><img className="life" src={photograph.imageUrl} alt="..." /></a>
                            </div>
                            <div className="col mt-5">
                                <div className="line"></div>
                                <a href="#" className="post-tag">photography</a>
                                <a href={photograph.url}><strong className="quin">
                                    {photograph.title}
                                </strong></a>
                                <p className="imgtext1 mt-3">
                                    {photograph.description}
                                </p>
                            </div>
                        </div>
                    ))
                }    
            </div>
            <div className="container mt-4">
                <a href="/" className="btn">Go Back</a>
            </div>
            <PhotographsUpload />
        </div>
    )
}

export default Photographs
