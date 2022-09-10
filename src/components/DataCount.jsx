import React from 'react'

const DataCount = ({count, text}) => {
    console.log('rendering the datacount component');
  return (
    <div>
        {text}-{count}
    </div>
  )
}

export default React.memo(DataCount)