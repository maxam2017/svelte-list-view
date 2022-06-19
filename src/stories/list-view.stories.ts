import ListViewDemojoke from './list-view-demo:joke.svelte';
import listViewDemo from './list-view-demo:simple.svelte';

export default { title: 'ListView' };

export const DadJokeAPI = () => ({
	Component: ListViewDemojoke
});

export const MockAPI = () => ({
	Component: listViewDemo
});
