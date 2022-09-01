export default {
  methods: {
    converter(nominal) {
      const currency = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      })
      return currency.format(nominal).slice(3)
    },
  },
}
