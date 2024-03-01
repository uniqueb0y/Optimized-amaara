import { Box, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { Loader } from '../../Component/Loader';
import { GET_CONTACT_US } from '../../gql/contact-us';
import { ContactUsComponent } from '../../Component/ContactUs';

export const ContactUs = () => {
  const {
    data,
    loading,
  } = useQuery(GET_CONTACT_US);

  const result = data?.getContactUs;

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ padding: "40px", width: "95vw" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: 'flex-start', sm: 'space-between'},
            gap: 10,
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: 24, fontWeight: "bold", color: "#4F0336" }}
          >
            Contact Us Inquiries
          </Typography>
        </Box>
        {loading && (
          <Box mt={4}>
            <Loader />
          </Box>
        )}
        {!loading && result && result.length > 0 ? (
          <ContactUsComponent data={result} />
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            mt={4}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "24px", fontWeight: "bold", color: "#4F0336" }}
            >
              No data found.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
