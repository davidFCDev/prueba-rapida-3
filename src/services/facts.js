const CAT_FACT_ENDPOINT_URL = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const res = await fetch(CAT_FACT_ENDPOINT_URL);
  const json = await res.json();
  const { fact } = json;
  return fact;
};
