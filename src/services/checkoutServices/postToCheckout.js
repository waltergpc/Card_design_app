import axios from 'axios'

export const postToCheckout = async (cartInfo, pdf) => {
	try {
		const pdfFormData = new FormData()

		pdfFormData.append('file', pdf)
		pdfFormData.append('upload_preset', 'la7rajqh')

		const { data } = await axios.post(
			`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/upload`,
			pdfFormData
		)

		console.log(data)

		const { url } = data

		const { data: data2 } = await axios.post(
			'/.netlify/functions/createCheckoutSession',
			{
				url,
				cartInfo
			}
		)
		window.open(data2, '_blank')
		return data2
	} catch (error) {
		console.log(error)
	}
}
