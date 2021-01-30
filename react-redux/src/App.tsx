import * as React from 'react'
// import React, {useState} from 'react'
const { useEffect, useState } = React
function App() {

  const [state, setState] = useState('')

  useEffect(() => {
      fetchData().then(response => setState(response))
  }, [])

  return (
    <>
      {state && (
        <>
          <p>{typeof state}</p>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </>
      )}
    </>
  );
}

const fetchData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/drednaw')
  const pokemon = await response.json()
  return pokemon
}

export default App;
