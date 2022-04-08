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

  const [contacts, setContacts] = useState([
    {
      id: 1,
      photoUrl: "https://avatars.githubusercontent.com/u/64103955?v=4",
      name: "Sean Huvaya",
      phone: "+263773806130",
      email: "sean.ktxdev@gmail.com"
    }
  ])
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [contactDetails, setContactDetails] = useState(initContactDetailsState)

  const toggleShowContactDetails = () => setShowContactDetails(!showContactDetails);

  const saveContactDetails = () => {
    if(contactDetails.id === 0) {
      setContactDetails({...contactDetails, id: contacts.length + 1});
      setContacts([...contacts, contactDetails]);
    }
    setContactDetails(initContactDetailsState);
  }

  return (
    <div className='app'>
      {
        showContactDetails &&
        <NewContact
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          onCancel={toggleShowContactDetails}
          onSave={saveContactDetails} />
      }
      <Header onNewContact={toggleShowContactDetails} />
      {
        contacts.map(contact => <Contact {...contact} />)
      }
    </div>
  );
}

export default App;
