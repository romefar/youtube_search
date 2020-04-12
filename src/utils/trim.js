const trim = (str) => {
    if (str.length <= 2) return str.trim();

    let res = [];

    const arr = str.trim().split("");
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