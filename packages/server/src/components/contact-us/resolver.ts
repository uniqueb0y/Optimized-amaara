import { IContactUs } from "./mongoose";
import { ContactUsRepository } from "./repository";
import { ContactUsService } from "./service";

export const contactUsResolvers = {
    Query: {
        getContactUs: async () => {
            const contactUsRepo = new ContactUsRepository();
            const contactUsService = new ContactUsService(contactUsRepo);
            const contactUs = contactUsService.getContactUs();
            return contactUs;
        },
    },
    Mutation: {
        createContactUs: async (_, args, context) => {
            const contactUsRepo = new ContactUsRepository();
            const contactUsService = new ContactUsService(contactUsRepo);
            const result = await contactUsService.createContactUs(args.contactUsInput);
            if (result) return { isSuccess: true, id: result.id, error: null };
            else return { isSuccess: false, error: 'We are facing some issue. Please try again after sometime.' };
        }
    }
}