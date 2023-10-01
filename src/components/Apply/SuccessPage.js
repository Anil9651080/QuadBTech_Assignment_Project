import React from 'react';
import styled from 'styled-components';

// Define a styled container for the SuccessPage

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the height to cover the full page */
  background-image: linear-gradient(5deg, #ff0066, #3300cc); /* Add a gradient background */
  color: #fff;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-image: linear-gradient(45deg, #ff0066, #3300cc); /* Add a gradient background */
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    margin: 0 auto;
    text-align: center;
    animation: fadeIn 1s; /* Add a fadeIn animation */
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const PreviewContainer = styled.div`
    background-image: url('your-background-image.jpg'); /* Add your background image URL here */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    text-align: left;
    margin-top: 20px;
`;

const FieldLabel = styled.p`
    font-weight: bold;
`;

const FieldValue = styled.p`
    margin-bottom: 10px;
`;

const SuccessPage = () => {
    // Data passed from ApplyForm component via Redux
    const formData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        coverLetter: 'This is a sample cover letter.',
        // Add more data as needed
    };

    return (
        <Container1>
            <Container>
                <Title>Application Submitted</Title>
                <PreviewContainer>
                    <h3>Preview:</h3>
                    <FieldLabel>Name:</FieldLabel>
                    <FieldValue>{formData.name}</FieldValue>
                    <FieldLabel>Email:</FieldLabel>
                    <FieldValue>{formData.email}</FieldValue>
                    <FieldLabel>Cover Letter:</FieldLabel>
                    <FieldValue>{formData.coverLetter}</FieldValue>
                    {/* Add more fields as needed */}
                </PreviewContainer>
            </Container>
        </Container1>
    );
};

export default SuccessPage;
