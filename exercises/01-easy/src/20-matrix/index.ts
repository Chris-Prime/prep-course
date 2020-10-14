/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  data: Array<Array<number>>;

  constructor(private matrix: string) {
    let rows: Array<Array<number>> = [];
    matrix.split("\n").forEach((value, key) => {
      rows[key] = [];
      value.split(' ').forEach(v => rows[key].push(+v));
    });

    this.data = rows;
  }

  get rows() {
    return this.data;
  }

  get columns() {
    let data: Array<Array<number>> = [];

    for(var x = 0; x < this.data.length; x++) {
      for(var y = 0; y < this.data[x].length; y++) {
        if(data[y] === undefined) data[y] = [];
        data[y][x] = this.data[x][y];
      }
    }

    return data;
  }
}

export { Matrix };
