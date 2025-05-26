import * as React from 'react'

import { Button } from 'components'

export const Dashboard = () => {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <Button variant="destructive" onClick={() => setCount(count => count + 1)}>
        Dashboard
      </Button>
    </>
  )
}
