const TokenPlayer2 =
  "data:img/png;base64,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";

export default TokenPlayer2;