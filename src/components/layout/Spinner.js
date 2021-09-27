import React, { Fragment } from 'react'
import spinner from './spinner.gif' //we can import images because of webpack


const Spinner = () => <Fragment>
      <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </Fragment>

export default Spinner