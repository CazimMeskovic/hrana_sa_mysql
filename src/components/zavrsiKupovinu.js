/* // zavrsiKupovinu.js
export const zavrsiKupovinu = async (korisnikId, korpa) => {
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
            console.log('Kupovina uspješno pohranjena');
        } else {
            console.error('Greška pri pohranjivanju kupovine');
        }
    } catch (error) {
        console.error('Greška:', error);
    }
};
 */

export const zavrsiKupovinu = async (korisnikId, korpa) => {
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
            console.log('Kupovina uspješno pohranjena');
        } else {
            console.error('Greška pri pohranjivanju kupovine');
        }
    } catch (error) {
        console.error('Greška:', error);
    }
};
