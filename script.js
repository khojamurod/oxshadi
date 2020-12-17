/* alert('Uyqingiz kelmayabdimi?')
alert('Qoylarni sanimzmi?') */
let x = +prompt('Neshta')

let line=''

for(let i=0;i<x;i++){

    for(let j=0;j<x;j++){

        if( i==j || i==0 || j==0 || j==x-1 ||i== x-1){
            line+='[0]'
        }else{
            line+='   '
        }

    }

    console.log(line);
    line=''
}








// i +'qoylar'... + i +'qoylar' ....