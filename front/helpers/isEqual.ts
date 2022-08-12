const isEqual = <T extends any[] | { [x: string]: any } = any[]>(value: T, other: T) => {
  // Get the value type
  const valueIsArray = Array.isArray(value);
  const valueIsObject = typeof value === "object";
  const otherIsArray = Array.isArray(other);
  const otherIsObject = typeof other === "object";

  // If items are not an object or array, return false
  if (!valueIsObject) return false;
  // If the two objects are not the same type, return false
  if (valueIsArray !== otherIsArray || valueIsObject !== otherIsObject) return false;

  // Compare the length of the two items
  let valueLen = valueIsArray ? value.length : Object.keys(value).length;
  let otherLen = otherIsArray ? value.length : Object.keys(other).length;

  if (valueLen !== otherLen) return false;

  // Compare two items
  const compare = (item1: any, item2: any) => {
    // Get the object type
    // let itemType = Object.prototype.toString.call(item1);
    const item1IsArray = Array.isArray(item1);
    const item1IsObject = typeof item1 === "object";
    const item2IsArray = Array.isArray(item2);
    const item2IsObject = typeof item2 === "object";

    // If an object or array, compare recursively
    if (item1IsObject && item2IsObject) {
      if (!isEqual(item1, item2)) return false;
    }
    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (item1IsArray !== item2IsArray || item1IsObject !== item2IsObject) return false;
      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (item1 !== item2) return false;
    }
  };
  // Compare properties
  if (valueIsArray) {
    for (let i = 0; i < valueLen; i++) {
      if (!compare(value[i], value[i])) return false;
    }
  } else {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        if (!compare(value[key], other[key])) return false;
      }
    }
  }
  // If nothing failed, return true
  return true;
};

export default isEqual;
