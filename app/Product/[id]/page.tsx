import { Params } from 'next/dist/server/request/params'
import React from 'react'


// Dynamic Routing

// An Async function that receive route parameters as a prop
const product = async ({params}: {params: {id: string}}) => {

  // destructures the id from the params property
  const {id} = await params;
  return (
    <div>
      Product {id}
    </div>
  )
}

export default product
