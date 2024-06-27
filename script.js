1.Solving problems using array functions on rest countries data 

 a.Get all the countries from Asia continent /region using Filter method

 // Sample array of country objects
const countries = [
    { name: 'India', region: 'Asia' },
    { name: 'Germany', region: 'Europe' },
    { name: 'Japan', region: 'Asia' },
    { name: 'Brazil', region: 'Americas' },
    { name: 'China', region: 'Asia' },
    { name: 'Canada', region: 'Americas' },
  ];
  
  // Filter countries from Asia
  const asianCountries = countries.filter(country => country.region === 'Asia');
  
  console.log(asianCountries);
  
  b.Get all the countries with a population of less than 2 lakhs using Filter method

  const countries = [
    { name: 'Country1', population: 150000 },
    { name: 'Country2', population: 500000 },
    { name: 'Country3', population: 100000 },
    // Add more country objects as needed
];

const countriesWithLessThanTwoLakhsPopulation = countries.filter(country => country.population < 200000);

console.log(countriesWithLessThanTwoLakhsPopulation);

c.Print the following details name, capital, flag, using forEach method

// Assuming you have an array of country objects like this
const countries = [
    { name: 'Country1', capital: 'Capital1', flag: 'Flag1.jpg' },
    { name: 'Country2', capital: 'Capital2', flag: 'Flag2.jpg' },
    // Add more countries as needed
  ];
  
  // Using forEach to print details
  countries.forEach(country => {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Flag: ${country.flag}`);
    console.log(''); // Adding a blank line for separation
  });

  d.Print the total population of countries using reduce method

  // Sample array of country objects with population data
const countries = [
    { name: 'India', population: 1380000000 },
    { name: 'China', population: 1440000000 },
    { name: 'United States', population: 331000000 },
    { name: 'Indonesia', population: 273000000 },
    // Add more country objects as needed
  ];
  
  // Calculate total population using reduce method
  const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
  
  console.log('Total population of countries:', totalPopulation);

  e.Print the country that uses US dollars as currency.

  // Step 1: Fetch the REST Countries data
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  printCountriesUsingUSD(data);
})
.catch(error => console.error('Error fetching countries data:', error));

// Step 2: Find countries that use US dollars as currency
function printCountriesUsingUSD(countries) {
const countriesUsingUSD = countries.filter(country => {
  return country.currencies && Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
});

// Print the names of the countries that use USD
console.log('Countries using USD:', countriesUsingUSD.map(country => country.name.common));
}
