import { useEffect, useState } from 'react'
import './App.css'
import Dice1 from "./dice 1.png"
import Dice2 from "./dice 2.png"
import Dice3 from "./dice 3.png"
import Dice4 from "./dice 4.png"
import Dice5 from "./dice 5.png"
import Dice6 from "./dice 6.png"
import Pop from "./popup.jsx"

const data = [
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6
];

function App() {
  const [images, setImages] = useState([data[0], data[1]]);
  const [pop, setpop] = useState(false);

  useEffect(() => {
    setImages(data)
  }, [])

  const shuffle = () => {
    const result = [
      data[Math.floor(Math.random() * data.length)],
      data[Math.floor(Math.random() * data.length)]
    ];
    setImages(result);

    if (result[0] === result[1]) {
      setpop(true);
    } else {
      setpop(false);
    }
  };
  const closePopup = () => {
    setpop(false);
  };

  return (
    <>
      <div className='main'>
        <div className='main-1'>
          <img src={images[0]} alt="Dice 1" className='imag' />
        </div>
        <div className='main-2'>
          <img src={images[1]} alt="Dice 2" className='imag' />
        </div>
      </div>
      {!pop&&
      <button onClick={shuffle} className='butt'>Shuffle</button>
      }
      {
        <Pop  pop={pop} closePopup={closePopup} />
      }
    </>
  );
}

export default App;
