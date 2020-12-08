import React from 'react'
import { Loading, SEO } from '../@daisy-components'
import {makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  body:{
    backgroundColor:'#29657c'
  }
}))

const NotFoundPage = () => {

  return(
    <div style={{backgroundColor:'#29657c',minHeight:'100%',height:'100%'}}>
    <SEO title={'404 Not Found'} />
    <h1>404 Not Found</h1>
    <p>Can't find that page. Why would you even look for that?</p>
    </div>
)}

export default NotFoundPage
