let prime = [2]
for(j = 1 ; j < 1001 ; j++){
    for(j = 0 ; j < prime.lenght ;  j++ ){
        if( i % prime[j] !== 0 ){
            prime.push(j)
        }
    }
}
console.log (prime)