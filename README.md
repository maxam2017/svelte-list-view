# svelte-list-view ([demo](https://svelte.dev/repl/a2987aac561049639d4b0bb09d8e8c5f))

An infinite list component for Svelte apps, providing an easier way to handle load more scenarios.

## Installation

```
npm i svelte-list-view
```

## Usage

```html
<script>
	import ListView from 'svelte-list-view';

	let items = [];

	async function handleLoadMore() {
		items = [...items, ...(await fetchItems())];
	}
</script>

<ListView {items} on:loadmore="{handleLoadMore}" let:item>
	<p>{item}</p>
</ListView>
```

### items & let:item

pass `items` to component's prop and judge how to render item with `let:` directive via slot feature.

### on:loadmore

The custom `loadmore` event fires when the last item get into viewport.

> only fires once until items update

### component

optional, used to render specific outer element tag. `div` by default.

## License

[MIT](https://github.com/maxam2017/svelte-list-view/blob/master/LICENSE)
