import { IContactUs } from './mongoose';
import { ContactUsRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class ContactUsService {
    contactUsRepository: ContactUsRepository;
    constructor(_contactUsRepository: ContactUsRepository) {
        this.contactUsRepository = _contactUsRepository;
    }
    getContactUs = () => {
        try {
        return this.contactUsRepository.getContactUs();
        }
        catch (error) {
            console.error(error);
            return { message: "An error occurred" };
          }
    }
    createContactUs = (contactUs: IContactUs) => {
        contactUs.id = uuidv4();
        contactUs.date = new Date().toDateString();
        const result = this.contactUsRepository.createContactUs(contactUs);
        return result;
    }
}