const Contentstack = require('contentstack');

const Stack = Contentstack.Stack({
  api_key: 'your_api_key',
  delivery_token: 'your_delivery_token',
  environment: 'your_environment',
});

// Function to fetch home page content
async function fetchHomePage() {
  const Query = Stack.ContentType('home_page').Query();
  return Query.toJSON().find().then(result => result[0]);
}

// Function to fetch About Us content
async function fetchAboutPage() {
  const Query = Stack.ContentType('about_us').Query();
  return Query.toJSON().find().then(result => result[0]);
}

// Function to fetch Services content
async function fetchServicesPage() {
  const Query = Stack.ContentType('services').Query();
  return Query.toJSON().find().then(result => result[0]);
}

module.exports = {
  fetchHomePage,
  fetchAboutPage,
  fetchServicesPage,
};
