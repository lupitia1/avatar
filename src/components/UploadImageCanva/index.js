import './styles.css'
import React, { useState } from 'react';
import photo from '../../willsmith.jpg';
// import Button from '../Button'
import avatarApi from '../../api/avatarApi'
import RenderedAvatar from '../RenderedAvatar';

import LoadImage from '../LoadImage';



function UploadImageCanva() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [loadedImage64, setLoadedImage64] = useState('')

    const onClick = async (img) => {
        const requestToSend = {
            name: 'wsmith',
            img: loadedImage64.split(',')[1],
            // body_id: 'ef0270c7-2183-47f8-97ba-86748849a3a7'
            body_id: '0c4604e6-c3ab-4b0c-9ecb-a2699f40a22f'

        }
        setLoading(true);
        //Save avatar before finishing this

        await avatarApi.createAvatar(requestToSend)
            .then(result => {
                setData(result.avatar_link)
                setLoading(false)
            });


        return
    }

    return (
        <>

            {data ? <RenderedAvatar avatarLink={data}/> :
                <>
                    <p>Upload your photo to generate an amazing Avatar </p>
                    {!isImageLoaded && <LoadImage onCreate={async (base64, ext, files) => {
                        setLoadedImage64(base64)
                        setIsImageLoaded(true);
                    }} />}
                    {loading ? <div className='Upload-Canva' style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                        <img className='spinner' src='assets/spinner2.gif' alt='Loading' /></div> :
                        <div className="Upload-Canva" style={{ display: !isImageLoaded ? 'none' : 'flex', flexDirection: "column", alignItems: 'center' }}>

                            <p className='photo-header'>Your uploaded photography:</p>
                            <img id='upladed-photo' src={loadedImage64} className="photo" alt="photography" />

                            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                                <button onClick={() => onClick(photo)} className='button'>
                                    {'Generate Avatar'}
                                </button>
                            </div>
                        </div>}

                </>}
        </>
    );
}

export default UploadImageCanva;