import CfxCitizenServer from "../models/CfxCitizenServer";
export default class CfxCitizenServerModule {
    static instance: CfxCitizenServerModule | null;
    static get(): CfxCitizenServerModule;
    retrieve(id: string): Promise<CfxCitizenServer | undefined>;
}
