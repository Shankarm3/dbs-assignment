import React from 'react';
const HomeLoanDetails = ({ data }) => {
    return (
        <div className="homeloan-wrapper">
            <h5>{data.title}</h5>
            <table className="homeloan-table">
                <thead>
                    <tr>
                        <th>Home Loan</th>
                        <th>Loan Tenure</th>
                        <th>Interest Rate</th>
                    </tr>
                </thead>
                <tbody>
                <tr key={data.entry.id}>
                    <td>{data.entry.loanType}</td>
                    <td>{data.entry.tenure}</td>
                    <td>{data.entry.rate}</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default HomeLoanDetails;