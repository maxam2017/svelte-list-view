<script>
	import { onMount } from 'svelte';

	import ListView from '../../package/ListView.svelte';

	/**
	 * There're some utilities for demo
	 *
	 * - faker: generate random name & number
	 * - delay: return a promise which resolve after 1 sec
	 * - asyncGetItems: mock api call
	 */
	const faker = {
		name() {
			return ['Amy', 'Bob', 'Carol', 'Denny', 'Emily'][this.number(5)];
		},
		number(max = 100) {
			return Math.floor(Math.random() * max);
		}
	};

	async function delay() {
		return new Promise((res) => setTimeout(res, 500));
	}

	async function asyncGetItems() {
		await delay();
		return [
			{ name: faker.name(), number: faker.number() },
			{ name: faker.name(), number: faker.number() },
			{ name: faker.name(), number: faker.number() },
			{ name: faker.name(), number: faker.number() },
			{ name: faker.name(), number: faker.number() }
		];
	}

	let items = [];

	onMount(async () => {
		items = await asyncGetItems();
	});

	async function handleLoadMore() {
		const newItems = await asyncGetItems();
		items = [...items, ...newItems];
	}
</script>

<ListView {items} on:loadmore={handleLoadMore} let:item>
	<p>{item.number}: {item.name}</p>
</ListView>
