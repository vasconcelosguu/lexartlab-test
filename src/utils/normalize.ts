/* eslint-disable @typescript-eslint/no-explicit-any */

const normalizeObject = (obj: any, email: string): any => {
  obj.email = email;

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
      return { ...acc, [key]: Array.isArray(value) ? normalizeArray(value, email) : normalizeObject(value, email) };
    }
    return { ...acc, [key]: value };
  }, {});
};

const normalizeArray = (arr: any[], email: string): any[] => {
  return arr.flatMap((item: any) => {
    if ('data' in item) {
      return item.data.map((dataItem: any) => ({
        name: item.name,
        brand: item.brand,
        model: item.model,
        price: dataItem.price,
        color: dataItem.color,
        user: email
      }));
    }

    return normalizeObject(item, email);
  });
};

const normalize = (obj: any, email: string): any => {
  return Array.isArray(obj) ? normalizeArray(obj, email) : normalizeObject(obj, email);
};

export default normalize;