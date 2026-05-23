// api/remove-bg.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // Base64 string se header saaf karna
    const cleanBase64 = image.split(',')[1];

    // remove.bg ki required urlencoded form data body taiyar karna
    const formData = new URLSearchParams();
    formData.append('image_file_b64', cleanBase64);
    formData.append('size', 'auto'); 

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-API-Key': 'nj5wergqe2vKF4kjdhq9XAND', // Aapki bheji hui API Key
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: `API Error: ${errorText}` });
    }

    const arrayBuffer = await response.arrayBuffer();
    const outputBuffer = Buffer.from(arrayBuffer);
    const outputBase64 = outputBuffer.toString('base64');

    res.status(200).json({ result: `data:image/png;base64,${outputBase64}` });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
