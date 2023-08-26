
const Calculateform = ({carType, amount, carParams, setCarType, clientName, preparedPerson,
clientUnit, clientInfo, initialAmountInput, rateInput, annualPremiumInput, documentStampsInput,
eVatInput, lgtInput, setClient}) => {

     
    //AMOUNTS
   
    const changeValue = () => {
        const initAmount = initialAmountInput.current.value;
        const rateAmount = rateInput.current.value;
        const calculatedRateAmount = rateAmount!==""? rateAmount * 0.01: 0 * 0.01;
        const totalAmount = (initAmount == "" ? 0 * calculatedRateAmount : parseFloat(initAmount) * calculatedRateAmount ).toFixed(2); // Format to two decimal places as a string
        const totalAnnualPremium = (
          parseFloat(amount.AnnualPremium) +
          parseFloat(amount.AnnualPremium) * (totalAmount / amount.AnnualPremium)
        ).toFixed(2);
        const totalDocumentStamps = (
          parseFloat(amount.DocumentStamps) +
          parseFloat(amount.DocumentStamps) * (totalAmount / amount.AnnualPremium)
        ).toFixed(2);
        const totalEVat = (
          parseFloat(amount.EVat) +
          parseFloat(amount.EVat) * (totalAmount / amount.AnnualPremium)
        ).toFixed(2);
        const totalLgt = (
          parseFloat(amount.Lgt) +
          parseFloat(amount.Lgt) * (totalAmount / amount.AnnualPremium)
        ).toFixed(2);
        const totalGrossPremium = (
          parseFloat(totalAnnualPremium) +
          parseFloat(totalDocumentStamps) +
          parseFloat(totalEVat) +
          parseFloat(totalLgt)
        ).toFixed(2);
      
        setCarType({
          cInitialAmount: initAmount,
          cPremiumAmount: totalAmount,
          cRate: rateAmount,
          cBodyInjured: carType.cBodyInjured,
          cPropertyDamage: carType.cPropertyDamage,
          cPassengerAccident: carType.cPassengerAccident,
          cAnnualPremium: totalAnnualPremium,
          cDocumentStamps: totalDocumentStamps,
          cEVat: totalEVat,
          cLgt: totalLgt,
          cGrossPremium: parseFloat(totalGrossPremium).toFixed(2),
        });
      };
      
    return(<>
        <div className="carTitle">
        <h1>{carParams == 'pv'? 'Personal Vehicle (5-Seater SEDAN)': 
        carParams == 'cvsuv'?'Commercial Vehicle (7-Seater SUV)':
        carParams == 'cvlt'? 'Commercial Vehicle (Light Truck)':
        carParams == 'cvht'? 'Commercial Vehicle (Heavy Truck':
        'Commercial Vehicle (Heavy Truck +Surcharge)' }</h1>
    </div>
  <div className="tableForm">
    <table>
        <thead>
        <tr id="thead">
            <th>Client</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
       <tbody>
        <tr>
            <td>
                <label htmlFor="Name">Name: </label>
                <input type="text" ref={clientName} onChange={()=>{setClient({
                     name: clientName.current.value,
                     unit: clientUnit.current.value,
                     preparedBy: preparedPerson.current.value
                })}}/>
            </td>
        </tr>
        <tr>
        <td>
                <label htmlFor="Unit">Unit: </label>
                <input type="text" ref={clientUnit} onChange={()=>{setClient({
                     name: clientName.current.value,
                     unit: clientUnit.current.value,
                     preparedBy: preparedPerson.current.value
                })}} />
            </td>
        </tr>
        <tr>
        <td>
                <label htmlFor="PreparedBy">Prepared by: </label>
                <input type="text" ref={preparedPerson} onChange={()=>{setClient({
                     name: clientName.current.value,
                     unit: clientUnit.current.value,
                     preparedBy: preparedPerson.current.value
                })}} />
            </td>
        </tr>
        <tr id="thead">
            <th>Coverage</th>
            <th>Amount</th>
            <th>Premium</th>
        </tr>
        <tr>
            <td>
                <p>- Own Damage</p>
                <p>- Theft</p>
                <p>- Acts of Nature</p>
            </td>
            <td>
                <label htmlFor="pesoSign">₱ </label>
                <input type="text" id="inputBorder" ref={initialAmountInput} onChange={changeValue} />
            </td>
            <td>
                <label htmlFor="pesoSign">₱ </label> 
                <label>{carType.cPremiumAmount}</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label htmlFor="rate">Rate </label>
                <input type="text" value={carType.cRate} id="inputBorder" ref={rateInput} onChange={changeValue} />
            </td>
            <td></td>
        </tr>
        <tr>
            <td>
            <p>- Body Injured</p>
            </td>
            <td>
            <p>₱200000.00</p>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cBodyInjured} readOnly />
            </td>
           
        </tr>
        <tr>
             <td>
            <p>- Property Damage</p>
            </td>
            <td>
            <p>₱200000.00</p>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cPropertyDamage} readOnly/>
            </td>
           
        </tr>
        <tr>
        <td>
            <p>- Passenger Accident</p>
            </td>
            <td>
            <p>₱200000.00</p>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cPassengerAccident} readOnly />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <p>ANNUAL PREMIUM</p>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cAnnualPremium} ref={annualPremiumInput} readOnly/>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <p>Document Stamps</p>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cDocumentStamps} ref={documentStampsInput} readOnly />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <p>E-VAT</p>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cEVat} ref={eVatInput} readOnly/>
            </td>
        </tr>
        <tr>
             <td></td>
            <td>
                <p>LGT (Local Government Tax)</p>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cLgt} ref={lgtInput} readOnly/>
            </td>
        </tr>
        <tr>
             <td></td>
            <td>
                <h4>GROSS PREMIUM</h4>
            </td>
            <td>
            <label htmlFor="pesosign">₱ </label>
            <input type="text" value={carType.cGrossPremium} readOnly/>
            </td>
        </tr>
                
       </tbody>
    </table>
  </div>
    </>)
}

export default Calculateform