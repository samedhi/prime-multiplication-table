An app that prints out a basic multiplication table of the first
N prime numbers.


I am primarily a Clojurescript programmer, so some parts of this may be
a bit unorthodox. I make heavy use of Immutable.js as it allows me to
write code in a fashion that is more familiar to me. 


There are two methods exported. Both are in main.js.

primeLazySeq - generates an infinite sequence of prime numbers

multiplicationTable - takes an infinite sequence and generates a table from it


From a Complexity and Computability perspective. I think that this should have
constant memory usage as long as you do sequence processing that does not hold
onto the head of the generated sequence of primes. For generating the tables
though, I do hold onto the head. It is not a great deal of memory, and my
intuition is that you will much sooner run out of processing than you will
run out of memory for prime generation.

The prime algorithm itself is inspired by the sieve of Eratosthenes, but has
been converted to be lazy. Per primality test, it misses the optimization to
have an even step size on odd integers and to not test against numbers that
have are factors of previously tested numbers. Both of these optimzations
seemed to result in slower code anyway.

tldr; You should use a real prime generator if you need performance. You can
generate primes much faster if you give yourself unbounded memory.




COMMANDS: (Run `npm install` to locally install all the below commands)


USAGE: `npm run print-table N`, where N defaults to 10

EXAMPLE:
```
prime-multiplication-table$ npm run print-table 15

> prime-multiplication-table@0.1.0 print-table /home/stephen/work/prime-multiplication-table
> node ./src/table.js "15"

A multiplication table of the first 15 primes

X   2   3    5    7    11   13   17   19   23    29    31    37    41    43    47
2   4   6    10   14   22   26   34   38   46    58    62    74    82    86    94
3   6   9    15   21   33   39   51   57   69    87    93    111   123   129   141
5   10  15   25   35   55   65   85   95   115   145   155   185   205   215   235
7   14  21   35   49   77   91   119  133  161   203   217   259   287   301   329
11  22  33   55   77   121  143  187  209  253   319   341   407   451   473   517
13  26  39   65   91   143  169  221  247  299   377   403   481   533   559   611
17  34  51   85   119  187  221  289  323  391   493   527   629   697   731   799
19  38  57   95   133  209  247  323  361  437   551   589   703   779   817   893
23  46  69   115  161  253  299  391  437  529   667   713   851   943   989   1081
29  58  87   145  203  319  377  493  551  667   841   899   1073  1189  1247  1363
31  62  93   155  217  341  403  527  589  713   899   961   1147  1271  1333  1457
37  74  111  185  259  407  481  629  703  851   1073  1147  1369  1517  1591  1739
41  82  123  205  287  451  533  697  779  943   1189  1271  1517  1681  1763  1927
43  86  129  215  301  473  559  731  817  989   1247  1333  1591  1763  1849  2021
47  94  141  235  329  517  611  799  893  1081  1363  1457  1739  1927  2021  2209
```


DEVELOPMENT: I run three commands

`npm run watchify-test` -- keeps rebuilding main.js and test.js into bundled-test.js

`npm test` -- Starts the Karma test runner

`npm start` -- Starts the development server at port 6060, so I can inspect myself
