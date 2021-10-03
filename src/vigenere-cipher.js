import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 export default class VigenereCipheringMachine {
  constructor(direct = null) {
      this.direct = direct;
      this.baseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    }

  encrypt(message, key) {
      if (!message || !key) throw new Error(`Incorrect arguments!`);
      let newMessage='';
      let tempBase;
      let index, newIndex;
      while (key.length<message.length) key+=key;
      key=key.split('')
      for (let i=0; i<message.length; i++){
          index = this.baseArr.indexOf(key[i].toUpperCase(), 0);
          tempBase = [].concat(this.baseArr.slice(index, this.baseArr.length), this.baseArr.slice(0, index))
          newIndex = this.baseArr.indexOf(message[i].toUpperCase(), 0);
          if (newIndex===-1) {
              key=[].concat(key.slice(0,i), [' '], key.slice(i,key.length))
              newMessage += message[i] }
              else newMessage += tempBase[newIndex];
      }
      if (this.direct===false) newMessage = newMessage.split('').reverse().join('');
      return newMessage
  }
  decrypt(message, key) {
      if (!message || !key) throw new Error(`Incorrect arguments!`);
      let newMessage='';
      let tempBase;
      let index, newIndex;
      while (key.length<message.length) key+=key;
      key=key.split('')
      for (let i=0; i<message.length; i++){
          index = this.baseArr.indexOf(key[i].toUpperCase(), 0);
          tempBase = [].concat(this.baseArr.slice(index, this.baseArr.length), this.baseArr.slice(0, index))
          newIndex = tempBase.indexOf(message[i].toUpperCase(), 0);
          if (newIndex===-1) {
              key=[].concat(key.slice(0,i), [' '], key.slice(i,key.length))
              newMessage += message[i]} 
              else newMessage += this.baseArr[newIndex];
      }
      if (this.direct===false) newMessage = newMessage.split('').reverse().join('');
      return newMessage
  }
}
