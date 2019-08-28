const clone = data => {
  let node;
  if (Array.isArray(data)) {
    node = data.length > 0 ? data.slice(0) : [];
    node.forEach((e, i) => {
      if ((typeof e === 'object' && e !== {}) || (Array.isArray(e) && e.length > 0)) {
        node[i] = clone(e);
      }
    });
  } else if (typeof data === 'object') {
    node = Object.assign({}, data);
    Object.keys(node).forEach(key => {
      if ((typeof node[key] === 'object' && node[key] !== {}) || (Array.isArray(node[key]) && node[key].length > 0)) {
        node[key] = clone(node[key]);
      }
    });
  } else {
    node = data;
  }
  return node;
};

export {clone};
