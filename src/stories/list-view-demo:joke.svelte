<script>
	import { onMount } from 'svelte';

	import ListView from '../../package/list-view.svelte';

	// state
	let page = 1;
	let items = [];

	async function fetchJokes() {
		const res = await fetch(`https://icanhazdadjoke.com/search?page=${page}`, {
			headers: { accept: 'application/json' }
		});

		if (res.ok) {
			page = page + 1;
			return (await res.json()).results;
		}
		return [];
	}

	onMount(async () => {
		items = await fetchJokes();
	});

	async function handleLoadMore() {
		items = [...items, ...(await fetchJokes())];
	}
</script>

<ListView {items} on:loadmore={handleLoadMore} let:item>
	<p>{item.joke}</p>
</ListView>

<style>
	p {
		border: 1px solid rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		padding: 20px;
		max-width: 500px;
	}
</style>
