import React from 'react'
import { Helmet } from 'react-helmet'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'
import history from './constants/history'

export default function App(){
  return (
    <ThemeProvider>
      <Helmet>
        <meta charset="UTF-8"/>
        <base href="/"/>
        <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
        <meta content="true" name="HandHeldFriendly"/>
        <meta content="index, follow" name="robots"/>

        <meta content="Massief.biz" name="author"/>
        <meta content="Massief.biz"name="designer"/>
        <meta content="csmm" name="copyright"/>

        <meta content="CSMM is a web based server manager for 7 Days to die. Bring your server(s) to the next level with CSMMs advanced features! Join hundreds of other servers in a new generation of server management." name="description"/>
        <meta content="7 Days to Die, server manager, web, cloud, open source, csmm, Catalysm, Massief, 7 Days to Die server manager, monitor" name="keywords"/>
        <title>csmm | THE 7 Days to Die Server manager you need.</title>
        <link href="https://csmm.app/" rel="canonical"/>
        <meta content="#28B766" name="theme-color"/>
      </Helmet>
      <Style/>
      <Routing history={history}/>
    </ThemeProvider>
  )
}
