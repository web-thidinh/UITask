export const getProducts = async () => {
    try {
      const response = await fetch(
        'https://hesse-core-staging.herokuapp.com/api/products?sort%5B0%5D=sortSuggested,name&populate=mainImage,variants,variants.size,subscriptionType'
      );
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error);
    }
  };