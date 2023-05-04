import './styles.css'
import React, { useState } from 'react';
import photo from '../../willsmith.jpg';
// import Button from '../Button'
import avatarApi from '../../api/avatarApi'
import RenderedAvatar from '../RenderedAvatar';




function UploadImage() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const onClick = async () => {

        // await avatarApi.getAvatar()

        setLoading(true);
        //Save avatar before finishing this
        
        avatarApi.getAvatar()
            .then(result => {
                setData(result.data)
                setLoading(false)
            });

        return
    }

    return (
        <>{data ? <RenderedAvatar /> :
            <>
                <p>Upload your photo to generate an amazing Avatar </p>
                {loading ? <div className='Upload-Canva' style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}><img className='spinner' src='assets/spinner2.gif' alt='Loading'/></div> : 
                <div className="Upload-Canva" style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>

                    <p className='photo-header'>Your uploaded photography:</p>
                    <img src={photo} className="photo" alt="photography" />
                    <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                        <button onClick={onClick} className='button'>
                            {'Generate Avatar'}
                        </button>
                    </div>
                </div>}

            </>}
        </>
    );
}

export default UploadImage;