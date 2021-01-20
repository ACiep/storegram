export const app = {
	api_id: API_ID,
	api_hash: API_HASH,
};

export const options = {
	mode: 'wasm',
	prefix: 'tdlib',
	readOnly: false,
	useDatabase: false,
	isBackground: false,
	logVerbosityLevel: 0, // 1
	jsLogVerbosityLevel: 0, // 3
	// wasmUrl: `${WASM_FILE_NAME}?_sw-precache=${WASM_FILE_HASH}`
}
