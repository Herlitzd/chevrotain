// ----------------- wrapping it all together -----------------
function chevrotainParseWithChevrotainLexer(text) {

    var fullResult = {};
    var lexResult = ChevJsonLexer.tokenize(text);

    if (lexResult.errors.length > 0) {
        throw "Errors when lexing with Chevrotain lexer + parser"
    }

    var parser = new ChevrotainJsonParser(lexResult.tokens);
    parser.json();

    fullResult.tokens = lexResult.tokens;
    fullResult.parseErrors = parser.errors;

    if (parser.errors.length > 0) {
        throw "Errors when parsing with Chevrotain lexer + parser"
    }

    return fullResult;
}

// ----------------- wrapping it all together -----------------
function chevrotainParseWithHandBuiltLexer(text) {
    var fullResult = {};
    var lexResult = handBuiltLexer.lex(text);

    var parser = new ChevrotainJsonParser(lexResult.tokens);
    parser.object();

    fullResult.tokens = lexResult.tokens;
    fullResult.parseErrors = parser.errors;

    if (parser.errors.length > 0) {
        throw "Errors when parsing with Chevrotain and hand built lexer"
    }

    return fullResult;
}