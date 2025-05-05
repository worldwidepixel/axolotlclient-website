<script lang="ts">
	import '../app.css';
	import { SiModrinth, SiGithub, SiDiscord } from '@icons-pack/svelte-simple-icons';
	import '@fontsource-variable/inter';
	import '@fontsource/fira-sans/100.css';
	import '@fontsource/fira-sans/200.css';
	import '@fontsource/fira-sans/300.css';
	import '@fontsource/fira-sans/400.css';
	import '@fontsource/fira-sans/500.css';
	import '@fontsource/fira-sans/600.css';
	import '@fontsource/fira-sans/700.css';
	import '@fontsource/fira-sans/800.css';
	import '@fontsource/fira-sans/900.css';
	let { children } = $props();
</script>

<div class="flex h-full w-full flex-col items-center">
	<header class="flex w-full flex-col items-center">
		<div class="max-w-page flex w-full flex-row justify-between gap-4 p-4">
			<a href="/" class="flex flex-row items-center gap-6 select-none">
				<img class="size-10" alt="AxolotlClient logo" src="/images/icon.png" />
				<span class="font-fira text-2xl font-bold">AxolotlClient</span>
			</a>
			<span class="flex flex-row items-center gap-6">
				<a href="https://modrinth.com/mod/axolotlclient">
					<SiModrinth />
				</a>
				<a href="https://github.com/AxolotlClient/">
					<SiGithub />
				</a>
				<a href="https://discord.gg/WyMjeX3vka">
					<SiDiscord />
				</a>
			</span>
		</div>
	</header>
	<main class="flex w-full flex-auto flex-col items-center">
		{@render children()}
	</main>
	<footer class="flex w-full flex-col items-center bg-neutral-50">
		<div class="max-w-page flex w-full flex-col gap-4 px-4 py-8">
			<h2>AxolotlClient</h2>

			<span class="flex flex-row items-center gap-4 select-none">
				<a href="https://modrinth.com/mod/axolotlclient">
					<SiModrinth size={20} />
				</a>
				<a href="https://github.com/AxolotlClient/">
					<SiGithub size={20} />
				</a>
				<a href="https://discord.gg/WyMjeX3vka">
					<SiDiscord size={20} />
				</a>
				&bull;
				<a class="text-md font-bold" href="/terms">Terms</a>
			</span>
			<span class="text-sm text-neutral-500"
				>NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG.</span
			>
		</div>
	</footer>
</div>
