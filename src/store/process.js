import { writable } from 'svelte/store';


const processBox = () => {
  // creates a new writable store populated with some initial data
  const title = {
    id: '1',
    title: "Where are you in your process?",
    text: "Let us know what stage you're at.",
  }



  const cards=[
    { id: '1', title: 'Art', state: 'TASK_INBOX' },
    { id: '2', title: 'Education', state: 'TASK_INBOX' },
    { id: '3', title: 'Fashion', state: 'TASK_INBOX' },
    { id: '4', title: 'Politics', state: 'TASK_INBOX' },
    { id: '3', title: 'Fashion', state: 'TASK_INBOX' },
    { id: '4', title: 'Politics', state: 'TASK_INBOX' },
    { id: '3', title: 'Fashion', state: 'TASK_INBOX' },
    { id: '4', title: 'Politics', state: 'TASK_INBOX' },
  ]

  const { subscribe, update } = writable({title, cards});


  return {
    subscribe,
    // method to archive a card, think of a action with redux or Vuex
    choose: id =>
      update(cards =>
        cards.map(card => (card.id === id ? { ...card, active: true } : card))
      ),
    // method to archive a card, think of a action with redux or Vuex
    
  };
};




export const processStore = processBox();


// store to handle the app state
const appState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  };
};

export const AppStore = appState();