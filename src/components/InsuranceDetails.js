import React from 'react';
import HomeLoanDetails from './HomeLoanDetails';
import PolicyDetails from './PolicyDetails';

const InsuranceDetails = ({data}) => {
    return (
        <React.Fragment>
            <h4>{data.title}</h4>
            <p>{data.desc}</p>
            <HomeLoanDetails data={data.homeLoans} />
            <PolicyDetails data={data.policyDetails} />
        </React.Fragment>
    )
  }

  export default InsuranceDetails;
  