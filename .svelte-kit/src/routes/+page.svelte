<script>
	export let data;
</script>

<main class="card-wrapper">
	<div class="profile-card">
		{#if data && data.person && data.person.length > 0}
			<picture>
				<source srcset={`${data.person[0].avatar}?format=avif`} type="image/avif" />
				<source srcset={`${data.person[0].avatar}?format=webp`} type="image/webp" />
				<img src={data.person[0].avatar} alt="Avatar of {data.person[0].name}" />
			</picture>
			<h1>{data.person[0].name}</h1>
			<h2>{data.person[0].surname}</h2>
		{/if}
	</div>
</main>

<style>
	
	.card-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.profile-card {
		background-image: var(--background-color);
		width: 67.5%;
		height: 65%;
	}

	h1 {
		line-height: 1;
		color: var(--text-color);
	}

	h2 {
		line-height: 1;
		color: var(--text-color);
	}
</style>
