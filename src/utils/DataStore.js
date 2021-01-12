export const DataStore = {
    INSURANCE_DATA: [
        {
            image: '/insurance/howitworks-1.svg',
            title: 'At Age 35',
            id: 1,
            desc: 'Peter and his wife, Jane got a home loan for their new home. He buys eDecreasingTerm that matches his home loan.',
            homeLoans: {
                title: 'Home Loan Details',
                entry: {
                    id: 2,
                    loanType: 'SGD 500,000',
                    tenure: '25 Years',
                    rate: 3
                }
            },
            policyDetails: {
                title: 'Home Loan Details',
                entry: {
                    id: 3,
                    coverageType: 'SGD 500,000',
                    tenure: '25 Years',
                    rate: 3
                },
            }
        },
        {
            image: '/insurance/howitworks-2.svg',
            title: 'During the policy term',
            id: 2,
            desc: 'Every month, Peter pays a premium of $31 for this policy. The coverage amount decreases at the same rate as his home loan.',
            homeLoans: {
                title: 'Home Loan Details',
                entry: {
                    id: 2,
                    loanType: 'SGD 486,286',
                    tenure: '23 Years',
                    rate: 3
                }
            },
            policyDetails: {
                title: 'Home Loan Details',
                entry: {
                    id: 3,
                    coverageType: 'SGD 486,286',
                    tenure: '23 Years',
                    rate: 3
                },
            }
        }
    ]
}

export default DataStore;