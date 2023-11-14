function CipherVigenere(inputKey, alphabet) {
    this.inputKey = inputKey;
    this.alphabet = alphabet.split('');

    this.generateKey = function (inputStr) {
      let index = 0;
      let generatedKey = '';
      while(generatedKey.length < inputStr.length) {
        generatedKey += this.inputKey[index];
        index++;
        if(index > this.inputKey.length - 1) {
          index = 0;
        }
      }
      return generatedKey.split('');
    }

    this.encrypt = function (inputStr) {
      let generatedKey = this.generateKey(inputStr);
      let encryptedStr = inputStr.split('').map( (char, i) => {
        let charIndex = this.alphabet.indexOf(char);
        let shiftIndex = this.alphabet.indexOf(generatedKey[i]);
        if(charIndex === -1) {
          return char;
        }
        if(charIndex + shiftIndex > this.alphabet.length - 1) {
          let newIndex = charIndex + shiftIndex - this.alphabet.length;
          return this.alphabet[newIndex];
        } else {
          let newIndex = charIndex + shiftIndex;
          return this.alphabet[newIndex];
        }
      })
      return encryptedStr.join('');
    };

    this.decrypt = function (inputStr) {
      let generatedKey = this.generateKey(inputStr);
      let decryptedStr = inputStr.split('').map( (char, i) => {
        let charIndex = this.alphabet.indexOf(char);
        let shiftIndex = this.alphabet.indexOf(generatedKey[i]);
        if(charIndex === -1) {
          return char;
        }
        if(charIndex - shiftIndex < 0) {
          let newIndex =  charIndex - shiftIndex + this.alphabet.length;
          let decoded = this.alphabet[newIndex];
          return decoded;
        } else {
          let newIndex = charIndex - shiftIndex;
          return this.alphabet[newIndex];
        }
      })
      return decryptedStr.join('');
    };
  }
