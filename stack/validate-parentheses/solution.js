function isValid(s) {
    const REGEX = /^\([^()]*$|^[^()]*\)$|\([^()]*\)/;

    return REGEX.test(s);
}