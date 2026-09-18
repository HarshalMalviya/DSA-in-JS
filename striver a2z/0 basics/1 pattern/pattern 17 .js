function pattern17(N) {
    for (let i = 0; i < N; i++) {
        let row = "";

        // Spaces
        for (let j = 0; j < N - i - 1; j++) {
            row += " ";
        }

        // Increasing characters
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(65 + j);
        }

        // Decreasing characters
        for (let j = i - 1; j >= 0; j--) {
            row += String.fromCharCode(65 + j);
        }

        console.log(row);
    }
}

pattern17(5);