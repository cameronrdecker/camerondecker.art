/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {themes} from './src/config/themes';
import { PageConfigProvider } from "./src/@daisy-components";

require('typeface-roboto');
const theme = createMuiTheme(themes.light);

export default ({ element }) => {
  return (
        <ThemeProvider theme={theme}>
            <PageConfigProvider>
                {element}
            </PageConfigProvider>
        </ThemeProvider> 
  )   
}