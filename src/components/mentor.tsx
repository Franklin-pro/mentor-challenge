import React from "react";
import { Image } from "antd";
import mentor from '../assets/mentor.json';

function Mentor() {
    
    

    return (
        <div className="mentor-container">
            <div className="mentors">
                <div className="grid">
                    {mentor ? (
                        mentor.map((mentorItem, index) => (
                            <div className="image" key={index}>
                                <div>
                                    {mentorItem.newsImage.map((imageUrl, imageIndex) => (
                                        <Image
                                            key={imageIndex}
                                            src={imageUrl}
                                            alt={`Gallery Image ${imageIndex}`}
                                            className={`gallery-img `}
                                            style={{ objectFit: "cover",width:'100%' }}
                                        />
                                    ))}
                                </div>
                                <div className={`text`}>
                                    <h1>{mentorItem.name}</h1>
                                    <p>{mentorItem.title}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mentor;
