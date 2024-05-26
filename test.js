function multiplicativeCongruence() {
    // Parámetros del generador
    const g = 31;
    const a = 48271;
    const m = Math.pow(2, g) - 1;
    let local_seed = Date.now() % m; // Inicializamos la semilla con el tiempo actual
  
    // Función generadora de números pseudoaleatorios
    return function() {
      local_seed = (a * local_seed) % m;
      return local_seed / m;
    };
  }
  
  // Ejemplo de uso
  const randomGenerator = multiplicativeCongruence();
  console.log(randomGenerator()); // Imprime un número pseudoaleatorio en el rango [0, 1)
  console.log(randomGenerator()); // Imprime otro número pseudoaleatorio en el rango [0, 1)
  