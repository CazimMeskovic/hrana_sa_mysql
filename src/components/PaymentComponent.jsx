/* import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load your publishable key
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

const PaymentForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [statusPoruka, setStatusPoruka] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // Confirm payment
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/success", // Your success page
            },
        });

        if (error) {
            setStatusPoruka(`Error: ${error.message}`);
        } else {
            setStatusPoruka('Payment successful!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Pay ${amount / 100}</button>
            {statusPoruka && <p>{statusPoruka}</p>}
        </form>
    );
};

const PaymentComponent = ({ amount }) => (
    <Elements stripe={stripePromise}>
        <PaymentForm amount={amount} />
    </Elements>
);

export default PaymentComponent;
 */
/* 
import React, { useEffect, useRef } from 'react';

const PaymentComponent = ({ amount }) => {
    const paypalRef = useRef();

    useEffect(() => {
        // Load PayPal buttons into the component
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: amount.toString(), // Convert amount to string for PayPal
                        },
                    }],
                });
            },
            onApprove: async (data, actions) => {
                // Capture the payment here
                const order = await actions.order.capture();
                console.log('Order', order);
                alert('Payment successful!');
            },
            onError: (err) => {
                console.error('PayPal Checkout error:', err);
                alert('There was an issue processing your payment.');
            }
        }).render(paypalRef.current);
    }, [amount]);

    return (
        <div>
            <h2>Complete Payment</h2>
            <div ref={paypalRef} /> 
    );
};

export default PaymentComponent;
 */
/* 
import React, { useEffect, useRef, useState } from 'react';

const PaymentComponent = ({ amount }) => {
    const paypalRef = useRef();
    const [isPayPalReady, setIsPayPalReady] = useState(false);

    useEffect(() => {
        // Check if PayPal script is loaded
        const loadPayPalScript = () => {
            if (window.paypal) {
                setIsPayPalReady(true);
            } else {
                const script = document.createElement("script");
                script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}`;

                script.onload = () => setIsPayPalReady(true);
                document.body.appendChild(script);
            }
        };

        loadPayPalScript();
    }, []);

    useEffect(() => {
        if (isPayPalReady) {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount.toString(),
                            },
                        }],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('Order', order);
                    alert('Payment successful!');
                },
                onError: (err) => {
                    console.error('PayPal Checkout error:', err);
                    alert('There was an issue processing your payment.');
                }
            }).render(paypalRef.current);
        }
    }, [isPayPalReady, amount]);

    return (
        <div className='flex justify-center '>
            <h2>Complete Payment</h2>
            {isPayPalReady ? <div ref={paypalRef} /> : <p>Loading payment options...</p>}
        </div>
    );
};

export default PaymentComponent;
 */

import React, { useEffect, useRef, useState } from 'react';

const PaymentComponent = ({ amount }) => {
    const paypalRef = useRef();
    const [isPayPalReady, setIsPayPalReady] = useState(false);

    useEffect(() => {
        const loadPayPalScript = () => {
            if (window.paypal) {
                setIsPayPalReady(true);
            } else {
                const script = document.createElement("script");
                script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}`;
                script.onload = () => setIsPayPalReady(true);
                document.body.appendChild(script);
            }
        };

        loadPayPalScript();
    }, []);

    useEffect(() => {
        if (isPayPalReady) {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount.toString(),
                            },
                        }],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('Order', order);
                    alert('Payment successful!');
                },
                onError: (err) => {
                    console.error('PayPal Checkout error:', err);
                    alert('There was an issue processing your payment.');
                }
            }).render(paypalRef.current);
        }
    }, [isPayPalReady, amount]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-2xl font-semibold mb-4">Complete Payment</h2>
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                {isPayPalReady ? (
                    <div ref={paypalRef} />
                ) : (
                    <p className="text-center">Loading payment options...</p>
                )}
            </div>
        </div>
    );
};

export default PaymentComponent;
