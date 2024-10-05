const parseEnv = () => {
  const prefix = 'RSS_';
  const envVariables = process.env;
  const result = [];

  for (const [key, value] of Object.entries(envVariables)) {
    if (key.startsWith(prefix)) {
      result.push(`${key}=${value}`);
    }
  }

  if (result.length) {
    console.log(result.join('; '));
  }
};

parseEnv();
