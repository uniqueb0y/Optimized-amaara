import { appSettingResolvers } from "../components/app-setting";
import { phoneOtpResolvers } from "../components/authentication/phone-otp";
import { userResolvers } from "../components/user";
import { seetuResolvers } from "../components/seetu";
import { roleResolvers } from "../components/role";
import { contactUsResolvers } from "../components/contact-us";
import { raffleResolvers } from "../components/raffle";
import { userInfoResolvers } from "../components/user-info";
import { promotionResolvers } from "../components/promotion";
import { subUserResolvers } from "../components/sub-user";
import { notificationResolvers } from "../components/notification";

export const resolvers = [appSettingResolvers, phoneOtpResolvers, userResolvers, seetuResolvers, roleResolvers, contactUsResolvers, raffleResolvers, userInfoResolvers, promotionResolvers, subUserResolvers, notificationResolvers]
