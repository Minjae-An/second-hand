import { useState } from 'react';

import * as S from './style';

type ActiveButtonState = 'selling' | 'soldOut';

const SalesHeader = () => {
  // TODO: 상태 끌어올리기
  const [activeButton, setActiveButton] = useState<ActiveButtonState>('selling');

  return (
    <S.SalesHeader>
      <S.Title>판매 내역</S.Title>
      <S.ButtonLayout>
        <S.Button
          className={activeButton === 'selling' ? 'active' : ''}
          id="sellingButton"
          onClick={() => setActiveButton('selling')}
        >
          판매중
        </S.Button>
        <S.Button
          className={activeButton === 'soldOut' ? 'active' : ''}
          id="soldOutButton"
          onClick={() => setActiveButton('soldOut')}
        >
          판매완료
        </S.Button>
      </S.ButtonLayout>
    </S.SalesHeader>
  );
};

export default SalesHeader;
