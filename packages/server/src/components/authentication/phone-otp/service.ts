import { IPhoneOtp } from './mongoose';
import { PhoneOtpRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class PhoneOtpService {
   
    phoneOtpRepository: PhoneOtpRepository;
    constructor(_phoneOtpRepository: PhoneOtpRepository) {
        this.phoneOtpRepository = _phoneOtpRepository;
    }

    getPhoneOtp = () => {
        return this.phoneOtpRepository.getPhoneOtp();
    }
    sendPhoneOtp = (phoneOtp: IPhoneOtp) => {
        try {
        phoneOtp.id = uuidv4();
        phoneOtp.otp=this.generateOtp();
        phoneOtp.expiresIn = this.generateExpiryTime();
        this.phoneOtpRepository.createPhoneOtp(phoneOtp);
        //[TODO] : send OTP to user phone number using a third party service
        return { success: true, message: 'Otp sent' };
        }
        catch (error) {
            console.error(error);
            return { success: false, message: "An error occurred while sending OTP." };
          }
    }
    verifyPhoneOtp = async (phoneOtp: IPhoneOtp ) => {
        try {
            // Find the OTP record for the given phoneNumber
            const otpRecord = await this.phoneOtpRepository.getPhoneOtpByPhoneNumber(phoneOtp.phone);
            
            if (!otpRecord) {
              return { success: false, message: "OTP not found for this phone number." };
            }

            if (this.isOtpExpired(otpRecord.expiresIn))
            {  return { success: false, message: "OTP is expired." };
        }
             if (otpRecord.otp === phoneOtp.otp) {
              return { success: true, message: "OTP authentication successful." , jwt: null};
            } else {
              // OTP doesn't match, authentication failed
              return { success: false, message: "Incorrect OTP." };
            }
            
          } catch (error) {
            console.error(error);
            return { success: false, message: "An error occurred while authenticating OTP." };
          }
    }
    deletePhoneOtp = (phoneOtpId: String) => {
        const result = this.phoneOtpRepository.deletePhoneOtp(phoneOtpId);
        if(result){
        return { success: true, message: "The file is deleted successfully" };
        }
         else
         {
          return { success: false, message: "An error occurred" };
          
         }

    }
    private generateOtp = () => {
        return Math.round((Math.random()*10000));
    }
    private generateExpiryTime = () => {
        return Date.now() + 120000; //120 second expiry time
    }
    private isOtpExpired = (expiresIn : Number) => {
       // console.log(expiresIn);
        //console.log(Date.now());
       return (Date.now() > Number(expiresIn)); 

    }
}