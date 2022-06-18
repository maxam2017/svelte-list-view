import listViewDemo from './list-view-demo:simple.svelte';

export default {
	title: 'ListView',
	component: listViewDemo,
	argTypes: {}
};

const Template = () => ({
	Component: listViewDemo,
	props: {}
});

export const Simple = Template.bind({});
Simple.args = {};
