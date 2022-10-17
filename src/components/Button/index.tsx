import React from 'react';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';

export interface ButtonProps extends LoadingButtonProps {
}

export const Button = ({
                           variant = 'contained',
                           color = 'primary',
                           children,
                           title,
                           ...props
                       }: ButtonProps): React.ReactElement<ButtonProps> => (
    <LoadingButton
        loadingPosition={props.startIcon ? 'start' : 'center'}
        variant={variant}
        color={color}
        {...props}
    >
        {title || children}
    </LoadingButton>
);
