<div class="page-constraint-container">
	<div class="page-constraint">
		<div class="flex flex-col gap-8 md:flex-row">
			<div
				class="flex h-fit flex-col gap-2 rounded-xl bg-neutral-50 p-4 md:sticky md:top-10 dark:bg-neutral-900"
			>
				<a href="/terms"><h2>Terms</h2></a>
				<hr />
				<a class="font-bold text-nowrap underline" href="/terms/tos">Terms of Service</a>
				<a class="font-bold text-nowrap underline" href="/terms/privacy">Privacy Policy</a>
			</div>
			<div class="md w-full">
				<slot />
			</div>
		</div>
	</div>
</div>
