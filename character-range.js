export default function characterRange(a, b) {
    a = String(a);
    b = String(b);

    if(!a || !b || a.length !== 1 || b.length !== 1) {
        throw new TypeError("characterRange accepts only strings of length 1");
    }

    const aCodePoint = a.codePointAt(0),
        bCodePoint = b.codePointAt(0),
        range = [];

    for(let codePoint = aCodePoint; codePoint <= bCodePoint; ++codePoint) {
        range.push(String.fromCodePoint(codePoint));
    }

    return range;
}
