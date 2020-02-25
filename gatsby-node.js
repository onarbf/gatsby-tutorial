const axios = require('axios');

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

// const getPokemonData = names =>
//   Promise.all(
//     names.map(async name => {
//       const { data: pokemon } = await get(`/pokemon/${name}`);
//       const abilities = await Promise.all(
//         pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
//           const { data: ability } = await get(`/ability/${abilityName}`);
//
//           return ability;
//         })
//       );
//
//       return { ...pokemon, abilities };
//     })
//   );

  const getPostData = async () => {

    return await axios.get('https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=1jBAuNiCoJSuXTuFxi1M8RYuO8J5Y_LCTDmfXjHeoVJE&sheet=posts')
    .then(async function (response) {
      // handle success
      console.log(response.data.posts);
      return await response.data.posts;
    })
    .catch(async function (error) {
      // handle error
      await console.log(error);
    })
  }

exports.createPages = async ({ actions: { createPage } }) => {
  // const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);
  var allPost = await getPostData()

  // Create a page that lists all Posts.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/all-post.js'),
    context: { allPost }
  });
};
