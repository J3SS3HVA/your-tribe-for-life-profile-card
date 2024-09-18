<script>
	import { onMount } from 'svelte';
	export let data;

	let modeSwitch;
	let body;
	let profileCard;

	// Use onMount to access the DOM safely
	onMount(() => {
		body = document.querySelector('body');
		modeSwitch = body.querySelector('.theme');
		profileCard = body.querySelector('.profile-card');

		// Log profileCard to check if it's selected correctly
		console.log('Profile Card:', profileCard);

		// Listen for the 'change' event on the checkbox
		modeSwitch.addEventListener('change', () => {
			if (modeSwitch.checked) {
				body.classList.add('alter');
				profileCard.classList.add('alter-image'); // Add the 'alter-image' class
				console.log('Checkbox checked - added alter-image class');
			} else {
				body.classList.remove('alter');
				profileCard.classList.remove('alter-image'); // Remove the 'alter-image' class
				console.log('Checkbox unchecked - removed alter-image class');
			}
		});
	});
</script>

<main class="card-wrapper">
	<img src={data.person[0].avatar} alt="Avatar of {data.person[0].name}" />
	<article class="profile-card">
		<section>
			{#if data && data.person && data.person.length > 0}
				<h1>{data.person[0].name}</h1>
				<h2>{data.person[0].surname}</h2>
			{/if}
		</section>
		<section>
			<div>
				<i class="bx bxl-github"></i>
				<p>{data.person[0].github_handle}</p>
			</div>
			<div>
				<p>Nickname</p>
				<p>{data.person[0].nickname}</p>
			</div>
			<div>
				<p>Website</p>
				<p>{data.person[0].website}</p>
			</div>
		</section>
		<section>
			<div>
				<details>
					<summary>Bio</summary>
					<p>{data.person[0].bio}</p>
				</details>
			</div>
		</section>
	</article>
	<label class="checkbox-container">
		<input type="checkbox" class="theme" />
		<span>change background</span>
	</label>
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
		background-image: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXN0bGVlOGJhOXM1dzl0aDV5NXB3NzcydWszN2M2eHBxYzZrNGV1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gIODGWDBuG5AWlUExJ/giphy-downsized-large.gif');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		width: 67%;
		height: 65%;
		border-radius: 8px;
		opacity: 1;
		border: solid var(--primary-color) 2px;
		transition: 0.2s;
		color: var(--text-color);

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
		max-width: 200px;
		object-fit: cover;
		border: solid var(--primary-color) 2px;
		border-radius: 8px;
		left: 5%;
		top: 6em;
	}

	section:first-child {
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

	section:nth-child(2) {
		height: 60%;
		padding: 1em;
		overflow: auto;
	}

	section:nth-child(2) div {
		padding: 0.5em 0;
	}

	section:last-child {
		height: 10%;
	}

	details summary {
		list-style: none;

		&:hover {
			text-shadow:
				-2px 0 var(--text-color),
				2px 0 var(--text-color),
				0 2px var(--text-color),
				0 -2px var(--text-color);
		}
	}

	label.checkbox-container {
		position: absolute;
		top: 85%;
		display: flex;
		flex-direction: column;
	}

	label.checkbox-container input.theme {
		opacity: 0;
		cursor: pointer;
		position: absolute;
	}

	label.checkbox-container span {
		top: 0;
		left: 0;
		height: 25px;
		width: fit-content;
		background-color: #eee;
		text-shadow: none;
		border-radius: 8px;
		padding: 0 1em;
	}

	label.checkbox-container input.theme:hover ~ span {
		background-color: rgb(194, 194, 194);
	}

	label.checkbox-container input.theme:checked ~ span {
		background-color: var(--primary-color);
		color: var(--text-color);
	}

	@media (min-width: 86em) {
		.profile-card {
			width: 50%;
		}

		.profile-card::after {
			width: inherit;
		}
		img[alt^='Avatar of'] {
			width: 350px;
			max-width: 400px;
			height: 50%;
			left: 10%;
		}

		section:nth-child(2) {
			height: 50%;
			width: 60%;
			margin: auto;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			justify-content: start;
		}

		section:nth-child(2) div:nth-child(1) {
			grid-area: 1 / 1 / 2 / 2;
		}

		section:nth-child(2) div:nth-child(1) {
			grid-area: 1 / 1 / 2 / 2;
		}

		section:nth-child(2) div:nth-child(1) {
			grid-area: 2 / 1 / 3 / 2;
		}

		section:nth-child(3) {
			height: 20%;
			width: 60%;
			margin: auto;
			padding-left: 1em;
		}

		section:nth-child(3) div details {
			word-wrap: break-word;
			width: 30em;
		}
	}

	@media (min-width: 120em) {
		img[alt^='Avatar of'] {
			left: 15%;
		}
	}
</style>
