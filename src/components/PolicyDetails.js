import React from 'react';
const PolicyDetails = ({ data }) => {
    return (
        <div className="policy-detail-wrapper">
            <h5>{data.title}</h5>
            <table className="policy-detail-table">
                <thead>
                    <tr>
                        <th>Coverage Amount</th>
                        <th>Policy Term</th>
                        <th>Decreasing Rate</th>
                    </tr>
                </thead>
                <tbody>
                <tr key={data.entry.id}>
                    <td>{data.entry.coverageType}</td>
                    <td>{data.entry.tenure}</td>
                    <td>{data.entry.rate}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PolicyDetails;