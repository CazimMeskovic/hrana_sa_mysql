/* import React from 'react';
import PaymentComponent from './PaymentComponent';

const CheckoutPage = () => {
    const amountToPay = 25.99; // For example, replace with the actual amount needed for your purchase

    return (
        <div>
            <h1>Checkout Page</h1>
            <PaymentComponent amount={amountToPay} />
        </div>
    );
};

export default CheckoutPage;
 */
/* 
import React, { useEffect } from 'react';
import PaymentComponent from './PaymentComponent';

const CheckoutPage = () => {
    const amountToPay = 0.99; // Replace with actual amount
    useEffect(() => {
        const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
        console.log("PayPal Client ID:", paypalClientId); // Log the client ID

        const loadPaypalScript = () => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`;
            script.async = true;
            document.body.appendChild(script);
        };

        loadPaypalScript();
    }, []);
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.header}>Checkout</h1>
                <p style={styles.amount}>Total: ${amountToPay.toFixed(2)}</p>
                <PaymentComponent amount={amountToPay} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
    },
    content: {
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '40px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
    },
    amount: {
        fontSize: '18px',
        marginBottom: '20px',
        color: '#666',
    },
};

export default CheckoutPage;
 */
/* 
import React, { useEffect } from 'react';
import PaymentComponent from './PaymentComponent';

const CheckoutPage = () => {
    const amountToPay = 25.99; // Replace with your actual amount

    useEffect(() => {
        const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID; // Correctly access the environment variable
        console.log("PayPal Client ID:", paypalClientId); // Log the client ID for verification

        const loadPaypalScript = () => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`; // Use the actual client ID
            script.async = true;
            script.onload = () => {
                console.log("PayPal SDK loaded successfully.");
            };
            script.onerror = () => {
                console.error("Failed to load PayPal SDK.");
            };
            document.body.appendChild(script);
        };

        loadPaypalScript();
    }, []);

    return (
        <div>
            <h1>Checkout Page</h1>
            <PaymentComponent amount={amountToPay} />
        </div>
    );
};

export default CheckoutPage;
 */
/* 
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentComponent from './PaymentComponent';

const CheckoutPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const amountToPay = parseFloat(queryParams.get('amount')) || 0; // Preuzmite amount iz URL-a, ili 0 ako nije definisan

    useEffect(() => {
        const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID; // Pristupite varijabli okruženja
        console.log("PayPal Client ID:", paypalClientId);

        const loadPaypalScript = () => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`; 
            script.async = true;
            script.onload = () => {
                console.log("PayPal SDK loaded successfully.");
            };
            script.onerror = () => {
                console.error("Failed to load PayPal SDK.");
            };
            document.body.appendChild(script);
        };

        loadPaypalScript();
    }, []);

    return (
        <div>
            <h1>Checkout Page</h1>
            <PaymentComponent amount={amountToPay} />
        </div>
    );
};

export default CheckoutPage;
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentComponent from './PaymentComponent';

const CheckoutPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const amountToPay = parseFloat(queryParams.get('amount')) || 0; // Preuzmite amount iz URL-a, ili 0 ako nije definisan

    useEffect(() => {
        const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID; // Pristupite varijabli okruženja
        console.log("PayPal Client ID:", paypalClientId);

        const loadPaypalScript = () => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`; 
            script.async = true;
            script.onload = () => {
                console.log("PayPal SDK loaded successfully.");
            };
            script.onerror = () => {
                console.error("Failed to load PayPal SDK.");
            };
            document.body.appendChild(script);
        };

        loadPaypalScript();
    }, []);

    const handleRefresh = () => {
        window.location.reload(); // Osvježava stranicu
    };

    return (
        <>
        <div className='flex justify-center items-center ' >
            <h1>Checkout Page</h1>
            <button onClick={handleRefresh} className=" button-theme bg-theme-cart text-white">
                Paj
            </button>
           
           
        </div>
        <PaymentComponent amount={amountToPay} />
        </>
    );
};

export default CheckoutPage;
