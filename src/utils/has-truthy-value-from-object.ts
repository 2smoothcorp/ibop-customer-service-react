/**
 *  Utilities - Has Truthy Value in Object
 */

export const hasTruthyValueFromObject = (obj: { [key: string]: any }) => {
  return Object.values(obj).some(value => !!value);
}