import TDClient from 'tdweb';
import * as config from './config';

export class TDLibClient {
	constructor() {
		this.client = new TDClient(config.options);
		this.handlers = new Map();

		this.client.onUpdate = (update) => {
			const fn = this.handlers.get(update['@type']);
			if (fn) {
        console.log(update['@type']);
				fn(update);
			} else {
        //console.log(`${update['@type']} not handled.`, { update });
			}
		};
	}

	send(type, payload) {
		let data;
		if (payload) {
			data = {
				'@type': type,
				...payload,
			};
		} else {
			data = {
				'@type': type,
			};
		}
    console.log('send', data);
		return this.client.send(data);
	}

	on(type, fn) {
		this.handlers.set(type, fn);
	}

	once(type, fn) {
		this.handlers.set(type, update => {
			fn(update);
			this.handlers.delete(type);
		});
	}

	init() {
		return new Promise((resolve, reject) => {
			this.on('updateAuthorizationState', (update) => {
				switch (update.authorization_state['@type']) {
					case 'authorizationStateWaitTdlibParameters':
						this.setTdLibParameter()
							.then(() => this.send('checkDatabaseEncryptionKey'))
							.then(resolve)
							.catch(reject);
						break;
				}
			});
		});
	}

	setTdLibParameter() {
		const parameters = {
			'@type': 'tdParameters',
			api_id: config.app.api_id,
			api_hash: config.app.api_hash,
			application_version: '0.1.0',
			device_model: 'Firefox',
			system_language_code: 'en-US',
			system_version: 'Linux',
			database_directory: '/db',
			files_directory: '/',
			use_file_database: false,
			use_message_database: true,
			use_secret_chats: false,
			use_test_dc: false,
		};
		return this.send('setTdlibParameters', { parameters });
	}
}
