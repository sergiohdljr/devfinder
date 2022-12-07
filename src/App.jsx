import { Wrapper } from './components/appWrapper'
import { Header } from './components/header'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import{lightTheme,darkTheme} from './styles/themes'
import { SearchBar } from './components/searchBar'
import ThemeContext from './context/themeContext'
import { useContext, useState } from 'react'


export default function App() {

  const[theme,setTheme]= useState(lightTheme)

  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
        <ThemeProvider theme={theme}>
            <GlobalStyles></GlobalStyles>
            <Wrapper>
              <Header></Header>
              <SearchBar></SearchBar>
            </Wrapper>
          </ThemeProvider> 
      </ThemeContext.Provider>   
  )
}

