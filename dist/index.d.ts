export * from "./types";
export declare function fetchServer(id: string): Promise<import("./models/CfxCitizenServer").default | undefined>;
export declare function fetchStatus(): Promise<import("./models/CfxStatus").default | undefined>;
export declare function fetchUnresolvedIncidents(): Promise<import("./models/CfxUnresolvedIncidents").default | undefined>;
export declare function fetchPinnedServers(): Promise<import("./models/CfxPinnedServers").default | undefined>;
