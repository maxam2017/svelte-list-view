<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { intersection } from './actions';

	type T = $$Generic;

	interface $$Slots {
		default: {
			item: T;
		};
	}

	// props
	export let component: string = 'div';
	export let items: T[] = [];

	// local state
	let rest: T[] = [];
	let lastItem: T;
	$: {
		rest = items.slice(0, -1);
		lastItem = items[items.length - 1];
	}

	const dispatch = createEventDispatcher();
	const handleIntersection = () => dispatch('loadmore');
</script>

<svelte:element this={component}>
	{#each rest as item}
		<slot {item} />
	{/each}
	{#if lastItem}
		<div use:intersection on:intersection={handleIntersection}>
			<slot item={lastItem} />
		</div>
	{/if}
</svelte:element>
