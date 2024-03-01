import { FC } from "react";
import {
  cardCommonStyles,
  customHeadingStyle,
  customBodyTextStyle,
} from "../../styles/card-text";
import { Box, Card, Typography } from "@mui/material";
import { parentBoxStyles } from "../../styles/box";

export const TnC: FC = () => {
  return (
    <Box pt={7}>
      <Box sx={parentBoxStyles}>
        <Box>
          <Typography
          variant="h1"
            fontSize={40}
            fontFamily={"ABC Gravity"}
            fontWeight={700}
            color="#4f0336"
            sx={{ pb: 2 }}>
            Terms & Conditions
          </Typography>
        </Box>
        <Box>
          <Card
            className="card"
            sx={{
              border: "1px solid #CBAB58",
              ...cardCommonStyles,
              bgcolor: "white",
            }}
          >
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              Introduction
            </Typography>
            <Typography sx={customBodyTextStyle}>
              At Amaara Jewellery, we believe that everyone deserves to own
              beautiful and high-quality gold jewellery. That's why we offer a
              wide selection of gold jewellery at affordable prices, as well as
              a variety of saving schemes to help you make your purchase.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              General
            </Typography>
            <Typography sx={customBodyTextStyle}>
              Amaara Jewellery warrants and covenants not to sell, rent or share
              for benefit, any of the personal data of the user so as to make it
              available for subscription for promotional
              advertisements/unsolicited enquiries by way of emails/calls.
              Amaara Jewellery further warrants that any email/call from it
              shall only be in connection with its services as mentioned in the
              terms and policy.Amaara Jewellery may reveal general statistical
              information about Amaara Jewellery & its users, on the average
              traffic on its website along with purchase trend on Amaara
              Jewellery etc. All the legal compliant requests for disclosures of
              personal data shall be accepted by Amaara Jewellery and it shall
              not amount to violation of privacy of the user.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              Personal Data
            </Typography>
            <Typography sx={customBodyTextStyle}>
              Personal Information means and includes all information such as
              name, address, mailing id, telephone number, all the details on
              the credit/debit card, account details, information about mobile
              phone and any other details that may have been voluntarily provide
              by the user in connection with availing any of the services on
              Amaara Jewellery. In addition, information regarding the domain,
              server, host providing the internet. IP address of the system/ISP
              and any other anonymous site data may be accessed by Amaara
              Jewellery.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              Use of Personal Information
            </Typography>
            <Typography sx={customBodyTextStyle}>
              We use personal information to provide you with the below:
              <ol>
                <li>
                  To resolve any technical snag, troubleshoot concerns, promote
                  safe services, to perform financial transactions if any,
                  measure consumer statistics in our services.
                </li>
                <li>
                  To inform you about offers, products, services, updates,
                  customize your experience, detect & protect us against error,
                  fraud and other criminal activity, enforce our terms and
                  conditions, etc.
                </li>
                <li>
                  To send you offers based on your previous orders and
                  interests.
                </li>
                <li>
                  To customize your experience at Amaara Jewellery, by providing
                  you with content that we think you might be interested in and
                  to display content according to your preferences.
                </li>
              </ol>
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              Cookies
            </Typography>
            <Typography sx={customBodyTextStyle}>
              A "cookie" is a small piece of information stored by a web server
              on a web browser so it can be later read back from that browser.
              No personal information will be collected via cookies and other
              tracking technology; however, if you previously provided
              personally identifiable information, cookies may be tied to such
              information. Aggregate cookie and tracking information may be
              shared with third parties.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              Security
            </Typography>
            <Typography sx={customBodyTextStyle}>
              Amaara Jewellery has installed a secure server with stringent
              security measures in place to safeguard user's personal data from
              misuse, destruction and alteration of the information. Once your
              information is in our possession we adhere to strict security
              guidelines, protecting it against unauthorized access.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              Links to other Sites
            </Typography>
            <Typography sx={customBodyTextStyle}>
              Amaara Jewellery may have linked up with a few websites to carry
              out the functions at its optimum. Therefore, is not responsible
              for the privacy policy or the content of the other websites
              linked/to be linked on Amaara Jewellery.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card
            className="card"
            sx={{ paddingBottom: "50px", ...cardCommonStyles }}
          >
            <Typography sx={{ ...customHeadingStyle, color: "#777777" }}>
              Consent
            </Typography>
            <Typography sx={customBodyTextStyle}>
              By using Amaara Jewellery and/or by providing your information,
              you consent to the collection, storage and use of the information
              you disclose on Amaara Jewellery in accordance with this Privacy
              Policy, including but not limited to your consent for sharing your
              information as per this privacy policy
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
