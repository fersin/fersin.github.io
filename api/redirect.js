// api/redirect.js
export default function handler (req, res) {
  const target = "http://localhost:5000/ethiack_1337_lmao"; 

  res.writehead(302, { location: target });
  res.end();
}
