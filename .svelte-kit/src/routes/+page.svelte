<script>
	export let data;
</script>

<main class="card-wrapper">
	<div class="profile-card">
		<section>
			{#if data && data.person && data.person.length > 0}
				<img src={data.person[0].avatar} alt="Avatar of {data.person[0].name}" />
				<h1>{data.person[0].name}</h1>
				<h2>{data.person[0].surname}</h2>
			{/if}
		</section>
		<section>
			<div><i class='bx bxl-github'></i><p>{data.person[0].github_handle}</p></div>
			<div><p>Nickname</p><p>{data.person[0].nickname}</p></div>
			<div><p>Website</p><p>{data.person[0].website}</p></div>
			<div><details><summary>Bio</summary><p>{data.person[0].bio}</p></details></div>
		</section>
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
		background-image: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXN0bGVlOGJhOXM1dzl0aDV5NXB3NzcydWszN2M2eHBxYzZrNGV1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gIODGWDBuG5AWlUExJ/giphy-downsized-large.gif');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		width: 67.5%;
		height: 65%;
		border-radius: 8px;
		opacity: 1;
		border: solid var(--primary-color) 2px;
		

		&::after {
			content: '';
			background-image: inherit;
			width: 66%;
			height: 23%;
			position: absolute;
			bottom: 2.5%;
			transform: scaleY(-1);
			background-position: bottom;
			background-size: cover;
			z-index: -1;
		}
		&::before {
			content: '';
			width: inherit;
			height: 23%;
			position: absolute;
			bottom: -5.5%;
			background: linear-gradient(to top, rgb(0 0 0 / 66%), var(--body-color));
			z-index: 0;
		}
	}

	img[alt^='Avatar of'] {
		position: absolute;
		height: 20%;
		width: 25%;
		object-fit: cover;
		border: solid var(--primary-color) 2px;
		border-radius: 8px;
		left: 1.5em;
		top: 6em;
	}

	section:first-child{
		height: 30%;
	}

	h1 {
		line-height: 1;
		color: var(--text-color);
		z-index: 1;
		padding: 1em 0 0 1em;
		position: relative;
	}

	h2 {
		line-height: 1;
		color: var(--text-color);
		z-index: 1;
		padding: 0 0 0 2em;
		position: relative;
	}

	section:last-child{
		height: 70%;
		padding: 1em;
		overflow: auto;
	}

	section:last-child div{
		padding: 0.5em 0;
	}

	details summary{
		list-style: none;
		
		&:hover{
			text-shadow:
			-2px 0 var(--text-color),
			2px 0 var(--text-color),
			0 2px var(--text-color),
			0 -2px var(--text-color);

		}
	}


	@media (min-width: 55em) {
		img[alt^='Avatar of'] {
			width: 350px;
			height: 40%;
		}
	}

	@media (min-width: 90em) {
		img[alt^='Avatar of'] {
			height: 50%;
		}
	}
</style>
