// Types from SnapperWeb

export type PictureData = {
	uploader: string;
	filename: string;
	file: string;
	shared_at: string;
};

export type UserData = {
	uuid: string;
	username: string;
	registered: string;
	status: {
		type: 'online' | 'offline';
		last_online: string;
	};
};
