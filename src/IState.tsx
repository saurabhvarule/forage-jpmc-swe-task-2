import { ServerRespond } from "./DataStreamer";

/**
 * State declaration for <App />
 */
export interface IState {
	data: ServerRespond[];
	showGraph: boolean;
}
