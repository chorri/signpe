import { useState } from 'react'

import { Button } from 'components'

export const Login = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="destructive" onClick={() => setCount(count => count + 1)}>
        Login
      </Button>
    </>
  )
}
