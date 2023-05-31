import { AuthenticateResponseModel } from "./AuthenticateResponseModel";

export interface AuthenticateResponseModelDataResponse{
    Success: boolean;
    Error: string;
    Data: AuthenticateResponseModel;
    
}