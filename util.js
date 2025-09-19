class util {
  static random(start, end) {

    let length = Math.abs(end - start);

    return Math.round(Math.random() * length) + Math.min(start, end);
  }

  static square(num) {
    return num * num;
  }

  static cube(num) {
    return num * myMath.square(num);
  }

  static pow(num, power) {
    if (power > 1) {
      return num * myMath.pow(num, power - 1);
    } return num;
  }

  static powten(num) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(myMath.pow(num, i));
    } return arr;
  }

  static avg(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total / arr.length;
  }

  static table(num) {
    let ans = [];
    for (let i = 1; i < 11; i++) {
      ans.push(i * num);
    }
    return ans;
  }

  static factorial(num) {
    if (num > 1) {
      return num * myMath.factorial(num - 1);
    } return 1;
  }

  static swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
  }

  static lerp(start, end, t) {
    return start + (end - start) * t;
  }

  static sort(arr) {
    // console.log(arr);
    let total = 0;
    let successfulRuns = 0;

    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          arr = myMath.swap(arr, i, i + 1);
          successfulRuns++;
        }
        total++;
        // console.log(`loop: ${j}, a: ${i}, b: ${i + 1}`);
        // console.log(arr);
      }
    }
    // console.log(`totalruns: ${total}, successfulRuns: ${successfulRuns}, faild: ${total - successfulRuns}`);
    return {
      'sortedArr': arr,
      'total': total,
      'successful': successfulRuns,
      'faild': total - successfulRuns,
      'successPer': (successfulRuns / total) * 100,
      'faildPer': ((total - successfulRuns) / total) * 100
    }
  }

  static ranArray(length, start, end) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(myMath.random(start, end));
    }
    return arr;
  }

  static multiple() {
    let totalFailed = 0;
    let totalPass = 0;
    let totalLenght = 0;
    let num = 1000;

    for (let i = 0; i < num; i++) {
      let lenght = myMath.random(10, 1000);
      let start = myMath.random(-1000, 1000);
      let end = myMath.random(-1000, 1000);

      let newArr = myMath.ranArray(lenght, start, end);
      let sortData = myMath.sort(newArr);

      totalFailed += sortData.faildPer;
      totalPass += sortData.successPer;
      totalLenght += lenght;

      // console.log(totalFailed/(i + 1), totalPass/(i + 1), totalLenght/(i + 1));
    }

    return [(totalPass / num), (totalFailed / num), (totalLenght / num)];
  }

  static setPageColor(color) {
    let colstr = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    document.getElementsByTagName('body')[0].style.backgroundColor = colstr; 
  }

  static colLerp(col1, col2, t) {
    let r = util.lerp(col1[0], col2[0], t);
    let g = util.lerp(col1[1], col2[1], t); 
    let b = util.lerp(col1[2], col2[2], t);

    let newCol = [r, g, b];

    return newCol;
  }

  static bgColFade(col1, col2) {
    let t = 0;
    const interval = window.setInterval(() => {
      util.setPageColor(util.colLerp(col1, col2, t));
      t += 0.001;

      if (t > 1) {
        clearInterval(interval);
      }
    }, 20);
  }
}