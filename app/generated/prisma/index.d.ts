
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CityProgress
 * 
 */
export type CityProgress = $Result.DefaultSelection<Prisma.$CityProgressPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>
/**
 * Model cities
 * 
 */
export type cities = $Result.DefaultSelection<Prisma.$citiesPayload>
/**
 * Model puppies
 * 
 */
export type puppies = $Result.DefaultSelection<Prisma.$puppiesPayload>
/**
 * Model sellers
 * 
 */
export type sellers = $Result.DefaultSelection<Prisma.$sellersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CityProgresses
 * const cityProgresses = await prisma.cityProgress.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more CityProgresses
   * const cityProgresses = await prisma.cityProgress.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cityProgress`: Exposes CRUD operations for the **CityProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CityProgresses
    * const cityProgresses = await prisma.cityProgress.findMany()
    * ```
    */
  get cityProgress(): Prisma.CityProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puppies`: Exposes CRUD operations for the **puppies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Puppies
    * const puppies = await prisma.puppies.findMany()
    * ```
    */
  get puppies(): Prisma.puppiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellers`: Exposes CRUD operations for the **sellers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.sellers.findMany()
    * ```
    */
  get sellers(): Prisma.sellersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CityProgress: 'CityProgress',
    ContactMessage: 'ContactMessage',
    cities: 'cities',
    puppies: 'puppies',
    sellers: 'sellers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cityProgress" | "contactMessage" | "cities" | "puppies" | "sellers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CityProgress: {
        payload: Prisma.$CityProgressPayload<ExtArgs>
        fields: Prisma.CityProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>
          }
          findFirst: {
            args: Prisma.CityProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>
          }
          findMany: {
            args: Prisma.CityProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>[]
          }
          create: {
            args: Prisma.CityProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>
          }
          createMany: {
            args: Prisma.CityProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>[]
          }
          delete: {
            args: Prisma.CityProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>
          }
          update: {
            args: Prisma.CityProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>
          }
          deleteMany: {
            args: Prisma.CityProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>[]
          }
          upsert: {
            args: Prisma.CityProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityProgressPayload>
          }
          aggregate: {
            args: Prisma.CityProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCityProgress>
          }
          groupBy: {
            args: Prisma.CityProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CityProgressCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
      cities: {
        payload: Prisma.$citiesPayload<ExtArgs>
        fields: Prisma.citiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.citiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.citiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findFirst: {
            args: Prisma.citiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.citiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findMany: {
            args: Prisma.citiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          create: {
            args: Prisma.citiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          createMany: {
            args: Prisma.citiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.citiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          delete: {
            args: Prisma.citiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          update: {
            args: Prisma.citiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          deleteMany: {
            args: Prisma.citiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.citiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.citiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          upsert: {
            args: Prisma.citiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          aggregate: {
            args: Prisma.CitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCities>
          }
          groupBy: {
            args: Prisma.citiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.citiesCountArgs<ExtArgs>
            result: $Utils.Optional<CitiesCountAggregateOutputType> | number
          }
        }
      }
      puppies: {
        payload: Prisma.$puppiesPayload<ExtArgs>
        fields: Prisma.puppiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.puppiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.puppiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>
          }
          findFirst: {
            args: Prisma.puppiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.puppiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>
          }
          findMany: {
            args: Prisma.puppiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>[]
          }
          create: {
            args: Prisma.puppiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>
          }
          createMany: {
            args: Prisma.puppiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.puppiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>[]
          }
          delete: {
            args: Prisma.puppiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>
          }
          update: {
            args: Prisma.puppiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>
          }
          deleteMany: {
            args: Prisma.puppiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.puppiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.puppiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>[]
          }
          upsert: {
            args: Prisma.puppiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puppiesPayload>
          }
          aggregate: {
            args: Prisma.PuppiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuppies>
          }
          groupBy: {
            args: Prisma.puppiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuppiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.puppiesCountArgs<ExtArgs>
            result: $Utils.Optional<PuppiesCountAggregateOutputType> | number
          }
        }
      }
      sellers: {
        payload: Prisma.$sellersPayload<ExtArgs>
        fields: Prisma.sellersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sellersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sellersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findFirst: {
            args: Prisma.sellersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sellersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findMany: {
            args: Prisma.sellersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>[]
          }
          create: {
            args: Prisma.sellersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          createMany: {
            args: Prisma.sellersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sellersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>[]
          }
          delete: {
            args: Prisma.sellersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          update: {
            args: Prisma.sellersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          deleteMany: {
            args: Prisma.sellersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sellersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sellersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>[]
          }
          upsert: {
            args: Prisma.sellersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          aggregate: {
            args: Prisma.SellersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellers>
          }
          groupBy: {
            args: Prisma.sellersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellersGroupByOutputType>[]
          }
          count: {
            args: Prisma.sellersCountArgs<ExtArgs>
            result: $Utils.Optional<SellersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cityProgress?: CityProgressOmit
    contactMessage?: ContactMessageOmit
    cities?: citiesOmit
    puppies?: puppiesOmit
    sellers?: sellersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CitiesCountOutputType
   */

  export type CitiesCountOutputType = {
    sellers: number
  }

  export type CitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | CitiesCountOutputTypeCountSellersArgs
  }

  // Custom InputTypes
  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitiesCountOutputType
     */
    select?: CitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeCountSellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellersWhereInput
  }


  /**
   * Count Type SellersCountOutputType
   */

  export type SellersCountOutputType = {
    puppy_listings: number
  }

  export type SellersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    puppy_listings?: boolean | SellersCountOutputTypeCountPuppy_listingsArgs
  }

  // Custom InputTypes
  /**
   * SellersCountOutputType without action
   */
  export type SellersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellersCountOutputType
     */
    select?: SellersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SellersCountOutputType without action
   */
  export type SellersCountOutputTypeCountPuppy_listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: puppiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CityProgress
   */

  export type AggregateCityProgress = {
    _count: CityProgressCountAggregateOutputType | null
    _avg: CityProgressAvgAggregateOutputType | null
    _sum: CityProgressSumAggregateOutputType | null
    _min: CityProgressMinAggregateOutputType | null
    _max: CityProgressMaxAggregateOutputType | null
  }

  export type CityProgressAvgAggregateOutputType = {
    id: number | null
    pages: number | null
    priority: number | null
  }

  export type CityProgressSumAggregateOutputType = {
    id: number | null
    pages: number | null
    priority: number | null
  }

  export type CityProgressMinAggregateOutputType = {
    id: number | null
    city: string | null
    status: string | null
    pages: number | null
    date: Date | null
    priority: number | null
  }

  export type CityProgressMaxAggregateOutputType = {
    id: number | null
    city: string | null
    status: string | null
    pages: number | null
    date: Date | null
    priority: number | null
  }

  export type CityProgressCountAggregateOutputType = {
    id: number
    city: number
    status: number
    pages: number
    date: number
    priority: number
    _all: number
  }


  export type CityProgressAvgAggregateInputType = {
    id?: true
    pages?: true
    priority?: true
  }

  export type CityProgressSumAggregateInputType = {
    id?: true
    pages?: true
    priority?: true
  }

  export type CityProgressMinAggregateInputType = {
    id?: true
    city?: true
    status?: true
    pages?: true
    date?: true
    priority?: true
  }

  export type CityProgressMaxAggregateInputType = {
    id?: true
    city?: true
    status?: true
    pages?: true
    date?: true
    priority?: true
  }

  export type CityProgressCountAggregateInputType = {
    id?: true
    city?: true
    status?: true
    pages?: true
    date?: true
    priority?: true
    _all?: true
  }

  export type CityProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityProgress to aggregate.
     */
    where?: CityProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityProgresses to fetch.
     */
    orderBy?: CityProgressOrderByWithRelationInput | CityProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CityProgresses
    **/
    _count?: true | CityProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CityProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityProgressMaxAggregateInputType
  }

  export type GetCityProgressAggregateType<T extends CityProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCityProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCityProgress[P]>
      : GetScalarType<T[P], AggregateCityProgress[P]>
  }




  export type CityProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityProgressWhereInput
    orderBy?: CityProgressOrderByWithAggregationInput | CityProgressOrderByWithAggregationInput[]
    by: CityProgressScalarFieldEnum[] | CityProgressScalarFieldEnum
    having?: CityProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityProgressCountAggregateInputType | true
    _avg?: CityProgressAvgAggregateInputType
    _sum?: CityProgressSumAggregateInputType
    _min?: CityProgressMinAggregateInputType
    _max?: CityProgressMaxAggregateInputType
  }

  export type CityProgressGroupByOutputType = {
    id: number
    city: string
    status: string | null
    pages: number | null
    date: Date | null
    priority: number | null
    _count: CityProgressCountAggregateOutputType | null
    _avg: CityProgressAvgAggregateOutputType | null
    _sum: CityProgressSumAggregateOutputType | null
    _min: CityProgressMinAggregateOutputType | null
    _max: CityProgressMaxAggregateOutputType | null
  }

  type GetCityProgressGroupByPayload<T extends CityProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CityProgressGroupByOutputType[P]>
        }
      >
    >


  export type CityProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    status?: boolean
    pages?: boolean
    date?: boolean
    priority?: boolean
  }, ExtArgs["result"]["cityProgress"]>

  export type CityProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    status?: boolean
    pages?: boolean
    date?: boolean
    priority?: boolean
  }, ExtArgs["result"]["cityProgress"]>

  export type CityProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    status?: boolean
    pages?: boolean
    date?: boolean
    priority?: boolean
  }, ExtArgs["result"]["cityProgress"]>

  export type CityProgressSelectScalar = {
    id?: boolean
    city?: boolean
    status?: boolean
    pages?: boolean
    date?: boolean
    priority?: boolean
  }

  export type CityProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "status" | "pages" | "date" | "priority", ExtArgs["result"]["cityProgress"]>

  export type $CityProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CityProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      city: string
      status: string | null
      pages: number | null
      date: Date | null
      priority: number | null
    }, ExtArgs["result"]["cityProgress"]>
    composites: {}
  }

  type CityProgressGetPayload<S extends boolean | null | undefined | CityProgressDefaultArgs> = $Result.GetResult<Prisma.$CityProgressPayload, S>

  type CityProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityProgressCountAggregateInputType | true
    }

  export interface CityProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CityProgress'], meta: { name: 'CityProgress' } }
    /**
     * Find zero or one CityProgress that matches the filter.
     * @param {CityProgressFindUniqueArgs} args - Arguments to find a CityProgress
     * @example
     * // Get one CityProgress
     * const cityProgress = await prisma.cityProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityProgressFindUniqueArgs>(args: SelectSubset<T, CityProgressFindUniqueArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CityProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityProgressFindUniqueOrThrowArgs} args - Arguments to find a CityProgress
     * @example
     * // Get one CityProgress
     * const cityProgress = await prisma.cityProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CityProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityProgressFindFirstArgs} args - Arguments to find a CityProgress
     * @example
     * // Get one CityProgress
     * const cityProgress = await prisma.cityProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityProgressFindFirstArgs>(args?: SelectSubset<T, CityProgressFindFirstArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityProgressFindFirstOrThrowArgs} args - Arguments to find a CityProgress
     * @example
     * // Get one CityProgress
     * const cityProgress = await prisma.cityProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CityProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CityProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CityProgresses
     * const cityProgresses = await prisma.cityProgress.findMany()
     * 
     * // Get first 10 CityProgresses
     * const cityProgresses = await prisma.cityProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityProgressWithIdOnly = await prisma.cityProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityProgressFindManyArgs>(args?: SelectSubset<T, CityProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CityProgress.
     * @param {CityProgressCreateArgs} args - Arguments to create a CityProgress.
     * @example
     * // Create one CityProgress
     * const CityProgress = await prisma.cityProgress.create({
     *   data: {
     *     // ... data to create a CityProgress
     *   }
     * })
     * 
     */
    create<T extends CityProgressCreateArgs>(args: SelectSubset<T, CityProgressCreateArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CityProgresses.
     * @param {CityProgressCreateManyArgs} args - Arguments to create many CityProgresses.
     * @example
     * // Create many CityProgresses
     * const cityProgress = await prisma.cityProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityProgressCreateManyArgs>(args?: SelectSubset<T, CityProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CityProgresses and returns the data saved in the database.
     * @param {CityProgressCreateManyAndReturnArgs} args - Arguments to create many CityProgresses.
     * @example
     * // Create many CityProgresses
     * const cityProgress = await prisma.cityProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CityProgresses and only return the `id`
     * const cityProgressWithIdOnly = await prisma.cityProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CityProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CityProgress.
     * @param {CityProgressDeleteArgs} args - Arguments to delete one CityProgress.
     * @example
     * // Delete one CityProgress
     * const CityProgress = await prisma.cityProgress.delete({
     *   where: {
     *     // ... filter to delete one CityProgress
     *   }
     * })
     * 
     */
    delete<T extends CityProgressDeleteArgs>(args: SelectSubset<T, CityProgressDeleteArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CityProgress.
     * @param {CityProgressUpdateArgs} args - Arguments to update one CityProgress.
     * @example
     * // Update one CityProgress
     * const cityProgress = await prisma.cityProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityProgressUpdateArgs>(args: SelectSubset<T, CityProgressUpdateArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CityProgresses.
     * @param {CityProgressDeleteManyArgs} args - Arguments to filter CityProgresses to delete.
     * @example
     * // Delete a few CityProgresses
     * const { count } = await prisma.cityProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityProgressDeleteManyArgs>(args?: SelectSubset<T, CityProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CityProgresses
     * const cityProgress = await prisma.cityProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityProgressUpdateManyArgs>(args: SelectSubset<T, CityProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityProgresses and returns the data updated in the database.
     * @param {CityProgressUpdateManyAndReturnArgs} args - Arguments to update many CityProgresses.
     * @example
     * // Update many CityProgresses
     * const cityProgress = await prisma.cityProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CityProgresses and only return the `id`
     * const cityProgressWithIdOnly = await prisma.cityProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CityProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CityProgress.
     * @param {CityProgressUpsertArgs} args - Arguments to update or create a CityProgress.
     * @example
     * // Update or create a CityProgress
     * const cityProgress = await prisma.cityProgress.upsert({
     *   create: {
     *     // ... data to create a CityProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CityProgress we want to update
     *   }
     * })
     */
    upsert<T extends CityProgressUpsertArgs>(args: SelectSubset<T, CityProgressUpsertArgs<ExtArgs>>): Prisma__CityProgressClient<$Result.GetResult<Prisma.$CityProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CityProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityProgressCountArgs} args - Arguments to filter CityProgresses to count.
     * @example
     * // Count the number of CityProgresses
     * const count = await prisma.cityProgress.count({
     *   where: {
     *     // ... the filter for the CityProgresses we want to count
     *   }
     * })
    **/
    count<T extends CityProgressCountArgs>(
      args?: Subset<T, CityProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CityProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityProgressAggregateArgs>(args: Subset<T, CityProgressAggregateArgs>): Prisma.PrismaPromise<GetCityProgressAggregateType<T>>

    /**
     * Group by CityProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityProgressGroupByArgs['orderBy'] }
        : { orderBy?: CityProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CityProgress model
   */
  readonly fields: CityProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CityProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CityProgress model
   */
  interface CityProgressFieldRefs {
    readonly id: FieldRef<"CityProgress", 'Int'>
    readonly city: FieldRef<"CityProgress", 'String'>
    readonly status: FieldRef<"CityProgress", 'String'>
    readonly pages: FieldRef<"CityProgress", 'Int'>
    readonly date: FieldRef<"CityProgress", 'DateTime'>
    readonly priority: FieldRef<"CityProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CityProgress findUnique
   */
  export type CityProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * Filter, which CityProgress to fetch.
     */
    where: CityProgressWhereUniqueInput
  }

  /**
   * CityProgress findUniqueOrThrow
   */
  export type CityProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * Filter, which CityProgress to fetch.
     */
    where: CityProgressWhereUniqueInput
  }

  /**
   * CityProgress findFirst
   */
  export type CityProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * Filter, which CityProgress to fetch.
     */
    where?: CityProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityProgresses to fetch.
     */
    orderBy?: CityProgressOrderByWithRelationInput | CityProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityProgresses.
     */
    cursor?: CityProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityProgresses.
     */
    distinct?: CityProgressScalarFieldEnum | CityProgressScalarFieldEnum[]
  }

  /**
   * CityProgress findFirstOrThrow
   */
  export type CityProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * Filter, which CityProgress to fetch.
     */
    where?: CityProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityProgresses to fetch.
     */
    orderBy?: CityProgressOrderByWithRelationInput | CityProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityProgresses.
     */
    cursor?: CityProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityProgresses.
     */
    distinct?: CityProgressScalarFieldEnum | CityProgressScalarFieldEnum[]
  }

  /**
   * CityProgress findMany
   */
  export type CityProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * Filter, which CityProgresses to fetch.
     */
    where?: CityProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityProgresses to fetch.
     */
    orderBy?: CityProgressOrderByWithRelationInput | CityProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CityProgresses.
     */
    cursor?: CityProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityProgresses.
     */
    distinct?: CityProgressScalarFieldEnum | CityProgressScalarFieldEnum[]
  }

  /**
   * CityProgress create
   */
  export type CityProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a CityProgress.
     */
    data: XOR<CityProgressCreateInput, CityProgressUncheckedCreateInput>
  }

  /**
   * CityProgress createMany
   */
  export type CityProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CityProgresses.
     */
    data: CityProgressCreateManyInput | CityProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CityProgress createManyAndReturn
   */
  export type CityProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CityProgresses.
     */
    data: CityProgressCreateManyInput | CityProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CityProgress update
   */
  export type CityProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a CityProgress.
     */
    data: XOR<CityProgressUpdateInput, CityProgressUncheckedUpdateInput>
    /**
     * Choose, which CityProgress to update.
     */
    where: CityProgressWhereUniqueInput
  }

  /**
   * CityProgress updateMany
   */
  export type CityProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CityProgresses.
     */
    data: XOR<CityProgressUpdateManyMutationInput, CityProgressUncheckedUpdateManyInput>
    /**
     * Filter which CityProgresses to update
     */
    where?: CityProgressWhereInput
    /**
     * Limit how many CityProgresses to update.
     */
    limit?: number
  }

  /**
   * CityProgress updateManyAndReturn
   */
  export type CityProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * The data used to update CityProgresses.
     */
    data: XOR<CityProgressUpdateManyMutationInput, CityProgressUncheckedUpdateManyInput>
    /**
     * Filter which CityProgresses to update
     */
    where?: CityProgressWhereInput
    /**
     * Limit how many CityProgresses to update.
     */
    limit?: number
  }

  /**
   * CityProgress upsert
   */
  export type CityProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the CityProgress to update in case it exists.
     */
    where: CityProgressWhereUniqueInput
    /**
     * In case the CityProgress found by the `where` argument doesn't exist, create a new CityProgress with this data.
     */
    create: XOR<CityProgressCreateInput, CityProgressUncheckedCreateInput>
    /**
     * In case the CityProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityProgressUpdateInput, CityProgressUncheckedUpdateInput>
  }

  /**
   * CityProgress delete
   */
  export type CityProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
    /**
     * Filter which CityProgress to delete.
     */
    where: CityProgressWhereUniqueInput
  }

  /**
   * CityProgress deleteMany
   */
  export type CityProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityProgresses to delete
     */
    where?: CityProgressWhereInput
    /**
     * Limit how many CityProgresses to delete.
     */
    limit?: number
  }

  /**
   * CityProgress without action
   */
  export type CityProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityProgress
     */
    select?: CityProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityProgress
     */
    omit?: CityProgressOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    message: string
    createdAt: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Model cities
   */

  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type CitiesSumAggregateOutputType = {
    id: number | null
  }

  export type CitiesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CitiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CitiesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id?: true
  }

  export type CitiesSumAggregateInputType = {
    id?: true
  }

  export type CitiesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CitiesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CitiesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to aggregate.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type citiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithAggregationInput | citiesOrderByWithAggregationInput[]
    by: CitiesScalarFieldEnum[] | CitiesScalarFieldEnum
    having?: citiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _avg?: CitiesAvgAggregateInputType
    _sum?: CitiesSumAggregateInputType
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }

  export type CitiesGroupByOutputType = {
    id: number
    name: string
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends citiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type citiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sellers?: boolean | cities$sellersArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type citiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["cities"]>
  export type citiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | cities$sellersArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type citiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type citiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $citiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cities"
    objects: {
      sellers: Prisma.$sellersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["cities"]>
    composites: {}
  }

  type citiesGetPayload<S extends boolean | null | undefined | citiesDefaultArgs> = $Result.GetResult<Prisma.$citiesPayload, S>

  type citiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<citiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitiesCountAggregateInputType | true
    }

  export interface citiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cities'], meta: { name: 'cities' } }
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends citiesFindUniqueArgs>(args: SelectSubset<T, citiesFindUniqueArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {citiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(args: SelectSubset<T, citiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends citiesFindFirstArgs>(args?: SelectSubset<T, citiesFindFirstArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(args?: SelectSubset<T, citiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citiesWithIdOnly = await prisma.cities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends citiesFindManyArgs>(args?: SelectSubset<T, citiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
     */
    create<T extends citiesCreateArgs>(args: SelectSubset<T, citiesCreateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {citiesCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends citiesCreateManyArgs>(args?: SelectSubset<T, citiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {citiesCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const citiesWithIdOnly = await prisma.cities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends citiesCreateManyAndReturnArgs>(args?: SelectSubset<T, citiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
     */
    delete<T extends citiesDeleteArgs>(args: SelectSubset<T, citiesDeleteArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends citiesUpdateArgs>(args: SelectSubset<T, citiesUpdateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends citiesDeleteManyArgs>(args?: SelectSubset<T, citiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends citiesUpdateManyArgs>(args: SelectSubset<T, citiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {citiesUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const citiesWithIdOnly = await prisma.cities.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends citiesUpdateManyAndReturnArgs>(args: SelectSubset<T, citiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
     */
    upsert<T extends citiesUpsertArgs>(args: SelectSubset<T, citiesUpsertArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends citiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citiesGroupByArgs['orderBy'] }
        : { orderBy?: citiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, citiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cities model
   */
  readonly fields: citiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sellers<T extends cities$sellersArgs<ExtArgs> = {}>(args?: Subset<T, cities$sellersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cities model
   */
  interface citiesFieldRefs {
    readonly id: FieldRef<"cities", 'Int'>
    readonly name: FieldRef<"cities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cities findUnique
   */
  export type citiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findUniqueOrThrow
   */
  export type citiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findFirst
   */
  export type citiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findFirstOrThrow
   */
  export type citiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findMany
   */
  export type citiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities create
   */
  export type citiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to create a cities.
     */
    data: XOR<citiesCreateInput, citiesUncheckedCreateInput>
  }

  /**
   * cities createMany
   */
  export type citiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cities createManyAndReturn
   */
  export type citiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cities update
   */
  export type citiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to update a cities.
     */
    data: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
    /**
     * Choose, which cities to update.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * cities updateManyAndReturn
   */
  export type citiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * cities upsert
   */
  export type citiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The filter to search for the cities to update in case it exists.
     */
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
     */
    create: XOR<citiesCreateInput, citiesUncheckedCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
  }

  /**
   * cities delete
   */
  export type citiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter which cities to delete.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to delete.
     */
    limit?: number
  }

  /**
   * cities.sellers
   */
  export type cities$sellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    where?: sellersWhereInput
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    cursor?: sellersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }

  /**
   * cities without action
   */
  export type citiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
  }


  /**
   * Model puppies
   */

  export type AggregatePuppies = {
    _count: PuppiesCountAggregateOutputType | null
    _avg: PuppiesAvgAggregateOutputType | null
    _sum: PuppiesSumAggregateOutputType | null
    _min: PuppiesMinAggregateOutputType | null
    _max: PuppiesMaxAggregateOutputType | null
  }

  export type PuppiesAvgAggregateOutputType = {
    id: number | null
    seller_id: number | null
  }

  export type PuppiesSumAggregateOutputType = {
    id: number | null
    seller_id: number | null
  }

  export type PuppiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    age: string | null
    breed: string | null
    listing_url: string | null
    seller_id: number | null
    scraped_at: Date | null
    processed_at: Date | null
    source_date: Date | null
    folder_date: string | null
    folder_creation_date: string | null
  }

  export type PuppiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    age: string | null
    breed: string | null
    listing_url: string | null
    seller_id: number | null
    scraped_at: Date | null
    processed_at: Date | null
    source_date: Date | null
    folder_date: string | null
    folder_creation_date: string | null
  }

  export type PuppiesCountAggregateOutputType = {
    id: number
    name: number
    price: number
    age: number
    breed: number
    listing_url: number
    seller_id: number
    scraped_at: number
    processed_at: number
    source_date: number
    folder_date: number
    folder_creation_date: number
    _all: number
  }


  export type PuppiesAvgAggregateInputType = {
    id?: true
    seller_id?: true
  }

  export type PuppiesSumAggregateInputType = {
    id?: true
    seller_id?: true
  }

  export type PuppiesMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    age?: true
    breed?: true
    listing_url?: true
    seller_id?: true
    scraped_at?: true
    processed_at?: true
    source_date?: true
    folder_date?: true
    folder_creation_date?: true
  }

  export type PuppiesMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    age?: true
    breed?: true
    listing_url?: true
    seller_id?: true
    scraped_at?: true
    processed_at?: true
    source_date?: true
    folder_date?: true
    folder_creation_date?: true
  }

  export type PuppiesCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    age?: true
    breed?: true
    listing_url?: true
    seller_id?: true
    scraped_at?: true
    processed_at?: true
    source_date?: true
    folder_date?: true
    folder_creation_date?: true
    _all?: true
  }

  export type PuppiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which puppies to aggregate.
     */
    where?: puppiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puppies to fetch.
     */
    orderBy?: puppiesOrderByWithRelationInput | puppiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: puppiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puppies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned puppies
    **/
    _count?: true | PuppiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuppiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuppiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuppiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuppiesMaxAggregateInputType
  }

  export type GetPuppiesAggregateType<T extends PuppiesAggregateArgs> = {
        [P in keyof T & keyof AggregatePuppies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuppies[P]>
      : GetScalarType<T[P], AggregatePuppies[P]>
  }




  export type puppiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: puppiesWhereInput
    orderBy?: puppiesOrderByWithAggregationInput | puppiesOrderByWithAggregationInput[]
    by: PuppiesScalarFieldEnum[] | PuppiesScalarFieldEnum
    having?: puppiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuppiesCountAggregateInputType | true
    _avg?: PuppiesAvgAggregateInputType
    _sum?: PuppiesSumAggregateInputType
    _min?: PuppiesMinAggregateInputType
    _max?: PuppiesMaxAggregateInputType
  }

  export type PuppiesGroupByOutputType = {
    id: number
    name: string | null
    price: string | null
    age: string | null
    breed: string | null
    listing_url: string | null
    seller_id: number | null
    scraped_at: Date | null
    processed_at: Date | null
    source_date: Date | null
    folder_date: string | null
    folder_creation_date: string | null
    _count: PuppiesCountAggregateOutputType | null
    _avg: PuppiesAvgAggregateOutputType | null
    _sum: PuppiesSumAggregateOutputType | null
    _min: PuppiesMinAggregateOutputType | null
    _max: PuppiesMaxAggregateOutputType | null
  }

  type GetPuppiesGroupByPayload<T extends puppiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuppiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuppiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuppiesGroupByOutputType[P]>
            : GetScalarType<T[P], PuppiesGroupByOutputType[P]>
        }
      >
    >


  export type puppiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    age?: boolean
    breed?: boolean
    listing_url?: boolean
    seller_id?: boolean
    scraped_at?: boolean
    processed_at?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
    sellers?: boolean | puppies$sellersArgs<ExtArgs>
  }, ExtArgs["result"]["puppies"]>

  export type puppiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    age?: boolean
    breed?: boolean
    listing_url?: boolean
    seller_id?: boolean
    scraped_at?: boolean
    processed_at?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
    sellers?: boolean | puppies$sellersArgs<ExtArgs>
  }, ExtArgs["result"]["puppies"]>

  export type puppiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    age?: boolean
    breed?: boolean
    listing_url?: boolean
    seller_id?: boolean
    scraped_at?: boolean
    processed_at?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
    sellers?: boolean | puppies$sellersArgs<ExtArgs>
  }, ExtArgs["result"]["puppies"]>

  export type puppiesSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    age?: boolean
    breed?: boolean
    listing_url?: boolean
    seller_id?: boolean
    scraped_at?: boolean
    processed_at?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
  }

  export type puppiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "age" | "breed" | "listing_url" | "seller_id" | "scraped_at" | "processed_at" | "source_date" | "folder_date" | "folder_creation_date", ExtArgs["result"]["puppies"]>
  export type puppiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | puppies$sellersArgs<ExtArgs>
  }
  export type puppiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | puppies$sellersArgs<ExtArgs>
  }
  export type puppiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | puppies$sellersArgs<ExtArgs>
  }

  export type $puppiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "puppies"
    objects: {
      sellers: Prisma.$sellersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      price: string | null
      age: string | null
      breed: string | null
      listing_url: string | null
      seller_id: number | null
      scraped_at: Date | null
      processed_at: Date | null
      source_date: Date | null
      folder_date: string | null
      folder_creation_date: string | null
    }, ExtArgs["result"]["puppies"]>
    composites: {}
  }

  type puppiesGetPayload<S extends boolean | null | undefined | puppiesDefaultArgs> = $Result.GetResult<Prisma.$puppiesPayload, S>

  type puppiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<puppiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PuppiesCountAggregateInputType | true
    }

  export interface puppiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['puppies'], meta: { name: 'puppies' } }
    /**
     * Find zero or one Puppies that matches the filter.
     * @param {puppiesFindUniqueArgs} args - Arguments to find a Puppies
     * @example
     * // Get one Puppies
     * const puppies = await prisma.puppies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends puppiesFindUniqueArgs>(args: SelectSubset<T, puppiesFindUniqueArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Puppies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {puppiesFindUniqueOrThrowArgs} args - Arguments to find a Puppies
     * @example
     * // Get one Puppies
     * const puppies = await prisma.puppies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends puppiesFindUniqueOrThrowArgs>(args: SelectSubset<T, puppiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puppies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puppiesFindFirstArgs} args - Arguments to find a Puppies
     * @example
     * // Get one Puppies
     * const puppies = await prisma.puppies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends puppiesFindFirstArgs>(args?: SelectSubset<T, puppiesFindFirstArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puppies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puppiesFindFirstOrThrowArgs} args - Arguments to find a Puppies
     * @example
     * // Get one Puppies
     * const puppies = await prisma.puppies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends puppiesFindFirstOrThrowArgs>(args?: SelectSubset<T, puppiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Puppies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puppiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Puppies
     * const puppies = await prisma.puppies.findMany()
     * 
     * // Get first 10 Puppies
     * const puppies = await prisma.puppies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const puppiesWithIdOnly = await prisma.puppies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends puppiesFindManyArgs>(args?: SelectSubset<T, puppiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Puppies.
     * @param {puppiesCreateArgs} args - Arguments to create a Puppies.
     * @example
     * // Create one Puppies
     * const Puppies = await prisma.puppies.create({
     *   data: {
     *     // ... data to create a Puppies
     *   }
     * })
     * 
     */
    create<T extends puppiesCreateArgs>(args: SelectSubset<T, puppiesCreateArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Puppies.
     * @param {puppiesCreateManyArgs} args - Arguments to create many Puppies.
     * @example
     * // Create many Puppies
     * const puppies = await prisma.puppies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends puppiesCreateManyArgs>(args?: SelectSubset<T, puppiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Puppies and returns the data saved in the database.
     * @param {puppiesCreateManyAndReturnArgs} args - Arguments to create many Puppies.
     * @example
     * // Create many Puppies
     * const puppies = await prisma.puppies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Puppies and only return the `id`
     * const puppiesWithIdOnly = await prisma.puppies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends puppiesCreateManyAndReturnArgs>(args?: SelectSubset<T, puppiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Puppies.
     * @param {puppiesDeleteArgs} args - Arguments to delete one Puppies.
     * @example
     * // Delete one Puppies
     * const Puppies = await prisma.puppies.delete({
     *   where: {
     *     // ... filter to delete one Puppies
     *   }
     * })
     * 
     */
    delete<T extends puppiesDeleteArgs>(args: SelectSubset<T, puppiesDeleteArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Puppies.
     * @param {puppiesUpdateArgs} args - Arguments to update one Puppies.
     * @example
     * // Update one Puppies
     * const puppies = await prisma.puppies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends puppiesUpdateArgs>(args: SelectSubset<T, puppiesUpdateArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Puppies.
     * @param {puppiesDeleteManyArgs} args - Arguments to filter Puppies to delete.
     * @example
     * // Delete a few Puppies
     * const { count } = await prisma.puppies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends puppiesDeleteManyArgs>(args?: SelectSubset<T, puppiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Puppies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puppiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Puppies
     * const puppies = await prisma.puppies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends puppiesUpdateManyArgs>(args: SelectSubset<T, puppiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Puppies and returns the data updated in the database.
     * @param {puppiesUpdateManyAndReturnArgs} args - Arguments to update many Puppies.
     * @example
     * // Update many Puppies
     * const puppies = await prisma.puppies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Puppies and only return the `id`
     * const puppiesWithIdOnly = await prisma.puppies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends puppiesUpdateManyAndReturnArgs>(args: SelectSubset<T, puppiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Puppies.
     * @param {puppiesUpsertArgs} args - Arguments to update or create a Puppies.
     * @example
     * // Update or create a Puppies
     * const puppies = await prisma.puppies.upsert({
     *   create: {
     *     // ... data to create a Puppies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Puppies we want to update
     *   }
     * })
     */
    upsert<T extends puppiesUpsertArgs>(args: SelectSubset<T, puppiesUpsertArgs<ExtArgs>>): Prisma__puppiesClient<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Puppies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puppiesCountArgs} args - Arguments to filter Puppies to count.
     * @example
     * // Count the number of Puppies
     * const count = await prisma.puppies.count({
     *   where: {
     *     // ... the filter for the Puppies we want to count
     *   }
     * })
    **/
    count<T extends puppiesCountArgs>(
      args?: Subset<T, puppiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuppiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Puppies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PuppiesAggregateArgs>(args: Subset<T, PuppiesAggregateArgs>): Prisma.PrismaPromise<GetPuppiesAggregateType<T>>

    /**
     * Group by Puppies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puppiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends puppiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: puppiesGroupByArgs['orderBy'] }
        : { orderBy?: puppiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, puppiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuppiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the puppies model
   */
  readonly fields: puppiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for puppies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__puppiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sellers<T extends puppies$sellersArgs<ExtArgs> = {}>(args?: Subset<T, puppies$sellersArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the puppies model
   */
  interface puppiesFieldRefs {
    readonly id: FieldRef<"puppies", 'Int'>
    readonly name: FieldRef<"puppies", 'String'>
    readonly price: FieldRef<"puppies", 'String'>
    readonly age: FieldRef<"puppies", 'String'>
    readonly breed: FieldRef<"puppies", 'String'>
    readonly listing_url: FieldRef<"puppies", 'String'>
    readonly seller_id: FieldRef<"puppies", 'Int'>
    readonly scraped_at: FieldRef<"puppies", 'DateTime'>
    readonly processed_at: FieldRef<"puppies", 'DateTime'>
    readonly source_date: FieldRef<"puppies", 'DateTime'>
    readonly folder_date: FieldRef<"puppies", 'String'>
    readonly folder_creation_date: FieldRef<"puppies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * puppies findUnique
   */
  export type puppiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * Filter, which puppies to fetch.
     */
    where: puppiesWhereUniqueInput
  }

  /**
   * puppies findUniqueOrThrow
   */
  export type puppiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * Filter, which puppies to fetch.
     */
    where: puppiesWhereUniqueInput
  }

  /**
   * puppies findFirst
   */
  export type puppiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * Filter, which puppies to fetch.
     */
    where?: puppiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puppies to fetch.
     */
    orderBy?: puppiesOrderByWithRelationInput | puppiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for puppies.
     */
    cursor?: puppiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puppies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of puppies.
     */
    distinct?: PuppiesScalarFieldEnum | PuppiesScalarFieldEnum[]
  }

  /**
   * puppies findFirstOrThrow
   */
  export type puppiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * Filter, which puppies to fetch.
     */
    where?: puppiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puppies to fetch.
     */
    orderBy?: puppiesOrderByWithRelationInput | puppiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for puppies.
     */
    cursor?: puppiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puppies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of puppies.
     */
    distinct?: PuppiesScalarFieldEnum | PuppiesScalarFieldEnum[]
  }

  /**
   * puppies findMany
   */
  export type puppiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * Filter, which puppies to fetch.
     */
    where?: puppiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puppies to fetch.
     */
    orderBy?: puppiesOrderByWithRelationInput | puppiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing puppies.
     */
    cursor?: puppiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puppies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of puppies.
     */
    distinct?: PuppiesScalarFieldEnum | PuppiesScalarFieldEnum[]
  }

  /**
   * puppies create
   */
  export type puppiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * The data needed to create a puppies.
     */
    data?: XOR<puppiesCreateInput, puppiesUncheckedCreateInput>
  }

  /**
   * puppies createMany
   */
  export type puppiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many puppies.
     */
    data: puppiesCreateManyInput | puppiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * puppies createManyAndReturn
   */
  export type puppiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * The data used to create many puppies.
     */
    data: puppiesCreateManyInput | puppiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * puppies update
   */
  export type puppiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * The data needed to update a puppies.
     */
    data: XOR<puppiesUpdateInput, puppiesUncheckedUpdateInput>
    /**
     * Choose, which puppies to update.
     */
    where: puppiesWhereUniqueInput
  }

  /**
   * puppies updateMany
   */
  export type puppiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update puppies.
     */
    data: XOR<puppiesUpdateManyMutationInput, puppiesUncheckedUpdateManyInput>
    /**
     * Filter which puppies to update
     */
    where?: puppiesWhereInput
    /**
     * Limit how many puppies to update.
     */
    limit?: number
  }

  /**
   * puppies updateManyAndReturn
   */
  export type puppiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * The data used to update puppies.
     */
    data: XOR<puppiesUpdateManyMutationInput, puppiesUncheckedUpdateManyInput>
    /**
     * Filter which puppies to update
     */
    where?: puppiesWhereInput
    /**
     * Limit how many puppies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * puppies upsert
   */
  export type puppiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * The filter to search for the puppies to update in case it exists.
     */
    where: puppiesWhereUniqueInput
    /**
     * In case the puppies found by the `where` argument doesn't exist, create a new puppies with this data.
     */
    create: XOR<puppiesCreateInput, puppiesUncheckedCreateInput>
    /**
     * In case the puppies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<puppiesUpdateInput, puppiesUncheckedUpdateInput>
  }

  /**
   * puppies delete
   */
  export type puppiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    /**
     * Filter which puppies to delete.
     */
    where: puppiesWhereUniqueInput
  }

  /**
   * puppies deleteMany
   */
  export type puppiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which puppies to delete
     */
    where?: puppiesWhereInput
    /**
     * Limit how many puppies to delete.
     */
    limit?: number
  }

  /**
   * puppies.sellers
   */
  export type puppies$sellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    where?: sellersWhereInput
  }

  /**
   * puppies without action
   */
  export type puppiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
  }


  /**
   * Model sellers
   */

  export type AggregateSellers = {
    _count: SellersCountAggregateOutputType | null
    _avg: SellersAvgAggregateOutputType | null
    _sum: SellersSumAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  export type SellersAvgAggregateOutputType = {
    id: number | null
    city_id: number | null
    puppies_count: number | null
  }

  export type SellersSumAggregateOutputType = {
    id: number | null
    city_id: number | null
    puppies_count: number | null
  }

  export type SellersMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    location: string | null
    city_id: number | null
    created_at: Date | null
    city: string | null
    puppies_count: number | null
    source_date: Date | null
    folder_date: string | null
    folder_creation_date: string | null
  }

  export type SellersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    location: string | null
    city_id: number | null
    created_at: Date | null
    city: string | null
    puppies_count: number | null
    source_date: Date | null
    folder_date: string | null
    folder_creation_date: string | null
  }

  export type SellersCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    location: number
    city_id: number
    created_at: number
    city: number
    puppies_count: number
    source_date: number
    folder_date: number
    folder_creation_date: number
    _all: number
  }


  export type SellersAvgAggregateInputType = {
    id?: true
    city_id?: true
    puppies_count?: true
  }

  export type SellersSumAggregateInputType = {
    id?: true
    city_id?: true
    puppies_count?: true
  }

  export type SellersMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    location?: true
    city_id?: true
    created_at?: true
    city?: true
    puppies_count?: true
    source_date?: true
    folder_date?: true
    folder_creation_date?: true
  }

  export type SellersMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    location?: true
    city_id?: true
    created_at?: true
    city?: true
    puppies_count?: true
    source_date?: true
    folder_date?: true
    folder_creation_date?: true
  }

  export type SellersCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    location?: true
    city_id?: true
    created_at?: true
    city?: true
    puppies_count?: true
    source_date?: true
    folder_date?: true
    folder_creation_date?: true
    _all?: true
  }

  export type SellersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to aggregate.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sellers
    **/
    _count?: true | SellersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellersMaxAggregateInputType
  }

  export type GetSellersAggregateType<T extends SellersAggregateArgs> = {
        [P in keyof T & keyof AggregateSellers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellers[P]>
      : GetScalarType<T[P], AggregateSellers[P]>
  }




  export type sellersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellersWhereInput
    orderBy?: sellersOrderByWithAggregationInput | sellersOrderByWithAggregationInput[]
    by: SellersScalarFieldEnum[] | SellersScalarFieldEnum
    having?: sellersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellersCountAggregateInputType | true
    _avg?: SellersAvgAggregateInputType
    _sum?: SellersSumAggregateInputType
    _min?: SellersMinAggregateInputType
    _max?: SellersMaxAggregateInputType
  }

  export type SellersGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    location: string | null
    city_id: number | null
    created_at: Date | null
    city: string | null
    puppies_count: number | null
    source_date: Date | null
    folder_date: string | null
    folder_creation_date: string | null
    _count: SellersCountAggregateOutputType | null
    _avg: SellersAvgAggregateOutputType | null
    _sum: SellersSumAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  type GetSellersGroupByPayload<T extends sellersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellersGroupByOutputType[P]>
            : GetScalarType<T[P], SellersGroupByOutputType[P]>
        }
      >
    >


  export type sellersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    city_id?: boolean
    created_at?: boolean
    city?: boolean
    puppies_count?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
    puppy_listings?: boolean | sellers$puppy_listingsArgs<ExtArgs>
    cities?: boolean | sellers$citiesArgs<ExtArgs>
    _count?: boolean | SellersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellers"]>

  export type sellersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    city_id?: boolean
    created_at?: boolean
    city?: boolean
    puppies_count?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
    cities?: boolean | sellers$citiesArgs<ExtArgs>
  }, ExtArgs["result"]["sellers"]>

  export type sellersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    city_id?: boolean
    created_at?: boolean
    city?: boolean
    puppies_count?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
    cities?: boolean | sellers$citiesArgs<ExtArgs>
  }, ExtArgs["result"]["sellers"]>

  export type sellersSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    city_id?: boolean
    created_at?: boolean
    city?: boolean
    puppies_count?: boolean
    source_date?: boolean
    folder_date?: boolean
    folder_creation_date?: boolean
  }

  export type sellersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "location" | "city_id" | "created_at" | "city" | "puppies_count" | "source_date" | "folder_date" | "folder_creation_date", ExtArgs["result"]["sellers"]>
  export type sellersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    puppy_listings?: boolean | sellers$puppy_listingsArgs<ExtArgs>
    cities?: boolean | sellers$citiesArgs<ExtArgs>
    _count?: boolean | SellersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sellersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | sellers$citiesArgs<ExtArgs>
  }
  export type sellersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | sellers$citiesArgs<ExtArgs>
  }

  export type $sellersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sellers"
    objects: {
      puppy_listings: Prisma.$puppiesPayload<ExtArgs>[]
      cities: Prisma.$citiesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      location: string | null
      city_id: number | null
      created_at: Date | null
      city: string | null
      puppies_count: number | null
      source_date: Date | null
      folder_date: string | null
      folder_creation_date: string | null
    }, ExtArgs["result"]["sellers"]>
    composites: {}
  }

  type sellersGetPayload<S extends boolean | null | undefined | sellersDefaultArgs> = $Result.GetResult<Prisma.$sellersPayload, S>

  type sellersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sellersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellersCountAggregateInputType | true
    }

  export interface sellersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sellers'], meta: { name: 'sellers' } }
    /**
     * Find zero or one Sellers that matches the filter.
     * @param {sellersFindUniqueArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sellersFindUniqueArgs>(args: SelectSubset<T, sellersFindUniqueArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sellers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sellersFindUniqueOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sellersFindUniqueOrThrowArgs>(args: SelectSubset<T, sellersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sellersFindFirstArgs>(args?: SelectSubset<T, sellersFindFirstArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sellers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sellersFindFirstOrThrowArgs>(args?: SelectSubset<T, sellersFindFirstOrThrowArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.sellers.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.sellers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellersWithIdOnly = await prisma.sellers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sellersFindManyArgs>(args?: SelectSubset<T, sellersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sellers.
     * @param {sellersCreateArgs} args - Arguments to create a Sellers.
     * @example
     * // Create one Sellers
     * const Sellers = await prisma.sellers.create({
     *   data: {
     *     // ... data to create a Sellers
     *   }
     * })
     * 
     */
    create<T extends sellersCreateArgs>(args: SelectSubset<T, sellersCreateArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sellers.
     * @param {sellersCreateManyArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const sellers = await prisma.sellers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sellersCreateManyArgs>(args?: SelectSubset<T, sellersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sellers and returns the data saved in the database.
     * @param {sellersCreateManyAndReturnArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const sellers = await prisma.sellers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sellers and only return the `id`
     * const sellersWithIdOnly = await prisma.sellers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sellersCreateManyAndReturnArgs>(args?: SelectSubset<T, sellersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sellers.
     * @param {sellersDeleteArgs} args - Arguments to delete one Sellers.
     * @example
     * // Delete one Sellers
     * const Sellers = await prisma.sellers.delete({
     *   where: {
     *     // ... filter to delete one Sellers
     *   }
     * })
     * 
     */
    delete<T extends sellersDeleteArgs>(args: SelectSubset<T, sellersDeleteArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sellers.
     * @param {sellersUpdateArgs} args - Arguments to update one Sellers.
     * @example
     * // Update one Sellers
     * const sellers = await prisma.sellers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sellersUpdateArgs>(args: SelectSubset<T, sellersUpdateArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sellers.
     * @param {sellersDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.sellers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sellersDeleteManyArgs>(args?: SelectSubset<T, sellersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const sellers = await prisma.sellers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sellersUpdateManyArgs>(args: SelectSubset<T, sellersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers and returns the data updated in the database.
     * @param {sellersUpdateManyAndReturnArgs} args - Arguments to update many Sellers.
     * @example
     * // Update many Sellers
     * const sellers = await prisma.sellers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sellers and only return the `id`
     * const sellersWithIdOnly = await prisma.sellers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sellersUpdateManyAndReturnArgs>(args: SelectSubset<T, sellersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sellers.
     * @param {sellersUpsertArgs} args - Arguments to update or create a Sellers.
     * @example
     * // Update or create a Sellers
     * const sellers = await prisma.sellers.upsert({
     *   create: {
     *     // ... data to create a Sellers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sellers we want to update
     *   }
     * })
     */
    upsert<T extends sellersUpsertArgs>(args: SelectSubset<T, sellersUpsertArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.sellers.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends sellersCountArgs>(
      args?: Subset<T, sellersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SellersAggregateArgs>(args: Subset<T, SellersAggregateArgs>): Prisma.PrismaPromise<GetSellersAggregateType<T>>

    /**
     * Group by Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sellersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sellersGroupByArgs['orderBy'] }
        : { orderBy?: sellersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sellersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sellers model
   */
  readonly fields: sellersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sellers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sellersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    puppy_listings<T extends sellers$puppy_listingsArgs<ExtArgs> = {}>(args?: Subset<T, sellers$puppy_listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$puppiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cities<T extends sellers$citiesArgs<ExtArgs> = {}>(args?: Subset<T, sellers$citiesArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sellers model
   */
  interface sellersFieldRefs {
    readonly id: FieldRef<"sellers", 'Int'>
    readonly name: FieldRef<"sellers", 'String'>
    readonly phone: FieldRef<"sellers", 'String'>
    readonly location: FieldRef<"sellers", 'String'>
    readonly city_id: FieldRef<"sellers", 'Int'>
    readonly created_at: FieldRef<"sellers", 'DateTime'>
    readonly city: FieldRef<"sellers", 'String'>
    readonly puppies_count: FieldRef<"sellers", 'Int'>
    readonly source_date: FieldRef<"sellers", 'DateTime'>
    readonly folder_date: FieldRef<"sellers", 'String'>
    readonly folder_creation_date: FieldRef<"sellers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sellers findUnique
   */
  export type sellersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers findUniqueOrThrow
   */
  export type sellersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers findFirst
   */
  export type sellersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }

  /**
   * sellers findFirstOrThrow
   */
  export type sellersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }

  /**
   * sellers findMany
   */
  export type sellersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }

  /**
   * sellers create
   */
  export type sellersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The data needed to create a sellers.
     */
    data: XOR<sellersCreateInput, sellersUncheckedCreateInput>
  }

  /**
   * sellers createMany
   */
  export type sellersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sellers.
     */
    data: sellersCreateManyInput | sellersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sellers createManyAndReturn
   */
  export type sellersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * The data used to create many sellers.
     */
    data: sellersCreateManyInput | sellersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sellers update
   */
  export type sellersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The data needed to update a sellers.
     */
    data: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
    /**
     * Choose, which sellers to update.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers updateMany
   */
  export type sellersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sellers.
     */
    data: XOR<sellersUpdateManyMutationInput, sellersUncheckedUpdateManyInput>
    /**
     * Filter which sellers to update
     */
    where?: sellersWhereInput
    /**
     * Limit how many sellers to update.
     */
    limit?: number
  }

  /**
   * sellers updateManyAndReturn
   */
  export type sellersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * The data used to update sellers.
     */
    data: XOR<sellersUpdateManyMutationInput, sellersUncheckedUpdateManyInput>
    /**
     * Filter which sellers to update
     */
    where?: sellersWhereInput
    /**
     * Limit how many sellers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sellers upsert
   */
  export type sellersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The filter to search for the sellers to update in case it exists.
     */
    where: sellersWhereUniqueInput
    /**
     * In case the sellers found by the `where` argument doesn't exist, create a new sellers with this data.
     */
    create: XOR<sellersCreateInput, sellersUncheckedCreateInput>
    /**
     * In case the sellers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
  }

  /**
   * sellers delete
   */
  export type sellersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter which sellers to delete.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers deleteMany
   */
  export type sellersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to delete
     */
    where?: sellersWhereInput
    /**
     * Limit how many sellers to delete.
     */
    limit?: number
  }

  /**
   * sellers.puppy_listings
   */
  export type sellers$puppy_listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puppies
     */
    select?: puppiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puppies
     */
    omit?: puppiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: puppiesInclude<ExtArgs> | null
    where?: puppiesWhereInput
    orderBy?: puppiesOrderByWithRelationInput | puppiesOrderByWithRelationInput[]
    cursor?: puppiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PuppiesScalarFieldEnum | PuppiesScalarFieldEnum[]
  }

  /**
   * sellers.cities
   */
  export type sellers$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    where?: citiesWhereInput
  }

  /**
   * sellers without action
   */
  export type sellersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CityProgressScalarFieldEnum: {
    id: 'id',
    city: 'city',
    status: 'status',
    pages: 'pages',
    date: 'date',
    priority: 'priority'
  };

  export type CityProgressScalarFieldEnum = (typeof CityProgressScalarFieldEnum)[keyof typeof CityProgressScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const PuppiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    age: 'age',
    breed: 'breed',
    listing_url: 'listing_url',
    seller_id: 'seller_id',
    scraped_at: 'scraped_at',
    processed_at: 'processed_at',
    source_date: 'source_date',
    folder_date: 'folder_date',
    folder_creation_date: 'folder_creation_date'
  };

  export type PuppiesScalarFieldEnum = (typeof PuppiesScalarFieldEnum)[keyof typeof PuppiesScalarFieldEnum]


  export const SellersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    location: 'location',
    city_id: 'city_id',
    created_at: 'created_at',
    city: 'city',
    puppies_count: 'puppies_count',
    source_date: 'source_date',
    folder_date: 'folder_date',
    folder_creation_date: 'folder_creation_date'
  };

  export type SellersScalarFieldEnum = (typeof SellersScalarFieldEnum)[keyof typeof SellersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CityProgressWhereInput = {
    AND?: CityProgressWhereInput | CityProgressWhereInput[]
    OR?: CityProgressWhereInput[]
    NOT?: CityProgressWhereInput | CityProgressWhereInput[]
    id?: IntFilter<"CityProgress"> | number
    city?: StringFilter<"CityProgress"> | string
    status?: StringNullableFilter<"CityProgress"> | string | null
    pages?: IntNullableFilter<"CityProgress"> | number | null
    date?: DateTimeNullableFilter<"CityProgress"> | Date | string | null
    priority?: IntNullableFilter<"CityProgress"> | number | null
  }

  export type CityProgressOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    status?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
  }

  export type CityProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    city_date?: CityProgressCityDateCompoundUniqueInput
    AND?: CityProgressWhereInput | CityProgressWhereInput[]
    OR?: CityProgressWhereInput[]
    NOT?: CityProgressWhereInput | CityProgressWhereInput[]
    city?: StringFilter<"CityProgress"> | string
    status?: StringNullableFilter<"CityProgress"> | string | null
    pages?: IntNullableFilter<"CityProgress"> | number | null
    date?: DateTimeNullableFilter<"CityProgress"> | Date | string | null
    priority?: IntNullableFilter<"CityProgress"> | number | null
  }, "id" | "city_date">

  export type CityProgressOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    status?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    _count?: CityProgressCountOrderByAggregateInput
    _avg?: CityProgressAvgOrderByAggregateInput
    _max?: CityProgressMaxOrderByAggregateInput
    _min?: CityProgressMinOrderByAggregateInput
    _sum?: CityProgressSumOrderByAggregateInput
  }

  export type CityProgressScalarWhereWithAggregatesInput = {
    AND?: CityProgressScalarWhereWithAggregatesInput | CityProgressScalarWhereWithAggregatesInput[]
    OR?: CityProgressScalarWhereWithAggregatesInput[]
    NOT?: CityProgressScalarWhereWithAggregatesInput | CityProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CityProgress"> | number
    city?: StringWithAggregatesFilter<"CityProgress"> | string
    status?: StringNullableWithAggregatesFilter<"CityProgress"> | string | null
    pages?: IntNullableWithAggregatesFilter<"CityProgress"> | number | null
    date?: DateTimeNullableWithAggregatesFilter<"CityProgress"> | Date | string | null
    priority?: IntNullableWithAggregatesFilter<"CityProgress"> | number | null
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    message?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactMessage"> | string
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type citiesWhereInput = {
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    id?: IntFilter<"cities"> | number
    name?: StringFilter<"cities"> | string
    sellers?: SellersListRelationFilter
  }

  export type citiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sellers?: sellersOrderByRelationAggregateInput
  }

  export type citiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    sellers?: SellersListRelationFilter
  }, "id" | "name">

  export type citiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: citiesCountOrderByAggregateInput
    _avg?: citiesAvgOrderByAggregateInput
    _max?: citiesMaxOrderByAggregateInput
    _min?: citiesMinOrderByAggregateInput
    _sum?: citiesSumOrderByAggregateInput
  }

  export type citiesScalarWhereWithAggregatesInput = {
    AND?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    OR?: citiesScalarWhereWithAggregatesInput[]
    NOT?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cities"> | number
    name?: StringWithAggregatesFilter<"cities"> | string
  }

  export type puppiesWhereInput = {
    AND?: puppiesWhereInput | puppiesWhereInput[]
    OR?: puppiesWhereInput[]
    NOT?: puppiesWhereInput | puppiesWhereInput[]
    id?: IntFilter<"puppies"> | number
    name?: StringNullableFilter<"puppies"> | string | null
    price?: StringNullableFilter<"puppies"> | string | null
    age?: StringNullableFilter<"puppies"> | string | null
    breed?: StringNullableFilter<"puppies"> | string | null
    listing_url?: StringNullableFilter<"puppies"> | string | null
    seller_id?: IntNullableFilter<"puppies"> | number | null
    scraped_at?: DateTimeNullableFilter<"puppies"> | Date | string | null
    processed_at?: DateTimeNullableFilter<"puppies"> | Date | string | null
    source_date?: DateTimeNullableFilter<"puppies"> | Date | string | null
    folder_date?: StringNullableFilter<"puppies"> | string | null
    folder_creation_date?: StringNullableFilter<"puppies"> | string | null
    sellers?: XOR<SellersNullableScalarRelationFilter, sellersWhereInput> | null
  }

  export type puppiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    breed?: SortOrderInput | SortOrder
    listing_url?: SortOrderInput | SortOrder
    seller_id?: SortOrderInput | SortOrder
    scraped_at?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    source_date?: SortOrderInput | SortOrder
    folder_date?: SortOrderInput | SortOrder
    folder_creation_date?: SortOrderInput | SortOrder
    sellers?: sellersOrderByWithRelationInput
  }

  export type puppiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    seller_id_listing_url?: puppiesSeller_idListing_urlCompoundUniqueInput
    AND?: puppiesWhereInput | puppiesWhereInput[]
    OR?: puppiesWhereInput[]
    NOT?: puppiesWhereInput | puppiesWhereInput[]
    name?: StringNullableFilter<"puppies"> | string | null
    price?: StringNullableFilter<"puppies"> | string | null
    age?: StringNullableFilter<"puppies"> | string | null
    breed?: StringNullableFilter<"puppies"> | string | null
    listing_url?: StringNullableFilter<"puppies"> | string | null
    seller_id?: IntNullableFilter<"puppies"> | number | null
    scraped_at?: DateTimeNullableFilter<"puppies"> | Date | string | null
    processed_at?: DateTimeNullableFilter<"puppies"> | Date | string | null
    source_date?: DateTimeNullableFilter<"puppies"> | Date | string | null
    folder_date?: StringNullableFilter<"puppies"> | string | null
    folder_creation_date?: StringNullableFilter<"puppies"> | string | null
    sellers?: XOR<SellersNullableScalarRelationFilter, sellersWhereInput> | null
  }, "id" | "seller_id_listing_url">

  export type puppiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    breed?: SortOrderInput | SortOrder
    listing_url?: SortOrderInput | SortOrder
    seller_id?: SortOrderInput | SortOrder
    scraped_at?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    source_date?: SortOrderInput | SortOrder
    folder_date?: SortOrderInput | SortOrder
    folder_creation_date?: SortOrderInput | SortOrder
    _count?: puppiesCountOrderByAggregateInput
    _avg?: puppiesAvgOrderByAggregateInput
    _max?: puppiesMaxOrderByAggregateInput
    _min?: puppiesMinOrderByAggregateInput
    _sum?: puppiesSumOrderByAggregateInput
  }

  export type puppiesScalarWhereWithAggregatesInput = {
    AND?: puppiesScalarWhereWithAggregatesInput | puppiesScalarWhereWithAggregatesInput[]
    OR?: puppiesScalarWhereWithAggregatesInput[]
    NOT?: puppiesScalarWhereWithAggregatesInput | puppiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"puppies"> | number
    name?: StringNullableWithAggregatesFilter<"puppies"> | string | null
    price?: StringNullableWithAggregatesFilter<"puppies"> | string | null
    age?: StringNullableWithAggregatesFilter<"puppies"> | string | null
    breed?: StringNullableWithAggregatesFilter<"puppies"> | string | null
    listing_url?: StringNullableWithAggregatesFilter<"puppies"> | string | null
    seller_id?: IntNullableWithAggregatesFilter<"puppies"> | number | null
    scraped_at?: DateTimeNullableWithAggregatesFilter<"puppies"> | Date | string | null
    processed_at?: DateTimeNullableWithAggregatesFilter<"puppies"> | Date | string | null
    source_date?: DateTimeNullableWithAggregatesFilter<"puppies"> | Date | string | null
    folder_date?: StringNullableWithAggregatesFilter<"puppies"> | string | null
    folder_creation_date?: StringNullableWithAggregatesFilter<"puppies"> | string | null
  }

  export type sellersWhereInput = {
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    id?: IntFilter<"sellers"> | number
    name?: StringFilter<"sellers"> | string
    phone?: StringNullableFilter<"sellers"> | string | null
    location?: StringNullableFilter<"sellers"> | string | null
    city_id?: IntNullableFilter<"sellers"> | number | null
    created_at?: DateTimeNullableFilter<"sellers"> | Date | string | null
    city?: StringNullableFilter<"sellers"> | string | null
    puppies_count?: IntNullableFilter<"sellers"> | number | null
    source_date?: DateTimeNullableFilter<"sellers"> | Date | string | null
    folder_date?: StringNullableFilter<"sellers"> | string | null
    folder_creation_date?: StringNullableFilter<"sellers"> | string | null
    puppy_listings?: PuppiesListRelationFilter
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
  }

  export type sellersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    puppies_count?: SortOrderInput | SortOrder
    source_date?: SortOrderInput | SortOrder
    folder_date?: SortOrderInput | SortOrder
    folder_creation_date?: SortOrderInput | SortOrder
    puppy_listings?: puppiesOrderByRelationAggregateInput
    cities?: citiesOrderByWithRelationInput
  }

  export type sellersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_phone_city?: sellersNamePhoneCityCompoundUniqueInput
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    name?: StringFilter<"sellers"> | string
    phone?: StringNullableFilter<"sellers"> | string | null
    location?: StringNullableFilter<"sellers"> | string | null
    city_id?: IntNullableFilter<"sellers"> | number | null
    created_at?: DateTimeNullableFilter<"sellers"> | Date | string | null
    city?: StringNullableFilter<"sellers"> | string | null
    puppies_count?: IntNullableFilter<"sellers"> | number | null
    source_date?: DateTimeNullableFilter<"sellers"> | Date | string | null
    folder_date?: StringNullableFilter<"sellers"> | string | null
    folder_creation_date?: StringNullableFilter<"sellers"> | string | null
    puppy_listings?: PuppiesListRelationFilter
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
  }, "id" | "name_phone_city">

  export type sellersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    puppies_count?: SortOrderInput | SortOrder
    source_date?: SortOrderInput | SortOrder
    folder_date?: SortOrderInput | SortOrder
    folder_creation_date?: SortOrderInput | SortOrder
    _count?: sellersCountOrderByAggregateInput
    _avg?: sellersAvgOrderByAggregateInput
    _max?: sellersMaxOrderByAggregateInput
    _min?: sellersMinOrderByAggregateInput
    _sum?: sellersSumOrderByAggregateInput
  }

  export type sellersScalarWhereWithAggregatesInput = {
    AND?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    OR?: sellersScalarWhereWithAggregatesInput[]
    NOT?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sellers"> | number
    name?: StringWithAggregatesFilter<"sellers"> | string
    phone?: StringNullableWithAggregatesFilter<"sellers"> | string | null
    location?: StringNullableWithAggregatesFilter<"sellers"> | string | null
    city_id?: IntNullableWithAggregatesFilter<"sellers"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"sellers"> | Date | string | null
    city?: StringNullableWithAggregatesFilter<"sellers"> | string | null
    puppies_count?: IntNullableWithAggregatesFilter<"sellers"> | number | null
    source_date?: DateTimeNullableWithAggregatesFilter<"sellers"> | Date | string | null
    folder_date?: StringNullableWithAggregatesFilter<"sellers"> | string | null
    folder_creation_date?: StringNullableWithAggregatesFilter<"sellers"> | string | null
  }

  export type CityProgressCreateInput = {
    city: string
    status?: string | null
    pages?: number | null
    date?: Date | string | null
    priority?: number | null
  }

  export type CityProgressUncheckedCreateInput = {
    id?: number
    city: string
    status?: string | null
    pages?: number | null
    date?: Date | string | null
    priority?: number | null
  }

  export type CityProgressUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CityProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CityProgressCreateManyInput = {
    id?: number
    city: string
    status?: string | null
    pages?: number | null
    date?: Date | string | null
    priority?: number | null
  }

  export type CityProgressUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CityProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContactMessageCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type citiesCreateInput = {
    name: string
    sellers?: sellersCreateNestedManyWithoutCitiesInput
  }

  export type citiesUncheckedCreateInput = {
    id?: number
    name: string
    sellers?: sellersUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sellers?: sellersUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sellers?: sellersUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type citiesCreateManyInput = {
    id?: number
    name: string
  }

  export type citiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type puppiesCreateInput = {
    name?: string | null
    price?: string | null
    age?: string | null
    breed?: string | null
    listing_url?: string | null
    scraped_at?: Date | string | null
    processed_at?: Date | string | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
    sellers?: sellersCreateNestedOneWithoutPuppy_listingsInput
  }

  export type puppiesUncheckedCreateInput = {
    id?: number
    name?: string | null
    price?: string | null
    age?: string | null
    breed?: string | null
    listing_url?: string | null
    seller_id?: number | null
    scraped_at?: Date | string | null
    processed_at?: Date | string | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type puppiesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    scraped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
    sellers?: sellersUpdateOneWithoutPuppy_listingsNestedInput
  }

  export type puppiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    scraped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type puppiesCreateManyInput = {
    id?: number
    name?: string | null
    price?: string | null
    age?: string | null
    breed?: string | null
    listing_url?: string | null
    seller_id?: number | null
    scraped_at?: Date | string | null
    processed_at?: Date | string | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type puppiesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    scraped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type puppiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    scraped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sellersCreateInput = {
    name: string
    phone?: string | null
    location?: string | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
    puppy_listings?: puppiesCreateNestedManyWithoutSellersInput
    cities?: citiesCreateNestedOneWithoutSellersInput
  }

  export type sellersUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    location?: string | null
    city_id?: number | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
    puppy_listings?: puppiesUncheckedCreateNestedManyWithoutSellersInput
  }

  export type sellersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
    puppy_listings?: puppiesUpdateManyWithoutSellersNestedInput
    cities?: citiesUpdateOneWithoutSellersNestedInput
  }

  export type sellersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
    puppy_listings?: puppiesUncheckedUpdateManyWithoutSellersNestedInput
  }

  export type sellersCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    location?: string | null
    city_id?: number | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type sellersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sellersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CityProgressCityDateCompoundUniqueInput = {
    city: string
    date: Date | string
  }

  export type CityProgressCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    status?: SortOrder
    pages?: SortOrder
    date?: SortOrder
    priority?: SortOrder
  }

  export type CityProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
    priority?: SortOrder
  }

  export type CityProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    status?: SortOrder
    pages?: SortOrder
    date?: SortOrder
    priority?: SortOrder
  }

  export type CityProgressMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    status?: SortOrder
    pages?: SortOrder
    date?: SortOrder
    priority?: SortOrder
  }

  export type CityProgressSumOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
    priority?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SellersListRelationFilter = {
    every?: sellersWhereInput
    some?: sellersWhereInput
    none?: sellersWhereInput
  }

  export type sellersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type citiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type citiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type citiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type citiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type citiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SellersNullableScalarRelationFilter = {
    is?: sellersWhereInput | null
    isNot?: sellersWhereInput | null
  }

  export type puppiesSeller_idListing_urlCompoundUniqueInput = {
    seller_id: number
    listing_url: string
  }

  export type puppiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    listing_url?: SortOrder
    seller_id?: SortOrder
    scraped_at?: SortOrder
    processed_at?: SortOrder
    source_date?: SortOrder
    folder_date?: SortOrder
    folder_creation_date?: SortOrder
  }

  export type puppiesAvgOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
  }

  export type puppiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    listing_url?: SortOrder
    seller_id?: SortOrder
    scraped_at?: SortOrder
    processed_at?: SortOrder
    source_date?: SortOrder
    folder_date?: SortOrder
    folder_creation_date?: SortOrder
  }

  export type puppiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    listing_url?: SortOrder
    seller_id?: SortOrder
    scraped_at?: SortOrder
    processed_at?: SortOrder
    source_date?: SortOrder
    folder_date?: SortOrder
    folder_creation_date?: SortOrder
  }

  export type puppiesSumOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
  }

  export type PuppiesListRelationFilter = {
    every?: puppiesWhereInput
    some?: puppiesWhereInput
    none?: puppiesWhereInput
  }

  export type CitiesNullableScalarRelationFilter = {
    is?: citiesWhereInput | null
    isNot?: citiesWhereInput | null
  }

  export type puppiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sellersNamePhoneCityCompoundUniqueInput = {
    name: string
    phone: string
    city: string
  }

  export type sellersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    puppies_count?: SortOrder
    source_date?: SortOrder
    folder_date?: SortOrder
    folder_creation_date?: SortOrder
  }

  export type sellersAvgOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
    puppies_count?: SortOrder
  }

  export type sellersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    puppies_count?: SortOrder
    source_date?: SortOrder
    folder_date?: SortOrder
    folder_creation_date?: SortOrder
  }

  export type sellersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    puppies_count?: SortOrder
    source_date?: SortOrder
    folder_date?: SortOrder
    folder_creation_date?: SortOrder
  }

  export type sellersSumOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
    puppies_count?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type sellersCreateNestedManyWithoutCitiesInput = {
    create?: XOR<sellersCreateWithoutCitiesInput, sellersUncheckedCreateWithoutCitiesInput> | sellersCreateWithoutCitiesInput[] | sellersUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutCitiesInput | sellersCreateOrConnectWithoutCitiesInput[]
    createMany?: sellersCreateManyCitiesInputEnvelope
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
  }

  export type sellersUncheckedCreateNestedManyWithoutCitiesInput = {
    create?: XOR<sellersCreateWithoutCitiesInput, sellersUncheckedCreateWithoutCitiesInput> | sellersCreateWithoutCitiesInput[] | sellersUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutCitiesInput | sellersCreateOrConnectWithoutCitiesInput[]
    createMany?: sellersCreateManyCitiesInputEnvelope
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
  }

  export type sellersUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<sellersCreateWithoutCitiesInput, sellersUncheckedCreateWithoutCitiesInput> | sellersCreateWithoutCitiesInput[] | sellersUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutCitiesInput | sellersCreateOrConnectWithoutCitiesInput[]
    upsert?: sellersUpsertWithWhereUniqueWithoutCitiesInput | sellersUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: sellersCreateManyCitiesInputEnvelope
    set?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    disconnect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    delete?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    update?: sellersUpdateWithWhereUniqueWithoutCitiesInput | sellersUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: sellersUpdateManyWithWhereWithoutCitiesInput | sellersUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: sellersScalarWhereInput | sellersScalarWhereInput[]
  }

  export type sellersUncheckedUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<sellersCreateWithoutCitiesInput, sellersUncheckedCreateWithoutCitiesInput> | sellersCreateWithoutCitiesInput[] | sellersUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutCitiesInput | sellersCreateOrConnectWithoutCitiesInput[]
    upsert?: sellersUpsertWithWhereUniqueWithoutCitiesInput | sellersUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: sellersCreateManyCitiesInputEnvelope
    set?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    disconnect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    delete?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    update?: sellersUpdateWithWhereUniqueWithoutCitiesInput | sellersUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: sellersUpdateManyWithWhereWithoutCitiesInput | sellersUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: sellersScalarWhereInput | sellersScalarWhereInput[]
  }

  export type sellersCreateNestedOneWithoutPuppy_listingsInput = {
    create?: XOR<sellersCreateWithoutPuppy_listingsInput, sellersUncheckedCreateWithoutPuppy_listingsInput>
    connectOrCreate?: sellersCreateOrConnectWithoutPuppy_listingsInput
    connect?: sellersWhereUniqueInput
  }

  export type sellersUpdateOneWithoutPuppy_listingsNestedInput = {
    create?: XOR<sellersCreateWithoutPuppy_listingsInput, sellersUncheckedCreateWithoutPuppy_listingsInput>
    connectOrCreate?: sellersCreateOrConnectWithoutPuppy_listingsInput
    upsert?: sellersUpsertWithoutPuppy_listingsInput
    disconnect?: sellersWhereInput | boolean
    delete?: sellersWhereInput | boolean
    connect?: sellersWhereUniqueInput
    update?: XOR<XOR<sellersUpdateToOneWithWhereWithoutPuppy_listingsInput, sellersUpdateWithoutPuppy_listingsInput>, sellersUncheckedUpdateWithoutPuppy_listingsInput>
  }

  export type puppiesCreateNestedManyWithoutSellersInput = {
    create?: XOR<puppiesCreateWithoutSellersInput, puppiesUncheckedCreateWithoutSellersInput> | puppiesCreateWithoutSellersInput[] | puppiesUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: puppiesCreateOrConnectWithoutSellersInput | puppiesCreateOrConnectWithoutSellersInput[]
    createMany?: puppiesCreateManySellersInputEnvelope
    connect?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
  }

  export type citiesCreateNestedOneWithoutSellersInput = {
    create?: XOR<citiesCreateWithoutSellersInput, citiesUncheckedCreateWithoutSellersInput>
    connectOrCreate?: citiesCreateOrConnectWithoutSellersInput
    connect?: citiesWhereUniqueInput
  }

  export type puppiesUncheckedCreateNestedManyWithoutSellersInput = {
    create?: XOR<puppiesCreateWithoutSellersInput, puppiesUncheckedCreateWithoutSellersInput> | puppiesCreateWithoutSellersInput[] | puppiesUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: puppiesCreateOrConnectWithoutSellersInput | puppiesCreateOrConnectWithoutSellersInput[]
    createMany?: puppiesCreateManySellersInputEnvelope
    connect?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
  }

  export type puppiesUpdateManyWithoutSellersNestedInput = {
    create?: XOR<puppiesCreateWithoutSellersInput, puppiesUncheckedCreateWithoutSellersInput> | puppiesCreateWithoutSellersInput[] | puppiesUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: puppiesCreateOrConnectWithoutSellersInput | puppiesCreateOrConnectWithoutSellersInput[]
    upsert?: puppiesUpsertWithWhereUniqueWithoutSellersInput | puppiesUpsertWithWhereUniqueWithoutSellersInput[]
    createMany?: puppiesCreateManySellersInputEnvelope
    set?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    disconnect?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    delete?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    connect?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    update?: puppiesUpdateWithWhereUniqueWithoutSellersInput | puppiesUpdateWithWhereUniqueWithoutSellersInput[]
    updateMany?: puppiesUpdateManyWithWhereWithoutSellersInput | puppiesUpdateManyWithWhereWithoutSellersInput[]
    deleteMany?: puppiesScalarWhereInput | puppiesScalarWhereInput[]
  }

  export type citiesUpdateOneWithoutSellersNestedInput = {
    create?: XOR<citiesCreateWithoutSellersInput, citiesUncheckedCreateWithoutSellersInput>
    connectOrCreate?: citiesCreateOrConnectWithoutSellersInput
    upsert?: citiesUpsertWithoutSellersInput
    disconnect?: citiesWhereInput | boolean
    delete?: citiesWhereInput | boolean
    connect?: citiesWhereUniqueInput
    update?: XOR<XOR<citiesUpdateToOneWithWhereWithoutSellersInput, citiesUpdateWithoutSellersInput>, citiesUncheckedUpdateWithoutSellersInput>
  }

  export type puppiesUncheckedUpdateManyWithoutSellersNestedInput = {
    create?: XOR<puppiesCreateWithoutSellersInput, puppiesUncheckedCreateWithoutSellersInput> | puppiesCreateWithoutSellersInput[] | puppiesUncheckedCreateWithoutSellersInput[]
    connectOrCreate?: puppiesCreateOrConnectWithoutSellersInput | puppiesCreateOrConnectWithoutSellersInput[]
    upsert?: puppiesUpsertWithWhereUniqueWithoutSellersInput | puppiesUpsertWithWhereUniqueWithoutSellersInput[]
    createMany?: puppiesCreateManySellersInputEnvelope
    set?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    disconnect?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    delete?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    connect?: puppiesWhereUniqueInput | puppiesWhereUniqueInput[]
    update?: puppiesUpdateWithWhereUniqueWithoutSellersInput | puppiesUpdateWithWhereUniqueWithoutSellersInput[]
    updateMany?: puppiesUpdateManyWithWhereWithoutSellersInput | puppiesUpdateManyWithWhereWithoutSellersInput[]
    deleteMany?: puppiesScalarWhereInput | puppiesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sellersCreateWithoutCitiesInput = {
    name: string
    phone?: string | null
    location?: string | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
    puppy_listings?: puppiesCreateNestedManyWithoutSellersInput
  }

  export type sellersUncheckedCreateWithoutCitiesInput = {
    id?: number
    name: string
    phone?: string | null
    location?: string | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
    puppy_listings?: puppiesUncheckedCreateNestedManyWithoutSellersInput
  }

  export type sellersCreateOrConnectWithoutCitiesInput = {
    where: sellersWhereUniqueInput
    create: XOR<sellersCreateWithoutCitiesInput, sellersUncheckedCreateWithoutCitiesInput>
  }

  export type sellersCreateManyCitiesInputEnvelope = {
    data: sellersCreateManyCitiesInput | sellersCreateManyCitiesInput[]
    skipDuplicates?: boolean
  }

  export type sellersUpsertWithWhereUniqueWithoutCitiesInput = {
    where: sellersWhereUniqueInput
    update: XOR<sellersUpdateWithoutCitiesInput, sellersUncheckedUpdateWithoutCitiesInput>
    create: XOR<sellersCreateWithoutCitiesInput, sellersUncheckedCreateWithoutCitiesInput>
  }

  export type sellersUpdateWithWhereUniqueWithoutCitiesInput = {
    where: sellersWhereUniqueInput
    data: XOR<sellersUpdateWithoutCitiesInput, sellersUncheckedUpdateWithoutCitiesInput>
  }

  export type sellersUpdateManyWithWhereWithoutCitiesInput = {
    where: sellersScalarWhereInput
    data: XOR<sellersUpdateManyMutationInput, sellersUncheckedUpdateManyWithoutCitiesInput>
  }

  export type sellersScalarWhereInput = {
    AND?: sellersScalarWhereInput | sellersScalarWhereInput[]
    OR?: sellersScalarWhereInput[]
    NOT?: sellersScalarWhereInput | sellersScalarWhereInput[]
    id?: IntFilter<"sellers"> | number
    name?: StringFilter<"sellers"> | string
    phone?: StringNullableFilter<"sellers"> | string | null
    location?: StringNullableFilter<"sellers"> | string | null
    city_id?: IntNullableFilter<"sellers"> | number | null
    created_at?: DateTimeNullableFilter<"sellers"> | Date | string | null
    city?: StringNullableFilter<"sellers"> | string | null
    puppies_count?: IntNullableFilter<"sellers"> | number | null
    source_date?: DateTimeNullableFilter<"sellers"> | Date | string | null
    folder_date?: StringNullableFilter<"sellers"> | string | null
    folder_creation_date?: StringNullableFilter<"sellers"> | string | null
  }

  export type sellersCreateWithoutPuppy_listingsInput = {
    name: string
    phone?: string | null
    location?: string | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
    cities?: citiesCreateNestedOneWithoutSellersInput
  }

  export type sellersUncheckedCreateWithoutPuppy_listingsInput = {
    id?: number
    name: string
    phone?: string | null
    location?: string | null
    city_id?: number | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type sellersCreateOrConnectWithoutPuppy_listingsInput = {
    where: sellersWhereUniqueInput
    create: XOR<sellersCreateWithoutPuppy_listingsInput, sellersUncheckedCreateWithoutPuppy_listingsInput>
  }

  export type sellersUpsertWithoutPuppy_listingsInput = {
    update: XOR<sellersUpdateWithoutPuppy_listingsInput, sellersUncheckedUpdateWithoutPuppy_listingsInput>
    create: XOR<sellersCreateWithoutPuppy_listingsInput, sellersUncheckedCreateWithoutPuppy_listingsInput>
    where?: sellersWhereInput
  }

  export type sellersUpdateToOneWithWhereWithoutPuppy_listingsInput = {
    where?: sellersWhereInput
    data: XOR<sellersUpdateWithoutPuppy_listingsInput, sellersUncheckedUpdateWithoutPuppy_listingsInput>
  }

  export type sellersUpdateWithoutPuppy_listingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: citiesUpdateOneWithoutSellersNestedInput
  }

  export type sellersUncheckedUpdateWithoutPuppy_listingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type puppiesCreateWithoutSellersInput = {
    name?: string | null
    price?: string | null
    age?: string | null
    breed?: string | null
    listing_url?: string | null
    scraped_at?: Date | string | null
    processed_at?: Date | string | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type puppiesUncheckedCreateWithoutSellersInput = {
    id?: number
    name?: string | null
    price?: string | null
    age?: string | null
    breed?: string | null
    listing_url?: string | null
    scraped_at?: Date | string | null
    processed_at?: Date | string | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type puppiesCreateOrConnectWithoutSellersInput = {
    where: puppiesWhereUniqueInput
    create: XOR<puppiesCreateWithoutSellersInput, puppiesUncheckedCreateWithoutSellersInput>
  }

  export type puppiesCreateManySellersInputEnvelope = {
    data: puppiesCreateManySellersInput | puppiesCreateManySellersInput[]
    skipDuplicates?: boolean
  }

  export type citiesCreateWithoutSellersInput = {
    name: string
  }

  export type citiesUncheckedCreateWithoutSellersInput = {
    id?: number
    name: string
  }

  export type citiesCreateOrConnectWithoutSellersInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutSellersInput, citiesUncheckedCreateWithoutSellersInput>
  }

  export type puppiesUpsertWithWhereUniqueWithoutSellersInput = {
    where: puppiesWhereUniqueInput
    update: XOR<puppiesUpdateWithoutSellersInput, puppiesUncheckedUpdateWithoutSellersInput>
    create: XOR<puppiesCreateWithoutSellersInput, puppiesUncheckedCreateWithoutSellersInput>
  }

  export type puppiesUpdateWithWhereUniqueWithoutSellersInput = {
    where: puppiesWhereUniqueInput
    data: XOR<puppiesUpdateWithoutSellersInput, puppiesUncheckedUpdateWithoutSellersInput>
  }

  export type puppiesUpdateManyWithWhereWithoutSellersInput = {
    where: puppiesScalarWhereInput
    data: XOR<puppiesUpdateManyMutationInput, puppiesUncheckedUpdateManyWithoutSellersInput>
  }

  export type puppiesScalarWhereInput = {
    AND?: puppiesScalarWhereInput | puppiesScalarWhereInput[]
    OR?: puppiesScalarWhereInput[]
    NOT?: puppiesScalarWhereInput | puppiesScalarWhereInput[]
    id?: IntFilter<"puppies"> | number
    name?: StringNullableFilter<"puppies"> | string | null
    price?: StringNullableFilter<"puppies"> | string | null
    age?: StringNullableFilter<"puppies"> | string | null
    breed?: StringNullableFilter<"puppies"> | string | null
    listing_url?: StringNullableFilter<"puppies"> | string | null
    seller_id?: IntNullableFilter<"puppies"> | number | null
    scraped_at?: DateTimeNullableFilter<"puppies"> | Date | string | null
    processed_at?: DateTimeNullableFilter<"puppies"> | Date | string | null
    source_date?: DateTimeNullableFilter<"puppies"> | Date | string | null
    folder_date?: StringNullableFilter<"puppies"> | string | null
    folder_creation_date?: StringNullableFilter<"puppies"> | string | null
  }

  export type citiesUpsertWithoutSellersInput = {
    update: XOR<citiesUpdateWithoutSellersInput, citiesUncheckedUpdateWithoutSellersInput>
    create: XOR<citiesCreateWithoutSellersInput, citiesUncheckedCreateWithoutSellersInput>
    where?: citiesWhereInput
  }

  export type citiesUpdateToOneWithWhereWithoutSellersInput = {
    where?: citiesWhereInput
    data: XOR<citiesUpdateWithoutSellersInput, citiesUncheckedUpdateWithoutSellersInput>
  }

  export type citiesUpdateWithoutSellersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateWithoutSellersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type sellersCreateManyCitiesInput = {
    id?: number
    name: string
    phone?: string | null
    location?: string | null
    created_at?: Date | string | null
    city?: string | null
    puppies_count?: number | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type sellersUpdateWithoutCitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
    puppy_listings?: puppiesUpdateManyWithoutSellersNestedInput
  }

  export type sellersUncheckedUpdateWithoutCitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
    puppy_listings?: puppiesUncheckedUpdateManyWithoutSellersNestedInput
  }

  export type sellersUncheckedUpdateManyWithoutCitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    puppies_count?: NullableIntFieldUpdateOperationsInput | number | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type puppiesCreateManySellersInput = {
    id?: number
    name?: string | null
    price?: string | null
    age?: string | null
    breed?: string | null
    listing_url?: string | null
    scraped_at?: Date | string | null
    processed_at?: Date | string | null
    source_date?: Date | string | null
    folder_date?: string | null
    folder_creation_date?: string | null
  }

  export type puppiesUpdateWithoutSellersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    scraped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type puppiesUncheckedUpdateWithoutSellersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    scraped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type puppiesUncheckedUpdateManyWithoutSellersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    scraped_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    folder_date?: NullableStringFieldUpdateOperationsInput | string | null
    folder_creation_date?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}