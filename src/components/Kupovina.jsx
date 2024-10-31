/* import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Kupovina = ({ korisnikId, korpa = [] }) => {
    const [statusPoruka, setStatusPoruka] = useState('');

    // Funkcija za slanje podataka o kupovini
    const zavrsiKupovinu = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/kupovina', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    korisnik_id: korisnikId,
                    proizvodi: korpa.map(proizvod => ({
                        proizvod_id: proizvod.id,
                        kolicina: proizvod.kolicina,
                    }))
                }),
            });

            if (response.ok) {
                setStatusPoruka('Kupovina uspješno pohranjena!');
            } else {
                setStatusPoruka('Greška pri pohranjivanju kupovine.');
                console.error('Greška pri pohranjivanju kupovine');
            }
        } catch (error) {
            setStatusPoruka('Došlo je do greške.');
            console.error('Greška:', error);
        }
    };

    return (
        <div>
            <h2>Korpa</h2>
            {korpa.length > 0 ? (
                <ul>
                    {korpa.map(proizvod => (
                        <li key={proizvod.id}>
                            {proizvod.naziv} - Količina: {proizvod.kolicina}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Korpa je prazna.</p>
            )}
            <button onClick={zavrsiKupovinu}>Završi kupovinu</button>
            {statusPoruka && <p>{statusPoruka}</p>}
        </div>
    );
};

// Definisanje proptypes da se osigura da su `korisnikId` i `korpa` ispravno proslijeđeni
Kupovina.propTypes = {
    korisnikId: PropTypes.number.isRequired,
    korpa: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            naziv: PropTypes.string.isRequired,
            kolicina: PropTypes.number.isRequired,
        })
    )
};

export default Kupovina;
 */
/* 
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Kupovina = ({ korpa = [] }) => {
    const [statusPoruka, setStatusPoruka] = useState('');
    const [korisnikId, setKorisnikId] = useState(null);

    // UseEffect to get korisnikId from localStorage when component mounts
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setKorisnikId(parseInt(storedUserId, 10)); // Convert to integer
        }
    }, []);

    // Function to handle purchase submission
    const zavrsiKupovinu = async () => {
        if (!korisnikId) {
            setStatusPoruka('Greška: Korisnik nije prijavljen.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/kupovina', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    korisnik_id: korisnikId,
                    proizvodi: korpa.map(proizvod => ({
                        proizvod_id: proizvod.id,
                        kolicina: proizvod.kolicina,
                    })),
                }),
            });

            if (response.ok) {
                setStatusPoruka('Kupovina uspješno pohranjena!');
            } else {
                setStatusPoruka('Greška pri pohranjivanju kupovine.');
                console.error('Greška pri pohranjivanju kupovine');
            }
        } catch (error) {
            setStatusPoruka('Došlo je do greške.');
            console.error('Greška:', error);
        }
    };

    return (
        <div>
            <h2>Korpa</h2>
            {korpa.length > 0 ? (
                <ul>
                    {korpa.map(proizvod => (
                        <li key={proizvod.id}>
                            {proizvod.naziv} - Količina: {proizvod.kolicina}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Korpa je prazna.</p>
            )}
            <button onClick={zavrsiKupovinu}>Završi kupovinu</button>
            {statusPoruka && <p>{statusPoruka}</p>}
        </div>
    );
};

// Define PropTypes to ensure `korpa` items have the correct structure
Kupovina.propTypes = {
    korpa: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            naziv: PropTypes.string.isRequired,
            kolicina: PropTypes.number.isRequired,
        })
    ),
};

export default Kupovina;
 */

/* 
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Kupovina = ({ korpa = [], setKorpa }) => {
    const [statusPoruka, setStatusPoruka] = useState('');
    const [korisnikId, setKorisnikId] = useState(null);

    // UseEffect to get korisnikId from localStorage when component mounts
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setKorisnikId(parseInt(storedUserId, 10)); // Convert to integer
        }
    }, []);

   
   const zavrsiKupovinu = async (korisnikId, korpa) => {
        try {
            const response = await fetch('http://localhost:5000/api/kupovina', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    korisnik_id: korisnikId,
                    proizvodi: korpa // Sends the correctly formatted items
                }),
            });
    
            if (response.ok) {
                console.log('Kupovina uspješno pohranjena');
            } else {
                console.error('Greška pri pohranjivanju kupovine');
            }
        } catch (error) {
            console.error('Greška:', error);
        }
    };
    

    return (
        <div>
            <h2>Korpa</h2>
            {korpa.length > 0 ? (
                <ul>
                    {korpa.map(proizvod => (
                        <li key={proizvod.id}>
                            {proizvod.naziv} - Količina: {proizvod.kolicina}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Korpa je prazna.</p>
            )}
            <button onClick={zavrsiKupovinu}>Završi kupovinu</button>
            {statusPoruka && <p>{statusPoruka}</p>}
        </div>
    );
};

// Define PropTypes to ensure `korpa` items have the correct structure
Kupovina.propTypes = {
    korpa: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            naziv: PropTypes.string.isRequired,
            kolicina: PropTypes.number.isRequired,
        })
    ),
    setKorpa: PropTypes.func.isRequired, // Add setKorpa as a required prop
};

export default Kupovina;
 */

import React, { useState } from 'react';
import PaymentComponent from './PaymentComponent';

const Kupovina = ({ korpa = [] }) => {
    const [showPayment, setShowPayment] = useState(false);

    const handlePurchase = () => {
        if (korpa.length > 0) {
            setShowPayment(true); // Show the payment form
        } else {
            console.log('Cart is empty');
        }
    };

    return (
        <div>
            <h2>Korpa</h2>
            {korpa.length > 0 ? (
                <ul>
                    {korpa.map(proizvod => (
                        <li key={proizvod.id}>
                            {proizvod.naziv} - Količina: {proizvod.kolicina}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Korpa je prazna.</p>
            )}
            <button onClick={handlePurchase}>Završi kupovinu</button>

            {showPayment && <PaymentComponent amount={5000} />} {/* Example amount */}
        </div>
    );
};

export default Kupovina;
