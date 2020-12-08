import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { useTheme, CssBaseline } from '@material-ui/core'
import './layout.css'
import {Footer, DrawerMenu, withPageConfig } from '../../@daisy-components'
import Content from './content'
import footerMenuItems from '../../config/footerconfig'
import mainMenuItems from '../../config/mainmenuconfig'

export const query = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      author
    }
  }
`

const Layout = ({ title, description, content, menuOpen, toggleMenu }) => {
  const theme = useTheme()

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            ...SiteInformation
          }
        }
      `}
      render={data => (         
        <div style={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
          <CssBaseline />
          <DrawerMenu mainMenuItems={mainMenuItems} open={menuOpen} setOpen={toggleMenu} />
          <Content title={title} description={description} open={menuOpen} content={content}/>
          <Footer footerMenuItems={footerMenuItems} author={data.site.siteMetadata.author} />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.node.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default withPageConfig(Layout)
