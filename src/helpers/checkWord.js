import Swal from 'sweetalert2'
export const checkWord = (state, final, dfa, word) => {


    const wordArray = word.split('');
    for (let i = 0; i < word.length; i++) {
        if (wordArray[i] in dfa[state]) {
            state = dfa[i][wordArray[i]]
        }
        else {
            break;
        }
    }
    if (final.includes(state)){

     Swal.fire({
        title: 'Valid word',
        text: `word: ${word}`,
        icon: 'success',
       
        
      })}
    else{
        Swal.fire({
            title: 'Invalid word',
            text: `word: ${word}`,
            icon: 'error',
            
          })}
    } 

