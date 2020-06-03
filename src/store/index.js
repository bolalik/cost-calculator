import { writable } from 'svelte/store';
const cardBox = () => {
  // creates a new writable store populated with some initial data
  const cardListData = {
    id: '1',
    title: "What's your site about?",
    text: 'This will help us find you some starting ideas and examples.',
  }
  const { subscribe, update } = writable({...cardListData, cards:[
    { id: '1', title: 'Art', state: 'TASK_INBOX' },
    { id: '2', title: 'Education', state: 'TASK_INBOX' },
    { id: '3', title: 'Fashion', state: 'TASK_INBOX' },
    { id: '4', title: 'Politics', state: 'TASK_INBOX' },
    { id: '3', title: 'Fashion', state: 'TASK_INBOX' },
    { id: '4', title: 'Politics', state: 'TASK_INBOX' },
    { id: '3', title: 'Fashion', state: 'TASK_INBOX' },
    { id: '4', title: 'Politics', state: 'TASK_INBOX' },
  ]});


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
export const cardStore = cardBox();

// store to handle the app state
const appState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  };
};

export const AppStore = appState();