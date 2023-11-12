const arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Marilyn Monroe', 
     'quote': 'I\'am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
    {'author': 'Andre Gide, Autumn Leaves', 
     'quote': 'It is better to be hated for what you are than to be loved for what you are not'
    },
    {'author': 'Mark Twain', 
     'quote': 'Good friends, good books, and a sleepy conscience: this is the ideal life.'
    },
    {'author': 'Dr. Seuss', 
     'quote': 'Sometimes the questions are complicated and the answers are simple.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}


