import { writable } from 'svelte/store';




function siteBox() {
  // creates a new writable store populated with some initial data
  const data = "";

  const { subscribe, update } = writable(data);


  return {
    subscribe,
    choose: (title, state) =>
      update(data => data + " " + state + ": " + title + ","
      ),
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