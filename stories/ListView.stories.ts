import ListView from '../package/ListView.svelte';

export default {
	title: 'ListView',
	component: ListView,
	argTypes: {}
};

const Template = () => ({
	Component: ListView,
	props: {}
});

export const simple = Template.bind({});
simple.args = {};
