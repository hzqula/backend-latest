
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
 * Model OTP
 * 
 */
export type OTP = $Result.DefaultSelection<Prisma.$OTPPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Lecturer
 * 
 */
export type Lecturer = $Result.DefaultSelection<Prisma.$LecturerPayload>
/**
 * Model Coordinator
 * 
 */
export type Coordinator = $Result.DefaultSelection<Prisma.$CoordinatorPayload>
/**
 * Model Seminar
 * 
 */
export type Seminar = $Result.DefaultSelection<Prisma.$SeminarPayload>
/**
 * Model SeminarAdvisor
 * 
 */
export type SeminarAdvisor = $Result.DefaultSelection<Prisma.$SeminarAdvisorPayload>
/**
 * Model SeminarAssessor
 * 
 */
export type SeminarAssessor = $Result.DefaultSelection<Prisma.$SeminarAssessorPayload>
/**
 * Model SeminarDocument
 * 
 */
export type SeminarDocument = $Result.DefaultSelection<Prisma.$SeminarDocumentPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model SecurityLog
 * 
 */
export type SecurityLog = $Result.DefaultSelection<Prisma.$SecurityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STUDENT: 'STUDENT',
  LECTURER: 'LECTURER',
  COORDINATOR: 'COORDINATOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SeminarType: {
  PROPOSAL: 'PROPOSAL',
  HASIL: 'HASIL'
};

export type SeminarType = (typeof SeminarType)[keyof typeof SeminarType]


export const DocumentType: {
  ADVISOR_AVAILABILITY: 'ADVISOR_AVAILABILITY',
  KRS: 'KRS',
  ADVISOR_ASSISTANCE: 'ADVISOR_ASSISTANCE',
  SEMINAR_ATTENDANCE: 'SEMINAR_ATTENDANCE',
  THESIS_PROPOSAL: 'THESIS_PROPOSAL',
  FREE_THEORY_CERTIFICATE: 'FREE_THEORY_CERTIFICATE',
  ADVISOR_APPROVAL: 'ADVISOR_APPROVAL',
  EXAMINER_APPROVAL: 'EXAMINER_APPROVAL',
  TRANSCRIPT: 'TRANSCRIPT',
  ASSISTANCE_SHEET: 'ASSISTANCE_SHEET',
  FINAL_THESIS: 'FINAL_THESIS'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const SeminarStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED'
};

export type SeminarStatus = (typeof SeminarStatus)[keyof typeof SeminarStatus]


export const LecturerRole: {
  ADVISOR: 'ADVISOR',
  ASSESSOR: 'ASSESSOR'
};

export type LecturerRole = (typeof LecturerRole)[keyof typeof LecturerRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SeminarType = $Enums.SeminarType

export const SeminarType: typeof $Enums.SeminarType

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type SeminarStatus = $Enums.SeminarStatus

export const SeminarStatus: typeof $Enums.SeminarStatus

export type LecturerRole = $Enums.LecturerRole

export const LecturerRole: typeof $Enums.LecturerRole

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
   * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPS
    * const oTPS = await prisma.oTP.findMany()
    * ```
    */
  get oTP(): Prisma.OTPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturer`: Exposes CRUD operations for the **Lecturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecturers
    * const lecturers = await prisma.lecturer.findMany()
    * ```
    */
  get lecturer(): Prisma.LecturerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coordinator`: Exposes CRUD operations for the **Coordinator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coordinators
    * const coordinators = await prisma.coordinator.findMany()
    * ```
    */
  get coordinator(): Prisma.CoordinatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seminar`: Exposes CRUD operations for the **Seminar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seminars
    * const seminars = await prisma.seminar.findMany()
    * ```
    */
  get seminar(): Prisma.SeminarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seminarAdvisor`: Exposes CRUD operations for the **SeminarAdvisor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeminarAdvisors
    * const seminarAdvisors = await prisma.seminarAdvisor.findMany()
    * ```
    */
  get seminarAdvisor(): Prisma.SeminarAdvisorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seminarAssessor`: Exposes CRUD operations for the **SeminarAssessor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeminarAssessors
    * const seminarAssessors = await prisma.seminarAssessor.findMany()
    * ```
    */
  get seminarAssessor(): Prisma.SeminarAssessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seminarDocument`: Exposes CRUD operations for the **SeminarDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeminarDocuments
    * const seminarDocuments = await prisma.seminarDocument.findMany()
    * ```
    */
  get seminarDocument(): Prisma.SeminarDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityLog`: Exposes CRUD operations for the **SecurityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityLogs
    * const securityLogs = await prisma.securityLog.findMany()
    * ```
    */
  get securityLog(): Prisma.SecurityLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    OTP: 'OTP',
    Student: 'Student',
    Lecturer: 'Lecturer',
    Coordinator: 'Coordinator',
    Seminar: 'Seminar',
    SeminarAdvisor: 'SeminarAdvisor',
    SeminarAssessor: 'SeminarAssessor',
    SeminarDocument: 'SeminarDocument',
    Assessment: 'Assessment',
    SecurityLog: 'SecurityLog'
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
      modelProps: "user" | "oTP" | "student" | "lecturer" | "coordinator" | "seminar" | "seminarAdvisor" | "seminarAssessor" | "seminarDocument" | "assessment" | "securityLog"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      OTP: {
        payload: Prisma.$OTPPayload<ExtArgs>
        fields: Prisma.OTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findFirst: {
            args: Prisma.OTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findMany: {
            args: Prisma.OTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          create: {
            args: Prisma.OTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          createMany: {
            args: Prisma.OTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          delete: {
            args: Prisma.OTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          update: {
            args: Prisma.OTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          deleteMany: {
            args: Prisma.OTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OTPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          upsert: {
            args: Prisma.OTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          aggregate: {
            args: Prisma.OTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTP>
          }
          groupBy: {
            args: Prisma.OTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTPCountArgs<ExtArgs>
            result: $Utils.Optional<OTPCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Lecturer: {
        payload: Prisma.$LecturerPayload<ExtArgs>
        fields: Prisma.LecturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findFirst: {
            args: Prisma.LecturerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findMany: {
            args: Prisma.LecturerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          create: {
            args: Prisma.LecturerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          createMany: {
            args: Prisma.LecturerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LecturerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          delete: {
            args: Prisma.LecturerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          update: {
            args: Prisma.LecturerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          deleteMany: {
            args: Prisma.LecturerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LecturerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          upsert: {
            args: Prisma.LecturerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          aggregate: {
            args: Prisma.LecturerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturer>
          }
          groupBy: {
            args: Prisma.LecturerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerCountArgs<ExtArgs>
            result: $Utils.Optional<LecturerCountAggregateOutputType> | number
          }
        }
      }
      Coordinator: {
        payload: Prisma.$CoordinatorPayload<ExtArgs>
        fields: Prisma.CoordinatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoordinatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoordinatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>
          }
          findFirst: {
            args: Prisma.CoordinatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoordinatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>
          }
          findMany: {
            args: Prisma.CoordinatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>[]
          }
          create: {
            args: Prisma.CoordinatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>
          }
          createMany: {
            args: Prisma.CoordinatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoordinatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>[]
          }
          delete: {
            args: Prisma.CoordinatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>
          }
          update: {
            args: Prisma.CoordinatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>
          }
          deleteMany: {
            args: Prisma.CoordinatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoordinatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoordinatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>[]
          }
          upsert: {
            args: Prisma.CoordinatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatorPayload>
          }
          aggregate: {
            args: Prisma.CoordinatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoordinator>
          }
          groupBy: {
            args: Prisma.CoordinatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoordinatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoordinatorCountArgs<ExtArgs>
            result: $Utils.Optional<CoordinatorCountAggregateOutputType> | number
          }
        }
      }
      Seminar: {
        payload: Prisma.$SeminarPayload<ExtArgs>
        fields: Prisma.SeminarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeminarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeminarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          findFirst: {
            args: Prisma.SeminarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeminarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          findMany: {
            args: Prisma.SeminarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>[]
          }
          create: {
            args: Prisma.SeminarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          createMany: {
            args: Prisma.SeminarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeminarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>[]
          }
          delete: {
            args: Prisma.SeminarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          update: {
            args: Prisma.SeminarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          deleteMany: {
            args: Prisma.SeminarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeminarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeminarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>[]
          }
          upsert: {
            args: Prisma.SeminarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          aggregate: {
            args: Prisma.SeminarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeminar>
          }
          groupBy: {
            args: Prisma.SeminarGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeminarGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeminarCountArgs<ExtArgs>
            result: $Utils.Optional<SeminarCountAggregateOutputType> | number
          }
        }
      }
      SeminarAdvisor: {
        payload: Prisma.$SeminarAdvisorPayload<ExtArgs>
        fields: Prisma.SeminarAdvisorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeminarAdvisorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeminarAdvisorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>
          }
          findFirst: {
            args: Prisma.SeminarAdvisorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeminarAdvisorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>
          }
          findMany: {
            args: Prisma.SeminarAdvisorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>[]
          }
          create: {
            args: Prisma.SeminarAdvisorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>
          }
          createMany: {
            args: Prisma.SeminarAdvisorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeminarAdvisorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>[]
          }
          delete: {
            args: Prisma.SeminarAdvisorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>
          }
          update: {
            args: Prisma.SeminarAdvisorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>
          }
          deleteMany: {
            args: Prisma.SeminarAdvisorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeminarAdvisorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeminarAdvisorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>[]
          }
          upsert: {
            args: Prisma.SeminarAdvisorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAdvisorPayload>
          }
          aggregate: {
            args: Prisma.SeminarAdvisorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeminarAdvisor>
          }
          groupBy: {
            args: Prisma.SeminarAdvisorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeminarAdvisorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeminarAdvisorCountArgs<ExtArgs>
            result: $Utils.Optional<SeminarAdvisorCountAggregateOutputType> | number
          }
        }
      }
      SeminarAssessor: {
        payload: Prisma.$SeminarAssessorPayload<ExtArgs>
        fields: Prisma.SeminarAssessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeminarAssessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeminarAssessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>
          }
          findFirst: {
            args: Prisma.SeminarAssessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeminarAssessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>
          }
          findMany: {
            args: Prisma.SeminarAssessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>[]
          }
          create: {
            args: Prisma.SeminarAssessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>
          }
          createMany: {
            args: Prisma.SeminarAssessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeminarAssessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>[]
          }
          delete: {
            args: Prisma.SeminarAssessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>
          }
          update: {
            args: Prisma.SeminarAssessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>
          }
          deleteMany: {
            args: Prisma.SeminarAssessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeminarAssessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeminarAssessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>[]
          }
          upsert: {
            args: Prisma.SeminarAssessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarAssessorPayload>
          }
          aggregate: {
            args: Prisma.SeminarAssessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeminarAssessor>
          }
          groupBy: {
            args: Prisma.SeminarAssessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeminarAssessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeminarAssessorCountArgs<ExtArgs>
            result: $Utils.Optional<SeminarAssessorCountAggregateOutputType> | number
          }
        }
      }
      SeminarDocument: {
        payload: Prisma.$SeminarDocumentPayload<ExtArgs>
        fields: Prisma.SeminarDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeminarDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeminarDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>
          }
          findFirst: {
            args: Prisma.SeminarDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeminarDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>
          }
          findMany: {
            args: Prisma.SeminarDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>[]
          }
          create: {
            args: Prisma.SeminarDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>
          }
          createMany: {
            args: Prisma.SeminarDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeminarDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>[]
          }
          delete: {
            args: Prisma.SeminarDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>
          }
          update: {
            args: Prisma.SeminarDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>
          }
          deleteMany: {
            args: Prisma.SeminarDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeminarDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeminarDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>[]
          }
          upsert: {
            args: Prisma.SeminarDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarDocumentPayload>
          }
          aggregate: {
            args: Prisma.SeminarDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeminarDocument>
          }
          groupBy: {
            args: Prisma.SeminarDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeminarDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeminarDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<SeminarDocumentCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      SecurityLog: {
        payload: Prisma.$SecurityLogPayload<ExtArgs>
        fields: Prisma.SecurityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>
          }
          findFirst: {
            args: Prisma.SecurityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>
          }
          findMany: {
            args: Prisma.SecurityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>[]
          }
          create: {
            args: Prisma.SecurityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>
          }
          createMany: {
            args: Prisma.SecurityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>[]
          }
          delete: {
            args: Prisma.SecurityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>
          }
          update: {
            args: Prisma.SecurityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>
          }
          deleteMany: {
            args: Prisma.SecurityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>[]
          }
          upsert: {
            args: Prisma.SecurityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityLogPayload>
          }
          aggregate: {
            args: Prisma.SecurityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityLog>
          }
          groupBy: {
            args: Prisma.SecurityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityLogCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityLogCountAggregateOutputType> | number
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
    oTP?: OTPOmit
    student?: StudentOmit
    lecturer?: LecturerOmit
    coordinator?: CoordinatorOmit
    seminar?: SeminarOmit
    seminarAdvisor?: SeminarAdvisorOmit
    seminarAssessor?: SeminarAssessorOmit
    seminarDocument?: SeminarDocumentOmit
    assessment?: AssessmentOmit
    securityLog?: SecurityLogOmit
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
    otp: number
    securityLog: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otp?: boolean | UserCountOutputTypeCountOtpArgs
    securityLog?: boolean | UserCountOutputTypeCountSecurityLogArgs
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
  export type UserCountOutputTypeCountOtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecurityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityLogWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    seminars: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminars?: boolean | StudentCountOutputTypeCountSeminarsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSeminarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarWhereInput
  }


  /**
   * Count Type LecturerCountOutputType
   */

  export type LecturerCountOutputType = {
    seminarAdvisors: number
    seminarAssessors: number
    assessments: number
  }

  export type LecturerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminarAdvisors?: boolean | LecturerCountOutputTypeCountSeminarAdvisorsArgs
    seminarAssessors?: boolean | LecturerCountOutputTypeCountSeminarAssessorsArgs
    assessments?: boolean | LecturerCountOutputTypeCountAssessmentsArgs
  }

  // Custom InputTypes
  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerCountOutputType
     */
    select?: LecturerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountSeminarAdvisorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarAdvisorWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountSeminarAssessorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarAssessorWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }


  /**
   * Count Type SeminarCountOutputType
   */

  export type SeminarCountOutputType = {
    advisors: number
    assessors: number
    documents: number
    assessments: number
  }

  export type SeminarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advisors?: boolean | SeminarCountOutputTypeCountAdvisorsArgs
    assessors?: boolean | SeminarCountOutputTypeCountAssessorsArgs
    documents?: boolean | SeminarCountOutputTypeCountDocumentsArgs
    assessments?: boolean | SeminarCountOutputTypeCountAssessmentsArgs
  }

  // Custom InputTypes
  /**
   * SeminarCountOutputType without action
   */
  export type SeminarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarCountOutputType
     */
    select?: SeminarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeminarCountOutputType without action
   */
  export type SeminarCountOutputTypeCountAdvisorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarAdvisorWhereInput
  }

  /**
   * SeminarCountOutputType without action
   */
  export type SeminarCountOutputTypeCountAssessorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarAssessorWhereInput
  }

  /**
   * SeminarCountOutputType without action
   */
  export type SeminarCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarDocumentWhereInput
  }

  /**
   * SeminarCountOutputType without action
   */
  export type SeminarCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    studentID: number | null
    lecturerID: number | null
    coordinatorID: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    studentID: number | null
    lecturerID: number | null
    coordinatorID: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isVerify: boolean | null
    studentID: number | null
    lecturerID: number | null
    coordinatorID: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isVerify: boolean | null
    studentID: number | null
    lecturerID: number | null
    coordinatorID: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    isVerify: number
    studentID: number
    lecturerID: number
    coordinatorID: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    studentID?: true
    lecturerID?: true
    coordinatorID?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    studentID?: true
    lecturerID?: true
    coordinatorID?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isVerify?: true
    studentID?: true
    lecturerID?: true
    coordinatorID?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isVerify?: true
    studentID?: true
    lecturerID?: true
    coordinatorID?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isVerify?: true
    studentID?: true
    lecturerID?: true
    coordinatorID?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    isVerify: boolean
    studentID: number | null
    lecturerID: number | null
    coordinatorID: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    studentID?: boolean
    lecturerID?: boolean
    coordinatorID?: boolean
    otp?: boolean | User$otpArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    coordinator?: boolean | User$coordinatorArgs<ExtArgs>
    securityLog?: boolean | User$securityLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    studentID?: boolean
    lecturerID?: boolean
    coordinatorID?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    coordinator?: boolean | User$coordinatorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    studentID?: boolean
    lecturerID?: boolean
    coordinatorID?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    coordinator?: boolean | User$coordinatorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    studentID?: boolean
    lecturerID?: boolean
    coordinatorID?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "isVerify" | "studentID" | "lecturerID" | "coordinatorID", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otp?: boolean | User$otpArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    coordinator?: boolean | User$coordinatorArgs<ExtArgs>
    securityLog?: boolean | User$securityLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    coordinator?: boolean | User$coordinatorArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    coordinator?: boolean | User$coordinatorArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      otp: Prisma.$OTPPayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs> | null
      lecturer: Prisma.$LecturerPayload<ExtArgs> | null
      coordinator: Prisma.$CoordinatorPayload<ExtArgs> | null
      securityLog: Prisma.$SecurityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      isVerify: boolean
      studentID: number | null
      lecturerID: number | null
      coordinatorID: number | null
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    otp<T extends User$otpArgs<ExtArgs> = {}>(args?: Subset<T, User$otpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lecturer<T extends User$lecturerArgs<ExtArgs> = {}>(args?: Subset<T, User$lecturerArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coordinator<T extends User$coordinatorArgs<ExtArgs> = {}>(args?: Subset<T, User$coordinatorArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    securityLog<T extends User$securityLogArgs<ExtArgs> = {}>(args?: Subset<T, User$securityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly studentID: FieldRef<"User", 'Int'>
    readonly lecturerID: FieldRef<"User", 'Int'>
    readonly coordinatorID: FieldRef<"User", 'Int'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.otp
   */
  export type User$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    cursor?: OTPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.lecturer
   */
  export type User$lecturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    where?: LecturerWhereInput
  }

  /**
   * User.coordinator
   */
  export type User$coordinatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    where?: CoordinatorWhereInput
  }

  /**
   * User.securityLog
   */
  export type User$securityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    where?: SecurityLogWhereInput
    orderBy?: SecurityLogOrderByWithRelationInput | SecurityLogOrderByWithRelationInput[]
    cursor?: SecurityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityLogScalarFieldEnum | SecurityLogScalarFieldEnum[]
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
   * Model OTP
   */

  export type AggregateOTP = {
    _count: OTPCountAggregateOutputType | null
    _avg: OTPAvgAggregateOutputType | null
    _sum: OTPSumAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  export type OTPAvgAggregateOutputType = {
    code: number | null
    userID: number | null
  }

  export type OTPSumAggregateOutputType = {
    code: number | null
    userID: number | null
  }

  export type OTPMinAggregateOutputType = {
    id: string | null
    code: number | null
    expiresAt: Date | null
    userID: number | null
    createdAt: Date | null
  }

  export type OTPMaxAggregateOutputType = {
    id: string | null
    code: number | null
    expiresAt: Date | null
    userID: number | null
    createdAt: Date | null
  }

  export type OTPCountAggregateOutputType = {
    id: number
    code: number
    expiresAt: number
    userID: number
    createdAt: number
    _all: number
  }


  export type OTPAvgAggregateInputType = {
    code?: true
    userID?: true
  }

  export type OTPSumAggregateInputType = {
    code?: true
    userID?: true
  }

  export type OTPMinAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userID?: true
    createdAt?: true
  }

  export type OTPMaxAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userID?: true
    createdAt?: true
  }

  export type OTPCountAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userID?: true
    createdAt?: true
    _all?: true
  }

  export type OTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTP to aggregate.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPS
    **/
    _count?: true | OTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OTPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OTPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPMaxAggregateInputType
  }

  export type GetOTPAggregateType<T extends OTPAggregateArgs> = {
        [P in keyof T & keyof AggregateOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTP[P]>
      : GetScalarType<T[P], AggregateOTP[P]>
  }




  export type OTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithAggregationInput | OTPOrderByWithAggregationInput[]
    by: OTPScalarFieldEnum[] | OTPScalarFieldEnum
    having?: OTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPCountAggregateInputType | true
    _avg?: OTPAvgAggregateInputType
    _sum?: OTPSumAggregateInputType
    _min?: OTPMinAggregateInputType
    _max?: OTPMaxAggregateInputType
  }

  export type OTPGroupByOutputType = {
    id: string
    code: number
    expiresAt: Date
    userID: number
    createdAt: Date
    _count: OTPCountAggregateOutputType | null
    _avg: OTPAvgAggregateOutputType | null
    _sum: OTPSumAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  type GetOTPGroupByPayload<T extends OTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPGroupByOutputType[P]>
            : GetScalarType<T[P], OTPGroupByOutputType[P]>
        }
      >
    >


  export type OTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userID?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userID?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userID?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectScalar = {
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userID?: boolean
    createdAt?: boolean
  }

  export type OTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "expiresAt" | "userID" | "createdAt", ExtArgs["result"]["oTP"]>
  export type OTPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OTPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OTPIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTP"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: number
      expiresAt: Date
      userID: number
      createdAt: Date
    }, ExtArgs["result"]["oTP"]>
    composites: {}
  }

  type OTPGetPayload<S extends boolean | null | undefined | OTPDefaultArgs> = $Result.GetResult<Prisma.$OTPPayload, S>

  type OTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTPCountAggregateInputType | true
    }

  export interface OTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTP'], meta: { name: 'OTP' } }
    /**
     * Find zero or one OTP that matches the filter.
     * @param {OTPFindUniqueArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPFindUniqueArgs>(args: SelectSubset<T, OTPFindUniqueArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTPFindUniqueOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPFindFirstArgs>(args?: SelectSubset<T, OTPFindFirstArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPS
     * const oTPS = await prisma.oTP.findMany()
     * 
     * // Get first 10 OTPS
     * const oTPS = await prisma.oTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPWithIdOnly = await prisma.oTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPFindManyArgs>(args?: SelectSubset<T, OTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OTP.
     * @param {OTPCreateArgs} args - Arguments to create a OTP.
     * @example
     * // Create one OTP
     * const OTP = await prisma.oTP.create({
     *   data: {
     *     // ... data to create a OTP
     *   }
     * })
     * 
     */
    create<T extends OTPCreateArgs>(args: SelectSubset<T, OTPCreateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OTPS.
     * @param {OTPCreateManyArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPCreateManyArgs>(args?: SelectSubset<T, OTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OTPS and returns the data saved in the database.
     * @param {OTPCreateManyAndReturnArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OTPCreateManyAndReturnArgs>(args?: SelectSubset<T, OTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OTP.
     * @param {OTPDeleteArgs} args - Arguments to delete one OTP.
     * @example
     * // Delete one OTP
     * const OTP = await prisma.oTP.delete({
     *   where: {
     *     // ... filter to delete one OTP
     *   }
     * })
     * 
     */
    delete<T extends OTPDeleteArgs>(args: SelectSubset<T, OTPDeleteArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OTP.
     * @param {OTPUpdateArgs} args - Arguments to update one OTP.
     * @example
     * // Update one OTP
     * const oTP = await prisma.oTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPUpdateArgs>(args: SelectSubset<T, OTPUpdateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OTPS.
     * @param {OTPDeleteManyArgs} args - Arguments to filter OTPS to delete.
     * @example
     * // Delete a few OTPS
     * const { count } = await prisma.oTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPDeleteManyArgs>(args?: SelectSubset<T, OTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPUpdateManyArgs>(args: SelectSubset<T, OTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS and returns the data updated in the database.
     * @param {OTPUpdateManyAndReturnArgs} args - Arguments to update many OTPS.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.updateManyAndReturn({
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
    updateManyAndReturn<T extends OTPUpdateManyAndReturnArgs>(args: SelectSubset<T, OTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OTP.
     * @param {OTPUpsertArgs} args - Arguments to update or create a OTP.
     * @example
     * // Update or create a OTP
     * const oTP = await prisma.oTP.upsert({
     *   create: {
     *     // ... data to create a OTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTP we want to update
     *   }
     * })
     */
    upsert<T extends OTPUpsertArgs>(args: SelectSubset<T, OTPUpsertArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPCountArgs} args - Arguments to filter OTPS to count.
     * @example
     * // Count the number of OTPS
     * const count = await prisma.oTP.count({
     *   where: {
     *     // ... the filter for the OTPS we want to count
     *   }
     * })
    **/
    count<T extends OTPCountArgs>(
      args?: Subset<T, OTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OTPAggregateArgs>(args: Subset<T, OTPAggregateArgs>): Prisma.PrismaPromise<GetOTPAggregateType<T>>

    /**
     * Group by OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPGroupByArgs} args - Group by arguments.
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
      T extends OTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPGroupByArgs['orderBy'] }
        : { orderBy?: OTPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTP model
   */
  readonly fields: OTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OTP model
   */
  interface OTPFieldRefs {
    readonly id: FieldRef<"OTP", 'String'>
    readonly code: FieldRef<"OTP", 'Int'>
    readonly expiresAt: FieldRef<"OTP", 'DateTime'>
    readonly userID: FieldRef<"OTP", 'Int'>
    readonly createdAt: FieldRef<"OTP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OTP findUnique
   */
  export type OTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findUniqueOrThrow
   */
  export type OTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findFirst
   */
  export type OTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findFirstOrThrow
   */
  export type OTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findMany
   */
  export type OTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTPS to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP create
   */
  export type OTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to create a OTP.
     */
    data: XOR<OTPCreateInput, OTPUncheckedCreateInput>
  }

  /**
   * OTP createMany
   */
  export type OTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTP createManyAndReturn
   */
  export type OTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OTP update
   */
  export type OTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to update a OTP.
     */
    data: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
    /**
     * Choose, which OTP to update.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP updateMany
   */
  export type OTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
  }

  /**
   * OTP updateManyAndReturn
   */
  export type OTPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OTP upsert
   */
  export type OTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The filter to search for the OTP to update in case it exists.
     */
    where: OTPWhereUniqueInput
    /**
     * In case the OTP found by the `where` argument doesn't exist, create a new OTP with this data.
     */
    create: XOR<OTPCreateInput, OTPUncheckedCreateInput>
    /**
     * In case the OTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
  }

  /**
   * OTP delete
   */
  export type OTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter which OTP to delete.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP deleteMany
   */
  export type OTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPS to delete
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to delete.
     */
    limit?: number
  }

  /**
   * OTP without action
   */
  export type OTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    nim: string | null
    name: string | null
    phoneNumber: string | null
    profilePicture: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    nim: string | null
    name: string | null
    phoneNumber: string | null
    profilePicture: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    nim: number
    name: number
    phoneNumber: number
    profilePicture: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    nim?: true
    name?: true
    phoneNumber?: true
    profilePicture?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    nim?: true
    name?: true
    phoneNumber?: true
    profilePicture?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    nim?: true
    name?: true
    phoneNumber?: true
    profilePicture?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    nim: string
    name: string
    phoneNumber: string
    profilePicture: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
    user?: boolean | Student$userArgs<ExtArgs>
    seminars?: boolean | Student$seminarsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    nim?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "name" | "phoneNumber" | "profilePicture", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Student$userArgs<ExtArgs>
    seminars?: boolean | Student$seminarsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      seminars: Prisma.$SeminarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nim: string
      name: string
      phoneNumber: string
      profilePicture: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Student$userArgs<ExtArgs> = {}>(args?: Subset<T, Student$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seminars<T extends Student$seminarsArgs<ExtArgs> = {}>(args?: Subset<T, Student$seminarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly nim: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly phoneNumber: FieldRef<"Student", 'String'>
    readonly profilePicture: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.user
   */
  export type Student$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Student.seminars
   */
  export type Student$seminarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    where?: SeminarWhereInput
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    cursor?: SeminarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Lecturer
   */

  export type AggregateLecturer = {
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  export type LecturerAvgAggregateOutputType = {
    id: number | null
  }

  export type LecturerSumAggregateOutputType = {
    id: number | null
  }

  export type LecturerMinAggregateOutputType = {
    id: number | null
    nip: string | null
    name: string | null
    phoneNumber: string | null
    profilePicture: string | null
  }

  export type LecturerMaxAggregateOutputType = {
    id: number | null
    nip: string | null
    name: string | null
    phoneNumber: string | null
    profilePicture: string | null
  }

  export type LecturerCountAggregateOutputType = {
    id: number
    nip: number
    name: number
    phoneNumber: number
    profilePicture: number
    _all: number
  }


  export type LecturerAvgAggregateInputType = {
    id?: true
  }

  export type LecturerSumAggregateInputType = {
    id?: true
  }

  export type LecturerMinAggregateInputType = {
    id?: true
    nip?: true
    name?: true
    phoneNumber?: true
    profilePicture?: true
  }

  export type LecturerMaxAggregateInputType = {
    id?: true
    nip?: true
    name?: true
    phoneNumber?: true
    profilePicture?: true
  }

  export type LecturerCountAggregateInputType = {
    id?: true
    nip?: true
    name?: true
    phoneNumber?: true
    profilePicture?: true
    _all?: true
  }

  export type LecturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturer to aggregate.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecturers
    **/
    _count?: true | LecturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerMaxAggregateInputType
  }

  export type GetLecturerAggregateType<T extends LecturerAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturer[P]>
      : GetScalarType<T[P], AggregateLecturer[P]>
  }




  export type LecturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerWhereInput
    orderBy?: LecturerOrderByWithAggregationInput | LecturerOrderByWithAggregationInput[]
    by: LecturerScalarFieldEnum[] | LecturerScalarFieldEnum
    having?: LecturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerCountAggregateInputType | true
    _avg?: LecturerAvgAggregateInputType
    _sum?: LecturerSumAggregateInputType
    _min?: LecturerMinAggregateInputType
    _max?: LecturerMaxAggregateInputType
  }

  export type LecturerGroupByOutputType = {
    id: number
    nip: string
    name: string
    phoneNumber: string
    profilePicture: string | null
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  type GetLecturerGroupByPayload<T extends LecturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerGroupByOutputType[P]>
        }
      >
    >


  export type LecturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
    user?: boolean | Lecturer$userArgs<ExtArgs>
    seminarAdvisors?: boolean | Lecturer$seminarAdvisorsArgs<ExtArgs>
    seminarAssessors?: boolean | Lecturer$seminarAssessorsArgs<ExtArgs>
    assessments?: boolean | Lecturer$assessmentsArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturer"]>

  export type LecturerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["lecturer"]>

  export type LecturerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["lecturer"]>

  export type LecturerSelectScalar = {
    id?: boolean
    nip?: boolean
    name?: boolean
    phoneNumber?: boolean
    profilePicture?: boolean
  }

  export type LecturerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nip" | "name" | "phoneNumber" | "profilePicture", ExtArgs["result"]["lecturer"]>
  export type LecturerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Lecturer$userArgs<ExtArgs>
    seminarAdvisors?: boolean | Lecturer$seminarAdvisorsArgs<ExtArgs>
    seminarAssessors?: boolean | Lecturer$seminarAssessorsArgs<ExtArgs>
    assessments?: boolean | Lecturer$assessmentsArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LecturerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LecturerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LecturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecturer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      seminarAdvisors: Prisma.$SeminarAdvisorPayload<ExtArgs>[]
      seminarAssessors: Prisma.$SeminarAssessorPayload<ExtArgs>[]
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nip: string
      name: string
      phoneNumber: string
      profilePicture: string | null
    }, ExtArgs["result"]["lecturer"]>
    composites: {}
  }

  type LecturerGetPayload<S extends boolean | null | undefined | LecturerDefaultArgs> = $Result.GetResult<Prisma.$LecturerPayload, S>

  type LecturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturerCountAggregateInputType | true
    }

  export interface LecturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecturer'], meta: { name: 'Lecturer' } }
    /**
     * Find zero or one Lecturer that matches the filter.
     * @param {LecturerFindUniqueArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturerFindUniqueArgs>(args: SelectSubset<T, LecturerFindUniqueArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecturer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturerFindUniqueOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturerFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturerFindFirstArgs>(args?: SelectSubset<T, LecturerFindFirstArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturerFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecturers
     * const lecturers = await prisma.lecturer.findMany()
     * 
     * // Get first 10 Lecturers
     * const lecturers = await prisma.lecturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturerFindManyArgs>(args?: SelectSubset<T, LecturerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecturer.
     * @param {LecturerCreateArgs} args - Arguments to create a Lecturer.
     * @example
     * // Create one Lecturer
     * const Lecturer = await prisma.lecturer.create({
     *   data: {
     *     // ... data to create a Lecturer
     *   }
     * })
     * 
     */
    create<T extends LecturerCreateArgs>(args: SelectSubset<T, LecturerCreateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecturers.
     * @param {LecturerCreateManyArgs} args - Arguments to create many Lecturers.
     * @example
     * // Create many Lecturers
     * const lecturer = await prisma.lecturer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturerCreateManyArgs>(args?: SelectSubset<T, LecturerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lecturers and returns the data saved in the database.
     * @param {LecturerCreateManyAndReturnArgs} args - Arguments to create many Lecturers.
     * @example
     * // Create many Lecturers
     * const lecturer = await prisma.lecturer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lecturers and only return the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LecturerCreateManyAndReturnArgs>(args?: SelectSubset<T, LecturerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecturer.
     * @param {LecturerDeleteArgs} args - Arguments to delete one Lecturer.
     * @example
     * // Delete one Lecturer
     * const Lecturer = await prisma.lecturer.delete({
     *   where: {
     *     // ... filter to delete one Lecturer
     *   }
     * })
     * 
     */
    delete<T extends LecturerDeleteArgs>(args: SelectSubset<T, LecturerDeleteArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecturer.
     * @param {LecturerUpdateArgs} args - Arguments to update one Lecturer.
     * @example
     * // Update one Lecturer
     * const lecturer = await prisma.lecturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturerUpdateArgs>(args: SelectSubset<T, LecturerUpdateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecturers.
     * @param {LecturerDeleteManyArgs} args - Arguments to filter Lecturers to delete.
     * @example
     * // Delete a few Lecturers
     * const { count } = await prisma.lecturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturerDeleteManyArgs>(args?: SelectSubset<T, LecturerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturerUpdateManyArgs>(args: SelectSubset<T, LecturerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers and returns the data updated in the database.
     * @param {LecturerUpdateManyAndReturnArgs} args - Arguments to update many Lecturers.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lecturers and only return the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.updateManyAndReturn({
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
    updateManyAndReturn<T extends LecturerUpdateManyAndReturnArgs>(args: SelectSubset<T, LecturerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecturer.
     * @param {LecturerUpsertArgs} args - Arguments to update or create a Lecturer.
     * @example
     * // Update or create a Lecturer
     * const lecturer = await prisma.lecturer.upsert({
     *   create: {
     *     // ... data to create a Lecturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecturer we want to update
     *   }
     * })
     */
    upsert<T extends LecturerUpsertArgs>(args: SelectSubset<T, LecturerUpsertArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerCountArgs} args - Arguments to filter Lecturers to count.
     * @example
     * // Count the number of Lecturers
     * const count = await prisma.lecturer.count({
     *   where: {
     *     // ... the filter for the Lecturers we want to count
     *   }
     * })
    **/
    count<T extends LecturerCountArgs>(
      args?: Subset<T, LecturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturerAggregateArgs>(args: Subset<T, LecturerAggregateArgs>): Prisma.PrismaPromise<GetLecturerAggregateType<T>>

    /**
     * Group by Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerGroupByArgs} args - Group by arguments.
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
      T extends LecturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerGroupByArgs['orderBy'] }
        : { orderBy?: LecturerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LecturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecturer model
   */
  readonly fields: LecturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Lecturer$userArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seminarAdvisors<T extends Lecturer$seminarAdvisorsArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$seminarAdvisorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seminarAssessors<T extends Lecturer$seminarAssessorsArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$seminarAssessorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessments<T extends Lecturer$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lecturer model
   */
  interface LecturerFieldRefs {
    readonly id: FieldRef<"Lecturer", 'Int'>
    readonly nip: FieldRef<"Lecturer", 'String'>
    readonly name: FieldRef<"Lecturer", 'String'>
    readonly phoneNumber: FieldRef<"Lecturer", 'String'>
    readonly profilePicture: FieldRef<"Lecturer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lecturer findUnique
   */
  export type LecturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findUniqueOrThrow
   */
  export type LecturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findFirst
   */
  export type LecturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findFirstOrThrow
   */
  export type LecturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findMany
   */
  export type LecturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturers to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer create
   */
  export type LecturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecturer.
     */
    data: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
  }

  /**
   * Lecturer createMany
   */
  export type LecturerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lecturers.
     */
    data: LecturerCreateManyInput | LecturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecturer createManyAndReturn
   */
  export type LecturerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * The data used to create many Lecturers.
     */
    data: LecturerCreateManyInput | LecturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecturer update
   */
  export type LecturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecturer.
     */
    data: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
    /**
     * Choose, which Lecturer to update.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer updateMany
   */
  export type LecturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lecturers.
     */
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to update.
     */
    limit?: number
  }

  /**
   * Lecturer updateManyAndReturn
   */
  export type LecturerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * The data used to update Lecturers.
     */
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to update.
     */
    limit?: number
  }

  /**
   * Lecturer upsert
   */
  export type LecturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecturer to update in case it exists.
     */
    where: LecturerWhereUniqueInput
    /**
     * In case the Lecturer found by the `where` argument doesn't exist, create a new Lecturer with this data.
     */
    create: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
    /**
     * In case the Lecturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
  }

  /**
   * Lecturer delete
   */
  export type LecturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter which Lecturer to delete.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer deleteMany
   */
  export type LecturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturers to delete
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to delete.
     */
    limit?: number
  }

  /**
   * Lecturer.user
   */
  export type Lecturer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Lecturer.seminarAdvisors
   */
  export type Lecturer$seminarAdvisorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    where?: SeminarAdvisorWhereInput
    orderBy?: SeminarAdvisorOrderByWithRelationInput | SeminarAdvisorOrderByWithRelationInput[]
    cursor?: SeminarAdvisorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarAdvisorScalarFieldEnum | SeminarAdvisorScalarFieldEnum[]
  }

  /**
   * Lecturer.seminarAssessors
   */
  export type Lecturer$seminarAssessorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    where?: SeminarAssessorWhereInput
    orderBy?: SeminarAssessorOrderByWithRelationInput | SeminarAssessorOrderByWithRelationInput[]
    cursor?: SeminarAssessorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarAssessorScalarFieldEnum | SeminarAssessorScalarFieldEnum[]
  }

  /**
   * Lecturer.assessments
   */
  export type Lecturer$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Lecturer without action
   */
  export type LecturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
  }


  /**
   * Model Coordinator
   */

  export type AggregateCoordinator = {
    _count: CoordinatorCountAggregateOutputType | null
    _avg: CoordinatorAvgAggregateOutputType | null
    _sum: CoordinatorSumAggregateOutputType | null
    _min: CoordinatorMinAggregateOutputType | null
    _max: CoordinatorMaxAggregateOutputType | null
  }

  export type CoordinatorAvgAggregateOutputType = {
    id: number | null
  }

  export type CoordinatorSumAggregateOutputType = {
    id: number | null
  }

  export type CoordinatorMinAggregateOutputType = {
    id: number | null
    name: string | null
    profilePicture: string | null
  }

  export type CoordinatorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profilePicture: string | null
  }

  export type CoordinatorCountAggregateOutputType = {
    id: number
    name: number
    profilePicture: number
    _all: number
  }


  export type CoordinatorAvgAggregateInputType = {
    id?: true
  }

  export type CoordinatorSumAggregateInputType = {
    id?: true
  }

  export type CoordinatorMinAggregateInputType = {
    id?: true
    name?: true
    profilePicture?: true
  }

  export type CoordinatorMaxAggregateInputType = {
    id?: true
    name?: true
    profilePicture?: true
  }

  export type CoordinatorCountAggregateInputType = {
    id?: true
    name?: true
    profilePicture?: true
    _all?: true
  }

  export type CoordinatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinator to aggregate.
     */
    where?: CoordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinators to fetch.
     */
    orderBy?: CoordinatorOrderByWithRelationInput | CoordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coordinators
    **/
    _count?: true | CoordinatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordinatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordinatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordinatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordinatorMaxAggregateInputType
  }

  export type GetCoordinatorAggregateType<T extends CoordinatorAggregateArgs> = {
        [P in keyof T & keyof AggregateCoordinator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoordinator[P]>
      : GetScalarType<T[P], AggregateCoordinator[P]>
  }




  export type CoordinatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoordinatorWhereInput
    orderBy?: CoordinatorOrderByWithAggregationInput | CoordinatorOrderByWithAggregationInput[]
    by: CoordinatorScalarFieldEnum[] | CoordinatorScalarFieldEnum
    having?: CoordinatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordinatorCountAggregateInputType | true
    _avg?: CoordinatorAvgAggregateInputType
    _sum?: CoordinatorSumAggregateInputType
    _min?: CoordinatorMinAggregateInputType
    _max?: CoordinatorMaxAggregateInputType
  }

  export type CoordinatorGroupByOutputType = {
    id: number
    name: string
    profilePicture: string | null
    _count: CoordinatorCountAggregateOutputType | null
    _avg: CoordinatorAvgAggregateOutputType | null
    _sum: CoordinatorSumAggregateOutputType | null
    _min: CoordinatorMinAggregateOutputType | null
    _max: CoordinatorMaxAggregateOutputType | null
  }

  type GetCoordinatorGroupByPayload<T extends CoordinatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoordinatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordinatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordinatorGroupByOutputType[P]>
            : GetScalarType<T[P], CoordinatorGroupByOutputType[P]>
        }
      >
    >


  export type CoordinatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePicture?: boolean
    user?: boolean | Coordinator$userArgs<ExtArgs>
  }, ExtArgs["result"]["coordinator"]>

  export type CoordinatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["coordinator"]>

  export type CoordinatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["coordinator"]>

  export type CoordinatorSelectScalar = {
    id?: boolean
    name?: boolean
    profilePicture?: boolean
  }

  export type CoordinatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profilePicture", ExtArgs["result"]["coordinator"]>
  export type CoordinatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Coordinator$userArgs<ExtArgs>
  }
  export type CoordinatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CoordinatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoordinatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coordinator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      profilePicture: string | null
    }, ExtArgs["result"]["coordinator"]>
    composites: {}
  }

  type CoordinatorGetPayload<S extends boolean | null | undefined | CoordinatorDefaultArgs> = $Result.GetResult<Prisma.$CoordinatorPayload, S>

  type CoordinatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoordinatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoordinatorCountAggregateInputType | true
    }

  export interface CoordinatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coordinator'], meta: { name: 'Coordinator' } }
    /**
     * Find zero or one Coordinator that matches the filter.
     * @param {CoordinatorFindUniqueArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoordinatorFindUniqueArgs>(args: SelectSubset<T, CoordinatorFindUniqueArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coordinator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoordinatorFindUniqueOrThrowArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoordinatorFindUniqueOrThrowArgs>(args: SelectSubset<T, CoordinatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorFindFirstArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoordinatorFindFirstArgs>(args?: SelectSubset<T, CoordinatorFindFirstArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorFindFirstOrThrowArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoordinatorFindFirstOrThrowArgs>(args?: SelectSubset<T, CoordinatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coordinators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coordinators
     * const coordinators = await prisma.coordinator.findMany()
     * 
     * // Get first 10 Coordinators
     * const coordinators = await prisma.coordinator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coordinatorWithIdOnly = await prisma.coordinator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoordinatorFindManyArgs>(args?: SelectSubset<T, CoordinatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coordinator.
     * @param {CoordinatorCreateArgs} args - Arguments to create a Coordinator.
     * @example
     * // Create one Coordinator
     * const Coordinator = await prisma.coordinator.create({
     *   data: {
     *     // ... data to create a Coordinator
     *   }
     * })
     * 
     */
    create<T extends CoordinatorCreateArgs>(args: SelectSubset<T, CoordinatorCreateArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coordinators.
     * @param {CoordinatorCreateManyArgs} args - Arguments to create many Coordinators.
     * @example
     * // Create many Coordinators
     * const coordinator = await prisma.coordinator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoordinatorCreateManyArgs>(args?: SelectSubset<T, CoordinatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coordinators and returns the data saved in the database.
     * @param {CoordinatorCreateManyAndReturnArgs} args - Arguments to create many Coordinators.
     * @example
     * // Create many Coordinators
     * const coordinator = await prisma.coordinator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coordinators and only return the `id`
     * const coordinatorWithIdOnly = await prisma.coordinator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoordinatorCreateManyAndReturnArgs>(args?: SelectSubset<T, CoordinatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coordinator.
     * @param {CoordinatorDeleteArgs} args - Arguments to delete one Coordinator.
     * @example
     * // Delete one Coordinator
     * const Coordinator = await prisma.coordinator.delete({
     *   where: {
     *     // ... filter to delete one Coordinator
     *   }
     * })
     * 
     */
    delete<T extends CoordinatorDeleteArgs>(args: SelectSubset<T, CoordinatorDeleteArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coordinator.
     * @param {CoordinatorUpdateArgs} args - Arguments to update one Coordinator.
     * @example
     * // Update one Coordinator
     * const coordinator = await prisma.coordinator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoordinatorUpdateArgs>(args: SelectSubset<T, CoordinatorUpdateArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coordinators.
     * @param {CoordinatorDeleteManyArgs} args - Arguments to filter Coordinators to delete.
     * @example
     * // Delete a few Coordinators
     * const { count } = await prisma.coordinator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoordinatorDeleteManyArgs>(args?: SelectSubset<T, CoordinatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coordinators
     * const coordinator = await prisma.coordinator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoordinatorUpdateManyArgs>(args: SelectSubset<T, CoordinatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinators and returns the data updated in the database.
     * @param {CoordinatorUpdateManyAndReturnArgs} args - Arguments to update many Coordinators.
     * @example
     * // Update many Coordinators
     * const coordinator = await prisma.coordinator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coordinators and only return the `id`
     * const coordinatorWithIdOnly = await prisma.coordinator.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoordinatorUpdateManyAndReturnArgs>(args: SelectSubset<T, CoordinatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coordinator.
     * @param {CoordinatorUpsertArgs} args - Arguments to update or create a Coordinator.
     * @example
     * // Update or create a Coordinator
     * const coordinator = await prisma.coordinator.upsert({
     *   create: {
     *     // ... data to create a Coordinator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coordinator we want to update
     *   }
     * })
     */
    upsert<T extends CoordinatorUpsertArgs>(args: SelectSubset<T, CoordinatorUpsertArgs<ExtArgs>>): Prisma__CoordinatorClient<$Result.GetResult<Prisma.$CoordinatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coordinators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorCountArgs} args - Arguments to filter Coordinators to count.
     * @example
     * // Count the number of Coordinators
     * const count = await prisma.coordinator.count({
     *   where: {
     *     // ... the filter for the Coordinators we want to count
     *   }
     * })
    **/
    count<T extends CoordinatorCountArgs>(
      args?: Subset<T, CoordinatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordinatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coordinator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoordinatorAggregateArgs>(args: Subset<T, CoordinatorAggregateArgs>): Prisma.PrismaPromise<GetCoordinatorAggregateType<T>>

    /**
     * Group by Coordinator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorGroupByArgs} args - Group by arguments.
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
      T extends CoordinatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoordinatorGroupByArgs['orderBy'] }
        : { orderBy?: CoordinatorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoordinatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordinatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coordinator model
   */
  readonly fields: CoordinatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coordinator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoordinatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Coordinator$userArgs<ExtArgs> = {}>(args?: Subset<T, Coordinator$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Coordinator model
   */
  interface CoordinatorFieldRefs {
    readonly id: FieldRef<"Coordinator", 'Int'>
    readonly name: FieldRef<"Coordinator", 'String'>
    readonly profilePicture: FieldRef<"Coordinator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Coordinator findUnique
   */
  export type CoordinatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinator to fetch.
     */
    where: CoordinatorWhereUniqueInput
  }

  /**
   * Coordinator findUniqueOrThrow
   */
  export type CoordinatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinator to fetch.
     */
    where: CoordinatorWhereUniqueInput
  }

  /**
   * Coordinator findFirst
   */
  export type CoordinatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinator to fetch.
     */
    where?: CoordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinators to fetch.
     */
    orderBy?: CoordinatorOrderByWithRelationInput | CoordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinators.
     */
    cursor?: CoordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinators.
     */
    distinct?: CoordinatorScalarFieldEnum | CoordinatorScalarFieldEnum[]
  }

  /**
   * Coordinator findFirstOrThrow
   */
  export type CoordinatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinator to fetch.
     */
    where?: CoordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinators to fetch.
     */
    orderBy?: CoordinatorOrderByWithRelationInput | CoordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinators.
     */
    cursor?: CoordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinators.
     */
    distinct?: CoordinatorScalarFieldEnum | CoordinatorScalarFieldEnum[]
  }

  /**
   * Coordinator findMany
   */
  export type CoordinatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * Filter, which Coordinators to fetch.
     */
    where?: CoordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinators to fetch.
     */
    orderBy?: CoordinatorOrderByWithRelationInput | CoordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coordinators.
     */
    cursor?: CoordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinators.
     */
    skip?: number
    distinct?: CoordinatorScalarFieldEnum | CoordinatorScalarFieldEnum[]
  }

  /**
   * Coordinator create
   */
  export type CoordinatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Coordinator.
     */
    data: XOR<CoordinatorCreateInput, CoordinatorUncheckedCreateInput>
  }

  /**
   * Coordinator createMany
   */
  export type CoordinatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coordinators.
     */
    data: CoordinatorCreateManyInput | CoordinatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coordinator createManyAndReturn
   */
  export type CoordinatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * The data used to create many Coordinators.
     */
    data: CoordinatorCreateManyInput | CoordinatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coordinator update
   */
  export type CoordinatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Coordinator.
     */
    data: XOR<CoordinatorUpdateInput, CoordinatorUncheckedUpdateInput>
    /**
     * Choose, which Coordinator to update.
     */
    where: CoordinatorWhereUniqueInput
  }

  /**
   * Coordinator updateMany
   */
  export type CoordinatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coordinators.
     */
    data: XOR<CoordinatorUpdateManyMutationInput, CoordinatorUncheckedUpdateManyInput>
    /**
     * Filter which Coordinators to update
     */
    where?: CoordinatorWhereInput
    /**
     * Limit how many Coordinators to update.
     */
    limit?: number
  }

  /**
   * Coordinator updateManyAndReturn
   */
  export type CoordinatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * The data used to update Coordinators.
     */
    data: XOR<CoordinatorUpdateManyMutationInput, CoordinatorUncheckedUpdateManyInput>
    /**
     * Filter which Coordinators to update
     */
    where?: CoordinatorWhereInput
    /**
     * Limit how many Coordinators to update.
     */
    limit?: number
  }

  /**
   * Coordinator upsert
   */
  export type CoordinatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Coordinator to update in case it exists.
     */
    where: CoordinatorWhereUniqueInput
    /**
     * In case the Coordinator found by the `where` argument doesn't exist, create a new Coordinator with this data.
     */
    create: XOR<CoordinatorCreateInput, CoordinatorUncheckedCreateInput>
    /**
     * In case the Coordinator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoordinatorUpdateInput, CoordinatorUncheckedUpdateInput>
  }

  /**
   * Coordinator delete
   */
  export type CoordinatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
    /**
     * Filter which Coordinator to delete.
     */
    where: CoordinatorWhereUniqueInput
  }

  /**
   * Coordinator deleteMany
   */
  export type CoordinatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinators to delete
     */
    where?: CoordinatorWhereInput
    /**
     * Limit how many Coordinators to delete.
     */
    limit?: number
  }

  /**
   * Coordinator.user
   */
  export type Coordinator$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Coordinator without action
   */
  export type CoordinatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinator
     */
    select?: CoordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinator
     */
    omit?: CoordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinatorInclude<ExtArgs> | null
  }


  /**
   * Model Seminar
   */

  export type AggregateSeminar = {
    _count: SeminarCountAggregateOutputType | null
    _avg: SeminarAvgAggregateOutputType | null
    _sum: SeminarSumAggregateOutputType | null
    _min: SeminarMinAggregateOutputType | null
    _max: SeminarMaxAggregateOutputType | null
  }

  export type SeminarAvgAggregateOutputType = {
    id: number | null
  }

  export type SeminarSumAggregateOutputType = {
    id: number | null
  }

  export type SeminarMinAggregateOutputType = {
    id: number | null
    type: $Enums.SeminarType | null
    title: string | null
    status: $Enums.SeminarStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    folderId: string | null
    studentNIM: string | null
    time: Date | null
    room: string | null
  }

  export type SeminarMaxAggregateOutputType = {
    id: number | null
    type: $Enums.SeminarType | null
    title: string | null
    status: $Enums.SeminarStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    folderId: string | null
    studentNIM: string | null
    time: Date | null
    room: string | null
  }

  export type SeminarCountAggregateOutputType = {
    id: number
    type: number
    title: number
    status: number
    createdAt: number
    updatedAt: number
    folderId: number
    studentNIM: number
    time: number
    room: number
    _all: number
  }


  export type SeminarAvgAggregateInputType = {
    id?: true
  }

  export type SeminarSumAggregateInputType = {
    id?: true
  }

  export type SeminarMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    folderId?: true
    studentNIM?: true
    time?: true
    room?: true
  }

  export type SeminarMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    folderId?: true
    studentNIM?: true
    time?: true
    room?: true
  }

  export type SeminarCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    folderId?: true
    studentNIM?: true
    time?: true
    room?: true
    _all?: true
  }

  export type SeminarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seminar to aggregate.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seminars
    **/
    _count?: true | SeminarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeminarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeminarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeminarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeminarMaxAggregateInputType
  }

  export type GetSeminarAggregateType<T extends SeminarAggregateArgs> = {
        [P in keyof T & keyof AggregateSeminar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeminar[P]>
      : GetScalarType<T[P], AggregateSeminar[P]>
  }




  export type SeminarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarWhereInput
    orderBy?: SeminarOrderByWithAggregationInput | SeminarOrderByWithAggregationInput[]
    by: SeminarScalarFieldEnum[] | SeminarScalarFieldEnum
    having?: SeminarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeminarCountAggregateInputType | true
    _avg?: SeminarAvgAggregateInputType
    _sum?: SeminarSumAggregateInputType
    _min?: SeminarMinAggregateInputType
    _max?: SeminarMaxAggregateInputType
  }

  export type SeminarGroupByOutputType = {
    id: number
    type: $Enums.SeminarType
    title: string
    status: $Enums.SeminarStatus
    createdAt: Date
    updatedAt: Date
    folderId: string | null
    studentNIM: string
    time: Date | null
    room: string | null
    _count: SeminarCountAggregateOutputType | null
    _avg: SeminarAvgAggregateOutputType | null
    _sum: SeminarSumAggregateOutputType | null
    _min: SeminarMinAggregateOutputType | null
    _max: SeminarMaxAggregateOutputType | null
  }

  type GetSeminarGroupByPayload<T extends SeminarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeminarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeminarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeminarGroupByOutputType[P]>
            : GetScalarType<T[P], SeminarGroupByOutputType[P]>
        }
      >
    >


  export type SeminarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
    studentNIM?: boolean
    time?: boolean
    room?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    advisors?: boolean | Seminar$advisorsArgs<ExtArgs>
    assessors?: boolean | Seminar$assessorsArgs<ExtArgs>
    documents?: boolean | Seminar$documentsArgs<ExtArgs>
    assessments?: boolean | Seminar$assessmentsArgs<ExtArgs>
    _count?: boolean | SeminarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminar"]>

  export type SeminarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
    studentNIM?: boolean
    time?: boolean
    room?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminar"]>

  export type SeminarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
    studentNIM?: boolean
    time?: boolean
    room?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminar"]>

  export type SeminarSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
    studentNIM?: boolean
    time?: boolean
    room?: boolean
  }

  export type SeminarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "status" | "createdAt" | "updatedAt" | "folderId" | "studentNIM" | "time" | "room", ExtArgs["result"]["seminar"]>
  export type SeminarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    advisors?: boolean | Seminar$advisorsArgs<ExtArgs>
    assessors?: boolean | Seminar$assessorsArgs<ExtArgs>
    documents?: boolean | Seminar$documentsArgs<ExtArgs>
    assessments?: boolean | Seminar$assessmentsArgs<ExtArgs>
    _count?: boolean | SeminarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeminarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type SeminarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SeminarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seminar"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      advisors: Prisma.$SeminarAdvisorPayload<ExtArgs>[]
      assessors: Prisma.$SeminarAssessorPayload<ExtArgs>[]
      documents: Prisma.$SeminarDocumentPayload<ExtArgs>[]
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.SeminarType
      title: string
      status: $Enums.SeminarStatus
      createdAt: Date
      updatedAt: Date
      folderId: string | null
      studentNIM: string
      time: Date | null
      room: string | null
    }, ExtArgs["result"]["seminar"]>
    composites: {}
  }

  type SeminarGetPayload<S extends boolean | null | undefined | SeminarDefaultArgs> = $Result.GetResult<Prisma.$SeminarPayload, S>

  type SeminarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeminarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeminarCountAggregateInputType | true
    }

  export interface SeminarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seminar'], meta: { name: 'Seminar' } }
    /**
     * Find zero or one Seminar that matches the filter.
     * @param {SeminarFindUniqueArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeminarFindUniqueArgs>(args: SelectSubset<T, SeminarFindUniqueArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seminar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeminarFindUniqueOrThrowArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeminarFindUniqueOrThrowArgs>(args: SelectSubset<T, SeminarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seminar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarFindFirstArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeminarFindFirstArgs>(args?: SelectSubset<T, SeminarFindFirstArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seminar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarFindFirstOrThrowArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeminarFindFirstOrThrowArgs>(args?: SelectSubset<T, SeminarFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seminars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seminars
     * const seminars = await prisma.seminar.findMany()
     * 
     * // Get first 10 Seminars
     * const seminars = await prisma.seminar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seminarWithIdOnly = await prisma.seminar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeminarFindManyArgs>(args?: SelectSubset<T, SeminarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seminar.
     * @param {SeminarCreateArgs} args - Arguments to create a Seminar.
     * @example
     * // Create one Seminar
     * const Seminar = await prisma.seminar.create({
     *   data: {
     *     // ... data to create a Seminar
     *   }
     * })
     * 
     */
    create<T extends SeminarCreateArgs>(args: SelectSubset<T, SeminarCreateArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seminars.
     * @param {SeminarCreateManyArgs} args - Arguments to create many Seminars.
     * @example
     * // Create many Seminars
     * const seminar = await prisma.seminar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeminarCreateManyArgs>(args?: SelectSubset<T, SeminarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seminars and returns the data saved in the database.
     * @param {SeminarCreateManyAndReturnArgs} args - Arguments to create many Seminars.
     * @example
     * // Create many Seminars
     * const seminar = await prisma.seminar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seminars and only return the `id`
     * const seminarWithIdOnly = await prisma.seminar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeminarCreateManyAndReturnArgs>(args?: SelectSubset<T, SeminarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seminar.
     * @param {SeminarDeleteArgs} args - Arguments to delete one Seminar.
     * @example
     * // Delete one Seminar
     * const Seminar = await prisma.seminar.delete({
     *   where: {
     *     // ... filter to delete one Seminar
     *   }
     * })
     * 
     */
    delete<T extends SeminarDeleteArgs>(args: SelectSubset<T, SeminarDeleteArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seminar.
     * @param {SeminarUpdateArgs} args - Arguments to update one Seminar.
     * @example
     * // Update one Seminar
     * const seminar = await prisma.seminar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeminarUpdateArgs>(args: SelectSubset<T, SeminarUpdateArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seminars.
     * @param {SeminarDeleteManyArgs} args - Arguments to filter Seminars to delete.
     * @example
     * // Delete a few Seminars
     * const { count } = await prisma.seminar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeminarDeleteManyArgs>(args?: SelectSubset<T, SeminarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seminars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seminars
     * const seminar = await prisma.seminar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeminarUpdateManyArgs>(args: SelectSubset<T, SeminarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seminars and returns the data updated in the database.
     * @param {SeminarUpdateManyAndReturnArgs} args - Arguments to update many Seminars.
     * @example
     * // Update many Seminars
     * const seminar = await prisma.seminar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seminars and only return the `id`
     * const seminarWithIdOnly = await prisma.seminar.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeminarUpdateManyAndReturnArgs>(args: SelectSubset<T, SeminarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seminar.
     * @param {SeminarUpsertArgs} args - Arguments to update or create a Seminar.
     * @example
     * // Update or create a Seminar
     * const seminar = await prisma.seminar.upsert({
     *   create: {
     *     // ... data to create a Seminar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seminar we want to update
     *   }
     * })
     */
    upsert<T extends SeminarUpsertArgs>(args: SelectSubset<T, SeminarUpsertArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seminars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarCountArgs} args - Arguments to filter Seminars to count.
     * @example
     * // Count the number of Seminars
     * const count = await prisma.seminar.count({
     *   where: {
     *     // ... the filter for the Seminars we want to count
     *   }
     * })
    **/
    count<T extends SeminarCountArgs>(
      args?: Subset<T, SeminarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeminarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seminar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeminarAggregateArgs>(args: Subset<T, SeminarAggregateArgs>): Prisma.PrismaPromise<GetSeminarAggregateType<T>>

    /**
     * Group by Seminar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarGroupByArgs} args - Group by arguments.
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
      T extends SeminarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeminarGroupByArgs['orderBy'] }
        : { orderBy?: SeminarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeminarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeminarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seminar model
   */
  readonly fields: SeminarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seminar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeminarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    advisors<T extends Seminar$advisorsArgs<ExtArgs> = {}>(args?: Subset<T, Seminar$advisorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessors<T extends Seminar$assessorsArgs<ExtArgs> = {}>(args?: Subset<T, Seminar$assessorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Seminar$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Seminar$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessments<T extends Seminar$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Seminar$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Seminar model
   */
  interface SeminarFieldRefs {
    readonly id: FieldRef<"Seminar", 'Int'>
    readonly type: FieldRef<"Seminar", 'SeminarType'>
    readonly title: FieldRef<"Seminar", 'String'>
    readonly status: FieldRef<"Seminar", 'SeminarStatus'>
    readonly createdAt: FieldRef<"Seminar", 'DateTime'>
    readonly updatedAt: FieldRef<"Seminar", 'DateTime'>
    readonly folderId: FieldRef<"Seminar", 'String'>
    readonly studentNIM: FieldRef<"Seminar", 'String'>
    readonly time: FieldRef<"Seminar", 'DateTime'>
    readonly room: FieldRef<"Seminar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seminar findUnique
   */
  export type SeminarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar findUniqueOrThrow
   */
  export type SeminarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar findFirst
   */
  export type SeminarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seminars.
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seminars.
     */
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Seminar findFirstOrThrow
   */
  export type SeminarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seminars.
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seminars.
     */
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Seminar findMany
   */
  export type SeminarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminars to fetch.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seminars.
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Seminar create
   */
  export type SeminarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * The data needed to create a Seminar.
     */
    data: XOR<SeminarCreateInput, SeminarUncheckedCreateInput>
  }

  /**
   * Seminar createMany
   */
  export type SeminarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seminars.
     */
    data: SeminarCreateManyInput | SeminarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seminar createManyAndReturn
   */
  export type SeminarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * The data used to create many Seminars.
     */
    data: SeminarCreateManyInput | SeminarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seminar update
   */
  export type SeminarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * The data needed to update a Seminar.
     */
    data: XOR<SeminarUpdateInput, SeminarUncheckedUpdateInput>
    /**
     * Choose, which Seminar to update.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar updateMany
   */
  export type SeminarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seminars.
     */
    data: XOR<SeminarUpdateManyMutationInput, SeminarUncheckedUpdateManyInput>
    /**
     * Filter which Seminars to update
     */
    where?: SeminarWhereInput
    /**
     * Limit how many Seminars to update.
     */
    limit?: number
  }

  /**
   * Seminar updateManyAndReturn
   */
  export type SeminarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * The data used to update Seminars.
     */
    data: XOR<SeminarUpdateManyMutationInput, SeminarUncheckedUpdateManyInput>
    /**
     * Filter which Seminars to update
     */
    where?: SeminarWhereInput
    /**
     * Limit how many Seminars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seminar upsert
   */
  export type SeminarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * The filter to search for the Seminar to update in case it exists.
     */
    where: SeminarWhereUniqueInput
    /**
     * In case the Seminar found by the `where` argument doesn't exist, create a new Seminar with this data.
     */
    create: XOR<SeminarCreateInput, SeminarUncheckedCreateInput>
    /**
     * In case the Seminar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeminarUpdateInput, SeminarUncheckedUpdateInput>
  }

  /**
   * Seminar delete
   */
  export type SeminarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter which Seminar to delete.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar deleteMany
   */
  export type SeminarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seminars to delete
     */
    where?: SeminarWhereInput
    /**
     * Limit how many Seminars to delete.
     */
    limit?: number
  }

  /**
   * Seminar.advisors
   */
  export type Seminar$advisorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    where?: SeminarAdvisorWhereInput
    orderBy?: SeminarAdvisorOrderByWithRelationInput | SeminarAdvisorOrderByWithRelationInput[]
    cursor?: SeminarAdvisorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarAdvisorScalarFieldEnum | SeminarAdvisorScalarFieldEnum[]
  }

  /**
   * Seminar.assessors
   */
  export type Seminar$assessorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    where?: SeminarAssessorWhereInput
    orderBy?: SeminarAssessorOrderByWithRelationInput | SeminarAssessorOrderByWithRelationInput[]
    cursor?: SeminarAssessorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarAssessorScalarFieldEnum | SeminarAssessorScalarFieldEnum[]
  }

  /**
   * Seminar.documents
   */
  export type Seminar$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    where?: SeminarDocumentWhereInput
    orderBy?: SeminarDocumentOrderByWithRelationInput | SeminarDocumentOrderByWithRelationInput[]
    cursor?: SeminarDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarDocumentScalarFieldEnum | SeminarDocumentScalarFieldEnum[]
  }

  /**
   * Seminar.assessments
   */
  export type Seminar$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Seminar without action
   */
  export type SeminarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
  }


  /**
   * Model SeminarAdvisor
   */

  export type AggregateSeminarAdvisor = {
    _count: SeminarAdvisorCountAggregateOutputType | null
    _avg: SeminarAdvisorAvgAggregateOutputType | null
    _sum: SeminarAdvisorSumAggregateOutputType | null
    _min: SeminarAdvisorMinAggregateOutputType | null
    _max: SeminarAdvisorMaxAggregateOutputType | null
  }

  export type SeminarAdvisorAvgAggregateOutputType = {
    id: number | null
    seminarID: number | null
  }

  export type SeminarAdvisorSumAggregateOutputType = {
    id: number | null
    seminarID: number | null
  }

  export type SeminarAdvisorMinAggregateOutputType = {
    id: number | null
    seminarID: number | null
    lecturerNIP: string | null
  }

  export type SeminarAdvisorMaxAggregateOutputType = {
    id: number | null
    seminarID: number | null
    lecturerNIP: string | null
  }

  export type SeminarAdvisorCountAggregateOutputType = {
    id: number
    seminarID: number
    lecturerNIP: number
    _all: number
  }


  export type SeminarAdvisorAvgAggregateInputType = {
    id?: true
    seminarID?: true
  }

  export type SeminarAdvisorSumAggregateInputType = {
    id?: true
    seminarID?: true
  }

  export type SeminarAdvisorMinAggregateInputType = {
    id?: true
    seminarID?: true
    lecturerNIP?: true
  }

  export type SeminarAdvisorMaxAggregateInputType = {
    id?: true
    seminarID?: true
    lecturerNIP?: true
  }

  export type SeminarAdvisorCountAggregateInputType = {
    id?: true
    seminarID?: true
    lecturerNIP?: true
    _all?: true
  }

  export type SeminarAdvisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarAdvisor to aggregate.
     */
    where?: SeminarAdvisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAdvisors to fetch.
     */
    orderBy?: SeminarAdvisorOrderByWithRelationInput | SeminarAdvisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeminarAdvisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAdvisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAdvisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeminarAdvisors
    **/
    _count?: true | SeminarAdvisorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeminarAdvisorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeminarAdvisorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeminarAdvisorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeminarAdvisorMaxAggregateInputType
  }

  export type GetSeminarAdvisorAggregateType<T extends SeminarAdvisorAggregateArgs> = {
        [P in keyof T & keyof AggregateSeminarAdvisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeminarAdvisor[P]>
      : GetScalarType<T[P], AggregateSeminarAdvisor[P]>
  }




  export type SeminarAdvisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarAdvisorWhereInput
    orderBy?: SeminarAdvisorOrderByWithAggregationInput | SeminarAdvisorOrderByWithAggregationInput[]
    by: SeminarAdvisorScalarFieldEnum[] | SeminarAdvisorScalarFieldEnum
    having?: SeminarAdvisorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeminarAdvisorCountAggregateInputType | true
    _avg?: SeminarAdvisorAvgAggregateInputType
    _sum?: SeminarAdvisorSumAggregateInputType
    _min?: SeminarAdvisorMinAggregateInputType
    _max?: SeminarAdvisorMaxAggregateInputType
  }

  export type SeminarAdvisorGroupByOutputType = {
    id: number
    seminarID: number
    lecturerNIP: string
    _count: SeminarAdvisorCountAggregateOutputType | null
    _avg: SeminarAdvisorAvgAggregateOutputType | null
    _sum: SeminarAdvisorSumAggregateOutputType | null
    _min: SeminarAdvisorMinAggregateOutputType | null
    _max: SeminarAdvisorMaxAggregateOutputType | null
  }

  type GetSeminarAdvisorGroupByPayload<T extends SeminarAdvisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeminarAdvisorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeminarAdvisorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeminarAdvisorGroupByOutputType[P]>
            : GetScalarType<T[P], SeminarAdvisorGroupByOutputType[P]>
        }
      >
    >


  export type SeminarAdvisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarAdvisor"]>

  export type SeminarAdvisorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarAdvisor"]>

  export type SeminarAdvisorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarAdvisor"]>

  export type SeminarAdvisorSelectScalar = {
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
  }

  export type SeminarAdvisorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seminarID" | "lecturerNIP", ExtArgs["result"]["seminarAdvisor"]>
  export type SeminarAdvisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }
  export type SeminarAdvisorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }
  export type SeminarAdvisorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }

  export type $SeminarAdvisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeminarAdvisor"
    objects: {
      seminar: Prisma.$SeminarPayload<ExtArgs>
      lecturer: Prisma.$LecturerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seminarID: number
      lecturerNIP: string
    }, ExtArgs["result"]["seminarAdvisor"]>
    composites: {}
  }

  type SeminarAdvisorGetPayload<S extends boolean | null | undefined | SeminarAdvisorDefaultArgs> = $Result.GetResult<Prisma.$SeminarAdvisorPayload, S>

  type SeminarAdvisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeminarAdvisorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeminarAdvisorCountAggregateInputType | true
    }

  export interface SeminarAdvisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeminarAdvisor'], meta: { name: 'SeminarAdvisor' } }
    /**
     * Find zero or one SeminarAdvisor that matches the filter.
     * @param {SeminarAdvisorFindUniqueArgs} args - Arguments to find a SeminarAdvisor
     * @example
     * // Get one SeminarAdvisor
     * const seminarAdvisor = await prisma.seminarAdvisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeminarAdvisorFindUniqueArgs>(args: SelectSubset<T, SeminarAdvisorFindUniqueArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeminarAdvisor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeminarAdvisorFindUniqueOrThrowArgs} args - Arguments to find a SeminarAdvisor
     * @example
     * // Get one SeminarAdvisor
     * const seminarAdvisor = await prisma.seminarAdvisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeminarAdvisorFindUniqueOrThrowArgs>(args: SelectSubset<T, SeminarAdvisorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarAdvisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAdvisorFindFirstArgs} args - Arguments to find a SeminarAdvisor
     * @example
     * // Get one SeminarAdvisor
     * const seminarAdvisor = await prisma.seminarAdvisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeminarAdvisorFindFirstArgs>(args?: SelectSubset<T, SeminarAdvisorFindFirstArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarAdvisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAdvisorFindFirstOrThrowArgs} args - Arguments to find a SeminarAdvisor
     * @example
     * // Get one SeminarAdvisor
     * const seminarAdvisor = await prisma.seminarAdvisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeminarAdvisorFindFirstOrThrowArgs>(args?: SelectSubset<T, SeminarAdvisorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeminarAdvisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAdvisorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeminarAdvisors
     * const seminarAdvisors = await prisma.seminarAdvisor.findMany()
     * 
     * // Get first 10 SeminarAdvisors
     * const seminarAdvisors = await prisma.seminarAdvisor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seminarAdvisorWithIdOnly = await prisma.seminarAdvisor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeminarAdvisorFindManyArgs>(args?: SelectSubset<T, SeminarAdvisorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeminarAdvisor.
     * @param {SeminarAdvisorCreateArgs} args - Arguments to create a SeminarAdvisor.
     * @example
     * // Create one SeminarAdvisor
     * const SeminarAdvisor = await prisma.seminarAdvisor.create({
     *   data: {
     *     // ... data to create a SeminarAdvisor
     *   }
     * })
     * 
     */
    create<T extends SeminarAdvisorCreateArgs>(args: SelectSubset<T, SeminarAdvisorCreateArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeminarAdvisors.
     * @param {SeminarAdvisorCreateManyArgs} args - Arguments to create many SeminarAdvisors.
     * @example
     * // Create many SeminarAdvisors
     * const seminarAdvisor = await prisma.seminarAdvisor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeminarAdvisorCreateManyArgs>(args?: SelectSubset<T, SeminarAdvisorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeminarAdvisors and returns the data saved in the database.
     * @param {SeminarAdvisorCreateManyAndReturnArgs} args - Arguments to create many SeminarAdvisors.
     * @example
     * // Create many SeminarAdvisors
     * const seminarAdvisor = await prisma.seminarAdvisor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeminarAdvisors and only return the `id`
     * const seminarAdvisorWithIdOnly = await prisma.seminarAdvisor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeminarAdvisorCreateManyAndReturnArgs>(args?: SelectSubset<T, SeminarAdvisorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeminarAdvisor.
     * @param {SeminarAdvisorDeleteArgs} args - Arguments to delete one SeminarAdvisor.
     * @example
     * // Delete one SeminarAdvisor
     * const SeminarAdvisor = await prisma.seminarAdvisor.delete({
     *   where: {
     *     // ... filter to delete one SeminarAdvisor
     *   }
     * })
     * 
     */
    delete<T extends SeminarAdvisorDeleteArgs>(args: SelectSubset<T, SeminarAdvisorDeleteArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeminarAdvisor.
     * @param {SeminarAdvisorUpdateArgs} args - Arguments to update one SeminarAdvisor.
     * @example
     * // Update one SeminarAdvisor
     * const seminarAdvisor = await prisma.seminarAdvisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeminarAdvisorUpdateArgs>(args: SelectSubset<T, SeminarAdvisorUpdateArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeminarAdvisors.
     * @param {SeminarAdvisorDeleteManyArgs} args - Arguments to filter SeminarAdvisors to delete.
     * @example
     * // Delete a few SeminarAdvisors
     * const { count } = await prisma.seminarAdvisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeminarAdvisorDeleteManyArgs>(args?: SelectSubset<T, SeminarAdvisorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarAdvisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAdvisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeminarAdvisors
     * const seminarAdvisor = await prisma.seminarAdvisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeminarAdvisorUpdateManyArgs>(args: SelectSubset<T, SeminarAdvisorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarAdvisors and returns the data updated in the database.
     * @param {SeminarAdvisorUpdateManyAndReturnArgs} args - Arguments to update many SeminarAdvisors.
     * @example
     * // Update many SeminarAdvisors
     * const seminarAdvisor = await prisma.seminarAdvisor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeminarAdvisors and only return the `id`
     * const seminarAdvisorWithIdOnly = await prisma.seminarAdvisor.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeminarAdvisorUpdateManyAndReturnArgs>(args: SelectSubset<T, SeminarAdvisorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeminarAdvisor.
     * @param {SeminarAdvisorUpsertArgs} args - Arguments to update or create a SeminarAdvisor.
     * @example
     * // Update or create a SeminarAdvisor
     * const seminarAdvisor = await prisma.seminarAdvisor.upsert({
     *   create: {
     *     // ... data to create a SeminarAdvisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeminarAdvisor we want to update
     *   }
     * })
     */
    upsert<T extends SeminarAdvisorUpsertArgs>(args: SelectSubset<T, SeminarAdvisorUpsertArgs<ExtArgs>>): Prisma__SeminarAdvisorClient<$Result.GetResult<Prisma.$SeminarAdvisorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeminarAdvisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAdvisorCountArgs} args - Arguments to filter SeminarAdvisors to count.
     * @example
     * // Count the number of SeminarAdvisors
     * const count = await prisma.seminarAdvisor.count({
     *   where: {
     *     // ... the filter for the SeminarAdvisors we want to count
     *   }
     * })
    **/
    count<T extends SeminarAdvisorCountArgs>(
      args?: Subset<T, SeminarAdvisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeminarAdvisorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeminarAdvisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAdvisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeminarAdvisorAggregateArgs>(args: Subset<T, SeminarAdvisorAggregateArgs>): Prisma.PrismaPromise<GetSeminarAdvisorAggregateType<T>>

    /**
     * Group by SeminarAdvisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAdvisorGroupByArgs} args - Group by arguments.
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
      T extends SeminarAdvisorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeminarAdvisorGroupByArgs['orderBy'] }
        : { orderBy?: SeminarAdvisorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeminarAdvisorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeminarAdvisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeminarAdvisor model
   */
  readonly fields: SeminarAdvisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeminarAdvisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeminarAdvisorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seminar<T extends SeminarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeminarDefaultArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeminarAdvisor model
   */
  interface SeminarAdvisorFieldRefs {
    readonly id: FieldRef<"SeminarAdvisor", 'Int'>
    readonly seminarID: FieldRef<"SeminarAdvisor", 'Int'>
    readonly lecturerNIP: FieldRef<"SeminarAdvisor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SeminarAdvisor findUnique
   */
  export type SeminarAdvisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAdvisor to fetch.
     */
    where: SeminarAdvisorWhereUniqueInput
  }

  /**
   * SeminarAdvisor findUniqueOrThrow
   */
  export type SeminarAdvisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAdvisor to fetch.
     */
    where: SeminarAdvisorWhereUniqueInput
  }

  /**
   * SeminarAdvisor findFirst
   */
  export type SeminarAdvisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAdvisor to fetch.
     */
    where?: SeminarAdvisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAdvisors to fetch.
     */
    orderBy?: SeminarAdvisorOrderByWithRelationInput | SeminarAdvisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarAdvisors.
     */
    cursor?: SeminarAdvisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAdvisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAdvisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarAdvisors.
     */
    distinct?: SeminarAdvisorScalarFieldEnum | SeminarAdvisorScalarFieldEnum[]
  }

  /**
   * SeminarAdvisor findFirstOrThrow
   */
  export type SeminarAdvisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAdvisor to fetch.
     */
    where?: SeminarAdvisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAdvisors to fetch.
     */
    orderBy?: SeminarAdvisorOrderByWithRelationInput | SeminarAdvisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarAdvisors.
     */
    cursor?: SeminarAdvisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAdvisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAdvisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarAdvisors.
     */
    distinct?: SeminarAdvisorScalarFieldEnum | SeminarAdvisorScalarFieldEnum[]
  }

  /**
   * SeminarAdvisor findMany
   */
  export type SeminarAdvisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAdvisors to fetch.
     */
    where?: SeminarAdvisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAdvisors to fetch.
     */
    orderBy?: SeminarAdvisorOrderByWithRelationInput | SeminarAdvisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeminarAdvisors.
     */
    cursor?: SeminarAdvisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAdvisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAdvisors.
     */
    skip?: number
    distinct?: SeminarAdvisorScalarFieldEnum | SeminarAdvisorScalarFieldEnum[]
  }

  /**
   * SeminarAdvisor create
   */
  export type SeminarAdvisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * The data needed to create a SeminarAdvisor.
     */
    data: XOR<SeminarAdvisorCreateInput, SeminarAdvisorUncheckedCreateInput>
  }

  /**
   * SeminarAdvisor createMany
   */
  export type SeminarAdvisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeminarAdvisors.
     */
    data: SeminarAdvisorCreateManyInput | SeminarAdvisorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeminarAdvisor createManyAndReturn
   */
  export type SeminarAdvisorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * The data used to create many SeminarAdvisors.
     */
    data: SeminarAdvisorCreateManyInput | SeminarAdvisorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarAdvisor update
   */
  export type SeminarAdvisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * The data needed to update a SeminarAdvisor.
     */
    data: XOR<SeminarAdvisorUpdateInput, SeminarAdvisorUncheckedUpdateInput>
    /**
     * Choose, which SeminarAdvisor to update.
     */
    where: SeminarAdvisorWhereUniqueInput
  }

  /**
   * SeminarAdvisor updateMany
   */
  export type SeminarAdvisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeminarAdvisors.
     */
    data: XOR<SeminarAdvisorUpdateManyMutationInput, SeminarAdvisorUncheckedUpdateManyInput>
    /**
     * Filter which SeminarAdvisors to update
     */
    where?: SeminarAdvisorWhereInput
    /**
     * Limit how many SeminarAdvisors to update.
     */
    limit?: number
  }

  /**
   * SeminarAdvisor updateManyAndReturn
   */
  export type SeminarAdvisorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * The data used to update SeminarAdvisors.
     */
    data: XOR<SeminarAdvisorUpdateManyMutationInput, SeminarAdvisorUncheckedUpdateManyInput>
    /**
     * Filter which SeminarAdvisors to update
     */
    where?: SeminarAdvisorWhereInput
    /**
     * Limit how many SeminarAdvisors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarAdvisor upsert
   */
  export type SeminarAdvisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * The filter to search for the SeminarAdvisor to update in case it exists.
     */
    where: SeminarAdvisorWhereUniqueInput
    /**
     * In case the SeminarAdvisor found by the `where` argument doesn't exist, create a new SeminarAdvisor with this data.
     */
    create: XOR<SeminarAdvisorCreateInput, SeminarAdvisorUncheckedCreateInput>
    /**
     * In case the SeminarAdvisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeminarAdvisorUpdateInput, SeminarAdvisorUncheckedUpdateInput>
  }

  /**
   * SeminarAdvisor delete
   */
  export type SeminarAdvisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
    /**
     * Filter which SeminarAdvisor to delete.
     */
    where: SeminarAdvisorWhereUniqueInput
  }

  /**
   * SeminarAdvisor deleteMany
   */
  export type SeminarAdvisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarAdvisors to delete
     */
    where?: SeminarAdvisorWhereInput
    /**
     * Limit how many SeminarAdvisors to delete.
     */
    limit?: number
  }

  /**
   * SeminarAdvisor without action
   */
  export type SeminarAdvisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAdvisor
     */
    select?: SeminarAdvisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAdvisor
     */
    omit?: SeminarAdvisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAdvisorInclude<ExtArgs> | null
  }


  /**
   * Model SeminarAssessor
   */

  export type AggregateSeminarAssessor = {
    _count: SeminarAssessorCountAggregateOutputType | null
    _avg: SeminarAssessorAvgAggregateOutputType | null
    _sum: SeminarAssessorSumAggregateOutputType | null
    _min: SeminarAssessorMinAggregateOutputType | null
    _max: SeminarAssessorMaxAggregateOutputType | null
  }

  export type SeminarAssessorAvgAggregateOutputType = {
    id: number | null
    seminarID: number | null
  }

  export type SeminarAssessorSumAggregateOutputType = {
    id: number | null
    seminarID: number | null
  }

  export type SeminarAssessorMinAggregateOutputType = {
    id: number | null
    seminarID: number | null
    lecturerNIP: string | null
  }

  export type SeminarAssessorMaxAggregateOutputType = {
    id: number | null
    seminarID: number | null
    lecturerNIP: string | null
  }

  export type SeminarAssessorCountAggregateOutputType = {
    id: number
    seminarID: number
    lecturerNIP: number
    _all: number
  }


  export type SeminarAssessorAvgAggregateInputType = {
    id?: true
    seminarID?: true
  }

  export type SeminarAssessorSumAggregateInputType = {
    id?: true
    seminarID?: true
  }

  export type SeminarAssessorMinAggregateInputType = {
    id?: true
    seminarID?: true
    lecturerNIP?: true
  }

  export type SeminarAssessorMaxAggregateInputType = {
    id?: true
    seminarID?: true
    lecturerNIP?: true
  }

  export type SeminarAssessorCountAggregateInputType = {
    id?: true
    seminarID?: true
    lecturerNIP?: true
    _all?: true
  }

  export type SeminarAssessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarAssessor to aggregate.
     */
    where?: SeminarAssessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAssessors to fetch.
     */
    orderBy?: SeminarAssessorOrderByWithRelationInput | SeminarAssessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeminarAssessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAssessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAssessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeminarAssessors
    **/
    _count?: true | SeminarAssessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeminarAssessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeminarAssessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeminarAssessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeminarAssessorMaxAggregateInputType
  }

  export type GetSeminarAssessorAggregateType<T extends SeminarAssessorAggregateArgs> = {
        [P in keyof T & keyof AggregateSeminarAssessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeminarAssessor[P]>
      : GetScalarType<T[P], AggregateSeminarAssessor[P]>
  }




  export type SeminarAssessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarAssessorWhereInput
    orderBy?: SeminarAssessorOrderByWithAggregationInput | SeminarAssessorOrderByWithAggregationInput[]
    by: SeminarAssessorScalarFieldEnum[] | SeminarAssessorScalarFieldEnum
    having?: SeminarAssessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeminarAssessorCountAggregateInputType | true
    _avg?: SeminarAssessorAvgAggregateInputType
    _sum?: SeminarAssessorSumAggregateInputType
    _min?: SeminarAssessorMinAggregateInputType
    _max?: SeminarAssessorMaxAggregateInputType
  }

  export type SeminarAssessorGroupByOutputType = {
    id: number
    seminarID: number
    lecturerNIP: string
    _count: SeminarAssessorCountAggregateOutputType | null
    _avg: SeminarAssessorAvgAggregateOutputType | null
    _sum: SeminarAssessorSumAggregateOutputType | null
    _min: SeminarAssessorMinAggregateOutputType | null
    _max: SeminarAssessorMaxAggregateOutputType | null
  }

  type GetSeminarAssessorGroupByPayload<T extends SeminarAssessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeminarAssessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeminarAssessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeminarAssessorGroupByOutputType[P]>
            : GetScalarType<T[P], SeminarAssessorGroupByOutputType[P]>
        }
      >
    >


  export type SeminarAssessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarAssessor"]>

  export type SeminarAssessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarAssessor"]>

  export type SeminarAssessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarAssessor"]>

  export type SeminarAssessorSelectScalar = {
    id?: boolean
    seminarID?: boolean
    lecturerNIP?: boolean
  }

  export type SeminarAssessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seminarID" | "lecturerNIP", ExtArgs["result"]["seminarAssessor"]>
  export type SeminarAssessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }
  export type SeminarAssessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }
  export type SeminarAssessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }

  export type $SeminarAssessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeminarAssessor"
    objects: {
      seminar: Prisma.$SeminarPayload<ExtArgs>
      lecturer: Prisma.$LecturerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seminarID: number
      lecturerNIP: string
    }, ExtArgs["result"]["seminarAssessor"]>
    composites: {}
  }

  type SeminarAssessorGetPayload<S extends boolean | null | undefined | SeminarAssessorDefaultArgs> = $Result.GetResult<Prisma.$SeminarAssessorPayload, S>

  type SeminarAssessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeminarAssessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeminarAssessorCountAggregateInputType | true
    }

  export interface SeminarAssessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeminarAssessor'], meta: { name: 'SeminarAssessor' } }
    /**
     * Find zero or one SeminarAssessor that matches the filter.
     * @param {SeminarAssessorFindUniqueArgs} args - Arguments to find a SeminarAssessor
     * @example
     * // Get one SeminarAssessor
     * const seminarAssessor = await prisma.seminarAssessor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeminarAssessorFindUniqueArgs>(args: SelectSubset<T, SeminarAssessorFindUniqueArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeminarAssessor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeminarAssessorFindUniqueOrThrowArgs} args - Arguments to find a SeminarAssessor
     * @example
     * // Get one SeminarAssessor
     * const seminarAssessor = await prisma.seminarAssessor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeminarAssessorFindUniqueOrThrowArgs>(args: SelectSubset<T, SeminarAssessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarAssessor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAssessorFindFirstArgs} args - Arguments to find a SeminarAssessor
     * @example
     * // Get one SeminarAssessor
     * const seminarAssessor = await prisma.seminarAssessor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeminarAssessorFindFirstArgs>(args?: SelectSubset<T, SeminarAssessorFindFirstArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarAssessor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAssessorFindFirstOrThrowArgs} args - Arguments to find a SeminarAssessor
     * @example
     * // Get one SeminarAssessor
     * const seminarAssessor = await prisma.seminarAssessor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeminarAssessorFindFirstOrThrowArgs>(args?: SelectSubset<T, SeminarAssessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeminarAssessors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAssessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeminarAssessors
     * const seminarAssessors = await prisma.seminarAssessor.findMany()
     * 
     * // Get first 10 SeminarAssessors
     * const seminarAssessors = await prisma.seminarAssessor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seminarAssessorWithIdOnly = await prisma.seminarAssessor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeminarAssessorFindManyArgs>(args?: SelectSubset<T, SeminarAssessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeminarAssessor.
     * @param {SeminarAssessorCreateArgs} args - Arguments to create a SeminarAssessor.
     * @example
     * // Create one SeminarAssessor
     * const SeminarAssessor = await prisma.seminarAssessor.create({
     *   data: {
     *     // ... data to create a SeminarAssessor
     *   }
     * })
     * 
     */
    create<T extends SeminarAssessorCreateArgs>(args: SelectSubset<T, SeminarAssessorCreateArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeminarAssessors.
     * @param {SeminarAssessorCreateManyArgs} args - Arguments to create many SeminarAssessors.
     * @example
     * // Create many SeminarAssessors
     * const seminarAssessor = await prisma.seminarAssessor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeminarAssessorCreateManyArgs>(args?: SelectSubset<T, SeminarAssessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeminarAssessors and returns the data saved in the database.
     * @param {SeminarAssessorCreateManyAndReturnArgs} args - Arguments to create many SeminarAssessors.
     * @example
     * // Create many SeminarAssessors
     * const seminarAssessor = await prisma.seminarAssessor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeminarAssessors and only return the `id`
     * const seminarAssessorWithIdOnly = await prisma.seminarAssessor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeminarAssessorCreateManyAndReturnArgs>(args?: SelectSubset<T, SeminarAssessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeminarAssessor.
     * @param {SeminarAssessorDeleteArgs} args - Arguments to delete one SeminarAssessor.
     * @example
     * // Delete one SeminarAssessor
     * const SeminarAssessor = await prisma.seminarAssessor.delete({
     *   where: {
     *     // ... filter to delete one SeminarAssessor
     *   }
     * })
     * 
     */
    delete<T extends SeminarAssessorDeleteArgs>(args: SelectSubset<T, SeminarAssessorDeleteArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeminarAssessor.
     * @param {SeminarAssessorUpdateArgs} args - Arguments to update one SeminarAssessor.
     * @example
     * // Update one SeminarAssessor
     * const seminarAssessor = await prisma.seminarAssessor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeminarAssessorUpdateArgs>(args: SelectSubset<T, SeminarAssessorUpdateArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeminarAssessors.
     * @param {SeminarAssessorDeleteManyArgs} args - Arguments to filter SeminarAssessors to delete.
     * @example
     * // Delete a few SeminarAssessors
     * const { count } = await prisma.seminarAssessor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeminarAssessorDeleteManyArgs>(args?: SelectSubset<T, SeminarAssessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarAssessors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAssessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeminarAssessors
     * const seminarAssessor = await prisma.seminarAssessor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeminarAssessorUpdateManyArgs>(args: SelectSubset<T, SeminarAssessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarAssessors and returns the data updated in the database.
     * @param {SeminarAssessorUpdateManyAndReturnArgs} args - Arguments to update many SeminarAssessors.
     * @example
     * // Update many SeminarAssessors
     * const seminarAssessor = await prisma.seminarAssessor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeminarAssessors and only return the `id`
     * const seminarAssessorWithIdOnly = await prisma.seminarAssessor.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeminarAssessorUpdateManyAndReturnArgs>(args: SelectSubset<T, SeminarAssessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeminarAssessor.
     * @param {SeminarAssessorUpsertArgs} args - Arguments to update or create a SeminarAssessor.
     * @example
     * // Update or create a SeminarAssessor
     * const seminarAssessor = await prisma.seminarAssessor.upsert({
     *   create: {
     *     // ... data to create a SeminarAssessor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeminarAssessor we want to update
     *   }
     * })
     */
    upsert<T extends SeminarAssessorUpsertArgs>(args: SelectSubset<T, SeminarAssessorUpsertArgs<ExtArgs>>): Prisma__SeminarAssessorClient<$Result.GetResult<Prisma.$SeminarAssessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeminarAssessors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAssessorCountArgs} args - Arguments to filter SeminarAssessors to count.
     * @example
     * // Count the number of SeminarAssessors
     * const count = await prisma.seminarAssessor.count({
     *   where: {
     *     // ... the filter for the SeminarAssessors we want to count
     *   }
     * })
    **/
    count<T extends SeminarAssessorCountArgs>(
      args?: Subset<T, SeminarAssessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeminarAssessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeminarAssessor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAssessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeminarAssessorAggregateArgs>(args: Subset<T, SeminarAssessorAggregateArgs>): Prisma.PrismaPromise<GetSeminarAssessorAggregateType<T>>

    /**
     * Group by SeminarAssessor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAssessorGroupByArgs} args - Group by arguments.
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
      T extends SeminarAssessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeminarAssessorGroupByArgs['orderBy'] }
        : { orderBy?: SeminarAssessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeminarAssessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeminarAssessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeminarAssessor model
   */
  readonly fields: SeminarAssessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeminarAssessor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeminarAssessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seminar<T extends SeminarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeminarDefaultArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeminarAssessor model
   */
  interface SeminarAssessorFieldRefs {
    readonly id: FieldRef<"SeminarAssessor", 'Int'>
    readonly seminarID: FieldRef<"SeminarAssessor", 'Int'>
    readonly lecturerNIP: FieldRef<"SeminarAssessor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SeminarAssessor findUnique
   */
  export type SeminarAssessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAssessor to fetch.
     */
    where: SeminarAssessorWhereUniqueInput
  }

  /**
   * SeminarAssessor findUniqueOrThrow
   */
  export type SeminarAssessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAssessor to fetch.
     */
    where: SeminarAssessorWhereUniqueInput
  }

  /**
   * SeminarAssessor findFirst
   */
  export type SeminarAssessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAssessor to fetch.
     */
    where?: SeminarAssessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAssessors to fetch.
     */
    orderBy?: SeminarAssessorOrderByWithRelationInput | SeminarAssessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarAssessors.
     */
    cursor?: SeminarAssessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAssessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAssessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarAssessors.
     */
    distinct?: SeminarAssessorScalarFieldEnum | SeminarAssessorScalarFieldEnum[]
  }

  /**
   * SeminarAssessor findFirstOrThrow
   */
  export type SeminarAssessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAssessor to fetch.
     */
    where?: SeminarAssessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAssessors to fetch.
     */
    orderBy?: SeminarAssessorOrderByWithRelationInput | SeminarAssessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarAssessors.
     */
    cursor?: SeminarAssessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAssessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAssessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarAssessors.
     */
    distinct?: SeminarAssessorScalarFieldEnum | SeminarAssessorScalarFieldEnum[]
  }

  /**
   * SeminarAssessor findMany
   */
  export type SeminarAssessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * Filter, which SeminarAssessors to fetch.
     */
    where?: SeminarAssessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarAssessors to fetch.
     */
    orderBy?: SeminarAssessorOrderByWithRelationInput | SeminarAssessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeminarAssessors.
     */
    cursor?: SeminarAssessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarAssessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarAssessors.
     */
    skip?: number
    distinct?: SeminarAssessorScalarFieldEnum | SeminarAssessorScalarFieldEnum[]
  }

  /**
   * SeminarAssessor create
   */
  export type SeminarAssessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * The data needed to create a SeminarAssessor.
     */
    data: XOR<SeminarAssessorCreateInput, SeminarAssessorUncheckedCreateInput>
  }

  /**
   * SeminarAssessor createMany
   */
  export type SeminarAssessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeminarAssessors.
     */
    data: SeminarAssessorCreateManyInput | SeminarAssessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeminarAssessor createManyAndReturn
   */
  export type SeminarAssessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * The data used to create many SeminarAssessors.
     */
    data: SeminarAssessorCreateManyInput | SeminarAssessorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarAssessor update
   */
  export type SeminarAssessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * The data needed to update a SeminarAssessor.
     */
    data: XOR<SeminarAssessorUpdateInput, SeminarAssessorUncheckedUpdateInput>
    /**
     * Choose, which SeminarAssessor to update.
     */
    where: SeminarAssessorWhereUniqueInput
  }

  /**
   * SeminarAssessor updateMany
   */
  export type SeminarAssessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeminarAssessors.
     */
    data: XOR<SeminarAssessorUpdateManyMutationInput, SeminarAssessorUncheckedUpdateManyInput>
    /**
     * Filter which SeminarAssessors to update
     */
    where?: SeminarAssessorWhereInput
    /**
     * Limit how many SeminarAssessors to update.
     */
    limit?: number
  }

  /**
   * SeminarAssessor updateManyAndReturn
   */
  export type SeminarAssessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * The data used to update SeminarAssessors.
     */
    data: XOR<SeminarAssessorUpdateManyMutationInput, SeminarAssessorUncheckedUpdateManyInput>
    /**
     * Filter which SeminarAssessors to update
     */
    where?: SeminarAssessorWhereInput
    /**
     * Limit how many SeminarAssessors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarAssessor upsert
   */
  export type SeminarAssessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * The filter to search for the SeminarAssessor to update in case it exists.
     */
    where: SeminarAssessorWhereUniqueInput
    /**
     * In case the SeminarAssessor found by the `where` argument doesn't exist, create a new SeminarAssessor with this data.
     */
    create: XOR<SeminarAssessorCreateInput, SeminarAssessorUncheckedCreateInput>
    /**
     * In case the SeminarAssessor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeminarAssessorUpdateInput, SeminarAssessorUncheckedUpdateInput>
  }

  /**
   * SeminarAssessor delete
   */
  export type SeminarAssessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
    /**
     * Filter which SeminarAssessor to delete.
     */
    where: SeminarAssessorWhereUniqueInput
  }

  /**
   * SeminarAssessor deleteMany
   */
  export type SeminarAssessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarAssessors to delete
     */
    where?: SeminarAssessorWhereInput
    /**
     * Limit how many SeminarAssessors to delete.
     */
    limit?: number
  }

  /**
   * SeminarAssessor without action
   */
  export type SeminarAssessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarAssessor
     */
    select?: SeminarAssessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarAssessor
     */
    omit?: SeminarAssessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarAssessorInclude<ExtArgs> | null
  }


  /**
   * Model SeminarDocument
   */

  export type AggregateSeminarDocument = {
    _count: SeminarDocumentCountAggregateOutputType | null
    _avg: SeminarDocumentAvgAggregateOutputType | null
    _sum: SeminarDocumentSumAggregateOutputType | null
    _min: SeminarDocumentMinAggregateOutputType | null
    _max: SeminarDocumentMaxAggregateOutputType | null
  }

  export type SeminarDocumentAvgAggregateOutputType = {
    id: number | null
    seminarID: number | null
  }

  export type SeminarDocumentSumAggregateOutputType = {
    id: number | null
    seminarID: number | null
  }

  export type SeminarDocumentMinAggregateOutputType = {
    id: number | null
    seminarID: number | null
    documentType: $Enums.DocumentType | null
    fileName: string | null
    fileURL: string | null
  }

  export type SeminarDocumentMaxAggregateOutputType = {
    id: number | null
    seminarID: number | null
    documentType: $Enums.DocumentType | null
    fileName: string | null
    fileURL: string | null
  }

  export type SeminarDocumentCountAggregateOutputType = {
    id: number
    seminarID: number
    documentType: number
    fileName: number
    fileURL: number
    _all: number
  }


  export type SeminarDocumentAvgAggregateInputType = {
    id?: true
    seminarID?: true
  }

  export type SeminarDocumentSumAggregateInputType = {
    id?: true
    seminarID?: true
  }

  export type SeminarDocumentMinAggregateInputType = {
    id?: true
    seminarID?: true
    documentType?: true
    fileName?: true
    fileURL?: true
  }

  export type SeminarDocumentMaxAggregateInputType = {
    id?: true
    seminarID?: true
    documentType?: true
    fileName?: true
    fileURL?: true
  }

  export type SeminarDocumentCountAggregateInputType = {
    id?: true
    seminarID?: true
    documentType?: true
    fileName?: true
    fileURL?: true
    _all?: true
  }

  export type SeminarDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarDocument to aggregate.
     */
    where?: SeminarDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarDocuments to fetch.
     */
    orderBy?: SeminarDocumentOrderByWithRelationInput | SeminarDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeminarDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeminarDocuments
    **/
    _count?: true | SeminarDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeminarDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeminarDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeminarDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeminarDocumentMaxAggregateInputType
  }

  export type GetSeminarDocumentAggregateType<T extends SeminarDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateSeminarDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeminarDocument[P]>
      : GetScalarType<T[P], AggregateSeminarDocument[P]>
  }




  export type SeminarDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarDocumentWhereInput
    orderBy?: SeminarDocumentOrderByWithAggregationInput | SeminarDocumentOrderByWithAggregationInput[]
    by: SeminarDocumentScalarFieldEnum[] | SeminarDocumentScalarFieldEnum
    having?: SeminarDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeminarDocumentCountAggregateInputType | true
    _avg?: SeminarDocumentAvgAggregateInputType
    _sum?: SeminarDocumentSumAggregateInputType
    _min?: SeminarDocumentMinAggregateInputType
    _max?: SeminarDocumentMaxAggregateInputType
  }

  export type SeminarDocumentGroupByOutputType = {
    id: number
    seminarID: number
    documentType: $Enums.DocumentType
    fileName: string
    fileURL: string
    _count: SeminarDocumentCountAggregateOutputType | null
    _avg: SeminarDocumentAvgAggregateOutputType | null
    _sum: SeminarDocumentSumAggregateOutputType | null
    _min: SeminarDocumentMinAggregateOutputType | null
    _max: SeminarDocumentMaxAggregateOutputType | null
  }

  type GetSeminarDocumentGroupByPayload<T extends SeminarDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeminarDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeminarDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeminarDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], SeminarDocumentGroupByOutputType[P]>
        }
      >
    >


  export type SeminarDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    documentType?: boolean
    fileName?: boolean
    fileURL?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarDocument"]>

  export type SeminarDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    documentType?: boolean
    fileName?: boolean
    fileURL?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarDocument"]>

  export type SeminarDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarID?: boolean
    documentType?: boolean
    fileName?: boolean
    fileURL?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarDocument"]>

  export type SeminarDocumentSelectScalar = {
    id?: boolean
    seminarID?: boolean
    documentType?: boolean
    fileName?: boolean
    fileURL?: boolean
  }

  export type SeminarDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seminarID" | "documentType" | "fileName" | "fileURL", ExtArgs["result"]["seminarDocument"]>
  export type SeminarDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }
  export type SeminarDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }
  export type SeminarDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }

  export type $SeminarDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeminarDocument"
    objects: {
      seminar: Prisma.$SeminarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seminarID: number
      documentType: $Enums.DocumentType
      fileName: string
      fileURL: string
    }, ExtArgs["result"]["seminarDocument"]>
    composites: {}
  }

  type SeminarDocumentGetPayload<S extends boolean | null | undefined | SeminarDocumentDefaultArgs> = $Result.GetResult<Prisma.$SeminarDocumentPayload, S>

  type SeminarDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeminarDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeminarDocumentCountAggregateInputType | true
    }

  export interface SeminarDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeminarDocument'], meta: { name: 'SeminarDocument' } }
    /**
     * Find zero or one SeminarDocument that matches the filter.
     * @param {SeminarDocumentFindUniqueArgs} args - Arguments to find a SeminarDocument
     * @example
     * // Get one SeminarDocument
     * const seminarDocument = await prisma.seminarDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeminarDocumentFindUniqueArgs>(args: SelectSubset<T, SeminarDocumentFindUniqueArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeminarDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeminarDocumentFindUniqueOrThrowArgs} args - Arguments to find a SeminarDocument
     * @example
     * // Get one SeminarDocument
     * const seminarDocument = await prisma.seminarDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeminarDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, SeminarDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarDocumentFindFirstArgs} args - Arguments to find a SeminarDocument
     * @example
     * // Get one SeminarDocument
     * const seminarDocument = await prisma.seminarDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeminarDocumentFindFirstArgs>(args?: SelectSubset<T, SeminarDocumentFindFirstArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarDocumentFindFirstOrThrowArgs} args - Arguments to find a SeminarDocument
     * @example
     * // Get one SeminarDocument
     * const seminarDocument = await prisma.seminarDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeminarDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, SeminarDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeminarDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeminarDocuments
     * const seminarDocuments = await prisma.seminarDocument.findMany()
     * 
     * // Get first 10 SeminarDocuments
     * const seminarDocuments = await prisma.seminarDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seminarDocumentWithIdOnly = await prisma.seminarDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeminarDocumentFindManyArgs>(args?: SelectSubset<T, SeminarDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeminarDocument.
     * @param {SeminarDocumentCreateArgs} args - Arguments to create a SeminarDocument.
     * @example
     * // Create one SeminarDocument
     * const SeminarDocument = await prisma.seminarDocument.create({
     *   data: {
     *     // ... data to create a SeminarDocument
     *   }
     * })
     * 
     */
    create<T extends SeminarDocumentCreateArgs>(args: SelectSubset<T, SeminarDocumentCreateArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeminarDocuments.
     * @param {SeminarDocumentCreateManyArgs} args - Arguments to create many SeminarDocuments.
     * @example
     * // Create many SeminarDocuments
     * const seminarDocument = await prisma.seminarDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeminarDocumentCreateManyArgs>(args?: SelectSubset<T, SeminarDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeminarDocuments and returns the data saved in the database.
     * @param {SeminarDocumentCreateManyAndReturnArgs} args - Arguments to create many SeminarDocuments.
     * @example
     * // Create many SeminarDocuments
     * const seminarDocument = await prisma.seminarDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeminarDocuments and only return the `id`
     * const seminarDocumentWithIdOnly = await prisma.seminarDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeminarDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, SeminarDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeminarDocument.
     * @param {SeminarDocumentDeleteArgs} args - Arguments to delete one SeminarDocument.
     * @example
     * // Delete one SeminarDocument
     * const SeminarDocument = await prisma.seminarDocument.delete({
     *   where: {
     *     // ... filter to delete one SeminarDocument
     *   }
     * })
     * 
     */
    delete<T extends SeminarDocumentDeleteArgs>(args: SelectSubset<T, SeminarDocumentDeleteArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeminarDocument.
     * @param {SeminarDocumentUpdateArgs} args - Arguments to update one SeminarDocument.
     * @example
     * // Update one SeminarDocument
     * const seminarDocument = await prisma.seminarDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeminarDocumentUpdateArgs>(args: SelectSubset<T, SeminarDocumentUpdateArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeminarDocuments.
     * @param {SeminarDocumentDeleteManyArgs} args - Arguments to filter SeminarDocuments to delete.
     * @example
     * // Delete a few SeminarDocuments
     * const { count } = await prisma.seminarDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeminarDocumentDeleteManyArgs>(args?: SelectSubset<T, SeminarDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeminarDocuments
     * const seminarDocument = await prisma.seminarDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeminarDocumentUpdateManyArgs>(args: SelectSubset<T, SeminarDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarDocuments and returns the data updated in the database.
     * @param {SeminarDocumentUpdateManyAndReturnArgs} args - Arguments to update many SeminarDocuments.
     * @example
     * // Update many SeminarDocuments
     * const seminarDocument = await prisma.seminarDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeminarDocuments and only return the `id`
     * const seminarDocumentWithIdOnly = await prisma.seminarDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeminarDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, SeminarDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeminarDocument.
     * @param {SeminarDocumentUpsertArgs} args - Arguments to update or create a SeminarDocument.
     * @example
     * // Update or create a SeminarDocument
     * const seminarDocument = await prisma.seminarDocument.upsert({
     *   create: {
     *     // ... data to create a SeminarDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeminarDocument we want to update
     *   }
     * })
     */
    upsert<T extends SeminarDocumentUpsertArgs>(args: SelectSubset<T, SeminarDocumentUpsertArgs<ExtArgs>>): Prisma__SeminarDocumentClient<$Result.GetResult<Prisma.$SeminarDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeminarDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarDocumentCountArgs} args - Arguments to filter SeminarDocuments to count.
     * @example
     * // Count the number of SeminarDocuments
     * const count = await prisma.seminarDocument.count({
     *   where: {
     *     // ... the filter for the SeminarDocuments we want to count
     *   }
     * })
    **/
    count<T extends SeminarDocumentCountArgs>(
      args?: Subset<T, SeminarDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeminarDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeminarDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeminarDocumentAggregateArgs>(args: Subset<T, SeminarDocumentAggregateArgs>): Prisma.PrismaPromise<GetSeminarDocumentAggregateType<T>>

    /**
     * Group by SeminarDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarDocumentGroupByArgs} args - Group by arguments.
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
      T extends SeminarDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeminarDocumentGroupByArgs['orderBy'] }
        : { orderBy?: SeminarDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeminarDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeminarDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeminarDocument model
   */
  readonly fields: SeminarDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeminarDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeminarDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seminar<T extends SeminarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeminarDefaultArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeminarDocument model
   */
  interface SeminarDocumentFieldRefs {
    readonly id: FieldRef<"SeminarDocument", 'Int'>
    readonly seminarID: FieldRef<"SeminarDocument", 'Int'>
    readonly documentType: FieldRef<"SeminarDocument", 'DocumentType'>
    readonly fileName: FieldRef<"SeminarDocument", 'String'>
    readonly fileURL: FieldRef<"SeminarDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SeminarDocument findUnique
   */
  export type SeminarDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SeminarDocument to fetch.
     */
    where: SeminarDocumentWhereUniqueInput
  }

  /**
   * SeminarDocument findUniqueOrThrow
   */
  export type SeminarDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SeminarDocument to fetch.
     */
    where: SeminarDocumentWhereUniqueInput
  }

  /**
   * SeminarDocument findFirst
   */
  export type SeminarDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SeminarDocument to fetch.
     */
    where?: SeminarDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarDocuments to fetch.
     */
    orderBy?: SeminarDocumentOrderByWithRelationInput | SeminarDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarDocuments.
     */
    cursor?: SeminarDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarDocuments.
     */
    distinct?: SeminarDocumentScalarFieldEnum | SeminarDocumentScalarFieldEnum[]
  }

  /**
   * SeminarDocument findFirstOrThrow
   */
  export type SeminarDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SeminarDocument to fetch.
     */
    where?: SeminarDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarDocuments to fetch.
     */
    orderBy?: SeminarDocumentOrderByWithRelationInput | SeminarDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarDocuments.
     */
    cursor?: SeminarDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarDocuments.
     */
    distinct?: SeminarDocumentScalarFieldEnum | SeminarDocumentScalarFieldEnum[]
  }

  /**
   * SeminarDocument findMany
   */
  export type SeminarDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SeminarDocuments to fetch.
     */
    where?: SeminarDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarDocuments to fetch.
     */
    orderBy?: SeminarDocumentOrderByWithRelationInput | SeminarDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeminarDocuments.
     */
    cursor?: SeminarDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarDocuments.
     */
    skip?: number
    distinct?: SeminarDocumentScalarFieldEnum | SeminarDocumentScalarFieldEnum[]
  }

  /**
   * SeminarDocument create
   */
  export type SeminarDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a SeminarDocument.
     */
    data: XOR<SeminarDocumentCreateInput, SeminarDocumentUncheckedCreateInput>
  }

  /**
   * SeminarDocument createMany
   */
  export type SeminarDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeminarDocuments.
     */
    data: SeminarDocumentCreateManyInput | SeminarDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeminarDocument createManyAndReturn
   */
  export type SeminarDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many SeminarDocuments.
     */
    data: SeminarDocumentCreateManyInput | SeminarDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarDocument update
   */
  export type SeminarDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a SeminarDocument.
     */
    data: XOR<SeminarDocumentUpdateInput, SeminarDocumentUncheckedUpdateInput>
    /**
     * Choose, which SeminarDocument to update.
     */
    where: SeminarDocumentWhereUniqueInput
  }

  /**
   * SeminarDocument updateMany
   */
  export type SeminarDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeminarDocuments.
     */
    data: XOR<SeminarDocumentUpdateManyMutationInput, SeminarDocumentUncheckedUpdateManyInput>
    /**
     * Filter which SeminarDocuments to update
     */
    where?: SeminarDocumentWhereInput
    /**
     * Limit how many SeminarDocuments to update.
     */
    limit?: number
  }

  /**
   * SeminarDocument updateManyAndReturn
   */
  export type SeminarDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * The data used to update SeminarDocuments.
     */
    data: XOR<SeminarDocumentUpdateManyMutationInput, SeminarDocumentUncheckedUpdateManyInput>
    /**
     * Filter which SeminarDocuments to update
     */
    where?: SeminarDocumentWhereInput
    /**
     * Limit how many SeminarDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarDocument upsert
   */
  export type SeminarDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the SeminarDocument to update in case it exists.
     */
    where: SeminarDocumentWhereUniqueInput
    /**
     * In case the SeminarDocument found by the `where` argument doesn't exist, create a new SeminarDocument with this data.
     */
    create: XOR<SeminarDocumentCreateInput, SeminarDocumentUncheckedCreateInput>
    /**
     * In case the SeminarDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeminarDocumentUpdateInput, SeminarDocumentUncheckedUpdateInput>
  }

  /**
   * SeminarDocument delete
   */
  export type SeminarDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
    /**
     * Filter which SeminarDocument to delete.
     */
    where: SeminarDocumentWhereUniqueInput
  }

  /**
   * SeminarDocument deleteMany
   */
  export type SeminarDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarDocuments to delete
     */
    where?: SeminarDocumentWhereInput
    /**
     * Limit how many SeminarDocuments to delete.
     */
    limit?: number
  }

  /**
   * SeminarDocument without action
   */
  export type SeminarDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarDocument
     */
    select?: SeminarDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarDocument
     */
    omit?: SeminarDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    id: number | null
    presentationScore: number | null
    masteryScore: number | null
    characteristicScore: number | null
    writingScore: number | null
    finalScore: number | null
    seminarID: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    id: number | null
    presentationScore: number | null
    masteryScore: number | null
    characteristicScore: number | null
    writingScore: number | null
    finalScore: number | null
    seminarID: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: number | null
    lecturerRole: $Enums.LecturerRole | null
    presentationScore: number | null
    masteryScore: number | null
    characteristicScore: number | null
    writingScore: number | null
    finalScore: number | null
    feedback: string | null
    createdAt: Date | null
    lecturerNIP: string | null
    seminarID: number | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: number | null
    lecturerRole: $Enums.LecturerRole | null
    presentationScore: number | null
    masteryScore: number | null
    characteristicScore: number | null
    writingScore: number | null
    finalScore: number | null
    feedback: string | null
    createdAt: Date | null
    lecturerNIP: string | null
    seminarID: number | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    lecturerRole: number
    presentationScore: number
    masteryScore: number
    characteristicScore: number
    writingScore: number
    finalScore: number
    feedback: number
    createdAt: number
    lecturerNIP: number
    seminarID: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    id?: true
    presentationScore?: true
    masteryScore?: true
    characteristicScore?: true
    writingScore?: true
    finalScore?: true
    seminarID?: true
  }

  export type AssessmentSumAggregateInputType = {
    id?: true
    presentationScore?: true
    masteryScore?: true
    characteristicScore?: true
    writingScore?: true
    finalScore?: true
    seminarID?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    lecturerRole?: true
    presentationScore?: true
    masteryScore?: true
    characteristicScore?: true
    writingScore?: true
    finalScore?: true
    feedback?: true
    createdAt?: true
    lecturerNIP?: true
    seminarID?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    lecturerRole?: true
    presentationScore?: true
    masteryScore?: true
    characteristicScore?: true
    writingScore?: true
    finalScore?: true
    feedback?: true
    createdAt?: true
    lecturerNIP?: true
    seminarID?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    lecturerRole?: true
    presentationScore?: true
    masteryScore?: true
    characteristicScore?: true
    writingScore?: true
    finalScore?: true
    feedback?: true
    createdAt?: true
    lecturerNIP?: true
    seminarID?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: number
    lecturerRole: $Enums.LecturerRole
    presentationScore: number | null
    masteryScore: number | null
    characteristicScore: number | null
    writingScore: number | null
    finalScore: number | null
    feedback: string | null
    createdAt: Date
    lecturerNIP: string
    seminarID: number
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerRole?: boolean
    presentationScore?: boolean
    masteryScore?: boolean
    characteristicScore?: boolean
    writingScore?: boolean
    finalScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    lecturerNIP?: boolean
    seminarID?: boolean
    lecturer?: boolean | Assessment$lecturerArgs<ExtArgs>
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerRole?: boolean
    presentationScore?: boolean
    masteryScore?: boolean
    characteristicScore?: boolean
    writingScore?: boolean
    finalScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    lecturerNIP?: boolean
    seminarID?: boolean
    lecturer?: boolean | Assessment$lecturerArgs<ExtArgs>
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerRole?: boolean
    presentationScore?: boolean
    masteryScore?: boolean
    characteristicScore?: boolean
    writingScore?: boolean
    finalScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    lecturerNIP?: boolean
    seminarID?: boolean
    lecturer?: boolean | Assessment$lecturerArgs<ExtArgs>
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    lecturerRole?: boolean
    presentationScore?: boolean
    masteryScore?: boolean
    characteristicScore?: boolean
    writingScore?: boolean
    finalScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    lecturerNIP?: boolean
    seminarID?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lecturerRole" | "presentationScore" | "masteryScore" | "characteristicScore" | "writingScore" | "finalScore" | "feedback" | "createdAt" | "lecturerNIP" | "seminarID", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | Assessment$lecturerArgs<ExtArgs>
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | Assessment$lecturerArgs<ExtArgs>
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | Assessment$lecturerArgs<ExtArgs>
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs> | null
      seminar: Prisma.$SeminarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lecturerRole: $Enums.LecturerRole
      presentationScore: number | null
      masteryScore: number | null
      characteristicScore: number | null
      writingScore: number | null
      finalScore: number | null
      feedback: string | null
      createdAt: Date
      lecturerNIP: string
      seminarID: number
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
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
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends Assessment$lecturerArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$lecturerArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seminar<T extends SeminarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeminarDefaultArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'Int'>
    readonly lecturerRole: FieldRef<"Assessment", 'LecturerRole'>
    readonly presentationScore: FieldRef<"Assessment", 'Float'>
    readonly masteryScore: FieldRef<"Assessment", 'Float'>
    readonly characteristicScore: FieldRef<"Assessment", 'Float'>
    readonly writingScore: FieldRef<"Assessment", 'Float'>
    readonly finalScore: FieldRef<"Assessment", 'Float'>
    readonly feedback: FieldRef<"Assessment", 'String'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
    readonly lecturerNIP: FieldRef<"Assessment", 'String'>
    readonly seminarID: FieldRef<"Assessment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment.lecturer
   */
  export type Assessment$lecturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    where?: LecturerWhereInput
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model SecurityLog
   */

  export type AggregateSecurityLog = {
    _count: SecurityLogCountAggregateOutputType | null
    _avg: SecurityLogAvgAggregateOutputType | null
    _sum: SecurityLogSumAggregateOutputType | null
    _min: SecurityLogMinAggregateOutputType | null
    _max: SecurityLogMaxAggregateOutputType | null
  }

  export type SecurityLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SecurityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SecurityLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    ipAddress: string | null
    device: string | null
    createdAt: Date | null
  }

  export type SecurityLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    ipAddress: string | null
    device: string | null
    createdAt: Date | null
  }

  export type SecurityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    ipAddress: number
    device: number
    createdAt: number
    _all: number
  }


  export type SecurityLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SecurityLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SecurityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    ipAddress?: true
    device?: true
    createdAt?: true
  }

  export type SecurityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    ipAddress?: true
    device?: true
    createdAt?: true
  }

  export type SecurityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    ipAddress?: true
    device?: true
    createdAt?: true
    _all?: true
  }

  export type SecurityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityLog to aggregate.
     */
    where?: SecurityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityLogs to fetch.
     */
    orderBy?: SecurityLogOrderByWithRelationInput | SecurityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityLogs
    **/
    _count?: true | SecurityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityLogMaxAggregateInputType
  }

  export type GetSecurityLogAggregateType<T extends SecurityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityLog[P]>
      : GetScalarType<T[P], AggregateSecurityLog[P]>
  }




  export type SecurityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityLogWhereInput
    orderBy?: SecurityLogOrderByWithAggregationInput | SecurityLogOrderByWithAggregationInput[]
    by: SecurityLogScalarFieldEnum[] | SecurityLogScalarFieldEnum
    having?: SecurityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityLogCountAggregateInputType | true
    _avg?: SecurityLogAvgAggregateInputType
    _sum?: SecurityLogSumAggregateInputType
    _min?: SecurityLogMinAggregateInputType
    _max?: SecurityLogMaxAggregateInputType
  }

  export type SecurityLogGroupByOutputType = {
    id: number
    userId: number | null
    action: string
    ipAddress: string
    device: string
    createdAt: Date
    _count: SecurityLogCountAggregateOutputType | null
    _avg: SecurityLogAvgAggregateOutputType | null
    _sum: SecurityLogSumAggregateOutputType | null
    _min: SecurityLogMinAggregateOutputType | null
    _max: SecurityLogMaxAggregateOutputType | null
  }

  type GetSecurityLogGroupByPayload<T extends SecurityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityLogGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityLogGroupByOutputType[P]>
        }
      >
    >


  export type SecurityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    ipAddress?: boolean
    device?: boolean
    createdAt?: boolean
    user?: boolean | SecurityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["securityLog"]>

  export type SecurityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    ipAddress?: boolean
    device?: boolean
    createdAt?: boolean
    user?: boolean | SecurityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["securityLog"]>

  export type SecurityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    ipAddress?: boolean
    device?: boolean
    createdAt?: boolean
    user?: boolean | SecurityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["securityLog"]>

  export type SecurityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    ipAddress?: boolean
    device?: boolean
    createdAt?: boolean
  }

  export type SecurityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "ipAddress" | "device" | "createdAt", ExtArgs["result"]["securityLog"]>
  export type SecurityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SecurityLog$userArgs<ExtArgs>
  }
  export type SecurityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SecurityLog$userArgs<ExtArgs>
  }
  export type SecurityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SecurityLog$userArgs<ExtArgs>
  }

  export type $SecurityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      action: string
      ipAddress: string
      device: string
      createdAt: Date
    }, ExtArgs["result"]["securityLog"]>
    composites: {}
  }

  type SecurityLogGetPayload<S extends boolean | null | undefined | SecurityLogDefaultArgs> = $Result.GetResult<Prisma.$SecurityLogPayload, S>

  type SecurityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityLogCountAggregateInputType | true
    }

  export interface SecurityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityLog'], meta: { name: 'SecurityLog' } }
    /**
     * Find zero or one SecurityLog that matches the filter.
     * @param {SecurityLogFindUniqueArgs} args - Arguments to find a SecurityLog
     * @example
     * // Get one SecurityLog
     * const securityLog = await prisma.securityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityLogFindUniqueArgs>(args: SelectSubset<T, SecurityLogFindUniqueArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityLogFindUniqueOrThrowArgs} args - Arguments to find a SecurityLog
     * @example
     * // Get one SecurityLog
     * const securityLog = await prisma.securityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityLogFindFirstArgs} args - Arguments to find a SecurityLog
     * @example
     * // Get one SecurityLog
     * const securityLog = await prisma.securityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityLogFindFirstArgs>(args?: SelectSubset<T, SecurityLogFindFirstArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityLogFindFirstOrThrowArgs} args - Arguments to find a SecurityLog
     * @example
     * // Get one SecurityLog
     * const securityLog = await prisma.securityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityLogs
     * const securityLogs = await prisma.securityLog.findMany()
     * 
     * // Get first 10 SecurityLogs
     * const securityLogs = await prisma.securityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityLogWithIdOnly = await prisma.securityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityLogFindManyArgs>(args?: SelectSubset<T, SecurityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityLog.
     * @param {SecurityLogCreateArgs} args - Arguments to create a SecurityLog.
     * @example
     * // Create one SecurityLog
     * const SecurityLog = await prisma.securityLog.create({
     *   data: {
     *     // ... data to create a SecurityLog
     *   }
     * })
     * 
     */
    create<T extends SecurityLogCreateArgs>(args: SelectSubset<T, SecurityLogCreateArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityLogs.
     * @param {SecurityLogCreateManyArgs} args - Arguments to create many SecurityLogs.
     * @example
     * // Create many SecurityLogs
     * const securityLog = await prisma.securityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityLogCreateManyArgs>(args?: SelectSubset<T, SecurityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityLogs and returns the data saved in the database.
     * @param {SecurityLogCreateManyAndReturnArgs} args - Arguments to create many SecurityLogs.
     * @example
     * // Create many SecurityLogs
     * const securityLog = await prisma.securityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityLogs and only return the `id`
     * const securityLogWithIdOnly = await prisma.securityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityLog.
     * @param {SecurityLogDeleteArgs} args - Arguments to delete one SecurityLog.
     * @example
     * // Delete one SecurityLog
     * const SecurityLog = await prisma.securityLog.delete({
     *   where: {
     *     // ... filter to delete one SecurityLog
     *   }
     * })
     * 
     */
    delete<T extends SecurityLogDeleteArgs>(args: SelectSubset<T, SecurityLogDeleteArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityLog.
     * @param {SecurityLogUpdateArgs} args - Arguments to update one SecurityLog.
     * @example
     * // Update one SecurityLog
     * const securityLog = await prisma.securityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityLogUpdateArgs>(args: SelectSubset<T, SecurityLogUpdateArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityLogs.
     * @param {SecurityLogDeleteManyArgs} args - Arguments to filter SecurityLogs to delete.
     * @example
     * // Delete a few SecurityLogs
     * const { count } = await prisma.securityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityLogDeleteManyArgs>(args?: SelectSubset<T, SecurityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityLogs
     * const securityLog = await prisma.securityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityLogUpdateManyArgs>(args: SelectSubset<T, SecurityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityLogs and returns the data updated in the database.
     * @param {SecurityLogUpdateManyAndReturnArgs} args - Arguments to update many SecurityLogs.
     * @example
     * // Update many SecurityLogs
     * const securityLog = await prisma.securityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityLogs and only return the `id`
     * const securityLogWithIdOnly = await prisma.securityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SecurityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityLog.
     * @param {SecurityLogUpsertArgs} args - Arguments to update or create a SecurityLog.
     * @example
     * // Update or create a SecurityLog
     * const securityLog = await prisma.securityLog.upsert({
     *   create: {
     *     // ... data to create a SecurityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityLog we want to update
     *   }
     * })
     */
    upsert<T extends SecurityLogUpsertArgs>(args: SelectSubset<T, SecurityLogUpsertArgs<ExtArgs>>): Prisma__SecurityLogClient<$Result.GetResult<Prisma.$SecurityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityLogCountArgs} args - Arguments to filter SecurityLogs to count.
     * @example
     * // Count the number of SecurityLogs
     * const count = await prisma.securityLog.count({
     *   where: {
     *     // ... the filter for the SecurityLogs we want to count
     *   }
     * })
    **/
    count<T extends SecurityLogCountArgs>(
      args?: Subset<T, SecurityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityLogAggregateArgs>(args: Subset<T, SecurityLogAggregateArgs>): Prisma.PrismaPromise<GetSecurityLogAggregateType<T>>

    /**
     * Group by SecurityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityLogGroupByArgs} args - Group by arguments.
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
      T extends SecurityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityLogGroupByArgs['orderBy'] }
        : { orderBy?: SecurityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecurityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityLog model
   */
  readonly fields: SecurityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SecurityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, SecurityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SecurityLog model
   */
  interface SecurityLogFieldRefs {
    readonly id: FieldRef<"SecurityLog", 'Int'>
    readonly userId: FieldRef<"SecurityLog", 'Int'>
    readonly action: FieldRef<"SecurityLog", 'String'>
    readonly ipAddress: FieldRef<"SecurityLog", 'String'>
    readonly device: FieldRef<"SecurityLog", 'String'>
    readonly createdAt: FieldRef<"SecurityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityLog findUnique
   */
  export type SecurityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * Filter, which SecurityLog to fetch.
     */
    where: SecurityLogWhereUniqueInput
  }

  /**
   * SecurityLog findUniqueOrThrow
   */
  export type SecurityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * Filter, which SecurityLog to fetch.
     */
    where: SecurityLogWhereUniqueInput
  }

  /**
   * SecurityLog findFirst
   */
  export type SecurityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * Filter, which SecurityLog to fetch.
     */
    where?: SecurityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityLogs to fetch.
     */
    orderBy?: SecurityLogOrderByWithRelationInput | SecurityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityLogs.
     */
    cursor?: SecurityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityLogs.
     */
    distinct?: SecurityLogScalarFieldEnum | SecurityLogScalarFieldEnum[]
  }

  /**
   * SecurityLog findFirstOrThrow
   */
  export type SecurityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * Filter, which SecurityLog to fetch.
     */
    where?: SecurityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityLogs to fetch.
     */
    orderBy?: SecurityLogOrderByWithRelationInput | SecurityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityLogs.
     */
    cursor?: SecurityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityLogs.
     */
    distinct?: SecurityLogScalarFieldEnum | SecurityLogScalarFieldEnum[]
  }

  /**
   * SecurityLog findMany
   */
  export type SecurityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * Filter, which SecurityLogs to fetch.
     */
    where?: SecurityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityLogs to fetch.
     */
    orderBy?: SecurityLogOrderByWithRelationInput | SecurityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityLogs.
     */
    cursor?: SecurityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityLogs.
     */
    skip?: number
    distinct?: SecurityLogScalarFieldEnum | SecurityLogScalarFieldEnum[]
  }

  /**
   * SecurityLog create
   */
  export type SecurityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityLog.
     */
    data: XOR<SecurityLogCreateInput, SecurityLogUncheckedCreateInput>
  }

  /**
   * SecurityLog createMany
   */
  export type SecurityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityLogs.
     */
    data: SecurityLogCreateManyInput | SecurityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityLog createManyAndReturn
   */
  export type SecurityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityLogs.
     */
    data: SecurityLogCreateManyInput | SecurityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityLog update
   */
  export type SecurityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityLog.
     */
    data: XOR<SecurityLogUpdateInput, SecurityLogUncheckedUpdateInput>
    /**
     * Choose, which SecurityLog to update.
     */
    where: SecurityLogWhereUniqueInput
  }

  /**
   * SecurityLog updateMany
   */
  export type SecurityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityLogs.
     */
    data: XOR<SecurityLogUpdateManyMutationInput, SecurityLogUncheckedUpdateManyInput>
    /**
     * Filter which SecurityLogs to update
     */
    where?: SecurityLogWhereInput
    /**
     * Limit how many SecurityLogs to update.
     */
    limit?: number
  }

  /**
   * SecurityLog updateManyAndReturn
   */
  export type SecurityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * The data used to update SecurityLogs.
     */
    data: XOR<SecurityLogUpdateManyMutationInput, SecurityLogUncheckedUpdateManyInput>
    /**
     * Filter which SecurityLogs to update
     */
    where?: SecurityLogWhereInput
    /**
     * Limit how many SecurityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityLog upsert
   */
  export type SecurityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityLog to update in case it exists.
     */
    where: SecurityLogWhereUniqueInput
    /**
     * In case the SecurityLog found by the `where` argument doesn't exist, create a new SecurityLog with this data.
     */
    create: XOR<SecurityLogCreateInput, SecurityLogUncheckedCreateInput>
    /**
     * In case the SecurityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityLogUpdateInput, SecurityLogUncheckedUpdateInput>
  }

  /**
   * SecurityLog delete
   */
  export type SecurityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
    /**
     * Filter which SecurityLog to delete.
     */
    where: SecurityLogWhereUniqueInput
  }

  /**
   * SecurityLog deleteMany
   */
  export type SecurityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityLogs to delete
     */
    where?: SecurityLogWhereInput
    /**
     * Limit how many SecurityLogs to delete.
     */
    limit?: number
  }

  /**
   * SecurityLog.user
   */
  export type SecurityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * SecurityLog without action
   */
  export type SecurityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityLog
     */
    select?: SecurityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityLog
     */
    omit?: SecurityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityLogInclude<ExtArgs> | null
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
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isVerify: 'isVerify',
    studentID: 'studentID',
    lecturerID: 'lecturerID',
    coordinatorID: 'coordinatorID'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OTPScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expiresAt: 'expiresAt',
    userID: 'userID',
    createdAt: 'createdAt'
  };

  export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    name: 'name',
    phoneNumber: 'phoneNumber',
    profilePicture: 'profilePicture'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const LecturerScalarFieldEnum: {
    id: 'id',
    nip: 'nip',
    name: 'name',
    phoneNumber: 'phoneNumber',
    profilePicture: 'profilePicture'
  };

  export type LecturerScalarFieldEnum = (typeof LecturerScalarFieldEnum)[keyof typeof LecturerScalarFieldEnum]


  export const CoordinatorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profilePicture: 'profilePicture'
  };

  export type CoordinatorScalarFieldEnum = (typeof CoordinatorScalarFieldEnum)[keyof typeof CoordinatorScalarFieldEnum]


  export const SeminarScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    folderId: 'folderId',
    studentNIM: 'studentNIM',
    time: 'time',
    room: 'room'
  };

  export type SeminarScalarFieldEnum = (typeof SeminarScalarFieldEnum)[keyof typeof SeminarScalarFieldEnum]


  export const SeminarAdvisorScalarFieldEnum: {
    id: 'id',
    seminarID: 'seminarID',
    lecturerNIP: 'lecturerNIP'
  };

  export type SeminarAdvisorScalarFieldEnum = (typeof SeminarAdvisorScalarFieldEnum)[keyof typeof SeminarAdvisorScalarFieldEnum]


  export const SeminarAssessorScalarFieldEnum: {
    id: 'id',
    seminarID: 'seminarID',
    lecturerNIP: 'lecturerNIP'
  };

  export type SeminarAssessorScalarFieldEnum = (typeof SeminarAssessorScalarFieldEnum)[keyof typeof SeminarAssessorScalarFieldEnum]


  export const SeminarDocumentScalarFieldEnum: {
    id: 'id',
    seminarID: 'seminarID',
    documentType: 'documentType',
    fileName: 'fileName',
    fileURL: 'fileURL'
  };

  export type SeminarDocumentScalarFieldEnum = (typeof SeminarDocumentScalarFieldEnum)[keyof typeof SeminarDocumentScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    lecturerRole: 'lecturerRole',
    presentationScore: 'presentationScore',
    masteryScore: 'masteryScore',
    characteristicScore: 'characteristicScore',
    writingScore: 'writingScore',
    finalScore: 'finalScore',
    feedback: 'feedback',
    createdAt: 'createdAt',
    lecturerNIP: 'lecturerNIP',
    seminarID: 'seminarID'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const SecurityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    ipAddress: 'ipAddress',
    device: 'device',
    createdAt: 'createdAt'
  };

  export type SecurityLogScalarFieldEnum = (typeof SecurityLogScalarFieldEnum)[keyof typeof SecurityLogScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SeminarType'
   */
  export type EnumSeminarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarType'>
    


  /**
   * Reference to a field of type 'SeminarType[]'
   */
  export type ListEnumSeminarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarType[]'>
    


  /**
   * Reference to a field of type 'SeminarStatus'
   */
  export type EnumSeminarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarStatus'>
    


  /**
   * Reference to a field of type 'SeminarStatus[]'
   */
  export type ListEnumSeminarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarStatus[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'LecturerRole'
   */
  export type EnumLecturerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LecturerRole'>
    


  /**
   * Reference to a field of type 'LecturerRole[]'
   */
  export type ListEnumLecturerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LecturerRole[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isVerify?: BoolFilter<"User"> | boolean
    studentID?: IntNullableFilter<"User"> | number | null
    lecturerID?: IntNullableFilter<"User"> | number | null
    coordinatorID?: IntNullableFilter<"User"> | number | null
    otp?: OTPListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    coordinator?: XOR<CoordinatorNullableScalarRelationFilter, CoordinatorWhereInput> | null
    securityLog?: SecurityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    studentID?: SortOrderInput | SortOrder
    lecturerID?: SortOrderInput | SortOrder
    coordinatorID?: SortOrderInput | SortOrder
    otp?: OTPOrderByRelationAggregateInput
    student?: StudentOrderByWithRelationInput
    lecturer?: LecturerOrderByWithRelationInput
    coordinator?: CoordinatorOrderByWithRelationInput
    securityLog?: SecurityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    studentID?: number
    lecturerID?: number
    coordinatorID?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isVerify?: BoolFilter<"User"> | boolean
    otp?: OTPListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    coordinator?: XOR<CoordinatorNullableScalarRelationFilter, CoordinatorWhereInput> | null
    securityLog?: SecurityLogListRelationFilter
  }, "id" | "email" | "studentID" | "lecturerID" | "coordinatorID">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    studentID?: SortOrderInput | SortOrder
    lecturerID?: SortOrderInput | SortOrder
    coordinatorID?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    studentID?: IntNullableWithAggregatesFilter<"User"> | number | null
    lecturerID?: IntNullableWithAggregatesFilter<"User"> | number | null
    coordinatorID?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type OTPWhereInput = {
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    id?: StringFilter<"OTP"> | string
    code?: IntFilter<"OTP"> | number
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    userID?: IntFilter<"OTP"> | number
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OTPOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OTPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    code?: IntFilter<"OTP"> | number
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    userID?: IntFilter<"OTP"> | number
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OTPOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    _count?: OTPCountOrderByAggregateInput
    _avg?: OTPAvgOrderByAggregateInput
    _max?: OTPMaxOrderByAggregateInput
    _min?: OTPMinOrderByAggregateInput
    _sum?: OTPSumOrderByAggregateInput
  }

  export type OTPScalarWhereWithAggregatesInput = {
    AND?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    OR?: OTPScalarWhereWithAggregatesInput[]
    NOT?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTP"> | string
    code?: IntWithAggregatesFilter<"OTP"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    userID?: IntWithAggregatesFilter<"OTP"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    nim?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    phoneNumber?: StringFilter<"Student"> | string
    profilePicture?: StringNullableFilter<"Student"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    seminars?: SeminarListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    seminars?: SeminarOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nim?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    phoneNumber?: StringFilter<"Student"> | string
    profilePicture?: StringNullableFilter<"Student"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    seminars?: SeminarListRelationFilter
  }, "id" | "nim">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    nim?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    phoneNumber?: StringWithAggregatesFilter<"Student"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type LecturerWhereInput = {
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    id?: IntFilter<"Lecturer"> | number
    nip?: StringFilter<"Lecturer"> | string
    name?: StringFilter<"Lecturer"> | string
    phoneNumber?: StringFilter<"Lecturer"> | string
    profilePicture?: StringNullableFilter<"Lecturer"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    seminarAdvisors?: SeminarAdvisorListRelationFilter
    seminarAssessors?: SeminarAssessorListRelationFilter
    assessments?: AssessmentListRelationFilter
  }

  export type LecturerOrderByWithRelationInput = {
    id?: SortOrder
    nip?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    seminarAdvisors?: SeminarAdvisorOrderByRelationAggregateInput
    seminarAssessors?: SeminarAssessorOrderByRelationAggregateInput
    assessments?: AssessmentOrderByRelationAggregateInput
  }

  export type LecturerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nip?: string
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    name?: StringFilter<"Lecturer"> | string
    phoneNumber?: StringFilter<"Lecturer"> | string
    profilePicture?: StringNullableFilter<"Lecturer"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    seminarAdvisors?: SeminarAdvisorListRelationFilter
    seminarAssessors?: SeminarAssessorListRelationFilter
    assessments?: AssessmentListRelationFilter
  }, "id" | "nip">

  export type LecturerOrderByWithAggregationInput = {
    id?: SortOrder
    nip?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: LecturerCountOrderByAggregateInput
    _avg?: LecturerAvgOrderByAggregateInput
    _max?: LecturerMaxOrderByAggregateInput
    _min?: LecturerMinOrderByAggregateInput
    _sum?: LecturerSumOrderByAggregateInput
  }

  export type LecturerScalarWhereWithAggregatesInput = {
    AND?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    OR?: LecturerScalarWhereWithAggregatesInput[]
    NOT?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lecturer"> | number
    nip?: StringWithAggregatesFilter<"Lecturer"> | string
    name?: StringWithAggregatesFilter<"Lecturer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Lecturer"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"Lecturer"> | string | null
  }

  export type CoordinatorWhereInput = {
    AND?: CoordinatorWhereInput | CoordinatorWhereInput[]
    OR?: CoordinatorWhereInput[]
    NOT?: CoordinatorWhereInput | CoordinatorWhereInput[]
    id?: IntFilter<"Coordinator"> | number
    name?: StringFilter<"Coordinator"> | string
    profilePicture?: StringNullableFilter<"Coordinator"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CoordinatorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoordinatorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoordinatorWhereInput | CoordinatorWhereInput[]
    OR?: CoordinatorWhereInput[]
    NOT?: CoordinatorWhereInput | CoordinatorWhereInput[]
    name?: StringFilter<"Coordinator"> | string
    profilePicture?: StringNullableFilter<"Coordinator"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CoordinatorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: CoordinatorCountOrderByAggregateInput
    _avg?: CoordinatorAvgOrderByAggregateInput
    _max?: CoordinatorMaxOrderByAggregateInput
    _min?: CoordinatorMinOrderByAggregateInput
    _sum?: CoordinatorSumOrderByAggregateInput
  }

  export type CoordinatorScalarWhereWithAggregatesInput = {
    AND?: CoordinatorScalarWhereWithAggregatesInput | CoordinatorScalarWhereWithAggregatesInput[]
    OR?: CoordinatorScalarWhereWithAggregatesInput[]
    NOT?: CoordinatorScalarWhereWithAggregatesInput | CoordinatorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coordinator"> | number
    name?: StringWithAggregatesFilter<"Coordinator"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"Coordinator"> | string | null
  }

  export type SeminarWhereInput = {
    AND?: SeminarWhereInput | SeminarWhereInput[]
    OR?: SeminarWhereInput[]
    NOT?: SeminarWhereInput | SeminarWhereInput[]
    id?: IntFilter<"Seminar"> | number
    type?: EnumSeminarTypeFilter<"Seminar"> | $Enums.SeminarType
    title?: StringFilter<"Seminar"> | string
    status?: EnumSeminarStatusFilter<"Seminar"> | $Enums.SeminarStatus
    createdAt?: DateTimeFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeFilter<"Seminar"> | Date | string
    folderId?: StringNullableFilter<"Seminar"> | string | null
    studentNIM?: StringFilter<"Seminar"> | string
    time?: DateTimeNullableFilter<"Seminar"> | Date | string | null
    room?: StringNullableFilter<"Seminar"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    advisors?: SeminarAdvisorListRelationFilter
    assessors?: SeminarAssessorListRelationFilter
    documents?: SeminarDocumentListRelationFilter
    assessments?: AssessmentListRelationFilter
  }

  export type SeminarOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrderInput | SortOrder
    studentNIM?: SortOrder
    time?: SortOrderInput | SortOrder
    room?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    advisors?: SeminarAdvisorOrderByRelationAggregateInput
    assessors?: SeminarAssessorOrderByRelationAggregateInput
    documents?: SeminarDocumentOrderByRelationAggregateInput
    assessments?: AssessmentOrderByRelationAggregateInput
  }

  export type SeminarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeminarWhereInput | SeminarWhereInput[]
    OR?: SeminarWhereInput[]
    NOT?: SeminarWhereInput | SeminarWhereInput[]
    type?: EnumSeminarTypeFilter<"Seminar"> | $Enums.SeminarType
    title?: StringFilter<"Seminar"> | string
    status?: EnumSeminarStatusFilter<"Seminar"> | $Enums.SeminarStatus
    createdAt?: DateTimeFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeFilter<"Seminar"> | Date | string
    folderId?: StringNullableFilter<"Seminar"> | string | null
    studentNIM?: StringFilter<"Seminar"> | string
    time?: DateTimeNullableFilter<"Seminar"> | Date | string | null
    room?: StringNullableFilter<"Seminar"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    advisors?: SeminarAdvisorListRelationFilter
    assessors?: SeminarAssessorListRelationFilter
    documents?: SeminarDocumentListRelationFilter
    assessments?: AssessmentListRelationFilter
  }, "id">

  export type SeminarOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrderInput | SortOrder
    studentNIM?: SortOrder
    time?: SortOrderInput | SortOrder
    room?: SortOrderInput | SortOrder
    _count?: SeminarCountOrderByAggregateInput
    _avg?: SeminarAvgOrderByAggregateInput
    _max?: SeminarMaxOrderByAggregateInput
    _min?: SeminarMinOrderByAggregateInput
    _sum?: SeminarSumOrderByAggregateInput
  }

  export type SeminarScalarWhereWithAggregatesInput = {
    AND?: SeminarScalarWhereWithAggregatesInput | SeminarScalarWhereWithAggregatesInput[]
    OR?: SeminarScalarWhereWithAggregatesInput[]
    NOT?: SeminarScalarWhereWithAggregatesInput | SeminarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seminar"> | number
    type?: EnumSeminarTypeWithAggregatesFilter<"Seminar"> | $Enums.SeminarType
    title?: StringWithAggregatesFilter<"Seminar"> | string
    status?: EnumSeminarStatusWithAggregatesFilter<"Seminar"> | $Enums.SeminarStatus
    createdAt?: DateTimeWithAggregatesFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Seminar"> | Date | string
    folderId?: StringNullableWithAggregatesFilter<"Seminar"> | string | null
    studentNIM?: StringWithAggregatesFilter<"Seminar"> | string
    time?: DateTimeNullableWithAggregatesFilter<"Seminar"> | Date | string | null
    room?: StringNullableWithAggregatesFilter<"Seminar"> | string | null
  }

  export type SeminarAdvisorWhereInput = {
    AND?: SeminarAdvisorWhereInput | SeminarAdvisorWhereInput[]
    OR?: SeminarAdvisorWhereInput[]
    NOT?: SeminarAdvisorWhereInput | SeminarAdvisorWhereInput[]
    id?: IntFilter<"SeminarAdvisor"> | number
    seminarID?: IntFilter<"SeminarAdvisor"> | number
    lecturerNIP?: StringFilter<"SeminarAdvisor"> | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }

  export type SeminarAdvisorOrderByWithRelationInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
    seminar?: SeminarOrderByWithRelationInput
    lecturer?: LecturerOrderByWithRelationInput
  }

  export type SeminarAdvisorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeminarAdvisorWhereInput | SeminarAdvisorWhereInput[]
    OR?: SeminarAdvisorWhereInput[]
    NOT?: SeminarAdvisorWhereInput | SeminarAdvisorWhereInput[]
    seminarID?: IntFilter<"SeminarAdvisor"> | number
    lecturerNIP?: StringFilter<"SeminarAdvisor"> | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }, "id">

  export type SeminarAdvisorOrderByWithAggregationInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
    _count?: SeminarAdvisorCountOrderByAggregateInput
    _avg?: SeminarAdvisorAvgOrderByAggregateInput
    _max?: SeminarAdvisorMaxOrderByAggregateInput
    _min?: SeminarAdvisorMinOrderByAggregateInput
    _sum?: SeminarAdvisorSumOrderByAggregateInput
  }

  export type SeminarAdvisorScalarWhereWithAggregatesInput = {
    AND?: SeminarAdvisorScalarWhereWithAggregatesInput | SeminarAdvisorScalarWhereWithAggregatesInput[]
    OR?: SeminarAdvisorScalarWhereWithAggregatesInput[]
    NOT?: SeminarAdvisorScalarWhereWithAggregatesInput | SeminarAdvisorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeminarAdvisor"> | number
    seminarID?: IntWithAggregatesFilter<"SeminarAdvisor"> | number
    lecturerNIP?: StringWithAggregatesFilter<"SeminarAdvisor"> | string
  }

  export type SeminarAssessorWhereInput = {
    AND?: SeminarAssessorWhereInput | SeminarAssessorWhereInput[]
    OR?: SeminarAssessorWhereInput[]
    NOT?: SeminarAssessorWhereInput | SeminarAssessorWhereInput[]
    id?: IntFilter<"SeminarAssessor"> | number
    seminarID?: IntFilter<"SeminarAssessor"> | number
    lecturerNIP?: StringFilter<"SeminarAssessor"> | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }

  export type SeminarAssessorOrderByWithRelationInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
    seminar?: SeminarOrderByWithRelationInput
    lecturer?: LecturerOrderByWithRelationInput
  }

  export type SeminarAssessorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeminarAssessorWhereInput | SeminarAssessorWhereInput[]
    OR?: SeminarAssessorWhereInput[]
    NOT?: SeminarAssessorWhereInput | SeminarAssessorWhereInput[]
    seminarID?: IntFilter<"SeminarAssessor"> | number
    lecturerNIP?: StringFilter<"SeminarAssessor"> | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
  }, "id">

  export type SeminarAssessorOrderByWithAggregationInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
    _count?: SeminarAssessorCountOrderByAggregateInput
    _avg?: SeminarAssessorAvgOrderByAggregateInput
    _max?: SeminarAssessorMaxOrderByAggregateInput
    _min?: SeminarAssessorMinOrderByAggregateInput
    _sum?: SeminarAssessorSumOrderByAggregateInput
  }

  export type SeminarAssessorScalarWhereWithAggregatesInput = {
    AND?: SeminarAssessorScalarWhereWithAggregatesInput | SeminarAssessorScalarWhereWithAggregatesInput[]
    OR?: SeminarAssessorScalarWhereWithAggregatesInput[]
    NOT?: SeminarAssessorScalarWhereWithAggregatesInput | SeminarAssessorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeminarAssessor"> | number
    seminarID?: IntWithAggregatesFilter<"SeminarAssessor"> | number
    lecturerNIP?: StringWithAggregatesFilter<"SeminarAssessor"> | string
  }

  export type SeminarDocumentWhereInput = {
    AND?: SeminarDocumentWhereInput | SeminarDocumentWhereInput[]
    OR?: SeminarDocumentWhereInput[]
    NOT?: SeminarDocumentWhereInput | SeminarDocumentWhereInput[]
    id?: IntFilter<"SeminarDocument"> | number
    seminarID?: IntFilter<"SeminarDocument"> | number
    documentType?: EnumDocumentTypeFilter<"SeminarDocument"> | $Enums.DocumentType
    fileName?: StringFilter<"SeminarDocument"> | string
    fileURL?: StringFilter<"SeminarDocument"> | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
  }

  export type SeminarDocumentOrderByWithRelationInput = {
    id?: SortOrder
    seminarID?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileURL?: SortOrder
    seminar?: SeminarOrderByWithRelationInput
  }

  export type SeminarDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeminarDocumentWhereInput | SeminarDocumentWhereInput[]
    OR?: SeminarDocumentWhereInput[]
    NOT?: SeminarDocumentWhereInput | SeminarDocumentWhereInput[]
    seminarID?: IntFilter<"SeminarDocument"> | number
    documentType?: EnumDocumentTypeFilter<"SeminarDocument"> | $Enums.DocumentType
    fileName?: StringFilter<"SeminarDocument"> | string
    fileURL?: StringFilter<"SeminarDocument"> | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
  }, "id">

  export type SeminarDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    seminarID?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileURL?: SortOrder
    _count?: SeminarDocumentCountOrderByAggregateInput
    _avg?: SeminarDocumentAvgOrderByAggregateInput
    _max?: SeminarDocumentMaxOrderByAggregateInput
    _min?: SeminarDocumentMinOrderByAggregateInput
    _sum?: SeminarDocumentSumOrderByAggregateInput
  }

  export type SeminarDocumentScalarWhereWithAggregatesInput = {
    AND?: SeminarDocumentScalarWhereWithAggregatesInput | SeminarDocumentScalarWhereWithAggregatesInput[]
    OR?: SeminarDocumentScalarWhereWithAggregatesInput[]
    NOT?: SeminarDocumentScalarWhereWithAggregatesInput | SeminarDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeminarDocument"> | number
    seminarID?: IntWithAggregatesFilter<"SeminarDocument"> | number
    documentType?: EnumDocumentTypeWithAggregatesFilter<"SeminarDocument"> | $Enums.DocumentType
    fileName?: StringWithAggregatesFilter<"SeminarDocument"> | string
    fileURL?: StringWithAggregatesFilter<"SeminarDocument"> | string
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: IntFilter<"Assessment"> | number
    lecturerRole?: EnumLecturerRoleFilter<"Assessment"> | $Enums.LecturerRole
    presentationScore?: FloatNullableFilter<"Assessment"> | number | null
    masteryScore?: FloatNullableFilter<"Assessment"> | number | null
    characteristicScore?: FloatNullableFilter<"Assessment"> | number | null
    writingScore?: FloatNullableFilter<"Assessment"> | number | null
    finalScore?: FloatNullableFilter<"Assessment"> | number | null
    feedback?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    lecturerNIP?: StringFilter<"Assessment"> | string
    seminarID?: IntFilter<"Assessment"> | number
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    lecturerRole?: SortOrder
    presentationScore?: SortOrderInput | SortOrder
    masteryScore?: SortOrderInput | SortOrder
    characteristicScore?: SortOrderInput | SortOrder
    writingScore?: SortOrderInput | SortOrder
    finalScore?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lecturerNIP?: SortOrder
    seminarID?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    seminar?: SeminarOrderByWithRelationInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    seminarID_lecturerNIP?: AssessmentSeminarIDLecturerNIPCompoundUniqueInput
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    lecturerRole?: EnumLecturerRoleFilter<"Assessment"> | $Enums.LecturerRole
    presentationScore?: FloatNullableFilter<"Assessment"> | number | null
    masteryScore?: FloatNullableFilter<"Assessment"> | number | null
    characteristicScore?: FloatNullableFilter<"Assessment"> | number | null
    writingScore?: FloatNullableFilter<"Assessment"> | number | null
    finalScore?: FloatNullableFilter<"Assessment"> | number | null
    feedback?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    lecturerNIP?: StringFilter<"Assessment"> | string
    seminarID?: IntFilter<"Assessment"> | number
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
  }, "id" | "seminarID_lecturerNIP">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    lecturerRole?: SortOrder
    presentationScore?: SortOrderInput | SortOrder
    masteryScore?: SortOrderInput | SortOrder
    characteristicScore?: SortOrderInput | SortOrder
    writingScore?: SortOrderInput | SortOrder
    finalScore?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lecturerNIP?: SortOrder
    seminarID?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assessment"> | number
    lecturerRole?: EnumLecturerRoleWithAggregatesFilter<"Assessment"> | $Enums.LecturerRole
    presentationScore?: FloatNullableWithAggregatesFilter<"Assessment"> | number | null
    masteryScore?: FloatNullableWithAggregatesFilter<"Assessment"> | number | null
    characteristicScore?: FloatNullableWithAggregatesFilter<"Assessment"> | number | null
    writingScore?: FloatNullableWithAggregatesFilter<"Assessment"> | number | null
    finalScore?: FloatNullableWithAggregatesFilter<"Assessment"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    lecturerNIP?: StringWithAggregatesFilter<"Assessment"> | string
    seminarID?: IntWithAggregatesFilter<"Assessment"> | number
  }

  export type SecurityLogWhereInput = {
    AND?: SecurityLogWhereInput | SecurityLogWhereInput[]
    OR?: SecurityLogWhereInput[]
    NOT?: SecurityLogWhereInput | SecurityLogWhereInput[]
    id?: IntFilter<"SecurityLog"> | number
    userId?: IntNullableFilter<"SecurityLog"> | number | null
    action?: StringFilter<"SecurityLog"> | string
    ipAddress?: StringFilter<"SecurityLog"> | string
    device?: StringFilter<"SecurityLog"> | string
    createdAt?: DateTimeFilter<"SecurityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SecurityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SecurityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecurityLogWhereInput | SecurityLogWhereInput[]
    OR?: SecurityLogWhereInput[]
    NOT?: SecurityLogWhereInput | SecurityLogWhereInput[]
    userId?: IntNullableFilter<"SecurityLog"> | number | null
    action?: StringFilter<"SecurityLog"> | string
    ipAddress?: StringFilter<"SecurityLog"> | string
    device?: StringFilter<"SecurityLog"> | string
    createdAt?: DateTimeFilter<"SecurityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SecurityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    _count?: SecurityLogCountOrderByAggregateInput
    _avg?: SecurityLogAvgOrderByAggregateInput
    _max?: SecurityLogMaxOrderByAggregateInput
    _min?: SecurityLogMinOrderByAggregateInput
    _sum?: SecurityLogSumOrderByAggregateInput
  }

  export type SecurityLogScalarWhereWithAggregatesInput = {
    AND?: SecurityLogScalarWhereWithAggregatesInput | SecurityLogScalarWhereWithAggregatesInput[]
    OR?: SecurityLogScalarWhereWithAggregatesInput[]
    NOT?: SecurityLogScalarWhereWithAggregatesInput | SecurityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecurityLog"> | number
    userId?: IntNullableWithAggregatesFilter<"SecurityLog"> | number | null
    action?: StringWithAggregatesFilter<"SecurityLog"> | string
    ipAddress?: StringWithAggregatesFilter<"SecurityLog"> | string
    device?: StringWithAggregatesFilter<"SecurityLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SecurityLog"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    otp?: OTPCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    coordinator?: CoordinatorCreateNestedOneWithoutUserInput
    securityLog?: SecurityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    studentID?: number | null
    lecturerID?: number | null
    coordinatorID?: number | null
    otp?: OTPUncheckedCreateNestedManyWithoutUserInput
    securityLog?: SecurityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    otp?: OTPUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    coordinator?: CoordinatorUpdateOneWithoutUserNestedInput
    securityLog?: SecurityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    studentID?: NullableIntFieldUpdateOperationsInput | number | null
    lecturerID?: NullableIntFieldUpdateOperationsInput | number | null
    coordinatorID?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: OTPUncheckedUpdateManyWithoutUserNestedInput
    securityLog?: SecurityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    studentID?: number | null
    lecturerID?: number | null
    coordinatorID?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    studentID?: NullableIntFieldUpdateOperationsInput | number | null
    lecturerID?: NullableIntFieldUpdateOperationsInput | number | null
    coordinatorID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OTPCreateInput = {
    id?: string
    code: number
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtpInput
  }

  export type OTPUncheckedCreateInput = {
    id?: string
    code: number
    expiresAt: Date | string
    userID: number
    createdAt?: Date | string
  }

  export type OTPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpNestedInput
  }

  export type OTPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateManyInput = {
    id?: string
    code: number
    expiresAt: Date | string
    userID: number
    createdAt?: Date | string
  }

  export type OTPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    nim: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserCreateNestedOneWithoutStudentInput
    seminars?: SeminarCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    nim: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserUncheckedCreateNestedOneWithoutStudentInput
    seminars?: SeminarUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutStudentNestedInput
    seminars?: SeminarUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutStudentNestedInput
    seminars?: SeminarUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    nim: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LecturerCreateInput = {
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserCreateNestedOneWithoutLecturerInput
    seminarAdvisors?: SeminarAdvisorCreateNestedManyWithoutLecturerInput
    seminarAssessors?: SeminarAssessorCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateInput = {
    id?: number
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserUncheckedCreateNestedOneWithoutLecturerInput
    seminarAdvisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutLecturerInput
    seminarAssessors?: SeminarAssessorUncheckedCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutLecturerNestedInput
    seminarAdvisors?: SeminarAdvisorUpdateManyWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutLecturerNestedInput
    seminarAdvisors?: SeminarAdvisorUncheckedUpdateManyWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUncheckedUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerCreateManyInput = {
    id?: number
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
  }

  export type LecturerUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LecturerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoordinatorCreateInput = {
    name: string
    profilePicture?: string | null
    user?: UserCreateNestedOneWithoutCoordinatorInput
  }

  export type CoordinatorUncheckedCreateInput = {
    id?: number
    name: string
    profilePicture?: string | null
    user?: UserUncheckedCreateNestedOneWithoutCoordinatorInput
  }

  export type CoordinatorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCoordinatorNestedInput
  }

  export type CoordinatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutCoordinatorNestedInput
  }

  export type CoordinatorCreateManyInput = {
    id?: number
    name: string
    profilePicture?: string | null
  }

  export type CoordinatorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoordinatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeminarCreateInput = {
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
    student: StudentCreateNestedOneWithoutSeminarsInput
    advisors?: SeminarAdvisorCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    studentNIM: string
    time?: Date | string | null
    room?: string | null
    advisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorUncheckedCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentUncheckedCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUpdateInput = {
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutSeminarsNestedInput
    advisors?: SeminarAdvisorUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    studentNIM?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: SeminarAdvisorUncheckedUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUncheckedUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUncheckedUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarCreateManyInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    studentNIM: string
    time?: Date | string | null
    room?: string | null
  }

  export type SeminarUpdateManyMutationInput = {
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeminarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    studentNIM?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeminarAdvisorCreateInput = {
    seminar: SeminarCreateNestedOneWithoutAdvisorsInput
    lecturer: LecturerCreateNestedOneWithoutSeminarAdvisorsInput
  }

  export type SeminarAdvisorUncheckedCreateInput = {
    id?: number
    seminarID: number
    lecturerNIP: string
  }

  export type SeminarAdvisorUpdateInput = {
    seminar?: SeminarUpdateOneRequiredWithoutAdvisorsNestedInput
    lecturer?: LecturerUpdateOneRequiredWithoutSeminarAdvisorsNestedInput
  }

  export type SeminarAdvisorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarAdvisorCreateManyInput = {
    id?: number
    seminarID: number
    lecturerNIP: string
  }

  export type SeminarAdvisorUpdateManyMutationInput = {

  }

  export type SeminarAdvisorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarAssessorCreateInput = {
    seminar: SeminarCreateNestedOneWithoutAssessorsInput
    lecturer: LecturerCreateNestedOneWithoutSeminarAssessorsInput
  }

  export type SeminarAssessorUncheckedCreateInput = {
    id?: number
    seminarID: number
    lecturerNIP: string
  }

  export type SeminarAssessorUpdateInput = {
    seminar?: SeminarUpdateOneRequiredWithoutAssessorsNestedInput
    lecturer?: LecturerUpdateOneRequiredWithoutSeminarAssessorsNestedInput
  }

  export type SeminarAssessorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarAssessorCreateManyInput = {
    id?: number
    seminarID: number
    lecturerNIP: string
  }

  export type SeminarAssessorUpdateManyMutationInput = {

  }

  export type SeminarAssessorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarDocumentCreateInput = {
    documentType: $Enums.DocumentType
    fileName: string
    fileURL: string
    seminar: SeminarCreateNestedOneWithoutDocumentsInput
  }

  export type SeminarDocumentUncheckedCreateInput = {
    id?: number
    seminarID: number
    documentType: $Enums.DocumentType
    fileName: string
    fileURL: string
  }

  export type SeminarDocumentUpdateInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileURL?: StringFieldUpdateOperationsInput | string
    seminar?: SeminarUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type SeminarDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileURL?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarDocumentCreateManyInput = {
    id?: number
    seminarID: number
    documentType: $Enums.DocumentType
    fileName: string
    fileURL: string
  }

  export type SeminarDocumentUpdateManyMutationInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileURL?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileURL?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentCreateInput = {
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutAssessmentsInput
    seminar: SeminarCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: number
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    lecturerNIP: string
    seminarID: number
  }

  export type AssessmentUpdateInput = {
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutAssessmentsNestedInput
    seminar?: SeminarUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerNIP?: StringFieldUpdateOperationsInput | string
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type AssessmentCreateManyInput = {
    id?: number
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    lecturerNIP: string
    seminarID: number
  }

  export type AssessmentUpdateManyMutationInput = {
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerNIP?: StringFieldUpdateOperationsInput | string
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type SecurityLogCreateInput = {
    action: string
    ipAddress: string
    device: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSecurityLogInput
  }

  export type SecurityLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    action: string
    ipAddress: string
    device: string
    createdAt?: Date | string
  }

  export type SecurityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSecurityLogNestedInput
  }

  export type SecurityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityLogCreateManyInput = {
    id?: number
    userId?: number | null
    action: string
    ipAddress: string
    device: string
    createdAt?: Date | string
  }

  export type SecurityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type OTPListRelationFilter = {
    every?: OTPWhereInput
    some?: OTPWhereInput
    none?: OTPWhereInput
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type LecturerNullableScalarRelationFilter = {
    is?: LecturerWhereInput | null
    isNot?: LecturerWhereInput | null
  }

  export type CoordinatorNullableScalarRelationFilter = {
    is?: CoordinatorWhereInput | null
    isNot?: CoordinatorWhereInput | null
  }

  export type SecurityLogListRelationFilter = {
    every?: SecurityLogWhereInput
    some?: SecurityLogWhereInput
    none?: SecurityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OTPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecurityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    studentID?: SortOrder
    lecturerID?: SortOrder
    coordinatorID?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    studentID?: SortOrder
    lecturerID?: SortOrder
    coordinatorID?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    studentID?: SortOrder
    lecturerID?: SortOrder
    coordinatorID?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    studentID?: SortOrder
    lecturerID?: SortOrder
    coordinatorID?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    studentID?: SortOrder
    lecturerID?: SortOrder
    coordinatorID?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OTPCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPAvgOrderByAggregateInput = {
    code?: SortOrder
    userID?: SortOrder
  }

  export type OTPMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPSumOrderByAggregateInput = {
    code?: SortOrder
    userID?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SeminarListRelationFilter = {
    every?: SeminarWhereInput
    some?: SeminarWhereInput
    none?: SeminarWhereInput
  }

  export type SeminarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SeminarAdvisorListRelationFilter = {
    every?: SeminarAdvisorWhereInput
    some?: SeminarAdvisorWhereInput
    none?: SeminarAdvisorWhereInput
  }

  export type SeminarAssessorListRelationFilter = {
    every?: SeminarAssessorWhereInput
    some?: SeminarAssessorWhereInput
    none?: SeminarAssessorWhereInput
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type SeminarAdvisorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeminarAssessorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturerCountOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
  }

  export type LecturerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LecturerMaxOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
  }

  export type LecturerMinOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    profilePicture?: SortOrder
  }

  export type LecturerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoordinatorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
  }

  export type CoordinatorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoordinatorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
  }

  export type CoordinatorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
  }

  export type CoordinatorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSeminarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarType | EnumSeminarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarTypeFilter<$PrismaModel> | $Enums.SeminarType
  }

  export type EnumSeminarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusFilter<$PrismaModel> | $Enums.SeminarStatus
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

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type SeminarDocumentListRelationFilter = {
    every?: SeminarDocumentWhereInput
    some?: SeminarDocumentWhereInput
    none?: SeminarDocumentWhereInput
  }

  export type SeminarDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeminarCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
    studentNIM?: SortOrder
    time?: SortOrder
    room?: SortOrder
  }

  export type SeminarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeminarMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
    studentNIM?: SortOrder
    time?: SortOrder
    room?: SortOrder
  }

  export type SeminarMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
    studentNIM?: SortOrder
    time?: SortOrder
    room?: SortOrder
  }

  export type SeminarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSeminarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarType | EnumSeminarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarTypeWithAggregatesFilter<$PrismaModel> | $Enums.SeminarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarTypeFilter<$PrismaModel>
    _max?: NestedEnumSeminarTypeFilter<$PrismaModel>
  }

  export type EnumSeminarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusWithAggregatesFilter<$PrismaModel> | $Enums.SeminarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarStatusFilter<$PrismaModel>
    _max?: NestedEnumSeminarStatusFilter<$PrismaModel>
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

  export type SeminarScalarRelationFilter = {
    is?: SeminarWhereInput
    isNot?: SeminarWhereInput
  }

  export type LecturerScalarRelationFilter = {
    is?: LecturerWhereInput
    isNot?: LecturerWhereInput
  }

  export type SeminarAdvisorCountOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
  }

  export type SeminarAdvisorAvgOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
  }

  export type SeminarAdvisorMaxOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
  }

  export type SeminarAdvisorMinOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
  }

  export type SeminarAdvisorSumOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
  }

  export type SeminarAssessorCountOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
  }

  export type SeminarAssessorAvgOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
  }

  export type SeminarAssessorMaxOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
  }

  export type SeminarAssessorMinOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    lecturerNIP?: SortOrder
  }

  export type SeminarAssessorSumOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type SeminarDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileURL?: SortOrder
  }

  export type SeminarDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
  }

  export type SeminarDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileURL?: SortOrder
  }

  export type SeminarDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileURL?: SortOrder
  }

  export type SeminarDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    seminarID?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type EnumLecturerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.LecturerRole | EnumLecturerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLecturerRoleFilter<$PrismaModel> | $Enums.LecturerRole
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AssessmentSeminarIDLecturerNIPCompoundUniqueInput = {
    seminarID: number
    lecturerNIP: string
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    lecturerRole?: SortOrder
    presentationScore?: SortOrder
    masteryScore?: SortOrder
    characteristicScore?: SortOrder
    writingScore?: SortOrder
    finalScore?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    lecturerNIP?: SortOrder
    seminarID?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    id?: SortOrder
    presentationScore?: SortOrder
    masteryScore?: SortOrder
    characteristicScore?: SortOrder
    writingScore?: SortOrder
    finalScore?: SortOrder
    seminarID?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    lecturerRole?: SortOrder
    presentationScore?: SortOrder
    masteryScore?: SortOrder
    characteristicScore?: SortOrder
    writingScore?: SortOrder
    finalScore?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    lecturerNIP?: SortOrder
    seminarID?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    lecturerRole?: SortOrder
    presentationScore?: SortOrder
    masteryScore?: SortOrder
    characteristicScore?: SortOrder
    writingScore?: SortOrder
    finalScore?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    lecturerNIP?: SortOrder
    seminarID?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    id?: SortOrder
    presentationScore?: SortOrder
    masteryScore?: SortOrder
    characteristicScore?: SortOrder
    writingScore?: SortOrder
    finalScore?: SortOrder
    seminarID?: SortOrder
  }

  export type EnumLecturerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LecturerRole | EnumLecturerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLecturerRoleWithAggregatesFilter<$PrismaModel> | $Enums.LecturerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLecturerRoleFilter<$PrismaModel>
    _max?: NestedEnumLecturerRoleFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SecurityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SecurityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type OTPCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    connect?: LecturerWhereUniqueInput
  }

  export type CoordinatorCreateNestedOneWithoutUserInput = {
    create?: XOR<CoordinatorCreateWithoutUserInput, CoordinatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoordinatorCreateOrConnectWithoutUserInput
    connect?: CoordinatorWhereUniqueInput
  }

  export type SecurityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<SecurityLogCreateWithoutUserInput, SecurityLogUncheckedCreateWithoutUserInput> | SecurityLogCreateWithoutUserInput[] | SecurityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityLogCreateOrConnectWithoutUserInput | SecurityLogCreateOrConnectWithoutUserInput[]
    createMany?: SecurityLogCreateManyUserInputEnvelope
    connect?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
  }

  export type OTPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type SecurityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SecurityLogCreateWithoutUserInput, SecurityLogUncheckedCreateWithoutUserInput> | SecurityLogCreateWithoutUserInput[] | SecurityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityLogCreateOrConnectWithoutUserInput | SecurityLogCreateOrConnectWithoutUserInput[]
    createMany?: SecurityLogCreateManyUserInputEnvelope
    connect?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OTPUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUpdateOneWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    upsert?: LecturerUpsertWithoutUserInput
    disconnect?: LecturerWhereInput | boolean
    delete?: LecturerWhereInput | boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutUserInput, LecturerUpdateWithoutUserInput>, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type CoordinatorUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoordinatorCreateWithoutUserInput, CoordinatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoordinatorCreateOrConnectWithoutUserInput
    upsert?: CoordinatorUpsertWithoutUserInput
    disconnect?: CoordinatorWhereInput | boolean
    delete?: CoordinatorWhereInput | boolean
    connect?: CoordinatorWhereUniqueInput
    update?: XOR<XOR<CoordinatorUpdateToOneWithWhereWithoutUserInput, CoordinatorUpdateWithoutUserInput>, CoordinatorUncheckedUpdateWithoutUserInput>
  }

  export type SecurityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<SecurityLogCreateWithoutUserInput, SecurityLogUncheckedCreateWithoutUserInput> | SecurityLogCreateWithoutUserInput[] | SecurityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityLogCreateOrConnectWithoutUserInput | SecurityLogCreateOrConnectWithoutUserInput[]
    upsert?: SecurityLogUpsertWithWhereUniqueWithoutUserInput | SecurityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SecurityLogCreateManyUserInputEnvelope
    set?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    disconnect?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    delete?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    connect?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    update?: SecurityLogUpdateWithWhereUniqueWithoutUserInput | SecurityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SecurityLogUpdateManyWithWhereWithoutUserInput | SecurityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SecurityLogScalarWhereInput | SecurityLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OTPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type SecurityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SecurityLogCreateWithoutUserInput, SecurityLogUncheckedCreateWithoutUserInput> | SecurityLogCreateWithoutUserInput[] | SecurityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityLogCreateOrConnectWithoutUserInput | SecurityLogCreateOrConnectWithoutUserInput[]
    upsert?: SecurityLogUpsertWithWhereUniqueWithoutUserInput | SecurityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SecurityLogCreateManyUserInputEnvelope
    set?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    disconnect?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    delete?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    connect?: SecurityLogWhereUniqueInput | SecurityLogWhereUniqueInput[]
    update?: SecurityLogUpdateWithWhereUniqueWithoutUserInput | SecurityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SecurityLogUpdateManyWithWhereWithoutUserInput | SecurityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SecurityLogScalarWhereInput | SecurityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOtpInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOtpNestedInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    upsert?: UserUpsertWithoutOtpInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpInput, UserUpdateWithoutOtpInput>, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type SeminarCreateNestedManyWithoutStudentInput = {
    create?: XOR<SeminarCreateWithoutStudentInput, SeminarUncheckedCreateWithoutStudentInput> | SeminarCreateWithoutStudentInput[] | SeminarUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutStudentInput | SeminarCreateOrConnectWithoutStudentInput[]
    createMany?: SeminarCreateManyStudentInputEnvelope
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type SeminarUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SeminarCreateWithoutStudentInput, SeminarUncheckedCreateWithoutStudentInput> | SeminarCreateWithoutStudentInput[] | SeminarUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutStudentInput | SeminarCreateOrConnectWithoutStudentInput[]
    createMany?: SeminarCreateManyStudentInputEnvelope
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type SeminarUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SeminarCreateWithoutStudentInput, SeminarUncheckedCreateWithoutStudentInput> | SeminarCreateWithoutStudentInput[] | SeminarUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutStudentInput | SeminarCreateOrConnectWithoutStudentInput[]
    upsert?: SeminarUpsertWithWhereUniqueWithoutStudentInput | SeminarUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SeminarCreateManyStudentInputEnvelope
    set?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    disconnect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    delete?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    update?: SeminarUpdateWithWhereUniqueWithoutStudentInput | SeminarUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SeminarUpdateManyWithWhereWithoutStudentInput | SeminarUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type SeminarUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SeminarCreateWithoutStudentInput, SeminarUncheckedCreateWithoutStudentInput> | SeminarCreateWithoutStudentInput[] | SeminarUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutStudentInput | SeminarCreateOrConnectWithoutStudentInput[]
    upsert?: SeminarUpsertWithWhereUniqueWithoutStudentInput | SeminarUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SeminarCreateManyStudentInputEnvelope
    set?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    disconnect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    delete?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    update?: SeminarUpdateWithWhereUniqueWithoutStudentInput | SeminarUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SeminarUpdateManyWithWhereWithoutStudentInput | SeminarUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLecturerInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    connect?: UserWhereUniqueInput
  }

  export type SeminarAdvisorCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SeminarAdvisorCreateWithoutLecturerInput, SeminarAdvisorUncheckedCreateWithoutLecturerInput> | SeminarAdvisorCreateWithoutLecturerInput[] | SeminarAdvisorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutLecturerInput | SeminarAdvisorCreateOrConnectWithoutLecturerInput[]
    createMany?: SeminarAdvisorCreateManyLecturerInputEnvelope
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
  }

  export type SeminarAssessorCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SeminarAssessorCreateWithoutLecturerInput, SeminarAssessorUncheckedCreateWithoutLecturerInput> | SeminarAssessorCreateWithoutLecturerInput[] | SeminarAssessorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutLecturerInput | SeminarAssessorCreateOrConnectWithoutLecturerInput[]
    createMany?: SeminarAssessorCreateManyLecturerInputEnvelope
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
  }

  export type AssessmentCreateNestedManyWithoutLecturerInput = {
    create?: XOR<AssessmentCreateWithoutLecturerInput, AssessmentUncheckedCreateWithoutLecturerInput> | AssessmentCreateWithoutLecturerInput[] | AssessmentUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutLecturerInput | AssessmentCreateOrConnectWithoutLecturerInput[]
    createMany?: AssessmentCreateManyLecturerInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutLecturerInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    connect?: UserWhereUniqueInput
  }

  export type SeminarAdvisorUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SeminarAdvisorCreateWithoutLecturerInput, SeminarAdvisorUncheckedCreateWithoutLecturerInput> | SeminarAdvisorCreateWithoutLecturerInput[] | SeminarAdvisorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutLecturerInput | SeminarAdvisorCreateOrConnectWithoutLecturerInput[]
    createMany?: SeminarAdvisorCreateManyLecturerInputEnvelope
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
  }

  export type SeminarAssessorUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SeminarAssessorCreateWithoutLecturerInput, SeminarAssessorUncheckedCreateWithoutLecturerInput> | SeminarAssessorCreateWithoutLecturerInput[] | SeminarAssessorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutLecturerInput | SeminarAssessorCreateOrConnectWithoutLecturerInput[]
    createMany?: SeminarAssessorCreateManyLecturerInputEnvelope
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<AssessmentCreateWithoutLecturerInput, AssessmentUncheckedCreateWithoutLecturerInput> | AssessmentCreateWithoutLecturerInput[] | AssessmentUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutLecturerInput | AssessmentCreateOrConnectWithoutLecturerInput[]
    createMany?: AssessmentCreateManyLecturerInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutLecturerNestedInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    upsert?: UserUpsertWithoutLecturerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLecturerInput, UserUpdateWithoutLecturerInput>, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type SeminarAdvisorUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SeminarAdvisorCreateWithoutLecturerInput, SeminarAdvisorUncheckedCreateWithoutLecturerInput> | SeminarAdvisorCreateWithoutLecturerInput[] | SeminarAdvisorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutLecturerInput | SeminarAdvisorCreateOrConnectWithoutLecturerInput[]
    upsert?: SeminarAdvisorUpsertWithWhereUniqueWithoutLecturerInput | SeminarAdvisorUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SeminarAdvisorCreateManyLecturerInputEnvelope
    set?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    disconnect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    delete?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    update?: SeminarAdvisorUpdateWithWhereUniqueWithoutLecturerInput | SeminarAdvisorUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SeminarAdvisorUpdateManyWithWhereWithoutLecturerInput | SeminarAdvisorUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SeminarAdvisorScalarWhereInput | SeminarAdvisorScalarWhereInput[]
  }

  export type SeminarAssessorUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SeminarAssessorCreateWithoutLecturerInput, SeminarAssessorUncheckedCreateWithoutLecturerInput> | SeminarAssessorCreateWithoutLecturerInput[] | SeminarAssessorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutLecturerInput | SeminarAssessorCreateOrConnectWithoutLecturerInput[]
    upsert?: SeminarAssessorUpsertWithWhereUniqueWithoutLecturerInput | SeminarAssessorUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SeminarAssessorCreateManyLecturerInputEnvelope
    set?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    disconnect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    delete?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    update?: SeminarAssessorUpdateWithWhereUniqueWithoutLecturerInput | SeminarAssessorUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SeminarAssessorUpdateManyWithWhereWithoutLecturerInput | SeminarAssessorUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SeminarAssessorScalarWhereInput | SeminarAssessorScalarWhereInput[]
  }

  export type AssessmentUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<AssessmentCreateWithoutLecturerInput, AssessmentUncheckedCreateWithoutLecturerInput> | AssessmentCreateWithoutLecturerInput[] | AssessmentUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutLecturerInput | AssessmentCreateOrConnectWithoutLecturerInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutLecturerInput | AssessmentUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: AssessmentCreateManyLecturerInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutLecturerInput | AssessmentUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutLecturerInput | AssessmentUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutLecturerNestedInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    upsert?: UserUpsertWithoutLecturerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLecturerInput, UserUpdateWithoutLecturerInput>, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type SeminarAdvisorUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SeminarAdvisorCreateWithoutLecturerInput, SeminarAdvisorUncheckedCreateWithoutLecturerInput> | SeminarAdvisorCreateWithoutLecturerInput[] | SeminarAdvisorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutLecturerInput | SeminarAdvisorCreateOrConnectWithoutLecturerInput[]
    upsert?: SeminarAdvisorUpsertWithWhereUniqueWithoutLecturerInput | SeminarAdvisorUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SeminarAdvisorCreateManyLecturerInputEnvelope
    set?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    disconnect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    delete?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    update?: SeminarAdvisorUpdateWithWhereUniqueWithoutLecturerInput | SeminarAdvisorUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SeminarAdvisorUpdateManyWithWhereWithoutLecturerInput | SeminarAdvisorUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SeminarAdvisorScalarWhereInput | SeminarAdvisorScalarWhereInput[]
  }

  export type SeminarAssessorUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SeminarAssessorCreateWithoutLecturerInput, SeminarAssessorUncheckedCreateWithoutLecturerInput> | SeminarAssessorCreateWithoutLecturerInput[] | SeminarAssessorUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutLecturerInput | SeminarAssessorCreateOrConnectWithoutLecturerInput[]
    upsert?: SeminarAssessorUpsertWithWhereUniqueWithoutLecturerInput | SeminarAssessorUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SeminarAssessorCreateManyLecturerInputEnvelope
    set?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    disconnect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    delete?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    update?: SeminarAssessorUpdateWithWhereUniqueWithoutLecturerInput | SeminarAssessorUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SeminarAssessorUpdateManyWithWhereWithoutLecturerInput | SeminarAssessorUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SeminarAssessorScalarWhereInput | SeminarAssessorScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<AssessmentCreateWithoutLecturerInput, AssessmentUncheckedCreateWithoutLecturerInput> | AssessmentCreateWithoutLecturerInput[] | AssessmentUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutLecturerInput | AssessmentCreateOrConnectWithoutLecturerInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutLecturerInput | AssessmentUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: AssessmentCreateManyLecturerInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutLecturerInput | AssessmentUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutLecturerInput | AssessmentUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoordinatorInput = {
    create?: XOR<UserCreateWithoutCoordinatorInput, UserUncheckedCreateWithoutCoordinatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoordinatorInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutCoordinatorInput = {
    create?: XOR<UserCreateWithoutCoordinatorInput, UserUncheckedCreateWithoutCoordinatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoordinatorInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutCoordinatorNestedInput = {
    create?: XOR<UserCreateWithoutCoordinatorInput, UserUncheckedCreateWithoutCoordinatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoordinatorInput
    upsert?: UserUpsertWithoutCoordinatorInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoordinatorInput, UserUpdateWithoutCoordinatorInput>, UserUncheckedUpdateWithoutCoordinatorInput>
  }

  export type UserUncheckedUpdateOneWithoutCoordinatorNestedInput = {
    create?: XOR<UserCreateWithoutCoordinatorInput, UserUncheckedCreateWithoutCoordinatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoordinatorInput
    upsert?: UserUpsertWithoutCoordinatorInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoordinatorInput, UserUpdateWithoutCoordinatorInput>, UserUncheckedUpdateWithoutCoordinatorInput>
  }

  export type StudentCreateNestedOneWithoutSeminarsInput = {
    create?: XOR<StudentCreateWithoutSeminarsInput, StudentUncheckedCreateWithoutSeminarsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSeminarsInput
    connect?: StudentWhereUniqueInput
  }

  export type SeminarAdvisorCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarAdvisorCreateWithoutSeminarInput, SeminarAdvisorUncheckedCreateWithoutSeminarInput> | SeminarAdvisorCreateWithoutSeminarInput[] | SeminarAdvisorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutSeminarInput | SeminarAdvisorCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarAdvisorCreateManySeminarInputEnvelope
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
  }

  export type SeminarAssessorCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarAssessorCreateWithoutSeminarInput, SeminarAssessorUncheckedCreateWithoutSeminarInput> | SeminarAssessorCreateWithoutSeminarInput[] | SeminarAssessorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutSeminarInput | SeminarAssessorCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarAssessorCreateManySeminarInputEnvelope
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
  }

  export type SeminarDocumentCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarDocumentCreateWithoutSeminarInput, SeminarDocumentUncheckedCreateWithoutSeminarInput> | SeminarDocumentCreateWithoutSeminarInput[] | SeminarDocumentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarDocumentCreateOrConnectWithoutSeminarInput | SeminarDocumentCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarDocumentCreateManySeminarInputEnvelope
    connect?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
  }

  export type AssessmentCreateNestedManyWithoutSeminarInput = {
    create?: XOR<AssessmentCreateWithoutSeminarInput, AssessmentUncheckedCreateWithoutSeminarInput> | AssessmentCreateWithoutSeminarInput[] | AssessmentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSeminarInput | AssessmentCreateOrConnectWithoutSeminarInput[]
    createMany?: AssessmentCreateManySeminarInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type SeminarAdvisorUncheckedCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarAdvisorCreateWithoutSeminarInput, SeminarAdvisorUncheckedCreateWithoutSeminarInput> | SeminarAdvisorCreateWithoutSeminarInput[] | SeminarAdvisorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutSeminarInput | SeminarAdvisorCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarAdvisorCreateManySeminarInputEnvelope
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
  }

  export type SeminarAssessorUncheckedCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarAssessorCreateWithoutSeminarInput, SeminarAssessorUncheckedCreateWithoutSeminarInput> | SeminarAssessorCreateWithoutSeminarInput[] | SeminarAssessorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutSeminarInput | SeminarAssessorCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarAssessorCreateManySeminarInputEnvelope
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
  }

  export type SeminarDocumentUncheckedCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarDocumentCreateWithoutSeminarInput, SeminarDocumentUncheckedCreateWithoutSeminarInput> | SeminarDocumentCreateWithoutSeminarInput[] | SeminarDocumentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarDocumentCreateOrConnectWithoutSeminarInput | SeminarDocumentCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarDocumentCreateManySeminarInputEnvelope
    connect?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutSeminarInput = {
    create?: XOR<AssessmentCreateWithoutSeminarInput, AssessmentUncheckedCreateWithoutSeminarInput> | AssessmentCreateWithoutSeminarInput[] | AssessmentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSeminarInput | AssessmentCreateOrConnectWithoutSeminarInput[]
    createMany?: AssessmentCreateManySeminarInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type EnumSeminarTypeFieldUpdateOperationsInput = {
    set?: $Enums.SeminarType
  }

  export type EnumSeminarStatusFieldUpdateOperationsInput = {
    set?: $Enums.SeminarStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateOneRequiredWithoutSeminarsNestedInput = {
    create?: XOR<StudentCreateWithoutSeminarsInput, StudentUncheckedCreateWithoutSeminarsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSeminarsInput
    upsert?: StudentUpsertWithoutSeminarsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSeminarsInput, StudentUpdateWithoutSeminarsInput>, StudentUncheckedUpdateWithoutSeminarsInput>
  }

  export type SeminarAdvisorUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarAdvisorCreateWithoutSeminarInput, SeminarAdvisorUncheckedCreateWithoutSeminarInput> | SeminarAdvisorCreateWithoutSeminarInput[] | SeminarAdvisorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutSeminarInput | SeminarAdvisorCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarAdvisorUpsertWithWhereUniqueWithoutSeminarInput | SeminarAdvisorUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarAdvisorCreateManySeminarInputEnvelope
    set?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    disconnect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    delete?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    update?: SeminarAdvisorUpdateWithWhereUniqueWithoutSeminarInput | SeminarAdvisorUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarAdvisorUpdateManyWithWhereWithoutSeminarInput | SeminarAdvisorUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarAdvisorScalarWhereInput | SeminarAdvisorScalarWhereInput[]
  }

  export type SeminarAssessorUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarAssessorCreateWithoutSeminarInput, SeminarAssessorUncheckedCreateWithoutSeminarInput> | SeminarAssessorCreateWithoutSeminarInput[] | SeminarAssessorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutSeminarInput | SeminarAssessorCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarAssessorUpsertWithWhereUniqueWithoutSeminarInput | SeminarAssessorUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarAssessorCreateManySeminarInputEnvelope
    set?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    disconnect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    delete?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    update?: SeminarAssessorUpdateWithWhereUniqueWithoutSeminarInput | SeminarAssessorUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarAssessorUpdateManyWithWhereWithoutSeminarInput | SeminarAssessorUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarAssessorScalarWhereInput | SeminarAssessorScalarWhereInput[]
  }

  export type SeminarDocumentUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarDocumentCreateWithoutSeminarInput, SeminarDocumentUncheckedCreateWithoutSeminarInput> | SeminarDocumentCreateWithoutSeminarInput[] | SeminarDocumentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarDocumentCreateOrConnectWithoutSeminarInput | SeminarDocumentCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarDocumentUpsertWithWhereUniqueWithoutSeminarInput | SeminarDocumentUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarDocumentCreateManySeminarInputEnvelope
    set?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    disconnect?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    delete?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    connect?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    update?: SeminarDocumentUpdateWithWhereUniqueWithoutSeminarInput | SeminarDocumentUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarDocumentUpdateManyWithWhereWithoutSeminarInput | SeminarDocumentUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarDocumentScalarWhereInput | SeminarDocumentScalarWhereInput[]
  }

  export type AssessmentUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<AssessmentCreateWithoutSeminarInput, AssessmentUncheckedCreateWithoutSeminarInput> | AssessmentCreateWithoutSeminarInput[] | AssessmentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSeminarInput | AssessmentCreateOrConnectWithoutSeminarInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutSeminarInput | AssessmentUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: AssessmentCreateManySeminarInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutSeminarInput | AssessmentUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutSeminarInput | AssessmentUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type SeminarAdvisorUncheckedUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarAdvisorCreateWithoutSeminarInput, SeminarAdvisorUncheckedCreateWithoutSeminarInput> | SeminarAdvisorCreateWithoutSeminarInput[] | SeminarAdvisorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAdvisorCreateOrConnectWithoutSeminarInput | SeminarAdvisorCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarAdvisorUpsertWithWhereUniqueWithoutSeminarInput | SeminarAdvisorUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarAdvisorCreateManySeminarInputEnvelope
    set?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    disconnect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    delete?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    connect?: SeminarAdvisorWhereUniqueInput | SeminarAdvisorWhereUniqueInput[]
    update?: SeminarAdvisorUpdateWithWhereUniqueWithoutSeminarInput | SeminarAdvisorUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarAdvisorUpdateManyWithWhereWithoutSeminarInput | SeminarAdvisorUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarAdvisorScalarWhereInput | SeminarAdvisorScalarWhereInput[]
  }

  export type SeminarAssessorUncheckedUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarAssessorCreateWithoutSeminarInput, SeminarAssessorUncheckedCreateWithoutSeminarInput> | SeminarAssessorCreateWithoutSeminarInput[] | SeminarAssessorUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarAssessorCreateOrConnectWithoutSeminarInput | SeminarAssessorCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarAssessorUpsertWithWhereUniqueWithoutSeminarInput | SeminarAssessorUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarAssessorCreateManySeminarInputEnvelope
    set?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    disconnect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    delete?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    connect?: SeminarAssessorWhereUniqueInput | SeminarAssessorWhereUniqueInput[]
    update?: SeminarAssessorUpdateWithWhereUniqueWithoutSeminarInput | SeminarAssessorUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarAssessorUpdateManyWithWhereWithoutSeminarInput | SeminarAssessorUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarAssessorScalarWhereInput | SeminarAssessorScalarWhereInput[]
  }

  export type SeminarDocumentUncheckedUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarDocumentCreateWithoutSeminarInput, SeminarDocumentUncheckedCreateWithoutSeminarInput> | SeminarDocumentCreateWithoutSeminarInput[] | SeminarDocumentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarDocumentCreateOrConnectWithoutSeminarInput | SeminarDocumentCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarDocumentUpsertWithWhereUniqueWithoutSeminarInput | SeminarDocumentUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarDocumentCreateManySeminarInputEnvelope
    set?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    disconnect?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    delete?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    connect?: SeminarDocumentWhereUniqueInput | SeminarDocumentWhereUniqueInput[]
    update?: SeminarDocumentUpdateWithWhereUniqueWithoutSeminarInput | SeminarDocumentUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarDocumentUpdateManyWithWhereWithoutSeminarInput | SeminarDocumentUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarDocumentScalarWhereInput | SeminarDocumentScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<AssessmentCreateWithoutSeminarInput, AssessmentUncheckedCreateWithoutSeminarInput> | AssessmentCreateWithoutSeminarInput[] | AssessmentUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutSeminarInput | AssessmentCreateOrConnectWithoutSeminarInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutSeminarInput | AssessmentUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: AssessmentCreateManySeminarInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutSeminarInput | AssessmentUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutSeminarInput | AssessmentUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type SeminarCreateNestedOneWithoutAdvisorsInput = {
    create?: XOR<SeminarCreateWithoutAdvisorsInput, SeminarUncheckedCreateWithoutAdvisorsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutAdvisorsInput
    connect?: SeminarWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutSeminarAdvisorsInput = {
    create?: XOR<LecturerCreateWithoutSeminarAdvisorsInput, LecturerUncheckedCreateWithoutSeminarAdvisorsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSeminarAdvisorsInput
    connect?: LecturerWhereUniqueInput
  }

  export type SeminarUpdateOneRequiredWithoutAdvisorsNestedInput = {
    create?: XOR<SeminarCreateWithoutAdvisorsInput, SeminarUncheckedCreateWithoutAdvisorsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutAdvisorsInput
    upsert?: SeminarUpsertWithoutAdvisorsInput
    connect?: SeminarWhereUniqueInput
    update?: XOR<XOR<SeminarUpdateToOneWithWhereWithoutAdvisorsInput, SeminarUpdateWithoutAdvisorsInput>, SeminarUncheckedUpdateWithoutAdvisorsInput>
  }

  export type LecturerUpdateOneRequiredWithoutSeminarAdvisorsNestedInput = {
    create?: XOR<LecturerCreateWithoutSeminarAdvisorsInput, LecturerUncheckedCreateWithoutSeminarAdvisorsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSeminarAdvisorsInput
    upsert?: LecturerUpsertWithoutSeminarAdvisorsInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutSeminarAdvisorsInput, LecturerUpdateWithoutSeminarAdvisorsInput>, LecturerUncheckedUpdateWithoutSeminarAdvisorsInput>
  }

  export type SeminarCreateNestedOneWithoutAssessorsInput = {
    create?: XOR<SeminarCreateWithoutAssessorsInput, SeminarUncheckedCreateWithoutAssessorsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutAssessorsInput
    connect?: SeminarWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutSeminarAssessorsInput = {
    create?: XOR<LecturerCreateWithoutSeminarAssessorsInput, LecturerUncheckedCreateWithoutSeminarAssessorsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSeminarAssessorsInput
    connect?: LecturerWhereUniqueInput
  }

  export type SeminarUpdateOneRequiredWithoutAssessorsNestedInput = {
    create?: XOR<SeminarCreateWithoutAssessorsInput, SeminarUncheckedCreateWithoutAssessorsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutAssessorsInput
    upsert?: SeminarUpsertWithoutAssessorsInput
    connect?: SeminarWhereUniqueInput
    update?: XOR<XOR<SeminarUpdateToOneWithWhereWithoutAssessorsInput, SeminarUpdateWithoutAssessorsInput>, SeminarUncheckedUpdateWithoutAssessorsInput>
  }

  export type LecturerUpdateOneRequiredWithoutSeminarAssessorsNestedInput = {
    create?: XOR<LecturerCreateWithoutSeminarAssessorsInput, LecturerUncheckedCreateWithoutSeminarAssessorsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSeminarAssessorsInput
    upsert?: LecturerUpsertWithoutSeminarAssessorsInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutSeminarAssessorsInput, LecturerUpdateWithoutSeminarAssessorsInput>, LecturerUncheckedUpdateWithoutSeminarAssessorsInput>
  }

  export type SeminarCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<SeminarCreateWithoutDocumentsInput, SeminarUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutDocumentsInput
    connect?: SeminarWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type SeminarUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<SeminarCreateWithoutDocumentsInput, SeminarUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutDocumentsInput
    upsert?: SeminarUpsertWithoutDocumentsInput
    connect?: SeminarWhereUniqueInput
    update?: XOR<XOR<SeminarUpdateToOneWithWhereWithoutDocumentsInput, SeminarUpdateWithoutDocumentsInput>, SeminarUncheckedUpdateWithoutDocumentsInput>
  }

  export type LecturerCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<LecturerCreateWithoutAssessmentsInput, LecturerUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutAssessmentsInput
    connect?: LecturerWhereUniqueInput
  }

  export type SeminarCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<SeminarCreateWithoutAssessmentsInput, SeminarUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutAssessmentsInput
    connect?: SeminarWhereUniqueInput
  }

  export type EnumLecturerRoleFieldUpdateOperationsInput = {
    set?: $Enums.LecturerRole
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LecturerUpdateOneWithoutAssessmentsNestedInput = {
    create?: XOR<LecturerCreateWithoutAssessmentsInput, LecturerUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutAssessmentsInput
    upsert?: LecturerUpsertWithoutAssessmentsInput
    disconnect?: LecturerWhereInput | boolean
    delete?: LecturerWhereInput | boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutAssessmentsInput, LecturerUpdateWithoutAssessmentsInput>, LecturerUncheckedUpdateWithoutAssessmentsInput>
  }

  export type SeminarUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<SeminarCreateWithoutAssessmentsInput, SeminarUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutAssessmentsInput
    upsert?: SeminarUpsertWithoutAssessmentsInput
    connect?: SeminarWhereUniqueInput
    update?: XOR<XOR<SeminarUpdateToOneWithWhereWithoutAssessmentsInput, SeminarUpdateWithoutAssessmentsInput>, SeminarUncheckedUpdateWithoutAssessmentsInput>
  }

  export type UserCreateNestedOneWithoutSecurityLogInput = {
    create?: XOR<UserCreateWithoutSecurityLogInput, UserUncheckedCreateWithoutSecurityLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSecurityLogNestedInput = {
    create?: XOR<UserCreateWithoutSecurityLogInput, UserUncheckedCreateWithoutSecurityLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityLogInput
    upsert?: UserUpsertWithoutSecurityLogInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecurityLogInput, UserUpdateWithoutSecurityLogInput>, UserUncheckedUpdateWithoutSecurityLogInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSeminarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarType | EnumSeminarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarTypeFilter<$PrismaModel> | $Enums.SeminarType
  }

  export type NestedEnumSeminarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusFilter<$PrismaModel> | $Enums.SeminarStatus
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

  export type NestedEnumSeminarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarType | EnumSeminarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarType[] | ListEnumSeminarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarTypeWithAggregatesFilter<$PrismaModel> | $Enums.SeminarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarTypeFilter<$PrismaModel>
    _max?: NestedEnumSeminarTypeFilter<$PrismaModel>
  }

  export type NestedEnumSeminarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusWithAggregatesFilter<$PrismaModel> | $Enums.SeminarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarStatusFilter<$PrismaModel>
    _max?: NestedEnumSeminarStatusFilter<$PrismaModel>
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

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumLecturerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.LecturerRole | EnumLecturerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLecturerRoleFilter<$PrismaModel> | $Enums.LecturerRole
  }

  export type NestedEnumLecturerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LecturerRole | EnumLecturerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LecturerRole[] | ListEnumLecturerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLecturerRoleWithAggregatesFilter<$PrismaModel> | $Enums.LecturerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLecturerRoleFilter<$PrismaModel>
    _max?: NestedEnumLecturerRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OTPCreateWithoutUserInput = {
    id?: string
    code: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPUncheckedCreateWithoutUserInput = {
    id?: string
    code: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPCreateOrConnectWithoutUserInput = {
    where: OTPWhereUniqueInput
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPCreateManyUserInputEnvelope = {
    data: OTPCreateManyUserInput | OTPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutUserInput = {
    nim: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    seminars?: SeminarCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number
    nim: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    seminars?: SeminarUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type LecturerCreateWithoutUserInput = {
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    seminarAdvisors?: SeminarAdvisorCreateNestedManyWithoutLecturerInput
    seminarAssessors?: SeminarAssessorCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutUserInput = {
    id?: number
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    seminarAdvisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutLecturerInput
    seminarAssessors?: SeminarAssessorUncheckedCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutUserInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type CoordinatorCreateWithoutUserInput = {
    name: string
    profilePicture?: string | null
  }

  export type CoordinatorUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    profilePicture?: string | null
  }

  export type CoordinatorCreateOrConnectWithoutUserInput = {
    where: CoordinatorWhereUniqueInput
    create: XOR<CoordinatorCreateWithoutUserInput, CoordinatorUncheckedCreateWithoutUserInput>
  }

  export type SecurityLogCreateWithoutUserInput = {
    action: string
    ipAddress: string
    device: string
    createdAt?: Date | string
  }

  export type SecurityLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    ipAddress: string
    device: string
    createdAt?: Date | string
  }

  export type SecurityLogCreateOrConnectWithoutUserInput = {
    where: SecurityLogWhereUniqueInput
    create: XOR<SecurityLogCreateWithoutUserInput, SecurityLogUncheckedCreateWithoutUserInput>
  }

  export type SecurityLogCreateManyUserInputEnvelope = {
    data: SecurityLogCreateManyUserInput | SecurityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OTPUpsertWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    update: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPUpdateWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    data: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
  }

  export type OTPUpdateManyWithWhereWithoutUserInput = {
    where: OTPScalarWhereInput
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyWithoutUserInput>
  }

  export type OTPScalarWhereInput = {
    AND?: OTPScalarWhereInput | OTPScalarWhereInput[]
    OR?: OTPScalarWhereInput[]
    NOT?: OTPScalarWhereInput | OTPScalarWhereInput[]
    id?: StringFilter<"OTP"> | string
    code?: IntFilter<"OTP"> | number
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    userID?: IntFilter<"OTP"> | number
    createdAt?: DateTimeFilter<"OTP"> | Date | string
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    seminars?: SeminarUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    seminars?: SeminarUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type LecturerUpsertWithoutUserInput = {
    update: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutUserInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUpdateWithoutUserInput = {
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    seminarAdvisors?: SeminarAdvisorUpdateManyWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    seminarAdvisors?: SeminarAdvisorUncheckedUpdateManyWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUncheckedUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type CoordinatorUpsertWithoutUserInput = {
    update: XOR<CoordinatorUpdateWithoutUserInput, CoordinatorUncheckedUpdateWithoutUserInput>
    create: XOR<CoordinatorCreateWithoutUserInput, CoordinatorUncheckedCreateWithoutUserInput>
    where?: CoordinatorWhereInput
  }

  export type CoordinatorUpdateToOneWithWhereWithoutUserInput = {
    where?: CoordinatorWhereInput
    data: XOR<CoordinatorUpdateWithoutUserInput, CoordinatorUncheckedUpdateWithoutUserInput>
  }

  export type CoordinatorUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoordinatorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: SecurityLogWhereUniqueInput
    update: XOR<SecurityLogUpdateWithoutUserInput, SecurityLogUncheckedUpdateWithoutUserInput>
    create: XOR<SecurityLogCreateWithoutUserInput, SecurityLogUncheckedCreateWithoutUserInput>
  }

  export type SecurityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: SecurityLogWhereUniqueInput
    data: XOR<SecurityLogUpdateWithoutUserInput, SecurityLogUncheckedUpdateWithoutUserInput>
  }

  export type SecurityLogUpdateManyWithWhereWithoutUserInput = {
    where: SecurityLogScalarWhereInput
    data: XOR<SecurityLogUpdateManyMutationInput, SecurityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type SecurityLogScalarWhereInput = {
    AND?: SecurityLogScalarWhereInput | SecurityLogScalarWhereInput[]
    OR?: SecurityLogScalarWhereInput[]
    NOT?: SecurityLogScalarWhereInput | SecurityLogScalarWhereInput[]
    id?: IntFilter<"SecurityLog"> | number
    userId?: IntNullableFilter<"SecurityLog"> | number | null
    action?: StringFilter<"SecurityLog"> | string
    ipAddress?: StringFilter<"SecurityLog"> | string
    device?: StringFilter<"SecurityLog"> | string
    createdAt?: DateTimeFilter<"SecurityLog"> | Date | string
  }

  export type UserCreateWithoutOtpInput = {
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    student?: StudentCreateNestedOneWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    coordinator?: CoordinatorCreateNestedOneWithoutUserInput
    securityLog?: SecurityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpInput = {
    id?: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    studentID?: number | null
    lecturerID?: number | null
    coordinatorID?: number | null
    securityLog?: SecurityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
  }

  export type UserUpsertWithoutOtpInput = {
    update: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserUpdateWithoutOtpInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    coordinator?: CoordinatorUpdateOneWithoutUserNestedInput
    securityLog?: SecurityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    studentID?: NullableIntFieldUpdateOperationsInput | number | null
    lecturerID?: NullableIntFieldUpdateOperationsInput | number | null
    coordinatorID?: NullableIntFieldUpdateOperationsInput | number | null
    securityLog?: SecurityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStudentInput = {
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    otp?: OTPCreateNestedManyWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    coordinator?: CoordinatorCreateNestedOneWithoutUserInput
    securityLog?: SecurityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    lecturerID?: number | null
    coordinatorID?: number | null
    otp?: OTPUncheckedCreateNestedManyWithoutUserInput
    securityLog?: SecurityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type SeminarCreateWithoutStudentInput = {
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
    advisors?: SeminarAdvisorCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateWithoutStudentInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
    advisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorUncheckedCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentUncheckedCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarCreateOrConnectWithoutStudentInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutStudentInput, SeminarUncheckedCreateWithoutStudentInput>
  }

  export type SeminarCreateManyStudentInputEnvelope = {
    data: SeminarCreateManyStudentInput | SeminarCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    otp?: OTPUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    coordinator?: CoordinatorUpdateOneWithoutUserNestedInput
    securityLog?: SecurityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    lecturerID?: NullableIntFieldUpdateOperationsInput | number | null
    coordinatorID?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: OTPUncheckedUpdateManyWithoutUserNestedInput
    securityLog?: SecurityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeminarUpsertWithWhereUniqueWithoutStudentInput = {
    where: SeminarWhereUniqueInput
    update: XOR<SeminarUpdateWithoutStudentInput, SeminarUncheckedUpdateWithoutStudentInput>
    create: XOR<SeminarCreateWithoutStudentInput, SeminarUncheckedCreateWithoutStudentInput>
  }

  export type SeminarUpdateWithWhereUniqueWithoutStudentInput = {
    where: SeminarWhereUniqueInput
    data: XOR<SeminarUpdateWithoutStudentInput, SeminarUncheckedUpdateWithoutStudentInput>
  }

  export type SeminarUpdateManyWithWhereWithoutStudentInput = {
    where: SeminarScalarWhereInput
    data: XOR<SeminarUpdateManyMutationInput, SeminarUncheckedUpdateManyWithoutStudentInput>
  }

  export type SeminarScalarWhereInput = {
    AND?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
    OR?: SeminarScalarWhereInput[]
    NOT?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
    id?: IntFilter<"Seminar"> | number
    type?: EnumSeminarTypeFilter<"Seminar"> | $Enums.SeminarType
    title?: StringFilter<"Seminar"> | string
    status?: EnumSeminarStatusFilter<"Seminar"> | $Enums.SeminarStatus
    createdAt?: DateTimeFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeFilter<"Seminar"> | Date | string
    folderId?: StringNullableFilter<"Seminar"> | string | null
    studentNIM?: StringFilter<"Seminar"> | string
    time?: DateTimeNullableFilter<"Seminar"> | Date | string | null
    room?: StringNullableFilter<"Seminar"> | string | null
  }

  export type UserCreateWithoutLecturerInput = {
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    otp?: OTPCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    coordinator?: CoordinatorCreateNestedOneWithoutUserInput
    securityLog?: SecurityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLecturerInput = {
    id?: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    studentID?: number | null
    coordinatorID?: number | null
    otp?: OTPUncheckedCreateNestedManyWithoutUserInput
    securityLog?: SecurityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLecturerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
  }

  export type SeminarAdvisorCreateWithoutLecturerInput = {
    seminar: SeminarCreateNestedOneWithoutAdvisorsInput
  }

  export type SeminarAdvisorUncheckedCreateWithoutLecturerInput = {
    id?: number
    seminarID: number
  }

  export type SeminarAdvisorCreateOrConnectWithoutLecturerInput = {
    where: SeminarAdvisorWhereUniqueInput
    create: XOR<SeminarAdvisorCreateWithoutLecturerInput, SeminarAdvisorUncheckedCreateWithoutLecturerInput>
  }

  export type SeminarAdvisorCreateManyLecturerInputEnvelope = {
    data: SeminarAdvisorCreateManyLecturerInput | SeminarAdvisorCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type SeminarAssessorCreateWithoutLecturerInput = {
    seminar: SeminarCreateNestedOneWithoutAssessorsInput
  }

  export type SeminarAssessorUncheckedCreateWithoutLecturerInput = {
    id?: number
    seminarID: number
  }

  export type SeminarAssessorCreateOrConnectWithoutLecturerInput = {
    where: SeminarAssessorWhereUniqueInput
    create: XOR<SeminarAssessorCreateWithoutLecturerInput, SeminarAssessorUncheckedCreateWithoutLecturerInput>
  }

  export type SeminarAssessorCreateManyLecturerInputEnvelope = {
    data: SeminarAssessorCreateManyLecturerInput | SeminarAssessorCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentCreateWithoutLecturerInput = {
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    seminar: SeminarCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateWithoutLecturerInput = {
    id?: number
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    seminarID: number
  }

  export type AssessmentCreateOrConnectWithoutLecturerInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutLecturerInput, AssessmentUncheckedCreateWithoutLecturerInput>
  }

  export type AssessmentCreateManyLecturerInputEnvelope = {
    data: AssessmentCreateManyLecturerInput | AssessmentCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLecturerInput = {
    update: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLecturerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type UserUpdateWithoutLecturerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    otp?: OTPUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    coordinator?: CoordinatorUpdateOneWithoutUserNestedInput
    securityLog?: SecurityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    studentID?: NullableIntFieldUpdateOperationsInput | number | null
    coordinatorID?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: OTPUncheckedUpdateManyWithoutUserNestedInput
    securityLog?: SecurityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeminarAdvisorUpsertWithWhereUniqueWithoutLecturerInput = {
    where: SeminarAdvisorWhereUniqueInput
    update: XOR<SeminarAdvisorUpdateWithoutLecturerInput, SeminarAdvisorUncheckedUpdateWithoutLecturerInput>
    create: XOR<SeminarAdvisorCreateWithoutLecturerInput, SeminarAdvisorUncheckedCreateWithoutLecturerInput>
  }

  export type SeminarAdvisorUpdateWithWhereUniqueWithoutLecturerInput = {
    where: SeminarAdvisorWhereUniqueInput
    data: XOR<SeminarAdvisorUpdateWithoutLecturerInput, SeminarAdvisorUncheckedUpdateWithoutLecturerInput>
  }

  export type SeminarAdvisorUpdateManyWithWhereWithoutLecturerInput = {
    where: SeminarAdvisorScalarWhereInput
    data: XOR<SeminarAdvisorUpdateManyMutationInput, SeminarAdvisorUncheckedUpdateManyWithoutLecturerInput>
  }

  export type SeminarAdvisorScalarWhereInput = {
    AND?: SeminarAdvisorScalarWhereInput | SeminarAdvisorScalarWhereInput[]
    OR?: SeminarAdvisorScalarWhereInput[]
    NOT?: SeminarAdvisorScalarWhereInput | SeminarAdvisorScalarWhereInput[]
    id?: IntFilter<"SeminarAdvisor"> | number
    seminarID?: IntFilter<"SeminarAdvisor"> | number
    lecturerNIP?: StringFilter<"SeminarAdvisor"> | string
  }

  export type SeminarAssessorUpsertWithWhereUniqueWithoutLecturerInput = {
    where: SeminarAssessorWhereUniqueInput
    update: XOR<SeminarAssessorUpdateWithoutLecturerInput, SeminarAssessorUncheckedUpdateWithoutLecturerInput>
    create: XOR<SeminarAssessorCreateWithoutLecturerInput, SeminarAssessorUncheckedCreateWithoutLecturerInput>
  }

  export type SeminarAssessorUpdateWithWhereUniqueWithoutLecturerInput = {
    where: SeminarAssessorWhereUniqueInput
    data: XOR<SeminarAssessorUpdateWithoutLecturerInput, SeminarAssessorUncheckedUpdateWithoutLecturerInput>
  }

  export type SeminarAssessorUpdateManyWithWhereWithoutLecturerInput = {
    where: SeminarAssessorScalarWhereInput
    data: XOR<SeminarAssessorUpdateManyMutationInput, SeminarAssessorUncheckedUpdateManyWithoutLecturerInput>
  }

  export type SeminarAssessorScalarWhereInput = {
    AND?: SeminarAssessorScalarWhereInput | SeminarAssessorScalarWhereInput[]
    OR?: SeminarAssessorScalarWhereInput[]
    NOT?: SeminarAssessorScalarWhereInput | SeminarAssessorScalarWhereInput[]
    id?: IntFilter<"SeminarAssessor"> | number
    seminarID?: IntFilter<"SeminarAssessor"> | number
    lecturerNIP?: StringFilter<"SeminarAssessor"> | string
  }

  export type AssessmentUpsertWithWhereUniqueWithoutLecturerInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutLecturerInput, AssessmentUncheckedUpdateWithoutLecturerInput>
    create: XOR<AssessmentCreateWithoutLecturerInput, AssessmentUncheckedCreateWithoutLecturerInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutLecturerInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutLecturerInput, AssessmentUncheckedUpdateWithoutLecturerInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutLecturerInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutLecturerInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: IntFilter<"Assessment"> | number
    lecturerRole?: EnumLecturerRoleFilter<"Assessment"> | $Enums.LecturerRole
    presentationScore?: FloatNullableFilter<"Assessment"> | number | null
    masteryScore?: FloatNullableFilter<"Assessment"> | number | null
    characteristicScore?: FloatNullableFilter<"Assessment"> | number | null
    writingScore?: FloatNullableFilter<"Assessment"> | number | null
    finalScore?: FloatNullableFilter<"Assessment"> | number | null
    feedback?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    lecturerNIP?: StringFilter<"Assessment"> | string
    seminarID?: IntFilter<"Assessment"> | number
  }

  export type UserCreateWithoutCoordinatorInput = {
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    otp?: OTPCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    securityLog?: SecurityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoordinatorInput = {
    id?: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    studentID?: number | null
    lecturerID?: number | null
    otp?: OTPUncheckedCreateNestedManyWithoutUserInput
    securityLog?: SecurityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoordinatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoordinatorInput, UserUncheckedCreateWithoutCoordinatorInput>
  }

  export type UserUpsertWithoutCoordinatorInput = {
    update: XOR<UserUpdateWithoutCoordinatorInput, UserUncheckedUpdateWithoutCoordinatorInput>
    create: XOR<UserCreateWithoutCoordinatorInput, UserUncheckedCreateWithoutCoordinatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoordinatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoordinatorInput, UserUncheckedUpdateWithoutCoordinatorInput>
  }

  export type UserUpdateWithoutCoordinatorInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    otp?: OTPUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    securityLog?: SecurityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoordinatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    studentID?: NullableIntFieldUpdateOperationsInput | number | null
    lecturerID?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: OTPUncheckedUpdateManyWithoutUserNestedInput
    securityLog?: SecurityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCreateWithoutSeminarsInput = {
    nim: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSeminarsInput = {
    id?: number
    nim: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSeminarsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSeminarsInput, StudentUncheckedCreateWithoutSeminarsInput>
  }

  export type SeminarAdvisorCreateWithoutSeminarInput = {
    lecturer: LecturerCreateNestedOneWithoutSeminarAdvisorsInput
  }

  export type SeminarAdvisorUncheckedCreateWithoutSeminarInput = {
    id?: number
    lecturerNIP: string
  }

  export type SeminarAdvisorCreateOrConnectWithoutSeminarInput = {
    where: SeminarAdvisorWhereUniqueInput
    create: XOR<SeminarAdvisorCreateWithoutSeminarInput, SeminarAdvisorUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarAdvisorCreateManySeminarInputEnvelope = {
    data: SeminarAdvisorCreateManySeminarInput | SeminarAdvisorCreateManySeminarInput[]
    skipDuplicates?: boolean
  }

  export type SeminarAssessorCreateWithoutSeminarInput = {
    lecturer: LecturerCreateNestedOneWithoutSeminarAssessorsInput
  }

  export type SeminarAssessorUncheckedCreateWithoutSeminarInput = {
    id?: number
    lecturerNIP: string
  }

  export type SeminarAssessorCreateOrConnectWithoutSeminarInput = {
    where: SeminarAssessorWhereUniqueInput
    create: XOR<SeminarAssessorCreateWithoutSeminarInput, SeminarAssessorUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarAssessorCreateManySeminarInputEnvelope = {
    data: SeminarAssessorCreateManySeminarInput | SeminarAssessorCreateManySeminarInput[]
    skipDuplicates?: boolean
  }

  export type SeminarDocumentCreateWithoutSeminarInput = {
    documentType: $Enums.DocumentType
    fileName: string
    fileURL: string
  }

  export type SeminarDocumentUncheckedCreateWithoutSeminarInput = {
    id?: number
    documentType: $Enums.DocumentType
    fileName: string
    fileURL: string
  }

  export type SeminarDocumentCreateOrConnectWithoutSeminarInput = {
    where: SeminarDocumentWhereUniqueInput
    create: XOR<SeminarDocumentCreateWithoutSeminarInput, SeminarDocumentUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarDocumentCreateManySeminarInputEnvelope = {
    data: SeminarDocumentCreateManySeminarInput | SeminarDocumentCreateManySeminarInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentCreateWithoutSeminarInput = {
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateWithoutSeminarInput = {
    id?: number
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    lecturerNIP: string
  }

  export type AssessmentCreateOrConnectWithoutSeminarInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutSeminarInput, AssessmentUncheckedCreateWithoutSeminarInput>
  }

  export type AssessmentCreateManySeminarInputEnvelope = {
    data: AssessmentCreateManySeminarInput | AssessmentCreateManySeminarInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutSeminarsInput = {
    update: XOR<StudentUpdateWithoutSeminarsInput, StudentUncheckedUpdateWithoutSeminarsInput>
    create: XOR<StudentCreateWithoutSeminarsInput, StudentUncheckedCreateWithoutSeminarsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSeminarsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSeminarsInput, StudentUncheckedUpdateWithoutSeminarsInput>
  }

  export type StudentUpdateWithoutSeminarsInput = {
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSeminarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type SeminarAdvisorUpsertWithWhereUniqueWithoutSeminarInput = {
    where: SeminarAdvisorWhereUniqueInput
    update: XOR<SeminarAdvisorUpdateWithoutSeminarInput, SeminarAdvisorUncheckedUpdateWithoutSeminarInput>
    create: XOR<SeminarAdvisorCreateWithoutSeminarInput, SeminarAdvisorUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarAdvisorUpdateWithWhereUniqueWithoutSeminarInput = {
    where: SeminarAdvisorWhereUniqueInput
    data: XOR<SeminarAdvisorUpdateWithoutSeminarInput, SeminarAdvisorUncheckedUpdateWithoutSeminarInput>
  }

  export type SeminarAdvisorUpdateManyWithWhereWithoutSeminarInput = {
    where: SeminarAdvisorScalarWhereInput
    data: XOR<SeminarAdvisorUpdateManyMutationInput, SeminarAdvisorUncheckedUpdateManyWithoutSeminarInput>
  }

  export type SeminarAssessorUpsertWithWhereUniqueWithoutSeminarInput = {
    where: SeminarAssessorWhereUniqueInput
    update: XOR<SeminarAssessorUpdateWithoutSeminarInput, SeminarAssessorUncheckedUpdateWithoutSeminarInput>
    create: XOR<SeminarAssessorCreateWithoutSeminarInput, SeminarAssessorUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarAssessorUpdateWithWhereUniqueWithoutSeminarInput = {
    where: SeminarAssessorWhereUniqueInput
    data: XOR<SeminarAssessorUpdateWithoutSeminarInput, SeminarAssessorUncheckedUpdateWithoutSeminarInput>
  }

  export type SeminarAssessorUpdateManyWithWhereWithoutSeminarInput = {
    where: SeminarAssessorScalarWhereInput
    data: XOR<SeminarAssessorUpdateManyMutationInput, SeminarAssessorUncheckedUpdateManyWithoutSeminarInput>
  }

  export type SeminarDocumentUpsertWithWhereUniqueWithoutSeminarInput = {
    where: SeminarDocumentWhereUniqueInput
    update: XOR<SeminarDocumentUpdateWithoutSeminarInput, SeminarDocumentUncheckedUpdateWithoutSeminarInput>
    create: XOR<SeminarDocumentCreateWithoutSeminarInput, SeminarDocumentUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarDocumentUpdateWithWhereUniqueWithoutSeminarInput = {
    where: SeminarDocumentWhereUniqueInput
    data: XOR<SeminarDocumentUpdateWithoutSeminarInput, SeminarDocumentUncheckedUpdateWithoutSeminarInput>
  }

  export type SeminarDocumentUpdateManyWithWhereWithoutSeminarInput = {
    where: SeminarDocumentScalarWhereInput
    data: XOR<SeminarDocumentUpdateManyMutationInput, SeminarDocumentUncheckedUpdateManyWithoutSeminarInput>
  }

  export type SeminarDocumentScalarWhereInput = {
    AND?: SeminarDocumentScalarWhereInput | SeminarDocumentScalarWhereInput[]
    OR?: SeminarDocumentScalarWhereInput[]
    NOT?: SeminarDocumentScalarWhereInput | SeminarDocumentScalarWhereInput[]
    id?: IntFilter<"SeminarDocument"> | number
    seminarID?: IntFilter<"SeminarDocument"> | number
    documentType?: EnumDocumentTypeFilter<"SeminarDocument"> | $Enums.DocumentType
    fileName?: StringFilter<"SeminarDocument"> | string
    fileURL?: StringFilter<"SeminarDocument"> | string
  }

  export type AssessmentUpsertWithWhereUniqueWithoutSeminarInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutSeminarInput, AssessmentUncheckedUpdateWithoutSeminarInput>
    create: XOR<AssessmentCreateWithoutSeminarInput, AssessmentUncheckedCreateWithoutSeminarInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutSeminarInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutSeminarInput, AssessmentUncheckedUpdateWithoutSeminarInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutSeminarInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutSeminarInput>
  }

  export type SeminarCreateWithoutAdvisorsInput = {
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
    student: StudentCreateNestedOneWithoutSeminarsInput
    assessors?: SeminarAssessorCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateWithoutAdvisorsInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    studentNIM: string
    time?: Date | string | null
    room?: string | null
    assessors?: SeminarAssessorUncheckedCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentUncheckedCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarCreateOrConnectWithoutAdvisorsInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutAdvisorsInput, SeminarUncheckedCreateWithoutAdvisorsInput>
  }

  export type LecturerCreateWithoutSeminarAdvisorsInput = {
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserCreateNestedOneWithoutLecturerInput
    seminarAssessors?: SeminarAssessorCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutSeminarAdvisorsInput = {
    id?: number
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserUncheckedCreateNestedOneWithoutLecturerInput
    seminarAssessors?: SeminarAssessorUncheckedCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutSeminarAdvisorsInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutSeminarAdvisorsInput, LecturerUncheckedCreateWithoutSeminarAdvisorsInput>
  }

  export type SeminarUpsertWithoutAdvisorsInput = {
    update: XOR<SeminarUpdateWithoutAdvisorsInput, SeminarUncheckedUpdateWithoutAdvisorsInput>
    create: XOR<SeminarCreateWithoutAdvisorsInput, SeminarUncheckedCreateWithoutAdvisorsInput>
    where?: SeminarWhereInput
  }

  export type SeminarUpdateToOneWithWhereWithoutAdvisorsInput = {
    where?: SeminarWhereInput
    data: XOR<SeminarUpdateWithoutAdvisorsInput, SeminarUncheckedUpdateWithoutAdvisorsInput>
  }

  export type SeminarUpdateWithoutAdvisorsInput = {
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutSeminarsNestedInput
    assessors?: SeminarAssessorUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateWithoutAdvisorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    studentNIM?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    assessors?: SeminarAssessorUncheckedUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUncheckedUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type LecturerUpsertWithoutSeminarAdvisorsInput = {
    update: XOR<LecturerUpdateWithoutSeminarAdvisorsInput, LecturerUncheckedUpdateWithoutSeminarAdvisorsInput>
    create: XOR<LecturerCreateWithoutSeminarAdvisorsInput, LecturerUncheckedCreateWithoutSeminarAdvisorsInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutSeminarAdvisorsInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutSeminarAdvisorsInput, LecturerUncheckedUpdateWithoutSeminarAdvisorsInput>
  }

  export type LecturerUpdateWithoutSeminarAdvisorsInput = {
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutSeminarAdvisorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUncheckedUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type SeminarCreateWithoutAssessorsInput = {
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
    student: StudentCreateNestedOneWithoutSeminarsInput
    advisors?: SeminarAdvisorCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateWithoutAssessorsInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    studentNIM: string
    time?: Date | string | null
    room?: string | null
    advisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentUncheckedCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarCreateOrConnectWithoutAssessorsInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutAssessorsInput, SeminarUncheckedCreateWithoutAssessorsInput>
  }

  export type LecturerCreateWithoutSeminarAssessorsInput = {
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserCreateNestedOneWithoutLecturerInput
    seminarAdvisors?: SeminarAdvisorCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutSeminarAssessorsInput = {
    id?: number
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserUncheckedCreateNestedOneWithoutLecturerInput
    seminarAdvisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutLecturerInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutSeminarAssessorsInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutSeminarAssessorsInput, LecturerUncheckedCreateWithoutSeminarAssessorsInput>
  }

  export type SeminarUpsertWithoutAssessorsInput = {
    update: XOR<SeminarUpdateWithoutAssessorsInput, SeminarUncheckedUpdateWithoutAssessorsInput>
    create: XOR<SeminarCreateWithoutAssessorsInput, SeminarUncheckedCreateWithoutAssessorsInput>
    where?: SeminarWhereInput
  }

  export type SeminarUpdateToOneWithWhereWithoutAssessorsInput = {
    where?: SeminarWhereInput
    data: XOR<SeminarUpdateWithoutAssessorsInput, SeminarUncheckedUpdateWithoutAssessorsInput>
  }

  export type SeminarUpdateWithoutAssessorsInput = {
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutSeminarsNestedInput
    advisors?: SeminarAdvisorUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateWithoutAssessorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    studentNIM?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: SeminarAdvisorUncheckedUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUncheckedUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type LecturerUpsertWithoutSeminarAssessorsInput = {
    update: XOR<LecturerUpdateWithoutSeminarAssessorsInput, LecturerUncheckedUpdateWithoutSeminarAssessorsInput>
    create: XOR<LecturerCreateWithoutSeminarAssessorsInput, LecturerUncheckedCreateWithoutSeminarAssessorsInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutSeminarAssessorsInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutSeminarAssessorsInput, LecturerUncheckedUpdateWithoutSeminarAssessorsInput>
  }

  export type LecturerUpdateWithoutSeminarAssessorsInput = {
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutLecturerNestedInput
    seminarAdvisors?: SeminarAdvisorUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutSeminarAssessorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutLecturerNestedInput
    seminarAdvisors?: SeminarAdvisorUncheckedUpdateManyWithoutLecturerNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type SeminarCreateWithoutDocumentsInput = {
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
    student: StudentCreateNestedOneWithoutSeminarsInput
    advisors?: SeminarAdvisorCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateWithoutDocumentsInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    studentNIM: string
    time?: Date | string | null
    room?: string | null
    advisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorUncheckedCreateNestedManyWithoutSeminarInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarCreateOrConnectWithoutDocumentsInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutDocumentsInput, SeminarUncheckedCreateWithoutDocumentsInput>
  }

  export type SeminarUpsertWithoutDocumentsInput = {
    update: XOR<SeminarUpdateWithoutDocumentsInput, SeminarUncheckedUpdateWithoutDocumentsInput>
    create: XOR<SeminarCreateWithoutDocumentsInput, SeminarUncheckedCreateWithoutDocumentsInput>
    where?: SeminarWhereInput
  }

  export type SeminarUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: SeminarWhereInput
    data: XOR<SeminarUpdateWithoutDocumentsInput, SeminarUncheckedUpdateWithoutDocumentsInput>
  }

  export type SeminarUpdateWithoutDocumentsInput = {
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutSeminarsNestedInput
    advisors?: SeminarAdvisorUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    studentNIM?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: SeminarAdvisorUncheckedUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUncheckedUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type LecturerCreateWithoutAssessmentsInput = {
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserCreateNestedOneWithoutLecturerInput
    seminarAdvisors?: SeminarAdvisorCreateNestedManyWithoutLecturerInput
    seminarAssessors?: SeminarAssessorCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutAssessmentsInput = {
    id?: number
    nip: string
    name: string
    phoneNumber: string
    profilePicture?: string | null
    user?: UserUncheckedCreateNestedOneWithoutLecturerInput
    seminarAdvisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutLecturerInput
    seminarAssessors?: SeminarAssessorUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutAssessmentsInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutAssessmentsInput, LecturerUncheckedCreateWithoutAssessmentsInput>
  }

  export type SeminarCreateWithoutAssessmentsInput = {
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
    student: StudentCreateNestedOneWithoutSeminarsInput
    advisors?: SeminarAdvisorCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateWithoutAssessmentsInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    studentNIM: string
    time?: Date | string | null
    room?: string | null
    advisors?: SeminarAdvisorUncheckedCreateNestedManyWithoutSeminarInput
    assessors?: SeminarAssessorUncheckedCreateNestedManyWithoutSeminarInput
    documents?: SeminarDocumentUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarCreateOrConnectWithoutAssessmentsInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutAssessmentsInput, SeminarUncheckedCreateWithoutAssessmentsInput>
  }

  export type LecturerUpsertWithoutAssessmentsInput = {
    update: XOR<LecturerUpdateWithoutAssessmentsInput, LecturerUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<LecturerCreateWithoutAssessmentsInput, LecturerUncheckedCreateWithoutAssessmentsInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutAssessmentsInput, LecturerUncheckedUpdateWithoutAssessmentsInput>
  }

  export type LecturerUpdateWithoutAssessmentsInput = {
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutLecturerNestedInput
    seminarAdvisors?: SeminarAdvisorUpdateManyWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutAssessmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutLecturerNestedInput
    seminarAdvisors?: SeminarAdvisorUncheckedUpdateManyWithoutLecturerNestedInput
    seminarAssessors?: SeminarAssessorUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type SeminarUpsertWithoutAssessmentsInput = {
    update: XOR<SeminarUpdateWithoutAssessmentsInput, SeminarUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<SeminarCreateWithoutAssessmentsInput, SeminarUncheckedCreateWithoutAssessmentsInput>
    where?: SeminarWhereInput
  }

  export type SeminarUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: SeminarWhereInput
    data: XOR<SeminarUpdateWithoutAssessmentsInput, SeminarUncheckedUpdateWithoutAssessmentsInput>
  }

  export type SeminarUpdateWithoutAssessmentsInput = {
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutSeminarsNestedInput
    advisors?: SeminarAdvisorUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateWithoutAssessmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    studentNIM?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: SeminarAdvisorUncheckedUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUncheckedUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type UserCreateWithoutSecurityLogInput = {
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    otp?: OTPCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    coordinator?: CoordinatorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecurityLogInput = {
    id?: number
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    studentID?: number | null
    lecturerID?: number | null
    coordinatorID?: number | null
    otp?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecurityLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecurityLogInput, UserUncheckedCreateWithoutSecurityLogInput>
  }

  export type UserUpsertWithoutSecurityLogInput = {
    update: XOR<UserUpdateWithoutSecurityLogInput, UserUncheckedUpdateWithoutSecurityLogInput>
    create: XOR<UserCreateWithoutSecurityLogInput, UserUncheckedCreateWithoutSecurityLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecurityLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecurityLogInput, UserUncheckedUpdateWithoutSecurityLogInput>
  }

  export type UserUpdateWithoutSecurityLogInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    otp?: OTPUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    coordinator?: CoordinatorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecurityLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    studentID?: NullableIntFieldUpdateOperationsInput | number | null
    lecturerID?: NullableIntFieldUpdateOperationsInput | number | null
    coordinatorID?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OTPCreateManyUserInput = {
    id?: string
    code: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SecurityLogCreateManyUserInput = {
    id?: number
    action: string
    ipAddress: string
    device: string
    createdAt?: Date | string
  }

  export type OTPUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarCreateManyStudentInput = {
    id?: number
    type: $Enums.SeminarType
    title: string
    status?: $Enums.SeminarStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId?: string | null
    time?: Date | string | null
    room?: string | null
  }

  export type SeminarUpdateWithoutStudentInput = {
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: SeminarAdvisorUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: SeminarAdvisorUncheckedUpdateManyWithoutSeminarNestedInput
    assessors?: SeminarAssessorUncheckedUpdateManyWithoutSeminarNestedInput
    documents?: SeminarDocumentUncheckedUpdateManyWithoutSeminarNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSeminarTypeFieldUpdateOperationsInput | $Enums.SeminarType
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeminarAdvisorCreateManyLecturerInput = {
    id?: number
    seminarID: number
  }

  export type SeminarAssessorCreateManyLecturerInput = {
    id?: number
    seminarID: number
  }

  export type AssessmentCreateManyLecturerInput = {
    id?: number
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    seminarID: number
  }

  export type SeminarAdvisorUpdateWithoutLecturerInput = {
    seminar?: SeminarUpdateOneRequiredWithoutAdvisorsNestedInput
  }

  export type SeminarAdvisorUncheckedUpdateWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type SeminarAdvisorUncheckedUpdateManyWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type SeminarAssessorUpdateWithoutLecturerInput = {
    seminar?: SeminarUpdateOneRequiredWithoutAssessorsNestedInput
  }

  export type SeminarAssessorUncheckedUpdateWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type SeminarAssessorUncheckedUpdateManyWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type AssessmentUpdateWithoutLecturerInput = {
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seminar?: SeminarUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type AssessmentUncheckedUpdateManyWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seminarID?: IntFieldUpdateOperationsInput | number
  }

  export type SeminarAdvisorCreateManySeminarInput = {
    id?: number
    lecturerNIP: string
  }

  export type SeminarAssessorCreateManySeminarInput = {
    id?: number
    lecturerNIP: string
  }

  export type SeminarDocumentCreateManySeminarInput = {
    id?: number
    documentType: $Enums.DocumentType
    fileName: string
    fileURL: string
  }

  export type AssessmentCreateManySeminarInput = {
    id?: number
    lecturerRole: $Enums.LecturerRole
    presentationScore?: number | null
    masteryScore?: number | null
    characteristicScore?: number | null
    writingScore?: number | null
    finalScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    lecturerNIP: string
  }

  export type SeminarAdvisorUpdateWithoutSeminarInput = {
    lecturer?: LecturerUpdateOneRequiredWithoutSeminarAdvisorsNestedInput
  }

  export type SeminarAdvisorUncheckedUpdateWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarAdvisorUncheckedUpdateManyWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarAssessorUpdateWithoutSeminarInput = {
    lecturer?: LecturerUpdateOneRequiredWithoutSeminarAssessorsNestedInput
  }

  export type SeminarAssessorUncheckedUpdateWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarAssessorUncheckedUpdateManyWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarDocumentUpdateWithoutSeminarInput = {
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileURL?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarDocumentUncheckedUpdateWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileURL?: StringFieldUpdateOperationsInput | string
  }

  export type SeminarDocumentUncheckedUpdateManyWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileURL?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentUpdateWithoutSeminarInput = {
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerNIP?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentUncheckedUpdateManyWithoutSeminarInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecturerRole?: EnumLecturerRoleFieldUpdateOperationsInput | $Enums.LecturerRole
    presentationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    masteryScore?: NullableFloatFieldUpdateOperationsInput | number | null
    characteristicScore?: NullableFloatFieldUpdateOperationsInput | number | null
    writingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    finalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturerNIP?: StringFieldUpdateOperationsInput | string
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