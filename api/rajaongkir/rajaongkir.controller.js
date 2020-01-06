const {cekCost, mootaProfile} = require("./rajaongkir.service");

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
    mootaProfile: (req, res) => {
        mootaProfile((err, body)=>{
            //console.log('asssuu');
            return res.status(200).json({
                body: body.body,
                AASSSUUUUUU:'asas'
            })
        })
    }
}