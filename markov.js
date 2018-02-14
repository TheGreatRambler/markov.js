/*
*
*
* ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗ ██████╗ ██╗   ██╗       ██╗███████╗
* ████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝██╔═══██╗██║   ██║       ██║██╔════╝
* ██╔████╔██║███████║██████╔╝█████╔╝ ██║   ██║██║   ██║       ██║███████╗
* ██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗ ██║   ██║╚██╗ ██╔╝  ██   ██║╚════██║
* ██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗╚██████╔╝ ╚████╔╝██╗╚█████╔╝███████║
* ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═══╝ ╚═╝ ╚════╝ ╚══════╝
* @Src TheGreatRambler https://github.com/TheGreatRambler/markov.js
* MIT License
*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Markov = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    function isArrayLike(item) {
        return (Array.isArray(item) || (!!item && typeof item === "object" && typeof (item.length) === "number" && (item.length === 0 || (item.length > 0 && (item.length - 1) in item))));
    }
    var Markov = function(data) {
        this.data = data;
        this.createCorpus();
    };
    Markov.prototype.createCorpus = function() {
        var musicarray;
        var corpus = {};
        this.data.regularity = this.data.regularity || 1;

        if (Object.prototype.toString.call(this.data.input) === "[object String]") {
            musicarray = this.data.input.split(typeof this.data.delimiter !== "undefined" ? this.data.delimiter : " ");
        } else if (isArrayLike(this.data.input)) {
            if (Object.prototype.toString.call(this.data.input[0]) === "[object String]") {
                musicarray = this.data.input;
            } else {
                console.warn("Data elements must be strings!");
            }
        } else {
            console.warn("Data must be an array or string!");
        }

        musiclength = musicarray.length;
        for (var f = this.data.regularity; f < musiclength; f++) {
            var element = musicarray[f];
            if (element) {
                var key = [];
                for (var g = 0; g < this.data.regularity; g++) {
                    var currentelement = musicarray[f - this.data.regularity + g];
                    key.push(currentelement);
                }

                if (typeof corpus[key.join(" ")] === "undefined") {
                    corpus[key.join(" ")] = [element];
                } else {
                    corpus[key.join(" ")].push(element);
                }
            }
        }

        this.musicarray = musicarray;

        this.corpus = corpus;
    };
    Markov.prototype.generate = function(length) {
        var keys = Object.keys(this.corpus);
        var firstelement = keys[~~(keys.length * Math.random())];
        var string = firstelement.split(" ");
        var length = length || 1000;
        for (var g = 0; g < length; g++) {
            var previouselements = [];
            for (var f = 0; f < this.data.regularity; f++) {
                previouselements.push(string[g + f]);
            }
            var possibilities = this.corpus[previouselements.join(" ")];
            if (!possibilities) {
                return string.join(" ");
            }
            string.push(possibilities[~~(possibilities.length * Math.random())]);
            if (!possibilities[~~(possibilities.length * Math.random())]) {
                console.log(possibilities);
            }
        }
        return string.join(" ");
    };
    return Markov;
}));
