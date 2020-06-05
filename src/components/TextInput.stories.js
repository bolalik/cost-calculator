// src/components/textInput.stories.js
import TextInput from './TextInput.svelte';
// import { action } from "@storybook/addon-actions";
export default {
    title: 'textInput',
    excludeStories: /.*Data$/,
};

// export const actionsData = {
//   onChoice: action('onChoice'),
// };

export const textInputData = {
    id: "1",
    label: "Label",
    placeholder: "placeholder",
    value: "",
};

// default textInput state
export const Default = () => ({
    Component: TextInput,
    props: {
        textInput: textInputData,
    },
    // on: {
    //     ...actionsData,
    // },
});
//  textInput Do
export const Domain = () => ({
    Component: TextInput,
    props: {
        textInput: {
            ...textInputData,
            label: "What is your domain name?",
            placeholder: "yourwebsite.com...",
        },
    },
    // on: {
    //     ...actionsData,
    // },
});
//  textInput No

export const SiteAbout = () => ({
    Component: TextInput,
    props: {
        textInput: {
            ...textInputData,
            label: "Don't see what you’re looking for?",
            placeholder: "Describe your site...",
        },
    },
    // on: {
    //     ...actionsData,
    // },
});