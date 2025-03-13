const gpt4omini = {
  name: "gpt-4o-mini",
  temperature: 0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  max_token: 8000,
  cost_per_call: 60,
};

const gpt4ho = {
  name: "gpt-4o",
  temperature: 0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  max_token: 4000,
  cost_per_call: 10,
};

export const models = [gpt4omini, gpt4ho];

export const getModel = (name: string) => {
  for (const model of models) {
    if (model.name === name) {
      return model;
    }
  }
  return gpt4omini;
};
