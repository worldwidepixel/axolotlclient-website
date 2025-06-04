<script>
	import { GitPullRequestIcon, HammerIcon, PaintbrushIcon } from 'lucide-svelte';
</script>

<svelte:head>
	<title>AxolotlClient</title>
</svelte:head>

<div
	class="from-brand-rose-500 to-brand-rose-400 dark:from-brand-rose-800 dark:to-brand-rose-700 page-constraint-container max-h-full bg-gradient-to-tr py-20"
>
	<div class="page-constraint flex flex-col gap-4">
		<h1 class="text-5xl text-white">AxolotlClient</h1>
		<span class="text-lg text-white">
			A <span class="font-bold">free</span> and
			<span class="font-bold">open-source</span> Minecraft client.
		</span>
		<hr class="border-white" />
		<div class="flex flex-row flex-wrap gap-2">
			<a class="button text inverted" href="https://modrinth.com/mod/axolotlclient/versions"
				>Download</a
			>
			<a class="button text inverted" href="https://modrinth.com/mod/axolotlclient/gallery"
				>Screenshots</a
			>
		</div>
	</div>
</div>
<div class="page-constraint-container max-h-full py-20">
	<div class="page-constraint flex flex-col gap-8">
		<h1>Why AxolotlClient?</h1>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="card">
				<GitPullRequestIcon size={64} />
				<h3>Open-source</h3>
				<span class="text-center">
					The client is completely open-source for maximum user comfort. All code is licensed under
					Free software licenses to allow user modifications.
				</span>
			</div>
			<div class="card">
				<PaintbrushIcon class="size-16" />
				<h3>Customizable</h3>
				<span class="text-center">
					You can add your own mods to create <span class="font-bold"> your own </span>
					Client. Create your own experience by downloading AxolotlClient now!
				</span>
			</div>
			<div class="card">
				<HammerIcon class="size-16" />
				<h3>Built with modern tools</h3>
				<span class="text-center">
					We use the most modern mod loaders to get updates as soon as possible. This also speeds up
					load times and facilitates developement.
				</span>
			</div>
		</div>
	</div>
</div>
