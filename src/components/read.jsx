import React from "react";
import { Image } from "antd";

function Readmore({ imageUrl, imageIndex, slideshowActive, currentMentorIndex }) {
    return (
        <div className="read-container">
            <div className="read-more">
                <div className="image-container">
                    <div className="image">
                        <Image
                            key={imageIndex}
                            src={imageUrl}
                            alt={`Gallery Image ${imageIndex}`}
                            className={`gallery-img ${slideshowActive && currentMentorIndex === imageIndex ? 'active' : ''}`}
                            style={{ objectFit: "cover", width: '100%' }}
                        />
                    </div>
                    <div className="cards">
                        {/* Additional information cards */}
                    </div>
                    <div className="small-image">
                        {/* Small images or thumbnails */}
                    </div>
                </div>
                <div className="description-container">
                    <div className="text">
                        {/* Description text */}
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-cont">
                    <div className="text-footer">
                        {/* Footer text */}
                    </div>
                    <div className="icon-footer">
                        {/* Footer icons */}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Readmore;
