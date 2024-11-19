function startLyrics(){
    let lyrics="";
    for (let i = 99; i >= 0; i--) {
        if (i > 2) {
            lyrics += `${i} bottles of beer on the wall,<br>`;
            lyrics += `${i} bottles of beer!<br>`;
            lyrics += `Take one down,<br>`;
            lyrics += `Pass it around,<br>`;
            lyrics += `${i - 1} bottles of beer on the wall!<br><br>`;
        } else if (i === 2) {
            lyrics += `${i} bottles of beer on the wall,<br>`;
            lyrics += `${i} bottles of beer!<br>`;
            lyrics += `Take one down,<br>`;
            lyrics += `Pass it around,<br>`;
            lyrics += `${i - 1} bottle of beer on the wall!<br><br>`;
        } else if (i === 1) {
            lyrics += `${i} bottle of beer on the wall,<br>`;
            lyrics += `${i} bottle of beer!<br>`;
            lyrics += `Take one down,<br>`;
            lyrics += `Pass it around,<br>`;
            lyrics += `No more bottles of beer on the wall!<br><br>`;
        }
    }
document.getElementById("lyrics-container").innerHTML = lyrics;

}
