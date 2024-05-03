/**
 *  Component - Stepper
 */

'use client'

import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import {
  Box,
  Stepper as MuiStepper,
  Step, StepButton, StepLabel
} from '@mui/material';

export const Stepper = (props: StepperProps): ReactElement => {
  const [ activeStepIndex, setActiveStepIndex ] = useState(0);

  useEffect(() => {
    const { currentStepIndex } = props;
    setActiveStepIndex(currentStepIndex || 0);
  }, [ props ]);

  const onClickStepItem = (index: number) => {
    const { onChangeStep } = props;
    setActiveStepIndex(index);
    if(onChangeStep) { onChangeStep(index); }
  }

  const generateStepItem = () => {
    const { steps, disabled } = props;
    return steps.map((stepLabel, idx) => {
      return (
        <Step
          key={`step-item-${ idx }`}
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
            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
              fontWeight: 'bold',
              color: '#000',
            },
            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
              fill: '#fff',
            },
            '& .MuiStepLabel-root .MuiStepIcon-text': {
              fill: '#000',
            }
          }}
        >
          {
            (disabled)
            ? (<StepLabel>{ stepLabel }</StepLabel>)
            : (
              <StepButton color={'inherit'} onClick={() => { onClickStepItem(idx); }}>
                { stepLabel }
              </StepButton>
            )
          }
        </Step>
      );
    });
  }

  return (
    <Box sx={{ width: '100%', paddingY: '20px' }}>
      <MuiStepper
        activeStep={ activeStepIndex }
        nonLinear={ props.nonLinear }
        alternativeLabel={ props.labelPosition !== 'right' }
      >
        { generateStepItem() }
      </MuiStepper>
    </Box>
  );
}

interface StepperProps {
  steps: Array<string>;
  currentStepIndex?: number;

  /** @default 'bottom' */
  labelPosition?: 'bottom' | 'right';

  nonLinear?: boolean;
  disabled?: boolean;
  onChangeStep?: (stepIndex: number) => void;
}