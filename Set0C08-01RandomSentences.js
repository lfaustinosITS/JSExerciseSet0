function displayRandomSentence() {
    const sentences = [
      "Hello, world!",
      "This is a random sentence.",
      "Math is fun!",
      "Today is a beautiful day.",
      "Keep calm and do Math.",
      "How many programmers do you need to change a bulb?"
    ];
  
    setInterval(() => {
      let randomIndex = Math.floor(Math.random() * sentences.length);
      let randomSentence = sentences[randomIndex];
      console.log(randomSentence);
    }, 60000);
  }

  displayRandomSentence();