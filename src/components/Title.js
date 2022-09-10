import React from 'react'

const Title = () => {
    console.log("rendering the title component")
  return (
    <div>Title</div>
  )
}

export default React.memo(Title);
// memo method from react will make the components pure which means the particular component will be re-rendered only if there is a state or prop change in this component