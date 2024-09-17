import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company'
import { testIncomeStatementData } from '../../Components/Table/testData'

interface Props{}
const tableConfig = [
    {
      label: "Market Cap",
      render: (company: CompanyKeyMetrics) => company.marketCapTTM,
      subTitle: "Total value of all a company's shares of stock",
    },
]

const DesignPage = (props: Props) => {
  return (
    <>
     <h1>FinDocs Design Page</h1>
     <h2>This is FinDoc's design page. This is where we will house various design aspects of the app</h2>
     <RatioList data={testIncomeStatementData} config={tableConfig} />
     <Table data={testIncomeStatementData} config={tableConfig} />
     <h3>
        Table - Table takes in a configuration object and company data as params. Use the
        config to style your table.
     </h3>
    </>
    

  )
}

export default DesignPage