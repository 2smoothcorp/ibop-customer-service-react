'use client'

import { Box, Step, StepButton, Stepper } from "@mui/material";
import React from "react";

export default function TabNavbar({
    list,
    onChange,
}: TabNavbarProps) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
        if (onChange) onChange(step);
    };

    return (
        <Box sx={{ width: '100%', paddingY: '20px' }}>
            <Stepper nonLinear alternativeLabel activeStep={activeStep}>
                {list.map((label, index) => (
                    <Step key={label}
                        sx={{
                            '& .MuiStepConnector-root': {
                                top: '15px',
                                left: 'calc(-50% - 0px)',
                                right: 'calc(50% - 0px)',
                            },
                            '& .MuiStepConnector-line': {
                                borderColor: '#00000026',
                            },
                            '& .MuiStepLabel-label': {
                                fontWeight: 'bold',
                                color: '#000',
                                fontSize: '14px',
                                marginTop: '10px',
                            },
                            '& .MuiStepLabel-root': {
                                zIndex: 1,
                                color: '#FFF',
                            },
                            '& .MuiStepLabel-root .MuiStepIcon-root': {
                                borderRadius: '50%',
                                borderWidth: '1px',
                                borderColor: '#00000026',
                                color: '#FFFBFB',
                                fontSize: '30px',
                            },
                            '& .MuiStepLabel-root .Mui-active': {
                                color: '#1F346B',
                            },
                            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                            {
                                fontWeight: 'bold',
                                color: '#000',
                            },
                            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                fill: '#fff',
                            },
                            '& .MuiStepLabel-root .MuiStepIcon-text': {
                                fill: '#000',
                            },
                        }}
                    >
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

type TabNavbarProps = {
    list: string[];
    onChange?: (index: number) => void;
}