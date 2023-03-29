import * as React from 'react';
import { styled } from '@linaria/react';
import { IButtonProps } from './type';

const ButtonContainer = styled.button<{
  className: string;
  disabled: boolean;
  theme: string;
  size: string;
  fullWidth: boolean;
}>`
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled
      ? '#ccc'
      : props.theme === 'primary'
      ? '#458500'
      : props.theme === 'danger'
      ? '#d32f2f'
      : '#fff'};
  color: ${(props) =>
    props.disabled || props.theme === 'primary' || props.theme === 'danger'
      ? '#fff'
      : '#333'};
  border: ${(props) =>
    props.disabled || props.theme === 'primary' || props.theme === 'danger'
      ? '1px solid transparent'
      : '1px solid #ccc'};
  border-radius: ${(props) =>
    props.size === 'large' ? '8px' : props.size === 'medium' ? '6px' : '4px'};
  padding: ${(props) =>
    props.size === 'large'
      ? '8px 16px'
      : props.size === 'medium'
      ? '6px 12px'
      : '4px 8px'};
  font-size: ${(props) =>
    props.size === 'large'
      ? '20px'
      : props.size === 'medium'
      ? '16px'
      : '12px'};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  className,
  disabled = false,
  fullWidth = false,
  onClick,
  id,
  name,
  size = 'medium',
  theme = 'primary', // primary secondary danger
}: IButtonProps) => (
  <ButtonContainer
    type="button"
    className={`${className || ''}`}
    disabled={disabled}
    onClick={onClick}
    id={id}
    name={name}
    theme={theme}
    fullWidth={fullWidth}
    size={size}
  >
    {children}
  </ButtonContainer>
);

export { Button };
