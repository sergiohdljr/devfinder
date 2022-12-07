import { Wrapper } from './components/appWrapper'
import { Header } from './components/header'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import{lightTheme,darkTheme} from './styles/themes'
import { SearchBar } from './components/searchBar'

export default function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles></GlobalStyles>
        <Wrapper>
          <Header></Header>
          <SearchBar></SearchBar>
        </Wrapper>
      </ThemeProvider>     
        
    </>
    
  )
}

