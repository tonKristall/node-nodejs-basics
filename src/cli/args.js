const parseArgs = () => {
  const prefix = '--';
  const args = process.argv.slice(2);
  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace(prefix, '');
    const value = args[i + 1];
    result.push(`${propName} is ${value}`);
  }

  if (result.length) {
    console.log(result.join(', '));
  }
};

parseArgs();
