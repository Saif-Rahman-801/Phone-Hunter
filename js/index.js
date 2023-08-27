console.log("Hello World");
const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  //   console.log(data.data);
  const phones = data.data;
  displayPhones(phones);
};
loadPhone();
const displayPhones = (phones) => {
  // step1 -> get the div
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    // step 2 - Create a div
    const div = document.createElement("div");
    div.classList = `card w-96 bg-base-100 shadow-xl`;
    div.innerHTML = `
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    // step 3 - append the div
    phoneContainer.appendChild(div);
  });
};
