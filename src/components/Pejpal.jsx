/* 
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export default function Pejpal() {
    const initialOptions = {
        clientId: "AT3-_NhSVNdJsX2kkQ39V_XYj0OzUrDIBBvKqGuo4bvY45dYfHIvBD0YPZKNGmLZ3-MP6y42CA9hB7-S",
        // Add other options as needed
     
    };
    const styles = {
        shape: "rect",
        layout: "vertical",
    };

    return (
        <div className="  border-2 border-red-500 App">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons style={styles} />
            </PayPalScriptProvider>
        </div>
    );
}
 */

import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const styles = {
    shape: "rect",
    layout: "vertical",
};
// AXd3wLAR-Jg3wh9RDsKnqp7XdCa2vwFZwfeQggp2SeD29TSX9cqGIRLehwSeVtGxVvfUcQnrLuUuphB6
//AT3-_NhSVNdJsX2kkQ39V_XYj0OzUrDIBBvKqGuo4bvY45dYfHIvBD0YPZKNGmLZ3-MP6y42CA9hB7-S
const Pejpal = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AXd3wLAR-Jg3wh9RDsKnqp7XdCa2vwFZwfeQggp2SeD29TSX9cqGIRLehwSeVtGxVvfUcQnrLuUuphB6" }}>
      
      
      <div>
        <PayPalButtons
         /*  style={{ layout: "vertical" }} */
         style={styles}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Payment Successful");
              console.log(details);
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Pejpal;
