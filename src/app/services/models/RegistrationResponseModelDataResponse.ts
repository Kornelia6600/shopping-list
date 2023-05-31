import { UserResponseModel } from "./UserResponseModel";

export interface RegistrationResponseModelDataResponse{
    Success: boolean;
    Error: string;
    Data: UserResponseModel;
    
}