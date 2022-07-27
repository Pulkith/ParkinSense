import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import '../css/Timeline.css'



function Timeline(props){


	const QontoConnector = styled(StepConnector)(({ theme }) => ({
		[`&.${stepConnectorClasses.alternativeLabel}`]: {
		  top: 10,
		  left: 'calc(-50% + 16px)',
		  right: 'calc(50% + 16px)',
		},
		[`&.${stepConnectorClasses.active}`]: {
		  [`& .${stepConnectorClasses.line}`]: {
			borderColor: '#784af4',
		  },
		},
		[`&.${stepConnectorClasses.completed}`]: {
		  [`& .${stepConnectorClasses.line}`]: {
			borderColor: '#784af4',
		  },
		},
		[`& .${stepConnectorClasses.line}`]: {
		  borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		  borderTopWidth: 3,
		  borderRadius: 1,
		},
	  }));
	  
	  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
		color: 'white',
		display: 'flex',
		height: 22,
		alignItems: 'center',
		...(ownerState.active && {
		  color: 'var(--green)',
		}),
		'& .QontoStepIcon-completedIcon': {
		  color: 'var(--green)',
		  zIndex: 1,
		  fontSize: 18,
		},
		'& .QontoStepIcon-circle': {
		  width: 8,
		  height: 8,
		  borderRadius: '50%',
		  backgroundColor: 'currentColor',
		},
	  }));
	  
	  function QontoStepIcon(props) {
		const { active, completed, className } = props;
	  
		return (
		  <QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? (
			  <Check className="QontoStepIcon-completedIcon" />
			) : (
			  <div className="QontoStepIcon-circle" />
			)}
		  </QontoStepIconRoot>
		);
	  }
	  
	  QontoStepIcon.propTypes = {
		/**
		 * Whether this step is active.
		 * @default false
		 */
		active: PropTypes.bool,
		className: PropTypes.string,
		/**
		 * Mark the step as completed. Is passed to child components.
		 * @default false
		 */
		completed: PropTypes.bool,
	  };
	  
	  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
		[`&.${stepConnectorClasses.alternativeLabel}`]: {
		  top: 22,
		},
		[`&.${stepConnectorClasses.active}`]: {
		  [`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
			  'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		  },
		},
		[`&.${stepConnectorClasses.completed}`]: {
		  [`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
			  'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		  },
		},
		[`& .${stepConnectorClasses.line}`]: {
		  height: 3,
		  border: 0,
		  backgroundColor: 'white',
		  borderRadius: 1,
		},
	  }));
	  
	  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		...(ownerState.active && {
		  backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
		  boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
		}),
		...(ownerState.completed && {
		  backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
		}),
	  }));
	  
	  function ColorlibStepIcon(props) {
		const { active, completed, className } = props;
	  
		const icons = {
		  1: <SettingsIcon />,
		  2: <GroupAddIcon />,
		  3: <VideoLabelIcon />,
		};
	  
		return (
		  <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
			{icons[String(props.icon)]}
		  </ColorlibStepIconRoot>
		);
	  }
	  
	  ColorlibStepIcon.propTypes = {
		/**
		 * Whether this step is active.
		 * @default false
		 */
		active: PropTypes.bool,
		className: PropTypes.string,
		/**
		 * Mark the step as completed. Is passed to child components.
		 * @default false
		 */
		completed: PropTypes.bool,
		/**
		 * The label displayed in the step icon.
		 */
		icon: PropTypes.node,
	  };
	  
	  const steps = ['Task 1A - "a"', 'Task 1B - "o"', 'Tash 1C - "u"', "Task 2A - Smile","Task 2B - Disgust ","Task 2C - Suprise","Task 2D - Anger", "Task 3 - Speech", "Task 4 - Questions"];
	  
	  const repeatPrev = () => {
		window.location.href = "/study?task=" + (props.step-1)
	  }


	return(
		<div>
				<Stack sx={{ }} spacing={4} className="progress3">
				{
					props.step != 1 && 
					<Button variant="contained" color="info"  style={{"fontSize": "1rem"}} className="buttonitem centerbutton" onClick={() => repeatPrev()}>Repeat Previous Task</Button>
				}
				
					<Stepper alternativeLabel activeStep={props.step - 1} connector={<QontoConnector />}>
						{steps.map((label) => (
						<Step key={label}>
							<StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
						</Step>
						))}
					</Stepper>
					

				</Stack>
		</div>
	)
	
}

export default Timeline;
