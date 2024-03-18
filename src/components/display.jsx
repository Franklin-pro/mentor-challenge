import React, { useState, useEffect } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import NavBar from "./navbar";
import mentor from '../assets/mentor.json';
// import { Image } from "antd";

function Display() {
    const [filteredMentors, setFilteredMentors] = useState([]);

    useEffect(() => {
     
        const filtered = mentor.filter(mentorItem => {
          
            return mentorItem.title.includes("Developer");
        });
        setFilteredMentors(filtered);
        console.log(setFilteredMentors)
    }, []);

    return (
        <>
            <NavBar />
            <div className="read-container">
                <div className="read-more">
                    {filteredMentors.length > 0 ? (
                        filteredMentors.map((mentorItem) => (
                            <div className="mentor-item" key={mentorItem.id}>
                                <div className="image-container">
                                    <div className="image">
                                        <img src={mentorItem.newsImage} alt="home" />
                                    </div>
                                    <div className="cards">
                                        <h1>{mentorItem.name}</h1>
                                        <p>{mentorItem.title}</p>
                                    </div>
                                    <div className="small-image">
                                        <img src={mentorItem.smallImage} alt="home" />
                                    </div>
                                </div>
                                <div className="description-container">
                                    <div className="date">
                                        <h1>1889</h1>
                                    </div>
                                    <div className="text">
                                        <p>{mentorItem.description}</p>
                                    </div>
                                    <div className="src">
                                        <a href="#" className="link">go to source</a>
                                    </div>
                                </div>
                                <footer>
                                    <div className="footer-cont">
                                        <div className="text-footer">
                                            <h1>{mentorItem.title}</h1>
                                            <p>{mentorItem.name}</p>
                                        </div>
                                        <div className="icon-footer">
                                            <SkipPreviousIcon className="icon next" />
                                            <SkipNextIcon className="icon pre" />
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        ))
                    ) : (
                        <p>No mentors found matching the filter criteria.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Display;
