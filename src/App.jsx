
import './App.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';
import { useState } from 'react';
import Post from './components/Post'
import { AddCircleOutlineOutlined} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close'

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className='app'>
      <Header />  
      <DatingCards />
      <SwipeButtons />
      <button 
        className="show-modal-button" onClick={handleShowModal}>
        <AddCircleOutlineOutlined fontSize='large'/>
          </button>
       {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-button" onClick={handleCloseModal}>
                <CloseIcon fontSize='large'/>
            </button>
            <Post />
          </div>
        </div>
      )}
    </div>
  )
    
}

export default App
