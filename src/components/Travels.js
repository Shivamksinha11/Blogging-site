import React, {useEffect, useState} from 'react';
import Navbar from './Navbar'
import TravelsUpload from './TravelsUpload';
import { db } from '../firebase';

function Travels() {

    const [posts, setPosts] = useState([

    ])

    useEffect(() => {
        db.collection('travels').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc =>  ({
                id: doc.id,
                travel: doc.data()
            })));
        })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                {
                    posts.map(({id, travel}) => (
                        <div className="row mt-5">
                            <div className="col">
                                <a href={travel.url}><img className="life" src={travel.imageUrl} alt="..." /></a>
                            </div>
                            <div className="col mt-5">
                                <div className="line"></div>
                                <a href="#" className="post-tag">travel</a>
                                <a href={travel.url}><strong className="quin">
                                    {travel.title}
                                </strong></a>
                                <p className="imgtext1 mt-3">
                                    {travel.description}
                                </p>
                            </div>
                        </div>
                    ))
                }    
            </div>
            <div className="container mt-4">
                <a href="/" className="btn">Go Back</a>
            </div>
            <TravelsUpload />
        </div>
    )
}

export default Travels
