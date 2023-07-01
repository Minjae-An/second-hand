// ImageInput.tsx

import React, { ChangeEvent } from 'react';
import { ICON_NAME } from '@constants/index';
import Icon from '@components/common/Icon';
import * as S from './style';

interface ImageInputProps {
  onChange: (selectedFiles: FileList) => void;
  onDelete: (image: File) => void;
  images: File[];
}

const ImageInput: React.FC<ImageInputProps> = ({ onChange, onDelete, images }) => {
  const MAX_IMAGE_LENGTH = 10;

  const imageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files as FileList;

    if (onChange) {
      onChange(selectedFiles);
    }

    e.target.value = '';
  };

  const deleteImageHandler = (image: File) => {
    if (onDelete) {
      onDelete(image);
    }
  };

  return (
    <S.ImageInputLayout>
      <S.ImageInput>
        <S.Label htmlFor="ImageUpload">
          <Icon name={ICON_NAME.CAMERA} />
          <span>
            <S.CurrentCount>{images.length}</S.CurrentCount>/{MAX_IMAGE_LENGTH}
          </span>
        </S.Label>
        <S.Input type="file" id="ImageUpload" accept="image/*" multiple onChange={imageUploadHandler} />
        {images.map((image, idx) => (
          <S.ImageLayout key={idx}>
            <S.Image src={URL.createObjectURL(image)} />
            <S.DeleteImageButton onClick={() => deleteImageHandler(image)}>
              <Icon name={ICON_NAME.MULTIPLY} fill="WHITE" />
            </S.DeleteImageButton>
          </S.ImageLayout>
        ))}
      </S.ImageInput>
    </S.ImageInputLayout>
  );
};

export default ImageInput;
