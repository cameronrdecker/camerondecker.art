import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {themes} from './src/config/themes';
import { PageConfigProvider } from "./src/@daisy-components";

require('typeface-roboto');
const theme = createMuiTheme(themes.light);

export const wrapRootElement = ({ element }) => {
  return (
        <ThemeProvider theme={theme}>
            <PageConfigProvider>
                {element}
            </PageConfigProvider>
        </ThemeProvider> 
  )   
}