import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageComponent = ({ imageUrl, width, height }) => {
    //console.log(imageUrl);
    const [imageSrc, setImageSrc] = useState('');

    useEffect( () => {
        const fetchImage = async () => {
            try {
                const response = await axios.get( imageUrl, { responseType: 'arraybuffer' } );
                const imageExtension = getImageExtensionFromUrl( imageUrl );
                const imageType = getImageTypeFromExtension( imageExtension );
                const imageBlob = new Blob( [response.data], { type: imageType });
                const imageUri = URL.createObjectURL( imageBlob );
                setImageSrc( imageUri );
            } catch (error) {
                console.error('이미지 가져오기 통신 실패', error);
            }
        };

        if ( imageUrl ) {
            fetchImage();
        }
    }, [imageUrl]);

    const getImageExtensionFromUrl = ( url ) => {
        const extensionMatch = url.match( /\.(jpg|jpeg|png|gif)$/i );
        if ( extensionMatch ) {
            return extensionMatch[1].toLowerCase();
        }
        return '';
    };

    const getImageTypeFromExtension = ( extension ) => {
        switch ( extension ) {
            case 'jpg':
            case 'jpeg':
                return 'image/jpeg';
            case 'png':
                return 'image/png';
            case 'gif':
                return 'image/gif';
            default:
                return '';
        }
    };

    const imageStyle = {
        width: `${width}px`,
        height: `${height}px`,
   };

    return <img src={imageSrc} style={imageStyle} alt="외부서버 이미지" />
};

export default ImageComponent;