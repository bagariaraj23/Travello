
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model ReelTemplate
 * 
 */
export type ReelTemplate = $Result.DefaultSelection<Prisma.$ReelTemplatePayload>
/**
 * Model Reel
 * 
 */
export type Reel = $Result.DefaultSelection<Prisma.$ReelPayload>
/**
 * Model ReelClip
 * 
 */
export type ReelClip = $Result.DefaultSelection<Prisma.$ReelClipPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reelTemplate`: Exposes CRUD operations for the **ReelTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReelTemplates
    * const reelTemplates = await prisma.reelTemplate.findMany()
    * ```
    */
  get reelTemplate(): Prisma.ReelTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reel`: Exposes CRUD operations for the **Reel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reels
    * const reels = await prisma.reel.findMany()
    * ```
    */
  get reel(): Prisma.ReelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reelClip`: Exposes CRUD operations for the **ReelClip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReelClips
    * const reelClips = await prisma.reelClip.findMany()
    * ```
    */
  get reelClip(): Prisma.ReelClipDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Trip: 'Trip',
    Media: 'Media',
    Log: 'Log',
    ReelTemplate: 'ReelTemplate',
    Reel: 'Reel',
    ReelClip: 'ReelClip'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trip" | "media" | "log" | "reelTemplate" | "reel" | "reelClip"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      ReelTemplate: {
        payload: Prisma.$ReelTemplatePayload<ExtArgs>
        fields: Prisma.ReelTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReelTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReelTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload>
          }
          findFirst: {
            args: Prisma.ReelTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReelTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload>
          }
          findMany: {
            args: Prisma.ReelTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload>[]
          }
          create: {
            args: Prisma.ReelTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload>
          }
          createMany: {
            args: Prisma.ReelTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReelTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload>
          }
          update: {
            args: Prisma.ReelTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ReelTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReelTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReelTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelTemplatePayload>
          }
          aggregate: {
            args: Prisma.ReelTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReelTemplate>
          }
          groupBy: {
            args: Prisma.ReelTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReelTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReelTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ReelTemplateCountAggregateOutputType> | number
          }
        }
      }
      Reel: {
        payload: Prisma.$ReelPayload<ExtArgs>
        fields: Prisma.ReelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          findFirst: {
            args: Prisma.ReelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          findMany: {
            args: Prisma.ReelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>[]
          }
          create: {
            args: Prisma.ReelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          createMany: {
            args: Prisma.ReelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          update: {
            args: Prisma.ReelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          deleteMany: {
            args: Prisma.ReelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelPayload>
          }
          aggregate: {
            args: Prisma.ReelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReel>
          }
          groupBy: {
            args: Prisma.ReelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReelCountArgs<ExtArgs>
            result: $Utils.Optional<ReelCountAggregateOutputType> | number
          }
        }
      }
      ReelClip: {
        payload: Prisma.$ReelClipPayload<ExtArgs>
        fields: Prisma.ReelClipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReelClipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReelClipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload>
          }
          findFirst: {
            args: Prisma.ReelClipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReelClipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload>
          }
          findMany: {
            args: Prisma.ReelClipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload>[]
          }
          create: {
            args: Prisma.ReelClipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload>
          }
          createMany: {
            args: Prisma.ReelClipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReelClipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload>
          }
          update: {
            args: Prisma.ReelClipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload>
          }
          deleteMany: {
            args: Prisma.ReelClipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReelClipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReelClipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelClipPayload>
          }
          aggregate: {
            args: Prisma.ReelClipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReelClip>
          }
          groupBy: {
            args: Prisma.ReelClipGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReelClipGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReelClipCountArgs<ExtArgs>
            result: $Utils.Optional<ReelClipCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trip?: TripOmit
    media?: MediaOmit
    log?: LogOmit
    reelTemplate?: ReelTemplateOmit
    reel?: ReelOmit
    reelClip?: ReelClipOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trips: number
    media: number
    reels: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UserCountOutputTypeCountTripsArgs
    media?: boolean | UserCountOutputTypeCountMediaArgs
    reels?: boolean | UserCountOutputTypeCountReelsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    media: number
    reels: number
    logs: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | TripCountOutputTypeCountMediaArgs
    reels?: boolean | TripCountOutputTypeCountReelsArgs
    logs?: boolean | TripCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountReelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    reelClips: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reelClips?: boolean | MediaCountOutputTypeCountReelClipsArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountReelClipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelClipWhereInput
  }


  /**
   * Count Type ReelTemplateCountOutputType
   */

  export type ReelTemplateCountOutputType = {
    reels: number
  }

  export type ReelTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reels?: boolean | ReelTemplateCountOutputTypeCountReelsArgs
  }

  // Custom InputTypes
  /**
   * ReelTemplateCountOutputType without action
   */
  export type ReelTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplateCountOutputType
     */
    select?: ReelTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReelTemplateCountOutputType without action
   */
  export type ReelTemplateCountOutputTypeCountReelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelWhereInput
  }


  /**
   * Count Type ReelCountOutputType
   */

  export type ReelCountOutputType = {
    clips: number
  }

  export type ReelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clips?: boolean | ReelCountOutputTypeCountClipsArgs
  }

  // Custom InputTypes
  /**
   * ReelCountOutputType without action
   */
  export type ReelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelCountOutputType
     */
    select?: ReelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReelCountOutputType without action
   */
  export type ReelCountOutputTypeCountClipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelClipWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    username: string | null
    password: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    username: string | null
    password: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    username: number
    password: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    username: string | null
    password: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | User$tripsArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    reels?: boolean | User$reelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "username" | "password" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | User$tripsArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    reels?: boolean | User$reelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      reels: Prisma.$ReelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      username: string | null
      password: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends User$tripsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends User$mediaArgs<ExtArgs> = {}>(args?: Subset<T, User$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reels<T extends User$reelsArgs<ExtArgs> = {}>(args?: Subset<T, User$reelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.trips
   */
  export type User$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.media
   */
  export type User$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * User.reels
   */
  export type User$reelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    where?: ReelWhereInput
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    cursor?: ReelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    title: number
    description: number
    destination: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TripMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    destination?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    destination?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    destination?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    title: string
    description: string | null
    destination: string
    startDate: Date | null
    endDate: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | Trip$mediaArgs<ExtArgs>
    reels?: boolean | Trip$reelsArgs<ExtArgs>
    logs?: boolean | Trip$logsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>



  export type TripSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "destination" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | Trip$mediaArgs<ExtArgs>
    reels?: boolean | Trip$reelsArgs<ExtArgs>
    logs?: boolean | Trip$logsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>[]
      reels: Prisma.$ReelPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      destination: string
      startDate: Date | null
      endDate: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Trip$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Trip$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reels<T extends Trip$reelsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$reelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Trip$logsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trip model
   */ 
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly description: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly status: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
    readonly userId: FieldRef<"Trip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.media
   */
  export type Trip$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Trip.reels
   */
  export type Trip$reelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    where?: ReelWhereInput
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    cursor?: ReelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * Trip.logs
   */
  export type Trip$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    mediaUrl: string | null
    mediaType: string | null
    caption: string | null
    location: string | null
    timestamp: Date | null
    createdAt: Date | null
    tripId: string | null
    userId: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    mediaUrl: string | null
    mediaType: string | null
    caption: string | null
    location: string | null
    timestamp: Date | null
    createdAt: Date | null
    tripId: string | null
    userId: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    mediaUrl: number
    mediaType: number
    caption: number
    location: number
    metadata: number
    timestamp: number
    createdAt: number
    tripId: number
    userId: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    mediaUrl?: true
    mediaType?: true
    caption?: true
    location?: true
    timestamp?: true
    createdAt?: true
    tripId?: true
    userId?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    mediaUrl?: true
    mediaType?: true
    caption?: true
    location?: true
    timestamp?: true
    createdAt?: true
    tripId?: true
    userId?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    mediaUrl?: true
    mediaType?: true
    caption?: true
    location?: true
    metadata?: true
    timestamp?: true
    createdAt?: true
    tripId?: true
    userId?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    mediaUrl: string
    mediaType: string
    caption: string | null
    location: string | null
    metadata: JsonValue | null
    timestamp: Date
    createdAt: Date
    tripId: string
    userId: string
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    caption?: boolean
    location?: boolean
    metadata?: boolean
    timestamp?: boolean
    createdAt?: boolean
    tripId?: boolean
    userId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reelClips?: boolean | Media$reelClipsArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>



  export type MediaSelectScalar = {
    id?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    caption?: boolean
    location?: boolean
    metadata?: boolean
    timestamp?: boolean
    createdAt?: boolean
    tripId?: boolean
    userId?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mediaUrl" | "mediaType" | "caption" | "location" | "metadata" | "timestamp" | "createdAt" | "tripId" | "userId", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reelClips?: boolean | Media$reelClipsArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      reelClips: Prisma.$ReelClipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mediaUrl: string
      mediaType: string
      caption: string | null
      location: string | null
      metadata: Prisma.JsonValue | null
      timestamp: Date
      createdAt: Date
      tripId: string
      userId: string
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reelClips<T extends Media$reelClipsArgs<ExtArgs> = {}>(args?: Subset<T, Media$reelClipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Media model
   */ 
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly mediaUrl: FieldRef<"Media", 'String'>
    readonly mediaType: FieldRef<"Media", 'String'>
    readonly caption: FieldRef<"Media", 'String'>
    readonly location: FieldRef<"Media", 'String'>
    readonly metadata: FieldRef<"Media", 'Json'>
    readonly timestamp: FieldRef<"Media", 'DateTime'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly tripId: FieldRef<"Media", 'String'>
    readonly userId: FieldRef<"Media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.reelClips
   */
  export type Media$reelClipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    where?: ReelClipWhereInput
    orderBy?: ReelClipOrderByWithRelationInput | ReelClipOrderByWithRelationInput[]
    cursor?: ReelClipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReelClipScalarFieldEnum | ReelClipScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    tripId: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    tripId: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    content: number
    timestamp: number
    tripId: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    tripId?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    tripId?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    tripId?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    content: string
    timestamp: Date
    tripId: string
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    tripId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>



  export type LogSelectScalar = {
    id?: boolean
    content?: boolean
    timestamp?: boolean
    tripId?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "timestamp" | "tripId", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      timestamp: Date
      tripId: string
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly content: FieldRef<"Log", 'String'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
    readonly tripId: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model ReelTemplate
   */

  export type AggregateReelTemplate = {
    _count: ReelTemplateCountAggregateOutputType | null
    _avg: ReelTemplateAvgAggregateOutputType | null
    _sum: ReelTemplateSumAggregateOutputType | null
    _min: ReelTemplateMinAggregateOutputType | null
    _max: ReelTemplateMaxAggregateOutputType | null
  }

  export type ReelTemplateAvgAggregateOutputType = {
    duration: number | null
  }

  export type ReelTemplateSumAggregateOutputType = {
    duration: number | null
  }

  export type ReelTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    duration: number | null
    style: string | null
    createdAt: Date | null
  }

  export type ReelTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    duration: number | null
    style: string | null
    createdAt: Date | null
  }

  export type ReelTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    duration: number
    style: number
    config: number
    createdAt: number
    _all: number
  }


  export type ReelTemplateAvgAggregateInputType = {
    duration?: true
  }

  export type ReelTemplateSumAggregateInputType = {
    duration?: true
  }

  export type ReelTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    style?: true
    createdAt?: true
  }

  export type ReelTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    style?: true
    createdAt?: true
  }

  export type ReelTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    style?: true
    config?: true
    createdAt?: true
    _all?: true
  }

  export type ReelTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelTemplate to aggregate.
     */
    where?: ReelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelTemplates to fetch.
     */
    orderBy?: ReelTemplateOrderByWithRelationInput | ReelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReelTemplates
    **/
    _count?: true | ReelTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReelTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReelTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReelTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReelTemplateMaxAggregateInputType
  }

  export type GetReelTemplateAggregateType<T extends ReelTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateReelTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReelTemplate[P]>
      : GetScalarType<T[P], AggregateReelTemplate[P]>
  }




  export type ReelTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelTemplateWhereInput
    orderBy?: ReelTemplateOrderByWithAggregationInput | ReelTemplateOrderByWithAggregationInput[]
    by: ReelTemplateScalarFieldEnum[] | ReelTemplateScalarFieldEnum
    having?: ReelTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReelTemplateCountAggregateInputType | true
    _avg?: ReelTemplateAvgAggregateInputType
    _sum?: ReelTemplateSumAggregateInputType
    _min?: ReelTemplateMinAggregateInputType
    _max?: ReelTemplateMaxAggregateInputType
  }

  export type ReelTemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    duration: number
    style: string
    config: JsonValue
    createdAt: Date
    _count: ReelTemplateCountAggregateOutputType | null
    _avg: ReelTemplateAvgAggregateOutputType | null
    _sum: ReelTemplateSumAggregateOutputType | null
    _min: ReelTemplateMinAggregateOutputType | null
    _max: ReelTemplateMaxAggregateOutputType | null
  }

  type GetReelTemplateGroupByPayload<T extends ReelTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReelTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReelTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReelTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ReelTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ReelTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    style?: boolean
    config?: boolean
    createdAt?: boolean
    reels?: boolean | ReelTemplate$reelsArgs<ExtArgs>
    _count?: boolean | ReelTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reelTemplate"]>



  export type ReelTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    style?: boolean
    config?: boolean
    createdAt?: boolean
  }

  export type ReelTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "duration" | "style" | "config" | "createdAt", ExtArgs["result"]["reelTemplate"]>
  export type ReelTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reels?: boolean | ReelTemplate$reelsArgs<ExtArgs>
    _count?: boolean | ReelTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReelTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReelTemplate"
    objects: {
      reels: Prisma.$ReelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      duration: number
      style: string
      config: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["reelTemplate"]>
    composites: {}
  }

  type ReelTemplateGetPayload<S extends boolean | null | undefined | ReelTemplateDefaultArgs> = $Result.GetResult<Prisma.$ReelTemplatePayload, S>

  type ReelTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReelTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReelTemplateCountAggregateInputType | true
    }

  export interface ReelTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReelTemplate'], meta: { name: 'ReelTemplate' } }
    /**
     * Find zero or one ReelTemplate that matches the filter.
     * @param {ReelTemplateFindUniqueArgs} args - Arguments to find a ReelTemplate
     * @example
     * // Get one ReelTemplate
     * const reelTemplate = await prisma.reelTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReelTemplateFindUniqueArgs>(args: SelectSubset<T, ReelTemplateFindUniqueArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReelTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReelTemplateFindUniqueOrThrowArgs} args - Arguments to find a ReelTemplate
     * @example
     * // Get one ReelTemplate
     * const reelTemplate = await prisma.reelTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReelTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ReelTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReelTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelTemplateFindFirstArgs} args - Arguments to find a ReelTemplate
     * @example
     * // Get one ReelTemplate
     * const reelTemplate = await prisma.reelTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReelTemplateFindFirstArgs>(args?: SelectSubset<T, ReelTemplateFindFirstArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReelTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelTemplateFindFirstOrThrowArgs} args - Arguments to find a ReelTemplate
     * @example
     * // Get one ReelTemplate
     * const reelTemplate = await prisma.reelTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReelTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ReelTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReelTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReelTemplates
     * const reelTemplates = await prisma.reelTemplate.findMany()
     * 
     * // Get first 10 ReelTemplates
     * const reelTemplates = await prisma.reelTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reelTemplateWithIdOnly = await prisma.reelTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReelTemplateFindManyArgs>(args?: SelectSubset<T, ReelTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReelTemplate.
     * @param {ReelTemplateCreateArgs} args - Arguments to create a ReelTemplate.
     * @example
     * // Create one ReelTemplate
     * const ReelTemplate = await prisma.reelTemplate.create({
     *   data: {
     *     // ... data to create a ReelTemplate
     *   }
     * })
     * 
     */
    create<T extends ReelTemplateCreateArgs>(args: SelectSubset<T, ReelTemplateCreateArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReelTemplates.
     * @param {ReelTemplateCreateManyArgs} args - Arguments to create many ReelTemplates.
     * @example
     * // Create many ReelTemplates
     * const reelTemplate = await prisma.reelTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReelTemplateCreateManyArgs>(args?: SelectSubset<T, ReelTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReelTemplate.
     * @param {ReelTemplateDeleteArgs} args - Arguments to delete one ReelTemplate.
     * @example
     * // Delete one ReelTemplate
     * const ReelTemplate = await prisma.reelTemplate.delete({
     *   where: {
     *     // ... filter to delete one ReelTemplate
     *   }
     * })
     * 
     */
    delete<T extends ReelTemplateDeleteArgs>(args: SelectSubset<T, ReelTemplateDeleteArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReelTemplate.
     * @param {ReelTemplateUpdateArgs} args - Arguments to update one ReelTemplate.
     * @example
     * // Update one ReelTemplate
     * const reelTemplate = await prisma.reelTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReelTemplateUpdateArgs>(args: SelectSubset<T, ReelTemplateUpdateArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReelTemplates.
     * @param {ReelTemplateDeleteManyArgs} args - Arguments to filter ReelTemplates to delete.
     * @example
     * // Delete a few ReelTemplates
     * const { count } = await prisma.reelTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReelTemplateDeleteManyArgs>(args?: SelectSubset<T, ReelTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReelTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReelTemplates
     * const reelTemplate = await prisma.reelTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReelTemplateUpdateManyArgs>(args: SelectSubset<T, ReelTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReelTemplate.
     * @param {ReelTemplateUpsertArgs} args - Arguments to update or create a ReelTemplate.
     * @example
     * // Update or create a ReelTemplate
     * const reelTemplate = await prisma.reelTemplate.upsert({
     *   create: {
     *     // ... data to create a ReelTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReelTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ReelTemplateUpsertArgs>(args: SelectSubset<T, ReelTemplateUpsertArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReelTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelTemplateCountArgs} args - Arguments to filter ReelTemplates to count.
     * @example
     * // Count the number of ReelTemplates
     * const count = await prisma.reelTemplate.count({
     *   where: {
     *     // ... the filter for the ReelTemplates we want to count
     *   }
     * })
    **/
    count<T extends ReelTemplateCountArgs>(
      args?: Subset<T, ReelTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReelTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReelTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReelTemplateAggregateArgs>(args: Subset<T, ReelTemplateAggregateArgs>): Prisma.PrismaPromise<GetReelTemplateAggregateType<T>>

    /**
     * Group by ReelTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelTemplateGroupByArgs} args - Group by arguments.
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
      T extends ReelTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReelTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ReelTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReelTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReelTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReelTemplate model
   */
  readonly fields: ReelTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReelTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReelTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reels<T extends ReelTemplate$reelsArgs<ExtArgs> = {}>(args?: Subset<T, ReelTemplate$reelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReelTemplate model
   */ 
  interface ReelTemplateFieldRefs {
    readonly id: FieldRef<"ReelTemplate", 'String'>
    readonly name: FieldRef<"ReelTemplate", 'String'>
    readonly description: FieldRef<"ReelTemplate", 'String'>
    readonly duration: FieldRef<"ReelTemplate", 'Int'>
    readonly style: FieldRef<"ReelTemplate", 'String'>
    readonly config: FieldRef<"ReelTemplate", 'Json'>
    readonly createdAt: FieldRef<"ReelTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReelTemplate findUnique
   */
  export type ReelTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ReelTemplate to fetch.
     */
    where: ReelTemplateWhereUniqueInput
  }

  /**
   * ReelTemplate findUniqueOrThrow
   */
  export type ReelTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ReelTemplate to fetch.
     */
    where: ReelTemplateWhereUniqueInput
  }

  /**
   * ReelTemplate findFirst
   */
  export type ReelTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ReelTemplate to fetch.
     */
    where?: ReelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelTemplates to fetch.
     */
    orderBy?: ReelTemplateOrderByWithRelationInput | ReelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelTemplates.
     */
    cursor?: ReelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelTemplates.
     */
    distinct?: ReelTemplateScalarFieldEnum | ReelTemplateScalarFieldEnum[]
  }

  /**
   * ReelTemplate findFirstOrThrow
   */
  export type ReelTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ReelTemplate to fetch.
     */
    where?: ReelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelTemplates to fetch.
     */
    orderBy?: ReelTemplateOrderByWithRelationInput | ReelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelTemplates.
     */
    cursor?: ReelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelTemplates.
     */
    distinct?: ReelTemplateScalarFieldEnum | ReelTemplateScalarFieldEnum[]
  }

  /**
   * ReelTemplate findMany
   */
  export type ReelTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ReelTemplates to fetch.
     */
    where?: ReelTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelTemplates to fetch.
     */
    orderBy?: ReelTemplateOrderByWithRelationInput | ReelTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReelTemplates.
     */
    cursor?: ReelTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelTemplates.
     */
    skip?: number
    distinct?: ReelTemplateScalarFieldEnum | ReelTemplateScalarFieldEnum[]
  }

  /**
   * ReelTemplate create
   */
  export type ReelTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ReelTemplate.
     */
    data: XOR<ReelTemplateCreateInput, ReelTemplateUncheckedCreateInput>
  }

  /**
   * ReelTemplate createMany
   */
  export type ReelTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReelTemplates.
     */
    data: ReelTemplateCreateManyInput | ReelTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReelTemplate update
   */
  export type ReelTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ReelTemplate.
     */
    data: XOR<ReelTemplateUpdateInput, ReelTemplateUncheckedUpdateInput>
    /**
     * Choose, which ReelTemplate to update.
     */
    where: ReelTemplateWhereUniqueInput
  }

  /**
   * ReelTemplate updateMany
   */
  export type ReelTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReelTemplates.
     */
    data: XOR<ReelTemplateUpdateManyMutationInput, ReelTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ReelTemplates to update
     */
    where?: ReelTemplateWhereInput
    /**
     * Limit how many ReelTemplates to update.
     */
    limit?: number
  }

  /**
   * ReelTemplate upsert
   */
  export type ReelTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ReelTemplate to update in case it exists.
     */
    where: ReelTemplateWhereUniqueInput
    /**
     * In case the ReelTemplate found by the `where` argument doesn't exist, create a new ReelTemplate with this data.
     */
    create: XOR<ReelTemplateCreateInput, ReelTemplateUncheckedCreateInput>
    /**
     * In case the ReelTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReelTemplateUpdateInput, ReelTemplateUncheckedUpdateInput>
  }

  /**
   * ReelTemplate delete
   */
  export type ReelTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
    /**
     * Filter which ReelTemplate to delete.
     */
    where: ReelTemplateWhereUniqueInput
  }

  /**
   * ReelTemplate deleteMany
   */
  export type ReelTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelTemplates to delete
     */
    where?: ReelTemplateWhereInput
    /**
     * Limit how many ReelTemplates to delete.
     */
    limit?: number
  }

  /**
   * ReelTemplate.reels
   */
  export type ReelTemplate$reelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    where?: ReelWhereInput
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    cursor?: ReelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * ReelTemplate without action
   */
  export type ReelTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelTemplate
     */
    select?: ReelTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelTemplate
     */
    omit?: ReelTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelTemplateInclude<ExtArgs> | null
  }


  /**
   * Model Reel
   */

  export type AggregateReel = {
    _count: ReelCountAggregateOutputType | null
    _avg: ReelAvgAggregateOutputType | null
    _sum: ReelSumAggregateOutputType | null
    _min: ReelMinAggregateOutputType | null
    _max: ReelMaxAggregateOutputType | null
  }

  export type ReelAvgAggregateOutputType = {
    duration: number | null
  }

  export type ReelSumAggregateOutputType = {
    duration: number | null
  }

  export type ReelMinAggregateOutputType = {
    id: string | null
    status: string | null
    outputUrl: string | null
    caption: string | null
    blogContent: string | null
    hashtags: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: string | null
    userId: string | null
    templateId: string | null
  }

  export type ReelMaxAggregateOutputType = {
    id: string | null
    status: string | null
    outputUrl: string | null
    caption: string | null
    blogContent: string | null
    hashtags: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tripId: string | null
    userId: string | null
    templateId: string | null
  }

  export type ReelCountAggregateOutputType = {
    id: number
    status: number
    outputUrl: number
    caption: number
    blogContent: number
    hashtags: number
    duration: number
    createdAt: number
    updatedAt: number
    tripId: number
    userId: number
    templateId: number
    _all: number
  }


  export type ReelAvgAggregateInputType = {
    duration?: true
  }

  export type ReelSumAggregateInputType = {
    duration?: true
  }

  export type ReelMinAggregateInputType = {
    id?: true
    status?: true
    outputUrl?: true
    caption?: true
    blogContent?: true
    hashtags?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    userId?: true
    templateId?: true
  }

  export type ReelMaxAggregateInputType = {
    id?: true
    status?: true
    outputUrl?: true
    caption?: true
    blogContent?: true
    hashtags?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    userId?: true
    templateId?: true
  }

  export type ReelCountAggregateInputType = {
    id?: true
    status?: true
    outputUrl?: true
    caption?: true
    blogContent?: true
    hashtags?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    tripId?: true
    userId?: true
    templateId?: true
    _all?: true
  }

  export type ReelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reel to aggregate.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reels
    **/
    _count?: true | ReelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReelMaxAggregateInputType
  }

  export type GetReelAggregateType<T extends ReelAggregateArgs> = {
        [P in keyof T & keyof AggregateReel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReel[P]>
      : GetScalarType<T[P], AggregateReel[P]>
  }




  export type ReelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelWhereInput
    orderBy?: ReelOrderByWithAggregationInput | ReelOrderByWithAggregationInput[]
    by: ReelScalarFieldEnum[] | ReelScalarFieldEnum
    having?: ReelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReelCountAggregateInputType | true
    _avg?: ReelAvgAggregateInputType
    _sum?: ReelSumAggregateInputType
    _min?: ReelMinAggregateInputType
    _max?: ReelMaxAggregateInputType
  }

  export type ReelGroupByOutputType = {
    id: string
    status: string
    outputUrl: string | null
    caption: string | null
    blogContent: string | null
    hashtags: string | null
    duration: number | null
    createdAt: Date
    updatedAt: Date
    tripId: string
    userId: string
    templateId: string
    _count: ReelCountAggregateOutputType | null
    _avg: ReelAvgAggregateOutputType | null
    _sum: ReelSumAggregateOutputType | null
    _min: ReelMinAggregateOutputType | null
    _max: ReelMaxAggregateOutputType | null
  }

  type GetReelGroupByPayload<T extends ReelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReelGroupByOutputType[P]>
            : GetScalarType<T[P], ReelGroupByOutputType[P]>
        }
      >
    >


  export type ReelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    outputUrl?: boolean
    caption?: boolean
    blogContent?: boolean
    hashtags?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    userId?: boolean
    templateId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | ReelTemplateDefaultArgs<ExtArgs>
    clips?: boolean | Reel$clipsArgs<ExtArgs>
    _count?: boolean | ReelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reel"]>



  export type ReelSelectScalar = {
    id?: boolean
    status?: boolean
    outputUrl?: boolean
    caption?: boolean
    blogContent?: boolean
    hashtags?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripId?: boolean
    userId?: boolean
    templateId?: boolean
  }

  export type ReelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "outputUrl" | "caption" | "blogContent" | "hashtags" | "duration" | "createdAt" | "updatedAt" | "tripId" | "userId" | "templateId", ExtArgs["result"]["reel"]>
  export type ReelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | ReelTemplateDefaultArgs<ExtArgs>
    clips?: boolean | Reel$clipsArgs<ExtArgs>
    _count?: boolean | ReelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reel"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$ReelTemplatePayload<ExtArgs>
      clips: Prisma.$ReelClipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      outputUrl: string | null
      caption: string | null
      blogContent: string | null
      hashtags: string | null
      duration: number | null
      createdAt: Date
      updatedAt: Date
      tripId: string
      userId: string
      templateId: string
    }, ExtArgs["result"]["reel"]>
    composites: {}
  }

  type ReelGetPayload<S extends boolean | null | undefined | ReelDefaultArgs> = $Result.GetResult<Prisma.$ReelPayload, S>

  type ReelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReelCountAggregateInputType | true
    }

  export interface ReelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reel'], meta: { name: 'Reel' } }
    /**
     * Find zero or one Reel that matches the filter.
     * @param {ReelFindUniqueArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReelFindUniqueArgs>(args: SelectSubset<T, ReelFindUniqueArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReelFindUniqueOrThrowArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReelFindUniqueOrThrowArgs>(args: SelectSubset<T, ReelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelFindFirstArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReelFindFirstArgs>(args?: SelectSubset<T, ReelFindFirstArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelFindFirstOrThrowArgs} args - Arguments to find a Reel
     * @example
     * // Get one Reel
     * const reel = await prisma.reel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReelFindFirstOrThrowArgs>(args?: SelectSubset<T, ReelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reels
     * const reels = await prisma.reel.findMany()
     * 
     * // Get first 10 Reels
     * const reels = await prisma.reel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reelWithIdOnly = await prisma.reel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReelFindManyArgs>(args?: SelectSubset<T, ReelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reel.
     * @param {ReelCreateArgs} args - Arguments to create a Reel.
     * @example
     * // Create one Reel
     * const Reel = await prisma.reel.create({
     *   data: {
     *     // ... data to create a Reel
     *   }
     * })
     * 
     */
    create<T extends ReelCreateArgs>(args: SelectSubset<T, ReelCreateArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reels.
     * @param {ReelCreateManyArgs} args - Arguments to create many Reels.
     * @example
     * // Create many Reels
     * const reel = await prisma.reel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReelCreateManyArgs>(args?: SelectSubset<T, ReelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reel.
     * @param {ReelDeleteArgs} args - Arguments to delete one Reel.
     * @example
     * // Delete one Reel
     * const Reel = await prisma.reel.delete({
     *   where: {
     *     // ... filter to delete one Reel
     *   }
     * })
     * 
     */
    delete<T extends ReelDeleteArgs>(args: SelectSubset<T, ReelDeleteArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reel.
     * @param {ReelUpdateArgs} args - Arguments to update one Reel.
     * @example
     * // Update one Reel
     * const reel = await prisma.reel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReelUpdateArgs>(args: SelectSubset<T, ReelUpdateArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reels.
     * @param {ReelDeleteManyArgs} args - Arguments to filter Reels to delete.
     * @example
     * // Delete a few Reels
     * const { count } = await prisma.reel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReelDeleteManyArgs>(args?: SelectSubset<T, ReelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reels
     * const reel = await prisma.reel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReelUpdateManyArgs>(args: SelectSubset<T, ReelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reel.
     * @param {ReelUpsertArgs} args - Arguments to update or create a Reel.
     * @example
     * // Update or create a Reel
     * const reel = await prisma.reel.upsert({
     *   create: {
     *     // ... data to create a Reel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reel we want to update
     *   }
     * })
     */
    upsert<T extends ReelUpsertArgs>(args: SelectSubset<T, ReelUpsertArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelCountArgs} args - Arguments to filter Reels to count.
     * @example
     * // Count the number of Reels
     * const count = await prisma.reel.count({
     *   where: {
     *     // ... the filter for the Reels we want to count
     *   }
     * })
    **/
    count<T extends ReelCountArgs>(
      args?: Subset<T, ReelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReelAggregateArgs>(args: Subset<T, ReelAggregateArgs>): Prisma.PrismaPromise<GetReelAggregateType<T>>

    /**
     * Group by Reel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelGroupByArgs} args - Group by arguments.
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
      T extends ReelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReelGroupByArgs['orderBy'] }
        : { orderBy?: ReelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reel model
   */
  readonly fields: ReelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends ReelTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReelTemplateDefaultArgs<ExtArgs>>): Prisma__ReelTemplateClient<$Result.GetResult<Prisma.$ReelTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clips<T extends Reel$clipsArgs<ExtArgs> = {}>(args?: Subset<T, Reel$clipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reel model
   */ 
  interface ReelFieldRefs {
    readonly id: FieldRef<"Reel", 'String'>
    readonly status: FieldRef<"Reel", 'String'>
    readonly outputUrl: FieldRef<"Reel", 'String'>
    readonly caption: FieldRef<"Reel", 'String'>
    readonly blogContent: FieldRef<"Reel", 'String'>
    readonly hashtags: FieldRef<"Reel", 'String'>
    readonly duration: FieldRef<"Reel", 'Int'>
    readonly createdAt: FieldRef<"Reel", 'DateTime'>
    readonly updatedAt: FieldRef<"Reel", 'DateTime'>
    readonly tripId: FieldRef<"Reel", 'String'>
    readonly userId: FieldRef<"Reel", 'String'>
    readonly templateId: FieldRef<"Reel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reel findUnique
   */
  export type ReelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel findUniqueOrThrow
   */
  export type ReelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel findFirst
   */
  export type ReelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reels.
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reels.
     */
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * Reel findFirstOrThrow
   */
  export type ReelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reel to fetch.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reels.
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reels.
     */
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * Reel findMany
   */
  export type ReelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter, which Reels to fetch.
     */
    where?: ReelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reels to fetch.
     */
    orderBy?: ReelOrderByWithRelationInput | ReelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reels.
     */
    cursor?: ReelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reels.
     */
    skip?: number
    distinct?: ReelScalarFieldEnum | ReelScalarFieldEnum[]
  }

  /**
   * Reel create
   */
  export type ReelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * The data needed to create a Reel.
     */
    data: XOR<ReelCreateInput, ReelUncheckedCreateInput>
  }

  /**
   * Reel createMany
   */
  export type ReelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reels.
     */
    data: ReelCreateManyInput | ReelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reel update
   */
  export type ReelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * The data needed to update a Reel.
     */
    data: XOR<ReelUpdateInput, ReelUncheckedUpdateInput>
    /**
     * Choose, which Reel to update.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel updateMany
   */
  export type ReelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reels.
     */
    data: XOR<ReelUpdateManyMutationInput, ReelUncheckedUpdateManyInput>
    /**
     * Filter which Reels to update
     */
    where?: ReelWhereInput
    /**
     * Limit how many Reels to update.
     */
    limit?: number
  }

  /**
   * Reel upsert
   */
  export type ReelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * The filter to search for the Reel to update in case it exists.
     */
    where: ReelWhereUniqueInput
    /**
     * In case the Reel found by the `where` argument doesn't exist, create a new Reel with this data.
     */
    create: XOR<ReelCreateInput, ReelUncheckedCreateInput>
    /**
     * In case the Reel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReelUpdateInput, ReelUncheckedUpdateInput>
  }

  /**
   * Reel delete
   */
  export type ReelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
    /**
     * Filter which Reel to delete.
     */
    where: ReelWhereUniqueInput
  }

  /**
   * Reel deleteMany
   */
  export type ReelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reels to delete
     */
    where?: ReelWhereInput
    /**
     * Limit how many Reels to delete.
     */
    limit?: number
  }

  /**
   * Reel.clips
   */
  export type Reel$clipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    where?: ReelClipWhereInput
    orderBy?: ReelClipOrderByWithRelationInput | ReelClipOrderByWithRelationInput[]
    cursor?: ReelClipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReelClipScalarFieldEnum | ReelClipScalarFieldEnum[]
  }

  /**
   * Reel without action
   */
  export type ReelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reel
     */
    select?: ReelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reel
     */
    omit?: ReelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelInclude<ExtArgs> | null
  }


  /**
   * Model ReelClip
   */

  export type AggregateReelClip = {
    _count: ReelClipCountAggregateOutputType | null
    _avg: ReelClipAvgAggregateOutputType | null
    _sum: ReelClipSumAggregateOutputType | null
    _min: ReelClipMinAggregateOutputType | null
    _max: ReelClipMaxAggregateOutputType | null
  }

  export type ReelClipAvgAggregateOutputType = {
    order: number | null
    startTime: number | null
    duration: number | null
  }

  export type ReelClipSumAggregateOutputType = {
    order: number | null
    startTime: number | null
    duration: number | null
  }

  export type ReelClipMinAggregateOutputType = {
    id: string | null
    order: number | null
    startTime: number | null
    duration: number | null
    mediaId: string | null
    reelId: string | null
  }

  export type ReelClipMaxAggregateOutputType = {
    id: string | null
    order: number | null
    startTime: number | null
    duration: number | null
    mediaId: string | null
    reelId: string | null
  }

  export type ReelClipCountAggregateOutputType = {
    id: number
    order: number
    startTime: number
    duration: number
    effects: number
    mediaId: number
    reelId: number
    _all: number
  }


  export type ReelClipAvgAggregateInputType = {
    order?: true
    startTime?: true
    duration?: true
  }

  export type ReelClipSumAggregateInputType = {
    order?: true
    startTime?: true
    duration?: true
  }

  export type ReelClipMinAggregateInputType = {
    id?: true
    order?: true
    startTime?: true
    duration?: true
    mediaId?: true
    reelId?: true
  }

  export type ReelClipMaxAggregateInputType = {
    id?: true
    order?: true
    startTime?: true
    duration?: true
    mediaId?: true
    reelId?: true
  }

  export type ReelClipCountAggregateInputType = {
    id?: true
    order?: true
    startTime?: true
    duration?: true
    effects?: true
    mediaId?: true
    reelId?: true
    _all?: true
  }

  export type ReelClipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelClip to aggregate.
     */
    where?: ReelClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelClips to fetch.
     */
    orderBy?: ReelClipOrderByWithRelationInput | ReelClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReelClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelClips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReelClips
    **/
    _count?: true | ReelClipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReelClipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReelClipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReelClipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReelClipMaxAggregateInputType
  }

  export type GetReelClipAggregateType<T extends ReelClipAggregateArgs> = {
        [P in keyof T & keyof AggregateReelClip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReelClip[P]>
      : GetScalarType<T[P], AggregateReelClip[P]>
  }




  export type ReelClipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelClipWhereInput
    orderBy?: ReelClipOrderByWithAggregationInput | ReelClipOrderByWithAggregationInput[]
    by: ReelClipScalarFieldEnum[] | ReelClipScalarFieldEnum
    having?: ReelClipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReelClipCountAggregateInputType | true
    _avg?: ReelClipAvgAggregateInputType
    _sum?: ReelClipSumAggregateInputType
    _min?: ReelClipMinAggregateInputType
    _max?: ReelClipMaxAggregateInputType
  }

  export type ReelClipGroupByOutputType = {
    id: string
    order: number
    startTime: number
    duration: number
    effects: JsonValue | null
    mediaId: string
    reelId: string
    _count: ReelClipCountAggregateOutputType | null
    _avg: ReelClipAvgAggregateOutputType | null
    _sum: ReelClipSumAggregateOutputType | null
    _min: ReelClipMinAggregateOutputType | null
    _max: ReelClipMaxAggregateOutputType | null
  }

  type GetReelClipGroupByPayload<T extends ReelClipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReelClipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReelClipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReelClipGroupByOutputType[P]>
            : GetScalarType<T[P], ReelClipGroupByOutputType[P]>
        }
      >
    >


  export type ReelClipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    startTime?: boolean
    duration?: boolean
    effects?: boolean
    mediaId?: boolean
    reelId?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reelClip"]>



  export type ReelClipSelectScalar = {
    id?: boolean
    order?: boolean
    startTime?: boolean
    duration?: boolean
    effects?: boolean
    mediaId?: boolean
    reelId?: boolean
  }

  export type ReelClipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "startTime" | "duration" | "effects" | "mediaId" | "reelId", ExtArgs["result"]["reelClip"]>
  export type ReelClipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    reel?: boolean | ReelDefaultArgs<ExtArgs>
  }

  export type $ReelClipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReelClip"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>
      reel: Prisma.$ReelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      startTime: number
      duration: number
      effects: Prisma.JsonValue | null
      mediaId: string
      reelId: string
    }, ExtArgs["result"]["reelClip"]>
    composites: {}
  }

  type ReelClipGetPayload<S extends boolean | null | undefined | ReelClipDefaultArgs> = $Result.GetResult<Prisma.$ReelClipPayload, S>

  type ReelClipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReelClipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReelClipCountAggregateInputType | true
    }

  export interface ReelClipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReelClip'], meta: { name: 'ReelClip' } }
    /**
     * Find zero or one ReelClip that matches the filter.
     * @param {ReelClipFindUniqueArgs} args - Arguments to find a ReelClip
     * @example
     * // Get one ReelClip
     * const reelClip = await prisma.reelClip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReelClipFindUniqueArgs>(args: SelectSubset<T, ReelClipFindUniqueArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReelClip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReelClipFindUniqueOrThrowArgs} args - Arguments to find a ReelClip
     * @example
     * // Get one ReelClip
     * const reelClip = await prisma.reelClip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReelClipFindUniqueOrThrowArgs>(args: SelectSubset<T, ReelClipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReelClip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelClipFindFirstArgs} args - Arguments to find a ReelClip
     * @example
     * // Get one ReelClip
     * const reelClip = await prisma.reelClip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReelClipFindFirstArgs>(args?: SelectSubset<T, ReelClipFindFirstArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReelClip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelClipFindFirstOrThrowArgs} args - Arguments to find a ReelClip
     * @example
     * // Get one ReelClip
     * const reelClip = await prisma.reelClip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReelClipFindFirstOrThrowArgs>(args?: SelectSubset<T, ReelClipFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReelClips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelClipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReelClips
     * const reelClips = await prisma.reelClip.findMany()
     * 
     * // Get first 10 ReelClips
     * const reelClips = await prisma.reelClip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reelClipWithIdOnly = await prisma.reelClip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReelClipFindManyArgs>(args?: SelectSubset<T, ReelClipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReelClip.
     * @param {ReelClipCreateArgs} args - Arguments to create a ReelClip.
     * @example
     * // Create one ReelClip
     * const ReelClip = await prisma.reelClip.create({
     *   data: {
     *     // ... data to create a ReelClip
     *   }
     * })
     * 
     */
    create<T extends ReelClipCreateArgs>(args: SelectSubset<T, ReelClipCreateArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReelClips.
     * @param {ReelClipCreateManyArgs} args - Arguments to create many ReelClips.
     * @example
     * // Create many ReelClips
     * const reelClip = await prisma.reelClip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReelClipCreateManyArgs>(args?: SelectSubset<T, ReelClipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReelClip.
     * @param {ReelClipDeleteArgs} args - Arguments to delete one ReelClip.
     * @example
     * // Delete one ReelClip
     * const ReelClip = await prisma.reelClip.delete({
     *   where: {
     *     // ... filter to delete one ReelClip
     *   }
     * })
     * 
     */
    delete<T extends ReelClipDeleteArgs>(args: SelectSubset<T, ReelClipDeleteArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReelClip.
     * @param {ReelClipUpdateArgs} args - Arguments to update one ReelClip.
     * @example
     * // Update one ReelClip
     * const reelClip = await prisma.reelClip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReelClipUpdateArgs>(args: SelectSubset<T, ReelClipUpdateArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReelClips.
     * @param {ReelClipDeleteManyArgs} args - Arguments to filter ReelClips to delete.
     * @example
     * // Delete a few ReelClips
     * const { count } = await prisma.reelClip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReelClipDeleteManyArgs>(args?: SelectSubset<T, ReelClipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReelClips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelClipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReelClips
     * const reelClip = await prisma.reelClip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReelClipUpdateManyArgs>(args: SelectSubset<T, ReelClipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReelClip.
     * @param {ReelClipUpsertArgs} args - Arguments to update or create a ReelClip.
     * @example
     * // Update or create a ReelClip
     * const reelClip = await prisma.reelClip.upsert({
     *   create: {
     *     // ... data to create a ReelClip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReelClip we want to update
     *   }
     * })
     */
    upsert<T extends ReelClipUpsertArgs>(args: SelectSubset<T, ReelClipUpsertArgs<ExtArgs>>): Prisma__ReelClipClient<$Result.GetResult<Prisma.$ReelClipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReelClips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelClipCountArgs} args - Arguments to filter ReelClips to count.
     * @example
     * // Count the number of ReelClips
     * const count = await prisma.reelClip.count({
     *   where: {
     *     // ... the filter for the ReelClips we want to count
     *   }
     * })
    **/
    count<T extends ReelClipCountArgs>(
      args?: Subset<T, ReelClipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReelClipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReelClip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelClipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReelClipAggregateArgs>(args: Subset<T, ReelClipAggregateArgs>): Prisma.PrismaPromise<GetReelClipAggregateType<T>>

    /**
     * Group by ReelClip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelClipGroupByArgs} args - Group by arguments.
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
      T extends ReelClipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReelClipGroupByArgs['orderBy'] }
        : { orderBy?: ReelClipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReelClipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReelClipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReelClip model
   */
  readonly fields: ReelClipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReelClip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReelClipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reel<T extends ReelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReelDefaultArgs<ExtArgs>>): Prisma__ReelClient<$Result.GetResult<Prisma.$ReelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReelClip model
   */ 
  interface ReelClipFieldRefs {
    readonly id: FieldRef<"ReelClip", 'String'>
    readonly order: FieldRef<"ReelClip", 'Int'>
    readonly startTime: FieldRef<"ReelClip", 'Float'>
    readonly duration: FieldRef<"ReelClip", 'Float'>
    readonly effects: FieldRef<"ReelClip", 'Json'>
    readonly mediaId: FieldRef<"ReelClip", 'String'>
    readonly reelId: FieldRef<"ReelClip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReelClip findUnique
   */
  export type ReelClipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * Filter, which ReelClip to fetch.
     */
    where: ReelClipWhereUniqueInput
  }

  /**
   * ReelClip findUniqueOrThrow
   */
  export type ReelClipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * Filter, which ReelClip to fetch.
     */
    where: ReelClipWhereUniqueInput
  }

  /**
   * ReelClip findFirst
   */
  export type ReelClipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * Filter, which ReelClip to fetch.
     */
    where?: ReelClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelClips to fetch.
     */
    orderBy?: ReelClipOrderByWithRelationInput | ReelClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelClips.
     */
    cursor?: ReelClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelClips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelClips.
     */
    distinct?: ReelClipScalarFieldEnum | ReelClipScalarFieldEnum[]
  }

  /**
   * ReelClip findFirstOrThrow
   */
  export type ReelClipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * Filter, which ReelClip to fetch.
     */
    where?: ReelClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelClips to fetch.
     */
    orderBy?: ReelClipOrderByWithRelationInput | ReelClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelClips.
     */
    cursor?: ReelClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelClips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelClips.
     */
    distinct?: ReelClipScalarFieldEnum | ReelClipScalarFieldEnum[]
  }

  /**
   * ReelClip findMany
   */
  export type ReelClipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * Filter, which ReelClips to fetch.
     */
    where?: ReelClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelClips to fetch.
     */
    orderBy?: ReelClipOrderByWithRelationInput | ReelClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReelClips.
     */
    cursor?: ReelClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelClips.
     */
    skip?: number
    distinct?: ReelClipScalarFieldEnum | ReelClipScalarFieldEnum[]
  }

  /**
   * ReelClip create
   */
  export type ReelClipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * The data needed to create a ReelClip.
     */
    data: XOR<ReelClipCreateInput, ReelClipUncheckedCreateInput>
  }

  /**
   * ReelClip createMany
   */
  export type ReelClipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReelClips.
     */
    data: ReelClipCreateManyInput | ReelClipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReelClip update
   */
  export type ReelClipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * The data needed to update a ReelClip.
     */
    data: XOR<ReelClipUpdateInput, ReelClipUncheckedUpdateInput>
    /**
     * Choose, which ReelClip to update.
     */
    where: ReelClipWhereUniqueInput
  }

  /**
   * ReelClip updateMany
   */
  export type ReelClipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReelClips.
     */
    data: XOR<ReelClipUpdateManyMutationInput, ReelClipUncheckedUpdateManyInput>
    /**
     * Filter which ReelClips to update
     */
    where?: ReelClipWhereInput
    /**
     * Limit how many ReelClips to update.
     */
    limit?: number
  }

  /**
   * ReelClip upsert
   */
  export type ReelClipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * The filter to search for the ReelClip to update in case it exists.
     */
    where: ReelClipWhereUniqueInput
    /**
     * In case the ReelClip found by the `where` argument doesn't exist, create a new ReelClip with this data.
     */
    create: XOR<ReelClipCreateInput, ReelClipUncheckedCreateInput>
    /**
     * In case the ReelClip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReelClipUpdateInput, ReelClipUncheckedUpdateInput>
  }

  /**
   * ReelClip delete
   */
  export type ReelClipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
    /**
     * Filter which ReelClip to delete.
     */
    where: ReelClipWhereUniqueInput
  }

  /**
   * ReelClip deleteMany
   */
  export type ReelClipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelClips to delete
     */
    where?: ReelClipWhereInput
    /**
     * Limit how many ReelClips to delete.
     */
    limit?: number
  }

  /**
   * ReelClip without action
   */
  export type ReelClipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelClip
     */
    select?: ReelClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelClip
     */
    omit?: ReelClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelClipInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    username: 'username',
    password: 'password',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    destination: 'destination',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    caption: 'caption',
    location: 'location',
    metadata: 'metadata',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    tripId: 'tripId',
    userId: 'userId'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    content: 'content',
    timestamp: 'timestamp',
    tripId: 'tripId'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const ReelTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    duration: 'duration',
    style: 'style',
    config: 'config',
    createdAt: 'createdAt'
  };

  export type ReelTemplateScalarFieldEnum = (typeof ReelTemplateScalarFieldEnum)[keyof typeof ReelTemplateScalarFieldEnum]


  export const ReelScalarFieldEnum: {
    id: 'id',
    status: 'status',
    outputUrl: 'outputUrl',
    caption: 'caption',
    blogContent: 'blogContent',
    hashtags: 'hashtags',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tripId: 'tripId',
    userId: 'userId',
    templateId: 'templateId'
  };

  export type ReelScalarFieldEnum = (typeof ReelScalarFieldEnum)[keyof typeof ReelScalarFieldEnum]


  export const ReelClipScalarFieldEnum: {
    id: 'id',
    order: 'order',
    startTime: 'startTime',
    duration: 'duration',
    effects: 'effects',
    mediaId: 'mediaId',
    reelId: 'reelId'
  };

  export type ReelClipScalarFieldEnum = (typeof ReelClipScalarFieldEnum)[keyof typeof ReelClipScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    username: 'username',
    password: 'password',
    avatarUrl: 'avatarUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TripOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    destination: 'destination',
    status: 'status',
    userId: 'userId'
  };

  export type TripOrderByRelevanceFieldEnum = (typeof TripOrderByRelevanceFieldEnum)[keyof typeof TripOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const MediaOrderByRelevanceFieldEnum: {
    id: 'id',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    caption: 'caption',
    location: 'location',
    tripId: 'tripId',
    userId: 'userId'
  };

  export type MediaOrderByRelevanceFieldEnum = (typeof MediaOrderByRelevanceFieldEnum)[keyof typeof MediaOrderByRelevanceFieldEnum]


  export const LogOrderByRelevanceFieldEnum: {
    id: 'id',
    content: 'content',
    tripId: 'tripId'
  };

  export type LogOrderByRelevanceFieldEnum = (typeof LogOrderByRelevanceFieldEnum)[keyof typeof LogOrderByRelevanceFieldEnum]


  export const ReelTemplateOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    style: 'style'
  };

  export type ReelTemplateOrderByRelevanceFieldEnum = (typeof ReelTemplateOrderByRelevanceFieldEnum)[keyof typeof ReelTemplateOrderByRelevanceFieldEnum]


  export const ReelOrderByRelevanceFieldEnum: {
    id: 'id',
    status: 'status',
    outputUrl: 'outputUrl',
    caption: 'caption',
    blogContent: 'blogContent',
    hashtags: 'hashtags',
    tripId: 'tripId',
    userId: 'userId',
    templateId: 'templateId'
  };

  export type ReelOrderByRelevanceFieldEnum = (typeof ReelOrderByRelevanceFieldEnum)[keyof typeof ReelOrderByRelevanceFieldEnum]


  export const ReelClipOrderByRelevanceFieldEnum: {
    id: 'id',
    mediaId: 'mediaId',
    reelId: 'reelId'
  };

  export type ReelClipOrderByRelevanceFieldEnum = (typeof ReelClipOrderByRelevanceFieldEnum)[keyof typeof ReelClipOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: TripListRelationFilter
    media?: MediaListRelationFilter
    reels?: ReelListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    reels?: ReelOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: TripListRelationFilter
    media?: MediaListRelationFilter
    reels?: ReelListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    destination?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    userId?: StringFilter<"Trip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: MediaListRelationFilter
    reels?: ReelListRelationFilter
    logs?: LogListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    destination?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
    reels?: ReelOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
    _relevance?: TripOrderByRelevanceInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    title?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    destination?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    userId?: StringFilter<"Trip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: MediaListRelationFilter
    reels?: ReelListRelationFilter
    logs?: LogListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    destination?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    description?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    destination?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    status?: StringWithAggregatesFilter<"Trip"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    userId?: StringWithAggregatesFilter<"Trip"> | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    mediaUrl?: StringFilter<"Media"> | string
    mediaType?: StringFilter<"Media"> | string
    caption?: StringNullableFilter<"Media"> | string | null
    location?: StringNullableFilter<"Media"> | string | null
    metadata?: JsonNullableFilter<"Media">
    timestamp?: DateTimeFilter<"Media"> | Date | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    tripId?: StringFilter<"Media"> | string
    userId?: StringFilter<"Media"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reelClips?: ReelClipListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    caption?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    trip?: TripOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    reelClips?: ReelClipOrderByRelationAggregateInput
    _relevance?: MediaOrderByRelevanceInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    mediaUrl?: StringFilter<"Media"> | string
    mediaType?: StringFilter<"Media"> | string
    caption?: StringNullableFilter<"Media"> | string | null
    location?: StringNullableFilter<"Media"> | string | null
    metadata?: JsonNullableFilter<"Media">
    timestamp?: DateTimeFilter<"Media"> | Date | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    tripId?: StringFilter<"Media"> | string
    userId?: StringFilter<"Media"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reelClips?: ReelClipListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    caption?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    mediaUrl?: StringWithAggregatesFilter<"Media"> | string
    mediaType?: StringWithAggregatesFilter<"Media"> | string
    caption?: StringNullableWithAggregatesFilter<"Media"> | string | null
    location?: StringNullableWithAggregatesFilter<"Media"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Media">
    timestamp?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    tripId?: StringWithAggregatesFilter<"Media"> | string
    userId?: StringWithAggregatesFilter<"Media"> | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    content?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    tripId?: StringFilter<"Log"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    tripId?: SortOrder
    trip?: TripOrderByWithRelationInput
    _relevance?: LogOrderByRelevanceInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    content?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    tripId?: StringFilter<"Log"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    tripId?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    content?: StringWithAggregatesFilter<"Log"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    tripId?: StringWithAggregatesFilter<"Log"> | string
  }

  export type ReelTemplateWhereInput = {
    AND?: ReelTemplateWhereInput | ReelTemplateWhereInput[]
    OR?: ReelTemplateWhereInput[]
    NOT?: ReelTemplateWhereInput | ReelTemplateWhereInput[]
    id?: StringFilter<"ReelTemplate"> | string
    name?: StringFilter<"ReelTemplate"> | string
    description?: StringNullableFilter<"ReelTemplate"> | string | null
    duration?: IntFilter<"ReelTemplate"> | number
    style?: StringFilter<"ReelTemplate"> | string
    config?: JsonFilter<"ReelTemplate">
    createdAt?: DateTimeFilter<"ReelTemplate"> | Date | string
    reels?: ReelListRelationFilter
  }

  export type ReelTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    style?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    reels?: ReelOrderByRelationAggregateInput
    _relevance?: ReelTemplateOrderByRelevanceInput
  }

  export type ReelTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReelTemplateWhereInput | ReelTemplateWhereInput[]
    OR?: ReelTemplateWhereInput[]
    NOT?: ReelTemplateWhereInput | ReelTemplateWhereInput[]
    name?: StringFilter<"ReelTemplate"> | string
    description?: StringNullableFilter<"ReelTemplate"> | string | null
    duration?: IntFilter<"ReelTemplate"> | number
    style?: StringFilter<"ReelTemplate"> | string
    config?: JsonFilter<"ReelTemplate">
    createdAt?: DateTimeFilter<"ReelTemplate"> | Date | string
    reels?: ReelListRelationFilter
  }, "id">

  export type ReelTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    style?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    _count?: ReelTemplateCountOrderByAggregateInput
    _avg?: ReelTemplateAvgOrderByAggregateInput
    _max?: ReelTemplateMaxOrderByAggregateInput
    _min?: ReelTemplateMinOrderByAggregateInput
    _sum?: ReelTemplateSumOrderByAggregateInput
  }

  export type ReelTemplateScalarWhereWithAggregatesInput = {
    AND?: ReelTemplateScalarWhereWithAggregatesInput | ReelTemplateScalarWhereWithAggregatesInput[]
    OR?: ReelTemplateScalarWhereWithAggregatesInput[]
    NOT?: ReelTemplateScalarWhereWithAggregatesInput | ReelTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReelTemplate"> | string
    name?: StringWithAggregatesFilter<"ReelTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"ReelTemplate"> | string | null
    duration?: IntWithAggregatesFilter<"ReelTemplate"> | number
    style?: StringWithAggregatesFilter<"ReelTemplate"> | string
    config?: JsonWithAggregatesFilter<"ReelTemplate">
    createdAt?: DateTimeWithAggregatesFilter<"ReelTemplate"> | Date | string
  }

  export type ReelWhereInput = {
    AND?: ReelWhereInput | ReelWhereInput[]
    OR?: ReelWhereInput[]
    NOT?: ReelWhereInput | ReelWhereInput[]
    id?: StringFilter<"Reel"> | string
    status?: StringFilter<"Reel"> | string
    outputUrl?: StringNullableFilter<"Reel"> | string | null
    caption?: StringNullableFilter<"Reel"> | string | null
    blogContent?: StringNullableFilter<"Reel"> | string | null
    hashtags?: StringNullableFilter<"Reel"> | string | null
    duration?: IntNullableFilter<"Reel"> | number | null
    createdAt?: DateTimeFilter<"Reel"> | Date | string
    updatedAt?: DateTimeFilter<"Reel"> | Date | string
    tripId?: StringFilter<"Reel"> | string
    userId?: StringFilter<"Reel"> | string
    templateId?: StringFilter<"Reel"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<ReelTemplateScalarRelationFilter, ReelTemplateWhereInput>
    clips?: ReelClipListRelationFilter
  }

  export type ReelOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    blogContent?: SortOrderInput | SortOrder
    hashtags?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    trip?: TripOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    template?: ReelTemplateOrderByWithRelationInput
    clips?: ReelClipOrderByRelationAggregateInput
    _relevance?: ReelOrderByRelevanceInput
  }

  export type ReelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReelWhereInput | ReelWhereInput[]
    OR?: ReelWhereInput[]
    NOT?: ReelWhereInput | ReelWhereInput[]
    status?: StringFilter<"Reel"> | string
    outputUrl?: StringNullableFilter<"Reel"> | string | null
    caption?: StringNullableFilter<"Reel"> | string | null
    blogContent?: StringNullableFilter<"Reel"> | string | null
    hashtags?: StringNullableFilter<"Reel"> | string | null
    duration?: IntNullableFilter<"Reel"> | number | null
    createdAt?: DateTimeFilter<"Reel"> | Date | string
    updatedAt?: DateTimeFilter<"Reel"> | Date | string
    tripId?: StringFilter<"Reel"> | string
    userId?: StringFilter<"Reel"> | string
    templateId?: StringFilter<"Reel"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<ReelTemplateScalarRelationFilter, ReelTemplateWhereInput>
    clips?: ReelClipListRelationFilter
  }, "id">

  export type ReelOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    blogContent?: SortOrderInput | SortOrder
    hashtags?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    _count?: ReelCountOrderByAggregateInput
    _avg?: ReelAvgOrderByAggregateInput
    _max?: ReelMaxOrderByAggregateInput
    _min?: ReelMinOrderByAggregateInput
    _sum?: ReelSumOrderByAggregateInput
  }

  export type ReelScalarWhereWithAggregatesInput = {
    AND?: ReelScalarWhereWithAggregatesInput | ReelScalarWhereWithAggregatesInput[]
    OR?: ReelScalarWhereWithAggregatesInput[]
    NOT?: ReelScalarWhereWithAggregatesInput | ReelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reel"> | string
    status?: StringWithAggregatesFilter<"Reel"> | string
    outputUrl?: StringNullableWithAggregatesFilter<"Reel"> | string | null
    caption?: StringNullableWithAggregatesFilter<"Reel"> | string | null
    blogContent?: StringNullableWithAggregatesFilter<"Reel"> | string | null
    hashtags?: StringNullableWithAggregatesFilter<"Reel"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Reel"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Reel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reel"> | Date | string
    tripId?: StringWithAggregatesFilter<"Reel"> | string
    userId?: StringWithAggregatesFilter<"Reel"> | string
    templateId?: StringWithAggregatesFilter<"Reel"> | string
  }

  export type ReelClipWhereInput = {
    AND?: ReelClipWhereInput | ReelClipWhereInput[]
    OR?: ReelClipWhereInput[]
    NOT?: ReelClipWhereInput | ReelClipWhereInput[]
    id?: StringFilter<"ReelClip"> | string
    order?: IntFilter<"ReelClip"> | number
    startTime?: FloatFilter<"ReelClip"> | number
    duration?: FloatFilter<"ReelClip"> | number
    effects?: JsonNullableFilter<"ReelClip">
    mediaId?: StringFilter<"ReelClip"> | string
    reelId?: StringFilter<"ReelClip"> | string
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    reel?: XOR<ReelScalarRelationFilter, ReelWhereInput>
  }

  export type ReelClipOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    effects?: SortOrderInput | SortOrder
    mediaId?: SortOrder
    reelId?: SortOrder
    media?: MediaOrderByWithRelationInput
    reel?: ReelOrderByWithRelationInput
    _relevance?: ReelClipOrderByRelevanceInput
  }

  export type ReelClipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReelClipWhereInput | ReelClipWhereInput[]
    OR?: ReelClipWhereInput[]
    NOT?: ReelClipWhereInput | ReelClipWhereInput[]
    order?: IntFilter<"ReelClip"> | number
    startTime?: FloatFilter<"ReelClip"> | number
    duration?: FloatFilter<"ReelClip"> | number
    effects?: JsonNullableFilter<"ReelClip">
    mediaId?: StringFilter<"ReelClip"> | string
    reelId?: StringFilter<"ReelClip"> | string
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    reel?: XOR<ReelScalarRelationFilter, ReelWhereInput>
  }, "id">

  export type ReelClipOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    effects?: SortOrderInput | SortOrder
    mediaId?: SortOrder
    reelId?: SortOrder
    _count?: ReelClipCountOrderByAggregateInput
    _avg?: ReelClipAvgOrderByAggregateInput
    _max?: ReelClipMaxOrderByAggregateInput
    _min?: ReelClipMinOrderByAggregateInput
    _sum?: ReelClipSumOrderByAggregateInput
  }

  export type ReelClipScalarWhereWithAggregatesInput = {
    AND?: ReelClipScalarWhereWithAggregatesInput | ReelClipScalarWhereWithAggregatesInput[]
    OR?: ReelClipScalarWhereWithAggregatesInput[]
    NOT?: ReelClipScalarWhereWithAggregatesInput | ReelClipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReelClip"> | string
    order?: IntWithAggregatesFilter<"ReelClip"> | number
    startTime?: FloatWithAggregatesFilter<"ReelClip"> | number
    duration?: FloatWithAggregatesFilter<"ReelClip"> | number
    effects?: JsonNullableWithAggregatesFilter<"ReelClip">
    mediaId?: StringWithAggregatesFilter<"ReelClip"> | string
    reelId?: StringWithAggregatesFilter<"ReelClip"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    media?: MediaCreateNestedManyWithoutUserInput
    reels?: ReelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    media?: MediaUncheckedCreateNestedManyWithoutUserInput
    reels?: ReelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    media?: MediaUpdateManyWithoutUserNestedInput
    reels?: ReelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput
    reels?: ReelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    media?: MediaCreateNestedManyWithoutTripInput
    reels?: ReelCreateNestedManyWithoutTripInput
    logs?: LogCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    media?: MediaUncheckedCreateNestedManyWithoutTripInput
    reels?: ReelUncheckedCreateNestedManyWithoutTripInput
    logs?: LogUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    media?: MediaUpdateManyWithoutTripNestedInput
    reels?: ReelUpdateManyWithoutTripNestedInput
    logs?: LogUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    media?: MediaUncheckedUpdateManyWithoutTripNestedInput
    reels?: ReelUncheckedUpdateManyWithoutTripNestedInput
    logs?: LogUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutMediaInput
    user: UserCreateNestedOneWithoutMediaInput
    reelClips?: ReelClipCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    tripId: string
    userId: string
    reelClips?: ReelClipUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutMediaNestedInput
    user?: UserUpdateOneRequiredWithoutMediaNestedInput
    reelClips?: ReelClipUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reelClips?: ReelClipUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    tripId: string
    userId: string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    trip: TripCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    tripId: string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateManyInput = {
    id?: string
    content: string
    timestamp?: Date | string
    tripId: string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    duration: number
    style: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    reels?: ReelCreateNestedManyWithoutTemplateInput
  }

  export type ReelTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    duration: number
    style: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    reels?: ReelUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ReelTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reels?: ReelUpdateManyWithoutTemplateNestedInput
  }

  export type ReelTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reels?: ReelUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ReelTemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    duration: number
    style: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReelTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelCreateInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutReelsInput
    user: UserCreateNestedOneWithoutReelsInput
    template: ReelTemplateCreateNestedOneWithoutReelsInput
    clips?: ReelClipCreateNestedManyWithoutReelInput
  }

  export type ReelUncheckedCreateInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: string
    userId: string
    templateId: string
    clips?: ReelClipUncheckedCreateNestedManyWithoutReelInput
  }

  export type ReelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutReelsNestedInput
    user?: UserUpdateOneRequiredWithoutReelsNestedInput
    template?: ReelTemplateUpdateOneRequiredWithoutReelsNestedInput
    clips?: ReelClipUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    clips?: ReelClipUncheckedUpdateManyWithoutReelNestedInput
  }

  export type ReelCreateManyInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: string
    userId: string
    templateId: string
  }

  export type ReelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelClipCreateInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    media: MediaCreateNestedOneWithoutReelClipsInput
    reel: ReelCreateNestedOneWithoutClipsInput
  }

  export type ReelClipUncheckedCreateInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId: string
    reelId: string
  }

  export type ReelClipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    media?: MediaUpdateOneRequiredWithoutReelClipsNestedInput
    reel?: ReelUpdateOneRequiredWithoutClipsNestedInput
  }

  export type ReelClipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId?: StringFieldUpdateOperationsInput | string
    reelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelClipCreateManyInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId: string
    reelId: string
  }

  export type ReelClipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReelClipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId?: StringFieldUpdateOperationsInput | string
    reelId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type ReelListRelationFilter = {
    every?: ReelWhereInput
    some?: ReelWhereInput
    none?: ReelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripOrderByRelevanceInput = {
    fields: TripOrderByRelevanceFieldEnum | TripOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type ReelClipListRelationFilter = {
    every?: ReelClipWhereInput
    some?: ReelClipWhereInput
    none?: ReelClipWhereInput
  }

  export type ReelClipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelevanceInput = {
    fields: MediaOrderByRelevanceFieldEnum | MediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    metadata?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LogOrderByRelevanceInput = {
    fields: LogOrderByRelevanceFieldEnum | LogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    tripId?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    tripId?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    tripId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReelTemplateOrderByRelevanceInput = {
    fields: ReelTemplateOrderByRelevanceFieldEnum | ReelTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReelTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    style?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelTemplateAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ReelTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    style?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    style?: SortOrder
    createdAt?: SortOrder
  }

  export type ReelTemplateSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ReelTemplateScalarRelationFilter = {
    is?: ReelTemplateWhereInput
    isNot?: ReelTemplateWhereInput
  }

  export type ReelOrderByRelevanceInput = {
    fields: ReelOrderByRelevanceFieldEnum | ReelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReelCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    caption?: SortOrder
    blogContent?: SortOrder
    hashtags?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type ReelAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ReelMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    caption?: SortOrder
    blogContent?: SortOrder
    hashtags?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type ReelMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    caption?: SortOrder
    blogContent?: SortOrder
    hashtags?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type ReelSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MediaScalarRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type ReelScalarRelationFilter = {
    is?: ReelWhereInput
    isNot?: ReelWhereInput
  }

  export type ReelClipOrderByRelevanceInput = {
    fields: ReelClipOrderByRelevanceFieldEnum | ReelClipOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReelClipCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    effects?: SortOrder
    mediaId?: SortOrder
    reelId?: SortOrder
  }

  export type ReelClipAvgOrderByAggregateInput = {
    order?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
  }

  export type ReelClipMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    mediaId?: SortOrder
    reelId?: SortOrder
  }

  export type ReelClipMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    mediaId?: SortOrder
    reelId?: SortOrder
  }

  export type ReelClipSumOrderByAggregateInput = {
    order?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutUserInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput> | MediaCreateWithoutUserInput[] | MediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput | MediaCreateOrConnectWithoutUserInput[]
    createMany?: MediaCreateManyUserInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ReelCreateNestedManyWithoutUserInput = {
    create?: XOR<ReelCreateWithoutUserInput, ReelUncheckedCreateWithoutUserInput> | ReelCreateWithoutUserInput[] | ReelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutUserInput | ReelCreateOrConnectWithoutUserInput[]
    createMany?: ReelCreateManyUserInputEnvelope
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput> | MediaCreateWithoutUserInput[] | MediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput | MediaCreateOrConnectWithoutUserInput[]
    createMany?: MediaCreateManyUserInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ReelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReelCreateWithoutUserInput, ReelUncheckedCreateWithoutUserInput> | ReelCreateWithoutUserInput[] | ReelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutUserInput | ReelCreateOrConnectWithoutUserInput[]
    createMany?: ReelCreateManyUserInputEnvelope
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutUserNestedInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput> | MediaCreateWithoutUserInput[] | MediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput | MediaCreateOrConnectWithoutUserInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutUserInput | MediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MediaCreateManyUserInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutUserInput | MediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutUserInput | MediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ReelUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReelCreateWithoutUserInput, ReelUncheckedCreateWithoutUserInput> | ReelCreateWithoutUserInput[] | ReelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutUserInput | ReelCreateOrConnectWithoutUserInput[]
    upsert?: ReelUpsertWithWhereUniqueWithoutUserInput | ReelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReelCreateManyUserInputEnvelope
    set?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    disconnect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    delete?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    update?: ReelUpdateWithWhereUniqueWithoutUserInput | ReelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReelUpdateManyWithWhereWithoutUserInput | ReelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReelScalarWhereInput | ReelScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput> | MediaCreateWithoutUserInput[] | MediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput | MediaCreateOrConnectWithoutUserInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutUserInput | MediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MediaCreateManyUserInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutUserInput | MediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutUserInput | MediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ReelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReelCreateWithoutUserInput, ReelUncheckedCreateWithoutUserInput> | ReelCreateWithoutUserInput[] | ReelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutUserInput | ReelCreateOrConnectWithoutUserInput[]
    upsert?: ReelUpsertWithWhereUniqueWithoutUserInput | ReelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReelCreateManyUserInputEnvelope
    set?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    disconnect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    delete?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    update?: ReelUpdateWithWhereUniqueWithoutUserInput | ReelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReelUpdateManyWithWhereWithoutUserInput | ReelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReelScalarWhereInput | ReelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTripsInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    connect?: UserWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutTripInput = {
    create?: XOR<MediaCreateWithoutTripInput, MediaUncheckedCreateWithoutTripInput> | MediaCreateWithoutTripInput[] | MediaUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTripInput | MediaCreateOrConnectWithoutTripInput[]
    createMany?: MediaCreateManyTripInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ReelCreateNestedManyWithoutTripInput = {
    create?: XOR<ReelCreateWithoutTripInput, ReelUncheckedCreateWithoutTripInput> | ReelCreateWithoutTripInput[] | ReelUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTripInput | ReelCreateOrConnectWithoutTripInput[]
    createMany?: ReelCreateManyTripInputEnvelope
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutTripInput = {
    create?: XOR<LogCreateWithoutTripInput, LogUncheckedCreateWithoutTripInput> | LogCreateWithoutTripInput[] | LogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTripInput | LogCreateOrConnectWithoutTripInput[]
    createMany?: LogCreateManyTripInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<MediaCreateWithoutTripInput, MediaUncheckedCreateWithoutTripInput> | MediaCreateWithoutTripInput[] | MediaUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTripInput | MediaCreateOrConnectWithoutTripInput[]
    createMany?: MediaCreateManyTripInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ReelUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ReelCreateWithoutTripInput, ReelUncheckedCreateWithoutTripInput> | ReelCreateWithoutTripInput[] | ReelUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTripInput | ReelCreateOrConnectWithoutTripInput[]
    createMany?: ReelCreateManyTripInputEnvelope
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<LogCreateWithoutTripInput, LogUncheckedCreateWithoutTripInput> | LogCreateWithoutTripInput[] | LogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTripInput | LogCreateOrConnectWithoutTripInput[]
    createMany?: LogCreateManyTripInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    upsert?: UserUpsertWithoutTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsInput, UserUpdateWithoutTripsInput>, UserUncheckedUpdateWithoutTripsInput>
  }

  export type MediaUpdateManyWithoutTripNestedInput = {
    create?: XOR<MediaCreateWithoutTripInput, MediaUncheckedCreateWithoutTripInput> | MediaCreateWithoutTripInput[] | MediaUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTripInput | MediaCreateOrConnectWithoutTripInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutTripInput | MediaUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: MediaCreateManyTripInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutTripInput | MediaUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutTripInput | MediaUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ReelUpdateManyWithoutTripNestedInput = {
    create?: XOR<ReelCreateWithoutTripInput, ReelUncheckedCreateWithoutTripInput> | ReelCreateWithoutTripInput[] | ReelUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTripInput | ReelCreateOrConnectWithoutTripInput[]
    upsert?: ReelUpsertWithWhereUniqueWithoutTripInput | ReelUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ReelCreateManyTripInputEnvelope
    set?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    disconnect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    delete?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    update?: ReelUpdateWithWhereUniqueWithoutTripInput | ReelUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ReelUpdateManyWithWhereWithoutTripInput | ReelUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ReelScalarWhereInput | ReelScalarWhereInput[]
  }

  export type LogUpdateManyWithoutTripNestedInput = {
    create?: XOR<LogCreateWithoutTripInput, LogUncheckedCreateWithoutTripInput> | LogCreateWithoutTripInput[] | LogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTripInput | LogCreateOrConnectWithoutTripInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutTripInput | LogUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: LogCreateManyTripInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutTripInput | LogUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: LogUpdateManyWithWhereWithoutTripInput | LogUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<MediaCreateWithoutTripInput, MediaUncheckedCreateWithoutTripInput> | MediaCreateWithoutTripInput[] | MediaUncheckedCreateWithoutTripInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutTripInput | MediaCreateOrConnectWithoutTripInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutTripInput | MediaUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: MediaCreateManyTripInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutTripInput | MediaUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutTripInput | MediaUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ReelUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ReelCreateWithoutTripInput, ReelUncheckedCreateWithoutTripInput> | ReelCreateWithoutTripInput[] | ReelUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTripInput | ReelCreateOrConnectWithoutTripInput[]
    upsert?: ReelUpsertWithWhereUniqueWithoutTripInput | ReelUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ReelCreateManyTripInputEnvelope
    set?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    disconnect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    delete?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    update?: ReelUpdateWithWhereUniqueWithoutTripInput | ReelUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ReelUpdateManyWithWhereWithoutTripInput | ReelUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ReelScalarWhereInput | ReelScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<LogCreateWithoutTripInput, LogUncheckedCreateWithoutTripInput> | LogCreateWithoutTripInput[] | LogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LogCreateOrConnectWithoutTripInput | LogCreateOrConnectWithoutTripInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutTripInput | LogUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: LogCreateManyTripInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutTripInput | LogUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: LogUpdateManyWithWhereWithoutTripInput | LogUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutMediaInput = {
    create?: XOR<TripCreateWithoutMediaInput, TripUncheckedCreateWithoutMediaInput>
    connectOrCreate?: TripCreateOrConnectWithoutMediaInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMediaInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    connect?: UserWhereUniqueInput
  }

  export type ReelClipCreateNestedManyWithoutMediaInput = {
    create?: XOR<ReelClipCreateWithoutMediaInput, ReelClipUncheckedCreateWithoutMediaInput> | ReelClipCreateWithoutMediaInput[] | ReelClipUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutMediaInput | ReelClipCreateOrConnectWithoutMediaInput[]
    createMany?: ReelClipCreateManyMediaInputEnvelope
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
  }

  export type ReelClipUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<ReelClipCreateWithoutMediaInput, ReelClipUncheckedCreateWithoutMediaInput> | ReelClipCreateWithoutMediaInput[] | ReelClipUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutMediaInput | ReelClipCreateOrConnectWithoutMediaInput[]
    createMany?: ReelClipCreateManyMediaInputEnvelope
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
  }

  export type TripUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<TripCreateWithoutMediaInput, TripUncheckedCreateWithoutMediaInput>
    connectOrCreate?: TripCreateOrConnectWithoutMediaInput
    upsert?: TripUpsertWithoutMediaInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutMediaInput, TripUpdateWithoutMediaInput>, TripUncheckedUpdateWithoutMediaInput>
  }

  export type UserUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    upsert?: UserUpsertWithoutMediaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediaInput, UserUpdateWithoutMediaInput>, UserUncheckedUpdateWithoutMediaInput>
  }

  export type ReelClipUpdateManyWithoutMediaNestedInput = {
    create?: XOR<ReelClipCreateWithoutMediaInput, ReelClipUncheckedCreateWithoutMediaInput> | ReelClipCreateWithoutMediaInput[] | ReelClipUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutMediaInput | ReelClipCreateOrConnectWithoutMediaInput[]
    upsert?: ReelClipUpsertWithWhereUniqueWithoutMediaInput | ReelClipUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: ReelClipCreateManyMediaInputEnvelope
    set?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    disconnect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    delete?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    update?: ReelClipUpdateWithWhereUniqueWithoutMediaInput | ReelClipUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: ReelClipUpdateManyWithWhereWithoutMediaInput | ReelClipUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: ReelClipScalarWhereInput | ReelClipScalarWhereInput[]
  }

  export type ReelClipUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<ReelClipCreateWithoutMediaInput, ReelClipUncheckedCreateWithoutMediaInput> | ReelClipCreateWithoutMediaInput[] | ReelClipUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutMediaInput | ReelClipCreateOrConnectWithoutMediaInput[]
    upsert?: ReelClipUpsertWithWhereUniqueWithoutMediaInput | ReelClipUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: ReelClipCreateManyMediaInputEnvelope
    set?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    disconnect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    delete?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    update?: ReelClipUpdateWithWhereUniqueWithoutMediaInput | ReelClipUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: ReelClipUpdateManyWithWhereWithoutMediaInput | ReelClipUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: ReelClipScalarWhereInput | ReelClipScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutLogsInput = {
    create?: XOR<TripCreateWithoutLogsInput, TripUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TripCreateOrConnectWithoutLogsInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<TripCreateWithoutLogsInput, TripUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TripCreateOrConnectWithoutLogsInput
    upsert?: TripUpsertWithoutLogsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutLogsInput, TripUpdateWithoutLogsInput>, TripUncheckedUpdateWithoutLogsInput>
  }

  export type ReelCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ReelCreateWithoutTemplateInput, ReelUncheckedCreateWithoutTemplateInput> | ReelCreateWithoutTemplateInput[] | ReelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTemplateInput | ReelCreateOrConnectWithoutTemplateInput[]
    createMany?: ReelCreateManyTemplateInputEnvelope
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
  }

  export type ReelUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ReelCreateWithoutTemplateInput, ReelUncheckedCreateWithoutTemplateInput> | ReelCreateWithoutTemplateInput[] | ReelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTemplateInput | ReelCreateOrConnectWithoutTemplateInput[]
    createMany?: ReelCreateManyTemplateInputEnvelope
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReelUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ReelCreateWithoutTemplateInput, ReelUncheckedCreateWithoutTemplateInput> | ReelCreateWithoutTemplateInput[] | ReelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTemplateInput | ReelCreateOrConnectWithoutTemplateInput[]
    upsert?: ReelUpsertWithWhereUniqueWithoutTemplateInput | ReelUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ReelCreateManyTemplateInputEnvelope
    set?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    disconnect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    delete?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    update?: ReelUpdateWithWhereUniqueWithoutTemplateInput | ReelUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ReelUpdateManyWithWhereWithoutTemplateInput | ReelUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ReelScalarWhereInput | ReelScalarWhereInput[]
  }

  export type ReelUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ReelCreateWithoutTemplateInput, ReelUncheckedCreateWithoutTemplateInput> | ReelCreateWithoutTemplateInput[] | ReelUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReelCreateOrConnectWithoutTemplateInput | ReelCreateOrConnectWithoutTemplateInput[]
    upsert?: ReelUpsertWithWhereUniqueWithoutTemplateInput | ReelUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ReelCreateManyTemplateInputEnvelope
    set?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    disconnect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    delete?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    connect?: ReelWhereUniqueInput | ReelWhereUniqueInput[]
    update?: ReelUpdateWithWhereUniqueWithoutTemplateInput | ReelUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ReelUpdateManyWithWhereWithoutTemplateInput | ReelUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ReelScalarWhereInput | ReelScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutReelsInput = {
    create?: XOR<TripCreateWithoutReelsInput, TripUncheckedCreateWithoutReelsInput>
    connectOrCreate?: TripCreateOrConnectWithoutReelsInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReelsInput = {
    create?: XOR<UserCreateWithoutReelsInput, UserUncheckedCreateWithoutReelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReelsInput
    connect?: UserWhereUniqueInput
  }

  export type ReelTemplateCreateNestedOneWithoutReelsInput = {
    create?: XOR<ReelTemplateCreateWithoutReelsInput, ReelTemplateUncheckedCreateWithoutReelsInput>
    connectOrCreate?: ReelTemplateCreateOrConnectWithoutReelsInput
    connect?: ReelTemplateWhereUniqueInput
  }

  export type ReelClipCreateNestedManyWithoutReelInput = {
    create?: XOR<ReelClipCreateWithoutReelInput, ReelClipUncheckedCreateWithoutReelInput> | ReelClipCreateWithoutReelInput[] | ReelClipUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutReelInput | ReelClipCreateOrConnectWithoutReelInput[]
    createMany?: ReelClipCreateManyReelInputEnvelope
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
  }

  export type ReelClipUncheckedCreateNestedManyWithoutReelInput = {
    create?: XOR<ReelClipCreateWithoutReelInput, ReelClipUncheckedCreateWithoutReelInput> | ReelClipCreateWithoutReelInput[] | ReelClipUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutReelInput | ReelClipCreateOrConnectWithoutReelInput[]
    createMany?: ReelClipCreateManyReelInputEnvelope
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripUpdateOneRequiredWithoutReelsNestedInput = {
    create?: XOR<TripCreateWithoutReelsInput, TripUncheckedCreateWithoutReelsInput>
    connectOrCreate?: TripCreateOrConnectWithoutReelsInput
    upsert?: TripUpsertWithoutReelsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutReelsInput, TripUpdateWithoutReelsInput>, TripUncheckedUpdateWithoutReelsInput>
  }

  export type UserUpdateOneRequiredWithoutReelsNestedInput = {
    create?: XOR<UserCreateWithoutReelsInput, UserUncheckedCreateWithoutReelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReelsInput
    upsert?: UserUpsertWithoutReelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReelsInput, UserUpdateWithoutReelsInput>, UserUncheckedUpdateWithoutReelsInput>
  }

  export type ReelTemplateUpdateOneRequiredWithoutReelsNestedInput = {
    create?: XOR<ReelTemplateCreateWithoutReelsInput, ReelTemplateUncheckedCreateWithoutReelsInput>
    connectOrCreate?: ReelTemplateCreateOrConnectWithoutReelsInput
    upsert?: ReelTemplateUpsertWithoutReelsInput
    connect?: ReelTemplateWhereUniqueInput
    update?: XOR<XOR<ReelTemplateUpdateToOneWithWhereWithoutReelsInput, ReelTemplateUpdateWithoutReelsInput>, ReelTemplateUncheckedUpdateWithoutReelsInput>
  }

  export type ReelClipUpdateManyWithoutReelNestedInput = {
    create?: XOR<ReelClipCreateWithoutReelInput, ReelClipUncheckedCreateWithoutReelInput> | ReelClipCreateWithoutReelInput[] | ReelClipUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutReelInput | ReelClipCreateOrConnectWithoutReelInput[]
    upsert?: ReelClipUpsertWithWhereUniqueWithoutReelInput | ReelClipUpsertWithWhereUniqueWithoutReelInput[]
    createMany?: ReelClipCreateManyReelInputEnvelope
    set?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    disconnect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    delete?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    update?: ReelClipUpdateWithWhereUniqueWithoutReelInput | ReelClipUpdateWithWhereUniqueWithoutReelInput[]
    updateMany?: ReelClipUpdateManyWithWhereWithoutReelInput | ReelClipUpdateManyWithWhereWithoutReelInput[]
    deleteMany?: ReelClipScalarWhereInput | ReelClipScalarWhereInput[]
  }

  export type ReelClipUncheckedUpdateManyWithoutReelNestedInput = {
    create?: XOR<ReelClipCreateWithoutReelInput, ReelClipUncheckedCreateWithoutReelInput> | ReelClipCreateWithoutReelInput[] | ReelClipUncheckedCreateWithoutReelInput[]
    connectOrCreate?: ReelClipCreateOrConnectWithoutReelInput | ReelClipCreateOrConnectWithoutReelInput[]
    upsert?: ReelClipUpsertWithWhereUniqueWithoutReelInput | ReelClipUpsertWithWhereUniqueWithoutReelInput[]
    createMany?: ReelClipCreateManyReelInputEnvelope
    set?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    disconnect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    delete?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    connect?: ReelClipWhereUniqueInput | ReelClipWhereUniqueInput[]
    update?: ReelClipUpdateWithWhereUniqueWithoutReelInput | ReelClipUpdateWithWhereUniqueWithoutReelInput[]
    updateMany?: ReelClipUpdateManyWithWhereWithoutReelInput | ReelClipUpdateManyWithWhereWithoutReelInput[]
    deleteMany?: ReelClipScalarWhereInput | ReelClipScalarWhereInput[]
  }

  export type MediaCreateNestedOneWithoutReelClipsInput = {
    create?: XOR<MediaCreateWithoutReelClipsInput, MediaUncheckedCreateWithoutReelClipsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutReelClipsInput
    connect?: MediaWhereUniqueInput
  }

  export type ReelCreateNestedOneWithoutClipsInput = {
    create?: XOR<ReelCreateWithoutClipsInput, ReelUncheckedCreateWithoutClipsInput>
    connectOrCreate?: ReelCreateOrConnectWithoutClipsInput
    connect?: ReelWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MediaUpdateOneRequiredWithoutReelClipsNestedInput = {
    create?: XOR<MediaCreateWithoutReelClipsInput, MediaUncheckedCreateWithoutReelClipsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutReelClipsInput
    upsert?: MediaUpsertWithoutReelClipsInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutReelClipsInput, MediaUpdateWithoutReelClipsInput>, MediaUncheckedUpdateWithoutReelClipsInput>
  }

  export type ReelUpdateOneRequiredWithoutClipsNestedInput = {
    create?: XOR<ReelCreateWithoutClipsInput, ReelUncheckedCreateWithoutClipsInput>
    connectOrCreate?: ReelCreateOrConnectWithoutClipsInput
    upsert?: ReelUpsertWithoutClipsInput
    connect?: ReelWhereUniqueInput
    update?: XOR<XOR<ReelUpdateToOneWithWhereWithoutClipsInput, ReelUpdateWithoutClipsInput>, ReelUncheckedUpdateWithoutClipsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TripCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaCreateNestedManyWithoutTripInput
    reels?: ReelCreateNestedManyWithoutTripInput
    logs?: LogCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutTripInput
    reels?: ReelUncheckedCreateNestedManyWithoutTripInput
    logs?: LogUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutUserInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripCreateManyUserInputEnvelope = {
    data: TripCreateManyUserInput | TripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutUserInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutMediaInput
    reelClips?: ReelClipCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutUserInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    tripId: string
    reelClips?: ReelClipUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutUserInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
  }

  export type MediaCreateManyUserInputEnvelope = {
    data: MediaCreateManyUserInput | MediaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReelCreateWithoutUserInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutReelsInput
    template: ReelTemplateCreateNestedOneWithoutReelsInput
    clips?: ReelClipCreateNestedManyWithoutReelInput
  }

  export type ReelUncheckedCreateWithoutUserInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: string
    templateId: string
    clips?: ReelClipUncheckedCreateNestedManyWithoutReelInput
  }

  export type ReelCreateOrConnectWithoutUserInput = {
    where: ReelWhereUniqueInput
    create: XOR<ReelCreateWithoutUserInput, ReelUncheckedCreateWithoutUserInput>
  }

  export type ReelCreateManyUserInputEnvelope = {
    data: ReelCreateManyUserInput | ReelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
  }

  export type TripUpdateManyWithWhereWithoutUserInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    destination?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    userId?: StringFilter<"Trip"> | string
  }

  export type MediaUpsertWithWhereUniqueWithoutUserInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutUserInput, MediaUncheckedUpdateWithoutUserInput>
    create: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutUserInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutUserInput, MediaUncheckedUpdateWithoutUserInput>
  }

  export type MediaUpdateManyWithWhereWithoutUserInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutUserInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    mediaUrl?: StringFilter<"Media"> | string
    mediaType?: StringFilter<"Media"> | string
    caption?: StringNullableFilter<"Media"> | string | null
    location?: StringNullableFilter<"Media"> | string | null
    metadata?: JsonNullableFilter<"Media">
    timestamp?: DateTimeFilter<"Media"> | Date | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    tripId?: StringFilter<"Media"> | string
    userId?: StringFilter<"Media"> | string
  }

  export type ReelUpsertWithWhereUniqueWithoutUserInput = {
    where: ReelWhereUniqueInput
    update: XOR<ReelUpdateWithoutUserInput, ReelUncheckedUpdateWithoutUserInput>
    create: XOR<ReelCreateWithoutUserInput, ReelUncheckedCreateWithoutUserInput>
  }

  export type ReelUpdateWithWhereUniqueWithoutUserInput = {
    where: ReelWhereUniqueInput
    data: XOR<ReelUpdateWithoutUserInput, ReelUncheckedUpdateWithoutUserInput>
  }

  export type ReelUpdateManyWithWhereWithoutUserInput = {
    where: ReelScalarWhereInput
    data: XOR<ReelUpdateManyMutationInput, ReelUncheckedUpdateManyWithoutUserInput>
  }

  export type ReelScalarWhereInput = {
    AND?: ReelScalarWhereInput | ReelScalarWhereInput[]
    OR?: ReelScalarWhereInput[]
    NOT?: ReelScalarWhereInput | ReelScalarWhereInput[]
    id?: StringFilter<"Reel"> | string
    status?: StringFilter<"Reel"> | string
    outputUrl?: StringNullableFilter<"Reel"> | string | null
    caption?: StringNullableFilter<"Reel"> | string | null
    blogContent?: StringNullableFilter<"Reel"> | string | null
    hashtags?: StringNullableFilter<"Reel"> | string | null
    duration?: IntNullableFilter<"Reel"> | number | null
    createdAt?: DateTimeFilter<"Reel"> | Date | string
    updatedAt?: DateTimeFilter<"Reel"> | Date | string
    tripId?: StringFilter<"Reel"> | string
    userId?: StringFilter<"Reel"> | string
    templateId?: StringFilter<"Reel"> | string
  }

  export type UserCreateWithoutTripsInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaCreateNestedManyWithoutUserInput
    reels?: ReelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaUncheckedCreateNestedManyWithoutUserInput
    reels?: ReelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
  }

  export type MediaCreateWithoutTripInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMediaInput
    reelClips?: ReelClipCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutTripInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    userId: string
    reelClips?: ReelClipUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutTripInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutTripInput, MediaUncheckedCreateWithoutTripInput>
  }

  export type MediaCreateManyTripInputEnvelope = {
    data: MediaCreateManyTripInput | MediaCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type ReelCreateWithoutTripInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReelsInput
    template: ReelTemplateCreateNestedOneWithoutReelsInput
    clips?: ReelClipCreateNestedManyWithoutReelInput
  }

  export type ReelUncheckedCreateWithoutTripInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    templateId: string
    clips?: ReelClipUncheckedCreateNestedManyWithoutReelInput
  }

  export type ReelCreateOrConnectWithoutTripInput = {
    where: ReelWhereUniqueInput
    create: XOR<ReelCreateWithoutTripInput, ReelUncheckedCreateWithoutTripInput>
  }

  export type ReelCreateManyTripInputEnvelope = {
    data: ReelCreateManyTripInput | ReelCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutTripInput = {
    id?: string
    content: string
    timestamp?: Date | string
  }

  export type LogUncheckedCreateWithoutTripInput = {
    id?: string
    content: string
    timestamp?: Date | string
  }

  export type LogCreateOrConnectWithoutTripInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutTripInput, LogUncheckedCreateWithoutTripInput>
  }

  export type LogCreateManyTripInputEnvelope = {
    data: LogCreateManyTripInput | LogCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTripsInput = {
    update: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateManyWithoutUserNestedInput
    reels?: ReelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput
    reels?: ReelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MediaUpsertWithWhereUniqueWithoutTripInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutTripInput, MediaUncheckedUpdateWithoutTripInput>
    create: XOR<MediaCreateWithoutTripInput, MediaUncheckedCreateWithoutTripInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutTripInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutTripInput, MediaUncheckedUpdateWithoutTripInput>
  }

  export type MediaUpdateManyWithWhereWithoutTripInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutTripInput>
  }

  export type ReelUpsertWithWhereUniqueWithoutTripInput = {
    where: ReelWhereUniqueInput
    update: XOR<ReelUpdateWithoutTripInput, ReelUncheckedUpdateWithoutTripInput>
    create: XOR<ReelCreateWithoutTripInput, ReelUncheckedCreateWithoutTripInput>
  }

  export type ReelUpdateWithWhereUniqueWithoutTripInput = {
    where: ReelWhereUniqueInput
    data: XOR<ReelUpdateWithoutTripInput, ReelUncheckedUpdateWithoutTripInput>
  }

  export type ReelUpdateManyWithWhereWithoutTripInput = {
    where: ReelScalarWhereInput
    data: XOR<ReelUpdateManyMutationInput, ReelUncheckedUpdateManyWithoutTripInput>
  }

  export type LogUpsertWithWhereUniqueWithoutTripInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutTripInput, LogUncheckedUpdateWithoutTripInput>
    create: XOR<LogCreateWithoutTripInput, LogUncheckedCreateWithoutTripInput>
  }

  export type LogUpdateWithWhereUniqueWithoutTripInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutTripInput, LogUncheckedUpdateWithoutTripInput>
  }

  export type LogUpdateManyWithWhereWithoutTripInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutTripInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    content?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    tripId?: StringFilter<"Log"> | string
  }

  export type TripCreateWithoutMediaInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    reels?: ReelCreateNestedManyWithoutTripInput
    logs?: LogCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutMediaInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    reels?: ReelUncheckedCreateNestedManyWithoutTripInput
    logs?: LogUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutMediaInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutMediaInput, TripUncheckedCreateWithoutMediaInput>
  }

  export type UserCreateWithoutMediaInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    reels?: ReelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMediaInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    reels?: ReelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
  }

  export type ReelClipCreateWithoutMediaInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    reel: ReelCreateNestedOneWithoutClipsInput
  }

  export type ReelClipUncheckedCreateWithoutMediaInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    reelId: string
  }

  export type ReelClipCreateOrConnectWithoutMediaInput = {
    where: ReelClipWhereUniqueInput
    create: XOR<ReelClipCreateWithoutMediaInput, ReelClipUncheckedCreateWithoutMediaInput>
  }

  export type ReelClipCreateManyMediaInputEnvelope = {
    data: ReelClipCreateManyMediaInput | ReelClipCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithoutMediaInput = {
    update: XOR<TripUpdateWithoutMediaInput, TripUncheckedUpdateWithoutMediaInput>
    create: XOR<TripCreateWithoutMediaInput, TripUncheckedCreateWithoutMediaInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutMediaInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutMediaInput, TripUncheckedUpdateWithoutMediaInput>
  }

  export type TripUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    reels?: ReelUpdateManyWithoutTripNestedInput
    logs?: LogUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reels?: ReelUncheckedUpdateManyWithoutTripNestedInput
    logs?: LogUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutMediaInput = {
    update: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
  }

  export type UserUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    reels?: ReelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    reels?: ReelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReelClipUpsertWithWhereUniqueWithoutMediaInput = {
    where: ReelClipWhereUniqueInput
    update: XOR<ReelClipUpdateWithoutMediaInput, ReelClipUncheckedUpdateWithoutMediaInput>
    create: XOR<ReelClipCreateWithoutMediaInput, ReelClipUncheckedCreateWithoutMediaInput>
  }

  export type ReelClipUpdateWithWhereUniqueWithoutMediaInput = {
    where: ReelClipWhereUniqueInput
    data: XOR<ReelClipUpdateWithoutMediaInput, ReelClipUncheckedUpdateWithoutMediaInput>
  }

  export type ReelClipUpdateManyWithWhereWithoutMediaInput = {
    where: ReelClipScalarWhereInput
    data: XOR<ReelClipUpdateManyMutationInput, ReelClipUncheckedUpdateManyWithoutMediaInput>
  }

  export type ReelClipScalarWhereInput = {
    AND?: ReelClipScalarWhereInput | ReelClipScalarWhereInput[]
    OR?: ReelClipScalarWhereInput[]
    NOT?: ReelClipScalarWhereInput | ReelClipScalarWhereInput[]
    id?: StringFilter<"ReelClip"> | string
    order?: IntFilter<"ReelClip"> | number
    startTime?: FloatFilter<"ReelClip"> | number
    duration?: FloatFilter<"ReelClip"> | number
    effects?: JsonNullableFilter<"ReelClip">
    mediaId?: StringFilter<"ReelClip"> | string
    reelId?: StringFilter<"ReelClip"> | string
  }

  export type TripCreateWithoutLogsInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    media?: MediaCreateNestedManyWithoutTripInput
    reels?: ReelCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutLogsInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    media?: MediaUncheckedCreateNestedManyWithoutTripInput
    reels?: ReelUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutLogsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutLogsInput, TripUncheckedCreateWithoutLogsInput>
  }

  export type TripUpsertWithoutLogsInput = {
    update: XOR<TripUpdateWithoutLogsInput, TripUncheckedUpdateWithoutLogsInput>
    create: XOR<TripCreateWithoutLogsInput, TripUncheckedCreateWithoutLogsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutLogsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutLogsInput, TripUncheckedUpdateWithoutLogsInput>
  }

  export type TripUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    media?: MediaUpdateManyWithoutTripNestedInput
    reels?: ReelUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    media?: MediaUncheckedUpdateManyWithoutTripNestedInput
    reels?: ReelUncheckedUpdateManyWithoutTripNestedInput
  }

  export type ReelCreateWithoutTemplateInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutReelsInput
    user: UserCreateNestedOneWithoutReelsInput
    clips?: ReelClipCreateNestedManyWithoutReelInput
  }

  export type ReelUncheckedCreateWithoutTemplateInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: string
    userId: string
    clips?: ReelClipUncheckedCreateNestedManyWithoutReelInput
  }

  export type ReelCreateOrConnectWithoutTemplateInput = {
    where: ReelWhereUniqueInput
    create: XOR<ReelCreateWithoutTemplateInput, ReelUncheckedCreateWithoutTemplateInput>
  }

  export type ReelCreateManyTemplateInputEnvelope = {
    data: ReelCreateManyTemplateInput | ReelCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ReelUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ReelWhereUniqueInput
    update: XOR<ReelUpdateWithoutTemplateInput, ReelUncheckedUpdateWithoutTemplateInput>
    create: XOR<ReelCreateWithoutTemplateInput, ReelUncheckedCreateWithoutTemplateInput>
  }

  export type ReelUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ReelWhereUniqueInput
    data: XOR<ReelUpdateWithoutTemplateInput, ReelUncheckedUpdateWithoutTemplateInput>
  }

  export type ReelUpdateManyWithWhereWithoutTemplateInput = {
    where: ReelScalarWhereInput
    data: XOR<ReelUpdateManyMutationInput, ReelUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TripCreateWithoutReelsInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    media?: MediaCreateNestedManyWithoutTripInput
    logs?: LogCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutReelsInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    media?: MediaUncheckedCreateNestedManyWithoutTripInput
    logs?: LogUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutReelsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutReelsInput, TripUncheckedCreateWithoutReelsInput>
  }

  export type UserCreateWithoutReelsInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    media?: MediaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReelsInput = {
    id?: string
    email: string
    name?: string | null
    username?: string | null
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    media?: MediaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReelsInput, UserUncheckedCreateWithoutReelsInput>
  }

  export type ReelTemplateCreateWithoutReelsInput = {
    id?: string
    name: string
    description?: string | null
    duration: number
    style: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReelTemplateUncheckedCreateWithoutReelsInput = {
    id?: string
    name: string
    description?: string | null
    duration: number
    style: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ReelTemplateCreateOrConnectWithoutReelsInput = {
    where: ReelTemplateWhereUniqueInput
    create: XOR<ReelTemplateCreateWithoutReelsInput, ReelTemplateUncheckedCreateWithoutReelsInput>
  }

  export type ReelClipCreateWithoutReelInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    media: MediaCreateNestedOneWithoutReelClipsInput
  }

  export type ReelClipUncheckedCreateWithoutReelInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId: string
  }

  export type ReelClipCreateOrConnectWithoutReelInput = {
    where: ReelClipWhereUniqueInput
    create: XOR<ReelClipCreateWithoutReelInput, ReelClipUncheckedCreateWithoutReelInput>
  }

  export type ReelClipCreateManyReelInputEnvelope = {
    data: ReelClipCreateManyReelInput | ReelClipCreateManyReelInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithoutReelsInput = {
    update: XOR<TripUpdateWithoutReelsInput, TripUncheckedUpdateWithoutReelsInput>
    create: XOR<TripCreateWithoutReelsInput, TripUncheckedCreateWithoutReelsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutReelsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutReelsInput, TripUncheckedUpdateWithoutReelsInput>
  }

  export type TripUpdateWithoutReelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    media?: MediaUpdateManyWithoutTripNestedInput
    logs?: LogUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutReelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    media?: MediaUncheckedUpdateManyWithoutTripNestedInput
    logs?: LogUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutReelsInput = {
    update: XOR<UserUpdateWithoutReelsInput, UserUncheckedUpdateWithoutReelsInput>
    create: XOR<UserCreateWithoutReelsInput, UserUncheckedCreateWithoutReelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReelsInput, UserUncheckedUpdateWithoutReelsInput>
  }

  export type UserUpdateWithoutReelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    media?: MediaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    media?: MediaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReelTemplateUpsertWithoutReelsInput = {
    update: XOR<ReelTemplateUpdateWithoutReelsInput, ReelTemplateUncheckedUpdateWithoutReelsInput>
    create: XOR<ReelTemplateCreateWithoutReelsInput, ReelTemplateUncheckedCreateWithoutReelsInput>
    where?: ReelTemplateWhereInput
  }

  export type ReelTemplateUpdateToOneWithWhereWithoutReelsInput = {
    where?: ReelTemplateWhereInput
    data: XOR<ReelTemplateUpdateWithoutReelsInput, ReelTemplateUncheckedUpdateWithoutReelsInput>
  }

  export type ReelTemplateUpdateWithoutReelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelTemplateUncheckedUpdateWithoutReelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelClipUpsertWithWhereUniqueWithoutReelInput = {
    where: ReelClipWhereUniqueInput
    update: XOR<ReelClipUpdateWithoutReelInput, ReelClipUncheckedUpdateWithoutReelInput>
    create: XOR<ReelClipCreateWithoutReelInput, ReelClipUncheckedCreateWithoutReelInput>
  }

  export type ReelClipUpdateWithWhereUniqueWithoutReelInput = {
    where: ReelClipWhereUniqueInput
    data: XOR<ReelClipUpdateWithoutReelInput, ReelClipUncheckedUpdateWithoutReelInput>
  }

  export type ReelClipUpdateManyWithWhereWithoutReelInput = {
    where: ReelClipScalarWhereInput
    data: XOR<ReelClipUpdateManyMutationInput, ReelClipUncheckedUpdateManyWithoutReelInput>
  }

  export type MediaCreateWithoutReelClipsInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutMediaInput
    user: UserCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutReelClipsInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    tripId: string
    userId: string
  }

  export type MediaCreateOrConnectWithoutReelClipsInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutReelClipsInput, MediaUncheckedCreateWithoutReelClipsInput>
  }

  export type ReelCreateWithoutClipsInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutReelsInput
    user: UserCreateNestedOneWithoutReelsInput
    template: ReelTemplateCreateNestedOneWithoutReelsInput
  }

  export type ReelUncheckedCreateWithoutClipsInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: string
    userId: string
    templateId: string
  }

  export type ReelCreateOrConnectWithoutClipsInput = {
    where: ReelWhereUniqueInput
    create: XOR<ReelCreateWithoutClipsInput, ReelUncheckedCreateWithoutClipsInput>
  }

  export type MediaUpsertWithoutReelClipsInput = {
    update: XOR<MediaUpdateWithoutReelClipsInput, MediaUncheckedUpdateWithoutReelClipsInput>
    create: XOR<MediaCreateWithoutReelClipsInput, MediaUncheckedCreateWithoutReelClipsInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutReelClipsInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutReelClipsInput, MediaUncheckedUpdateWithoutReelClipsInput>
  }

  export type MediaUpdateWithoutReelClipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutMediaNestedInput
    user?: UserUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutReelClipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelUpsertWithoutClipsInput = {
    update: XOR<ReelUpdateWithoutClipsInput, ReelUncheckedUpdateWithoutClipsInput>
    create: XOR<ReelCreateWithoutClipsInput, ReelUncheckedCreateWithoutClipsInput>
    where?: ReelWhereInput
  }

  export type ReelUpdateToOneWithWhereWithoutClipsInput = {
    where?: ReelWhereInput
    data: XOR<ReelUpdateWithoutClipsInput, ReelUncheckedUpdateWithoutClipsInput>
  }

  export type ReelUpdateWithoutClipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutReelsNestedInput
    user?: UserUpdateOneRequiredWithoutReelsNestedInput
    template?: ReelTemplateUpdateOneRequiredWithoutReelsNestedInput
  }

  export type ReelUncheckedUpdateWithoutClipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type TripCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateManyUserInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    tripId: string
  }

  export type ReelCreateManyUserInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: string
    templateId: string
  }

  export type TripUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateManyWithoutTripNestedInput
    reels?: ReelUpdateManyWithoutTripNestedInput
    logs?: LogUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUncheckedUpdateManyWithoutTripNestedInput
    reels?: ReelUncheckedUpdateManyWithoutTripNestedInput
    logs?: LogUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutMediaNestedInput
    reelClips?: ReelClipUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    reelClips?: ReelClipUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutReelsNestedInput
    template?: ReelTemplateUpdateOneRequiredWithoutReelsNestedInput
    clips?: ReelClipUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    clips?: ReelClipUncheckedUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateManyTripInput = {
    id?: string
    mediaUrl: string
    mediaType?: string
    caption?: string | null
    location?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type ReelCreateManyTripInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    templateId: string
  }

  export type LogCreateManyTripInput = {
    id?: string
    content: string
    timestamp?: Date | string
  }

  export type MediaUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMediaNestedInput
    reelClips?: ReelClipUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reelClips?: ReelClipUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReelsNestedInput
    template?: ReelTemplateUpdateOneRequiredWithoutReelsNestedInput
    clips?: ReelClipUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    clips?: ReelClipUncheckedUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type LogUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelClipCreateManyMediaInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    reelId: string
  }

  export type ReelClipUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    reel?: ReelUpdateOneRequiredWithoutClipsNestedInput
  }

  export type ReelClipUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    reelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelClipUncheckedUpdateManyWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    reelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelCreateManyTemplateInput = {
    id?: string
    status?: string
    outputUrl?: string | null
    caption?: string | null
    blogContent?: string | null
    hashtags?: string | null
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripId: string
    userId: string
  }

  export type ReelUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutReelsNestedInput
    user?: UserUpdateOneRequiredWithoutReelsNestedInput
    clips?: ReelClipUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clips?: ReelClipUncheckedUpdateManyWithoutReelNestedInput
  }

  export type ReelUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    blogContent?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelClipCreateManyReelInput = {
    id?: string
    order: number
    startTime: number
    duration: number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId: string
  }

  export type ReelClipUpdateWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    media?: MediaUpdateOneRequiredWithoutReelClipsNestedInput
  }

  export type ReelClipUncheckedUpdateWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type ReelClipUncheckedUpdateManyWithoutReelInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    startTime?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    effects?: NullableJsonNullValueInput | InputJsonValue
    mediaId?: StringFieldUpdateOperationsInput | string
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