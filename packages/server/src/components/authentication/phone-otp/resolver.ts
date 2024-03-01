import { IPhoneOtp } from "./mongoose";
import { PhoneOtpRepository } from "./repository";
import { PhoneOtpService } from "./service";

export const phoneOtpResolvers = {
    Query: {
        getPhoneOtp: async () => {
            const phoneOtpRepo = new PhoneOtpRepository();
            const phoneOtpService = new PhoneOtpService(phoneOtpRepo);
            const phoneOtp = phoneOtpService.getPhoneOtp();
            return phoneOtp;
        },
       
    },
    Mutation: {
        sendPhoneOtp: (_, args, context) => {
            const phoneOtpRepo = new PhoneOtpRepository();
            const phoneOtpService = new PhoneOtpService(phoneOtpRepo);
            return phoneOtpService.sendPhoneOtp(args.phoneOtpInput);
        },
        verifyPhoneOtp: (_, args, context) => {
            const phoneOtpRepo = new PhoneOtpRepository();
            const phoneOtpService = new PhoneOtpService(phoneOtpRepo);
            return phoneOtpService.verifyPhoneOtp(args.phoneOtpInput);
        },
        deletePhoneOtp: (_, args, context) => {
            const phoneOtpRepo = new PhoneOtpRepository();
            const phoneOtpService = new PhoneOtpService(phoneOtpRepo);
            return phoneOtpService.deletePhoneOtp(args.id);
        }
    }
}