import { writable } from 'svelte/store';


const budgetBox = () => {
  // creates a new writable store populated with some initial data
  const title = {
    id: '1',
    title: "What is your budget?",
    text: "A budget limits the scope of work, never the quality.",
  }

  const cards = [
    {  id: "1", title: "$0 - $1,999" },
    {  id: "2", title: "$2,000 - $4,999" },
    {  id: "3", title: "$5,000 - $10,000+" },
  ];
  




  const { subscribe, update } = writable({ title, cards });


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


export const budgetStore = budgetBox();


// store to handle the app state
const appState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  };
};

export const AppStore = appState();