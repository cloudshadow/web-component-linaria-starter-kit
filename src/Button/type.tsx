import * as React from 'react';

export interface IButtonProps {
  /**
   * @ignore
   */
  children?: React.ReactNode;
  /**
   * @ignore
   */
  className?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * @ignore
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * @ignore
   */
  id?: string;
  /**
   * @ignore
   */
  name?: string;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  // size?: BUTTON_SIZE;
  size?: 'small' | 'medium' | 'large';
  /**
   * The theme of the component.
   * @default 'primary'
   */
  theme?: 'primary' | 'secondary' | 'danger';
}
