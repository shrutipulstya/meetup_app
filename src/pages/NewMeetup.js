import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {

  const history = useHistory();

  function onAddMeetupHandler(meetupData) {
    fetch('https://meetup-app-731a8-default-rtdb.firebaseio.com/meetups.json',
    {
      method : 'POST',
      body : JSON.stringify(meetupData),
      headers : {
        'Content-type' : 'application/json'
      }
    }
    ).then( () => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup = {onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
