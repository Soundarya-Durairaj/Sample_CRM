import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

function Dashboard() {
  const [items, setItems] = useState([
    "Leads Overview", "Sales Pipeline", "Customer Engagement", "Team Performance", "Tasks Overview"
  ]);

  const progressData = [65, 75, 80, 90, 60]; // These can represent sales performance or engagement metrics

  return (
    <Box display="flex" height="100vh">
      {/* Side Panel */}
      <Box sx={{
        width: '250px',
        backgroundColor: '#2c3e50',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        justifyContent: 'space-between'
      }}>
        <Typography variant="h5">
          CRM Dashboard
        </Typography>
       
      </Box>

      {/* Main Content */}
      <Box
        flex={1}
        padding={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #74ebd5, #ACB6E5)', // Adding the gradient background
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4">
            Welcome to your CRM Dashboard
          </Typography>

          {/* Sales Performance Graph */}
          <Box sx={{ marginTop: '20px', background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h6" gutterBottom>
              Sales Performance
            </Typography>
            <Grid container spacing={3}>
              {progressData.map((value, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box>
                    <Typography variant="body2">{`Month ${index + 1}`}</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={value}
                      color="primary"
                      
                    />
                    <Typography variant="body2">{`${value}%`}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* CRM Overview Cards */}
          <Grid container spacing={3} sx={{ marginTop: '30px' }}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Card sx={{ background: "#fff", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
                    <CardContent>
                      <Typography variant="h6">{item}</Typography>
                      <Typography variant="body2">Overview and insights of {item.toLowerCase()}.</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Dashboard;
