import React from 'react';
import styled, { keyframes } from 'styled-components';

// Background animation using keyframes
const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Container for the page
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #2193b0, #6dd5ed);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 15s linear infinite;
  color: #fff;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

// Card-style container for job details
const Card = styled.div`
  ${'' /* background-color: rgba(255, 255, 255, 0.9); */}
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  margin: 20px;
  text-align: left;
`;

// Button style
const ApplyButton = styled.button`
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6600;
  }
`;

const JobDetail = () => {
    // Static job details data
    const jobDetails = [
        {
            title: 'Software Engineer',
            salary: '$60,000 - $80,000',
            experience: '3-5 years',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt libero ac magna fringilla, vel fermentum ante eleifend.',
            joining: 'Immediate',
            time: 'Full-time',
        },
        {
            title: 'Web Developer',
            salary: '$70,000 - $90,000',
            experience: '5-7 years',
            description:
                'Sed fermentum ut elit at euismod. Morbi sed lacus tincidunt, vulputate neque et, vestibulum justo.',
            joining: '2 weeks',
            time: 'Part-time',
        },
        {
            title: 'Content Creater',
            salary: '$70,000 - $90,000',
            experience: '5-7 years',
            description:
                'Sed fermentum ut elit at euismod. Morbi sed lacus tincidunt, vulputate neque et, vestibulum justo.',
            joining: '2 weeks',
            time: 'Part-time',
        },
        {
            title: 'Frontend Developer',
            salary: '$70,000 - $90,000',
            experience: '5-7 years',
            description:
                'Sed fermentum ut elit at euismod. Morbi sed lacus tincidunt, vulputate neque et, vestibulum justo.',
            joining: '2 weeks',
            time: 'Part-time',
        },

        // Add more job details as needed
    ];

    return (
        <Container>
            {jobDetails.map((job, index) => (
                <Card key={index}>
                    <h2>{job.title}</h2>
                    <p>Salary: {job.salary}</p>
                    <p>Experience: {job.experience}</p>
                    <p>Description: {job.description}</p>
                    <p>Joining: {job.joining}</p>
                    <p>Time: {job.time}</p>
                    <ApplyButton>Apply</ApplyButton>
                </Card>
            ))}
        </Container>
    );
};

export default JobDetail;
