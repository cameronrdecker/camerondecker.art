import React from 'react';
import { useTheme, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function ActionButton(props) {
  const theme = useTheme()

  return (
      <Button
        style={{ padding: props.padding || theme.buttons.padding, boxShadow: theme.buttons.boxShadow}}
        fullWidth={props.fullWidth || theme.buttons.fullWidth}
        type={props.type}
        disabled={props.disabled}
        variant={props.variant || theme.buttons.variant}
        color={props.color || theme.buttons.color} 
        size={props.size || theme.buttons.size}
        onClick={props.onClick}
        disableRipple>
        {props.working ? <CircularProgress size={30}/> : props.label}
      </Button>
  )
}