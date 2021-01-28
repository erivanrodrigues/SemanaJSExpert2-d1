// Tudo que é util para as outras class
class Util {
    static #defaultFormart = Intl.NumberFormat('pt-br',{
        currency: 'BRL',
        style: 'currency',
    })
    static formatCurrency(value){
        return this.#defaultFormart.format(value)
    }

    static unFormatCurrency(value){
        //R$ 1000,10 - 1000,10
        return Number(value.replace(/\D/g, ''))/100
    }
}
module.exports = Util