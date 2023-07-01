import styled from 'styled-components';

import { PALETTE } from '@styles/color';

const ImageInputLayout = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageInput = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  width: max-content;
  height: 120px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  min-width: 80px;
  height: 80px;
  border-radius: 12px;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const Input = styled.input`
  display: none;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  position: relative;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const ImageLayout = styled.div`
  position: relative;
`;

// todo: 현재 카운트 개수 0일 때는 gray, 0이상 주황색으로 변경
const CurrentCount = styled.span`
  color: ${PALETTE.ORANGE};
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;

  width: 28px;
  height: 28px;
  border-radius: 50%;

  background-color: ${PALETTE.BLACK};
`;

export { ImageInputLayout, ImageInput, Label, Input, Image, ImageLayout, CurrentCount, DeleteImageButton };
