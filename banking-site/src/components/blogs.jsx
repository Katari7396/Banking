import { Box, Typography, Grid, CardMedia, CardContent } from "@mui/material";
import React from "react";

function Blogs() {
  const blogs = [
    {
      id: 1,
      image: "/blogs/blog1.jpg",
      title: "Key Highlights - Union Budget 2025-26",
      description:
        "Union Budget 2025 focuses on gareeb, youth, annadata & naari. No tax on income up to ₹12L, higher TDS limit for seniors & major reforms in credit & FDI. Boost for startups, urea production, and Atmanirbharta in pulses to strengthen the economy.",
    },
    {
      id: 2,
      image: "/blogs/blog2.jpg",
      title: "Axis Bank Credit Card Cash Withdrawal Charges & Limit",
      description:
        "You can use your Axis Bank credit card for cash withdrawals just like a debit card from an ATM kiosk. The cash withdrawal feature of Axis Bank credit cards can be of great benefit, especially during emergencies. However, Axis Bank levies a limit for withdrawing cash with your credit card from an ATM.",
    },
    {
      id: 3,
      image: "/blogs/blog3.jpg",
      title: "How to Choose Personal Loan Tenure Wisely?",
      description:
        "When you choose a personal loan offer, there are many factors you consider, like loan amount, rate of interest, processing fee, etc. However, it is crucial to focus on choosing the right loan tenure so that you do not end up paying much more than you should. The right personal loan tenure should neither be too short nor too long.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        paddingBottom: "50px",
        fontFamily: "Manrope, sans-serif !important",
        justifyContent: "space-between",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif !important",
          padding: 5,
          marginTop: "40px",
          marginLeft: "545px",
          fontSize: "2.3rem",
          fontWeight: "700",
          color: "black",
          lineHeight: 1.2,
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            right: 40,
            borderRadius: "5px",
            bottom: "35px",
            width: "70px",
            height: "4px",
            backgroundColor: "#3593b0",
          },
        }}
      >
        Blogs
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: "10px" }}
      >
        {blogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Box
              sx={{
                maxWidth: 400,
                height: 400,
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
                sx={{ objectFit: "fill" }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#616161",
                    textAlign: "center",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    marginTop: "5px",
                    color: "GrayText",
                    textAlign: "center",
                  }}
                >
                  {blog.description}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif !important",
          padding: 5,
          marginTop: "60px",
          marginLeft: "545px",
          fontSize: "1.8rem",
          fontWeight: "550",
          color: "#3593b0",
        }}
      >
        View More
      </Typography>
    </Box>
  );
}

export default Blogs;
