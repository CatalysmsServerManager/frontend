import React from 'react'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'
import history from './constants/history'

export default function App(){
  return (
    <ThemeProvider>
      <Style/>
      <Routing history={history}/>
    </ThemeProvider>
  )
}
