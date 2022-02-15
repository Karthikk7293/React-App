import React, { Fragment } from 'react'
import {Alert} from "react-bootstrap"
import {motion} from 'framer-motion'

const ErrorMessage = ({variant ="info",children}) => {
    return (
      <Fragment>
 <Alert variant={variant} style={{fontSize:10}}>
   
          <strong>{children}</strong>

      </Alert>
      </Fragment>
     
    )
}

export default ErrorMessage
