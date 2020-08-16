import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/badges'
import NotFound from '../pages/NotFound'
import Layout from './layout'

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFound} />
                    
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App