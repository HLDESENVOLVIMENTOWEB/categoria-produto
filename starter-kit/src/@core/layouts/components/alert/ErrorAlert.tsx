import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

interface ErrorAlertAlertProps {
    message: string;
    duration: number;
}

const ErrorAlert: React.FC<ErrorAlertAlertProps> = ({ message, duration }) => {
    const [open, setOpen] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!open) return null;

    return (
        <Alert severity="error">
            {message}
        </Alert>
    );
};

export default ErrorAlert;
