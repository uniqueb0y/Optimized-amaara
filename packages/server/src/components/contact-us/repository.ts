import { ContactUs, IContactUs } from "./mongoose"

export class ContactUsRepository {
    getContactUs = async () => {
        const contactUs =  await ContactUs.find();
        return contactUs;
    }
    createContactUs = async (contactUs: IContactUs) => {
        const contactUsModel = new ContactUs(contactUs);
        const result = await contactUsModel.save();
        return result;
    }
}