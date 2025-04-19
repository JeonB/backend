/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Study
 *
 */
export type Study = $Result.DefaultSelection<Prisma.$StudyPayload>;
/**
 * Model StudyMember
 *
 */
export type StudyMember = $Result.DefaultSelection<Prisma.$StudyMemberPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
    PENDING: 'PENDING';
    ACCEPTED: 'ACCEPTED';
    REJECTED: 'REJECTED';
  };

  export type Status = (typeof Status)[keyof typeof Status];
}

export type Status = $Enums.Status;

export const Status: typeof $Enums.Status;

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
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

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

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

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
   * `prisma.study`: Exposes CRUD operations for the **Study** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Studies
   * const studies = await prisma.study.findMany()
   * ```
   */
  get study(): Prisma.StudyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyMember`: Exposes CRUD operations for the **StudyMember** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more StudyMembers
   * const studyMembers = await prisma.studyMember.findMany()
   * ```
   */
  get studyMember(): Prisma.StudyMemberDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Study: 'Study';
    StudyMember: 'StudyMember';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'study' | 'studyMember';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Study: {
        payload: Prisma.$StudyPayload<ExtArgs>;
        fields: Prisma.StudyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StudyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StudyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>;
          };
          findFirst: {
            args: Prisma.StudyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StudyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>;
          };
          findMany: {
            args: Prisma.StudyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[];
          };
          create: {
            args: Prisma.StudyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>;
          };
          createMany: {
            args: Prisma.StudyCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StudyCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[];
          };
          delete: {
            args: Prisma.StudyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>;
          };
          update: {
            args: Prisma.StudyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>;
          };
          deleteMany: {
            args: Prisma.StudyDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StudyUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.StudyUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[];
          };
          upsert: {
            args: Prisma.StudyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>;
          };
          aggregate: {
            args: Prisma.StudyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudy>;
          };
          groupBy: {
            args: Prisma.StudyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudyGroupByOutputType>[];
          };
          count: {
            args: Prisma.StudyCountArgs<ExtArgs>;
            result: $Utils.Optional<StudyCountAggregateOutputType> | number;
          };
        };
      };
      StudyMember: {
        payload: Prisma.$StudyMemberPayload<ExtArgs>;
        fields: Prisma.StudyMemberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StudyMemberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StudyMemberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>;
          };
          findFirst: {
            args: Prisma.StudyMemberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StudyMemberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>;
          };
          findMany: {
            args: Prisma.StudyMemberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>[];
          };
          create: {
            args: Prisma.StudyMemberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>;
          };
          createMany: {
            args: Prisma.StudyMemberCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StudyMemberCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>[];
          };
          delete: {
            args: Prisma.StudyMemberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>;
          };
          update: {
            args: Prisma.StudyMemberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>;
          };
          deleteMany: {
            args: Prisma.StudyMemberDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StudyMemberUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.StudyMemberUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>[];
          };
          upsert: {
            args: Prisma.StudyMemberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudyMemberPayload>;
          };
          aggregate: {
            args: Prisma.StudyMemberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudyMember>;
          };
          groupBy: {
            args: Prisma.StudyMemberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudyMemberGroupByOutputType>[];
          };
          count: {
            args: Prisma.StudyMemberCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<StudyMemberCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    study?: StudyOmit;
    studyMember?: StudyMemberOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    studiesCreated: number;
    studyMembers: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    studiesCreated?: boolean | UserCountOutputTypeCountStudiesCreatedArgs;
    studyMembers?: boolean | UserCountOutputTypeCountStudyMembersArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudiesCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StudyWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudyMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StudyMemberWhereInput;
  };

  /**
   * Count Type StudyCountOutputType
   */

  export type StudyCountOutputType = {
    members: number;
  };

  export type StudyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | StudyCountOutputTypeCountMembersArgs;
  };

  // Custom InputTypes
  /**
   * StudyCountOutputType without action
   */
  export type StudyCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyCountOutputType
     */
    select?: StudyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StudyCountOutputType without action
   */
  export type StudyCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StudyMemberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    name: number;
    bio: number;
    interests: number;
    availableDays: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    bio?: true;
    interests?: true;
    availableDays?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    name: string;
    bio: string | null;
    interests: string[];
    availableDays: string[];
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      bio?: boolean;
      interests?: boolean;
      availableDays?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      studiesCreated?: boolean | User$studiesCreatedArgs<ExtArgs>;
      studyMembers?: boolean | User$studyMembersArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      bio?: boolean;
      interests?: boolean;
      availableDays?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      bio?: boolean;
      interests?: boolean;
      availableDays?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    bio?: boolean;
    interests?: boolean;
    availableDays?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'password'
    | 'name'
    | 'bio'
    | 'interests'
    | 'availableDays'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    studiesCreated?: boolean | User$studiesCreatedArgs<ExtArgs>;
    studyMembers?: boolean | User$studyMembersArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      studiesCreated: Prisma.$StudyPayload<ExtArgs>[];
      studyMembers: Prisma.$StudyMemberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password: string;
        name: string;
        bio: string | null;
        interests: string[];
        availableDays: string[];
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    studiesCreated<T extends User$studiesCreatedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$studiesCreatedArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$StudyPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    studyMembers<T extends User$studyMembersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$studyMembersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$StudyMemberPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly bio: FieldRef<'User', 'String'>;
    readonly interests: FieldRef<'User', 'String[]'>;
    readonly availableDays: FieldRef<'User', 'String[]'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.studiesCreated
   */
  export type User$studiesCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    where?: StudyWhereInput;
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[];
    cursor?: StudyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[];
  };

  /**
   * User.studyMembers
   */
  export type User$studyMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    where?: StudyMemberWhereInput;
    orderBy?:
      | StudyMemberOrderByWithRelationInput
      | StudyMemberOrderByWithRelationInput[];
    cursor?: StudyMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudyMemberScalarFieldEnum | StudyMemberScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Study
   */

  export type AggregateStudy = {
    _count: StudyCountAggregateOutputType | null;
    _avg: StudyAvgAggregateOutputType | null;
    _sum: StudySumAggregateOutputType | null;
    _min: StudyMinAggregateOutputType | null;
    _max: StudyMaxAggregateOutputType | null;
  };

  export type StudyAvgAggregateOutputType = {
    maxParticipants: number | null;
  };

  export type StudySumAggregateOutputType = {
    maxParticipants: number | null;
  };

  export type StudyMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    dayOfWeek: string | null;
    time: string | null;
    maxParticipants: number | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type StudyMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    dayOfWeek: string | null;
    time: string | null;
    maxParticipants: number | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type StudyCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    tags: number;
    dayOfWeek: number;
    time: number;
    maxParticipants: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type StudyAvgAggregateInputType = {
    maxParticipants?: true;
  };

  export type StudySumAggregateInputType = {
    maxParticipants?: true;
  };

  export type StudyMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    dayOfWeek?: true;
    time?: true;
    maxParticipants?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type StudyMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    dayOfWeek?: true;
    time?: true;
    maxParticipants?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type StudyCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    tags?: true;
    dayOfWeek?: true;
    time?: true;
    maxParticipants?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type StudyAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Study to aggregate.
     */
    where?: StudyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StudyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Studies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Studies
     **/
    _count?: true | StudyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StudyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StudySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudyMaxAggregateInputType;
  };

  export type GetStudyAggregateType<T extends StudyAggregateArgs> = {
    [P in keyof T & keyof AggregateStudy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudy[P]>
      : GetScalarType<T[P], AggregateStudy[P]>;
  };

  export type StudyGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StudyWhereInput;
    orderBy?:
      | StudyOrderByWithAggregationInput
      | StudyOrderByWithAggregationInput[];
    by: StudyScalarFieldEnum[] | StudyScalarFieldEnum;
    having?: StudyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudyCountAggregateInputType | true;
    _avg?: StudyAvgAggregateInputType;
    _sum?: StudySumAggregateInputType;
    _min?: StudyMinAggregateInputType;
    _max?: StudyMaxAggregateInputType;
  };

  export type StudyGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: StudyCountAggregateOutputType | null;
    _avg: StudyAvgAggregateOutputType | null;
    _sum: StudySumAggregateOutputType | null;
    _min: StudyMinAggregateOutputType | null;
    _max: StudyMaxAggregateOutputType | null;
  };

  type GetStudyGroupByPayload<T extends StudyGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<StudyGroupByOutputType, T['by']> & {
          [P in keyof T & keyof StudyGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyGroupByOutputType[P]>
            : GetScalarType<T[P], StudyGroupByOutputType[P]>;
        }
      >
    >;

  export type StudySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      tags?: boolean;
      dayOfWeek?: boolean;
      time?: boolean;
      maxParticipants?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      members?: boolean | Study$membersArgs<ExtArgs>;
      _count?: boolean | StudyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['study']
  >;

  export type StudySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      tags?: boolean;
      dayOfWeek?: boolean;
      time?: boolean;
      maxParticipants?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['study']
  >;

  export type StudySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      tags?: boolean;
      dayOfWeek?: boolean;
      time?: boolean;
      maxParticipants?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['study']
  >;

  export type StudySelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    tags?: boolean;
    dayOfWeek?: boolean;
    time?: boolean;
    maxParticipants?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type StudyOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'description'
    | 'tags'
    | 'dayOfWeek'
    | 'time'
    | 'maxParticipants'
    | 'createdById'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['study']
  >;
  export type StudyInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    members?: boolean | Study$membersArgs<ExtArgs>;
    _count?: boolean | StudyCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type StudyIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type StudyIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $StudyPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Study';
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>;
      members: Prisma.$StudyMemberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        tags: string[];
        dayOfWeek: string;
        time: string;
        maxParticipants: number;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['study']
    >;
    composites: {};
  };

  type StudyGetPayload<
    S extends boolean | null | undefined | StudyDefaultArgs,
  > = $Result.GetResult<Prisma.$StudyPayload, S>;

  type StudyCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<StudyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudyCountAggregateInputType | true;
  };

  export interface StudyDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Study'];
      meta: { name: 'Study' };
    };
    /**
     * Find zero or one Study that matches the filter.
     * @param {StudyFindUniqueArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyFindUniqueArgs>(
      args: SelectSubset<T, StudyFindUniqueArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Study that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyFindUniqueOrThrowArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StudyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Study that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindFirstArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyFindFirstArgs>(
      args?: SelectSubset<T, StudyFindFirstArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Study that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindFirstOrThrowArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Studies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studies
     * const studies = await prisma.study.findMany()
     *
     * // Get first 10 Studies
     * const studies = await prisma.study.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studyWithIdOnly = await prisma.study.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StudyFindManyArgs>(
      args?: SelectSubset<T, StudyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Study.
     * @param {StudyCreateArgs} args - Arguments to create a Study.
     * @example
     * // Create one Study
     * const Study = await prisma.study.create({
     *   data: {
     *     // ... data to create a Study
     *   }
     * })
     *
     */
    create<T extends StudyCreateArgs>(
      args: SelectSubset<T, StudyCreateArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Studies.
     * @param {StudyCreateManyArgs} args - Arguments to create many Studies.
     * @example
     * // Create many Studies
     * const study = await prisma.study.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StudyCreateManyArgs>(
      args?: SelectSubset<T, StudyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Studies and returns the data saved in the database.
     * @param {StudyCreateManyAndReturnArgs} args - Arguments to create many Studies.
     * @example
     * // Create many Studies
     * const study = await prisma.study.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Studies and only return the `id`
     * const studyWithIdOnly = await prisma.study.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StudyCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StudyCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Study.
     * @param {StudyDeleteArgs} args - Arguments to delete one Study.
     * @example
     * // Delete one Study
     * const Study = await prisma.study.delete({
     *   where: {
     *     // ... filter to delete one Study
     *   }
     * })
     *
     */
    delete<T extends StudyDeleteArgs>(
      args: SelectSubset<T, StudyDeleteArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Study.
     * @param {StudyUpdateArgs} args - Arguments to update one Study.
     * @example
     * // Update one Study
     * const study = await prisma.study.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StudyUpdateArgs>(
      args: SelectSubset<T, StudyUpdateArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Studies.
     * @param {StudyDeleteManyArgs} args - Arguments to filter Studies to delete.
     * @example
     * // Delete a few Studies
     * const { count } = await prisma.study.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StudyDeleteManyArgs>(
      args?: SelectSubset<T, StudyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studies
     * const study = await prisma.study.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StudyUpdateManyArgs>(
      args: SelectSubset<T, StudyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Studies and returns the data updated in the database.
     * @param {StudyUpdateManyAndReturnArgs} args - Arguments to update many Studies.
     * @example
     * // Update many Studies
     * const study = await prisma.study.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Studies and only return the `id`
     * const studyWithIdOnly = await prisma.study.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudyUpdateManyAndReturnArgs>(
      args: SelectSubset<T, StudyUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Study.
     * @param {StudyUpsertArgs} args - Arguments to update or create a Study.
     * @example
     * // Update or create a Study
     * const study = await prisma.study.upsert({
     *   create: {
     *     // ... data to create a Study
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Study we want to update
     *   }
     * })
     */
    upsert<T extends StudyUpsertArgs>(
      args: SelectSubset<T, StudyUpsertArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      $Result.GetResult<
        Prisma.$StudyPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyCountArgs} args - Arguments to filter Studies to count.
     * @example
     * // Count the number of Studies
     * const count = await prisma.study.count({
     *   where: {
     *     // ... the filter for the Studies we want to count
     *   }
     * })
     **/
    count<T extends StudyCountArgs>(
      args?: Subset<T, StudyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyAggregateArgs>(
      args: Subset<T, StudyAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudyAggregateType<T>>;

    /**
     * Group by Study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyGroupByArgs} args - Group by arguments.
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
      T extends StudyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyGroupByArgs['orderBy'] }
        : { orderBy?: StudyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, StudyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetStudyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Study model
     */
    readonly fields: StudyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Study.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    members<T extends Study$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Study$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$StudyMemberPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Study model
   */
  interface StudyFieldRefs {
    readonly id: FieldRef<'Study', 'String'>;
    readonly title: FieldRef<'Study', 'String'>;
    readonly description: FieldRef<'Study', 'String'>;
    readonly tags: FieldRef<'Study', 'String[]'>;
    readonly dayOfWeek: FieldRef<'Study', 'String'>;
    readonly time: FieldRef<'Study', 'String'>;
    readonly maxParticipants: FieldRef<'Study', 'Int'>;
    readonly createdById: FieldRef<'Study', 'String'>;
    readonly createdAt: FieldRef<'Study', 'DateTime'>;
    readonly updatedAt: FieldRef<'Study', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Study findUnique
   */
  export type StudyFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * Filter, which Study to fetch.
     */
    where: StudyWhereUniqueInput;
  };

  /**
   * Study findUniqueOrThrow
   */
  export type StudyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * Filter, which Study to fetch.
     */
    where: StudyWhereUniqueInput;
  };

  /**
   * Study findFirst
   */
  export type StudyFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * Filter, which Study to fetch.
     */
    where?: StudyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Studies.
     */
    cursor?: StudyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Studies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Studies.
     */
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[];
  };

  /**
   * Study findFirstOrThrow
   */
  export type StudyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * Filter, which Study to fetch.
     */
    where?: StudyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Studies.
     */
    cursor?: StudyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Studies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Studies.
     */
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[];
  };

  /**
   * Study findMany
   */
  export type StudyFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * Filter, which Studies to fetch.
     */
    where?: StudyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Studies.
     */
    cursor?: StudyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Studies.
     */
    skip?: number;
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[];
  };

  /**
   * Study create
   */
  export type StudyCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * The data needed to create a Study.
     */
    data: XOR<StudyCreateInput, StudyUncheckedCreateInput>;
  };

  /**
   * Study createMany
   */
  export type StudyCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Studies.
     */
    data: StudyCreateManyInput | StudyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Study createManyAndReturn
   */
  export type StudyCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * The data used to create many Studies.
     */
    data: StudyCreateManyInput | StudyCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Study update
   */
  export type StudyUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * The data needed to update a Study.
     */
    data: XOR<StudyUpdateInput, StudyUncheckedUpdateInput>;
    /**
     * Choose, which Study to update.
     */
    where: StudyWhereUniqueInput;
  };

  /**
   * Study updateMany
   */
  export type StudyUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Studies.
     */
    data: XOR<StudyUpdateManyMutationInput, StudyUncheckedUpdateManyInput>;
    /**
     * Filter which Studies to update
     */
    where?: StudyWhereInput;
    /**
     * Limit how many Studies to update.
     */
    limit?: number;
  };

  /**
   * Study updateManyAndReturn
   */
  export type StudyUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * The data used to update Studies.
     */
    data: XOR<StudyUpdateManyMutationInput, StudyUncheckedUpdateManyInput>;
    /**
     * Filter which Studies to update
     */
    where?: StudyWhereInput;
    /**
     * Limit how many Studies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Study upsert
   */
  export type StudyUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * The filter to search for the Study to update in case it exists.
     */
    where: StudyWhereUniqueInput;
    /**
     * In case the Study found by the `where` argument doesn't exist, create a new Study with this data.
     */
    create: XOR<StudyCreateInput, StudyUncheckedCreateInput>;
    /**
     * In case the Study was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyUpdateInput, StudyUncheckedUpdateInput>;
  };

  /**
   * Study delete
   */
  export type StudyDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
    /**
     * Filter which Study to delete.
     */
    where: StudyWhereUniqueInput;
  };

  /**
   * Study deleteMany
   */
  export type StudyDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Studies to delete
     */
    where?: StudyWhereInput;
    /**
     * Limit how many Studies to delete.
     */
    limit?: number;
  };

  /**
   * Study.members
   */
  export type Study$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    where?: StudyMemberWhereInput;
    orderBy?:
      | StudyMemberOrderByWithRelationInput
      | StudyMemberOrderByWithRelationInput[];
    cursor?: StudyMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudyMemberScalarFieldEnum | StudyMemberScalarFieldEnum[];
  };

  /**
   * Study without action
   */
  export type StudyDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null;
  };

  /**
   * Model StudyMember
   */

  export type AggregateStudyMember = {
    _count: StudyMemberCountAggregateOutputType | null;
    _min: StudyMemberMinAggregateOutputType | null;
    _max: StudyMemberMaxAggregateOutputType | null;
  };

  export type StudyMemberMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    studyId: string | null;
    status: $Enums.Status | null;
    joinedAt: Date | null;
  };

  export type StudyMemberMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    studyId: string | null;
    status: $Enums.Status | null;
    joinedAt: Date | null;
  };

  export type StudyMemberCountAggregateOutputType = {
    id: number;
    userId: number;
    studyId: number;
    status: number;
    joinedAt: number;
    _all: number;
  };

  export type StudyMemberMinAggregateInputType = {
    id?: true;
    userId?: true;
    studyId?: true;
    status?: true;
    joinedAt?: true;
  };

  export type StudyMemberMaxAggregateInputType = {
    id?: true;
    userId?: true;
    studyId?: true;
    status?: true;
    joinedAt?: true;
  };

  export type StudyMemberCountAggregateInputType = {
    id?: true;
    userId?: true;
    studyId?: true;
    status?: true;
    joinedAt?: true;
    _all?: true;
  };

  export type StudyMemberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which StudyMember to aggregate.
     */
    where?: StudyMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudyMembers to fetch.
     */
    orderBy?:
      | StudyMemberOrderByWithRelationInput
      | StudyMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StudyMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudyMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudyMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StudyMembers
     **/
    _count?: true | StudyMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudyMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudyMemberMaxAggregateInputType;
  };

  export type GetStudyMemberAggregateType<T extends StudyMemberAggregateArgs> =
    {
      [P in keyof T & keyof AggregateStudyMember]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateStudyMember[P]>
        : GetScalarType<T[P], AggregateStudyMember[P]>;
    };

  export type StudyMemberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StudyMemberWhereInput;
    orderBy?:
      | StudyMemberOrderByWithAggregationInput
      | StudyMemberOrderByWithAggregationInput[];
    by: StudyMemberScalarFieldEnum[] | StudyMemberScalarFieldEnum;
    having?: StudyMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudyMemberCountAggregateInputType | true;
    _min?: StudyMemberMinAggregateInputType;
    _max?: StudyMemberMaxAggregateInputType;
  };

  export type StudyMemberGroupByOutputType = {
    id: string;
    userId: string;
    studyId: string;
    status: $Enums.Status;
    joinedAt: Date;
    _count: StudyMemberCountAggregateOutputType | null;
    _min: StudyMemberMinAggregateOutputType | null;
    _max: StudyMemberMaxAggregateOutputType | null;
  };

  type GetStudyMemberGroupByPayload<T extends StudyMemberGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<StudyMemberGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof StudyMemberGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], StudyMemberGroupByOutputType[P]>;
        }
      >
    >;

  export type StudyMemberSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      studyId?: boolean;
      status?: boolean;
      joinedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      study?: boolean | StudyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['studyMember']
  >;

  export type StudyMemberSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      studyId?: boolean;
      status?: boolean;
      joinedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      study?: boolean | StudyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['studyMember']
  >;

  export type StudyMemberSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      studyId?: boolean;
      status?: boolean;
      joinedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      study?: boolean | StudyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['studyMember']
  >;

  export type StudyMemberSelectScalar = {
    id?: boolean;
    userId?: boolean;
    studyId?: boolean;
    status?: boolean;
    joinedAt?: boolean;
  };

  export type StudyMemberOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'studyId' | 'status' | 'joinedAt',
    ExtArgs['result']['studyMember']
  >;
  export type StudyMemberInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    study?: boolean | StudyDefaultArgs<ExtArgs>;
  };
  export type StudyMemberIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    study?: boolean | StudyDefaultArgs<ExtArgs>;
  };
  export type StudyMemberIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    study?: boolean | StudyDefaultArgs<ExtArgs>;
  };

  export type $StudyMemberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'StudyMember';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      study: Prisma.$StudyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        studyId: string;
        status: $Enums.Status;
        joinedAt: Date;
      },
      ExtArgs['result']['studyMember']
    >;
    composites: {};
  };

  type StudyMemberGetPayload<
    S extends boolean | null | undefined | StudyMemberDefaultArgs,
  > = $Result.GetResult<Prisma.$StudyMemberPayload, S>;

  type StudyMemberCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    StudyMemberFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: StudyMemberCountAggregateInputType | true;
  };

  export interface StudyMemberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['StudyMember'];
      meta: { name: 'StudyMember' };
    };
    /**
     * Find zero or one StudyMember that matches the filter.
     * @param {StudyMemberFindUniqueArgs} args - Arguments to find a StudyMember
     * @example
     * // Get one StudyMember
     * const studyMember = await prisma.studyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyMemberFindUniqueArgs>(
      args: SelectSubset<T, StudyMemberFindUniqueArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one StudyMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyMemberFindUniqueOrThrowArgs} args - Arguments to find a StudyMember
     * @example
     * // Get one StudyMember
     * const studyMember = await prisma.studyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyMemberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StudyMemberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first StudyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyMemberFindFirstArgs} args - Arguments to find a StudyMember
     * @example
     * // Get one StudyMember
     * const studyMember = await prisma.studyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyMemberFindFirstArgs>(
      args?: SelectSubset<T, StudyMemberFindFirstArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first StudyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyMemberFindFirstOrThrowArgs} args - Arguments to find a StudyMember
     * @example
     * // Get one StudyMember
     * const studyMember = await prisma.studyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudyMemberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more StudyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyMembers
     * const studyMembers = await prisma.studyMember.findMany()
     *
     * // Get first 10 StudyMembers
     * const studyMembers = await prisma.studyMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studyMemberWithIdOnly = await prisma.studyMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StudyMemberFindManyArgs>(
      args?: SelectSubset<T, StudyMemberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a StudyMember.
     * @param {StudyMemberCreateArgs} args - Arguments to create a StudyMember.
     * @example
     * // Create one StudyMember
     * const StudyMember = await prisma.studyMember.create({
     *   data: {
     *     // ... data to create a StudyMember
     *   }
     * })
     *
     */
    create<T extends StudyMemberCreateArgs>(
      args: SelectSubset<T, StudyMemberCreateArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many StudyMembers.
     * @param {StudyMemberCreateManyArgs} args - Arguments to create many StudyMembers.
     * @example
     * // Create many StudyMembers
     * const studyMember = await prisma.studyMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StudyMemberCreateManyArgs>(
      args?: SelectSubset<T, StudyMemberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many StudyMembers and returns the data saved in the database.
     * @param {StudyMemberCreateManyAndReturnArgs} args - Arguments to create many StudyMembers.
     * @example
     * // Create many StudyMembers
     * const studyMember = await prisma.studyMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StudyMembers and only return the `id`
     * const studyMemberWithIdOnly = await prisma.studyMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StudyMemberCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StudyMemberCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a StudyMember.
     * @param {StudyMemberDeleteArgs} args - Arguments to delete one StudyMember.
     * @example
     * // Delete one StudyMember
     * const StudyMember = await prisma.studyMember.delete({
     *   where: {
     *     // ... filter to delete one StudyMember
     *   }
     * })
     *
     */
    delete<T extends StudyMemberDeleteArgs>(
      args: SelectSubset<T, StudyMemberDeleteArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one StudyMember.
     * @param {StudyMemberUpdateArgs} args - Arguments to update one StudyMember.
     * @example
     * // Update one StudyMember
     * const studyMember = await prisma.studyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StudyMemberUpdateArgs>(
      args: SelectSubset<T, StudyMemberUpdateArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more StudyMembers.
     * @param {StudyMemberDeleteManyArgs} args - Arguments to filter StudyMembers to delete.
     * @example
     * // Delete a few StudyMembers
     * const { count } = await prisma.studyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StudyMemberDeleteManyArgs>(
      args?: SelectSubset<T, StudyMemberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more StudyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyMembers
     * const studyMember = await prisma.studyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StudyMemberUpdateManyArgs>(
      args: SelectSubset<T, StudyMemberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more StudyMembers and returns the data updated in the database.
     * @param {StudyMemberUpdateManyAndReturnArgs} args - Arguments to update many StudyMembers.
     * @example
     * // Update many StudyMembers
     * const studyMember = await prisma.studyMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StudyMembers and only return the `id`
     * const studyMemberWithIdOnly = await prisma.studyMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudyMemberUpdateManyAndReturnArgs>(
      args: SelectSubset<T, StudyMemberUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one StudyMember.
     * @param {StudyMemberUpsertArgs} args - Arguments to update or create a StudyMember.
     * @example
     * // Update or create a StudyMember
     * const studyMember = await prisma.studyMember.upsert({
     *   create: {
     *     // ... data to create a StudyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyMember we want to update
     *   }
     * })
     */
    upsert<T extends StudyMemberUpsertArgs>(
      args: SelectSubset<T, StudyMemberUpsertArgs<ExtArgs>>,
    ): Prisma__StudyMemberClient<
      $Result.GetResult<
        Prisma.$StudyMemberPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of StudyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyMemberCountArgs} args - Arguments to filter StudyMembers to count.
     * @example
     * // Count the number of StudyMembers
     * const count = await prisma.studyMember.count({
     *   where: {
     *     // ... the filter for the StudyMembers we want to count
     *   }
     * })
     **/
    count<T extends StudyMemberCountArgs>(
      args?: Subset<T, StudyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyMemberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a StudyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyMemberAggregateArgs>(
      args: Subset<T, StudyMemberAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudyMemberAggregateType<T>>;

    /**
     * Group by StudyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyMemberGroupByArgs} args - Group by arguments.
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
      T extends StudyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyMemberGroupByArgs['orderBy'] }
        : { orderBy?: StudyMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, StudyMemberGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetStudyMemberGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StudyMember model
     */
    readonly fields: StudyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyMemberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    study<T extends StudyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, StudyDefaultArgs<ExtArgs>>,
    ): Prisma__StudyClient<
      | $Result.GetResult<
          Prisma.$StudyPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the StudyMember model
   */
  interface StudyMemberFieldRefs {
    readonly id: FieldRef<'StudyMember', 'String'>;
    readonly userId: FieldRef<'StudyMember', 'String'>;
    readonly studyId: FieldRef<'StudyMember', 'String'>;
    readonly status: FieldRef<'StudyMember', 'Status'>;
    readonly joinedAt: FieldRef<'StudyMember', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * StudyMember findUnique
   */
  export type StudyMemberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * Filter, which StudyMember to fetch.
     */
    where: StudyMemberWhereUniqueInput;
  };

  /**
   * StudyMember findUniqueOrThrow
   */
  export type StudyMemberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * Filter, which StudyMember to fetch.
     */
    where: StudyMemberWhereUniqueInput;
  };

  /**
   * StudyMember findFirst
   */
  export type StudyMemberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * Filter, which StudyMember to fetch.
     */
    where?: StudyMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudyMembers to fetch.
     */
    orderBy?:
      | StudyMemberOrderByWithRelationInput
      | StudyMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StudyMembers.
     */
    cursor?: StudyMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudyMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudyMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StudyMembers.
     */
    distinct?: StudyMemberScalarFieldEnum | StudyMemberScalarFieldEnum[];
  };

  /**
   * StudyMember findFirstOrThrow
   */
  export type StudyMemberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * Filter, which StudyMember to fetch.
     */
    where?: StudyMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudyMembers to fetch.
     */
    orderBy?:
      | StudyMemberOrderByWithRelationInput
      | StudyMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StudyMembers.
     */
    cursor?: StudyMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudyMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudyMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StudyMembers.
     */
    distinct?: StudyMemberScalarFieldEnum | StudyMemberScalarFieldEnum[];
  };

  /**
   * StudyMember findMany
   */
  export type StudyMemberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * Filter, which StudyMembers to fetch.
     */
    where?: StudyMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudyMembers to fetch.
     */
    orderBy?:
      | StudyMemberOrderByWithRelationInput
      | StudyMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StudyMembers.
     */
    cursor?: StudyMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudyMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudyMembers.
     */
    skip?: number;
    distinct?: StudyMemberScalarFieldEnum | StudyMemberScalarFieldEnum[];
  };

  /**
   * StudyMember create
   */
  export type StudyMemberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * The data needed to create a StudyMember.
     */
    data: XOR<StudyMemberCreateInput, StudyMemberUncheckedCreateInput>;
  };

  /**
   * StudyMember createMany
   */
  export type StudyMemberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many StudyMembers.
     */
    data: StudyMemberCreateManyInput | StudyMemberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * StudyMember createManyAndReturn
   */
  export type StudyMemberCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * The data used to create many StudyMembers.
     */
    data: StudyMemberCreateManyInput | StudyMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * StudyMember update
   */
  export type StudyMemberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * The data needed to update a StudyMember.
     */
    data: XOR<StudyMemberUpdateInput, StudyMemberUncheckedUpdateInput>;
    /**
     * Choose, which StudyMember to update.
     */
    where: StudyMemberWhereUniqueInput;
  };

  /**
   * StudyMember updateMany
   */
  export type StudyMemberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update StudyMembers.
     */
    data: XOR<
      StudyMemberUpdateManyMutationInput,
      StudyMemberUncheckedUpdateManyInput
    >;
    /**
     * Filter which StudyMembers to update
     */
    where?: StudyMemberWhereInput;
    /**
     * Limit how many StudyMembers to update.
     */
    limit?: number;
  };

  /**
   * StudyMember updateManyAndReturn
   */
  export type StudyMemberUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * The data used to update StudyMembers.
     */
    data: XOR<
      StudyMemberUpdateManyMutationInput,
      StudyMemberUncheckedUpdateManyInput
    >;
    /**
     * Filter which StudyMembers to update
     */
    where?: StudyMemberWhereInput;
    /**
     * Limit how many StudyMembers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * StudyMember upsert
   */
  export type StudyMemberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * The filter to search for the StudyMember to update in case it exists.
     */
    where: StudyMemberWhereUniqueInput;
    /**
     * In case the StudyMember found by the `where` argument doesn't exist, create a new StudyMember with this data.
     */
    create: XOR<StudyMemberCreateInput, StudyMemberUncheckedCreateInput>;
    /**
     * In case the StudyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyMemberUpdateInput, StudyMemberUncheckedUpdateInput>;
  };

  /**
   * StudyMember delete
   */
  export type StudyMemberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
    /**
     * Filter which StudyMember to delete.
     */
    where: StudyMemberWhereUniqueInput;
  };

  /**
   * StudyMember deleteMany
   */
  export type StudyMemberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which StudyMembers to delete
     */
    where?: StudyMemberWhereInput;
    /**
     * Limit how many StudyMembers to delete.
     */
    limit?: number;
  };

  /**
   * StudyMember without action
   */
  export type StudyMemberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudyMember
     */
    select?: StudyMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudyMember
     */
    omit?: StudyMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyMemberInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    name: 'name';
    bio: 'bio';
    interests: 'interests';
    availableDays: 'availableDays';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const StudyScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    tags: 'tags';
    dayOfWeek: 'dayOfWeek';
    time: 'time';
    maxParticipants: 'maxParticipants';
    createdById: 'createdById';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type StudyScalarFieldEnum =
    (typeof StudyScalarFieldEnum)[keyof typeof StudyScalarFieldEnum];

  export const StudyMemberScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    studyId: 'studyId';
    status: 'status';
    joinedAt: 'joinedAt';
  };

  export type StudyMemberScalarFieldEnum =
    (typeof StudyMemberScalarFieldEnum)[keyof typeof StudyMemberScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Status'
  >;

  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Status[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    bio?: StringNullableFilter<'User'> | string | null;
    interests?: StringNullableListFilter<'User'>;
    availableDays?: StringNullableListFilter<'User'>;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    studiesCreated?: StudyListRelationFilter;
    studyMembers?: StudyMemberListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    interests?: SortOrder;
    availableDays?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    studiesCreated?: StudyOrderByRelationAggregateInput;
    studyMembers?: StudyMemberOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      name?: StringFilter<'User'> | string;
      bio?: StringNullableFilter<'User'> | string | null;
      interests?: StringNullableListFilter<'User'>;
      availableDays?: StringNullableListFilter<'User'>;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      studiesCreated?: StudyListRelationFilter;
      studyMembers?: StudyMemberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    interests?: SortOrder;
    availableDays?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    name?: StringWithAggregatesFilter<'User'> | string;
    bio?: StringNullableWithAggregatesFilter<'User'> | string | null;
    interests?: StringNullableListFilter<'User'>;
    availableDays?: StringNullableListFilter<'User'>;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type StudyWhereInput = {
    AND?: StudyWhereInput | StudyWhereInput[];
    OR?: StudyWhereInput[];
    NOT?: StudyWhereInput | StudyWhereInput[];
    id?: StringFilter<'Study'> | string;
    title?: StringFilter<'Study'> | string;
    description?: StringFilter<'Study'> | string;
    tags?: StringNullableListFilter<'Study'>;
    dayOfWeek?: StringFilter<'Study'> | string;
    time?: StringFilter<'Study'> | string;
    maxParticipants?: IntFilter<'Study'> | number;
    createdById?: StringFilter<'Study'> | string;
    createdAt?: DateTimeFilter<'Study'> | Date | string;
    updatedAt?: DateTimeFilter<'Study'> | Date | string;
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
    members?: StudyMemberListRelationFilter;
  };

  export type StudyOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    tags?: SortOrder;
    dayOfWeek?: SortOrder;
    time?: SortOrder;
    maxParticipants?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    createdBy?: UserOrderByWithRelationInput;
    members?: StudyMemberOrderByRelationAggregateInput;
  };

  export type StudyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: StudyWhereInput | StudyWhereInput[];
      OR?: StudyWhereInput[];
      NOT?: StudyWhereInput | StudyWhereInput[];
      title?: StringFilter<'Study'> | string;
      description?: StringFilter<'Study'> | string;
      tags?: StringNullableListFilter<'Study'>;
      dayOfWeek?: StringFilter<'Study'> | string;
      time?: StringFilter<'Study'> | string;
      maxParticipants?: IntFilter<'Study'> | number;
      createdById?: StringFilter<'Study'> | string;
      createdAt?: DateTimeFilter<'Study'> | Date | string;
      updatedAt?: DateTimeFilter<'Study'> | Date | string;
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
      members?: StudyMemberListRelationFilter;
    },
    'id'
  >;

  export type StudyOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    tags?: SortOrder;
    dayOfWeek?: SortOrder;
    time?: SortOrder;
    maxParticipants?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: StudyCountOrderByAggregateInput;
    _avg?: StudyAvgOrderByAggregateInput;
    _max?: StudyMaxOrderByAggregateInput;
    _min?: StudyMinOrderByAggregateInput;
    _sum?: StudySumOrderByAggregateInput;
  };

  export type StudyScalarWhereWithAggregatesInput = {
    AND?:
      | StudyScalarWhereWithAggregatesInput
      | StudyScalarWhereWithAggregatesInput[];
    OR?: StudyScalarWhereWithAggregatesInput[];
    NOT?:
      | StudyScalarWhereWithAggregatesInput
      | StudyScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Study'> | string;
    title?: StringWithAggregatesFilter<'Study'> | string;
    description?: StringWithAggregatesFilter<'Study'> | string;
    tags?: StringNullableListFilter<'Study'>;
    dayOfWeek?: StringWithAggregatesFilter<'Study'> | string;
    time?: StringWithAggregatesFilter<'Study'> | string;
    maxParticipants?: IntWithAggregatesFilter<'Study'> | number;
    createdById?: StringWithAggregatesFilter<'Study'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Study'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Study'> | Date | string;
  };

  export type StudyMemberWhereInput = {
    AND?: StudyMemberWhereInput | StudyMemberWhereInput[];
    OR?: StudyMemberWhereInput[];
    NOT?: StudyMemberWhereInput | StudyMemberWhereInput[];
    id?: StringFilter<'StudyMember'> | string;
    userId?: StringFilter<'StudyMember'> | string;
    studyId?: StringFilter<'StudyMember'> | string;
    status?: EnumStatusFilter<'StudyMember'> | $Enums.Status;
    joinedAt?: DateTimeFilter<'StudyMember'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>;
  };

  export type StudyMemberOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    studyId?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    study?: StudyOrderByWithRelationInput;
  };

  export type StudyMemberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_studyId?: StudyMemberUserIdStudyIdCompoundUniqueInput;
      AND?: StudyMemberWhereInput | StudyMemberWhereInput[];
      OR?: StudyMemberWhereInput[];
      NOT?: StudyMemberWhereInput | StudyMemberWhereInput[];
      userId?: StringFilter<'StudyMember'> | string;
      studyId?: StringFilter<'StudyMember'> | string;
      status?: EnumStatusFilter<'StudyMember'> | $Enums.Status;
      joinedAt?: DateTimeFilter<'StudyMember'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      study?: XOR<StudyScalarRelationFilter, StudyWhereInput>;
    },
    'id' | 'userId_studyId'
  >;

  export type StudyMemberOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    studyId?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
    _count?: StudyMemberCountOrderByAggregateInput;
    _max?: StudyMemberMaxOrderByAggregateInput;
    _min?: StudyMemberMinOrderByAggregateInput;
  };

  export type StudyMemberScalarWhereWithAggregatesInput = {
    AND?:
      | StudyMemberScalarWhereWithAggregatesInput
      | StudyMemberScalarWhereWithAggregatesInput[];
    OR?: StudyMemberScalarWhereWithAggregatesInput[];
    NOT?:
      | StudyMemberScalarWhereWithAggregatesInput
      | StudyMemberScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'StudyMember'> | string;
    userId?: StringWithAggregatesFilter<'StudyMember'> | string;
    studyId?: StringWithAggregatesFilter<'StudyMember'> | string;
    status?: EnumStatusWithAggregatesFilter<'StudyMember'> | $Enums.Status;
    joinedAt?: DateTimeWithAggregatesFilter<'StudyMember'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    bio?: string | null;
    interests?: UserCreateinterestsInput | string[];
    availableDays?: UserCreateavailableDaysInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studiesCreated?: StudyCreateNestedManyWithoutCreatedByInput;
    studyMembers?: StudyMemberCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    bio?: string | null;
    interests?: UserCreateinterestsInput | string[];
    availableDays?: UserCreateavailableDaysInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studiesCreated?: StudyUncheckedCreateNestedManyWithoutCreatedByInput;
    studyMembers?: StudyMemberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    studiesCreated?: StudyUpdateManyWithoutCreatedByNestedInput;
    studyMembers?: StudyMemberUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    studiesCreated?: StudyUncheckedUpdateManyWithoutCreatedByNestedInput;
    studyMembers?: StudyMemberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    bio?: string | null;
    interests?: UserCreateinterestsInput | string[];
    availableDays?: UserCreateavailableDaysInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyCreateInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutStudiesCreatedInput;
    members?: StudyMemberCreateNestedManyWithoutStudyInput;
  };

  export type StudyUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: StudyMemberUncheckedCreateNestedManyWithoutStudyInput;
  };

  export type StudyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutStudiesCreatedNestedInput;
    members?: StudyMemberUpdateManyWithoutStudyNestedInput;
  };

  export type StudyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: StudyMemberUncheckedUpdateManyWithoutStudyNestedInput;
  };

  export type StudyCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type StudyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyMemberCreateInput = {
    id?: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
    user: UserCreateNestedOneWithoutStudyMembersInput;
    study: StudyCreateNestedOneWithoutMembersInput;
  };

  export type StudyMemberUncheckedCreateInput = {
    id?: string;
    userId: string;
    studyId: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
  };

  export type StudyMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutStudyMembersNestedInput;
    study?: StudyUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type StudyMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    studyId?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyMemberCreateManyInput = {
    id?: string;
    userId: string;
    studyId: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
  };

  export type StudyMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    studyId?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StudyListRelationFilter = {
    every?: StudyWhereInput;
    some?: StudyWhereInput;
    none?: StudyWhereInput;
  };

  export type StudyMemberListRelationFilter = {
    every?: StudyMemberWhereInput;
    some?: StudyMemberWhereInput;
    none?: StudyMemberWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type StudyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type StudyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    bio?: SortOrder;
    interests?: SortOrder;
    availableDays?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    bio?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    bio?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type StudyCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    tags?: SortOrder;
    dayOfWeek?: SortOrder;
    time?: SortOrder;
    maxParticipants?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudyAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder;
  };

  export type StudyMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    dayOfWeek?: SortOrder;
    time?: SortOrder;
    maxParticipants?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudyMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    dayOfWeek?: SortOrder;
    time?: SortOrder;
    maxParticipants?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudySumOrderByAggregateInput = {
    maxParticipants?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
  };

  export type StudyScalarRelationFilter = {
    is?: StudyWhereInput;
    isNot?: StudyWhereInput;
  };

  export type StudyMemberUserIdStudyIdCompoundUniqueInput = {
    userId: string;
    studyId: string;
  };

  export type StudyMemberCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    studyId?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
  };

  export type StudyMemberMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    studyId?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
  };

  export type StudyMemberMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    studyId?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
  };

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumStatusFilter<$PrismaModel>;
    _max?: NestedEnumStatusFilter<$PrismaModel>;
  };

  export type UserCreateinterestsInput = {
    set: string[];
  };

  export type UserCreateavailableDaysInput = {
    set: string[];
  };

  export type StudyCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          StudyCreateWithoutCreatedByInput,
          StudyUncheckedCreateWithoutCreatedByInput
        >
      | StudyCreateWithoutCreatedByInput[]
      | StudyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | StudyCreateOrConnectWithoutCreatedByInput
      | StudyCreateOrConnectWithoutCreatedByInput[];
    createMany?: StudyCreateManyCreatedByInputEnvelope;
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
  };

  export type StudyMemberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutUserInput,
          StudyMemberUncheckedCreateWithoutUserInput
        >
      | StudyMemberCreateWithoutUserInput[]
      | StudyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutUserInput
      | StudyMemberCreateOrConnectWithoutUserInput[];
    createMany?: StudyMemberCreateManyUserInputEnvelope;
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
  };

  export type StudyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          StudyCreateWithoutCreatedByInput,
          StudyUncheckedCreateWithoutCreatedByInput
        >
      | StudyCreateWithoutCreatedByInput[]
      | StudyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | StudyCreateOrConnectWithoutCreatedByInput
      | StudyCreateOrConnectWithoutCreatedByInput[];
    createMany?: StudyCreateManyCreatedByInputEnvelope;
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
  };

  export type StudyMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutUserInput,
          StudyMemberUncheckedCreateWithoutUserInput
        >
      | StudyMemberCreateWithoutUserInput[]
      | StudyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutUserInput
      | StudyMemberCreateOrConnectWithoutUserInput[];
    createMany?: StudyMemberCreateManyUserInputEnvelope;
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdateinterestsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type UserUpdateavailableDaysInput = {
    set?: string[];
    push?: string | string[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type StudyUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          StudyCreateWithoutCreatedByInput,
          StudyUncheckedCreateWithoutCreatedByInput
        >
      | StudyCreateWithoutCreatedByInput[]
      | StudyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | StudyCreateOrConnectWithoutCreatedByInput
      | StudyCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | StudyUpsertWithWhereUniqueWithoutCreatedByInput
      | StudyUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: StudyCreateManyCreatedByInputEnvelope;
    set?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    disconnect?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    delete?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    update?:
      | StudyUpdateWithWhereUniqueWithoutCreatedByInput
      | StudyUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | StudyUpdateManyWithWhereWithoutCreatedByInput
      | StudyUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: StudyScalarWhereInput | StudyScalarWhereInput[];
  };

  export type StudyMemberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutUserInput,
          StudyMemberUncheckedCreateWithoutUserInput
        >
      | StudyMemberCreateWithoutUserInput[]
      | StudyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutUserInput
      | StudyMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | StudyMemberUpsertWithWhereUniqueWithoutUserInput
      | StudyMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: StudyMemberCreateManyUserInputEnvelope;
    set?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    disconnect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    delete?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    update?:
      | StudyMemberUpdateWithWhereUniqueWithoutUserInput
      | StudyMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | StudyMemberUpdateManyWithWhereWithoutUserInput
      | StudyMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: StudyMemberScalarWhereInput | StudyMemberScalarWhereInput[];
  };

  export type StudyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          StudyCreateWithoutCreatedByInput,
          StudyUncheckedCreateWithoutCreatedByInput
        >
      | StudyCreateWithoutCreatedByInput[]
      | StudyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | StudyCreateOrConnectWithoutCreatedByInput
      | StudyCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | StudyUpsertWithWhereUniqueWithoutCreatedByInput
      | StudyUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: StudyCreateManyCreatedByInputEnvelope;
    set?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    disconnect?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    delete?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[];
    update?:
      | StudyUpdateWithWhereUniqueWithoutCreatedByInput
      | StudyUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | StudyUpdateManyWithWhereWithoutCreatedByInput
      | StudyUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: StudyScalarWhereInput | StudyScalarWhereInput[];
  };

  export type StudyMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutUserInput,
          StudyMemberUncheckedCreateWithoutUserInput
        >
      | StudyMemberCreateWithoutUserInput[]
      | StudyMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutUserInput
      | StudyMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | StudyMemberUpsertWithWhereUniqueWithoutUserInput
      | StudyMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: StudyMemberCreateManyUserInputEnvelope;
    set?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    disconnect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    delete?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    update?:
      | StudyMemberUpdateWithWhereUniqueWithoutUserInput
      | StudyMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | StudyMemberUpdateManyWithWhereWithoutUserInput
      | StudyMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: StudyMemberScalarWhereInput | StudyMemberScalarWhereInput[];
  };

  export type StudyCreatetagsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutStudiesCreatedInput = {
    create?: XOR<
      UserCreateWithoutStudiesCreatedInput,
      UserUncheckedCreateWithoutStudiesCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutStudiesCreatedInput;
    connect?: UserWhereUniqueInput;
  };

  export type StudyMemberCreateNestedManyWithoutStudyInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutStudyInput,
          StudyMemberUncheckedCreateWithoutStudyInput
        >
      | StudyMemberCreateWithoutStudyInput[]
      | StudyMemberUncheckedCreateWithoutStudyInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutStudyInput
      | StudyMemberCreateOrConnectWithoutStudyInput[];
    createMany?: StudyMemberCreateManyStudyInputEnvelope;
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
  };

  export type StudyMemberUncheckedCreateNestedManyWithoutStudyInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutStudyInput,
          StudyMemberUncheckedCreateWithoutStudyInput
        >
      | StudyMemberCreateWithoutStudyInput[]
      | StudyMemberUncheckedCreateWithoutStudyInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutStudyInput
      | StudyMemberCreateOrConnectWithoutStudyInput[];
    createMany?: StudyMemberCreateManyStudyInputEnvelope;
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
  };

  export type StudyUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutStudiesCreatedNestedInput = {
    create?: XOR<
      UserCreateWithoutStudiesCreatedInput,
      UserUncheckedCreateWithoutStudiesCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutStudiesCreatedInput;
    upsert?: UserUpsertWithoutStudiesCreatedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutStudiesCreatedInput,
        UserUpdateWithoutStudiesCreatedInput
      >,
      UserUncheckedUpdateWithoutStudiesCreatedInput
    >;
  };

  export type StudyMemberUpdateManyWithoutStudyNestedInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutStudyInput,
          StudyMemberUncheckedCreateWithoutStudyInput
        >
      | StudyMemberCreateWithoutStudyInput[]
      | StudyMemberUncheckedCreateWithoutStudyInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutStudyInput
      | StudyMemberCreateOrConnectWithoutStudyInput[];
    upsert?:
      | StudyMemberUpsertWithWhereUniqueWithoutStudyInput
      | StudyMemberUpsertWithWhereUniqueWithoutStudyInput[];
    createMany?: StudyMemberCreateManyStudyInputEnvelope;
    set?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    disconnect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    delete?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    update?:
      | StudyMemberUpdateWithWhereUniqueWithoutStudyInput
      | StudyMemberUpdateWithWhereUniqueWithoutStudyInput[];
    updateMany?:
      | StudyMemberUpdateManyWithWhereWithoutStudyInput
      | StudyMemberUpdateManyWithWhereWithoutStudyInput[];
    deleteMany?: StudyMemberScalarWhereInput | StudyMemberScalarWhereInput[];
  };

  export type StudyMemberUncheckedUpdateManyWithoutStudyNestedInput = {
    create?:
      | XOR<
          StudyMemberCreateWithoutStudyInput,
          StudyMemberUncheckedCreateWithoutStudyInput
        >
      | StudyMemberCreateWithoutStudyInput[]
      | StudyMemberUncheckedCreateWithoutStudyInput[];
    connectOrCreate?:
      | StudyMemberCreateOrConnectWithoutStudyInput
      | StudyMemberCreateOrConnectWithoutStudyInput[];
    upsert?:
      | StudyMemberUpsertWithWhereUniqueWithoutStudyInput
      | StudyMemberUpsertWithWhereUniqueWithoutStudyInput[];
    createMany?: StudyMemberCreateManyStudyInputEnvelope;
    set?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    disconnect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    delete?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    connect?: StudyMemberWhereUniqueInput | StudyMemberWhereUniqueInput[];
    update?:
      | StudyMemberUpdateWithWhereUniqueWithoutStudyInput
      | StudyMemberUpdateWithWhereUniqueWithoutStudyInput[];
    updateMany?:
      | StudyMemberUpdateManyWithWhereWithoutStudyInput
      | StudyMemberUpdateManyWithWhereWithoutStudyInput[];
    deleteMany?: StudyMemberScalarWhereInput | StudyMemberScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutStudyMembersInput = {
    create?: XOR<
      UserCreateWithoutStudyMembersInput,
      UserUncheckedCreateWithoutStudyMembersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutStudyMembersInput;
    connect?: UserWhereUniqueInput;
  };

  export type StudyCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      StudyCreateWithoutMembersInput,
      StudyUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: StudyCreateOrConnectWithoutMembersInput;
    connect?: StudyWhereUniqueInput;
  };

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
  };

  export type UserUpdateOneRequiredWithoutStudyMembersNestedInput = {
    create?: XOR<
      UserCreateWithoutStudyMembersInput,
      UserUncheckedCreateWithoutStudyMembersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutStudyMembersInput;
    upsert?: UserUpsertWithoutStudyMembersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutStudyMembersInput,
        UserUpdateWithoutStudyMembersInput
      >,
      UserUncheckedUpdateWithoutStudyMembersInput
    >;
  };

  export type StudyUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      StudyCreateWithoutMembersInput,
      StudyUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: StudyCreateOrConnectWithoutMembersInput;
    upsert?: StudyUpsertWithoutMembersInput;
    connect?: StudyWhereUniqueInput;
    update?: XOR<
      XOR<
        StudyUpdateToOneWithWhereWithoutMembersInput,
        StudyUpdateWithoutMembersInput
      >,
      StudyUncheckedUpdateWithoutMembersInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
  };

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumStatusFilter<$PrismaModel>;
    _max?: NestedEnumStatusFilter<$PrismaModel>;
  };

  export type StudyCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: StudyMemberCreateNestedManyWithoutStudyInput;
  };

  export type StudyUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: StudyMemberUncheckedCreateNestedManyWithoutStudyInput;
  };

  export type StudyCreateOrConnectWithoutCreatedByInput = {
    where: StudyWhereUniqueInput;
    create: XOR<
      StudyCreateWithoutCreatedByInput,
      StudyUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type StudyCreateManyCreatedByInputEnvelope = {
    data: StudyCreateManyCreatedByInput | StudyCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type StudyMemberCreateWithoutUserInput = {
    id?: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
    study: StudyCreateNestedOneWithoutMembersInput;
  };

  export type StudyMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    studyId: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
  };

  export type StudyMemberCreateOrConnectWithoutUserInput = {
    where: StudyMemberWhereUniqueInput;
    create: XOR<
      StudyMemberCreateWithoutUserInput,
      StudyMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type StudyMemberCreateManyUserInputEnvelope = {
    data: StudyMemberCreateManyUserInput | StudyMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type StudyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: StudyWhereUniqueInput;
    update: XOR<
      StudyUpdateWithoutCreatedByInput,
      StudyUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      StudyCreateWithoutCreatedByInput,
      StudyUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type StudyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: StudyWhereUniqueInput;
    data: XOR<
      StudyUpdateWithoutCreatedByInput,
      StudyUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type StudyUpdateManyWithWhereWithoutCreatedByInput = {
    where: StudyScalarWhereInput;
    data: XOR<
      StudyUpdateManyMutationInput,
      StudyUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type StudyScalarWhereInput = {
    AND?: StudyScalarWhereInput | StudyScalarWhereInput[];
    OR?: StudyScalarWhereInput[];
    NOT?: StudyScalarWhereInput | StudyScalarWhereInput[];
    id?: StringFilter<'Study'> | string;
    title?: StringFilter<'Study'> | string;
    description?: StringFilter<'Study'> | string;
    tags?: StringNullableListFilter<'Study'>;
    dayOfWeek?: StringFilter<'Study'> | string;
    time?: StringFilter<'Study'> | string;
    maxParticipants?: IntFilter<'Study'> | number;
    createdById?: StringFilter<'Study'> | string;
    createdAt?: DateTimeFilter<'Study'> | Date | string;
    updatedAt?: DateTimeFilter<'Study'> | Date | string;
  };

  export type StudyMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: StudyMemberWhereUniqueInput;
    update: XOR<
      StudyMemberUpdateWithoutUserInput,
      StudyMemberUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      StudyMemberCreateWithoutUserInput,
      StudyMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type StudyMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: StudyMemberWhereUniqueInput;
    data: XOR<
      StudyMemberUpdateWithoutUserInput,
      StudyMemberUncheckedUpdateWithoutUserInput
    >;
  };

  export type StudyMemberUpdateManyWithWhereWithoutUserInput = {
    where: StudyMemberScalarWhereInput;
    data: XOR<
      StudyMemberUpdateManyMutationInput,
      StudyMemberUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type StudyMemberScalarWhereInput = {
    AND?: StudyMemberScalarWhereInput | StudyMemberScalarWhereInput[];
    OR?: StudyMemberScalarWhereInput[];
    NOT?: StudyMemberScalarWhereInput | StudyMemberScalarWhereInput[];
    id?: StringFilter<'StudyMember'> | string;
    userId?: StringFilter<'StudyMember'> | string;
    studyId?: StringFilter<'StudyMember'> | string;
    status?: EnumStatusFilter<'StudyMember'> | $Enums.Status;
    joinedAt?: DateTimeFilter<'StudyMember'> | Date | string;
  };

  export type UserCreateWithoutStudiesCreatedInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    bio?: string | null;
    interests?: UserCreateinterestsInput | string[];
    availableDays?: UserCreateavailableDaysInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studyMembers?: StudyMemberCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutStudiesCreatedInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    bio?: string | null;
    interests?: UserCreateinterestsInput | string[];
    availableDays?: UserCreateavailableDaysInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studyMembers?: StudyMemberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutStudiesCreatedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutStudiesCreatedInput,
      UserUncheckedCreateWithoutStudiesCreatedInput
    >;
  };

  export type StudyMemberCreateWithoutStudyInput = {
    id?: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
    user: UserCreateNestedOneWithoutStudyMembersInput;
  };

  export type StudyMemberUncheckedCreateWithoutStudyInput = {
    id?: string;
    userId: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
  };

  export type StudyMemberCreateOrConnectWithoutStudyInput = {
    where: StudyMemberWhereUniqueInput;
    create: XOR<
      StudyMemberCreateWithoutStudyInput,
      StudyMemberUncheckedCreateWithoutStudyInput
    >;
  };

  export type StudyMemberCreateManyStudyInputEnvelope = {
    data: StudyMemberCreateManyStudyInput | StudyMemberCreateManyStudyInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutStudiesCreatedInput = {
    update: XOR<
      UserUpdateWithoutStudiesCreatedInput,
      UserUncheckedUpdateWithoutStudiesCreatedInput
    >;
    create: XOR<
      UserCreateWithoutStudiesCreatedInput,
      UserUncheckedCreateWithoutStudiesCreatedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutStudiesCreatedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutStudiesCreatedInput,
      UserUncheckedUpdateWithoutStudiesCreatedInput
    >;
  };

  export type UserUpdateWithoutStudiesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    studyMembers?: StudyMemberUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutStudiesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    studyMembers?: StudyMemberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type StudyMemberUpsertWithWhereUniqueWithoutStudyInput = {
    where: StudyMemberWhereUniqueInput;
    update: XOR<
      StudyMemberUpdateWithoutStudyInput,
      StudyMemberUncheckedUpdateWithoutStudyInput
    >;
    create: XOR<
      StudyMemberCreateWithoutStudyInput,
      StudyMemberUncheckedCreateWithoutStudyInput
    >;
  };

  export type StudyMemberUpdateWithWhereUniqueWithoutStudyInput = {
    where: StudyMemberWhereUniqueInput;
    data: XOR<
      StudyMemberUpdateWithoutStudyInput,
      StudyMemberUncheckedUpdateWithoutStudyInput
    >;
  };

  export type StudyMemberUpdateManyWithWhereWithoutStudyInput = {
    where: StudyMemberScalarWhereInput;
    data: XOR<
      StudyMemberUpdateManyMutationInput,
      StudyMemberUncheckedUpdateManyWithoutStudyInput
    >;
  };

  export type UserCreateWithoutStudyMembersInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    bio?: string | null;
    interests?: UserCreateinterestsInput | string[];
    availableDays?: UserCreateavailableDaysInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studiesCreated?: StudyCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUncheckedCreateWithoutStudyMembersInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    bio?: string | null;
    interests?: UserCreateinterestsInput | string[];
    availableDays?: UserCreateavailableDaysInput | string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studiesCreated?: StudyUncheckedCreateNestedManyWithoutCreatedByInput;
  };

  export type UserCreateOrConnectWithoutStudyMembersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutStudyMembersInput,
      UserUncheckedCreateWithoutStudyMembersInput
    >;
  };

  export type StudyCreateWithoutMembersInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutStudiesCreatedInput;
  };

  export type StudyUncheckedCreateWithoutMembersInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type StudyCreateOrConnectWithoutMembersInput = {
    where: StudyWhereUniqueInput;
    create: XOR<
      StudyCreateWithoutMembersInput,
      StudyUncheckedCreateWithoutMembersInput
    >;
  };

  export type UserUpsertWithoutStudyMembersInput = {
    update: XOR<
      UserUpdateWithoutStudyMembersInput,
      UserUncheckedUpdateWithoutStudyMembersInput
    >;
    create: XOR<
      UserCreateWithoutStudyMembersInput,
      UserUncheckedCreateWithoutStudyMembersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutStudyMembersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutStudyMembersInput,
      UserUncheckedUpdateWithoutStudyMembersInput
    >;
  };

  export type UserUpdateWithoutStudyMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    studiesCreated?: StudyUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserUncheckedUpdateWithoutStudyMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    interests?: UserUpdateinterestsInput | string[];
    availableDays?: UserUpdateavailableDaysInput | string[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    studiesCreated?: StudyUncheckedUpdateManyWithoutCreatedByNestedInput;
  };

  export type StudyUpsertWithoutMembersInput = {
    update: XOR<
      StudyUpdateWithoutMembersInput,
      StudyUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      StudyCreateWithoutMembersInput,
      StudyUncheckedCreateWithoutMembersInput
    >;
    where?: StudyWhereInput;
  };

  export type StudyUpdateToOneWithWhereWithoutMembersInput = {
    where?: StudyWhereInput;
    data: XOR<
      StudyUpdateWithoutMembersInput,
      StudyUncheckedUpdateWithoutMembersInput
    >;
  };

  export type StudyUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutStudiesCreatedNestedInput;
  };

  export type StudyUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyCreateManyCreatedByInput = {
    id?: string;
    title: string;
    description: string;
    tags?: StudyCreatetagsInput | string[];
    dayOfWeek: string;
    time: string;
    maxParticipants: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type StudyMemberCreateManyUserInput = {
    id?: string;
    studyId: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
  };

  export type StudyUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: StudyMemberUpdateManyWithoutStudyNestedInput;
  };

  export type StudyUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: StudyMemberUncheckedUpdateManyWithoutStudyNestedInput;
  };

  export type StudyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    tags?: StudyUpdatetagsInput | string[];
    dayOfWeek?: StringFieldUpdateOperationsInput | string;
    time?: StringFieldUpdateOperationsInput | string;
    maxParticipants?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    study?: StudyUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type StudyMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    studyId?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    studyId?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyMemberCreateManyStudyInput = {
    id?: string;
    userId: string;
    status?: $Enums.Status;
    joinedAt?: Date | string;
  };

  export type StudyMemberUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutStudyMembersNestedInput;
  };

  export type StudyMemberUncheckedUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudyMemberUncheckedUpdateManyWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
