import React from 'react'
import { render } from 'react-dom'

import Root from './Root';
import App from './App'

const main = () => {
  render(
    <Root>
      <App />
    </Root> , document.getElementById('app-root')
    )
}

main()
