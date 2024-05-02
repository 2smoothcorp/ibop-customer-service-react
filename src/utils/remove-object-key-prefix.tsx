/**
 *  Utilities - Remove Object Key Prefix
 */

export const removeObjectKeyPrefix = ({ obj, prefix }: Input) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (key.startsWith(prefix)) {
      acc[key.substring(prefix.length)] = value;
    }
    else {
      acc[key] = value;
    }
    return acc;
  }, {} as any);
}

interface Input {
  obj: { [k: string]: any };
  prefix: string;
}