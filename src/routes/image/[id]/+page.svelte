<script lang="ts">
	/*
	 * Copyright © 2025 Spirit Studios
	 *
	 * This file is part of SnapperWeb.
	 *
	 * This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
	 */

	/*
	 * This file is adapted from Snapper.
	 * https://github.com/SpiritGameStudios/SnapperWeb/blob/c3f0c4646a2af90dcd72da79a15e1e3716792d44/src/routes/img/%5Bid%5D/%2Bpage.svelte
	 * - WorldWidePixel
	 */

	import { formatTime, getImageBlob } from '$lib';
	import type { PageProps } from './$types';
	import Tooltip from 'sv-tooltip';
	import { browser } from '$app/environment';
	import { CopyIcon, LinkIcon, ShareIcon } from 'lucide-svelte';

	function copyImage() {
		if (browser) {
			try {
				navigator.clipboard.write([
					new ClipboardItem({
						'image/png': getImageBlob(data.image.file)
					})
				]);
			} catch (error) {
				console.error('Failed to copy image to clipboard');
			}
		}
	}

	function canShare() {
		if (browser) {
			if (!!navigator.canShare) {
				return true;
			}
		}
		return false;
	}

	async function shareImage() {
		if (browser) {
			try {
				if (!canShare()) throw new Error();
				await navigator.share({
					url: `https://axolotlclient.com/image/${data.id}`,
					title: `${data.image.filename} on AxolotlClient`,
					text: `Image shared at ${formatTime(new Date(data.image.shared_at))} via AxolotlClient`,
					files: [
						new File([getImageBlob(data.image.file)], data.image.filename, {
							type: 'image/png'
						})
					]
				});
			} catch {
				console.log('Share functionality unavailable in your browser or operating system.');
			}
		}
	}

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.image.filename} - AxolotlClient</title>
	<meta name="title" content={`${data.image.filename} shared by ${data.creator.username}`} />
	<meta
		name="description"
		content={`Image shared at ${formatTime(new Date(data.image.shared_at))} via AxolotlClient`}
	/>
	<meta name="author" content={data.creator.username} />
	<meta property="og:image" content={`/img/${data.id}/raw`} />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="page-constraint-container bg-neutral-50">
	<div class="page-constraint flex w-full flex-col items-center gap-4">
		<div class="flex flex-col items-center gap-2">
			<h2 class="text-xl font-bold">{data.image.filename}</h2>
			{#if data.creator.uuid}
				<span class="flex flex-col flex-wrap items-center gap-1 text-sm sm:flex-row sm:gap-4">
					<span class="flex flex-row flex-wrap items-center gap-1">
						by
						<div class="pixelated flex flex-row flex-wrap items-center gap-2">
							<span>
								{data.creator.username}
							</span>
							<img
								class="h-4 w-4"
								draggable="false"
								alt={`Minecraft skin head texture of creator of screenshot, ${data.creator.username}`}
								src={`https://vzge.me/face/512/${data.creator.username}.png`}
							/>
						</div>
					</span>
					<span class="hidden sm:flex"> &bull; </span>
					<span>Shared on {formatTime(new Date(data.image.shared_at))}</span>
				</span>
			{/if}
		</div>
		<a
			draggable="false"
			class="rounded-xl"
			target="_blank"
			href={`https://api.axolotlclient.com/v1/image/${data.id}/raw`}
		>
			<img
				class="rounded-xl border"
				draggable="false"
				alt={`Image created by ${data.image.uploader}`}
				src={`https://api.axolotlclient.com/v1/image/${data.id}/raw`}
			/>
		</a>
		<div class="grid grid-cols-3 items-center gap-2">
			<Tooltip class="tooltip-axolotl" tip="Copy image">
				<button class="button mono" onclick={copyImage}>
					<CopyIcon />
				</button>
			</Tooltip>
			<Tooltip class="tooltip-axolotl" tip="Copy URL">
				<button class="button mono">
					<LinkIcon
						onclick={() => {
							if (browser) {
								navigator.clipboard.writeText(`https://axolotlclient.com/image/${data.id}`);
							}
						}}
					/>
				</button>
			</Tooltip>
			{#if browser}
				<Tooltip
					class="tooltip-axolotl"
					tip={`${canShare() ? 'Share image' : 'Browser does not support sharing'}`}
				>
					{#if canShare()}
						<button class="button mono">
							<ShareIcon onclick={shareImage} />
						</button>
					{:else}
						<button class="button mono">
							<ShareIcon class="text-brand-disabled" onclick={shareImage} />
						</button>
					{/if}
				</Tooltip>
			{/if}
		</div>
	</div>
</div>
<br />
