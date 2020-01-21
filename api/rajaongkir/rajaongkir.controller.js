const {cekCost, mootaProfile} = require("./rajaongkir.service");
const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyCDBk7broCXK-8iOq8QYJc0gAErMJISjYg",
    authDomain: "urlmyid.firebaseapp.com",
    databaseURL: "https://urlmyid.firebaseio.com",
    projectId: "urlmyid",
    storageBucket: "urlmyid.appspot.com",
    messagingSenderId: "1092449157882",
    appId: "1:1092449157882:web:6679b396004c3aed5c7f43",
    measurementId: "G-DRRH036Y98"
};
let fire = firebase.initializeApp(firebaseConfig);
let db = fire.firestore();



module.exports = {
    cekCost: (req, res) => {
        //memasukkan data dari request lain
        let isi = req.body;
        cekCost(isi, (err, body)=>{
            return res.status(200).json({
                body: body.body.rajaongkir
            });
        })
    },

    pushMoota: (req, res) => {
        let myMootaPush={
            amount: req.body.amount,
            description: req.body.description
        };
        let allData= [];
            db.collection('orders').where('verif', '==', myMootaPush.description).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    //console.log('No city matching documents.');
                    res.send(allData)
                    return;
                } 
                snapshot.forEach(doc => {
                    if (Number(myMootaPush.amount)===doc.data().gross && myMootaPush.description===doc.data().verif){
                        allData.push(doc.data());
                        db.collection('orders').doc(doc.id)
                        .update({ paystatus: 'Paid' })
                        .then(() => {
                            //console.log('Update pembayaran berhasil');
                            res.send(allData);
                        }).catch(err => {
                            res.send(allData);
                            //console.log('Error update payment status: ', err);
                        })
                        return;
                    } else {
                        //console.log('ELSE GAGAL');
                        res.send(allData);
                        return;
                    }
                });
            }).catch(err => {
                //console.log('Error getting documents', err);
                res.send(allData)
                return;
            })
    },



    mootaProfile: (req, res) => {
        mootaProfile((err, body)=>{
            //console.log('asssuu');
            return res.status(200).json({
                body: body.body
            })
        })
    }
}