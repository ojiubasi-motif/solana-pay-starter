import products from "./products.json"

export default function handler(req, res) {
  // If get request
  if (req.method === "GET") {
    // Create a copy of products without the hashes and filenames
    const productsNoHashes = products.map((product) => {

      const { hash, filename, ...rest } = product;
      return rest;
    });
    console.log(productsNoHashes);
    res.status(200).json(productsNoHashes);  
  }
  else {
    res.status(405).send(`Method ${req.method} not allowed`);
  }
}
// export const fetchItem = async (itemID) => {
//   const response = await fetch("../api/fetchItem", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ itemID }),
//   });
//   const item = await response.json();
//   return item;
// }