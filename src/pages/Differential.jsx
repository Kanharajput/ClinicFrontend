import React, { useState, useEffect } from 'react';
import History from '../components/differentials/History';
import CaseInformation from '../components/differentials/CaseInformation';
import Objective from '../components/differentials/Objective';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';


const Differential = () => {

    const navigate = useNavigate();
    const [completeQuery, setCompleteQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleNext = (data) => {
        const current_query = completeQuery;
        const new_query = current_query.concat(" ", data);
        setCompleteQuery(new_query)
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        console.log("Updated completeQuery:", completeQuery);
    }, [completeQuery]);


    const handleSubmit = () => {
        // start the loader
        setLoading(true);

        // Submit the formData to the API
        fetch(`http://3.110.175.181/differential-diagonise?question=${completeQuery}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.status == 200){
                    return response.json()
                }
            })
            .then(response_data => {
                // stop the loader
                setLoading(false);
                navigate('/differential-output', { state: { data: response_data } });
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
            });
    };

    return (
        
        <div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {currentPage === 1 && <History onNext={handleNext} />}
                    {currentPage === 2 && <CaseInformation onNext={handleNext} />}
                    {currentPage === 3 && <Objective onNext={handleNext} onSubmit={handleSubmit} />}
                </>
            )}
        </div>
    );
};

export default Differential;
