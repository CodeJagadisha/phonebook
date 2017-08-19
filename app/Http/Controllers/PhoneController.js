'use strict'

const Phone = use('App/Model/Phone')

class PhoneController {

  * create(request, response) {
    
    const ph = new Phone()
    const data = request.post();

    ph.phone = data.phone
    ph.mobile = data.mobile
    ph.name = data.name
    ph.surname  = data.surname
    
    yield ph.save();

    response.send(ph);

  }

}

module.exports = PhoneController
