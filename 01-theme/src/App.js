import React, { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toDark = () => setTheme('dark');
  const toLight = () => setTheme('light');

  return (
    <div>
      {theme === 'light'
        ? <button onClick={toDark}>D</button>
        : <button onClick={toLight}>L</button>
      }
    </div>
  )

}

export default App;