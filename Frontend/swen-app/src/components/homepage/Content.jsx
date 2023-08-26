

const Content = ({renderTableData}) =>{
    return(
       <>
       <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Variant</th>
            <th>Value</th>
            <th>Action</th>
        </tr>
        </thead>
       <tbody>
       {renderTableData()}
       </tbody>
        
       </table>

       </>
    )
}

export default Content