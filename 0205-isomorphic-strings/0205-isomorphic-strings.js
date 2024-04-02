/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
     if (s.length !== t.length) {
        return false;
    }

    const sToT = {};
    const tToS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (sToT[charS] !== undefined) {
            if (sToT[charS] !== charT) {
                return false;
            }
        } else {
            sToT[charS] = charT;
        }

        if (tToS[charT] !== undefined) {
            if (tToS[charT] !== charS) {
                return false;
            }
        } else {
            tToS[charT] = charS;
        }
    }

    return true;
};