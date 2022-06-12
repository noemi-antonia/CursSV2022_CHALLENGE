class Player {
  constructor(id, action, board, isFirst, name) {
    this.id = id;
    this.action = action;
    this.nodesLeftToPlace = 9;
    this.error = '';
    this.board = board;
    this.isFirst = isFirst;
    this.selectedNode = null;
    this.name = (name) ? name : undefined;
    // undefined in the absence of a value to be able to use defaultProps on FE
  }

  changeAction(newAction) {
    this.action = newAction;
  }

  capturedNodes = () => this.isFirst ? 9 - this.board.secondTokens : 9 - this.board.firstTokens;

  toJson() {
    const json = {};
    json[this.id] = {
      action: this.action,
      nodesToPlace: this.nodesLeftToPlace,
      error: this.error,
      capturedNodes: this.capturedNodes(),
      isFirst: this.isFirst,
      name: this.name
    };
    
    return json;
  }

  is = id => this.id === id;

  placedNode() {
    this.nodesLeftToPlace--;
  }

  setError(newError) {
    this.error = newError;
  }
}

export default Player;