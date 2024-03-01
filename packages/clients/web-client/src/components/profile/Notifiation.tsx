import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const Notification: React.FC<any> = ({notification}) => {
  return (
    <Card
      sx={{backgroundColor: '#F2EEE5', borderRadius: '20px', display: 'flex', mt: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <CardContent>
        <Typography variant="body1" color="#777777" sx={{fontSize: 12, margin: 2}}>
          {notification.message}
        </Typography>
      </CardContent>
      {/* Replace "url_to_your_image.jpg" with the actual URL or path to your image */}
      <img src="/notification.png" alt="Notification Image" style={{ margin: 16, maxHeight: 100, maxWidth: 100 }} />
    </Card>
  );
};
