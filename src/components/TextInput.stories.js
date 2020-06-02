// src/components/slider.stories.js
import Slider from './Slider.svelte';
// import { action } from "@storybook/addon-actions";
export default {
    title: 'slider',
    excludeStories: /.*Data$/,
};

// export const actionsData = {
//   onChoice: action('onChoice'),
// };

export const sliderData = {
    id: "",
    price: 1000,
    pressed: false
};

// default slider state
export const Default = () => ({
    Component: Slider,
    props: {
        slider: sliderData,
    },
    // on: {
    //     ...actionsData,
    // },
});
//  slider Yes
export const Thousand3 = () => ({
    Component: Slider,
    props: {
        slider: {
            ...sliderData,
            price: 3000,
        },
    },
    // on: {
    //     ...actionsData,
    // },
});
//  slider No

