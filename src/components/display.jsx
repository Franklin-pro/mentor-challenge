import React, { useState, useEffect } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import NavBar from "./navbar";
import mentor from '../assets/mentor.json';
import 'aos/dist/aos.css'
import AOS from 'aos';


function Display() {
    const [filteredMentors, setFilteredMentors] = useState([]);
    const [nextClicked, setNextClicked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const filtered = mentor.filter(mentorItem => mentorItem.id === currentIndex + 1);
        setFilteredMentors(filtered);
    }, [currentIndex]);
useEffect(()=>{
    AOS.init({duration:1000})
})


    const nextMentor = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setNextClicked(true);
    };

    return (
        <>
            <NavBar link='stop slideshow'/>
            <div className="read-container">
                <div className="read-more">
                    {filteredMentors.length > 0 ? (
                        filteredMentors.map((mentorItem) => (
                          
                         <>
                           <div className="mentor-item" key={mentorItem.id}>
                                <div className="image-container">
                                    <div className="image">
                                        <img src={mentorItem.newsImage} alt="home" data-aos="fade-up"/>
                                    </div>
                                    <div className="cards" data-aos="fade-left">
                                        <h1>{mentorItem.name}</h1>
                                        <p>{mentorItem.title}</p>
                                    </div>
                                    <div className="small-image">
                                        <img src={mentorItem.smallImage} alt="home" />
                                    </div>
                                </div>
                                <div className="description-container" data-aos="fade-left" data-aos-anchor-placement="center">
                                    <div className="date">
                                        <h1>1889</h1>
                                    </div>
                                    <div className="text">
                                        <p>{mentorItem.description}</p>
                                        <div className="src">
                                        <a href="exam" className="link">go to source</a>
                                    </div>
                                    </div>
                                    
                                </div>
                               
                            </div>
                             <footer>
                             <div className="footer-cont">
                                 <div className="text-footer">
                                     <h1>{mentorItem.title}</h1>
                                     <p>{mentorItem.name}</p>
                                 </div>
                                 <div className="icon-footer">
                                 <SkipPreviousIcon className={`icon next ${nextClicked ? 'black' : 'green'}`} onClick={() => setCurrentIndex(prevIndex => prevIndex - 1)}/>
                                     <SkipNextIcon className="icon pre" onClick={nextMentor}/>
                                 </div>
                             </div>
                         </footer>
                         </>
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
