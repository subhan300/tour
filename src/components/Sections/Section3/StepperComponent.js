import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(3),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Meeting Point', 'Greek Gods & Philosophers', 'All About Hermes'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
             .`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              `;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {/* {steps.map((label, index) => ( */}
          <Step>
          <StepLabel>
Meeting Point</StepLabel>
            <StepContent>
            <p>Panepistimo- Athen</p>
            </StepContent>
          </Step>

          <Step>
            <StepLabel >

     <div style={{marginTop:"30px"}}> 
     <p style={{fontSize:"21px"}}>   Greek Gods & Philosophers<br></br>

        <span style={{fontSize:"16px"}}>  Walk along the trilogy of buildings representing the Greek Gods and philosophers of Greece</span>
        
       
   </p>
       
</div>

</StepLabel>
         
          </Step>
          
          <Step>
            <StepLabel >


<div>
<p style={{fontSize:"22px",paddingTop:"100px"}}>
All About Hermes<br></br>
<span style={{fontSize:"17px"}}>Stroll along the former street of the stock market and hear the story of God of commerce</span>
</p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is<br></br> simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting<br></br>industry.
</div>


</StepLabel>
          
          </Step>
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )} */}
    </div>
  );
}
