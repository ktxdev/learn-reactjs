import React, { useState } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import NewContact from './components/NewContact';

const App = () => {
  const initContactDetailsState = {
    photoUrl: "",
    name: "",
    phone: "",
    email: "",
    id: 0,
  }

  const [showContactDetails, setShowContactDetails] = useState(true);
  const [contactDetails, setContactDetails] = useState(initContactDetailsState)

  const toggleShowContactDetails = () => setShowContactDetails(!showContactDetails);

  const saveContactDetails = () => {
    console.log(contactDetails);
  }

  return (
    <div className='app'>
      { 
        showContactDetails && 
        <NewContact 
          contactDetails={contactDetails} 
          setContactDetails={setContactDetails}
          onCancel={toggleShowContactDetails}
          onSave={saveContactDetails}/> 
      }
      <Header onNewContact={toggleShowContactDetails}/>
      <Contact />
    </div>
  );
}

export default App;
