import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import {useState} from 'react';

function App() {

  const [isShownModal, setIsShownModal] = useState(false);


  const showModalHandler = () => {
    setIsShownModal(true);
  }

  const hideModalHandler = () => {
    setIsShownModal(false);
  }
  
  return (
    <>
    {isShownModal && <Cart  hideModalHandler={hideModalHandler} />}
    <Header showModalHandler={showModalHandler} />
    <main>
      <Meals />
    </main>
    </>
  );
}

export default App;
