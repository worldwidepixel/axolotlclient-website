export const axolotlWebHeaders = {
	'User-Agent': 'axolotlclient/axolotlclient-website by Axolotl Client',
	'Content-Type': 'application/json'
};

export const formatTime = (time: Date) => {
	const TIME_FORMAT = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
	return TIME_FORMAT.format(time);
};

export function getImageBlob(data: string) {
	const imageByteString = atob(data);
	const imageArrayBuffer = new ArrayBuffer(imageByteString.length);
	const imageIntArray = new Uint8Array(imageArrayBuffer);
	for (let i = 0; i < imageByteString.length; i++) {
		imageIntArray[i] = imageByteString.charCodeAt(i);
	}
	const imageBlob = new Blob([imageIntArray], { type: 'image/png' });

	return imageBlob;
}
