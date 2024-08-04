import React, { useState } from 'react';
import Modal from 'react-modal';
import Hlp1 from '..\\fact\\help1.png';
import Hlp2 from '..\\fact\\help2.png';
import Hlp3 from '..\\fact\\help3.png';
import Hlp4 from '..\\fact\\help4.png';
import Hlp5 from '..\\fact\\help5.png';

// برای اطمینان از اینکه مودال به درستی درخت DOM را پیدا می‌کند
Modal.setAppElement('#root');

const App = ( {varoo}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  var images = [Hlp1, Hlp2, Hlp3, Hlp4];
if (varoo.lastIndexOf("@")>0) images = [Hlp5];

  const openModal = () => {
    setModalIsOpen(true);
    setCurrentImageIndex(0); // بازنشانی به اولین تصویر هنگام باز شدن مودال
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  

  return (
    <div>
      <button onClick={openModal}className="imbo5">  </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Modal Title</h2>
        <div>
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
        <button onClick={handlePrevious}className="imbo7">  </button>
        <button onClick={handleNext}className="imbo6">  </button>
        <button onClick={closeModal}className="imbo8">   </button>
      </Modal>
    </div>
  );
};

export default App;
