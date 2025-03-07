class ApiError extends Error {
	responseCode: number;

	constructor(code: number | undefined, message: string, name?: string) {
		super(message);
		this.name = name ?? "API Error";
		this.responseCode = code ?? 500;
	}
}

export default ApiError;
