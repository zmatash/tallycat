import ApiError from "../api-error";

interface FailureProps {
	status?: number;
	message: string;
	name?: string;
}

export class Result<T> {
	private _isSuccess: boolean;
	private _value?: T;
	private _error?: ApiError;

	private constructor(isSuccess: boolean, value?: T, error?: ApiError) {
		this._isSuccess = isSuccess;
		this._value = value;
		this._error = error;
	}

	isSuccess(): boolean {
		return this._isSuccess;
	}

	isFailure(): boolean {
		return !this._isSuccess;
	}

	getValue(): T {
		if (!this._isSuccess) {
			throw new Error("Cannot get value from failure");
		}
		return this._value as T;
	}

	getError() {
		if (this._isSuccess) {
			throw new Error("Cannot get error from success");
		}
		return this._error as ApiError;
	}

	public static success<T>(value: T): Result<T> {
		return new Result<T>(true, value);
	}

	public static failure<T>(props: FailureProps): Result<T> {
		const status = props.status ?? 500;
		const message = props.message ?? "An unknown error occurred";
		const name = props.name ?? "Internal Unexpected Error";

		return new Result<T>(false, undefined, new ApiError(status, message, name));
	}
}
