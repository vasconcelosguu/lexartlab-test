/* eslint-disable @typescript-eslint/no-explicit-any */

const normalizeObject = (obj: any): any => {
  if ('details' in obj) {
    const { details , ...itens} = obj;
    return {
      ...itens,
      ...details  
    };
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }

    if (typeof value === "object") {
      return { ...acc, [key]: Array.isArray(value) ? normalizeArray(value) : normalizeObject(value) };
    }
    return { ...acc, [key]: value };
  }, {});
};

const normalizeArray = (arr: any[]): any[] => {
  return arr.flatMap((item: any) => {
    if ('data' in item) {
      return item.data.map((dataItem: any) => ({
        name: item.name,
        brand: item.brand,
        model: item.model,
        price: dataItem.price,
        color: dataItem.color
      }));
    }

    return normalizeObject(item);
  });
};

const normalize = (obj: any): any => {
  return Array.isArray(obj) ? normalizeArray(obj) : normalizeObject(obj);
};

export default normalize;
