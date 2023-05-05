import React from 'react';
import toBase64 from './utils';

const LoadImage = ({ onCreate }) => {

  const onLoadFile = async (event) => {
    const files = event.target.files;

    if (!files) {
      return Promise.reject();
    } else {
      const base64Image = await toBase64(files[0]);
      
      const ext = files[0].name.split('.').pop();
      
      if (!ext) {

        return Promise.reject();
      } else {
        onCreate(base64Image, ext, files[0]);
      }

      return Promise.resolve();
    }
  };

  return (
    <label className="ui icon left labeled button" data-cy="btn-upload-image">
      {/* <Dimmer active={loading} inverted>
        <Loader />
      </Dimmer> */}
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={onLoadFile}
        accept="image/png, image/gif, image/jpeg"
      />
      <i className="upload icon" /> {'Load Image'}
    </label>
  );
};

export default LoadImage;
