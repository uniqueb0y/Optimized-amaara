import { PhoneOtp, IPhoneOtp } from "./mongoose"

export class PhoneOtpRepository {
    getPhoneOtp = async () => {
        const phoneOtp = await PhoneOtp.find({});
        return phoneOtp
    }
    createPhoneOtp = async (phoneOtp: IPhoneOtp) => {
        const phoneOtpModel = new PhoneOtp(phoneOtp);
        const result = await phoneOtpModel.save();
        return result;
    }
    
    deletePhoneOtp = async (phoneOtpId: String) => {
        const result = await PhoneOtp.findOneAndDelete({id: phoneOtpId});
        return result;
    }
    getPhoneOtpByPhoneNumber = async(phone : Number) => {
        const result = await PhoneOtp.findOne({phone: phone})
        return result;
    }
}