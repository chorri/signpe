import { useState } from 'react'

import { Button } from 'components'

export const Dashboard = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="destructive" onClick={() => setCount(count => count + 1)}>
        Dashboard
      </Button>
    </>
  )
}
