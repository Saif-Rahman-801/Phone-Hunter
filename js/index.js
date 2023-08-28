console.log("Hello World");
const loadPhone = async (searchField, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchField}`
  );
  const data = await res.json();
  //   console.log(data.data);
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  // step1 -> get the div
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  const showAllBtn = document.getElementById("show-all-container");

  if (phones.length > 12 && !isShowAll) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }
  phones.forEach((phone) => {
    // console.log(phone);
    // step 2 - Create a div
    const div = document.createElement("div");
    div.classList = `card p-4 rounded-sm bg-base-100 shadow-xl m-4`;
    div.innerHTML = `
    <figure><img src=${phone.image} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    // step 3 - append the div
    phoneContainer.appendChild(div);
  });
  toggleLoadingSpinner(false);
};

// Handle search
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field").value;
  loadPhone(searchField, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("spinner");
  loadingSpinner.classList.remove("hidden");
  if (isLoading) {
    console.log("showing");
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle showAll
const handleShowAll = () => {
  handleSearch(true);
};
// loadPhone();
