export function solveSudoku(numbers){
    if (!checkIfCanBeSolved(numbers)){
        return null;
    }
    if (dfs(numbers)){
        return numbers;
    }
    return null;
}

function checkIfCanBeSolved(numbers){
    for (var x=0;x<9;x++){
        for (var y=0;y<9;y++){
            if (numbers[y][x] !== 0){
                if (!possible(numbers,x,y,numbers[y][x])){
                    return false;
                }
            }
        }
    }
    return true;
}

function dfs(numbers){
    for (var x=0;x<9;x++){
        for (var y=0;y<9;y++){
            if (numbers[y][x] === 0){
                for (var n=1;n<10;n++){
                    if (possible(numbers, x, y, n)){
                        numbers[y][x] = n;
                        if (!solveSudoku(numbers)){
                            numbers[y][x] = 0;
                        }
                        else {
                            return true;
                        }
                    }
                }
                return false;
            }
        }
    }
    
    return true;
}

function possible(numbers, x, y, num){
    for (var i = 0; i<9; i++){
        if (numbers[y][i]===num && i !== x){
            return false;
        }
    }
    for ( i = 0; i<9; i++){
        if (numbers[i][x]===num && i !== y){
            return false;
        }
    }
    const x0 = Math.floor(x/3) * 3;
    const y0 = Math.floor(y/3) * 3;
    for (i =0;i<3;i++){
        for (var j=0;j<3;j++){
            if (numbers[y0+i][x0+j] === num && !(y0+i ===y && x0+j === x)){
                return false;
            }
        }
    }
    return true;
}