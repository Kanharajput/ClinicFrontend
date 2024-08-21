import React, { useState } from 'react';
import History from '../components/differentials/History';
import CaseInformation from '../components/differentials/CaseInformation';
import Objective from '../components/differentials/Objective';
import DifferentialOutput from './DifferentialOutput';


const Differential = () => {

    const [completeQuery, setCompleteQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const handleNext = (data) => {
        const current_query = completeQuery;
        const new_query = current_query.concat(" ", data);
        setCompleteQuery(new_query)
        setCurrentPage(currentPage + 1);
    };


    return (
        
        <div>
            {currentPage === 1 && <History onNext={handleNext} />}
            {currentPage === 2 && <CaseInformation onNext={handleNext} />}
            {currentPage === 3 && <Objective onNext={handleNext}/>}
            {currentPage === 4 && <DifferentialOutput completeQuery={completeQuery}/>}
        </div>
    );
};

export default Differential;
