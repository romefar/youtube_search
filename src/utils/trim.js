const trim = (string) => {
    if (string.length <= 2) return string.trim();

    let res = [];

    const arr = string.trim().split("");
    let prev = arr.shift();
    if (prev !== " ") res.push(prev);

    for (const item of arr) {
        if (prev !== " " || item !== " ")
            res.push(item);
        prev = item;
    }

    return res.join("");
}

export default trim;