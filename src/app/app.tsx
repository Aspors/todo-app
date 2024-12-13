import React, { FunctionComponent } from 'react'

import './styles/index.scss';
import Card from 'src/widgets/card';

export const App: FunctionComponent = () => (
  <div>
    <h1>todos</h1>
    <Card />
  </div>
)
