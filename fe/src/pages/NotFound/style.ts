import styled from 'styled-components';

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  height: 100vh;
`;

const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fonts.title1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.title1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.title1.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const PageButton = styled.button`
  width: 178px;
  height: 52px;
  padding: 16px 20px;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

export { NotFound, ErrorMessage, PageButton };
