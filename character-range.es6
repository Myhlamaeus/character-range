export default function characterRange(a, b) {
    a = String(a);
    b = String(b);

    if(!a || !b || a.length !== 1 || b.length !== 1) {
        throw new TypeError("characterRange accepts only strings of length 1");
    }

    const aCode = a.charCodeAt(0),
        bCode = b.charCodeAt(0),
        range = [];

    for(var code = aCode; code <= bCode; ++code) {
        range.push(String.fromCharCode(code));
    }

    return range;
};
