type F = { ([x, string]: any): Either };
type U = { ([x, string]: any): any };
type Other = { (other: Either): Either };

type Either = {
  ['@@type']: 'Either',
  isLeft: boolean;
  chain: F;
  map: F;
  ap: Other;
  alt: Other;
  extend: { (f: U): any };
  concat: { (other: Either): Either };
  traverse: { (of: U, f: U): Either };
  fold: { (f: U, g: U): any };
  extract: { (): any };
};

export const Right = (x: any): Either => ({
  ['@@type']: 'Either',
  isLeft: false,
  chain: (f: U): Either => f(x),
  ap: (other: Either): Either => other.map(x),
  alt: (other: Either): Either => Right(x),
  extend: (f: U): any => f(Right(x)),
  concat: (other: Either): Either =>
    other.fold(
      (): any => other,
      (y: any): any => Right(x.concat(y)),
    ),
  traverse: (of: U, f: U): Either => f(x).map(Right),
  map: (f: U): Either => Right(f(x)),
  fold: (f: U, g: U): any => g(x),
  extract: (): any => x,
});

export const Left = (x: any): Either => ({
  ['@@type']: 'Either',
  isLeft: true,
  chain: (f: U) => Left(x),
  ap: (other: Either): Either => Left(x),
  extend: (f: U): any => Left(x),
  alt: (other: Either): Either => other,
  concat: (other: Either): Either => Left(x),
  traverse: (of: U, f: U): Either => of(Left(x)),
  map: (f: U): Either => Left(x),
  fold: (f: U, g: U) => f(x),
  extract: (): any => x,
});

export const of = Right;
export const tryCatch = (f: { (): any }): Either => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};
export const fromNullable = (x: any): Either => x != null ? Right(x) : Left(x);

export const Either = {
  Right,
  Left,
  of,
  tryCatch,
  fromNullable,
};
