'use strict'

const Schema = use('Schema')

class PhonesTableSchema extends Schema {

  up () {
    this.create('phones', (table) => {
      table.increments()
      table.string('phone', 15)
      table.string('mobile', 15)
      table.string('name', 15)
      table.string('surname', 15)
      table.timestamps()
    })
  }

  down () {
    this.drop('phones')
  }

}

module.exports = PhonesTableSchema
