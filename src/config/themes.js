const drawerWidth = 260
const menuItemPadding = '5px 15px'
const menuFontSize = 16
const menuHeaderSize = 15
const h1Size = '2.7rem'
const h2Size = '2rem'
const h3Size = '1.3rem'
const headerFontFamily = 'Helvetica'

export const themes = {
    light: {
        palette:{
            primary: { 
                main: '#8EE4AF',
                contrastText: '#29657C'
            },
            secondary: {
                main: '#29657C',
                contrastText: '#ffffff'
            },
            background:{
                paper: "#ffffff",
                default: '#F2F2F2'
            },
            text:{
                primary: '#444444'
            }
        },
        typography:{
            h1: {
                fontFamily: headerFontFamily,
                fontSize: h1Size,
                fontWeight: '400'
            },
            h2: {
                fontFamily: headerFontFamily,
                fontSize: h2Size,
                fontWeight: 'normal',
                marginTop: '3.2rem'
            },
            h3: {
                fontFamily: headerFontFamily,
                fontSize: h3Size,
                fontWeight: 'normal'
            },
            h4: {
                fontFamily: headerFontFamily,
                //fontSize: h3Size,
                fontWeight: 'normal'
            },
            h5: {
                fontFamily: headerFontFamily,
                //fontSize: h3Size,
                fontWeight: 'normal'
            },
            h6: {
                fontFamily: headerFontFamily,
                //fontSize: h3Size,
                fontWeight: 'normal'
            }
        },
        mainMenu:{
            drawerWidth: drawerWidth,
            menuItem:{
                fontSize: menuFontSize,
            },
            menuButton:{
                padding: menuItemPadding,
                textDecoration: 'none'
            },
            headerItem:{
                fontSize: menuHeaderSize,
                marginBottom: 0
            },
            icon: {
                marginRight: 16,
                fontSize: menuFontSize,
            }
        },
        sectionHeader:{
            paddingBottom: 15
        },
        buttons: {
            variant: 'contained',
            color: 'secondary',
            padding: 16,
            boxShadow: "none",
            fullWidth: false,
            size: 'small'
        },
        forms: {
            maxWidth: 600,
            textField:{
                variant: 'outlined',
                margin: 'dense',
                fullWidth: true,
                color: 'secondary',
                size: 'small'
            }
        },
        snackBar:{
            autoHideDuration: 6000, 
            anchorOrigin: {
                vertical:'bottom',
                horizontal:'left'
            }
        }
    }
}