const dotenv = require('dotenv')
dotenv.config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 })
    const products = response.records.map((product) => {
      const { id, fields } = product
      const { name, featured, price, description,img, countInStock } = fields

      // Create an array of image objects
      const productImg = Array.isArray(img)
        ? img.map((image) => ({ url: image.url }))
        : [{ url: img }]

      return {
        id,
        name,
        featured,
        price,
        description,
        img: productImg,
        countInStock,
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'there was an error',
    }
  }
}
