import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import { db } from '../firebase';
import Lifestylesupload from './Lifestylesupload';

function Lifestyles() {

    const [posts, setPosts] = useState([

    ])

    useEffect(() => {
        db.collection('lifestyles').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc =>  ({
                id: doc.id,
                lifestyle: doc.data()
            })));
        })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                {
                    posts.map(({id, lifestyle}) => (
                        <div className="row mt-5">
                            <div className="col">
                                <a href={lifestyle.url}><img className="life" src={lifestyle.imageUrl} alt="..." /></a>
                            </div>
                            <div className="col mt-5">
                                <div className="line"></div>
                                <a href="#" className="post-tag">LIFESTYLE</a>
                                <a href={lifestyle.url}><strong className="quin">
                                    {lifestyle.title}
                                </strong></a>
                                <p className="imgtext1 mt-3">
                                    {lifestyle.description}
                                </p>
                            </div>
                        </div>
                    ))
                }    
            </div>
            <div className="container mt-4">
                <a href="/" className="btn">Go Back</a>
            </div>
            <Lifestylesupload />
        </div>
    )
}

export default Lifestyles
