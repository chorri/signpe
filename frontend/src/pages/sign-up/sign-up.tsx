import { useState } from 'react'

import { Button } from 'components'

export const SignUp = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="destructive" onClick={() => setCount(count => count + 1)}>
        SignUp
      </Button>
    </>
  )
}
