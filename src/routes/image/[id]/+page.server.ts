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
 * https://github.com/SpiritGameStudios/SnapperWeb/blob/c3f0c4646a2af90dcd72da79a15e1e3716792d44/src/routes/img/%5Bid%5D/%2Bpage.server.ts
 * - WorldWidePixel
 */

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { UserData, PictureData } from '$lib/types';
import { axolotlWebHeaders } from '$lib';

export const load: PageServerLoad = async ({ fetch, params }) => {
	let imageData = await fetch(`https://api.axolotlclient.com/v1/image/${params.id}`, {
		mode: 'no-cors',
		headers: axolotlWebHeaders
	})
		.then((response) => response.json())
		.catch(() => error(404, 'Not found'));

	let userData = await fetch(`https://api.axolotlclient.com/v1/user/${imageData.uploader}`, {
		mode: 'no-cors',
		headers: axolotlWebHeaders
	})
		.then((response) => response.json())
		.catch(() => error(404, 'Failed to recieve creator data, please contact support.'));

	return {
		image: imageData as PictureData,
		creator: userData as UserData,
		id: params.id
	};
};
