// src/components/title.stories.js
import Title from './Title.svelte';
// import { action } from "@storybook/addon-actions";
export default {
  title: 'title',
  excludeStories: /.*Data$/,
};

// export const actionsData = {
//   onChoice: action('onChoice'),
// };

export const titleData = {
  id: '1',
  title: 'Test title',
  text: 'some text',
};


// default title state
export const Default = () => ({
  Component: Title,
  props: {
    title: titleData,
  },
  // on: {
  //   ...actionsData,
  // }

});
//  title Yes
export const Art = () => ({
  Component: Title,
  props: {
    title: {
      ...titleData,
      title: 'What are your top goals?',
      text: "Select all that apply. If something interests you but isn't a top priority, no worries. You can add all our features to any template.",
    },
  },
  // on: {
  //   ...actionsData,
  // }

});

