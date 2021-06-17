
import FoodsUpload from './FoodsUpload';
import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import { db } from '../firebase';

function Foods() {

    const [posts, setPosts] = useState([

    ])

    useEffect(() => {
        db.collection('foods').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc =>  ({
                id: doc.id,
                food: doc.data()
            })));
        })
    }, []);
    return (
        <div>
            <Navbar />
            <div className="container">
                {
                    posts.map(({id, food}) => (
                        <div className="row mt-5">
                            <div className="col">
                                <a href={food.url}><img className="life" src={food.imageUrl} alt="..." /></a>
                            </div>
                            <div className="col mt-5">
                                <div className="line"></div>
                                <a href="#" className="post-tag">food</a>
                                <a href={food.url}><strong className="quin">
                                    {food.title}
                                </strong></a>
                                <p className="imgtext1 mt-3">
                                    {food.description}
                                </p>
                            </div>
                        </div>
                    ))
                }    
            </div>
            <div className="container mt-4">
                <a href="/" className="btn">Go Back</a>
            </div>
            <FoodsUpload />
        </div>
    )
}

export default Foods
