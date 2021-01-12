import React from 'react';
import InsuranceDetails from './InsuranceDetails';

const HowItWorks = ({data}) => {
    return (
        <React.Fragment>
            {data.map(entry => {
                return (
                        <div key={entry.id} className="columns">
                            <div className="badge-wrapper flex-item">
                                <span className="badge">{entry.id}</span>
                            </div>
                            <div className="img-wrapper flex-item">
                                <img src={entry.image} alt="Logo" />
                            </div>
                            <div className="insurance-wrapper flex-item">
                                <InsuranceDetails data={entry} />
                            </div>
                        </div>
                )
            })}
        </React.Fragment>
    )
}

export default HowItWorks;
