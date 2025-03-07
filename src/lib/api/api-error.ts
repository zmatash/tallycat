class ApiError extends Error {
	responseCode: number | undefined;

	constructor(code: number | undefined, message: string, name?: string) {
		super(message);
		this.name = name ?? "API Error";
		this.responseCode = code;
	}
}

export default ApiError;
