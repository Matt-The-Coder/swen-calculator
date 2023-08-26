import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Calculateform from "../components/quotePage/Calculateform";

const Quotepage = () => {
    const {carParams} = useParams()
    const [carType, setCarType] = useState({
        cInitialAmount: 0,
        cPremiumAmount: 0,
        cRate: 1.3,
        cBodyInjured: 0,
        cPropertyDamage: 0,
        cPassengerAccident: 0,
        cAnnualPremium: 0,
        cDocumentStamps: 0,
        cEVat:0,
        cLgt:0,
        cGrossPremium:123
    })
    const [amount, setAmount] = useState({
        InitialAmount: 0,
        PremiumAmount: 0,
        Rate: 1.3,
        BodyInjured: 0,
        PropertyDamage: 0,
        PassengerAccident: 0,
        AnnualPremium: 0,
        DocumentStamps: 0,
        EVat:0,
        Lgt:0,
        GrossPremium:123
    })
    useEffect(()=>{
       if(carParams == 'pv'){ setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.30.toFixed(2),
            cBodyInjured: 420.00.toFixed(2),
            cPropertyDamage: 1245.00.toFixed(2),
            cPassengerAccident: 'Free',
            cAnnualPremium: 1665.00.toFixed(2),
            cDocumentStamps: 208.13,
            cEVat: 199.80.toFixed(2),
            cLgt:1.67,
            cGrossPremium:2074.60.toFixed(2)
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0.00.toFixed(2),
            Rate: 1.30.toFixed(2),
            BodyInjured: 420.00.toFixed(2),
            PropertyDamage: 1245.00.toFixed(2),
            PassengerAccident: 'Free',
            AnnualPremium: 1665.00.toFixed(2),
            DocumentStamps: 208.13,
            EVat: 199.80.toFixed(2),
            Lgt:1.67,
            GrossPremium:2074.60.toFixed(2)
        })
    
    }
        else if(carParams == 'cvsuv') {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.3,
            cBodyInjured: 510.00.toFixed(2),
            cPropertyDamage: 1320.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 1930.00.toFixed(2),
            cDocumentStamps: 241.25,
            cEVat: 231.60.toFixed(2),
            cLgt:1.93,
            cGrossPremium:2404.78
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 1.3,
            BodyInjured: 510.00,
            PropertyDamage: 1320.00,
            PassengerAccident: 100.00,
            AnnualPremium: 1930.00,
            DocumentStamps: 241.25,
            EVat: 231.60,
            Lgt:1.93,
            GrossPremium:2404.78
        })
    }
        else if(carParams == 'cvlt') {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.3,
            cBodyInjured: 510.00.toFixed(2),
            cPropertyDamage: 1320.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 1930.00.toFixed(2),
            cDocumentStamps: 241.25,
            cEVat: 231.60.toFixed(2),
            cLgt:1.93,
            cGrossPremium:2404.78
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 1.3,
            BodyInjured: 510.00.toFixed(2),
            PropertyDamage: 1320.00,
            PassengerAccident: 100.00,
            AnnualPremium: 1930.00,
            DocumentStamps: 241.25,
            EVat: 231.60,
            Lgt:1.93,
            GrossPremium:2404.78
        })
    }
        else if(carParams == 'cvht') {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.3,
            cBodyInjured: 660.00.toFixed(2),
            cPropertyDamage: 1395.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 2155.00.toFixed(2),
            cDocumentStamps: 269.38,
            cEVat: 258.60,
            cLgt:2.15,
            cGrossPremium:2685.13
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 1.3,
            BodyInjured: 660.00,
            PropertyDamage: 1395.00,
            PassengerAccident: 100.00,
            AnnualPremium: 2155.00,
            DocumentStamps: 269.38,
            EVat: 258.60,
            Lgt:2.15,
            GrossPremium:2685.13
        })
    }
        else {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 2.0.toFixed(2),
            cBodyInjured: 792.00.toFixed(2),
            cPropertyDamage: 1674.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 2566.00.toFixed(2),
            cDocumentStamps: 320.75,
            cEVat: 307.92,
            cLgt:2.57,
            cGrossPremium:3197.24
        }) 
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 2,
            BodyInjured: 792.00,
            PropertyDamage: 1674.00,
            PassengerAccident: 100.00,
            AnnualPremium: 2566.00,
            DocumentStamps: 320.75,
            EVat: 307.92,
            Lgt:2.57,
            GrossPremium:3197.24
        }) 
    }
    }, [carParams])
   const printComponent = () => {
    window.print()
   }
   //AMOUNT
   const initialAmountInput = useRef(null)
   const rateInput = useRef(null)
   const annualPremiumInput = useRef(null)
   const documentStampsInput = useRef(null);
   const eVatInput = useRef(null);
   const lgtInput = useRef(null);
      // CLIENT
      const clientName = useRef(null)
      const clientUnit = useRef(null)
      const preparedPerson = useRef(null)
   const [client, setClient] = useState({
    name: '',
    unit: '',
    preparedBy: ''
})
   const clientReset = ()=>{
    clientName.current.value = ''
    clientUnit.current.value = ''
    preparedPerson.current.value =''    
    setClient({
        name: '',
        unit: '',
        preparedBy: ''
    })
     
   }
   const resetValue = () => {
        initialAmountInput.current.value = ''
        setCarType({
            cInitialAmount: amount.InitialAmount,
            cPremiumAmount: amount.PremiumAmount,
            cRate: amount.Rate,
            cBodyInjured: amount.BodyInjured,
            cPropertyDamage: amount.PropertyDamage,
            cPassengerAccident: amount.PassengerAccident,
            cAnnualPremium: amount.AnnualPremium,
            cDocumentStamps: amount.DocumentStamps,
            cEVat: amount.EVat,
            cLgt:amount.Lgt,
            cGrossPremium:amount.GrossPremium
        })
        clientReset()

   }
    return(
    <div className="quotePage">
    <Calculateform carType={carType} amount={amount} carParams={carParams}
    setCarType={setCarType} clientName={clientName} clientUnit={clientUnit}
    preparedPerson={preparedPerson} initialAmountInput={initialAmountInput}
    rateInput={rateInput} annualPremiumInput={annualPremiumInput} documentStampsInput={documentStampsInput}
    eVatInput={eVatInput} lgtInput={lgtInput} setClient={setClient}/>
  <div className="buttonForms">
<button onClick={printComponent}>Print</button>
    <button onClick={resetValue}>Reset</button>
  </div>

</div>
    
    
    )
}

export default Quotepage;