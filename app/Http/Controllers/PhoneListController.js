'use strict'

const Phone = use('App/Model/Phone')

class PhoneListController {
    * index(request, response) {
        
        const phones = yield Phone.all();

        yield response.sendView('phone-list', { phones : phones.toJSON() })
    }
}

module.exports = PhoneListController
