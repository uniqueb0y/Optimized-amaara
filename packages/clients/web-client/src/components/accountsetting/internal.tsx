import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Box } from '@mui/material';
import { buttonStyles } from '../../styles/button';

interface TableRow {
  transactionId: string;
  emiNumber: number;
  emiMonth: string;
  emiYear: number;
  paidOn: string;
}

interface AccountTableProps {
  schemeId: number;
}

const getSchemeRows = (schemeId: number): TableRow[] => {
  // You can customize rows based on the schemeId
  switch (schemeId) {
    case 1:
      return [
        { transactionId: 'T123', emiNumber: 1, emiMonth: 'January', emiYear: 2024, paidOn: '2024-01-28' },
        { transactionId: 'T124', emiNumber: 2, emiMonth: 'February', emiYear: 2024, paidOn: '2024-02-28' },
        { transactionId: 'T125', emiNumber: 3, emiMonth: 'March', emiYear: 2024, paidOn: '2024-03-28' },
      ];
      case 2:
        return [
          { transactionId: 'T123', emiNumber: 1, emiMonth: 'January', emiYear: 2024, paidOn: '2024-01-28' },
          { transactionId: 'T124', emiNumber: 2, emiMonth: 'February', emiYear: 2024, paidOn: '2024-02-28' },
          { transactionId: 'T125', emiNumber: 3, emiMonth: 'March', emiYear: 2024, paidOn: '2024-03-28' },
        ];
        case 3:
        return [
          { transactionId: 'T123', emiNumber: 1, emiMonth: 'January', emiYear: 2024, paidOn: '2024-01-28' },
          { transactionId: 'T124', emiNumber: 2, emiMonth: 'February', emiYear: 2024, paidOn: '2024-02-28' },
          { transactionId: 'T125', emiNumber: 3, emiMonth: 'March', emiYear: 2024, paidOn: '2024-03-28' },
        ];
    default:
      return [];
  }
};

export const AccountTable: React.FC<AccountTableProps> = ({ schemeId }) => {
  const schemeRows = getSchemeRows(schemeId);

  return (
    <Grid container spacing={3} sx={{justifyContent:'center'}} >
      {schemeRows.map((row, index) => (
        <Grid item xs={12} md={4} key={index} sx={{display: 'flex', justifyContent: 'center', mt:2}}>
          <Card sx={{minWidth: '80%'}}>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Transaction Details
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Transaction Id: {row.transactionId}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                EMI Number: {row.emiNumber}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                EMI Month: {row.emiMonth}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                EMI Year: {row.emiYear}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Paid on: {row.paidOn}
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>
      ))}
      
    </Grid>
  );
};
