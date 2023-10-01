import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  /* Add your CSS styles here */
`;

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    // Fetch jobs based on selected language
    useEffect(() => {
        if (selectedLanguage) {
            axios
                .get(`https://api.github.com/jobs?description=${selectedLanguage}`)
                .then((response) => {
                    setJobs(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [selectedLanguage]);

    return (
        <Container>
            <h2>Find a Job</h2>
            <input
                type="text"
                placeholder="Enter a programming language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
            />
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <button>View Details</button>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default JobList;
