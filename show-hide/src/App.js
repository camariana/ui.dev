import React, { useState } from 'react';

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.
*/


const App = ({ posts }) => {
  const [post, setPost] = useState([ ...posts ])
  const [togglePost, setTogglePost] = useState(false);

  console.log(post);

  const show = () => setTogglePost('show');
  const hide = () => setTogglePost('hide');

  return (
    <ul>
      {/* {JSON.stringify(posts, null, 2)} */}

      
    </ul>
  )

}

export default App;