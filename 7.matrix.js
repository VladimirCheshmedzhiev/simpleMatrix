function matrix(number) {

    function rowGenerator() {
        let row = '';
        for (let index = 0; index < number; index++) {
            row += `${number} `
        }
        return (row);
    }
    for (let i = 0; i < number; i++) {
        console.log(rowGenerator())

    }
}
matrix(3)