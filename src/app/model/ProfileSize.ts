export enum ProfileSize {
  NONE = 0,
  SIZE2 = 2,
  SIZE5 = 5,
  SIZE10 = 10,
  SIZE20 = 20,
}

const keys = Object.keys(ProfileSize);

function getValue(profile: ProfileSize): any {
  return keys.map(key => ProfileSize[key]).filter(key => key = profile).values();
}
