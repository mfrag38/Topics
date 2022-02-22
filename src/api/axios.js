import axios from 'axios';
import { baseUrl, token } from '../../app.json';

export const get = async (url, options) => {
	let requestUrl = `${baseUrl}${url}`;

	axios
		.get(requestUrl, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((response) => {
			if (options.success) {
				options.success(
					response.data,
					response.headers['x-pagination-pages']
						? response.headers['x-pagination-pages']
						: 0,
				);
			}
		})
		.catch((error) => {
			console.warn('[Get Error]:', error);
			if (options.error) {
				options.error(error);
			}
		});
};

export const post = async (url, params, options) => {
	let requestUrl = `${baseUrl}${url}`;
	let CancelToken = axios.CancelToken;

	axios
		.post(requestUrl, params, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			onUploadProgress: (progress) => {
				if (options.onUploadProgress) {
					options.onUploadProgress(progress);
				}
			},
			cancelToken: new CancelToken((cancel) => {
				if (options.cancel) {
					options.cancel(cancel);
				}
			}),
		})
		.then((response) => {
			if (options.success) {
				options.success(response.data);
			}
		})
		.catch((error) => {
			console.warn('[Post Error]:', error);

			if (options.error) {
				options.error(error);
			}
		});
};

export const put = async (url, params, options) => {
	let requestUrl = `${baseUrl}${url}`;

	axios
		.put(requestURL, params, {
			headers: { Authorization: `Bearer ${token}` },
			onUploadProgress: (progress) => {
				if (options.onUploadProgress) {
					options.onUploadProgress(progress);
				}
			},
			onDownloadProgress: (progress) => {
				if (options.onDownloadProgress) {
					options.onDownloadProgress(progress);
				}
			},
			cancelToken: new CancelToken((cancel) => {
				if (options.cancel) {
					options.cancel(cancel);
				}
			}),
		})
		.then((response) => {
			if (options.success) {
				options.success(response.data);
			}
		})
		.catch((error) => {
			console.warn('[Put Error]:', error);
			if (options.error) {
				options.error(error);
			}
		});
};

export const del = async (url, id, options) => {
	let requestURL = `${baseUrl}${url}/${id}`;

	axios
		.delete(requestURL, {
			headers: { Authorization: `Bearer ${token}` },
			onUploadProgress: (progress) => {
				if (options.onUploadProgress) {
					options.onUploadProgress(progress);
				}
			},
			cancelToken: new CancelToken((cancel) => {
				if (options.cancel) {
					options.cancel(cancel);
				}
			}),
		})
		.then((response) => {
			if (options.success) {
				options.success(response.data);
			}
		})
		.catch((error) => {
			console.warn('[Delete Error]:', error);
			if (options.error) {
				options.error(error);
			}
		});
};
