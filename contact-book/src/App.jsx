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

  const [contacts, setContacts] = useState([])
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [contactDetails, setContactDetails] = useState(initContactDetailsState)

  const toggleShowContactDetails = () => {
    if (showContactDetails) {
      setContactDetails(initContactDetailsState);
    }
      
    setShowContactDetails(!showContactDetails);
  }

  const saveContactDetails = () => {
    if (contactDetails.id === 0) {
      setContacts([...contacts, { ...contactDetails, id: contacts.length + 1 }]);
    } else {
      const updatedContacts = contacts.map(contact => {
        if (contact.id === contactDetails.id)
          return contactDetails;
        return contact;
      })

      setContacts(updatedContacts);
    }
    toggleShowContactDetails();
  }

  const editContactDetails = (id) => {
    const contactToUpdate = contacts.filter(contact => contact.id === id)[0];
    setContactDetails(contactToUpdate);
    toggleShowContactDetails();
  }

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
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
      <section className='contact-list'>
        {
          contacts.length === 0 && <h4>No Contacts</h4>
        }
        {
          contacts.map(contact => <Contact {...contact} onEdit={editContactDetails} onDelete={deleteContact} />)
        }
      </section>
    </div>
  );
}

export default App;
