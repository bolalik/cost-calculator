import { writable } from 'svelte/store';


const goalBox = () => {
  // creates a new writable store populated with some initial data
  const title = {
    id: '1',
    title: "Where are you in your goal?",
    text: "Let us know what stage you're at.",
  }



  const cards = [
    { id: '1', title: 'Sell products', },
    { id: '2', title: 'Market myself or my business', },
    { id: '3', title: 'Sell services', },
    { id: '4', title: 'Promote a physical business', },
    { id: '5', title: 'Sell memberships', },
    { id: '6', title: 'Promote an event or project', },
    { id: '7', title: 'Collect donations', },
    { id: '8', title: 'Publish a blog or other media', },
    { id: '9', title: 'Get appointments', },
  ]







  // Showcase work/expertise
  // Offer a contact form
  // Build community
  // Sell products or services





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



export const goalStore = goalBox();


// store to handle the app state
const appState = () => {
  const { subscribe, update } = writable(false);
  return {
    subscribe,
    error: () => update(error => !error),
  };
};

export const AppStore = appState();