import * as S from './style';

interface Option {
  id: number | string;
  value: string;
  handler?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface DropdownProps {
  selectedValue: string;
  options: Option[];
}

const Dropdown = ({ selectedValue, options }: DropdownProps) => {
  return (
    <S.Dropdown>
      {options.map(({ id, value, handler }) => (
        <S.Option key={id} id={value} selectedvalue={selectedValue} value={value} onClick={handler}>
          {value}
        </S.Option>
      ))}
    </S.Dropdown>
  );
};

export default Dropdown;
