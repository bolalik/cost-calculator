import { writable } from 'svelte/store';

const siteBox = () => {
  // creates a new writable store populated with some initial data
  const title = {
    id: '1',
    title: "What's your site about?",
    text: 'This will help us find you some starting ideas and examples.',
  }

  const textInput = {
    id: '1',
    label: "Don't see what you’re looking for?",
    placeholder: "Describe your site...",
  }

  const cards = [
    { id: '1', title: 'Education',  active: false },
    { id: '2', title: 'Fashion',  active: false },
    { id: '3', title: 'Politics',  active: false },
    { id: '4', title: 'Art',  active: false },
    { id: '5', title: 'Consulting',  active: false },
    { id: '6', title: 'Design',  active: false },
    { id: '7', title: 'Music',  active: false },
    { id: '8', title: 'Fitness',  active: false },
    { id: '9', title: 'Gaming',  active: false },
    { id: '10', title: 'Magazine',  active: false },
    { id: '11', title: 'Non-Profit',  active: false },
    { id: '12', title: 'Health & Beauty',  active: false },
    { id: '13', title: 'Travel',  active: false },
    { id: '14', title: 'Interior Design',  active: false },
    { id: '15', title: 'Technology',  active: false },
    { id: '16', title: 'Marketing',  active: false },
    { id: '17', title: 'Restaurants',  active: false },
    { id: '18', title: 'Photography',  active: false },
    { id: '19', title: 'Food',  active: false },
    { id: '20', title: 'Jewelry',  active: false },
    { id: '21', title: 'Personal & CV',  active: false },

  ]

  const { subscribe, update } = writable({ title, textInput, cards });


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


export const siteStore = siteBox();

// store to handle the app state
const appState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  };
};

export const AppStore = appState();