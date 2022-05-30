import React from 'react';
import { IconFont } from '@cloud-app-dev/basic-components'
import './index.less'


const DesensitizationInformation = ({num, type})=> {
  return <div className="desensitization-information">
    <div className="d-i-num">{num}</div>
    <div className="d-i-icon"><IconFont type="icon-S_Bar_Eye"></IconFont></div>
  </div>
}

export default DesensitizationInformation