export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const helperArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, helperArray, animations);
  return animations;
}

function mergeSortHelper(theArray, start, end, helperArray, animations) {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  mergeSortHelper(helperArray, start, middle, theArray, animations);
  mergeSortHelper(helperArray, middle + 1, end, theArray, animations);
  mergeSort(theArray, start, middle, end, helperArray, animations);
}

function mergeSort(theArray, start, middle, end, helperArray, animations) {
  let k = start;
  let i = start;
  let j = middle + 1;
  while (i <= middle && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (helperArray[i] <= helperArray[j]) {
      animations.push([k, helperArray[i]]);
      theArray[k++] = helperArray[i++];
    } else {
      animations.push([k, helperArray[j]]);
      theArray[k++] = helperArray[j++];
    }
  }

  while (i <= middle) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, helperArray[i]]);
    theArray[k++] = helperArray[i++];
  }

  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, helperArray[j]]);
    theArray[k++] = helperArray[j++];
  }
}
