import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import Editor from './containers/EditorContainer'

export default function App() {

  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/counter' component={Counter} />
      <Route path='/editor' component={Editor} />
      <Route path='/fetch-data' component={FetchData} />
    </Layout>
  )
}
