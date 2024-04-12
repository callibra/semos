import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Popup } from './Popup';
import { GalleryContext } from './../utils/GalleryContext';

export const Gallery = ({ listOfPhotos }) => {
    const { selectedPhoto, setSelectedPhoto } = useContext(GalleryContext);

    return (
        <div id="gallery">
            {listOfPhotos.slice(0, 50).map(photo => {
                return (
                    <div
                        key={photo.id}
                        className='image-holder'
                        onClick={() => { setSelectedPhoto(photo.url) }}
                    >
                        <div className="image-container">
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            <p>{photo.title}</p>
                        </div>
                    </div>
                )
            })}
            {selectedPhoto !== "" && <Popup />}
        </div>
    )
}

Gallery.propTypes = {
    listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

