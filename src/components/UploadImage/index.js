import './styles.css'
import photo from '../../willsmith.jpg';
import Button from '../Button'
import avatarApi from '../../api/avatarApi'


const onClick = async () => {

      await avatarApi.getAvatar()

    //   setFilter(filter)
    //   queryClient.refetchQueries({ queryKey: Queries.HistoricalTargetsKPI })
    //   setEditing(false)
return
}

function UploadImage() {

    return (
        <div>
            <div className="Upload-Canva" style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                <p className='photo-header'>Your uploaded photography:</p>
                <img src={photo} className="photo" alt="photography" />
                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <Button text="Generate Avatar" onClick={onClick} />
                </div>
            </div>
        </div>
    );
}

export default UploadImage;