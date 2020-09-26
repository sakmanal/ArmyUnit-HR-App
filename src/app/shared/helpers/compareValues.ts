export function compareValues(key: string, order = 'ascending', mapObj?: { [key: string]: number }) {
  return (a: object, b: object) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    let varA, varB;
    if (mapObj){
       varA = mapObj[a[key].toString()];
       varB = mapObj[b[key].toString()];
    }else{
       varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
       varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    }

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'descending') ? (comparison * -1) : comparison
    );
  };
}
