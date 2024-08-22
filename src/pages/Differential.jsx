import React, { useState } from 'react';
import History from '../components/differentials/History';
import CaseInformation from '../components/differentials/CaseInformation';
import Objective from '../components/differentials/Objective';
import DifferentialOutput from './DifferentialOutput';


// Icons can be imported as SVG components or URLs
// import { ReactComponent as CheckIcon } from '../assets/icons/check.svg';
// import { ReactComponent as CaseIcon } from '../assets/icons/case.svg';
// import { ReactComponent as ObjectiveIcon } from '../assets/icons/objective.svg';
// import { ReactComponent as OutputIcon } from '../assets/icons/output.svg';
import { ReactComponent as dummyImg1 } from "../assests/img/dummy/check-solid.svg";
import { ReactComponent as dummyImg2 } from "../assests/img/dummy/x-solid.svg";


const Differential = () => {

    const [completeQuery, setCompleteQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const steps = [
        { step: 1, label: "History of Present Illness", UniqueIcon: dummyImg2, CompleteIcon:dummyImg1 },
        { step: 2, label: "Simulated Case Information", UniqueIcon: dummyImg2, CompleteIcon:dummyImg1 },
        { step: 3, label: "Examination & Investigatory Findings", UniqueIcon: dummyImg2, CompleteIcon:dummyImg1 },
        { step: 4, label: "Diagnosis Preview", UniqueIcon: dummyImg2, CompleteIcon:dummyImg1 },
    ];

    const handleNext = (data) => {
        const current_query = completeQuery;
        const new_query = current_query.concat(" ", data);
        setCompleteQuery(new_query)
        setCurrentPage(currentPage + 1);
    };

    const handleBack = () => {
        setCurrentPage(currentPage - 1);
    }

    // as quick submit has just single input
    const handleQuickSubmit = (quickInput) => {
        const completeQuery = quickInput;
        setCompleteQuery(completeQuery)
        setCurrentPage(4);
    }


    return (
        <div className="p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold mb-6">Guiding You to the Right Diagnosis</h2>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
                {steps.map(({ step, label, UniqueIcon, CompleteIcon }, index) => (
                <div key={step} className="flex items-center relative basis-1/6">
                {/* Icon with circle */}
                <div className={`flex items-center justify-center w-10 h-10 mr-2 ${currentPage >= step ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'} rounded-full`}>
                    {currentPage > step ? (
                        <CompleteIcon className="w-6 h-6 fill-current" />
                    ) : (
                        <UniqueIcon className="w-6 h-6 fill-current" />
                    )}
            </div>

            {/* Step Label */}
            <div className={`mt-2 basis-5/6 text-start text-[13px] ${currentPage >= step ? 'text-black' : 'text-gray-400'}`}>
                {label}
            </div>

            {/* Line between steps */}
            {index !== steps.length - 1 && (
                <div className={`absolute top-5 left-full w-24 h-[2px] ${currentPage > step ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            )}
        </div>
        ))}
        </div> 

        {/* Component Rendering */}
        <div>
            {currentPage === 1 && <History onNext={handleNext} quickSubmit={handleQuickSubmit}/>}
            {currentPage === 2 && <CaseInformation onBack={handleBack}  onNext={handleNext} />}
            {currentPage === 3 && <Objective onBack={handleBack}  onNext={handleNext} />}
            {currentPage === 4 && <DifferentialOutput completeQuery={completeQuery} />}
        </div>
        </div>
    );
};

export default Differential;