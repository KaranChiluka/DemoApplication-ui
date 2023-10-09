import React from 'react';

interface Props {
  image?: 'first' | 'second';
}

const FirstPage = ({ image }: Props) => {
  return (
    <div>
      {image == 'first' && <img src='C:\Users\karan\Desktop\gifs\gojo-gojo-satoru.gif'></img>}
      {image == 'second' && (
        <img src='C:\Users\karan\Desktop\gifs\3cfc0b4ddef9dbd03c1c524d653c08a2.gif'></img>
      )}
    </div>
  );
};

export default FirstPage;
