import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

interface SuccessAlertProps {
    message: string;
    duration: number;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ message, duration }) => {
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

export default SuccessAlert;
