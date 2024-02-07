class CellHighlighter {
  constructor(cellsSelector) {
    this.cells = document.querySelectorAll(cellsSelector);
    this.attachEvents();
  }

  attachEvents() {
    this.cells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => this.highlightCell(cell));
      cell.addEventListener("mouseleave", () => this.resetHighlight());
    });
  }

  highlightCell(selectedCell) {
    this.cells.forEach((cell) => {
      if (cell !== selectedCell) {
        cell.style.opacity = "0.5";
      }
    });
  }

  resetHighlight() {
    this.cells.forEach((cell) => {
      cell.style.opacity = "1";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CellHighlighter(".cell");
});
