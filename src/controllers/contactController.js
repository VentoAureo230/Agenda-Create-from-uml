const { Contact, Address } = require('../models');
exports.addAddress = async (req, res) => {
    const address = new Address(req.body.value, req.body.pattern);
    if (!address.validate()) {
        return res.status(400).json({error: 'Invalid address'});
    } else {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({error: 'Contact not found'});
        }
        await createAddress({value: address.value,req: req});
        return res.status(201).json({message: 'Address added'});
    }
}
createAddress = async (address, req) => {
    const addresses = await Contact.findByPk(req.params.id).address;
    console.log(addresses);
}
